import { NextResponse } from "next/server";
import { leadSchema, type Lead } from "@/lib/lead";

// Saves an audit/demo request to the shared lead store, then notifies the team.
// Configure in Vercel (see .env.example and docs/demo-leads.md):
//   DEMO_LEADS_WEBHOOK_URL - required. Receives each lead as JSON (Google Apps Script -> Sheet, CRM, Zapier/Make).
//   DEMO_SLACK_WEBHOOK_URL - optional. Slack incoming webhook for the shared sales channel.

// Simple per-IP rate limit: RATE_LIMIT requests per RATE_WINDOW_MS.
// In-memory, so it applies per server instance; enough to stop casual form spam, not a determined attacker.
const RATE_LIMIT = 5;
const RATE_WINDOW_MS = 10 * 60 * 1000;
const hits = new Map<string, number[]>();

function rateLimited(ip: string): boolean {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < RATE_WINDOW_MS);
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) {
    for (const [key, times] of hits) if (times.every((t) => now - t >= RATE_WINDOW_MS)) hits.delete(key);
  }
  return recent.length > RATE_LIMIT;
}

function clientIp(request: Request): string {
  return request.headers.get("x-forwarded-for")?.split(",")[0].trim() || request.headers.get("x-real-ip") || "unknown";
}

// Slack treats <, > and & as markup (e.g. <!channel>), so escape visitor input.
function slackEscape(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function slackText(lead: Lead): string {
  const e = (v: string | undefined) => slackEscape(v ?? "");
  return (
    `New audit request: *${e(lead.name)}*, ${e(lead.company)} (${e(lead.industry) || "industry not given"}, team ${e(lead.teamSize) || "?"})\n` +
    `${e(lead.email)} · WhatsApp ${e(lead.whatsapp)}\n` +
    `Plan: ${e(lead.plan) || "not selected"}\n` +
    (lead.message ? `> ${e(lead.message).replace(/\n/g, "\n> ")}` : "")
  );
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field. Pretend success so bots don't retry.
  if (typeof body.company_website === "string" && body.company_website.trim()) {
    return NextResponse.json({ ok: true });
  }

  if (rateLimited(clientIp(request))) {
    return NextResponse.json({ ok: false, error: "Too many requests. Please try again in a few minutes." }, { status: 429 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    const fieldErrors = Object.fromEntries(parsed.error.issues.map((i) => [String(i.path[0]), i.message]));
    return NextResponse.json({ ok: false, error: "Please check the highlighted fields", fieldErrors }, { status: 400 });
  }
  const lead = parsed.data;

  const storeUrl = process.env.DEMO_LEADS_WEBHOOK_URL;
  if (!storeUrl) {
    console.error("[demo] DEMO_LEADS_WEBHOOK_URL is not set; lead not saved");
    return NextResponse.json({ ok: false, error: "Lead storage is not configured" }, { status: 503 });
  }

  const record = {
    ...lead,
    submittedAt: new Date().toISOString(),
    page: (request.headers.get("referer") ?? "").slice(0, 300),
    userAgent: (request.headers.get("user-agent") ?? "").slice(0, 300),
  };

  try {
    const res = await fetch(storeUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(record),
      signal: AbortSignal.timeout(10_000),
    });
    if (!res.ok) throw new Error(`store responded ${res.status}`);
  } catch (err) {
    console.error("[demo] failed to save lead", err);
    return NextResponse.json({ ok: false, error: "Could not save your request" }, { status: 502 });
  }

  // The lead is already saved, so a failed notification must not fail the request.
  const slackUrl = process.env.DEMO_SLACK_WEBHOOK_URL;
  if (slackUrl) {
    try {
      await fetch(slackUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ text: slackText(lead) }),
        signal: AbortSignal.timeout(5_000),
      });
    } catch (err) {
      console.error("[demo] Slack notification failed", err);
    }
  }

  return NextResponse.json({ ok: true });
}
