import { NextResponse } from "next/server";

// Saves a demo request to the shared lead store, then notifies the team.
// Configure in Vercel (see .env.example):
//   DEMO_LEADS_WEBHOOK_URL - required. Receives each lead as JSON (Google Apps Script -> Sheet, CRM, Zapier/Make).
//   DEMO_SLACK_WEBHOOK_URL - optional. Slack incoming webhook for the shared sales channel.

const LIMITS = { name: 120, email: 200, phone: 40, industry: 60, plan: 80, message: 2000 } as const;
type Field = keyof typeof LIMITS;

function clean(value: unknown, max: number): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

// Slack treats <, > and & as markup (e.g. <!channel>), so escape visitor input.
function slackEscape(text: string): string {
  return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Honeypot: real visitors never see or fill this field.
  if (clean(body.company_website, 200)) {
    return NextResponse.json({ ok: true });
  }

  const lead = Object.fromEntries(
    (Object.keys(LIMITS) as Field[]).map((key) => [key, clean(body[key], LIMITS[key])])
  ) as Record<Field, string>;

  if (!lead.name || !lead.phone || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) {
    return NextResponse.json({ error: "Name, a valid email and phone are required" }, { status: 400 });
  }
  if (body.consent !== true) {
    return NextResponse.json({ error: "Consent is required" }, { status: 400 });
  }

  const storeUrl = process.env.DEMO_LEADS_WEBHOOK_URL;
  if (!storeUrl) {
    console.error("[demo] DEMO_LEADS_WEBHOOK_URL is not set; lead not saved");
    return NextResponse.json({ error: "Lead storage is not configured" }, { status: 503 });
  }

  const record = {
    ...lead,
    consent: true,
    submittedAt: new Date().toISOString(),
    page: clean(request.headers.get("referer"), 300),
    userAgent: clean(request.headers.get("user-agent"), 300),
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
    return NextResponse.json({ error: "Could not save your request" }, { status: 502 });
  }

  // The lead is already saved, so a failed notification must not fail the request.
  const slackUrl = process.env.DEMO_SLACK_WEBHOOK_URL;
  if (slackUrl) {
    try {
      const safe = Object.fromEntries(Object.entries(lead).map(([k, v]) => [k, slackEscape(v)])) as Record<Field, string>;
      await fetch(slackUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          text:
            `New demo request: *${safe.name}* (${safe.industry || "industry not given"})\n` +
            `${safe.email} · ${safe.phone}\n` +
            `Plan: ${safe.plan || "not selected"}\n` +
            (safe.message ? `> ${safe.message.replace(/\n/g, "\n> ")}` : ""),
        }),
        signal: AbortSignal.timeout(5_000),
      });
    } catch (err) {
      console.error("[demo] Slack notification failed", err);
    }
  }

  return NextResponse.json({ ok: true });
}
