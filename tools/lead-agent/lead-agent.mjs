#!/usr/bin/env node

import { mkdir, readFile, writeFile } from "node:fs/promises";
import dns from "node:dns/promises";
import net from "node:net";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DEFAULT_OUTPUT_DIR = path.join(__dirname, "outputs");
const AGENT_USER_AGENT =
  "MMeAI-Lead-Agent/0.1 (+https://www.mme-ai.com; contact: mmeai.official@gmail.com)";

const painSignals = [
  "lead",
  "crm",
  "follow up",
  "follow-up",
  "appointment",
  "booking",
  "schedule",
  "social media",
  "content",
  "report",
  "analytics",
  "property",
  "customer",
  "client",
  "consultation",
  "workflow",
  "manual",
];

const pageHints = [
  "contact",
  "about",
  "service",
  "services",
  "solutions",
  "team",
  "pricing",
  "properties",
  "projects",
  "portfolio",
];

function parseArgs(argv) {
  const options = {
    industry: "real estate consultants",
    location: "Delhi NCR",
    target: 50,
    maxPagesPerSite: 4,
    timeoutMs: 12000,
    sources: "",
    source: [],
    out: "",
    json: "",
    queryPack: false,
    selfTest: false,
  };

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (!arg.startsWith("--")) continue;

    const [rawKey, inlineValue] = arg.slice(2).split("=");
    const key = rawKey.replace(/-([a-z])/g, (_, char) => char.toUpperCase());
    const nextValue = inlineValue ?? argv[index + 1];
    const isBoolean = ["queryPack", "selfTest"].includes(key);

    if (isBoolean) {
      options[key] = true;
      continue;
    }

    if (inlineValue == null) index += 1;

    if (key === "target" || key === "maxPagesPerSite" || key === "timeoutMs") {
      options[key] = Number(nextValue);
    } else if (key === "source") {
      options.source.push(nextValue);
    } else if (key in options) {
      options[key] = nextValue;
    }
  }

  return options;
}

function normalizeWhitespace(value) {
  return value.replace(/\s+/g, " ").trim();
}

function decodeHtml(value) {
  return value
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, "\"")
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

function stripHtml(html) {
  return normalizeWhitespace(
    decodeHtml(
      html
        .replace(/<script[\s\S]*?<\/script>/gi, " ")
        .replace(/<style[\s\S]*?<\/style>/gi, " ")
        .replace(/<[^>]+>/g, " "),
    ),
  );
}

function unique(values) {
  return [...new Set(values.filter(Boolean).map((value) => value.trim()))];
}

function isBlockedHost(hostname) {
  const lower = hostname.toLowerCase();
  if (["localhost", "127.0.0.1", "::1"].includes(lower)) return true;
  if (lower.endsWith(".local")) return true;

  const ipVersion = net.isIP(lower);
  if (!ipVersion) return false;

  if (ipVersion === 6) {
    return lower === "::1" || lower.startsWith("fc") || lower.startsWith("fd");
  }

  const [a, b] = lower.split(".").map(Number);
  if (a === 10 || a === 127 || a === 0) return true;
  if (a === 169 && b === 254) return true;
  if (a === 172 && b >= 16 && b <= 31) return true;
  if (a === 192 && b === 168) return true;
  return false;
}

async function assertPublicUrl(rawUrl) {
  const url = new URL(rawUrl);
  if (!["http:", "https:"].includes(url.protocol)) {
    throw new Error(`Only http/https URLs are allowed: ${rawUrl}`);
  }

  if (isBlockedHost(url.hostname)) {
    throw new Error(`Blocked private/local host: ${url.hostname}`);
  }

  try {
    const records = await dns.lookup(url.hostname, { all: true });
    const privateAddress = records.find((record) => isBlockedHost(record.address));
    if (privateAddress) {
      throw new Error(`Host resolves to private/local address: ${url.hostname}`);
    }
  } catch (error) {
    if (String(error.message).includes("private/local")) throw error;
  }

  return url;
}

