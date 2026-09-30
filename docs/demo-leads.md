# Demo request leads

The "Book a demo" form posts to `/api/demo`, which:

1. Validates the submission (name, email, phone, and consent are required).
2. Saves it by POSTing JSON to `DEMO_LEADS_WEBHOOK_URL`. If this fails, the visitor sees an error and a fallback email link, so no lead is silently lost.
3. Posts a message to `DEMO_SLACK_WEBHOOK_URL` (optional) for the shared sales channel.

Each record contains: `name, email, phone, industry, plan, message, consent, submittedAt, page, userAgent`.

## Option A: Google Sheet (free, about 10 minutes)

1. Create a Sheet owned by a company Google account (not a personal one) and share it with the sales team.
2. Add a header row: `submittedAt | name | email | phone | industry | plan | message | page | userAgent`
3. Open Extensions > Apps Script and paste:

```js
const COLUMNS = ["submittedAt", "name", "email", "phone", "industry", "plan", "message", "page", "userAgent"];

function doPost(e) {
  const lead = JSON.parse(e.postData.contents);
  // A leading ' stops values like "=HYPERLINK(...)" from being run as formulas.
  const row = COLUMNS.map((k) => {
    const v = String(lead[k] ?? "");
    return /^[=+\-@]/.test(v) ? "'" + v : v;
  });
  SpreadsheetApp.getActiveSpreadsheet().getSheets()[0].appendRow(row);
  return ContentService.createTextOutput(JSON.stringify({ ok: true })).setMimeType(ContentService.MimeType.JSON);
}
```

4. Deploy > New deployment > Web app. Set "Execute as: Me" and "Who has access: Anyone". Copy the `/exec` URL.
5. In Vercel, set `DEMO_LEADS_WEBHOOK_URL` to that URL and redeploy.

The `/exec` URL works as a write key. Keep it only in Vercel env vars, never in client code or the repo.

## Option B: CRM or automation tool

Point `DEMO_LEADS_WEBHOOK_URL` at a HubSpot, Zapier, or Make "catch webhook" URL that accepts JSON.

## Slack

Create an incoming webhook for the shared sales channel (Slack > Apps > Incoming Webhooks) and set `DEMO_SLACK_WEBHOOK_URL`.

## Testing

Submit the form on a Vercel preview deployment, then check that a row appears in the Sheet and a message appears in Slack.
