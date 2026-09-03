# MMe-AI Free Lead Intelligence Agent

This is a free-first internal lead-generation MVP for MMe-AI.

It does **not** scrape Google Maps, LinkedIn, private apps, login pages, or CAPTCHA-protected content. It crawls public business websites you provide as seed URLs, respects basic `robots.txt` rules, extracts public contact details, scores lead fit, and exports CSV/JSON.

## What it does

- Scans public company websites and likely internal pages such as contact/about/services.
- Extracts public emails, phone numbers, WhatsApp links, and social links.
- Scores leads for MMe-AI fit using contact quality, industry relevance, workflow/automation signals, location match, and activity signals.
- Produces a prioritized Hot/Warm/Review list.
- Generates a short pitch angle for each lead.
- Exports daily CSV and JSON files.

## Daily free workflow

1. Pick one focused niche + region.
2. Collect candidate public business website URLs into a text file.
3. Run the agent.
4. Contact only the top Hot leads with personalized outreach.

Example:

```bash
npm run lead-agent -- --industry "real estate" --location "Delhi NCR" --target 50 --sources tools/lead-agent/sources.sample.txt
```

If Windows/npm strips long flags, run the CLI directly:

```bash
node tools/lead-agent/lead-agent.mjs --industry "real estate" --location "Delhi NCR" --target 50 --sources tools/lead-agent/sources.sample.txt
```

Create search queries without crawling:

```bash
npm run lead-agent -- --industry "real estate consultants" --location "Dubai" --query-pack
```

Direct version:

```bash
node tools/lead-agent/lead-agent.mjs --industry "real estate consultants" --location "Dubai" --query-pack
```

Run built-in self-test:

```bash
npm run lead-agent:self-test
```

## Output

Default output goes to:

```text
tools/lead-agent/outputs/
```

The folder is ignored by Git so private lead data is not accidentally committed.

Each lead includes:

- Priority
- Fit score
- Business name
- Website
- Location target
- Industry target
- Public emails
- Public phones
- WhatsApp links
- Social links
- Scanned pages
- Matched signals
- Pitch angle

## Quality target

For MMe-AI, use this as a practical daily operating target:

- 100 raw candidate websites collected
- 50 qualified leads exported
- 20 Hot leads reviewed manually
- 10 personalized messages sent

No tool can honestly guarantee 10 demos or 1–2 customers daily. This agent improves the quality and speed of lead discovery so the pitch/follow-up system can do its job.

## Safe limitations

- No Google Maps bulk scraping.
- No LinkedIn scraping.
- No email spam automation.
- No CAPTCHA/login bypass.
- No private data harvesting.
- No guaranteed conversion claims.

Paid APIs can be added later for search, maps/place data, enrichment, and email verification.