async function fetchText(rawUrl, timeoutMs) {
  const url = await assertPublicUrl(rawUrl);
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": AGENT_USER_AGENT,
        Accept: "text/html,text/plain;q=0.9,*/*;q=0.5",
      },
      redirect: "follow",
      signal: controller.signal,
    });

    const contentType = response.headers.get("content-type") || "";
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    if (!contentType.includes("text") && !contentType.includes("html")) {
      throw new Error(`Unsupported content type: ${contentType || "unknown"}`);
    }

    return await response.text();
  } finally {
    clearTimeout(timeout);
  }
}

function parseRobots(text) {
  const rules = [];
  let applies = false;

  for (const rawLine of text.split(/\r?\n/)) {
    const line = rawLine.split("#")[0].trim();
    if (!line) continue;

    const separator = line.indexOf(":");
    if (separator === -1) continue;

    const key = line.slice(0, separator).trim().toLowerCase();
    const value = line.slice(separator + 1).trim();

    if (key === "user-agent") {
      const agent = value.toLowerCase();
      applies = agent === "*" || agent.includes("mmeai");
      continue;
    }

    if (!applies) continue;

    if ((key === "allow" || key === "disallow") && value) {
      rules.push({ type: key, path: value });
    }
  }

  return rules;
}

async function getRobotsRules(origin, timeoutMs) {
  try {
    const robotsText = await fetchText(`${origin}/robots.txt`, timeoutMs);
    return parseRobots(robotsText);
  } catch {
    return [];
  }
}

function isAllowedByRobots(rawUrl, rules) {
  if (rules.length === 0) return true;

  const pathname = new URL(rawUrl).pathname || "/";
  let bestMatch = null;

  for (const rule of rules) {
    if (pathname.startsWith(rule.path)) {
      if (!bestMatch || rule.path.length > bestMatch.path.length) {
        bestMatch = rule;
      }
    }
  }

  return !bestMatch || bestMatch.type !== "disallow";
}

function extractTitle(html, fallbackDomain) {
  const title = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1];
  if (title) return normalizeWhitespace(decodeHtml(title));
  return fallbackDomain.replace(/^www\./, "");
}

function extractMetaDescription(html) {
  const meta =
    html.match(/<meta[^>]+name=["']description["'][^>]+content=["']([^"']+)["'][^>]*>/i)?.[1] ||
    html.match(/<meta[^>]+content=["']([^"']+)["'][^>]+name=["']description["'][^>]*>/i)?.[1] ||
    "";

  return normalizeWhitespace(decodeHtml(meta));
}

function extractContacts(html) {
  const mailtoEmails = [...html.matchAll(/mailto:([^"'?<>#\s]+)/gi)].map((match) =>
    decodeURIComponent(match[1]).toLowerCase(),
  );
  const inlineEmails = [
    ...html.matchAll(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g),
  ]
    .map((match) => match[0].toLowerCase())
    .filter((email) => !/\.(png|jpg|jpeg|gif|webp|svg|ico)$/i.test(email));

  const phoneMatches = [
    ...html.matchAll(/(?:\+\d{1,3}[\s.-]?)?(?:\(?\d{2,5}\)?[\s.-]?){2,5}\d{3,5}/g),
  ]
    .map((match) => normalizeWhitespace(match[0]))
    .filter((phone) => {
      const digits = phone.replace(/\D/g, "");
      return digits.length >= 8 && digits.length <= 15;
    });

  const whatsappLinks = [
    ...html.matchAll(/https?:\/\/(?:wa\.me|api\.whatsapp\.com|web\.whatsapp\.com)\/[^"'<>\s]+/gi),
  ].map((match) => match[0]);

  const socialLinks = [
    ...html.matchAll(/https?:\/\/(?:www\.)?(?:linkedin\.com|instagram\.com|facebook\.com|x\.com|twitter\.com)\/[^"'<>\s]+/gi),
  ].map((match) => match[0]);

  return {
    emails: unique([...mailtoEmails, ...inlineEmails]).slice(0, 5),
    phones: unique(phoneMatches).slice(0, 5),
    whatsappLinks: unique(whatsappLinks).slice(0, 3),
    socialLinks: unique(socialLinks).slice(0, 5),
  };
}

function extractInternalLinks(html, baseUrl, maxLinks) {
  const base = new URL(baseUrl);
  const links = [];

  for (const match of html.matchAll(/<a[^>]+href=["']([^"']+)["'][^>]*>/gi)) {
    const href = decodeHtml(match[1]);
    if (href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("#")) continue;

    try {
      const url = new URL(href, base);
      if (url.hostname.replace(/^www\./, "") !== base.hostname.replace(/^www\./, "")) continue;
      url.hash = "";
      const normalized = url.toString();
      const haystack = `${url.pathname} ${match[0]}`.toLowerCase();
      if (pageHints.some((hint) => haystack.includes(hint))) links.push(normalized);
    } catch {
      // Ignore malformed links.
    }
  }

  return unique(links).slice(0, maxLinks);
}

function findSignals(text, industry, location) {
  const lower = text.toLowerCase();
  const industryTerms = industry
    .toLowerCase()
    .split(/[\s,/+-]+/)
    .filter((term) => term.length > 2);
  const locationTerms = location
    .toLowerCase()
    .split(/[\s,/+-]+/)
    .filter((term) => term.length > 2);

  return {
    industryMatches: unique(industryTerms.filter((term) => lower.includes(term))),
    locationMatches: unique(locationTerms.filter((term) => lower.includes(term))),
    painMatches: unique(painSignals.filter((term) => lower.includes(term))),
  };
}

function scoreLead({ contacts, signals, pagesScanned, hasContactPage }) {
  let score = 10;

  if (contacts.emails.length > 0) score += 18;
  if (contacts.phones.length > 0) score += 15;
  if (contacts.whatsappLinks.length > 0) score += 10;
  if (contacts.socialLinks.length > 0) score += 8;
  if (signals.industryMatches.length > 0) score += 16;
  if (signals.locationMatches.length > 0) score += 8;
  score += Math.min(signals.painMatches.length * 5, 20);
  if (hasContactPage) score += 7;
  if (pagesScanned > 1) score += 4;

  return Math.min(score, 100);
}

function priorityFromScore(score) {
  if (score >= 75) return "Hot";
  if (score >= 58) return "Warm";
  return "Review";
}

function businessNameFromTitle(title, domain) {
  const cleaned = title
    .split(/\s+[|–—]\s+|\s+-\s+/)[0]
    .replace(/\b(home|official website|welcome)\b/gi, "")
    .trim();
  return cleaned || domain.replace(/^www\./, "");
}

function buildPitchAngle({ businessName, industry, location, signals }) {
  const pain = signals.painMatches.slice(0, 3).join(", ") || "leads, follow-ups, reporting";
  return `Approach ${businessName} with a workflow-first pitch: MMe-AI can help ${industry} businesses in ${location} centralize ${pain} inside a custom AI Business OS.`;
}

async function analyzeWebsite(sourceUrl, options) {
  const startUrl = await assertPublicUrl(sourceUrl);
  const origin = startUrl.origin;
  const domain = startUrl.hostname.replace(/^www\./, "");
  const robots = await getRobotsRules(origin, options.timeoutMs);

  if (!isAllowedByRobots(startUrl.toString(), robots)) {
    throw new Error("Blocked by robots.txt");
  }

  const homepageHtml = await fetchText(startUrl.toString(), options.timeoutMs);
  const internalLinks = extractInternalLinks(
    homepageHtml,
    startUrl.toString(),
    Math.max(options.maxPagesPerSite - 1, 0),
  );

  const pages = [{ url: startUrl.toString(), html: homepageHtml }];

  for (const pageUrl of internalLinks) {
    if (!isAllowedByRobots(pageUrl, robots)) continue;
    try {
      const html = await fetchText(pageUrl, options.timeoutMs);
      pages.push({ url: pageUrl, html });
    } catch {
      // Keep the lead if the homepage worked; internal page failures are non-fatal.
    }
  }

  const combinedHtml = pages.map((page) => page.html).join("\n");
  const combinedText = stripHtml(combinedHtml);
  const title = extractTitle(homepageHtml, domain);
  const metaDescription = extractMetaDescription(homepageHtml);
  const contacts = extractContacts(combinedHtml);
  const signals = findSignals(combinedText, options.industry, options.location);
  const hasContactPage = pages.some((page) => page.url.toLowerCase().includes("contact"));
  const score = scoreLead({
    contacts,
    signals,
    pagesScanned: pages.length,
    hasContactPage,
  });
  const businessName = businessNameFromTitle(title, domain);

  return {
    priority: priorityFromScore(score),
    score,
    businessName,
    website: startUrl.toString(),
    domain,
    targetIndustry: options.industry,
    targetLocation: options.location,
    title,
    description: metaDescription,
    emails: contacts.emails,
    phones: contacts.phones,
    whatsappLinks: contacts.whatsappLinks,
    socialLinks: contacts.socialLinks,
    pagesScanned: pages.map((page) => page.url),
    matchedSignals: [
      ...signals.industryMatches.map((signal) => `industry:${signal}`),
      ...signals.locationMatches.map((signal) => `location:${signal}`),
      ...signals.painMatches.map((signal) => `pain:${signal}`),
    ],
    pitchAngle: buildPitchAngle({
      businessName,
      industry: options.industry,
      location: options.location,
      signals,
    }),
  };
}

function buildQueryPack(industry, location) {
  const base = `"${industry}" "${location}"`;
  return [
    `${base} "contact" "WhatsApp"`,
    `${base} "services" "email"`,
    `${base} "about us" "contact"`,
    `${base} "lead" "property" "contact"`,
    `${base} "Instagram" "contact"`,
    `site:.com ${base} "contact us"`,
    `site:.in ${base} "contact us"`,
    `${industry} ${location} business website contact email`,
  ];
}

async function readSources(options) {
  const sources = [...options.source];

  if (options.sources) {
    const absolutePath = path.resolve(options.sources);
    const file = await readFile(absolutePath, "utf8");
    sources.push(
      ...file
        .split(/\r?\n/)
        .map((line) => line.trim())
        .filter((line) => line && !line.startsWith("#")),
    );
  }

  return unique(sources);
}

function csvCell(value) {
  const text = Array.isArray(value) ? value.join(" | ") : String(value ?? "");
  return `"${text.replace(/"/g, "\"\"")}"`;
}

function toCsv(leads) {
  const headers = [
    "priority",
    "score",
    "businessName",
    "website",
    "targetIndustry",
    "targetLocation",
    "emails",
    "phones",
    "whatsappLinks",
    "socialLinks",
    "pagesScanned",
    "matchedSignals",
    "pitchAngle",
  ];

  return [
    headers.map(csvCell).join(","),
    ...leads.map((lead) => headers.map((header) => csvCell(lead[header])).join(",")),
  ].join("\n");
}

function todayStamp() {
  return new Date().toISOString().slice(0, 10);
}

async function writeOutputs(leads, errors, options) {
  const outputDir = DEFAULT_OUTPUT_DIR;
  await mkdir(outputDir, { recursive: true });

  const baseName = `mme-ai-leads-${todayStamp()}-${options.industry
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")}`;
  const csvPath = path.resolve(options.out || path.join(outputDir, `${baseName}.csv`));
  const jsonPath = path.resolve(options.json || path.join(outputDir, `${baseName}.json`));

  await writeFile(csvPath, toCsv(leads), "utf8");
  await writeFile(
    jsonPath,
    JSON.stringify(
      {
        generatedAt: new Date().toISOString(),
        target: {
          industry: options.industry,
          location: options.location,
          requestedLeads: options.target,
        },
        summary: {
          exported: leads.length,
          hot: leads.filter((lead) => lead.priority === "Hot").length,
          warm: leads.filter((lead) => lead.priority === "Warm").length,
          review: leads.filter((lead) => lead.priority === "Review").length,
          errors: errors.length,
        },
        leads,
        errors,
      },
      null,
      2,
    ),
    "utf8",
  );

  return { csvPath, jsonPath };
}

async function runSelfTest() {
  const sampleHtml = `
    <html>
      <head>
        <title>Prime Estates Delhi NCR - Real Estate Consultants</title>
        <meta name="description" content="Real estate consultants helping property buyers with leads, property tours, reports and customer follow-up.">
      </head>
      <body>
        <a href="/contact">Contact</a>
        <a href="mailto:sales@primeestates.example">Email</a>
        <a href="https://wa.me/918888888888">WhatsApp</a>
        <a href="https://www.instagram.com/primeestates">Instagram</a>
        Call +91 88888 88888 for property consultation and scheduling.
      </body>
    </html>
  `;

  const contacts = extractContacts(sampleHtml);
  const signals = findSignals(stripHtml(sampleHtml), "real estate consultants", "Delhi NCR");
  const score = scoreLead({
    contacts,
    signals,
    pagesScanned: 2,
    hasContactPage: true,
  });

  if (contacts.emails[0] !== "sales@primeestates.example") {
    throw new Error("Self-test failed: email extraction");
  }
  if (!contacts.whatsappLinks.length) {
    throw new Error("Self-test failed: WhatsApp extraction");
  }
  if (score < 75) {
    throw new Error(`Self-test failed: expected Hot score, got ${score}`);
  }

  console.log("Lead agent self-test passed.");
  console.log(
    JSON.stringify(
      {
        extractedEmail: contacts.emails[0],
        extractedPhone: contacts.phones[0],
        extractedWhatsApp: contacts.whatsappLinks[0],
        score,
        priority: priorityFromScore(score),
      },
      null,
      2,
    ),
  );
}

async function main() {
  const options = parseArgs(process.argv.slice(2));

  if (options.selfTest) {
    await runSelfTest();
    return;
  }

  if (options.queryPack) {
    console.log(`High-intent search query pack for ${options.industry} in ${options.location}:`);
    for (const query of buildQueryPack(options.industry, options.location)) {
      console.log(`- ${query}`);
    }
    return;
  }

  const sources = await readSources(options);

  if (sources.length === 0) {
    console.log("No source URLs provided yet.");
    console.log("");
    console.log("Free mode needs public business website URLs as seeds.");
    console.log("Use this query pack to find candidate websites, then save URLs into a sources file:");
    console.log("");
    for (const query of buildQueryPack(options.industry, options.location)) {
      console.log(`- ${query}`);
    }
    console.log("");
    console.log(
      "Then run: npm run lead-agent -- --industry \"real estate\" --location \"Delhi NCR\" --target 50 --sources path/to/sources.txt",
    );
    return;
  }

  const leads = [];
  const errors = [];

  console.log(
    `Scanning ${sources.length} source website(s) for ${options.industry} leads in ${options.location}...`,
  );

  for (const source of sources) {
    try {
      const lead = await analyzeWebsite(source, options);
      leads.push(lead);
      console.log(`${lead.priority.padEnd(6)} ${String(lead.score).padStart(3)} ${lead.domain}`);
    } catch (error) {
      errors.push({ source, error: error.message });
      console.log(`Skip   --- ${source} (${error.message})`);
    }
  }

  const deduped = [];
  const seenDomains = new Set();
  for (const lead of leads.sort((a, b) => b.score - a.score)) {
    if (seenDomains.has(lead.domain)) continue;
    seenDomains.add(lead.domain);
    deduped.push(lead);
  }

  const selected = deduped.slice(0, options.target);
  const output = await writeOutputs(selected, errors, options);

  console.log("");
  console.log("Lead agent run complete.");
  console.log(`Exported: ${selected.length}`);
  console.log(`Hot: ${selected.filter((lead) => lead.priority === "Hot").length}`);
  console.log(`Warm: ${selected.filter((lead) => lead.priority === "Warm").length}`);
  console.log(`Review: ${selected.filter((lead) => lead.priority === "Review").length}`);
  console.log(`Errors/skipped: ${errors.length}`);
  console.log(`CSV: ${output.csvPath}`);
  console.log(`JSON: ${output.jsonPath}`);

  if (selected.length < options.target) {
    console.log("");
    console.log(
      `Quality note: only ${selected.length}/${options.target} leads exported because free mode only scores the source websites provided.`,
    );
  }
}

main().catch((error) => {
  console.error(`Lead agent failed: ${error.message}`);
  process.exitCode = 1;
});
