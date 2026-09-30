# Customer login

`/login` offers "Continue with Google" (Auth.js, `auth.ts`). Anyone with a Google account can sign in; the first sign-in is their sign-up. Signed-in users land on `/portal`; signed-out visitors who open `/portal` are sent to `/login`.

Sessions are encrypted JWT cookies (30 days), so no database is needed yet. Each sign-in is also POSTed to `DEMO_LEADS_WEBHOOK_URL` as a row with `type: "sign_in"`, `name`, `email`, `submittedAt`, so sign-ups show up in the same Sheet/CRM as audit requests. The first row for an email is the sign-up.

## Setup (about 10 minutes)

1. **Google Cloud Console** → create or pick a project (owned by a company account) → *APIs & Services* → *OAuth consent screen*: user type **External**, app name "MMe-AI", support email `hello@mme-ai.com`, add your domain `mme-ai.com`. Scopes: the defaults (`openid`, `email`, `profile`).
2. *Credentials* → *Create credentials* → *OAuth client ID* → **Web application**. Add these **Authorized redirect URIs**:
   - `https://www.mme-ai.com/api/auth/callback/google`
   - `http://localhost:3000/api/auth/callback/google` and `http://localhost:3001/api/auth/callback/google` (local development)
   - Vercel preview URLs are not supported by Google's exact-match redirect list; test sign-in on production or localhost.
3. Copy the client ID and secret into `AUTH_GOOGLE_ID` and `AUTH_GOOGLE_SECRET` (Vercel env vars and `.env.local`).
4. Set `AUTH_SECRET` to a random value: `npx auth secret` or `openssl rand -base64 32`. Use a different value per environment and never commit it.
5. Publish the OAuth consent screen (while in "Testing", only listed test users can sign in).

## When to add a database

Add one (e.g. Neon/Vercel Postgres or Supabase with the Auth.js adapter) when the portal needs per-customer data: their plan, workflows, invoices. Until then the portal shows the Google profile and next steps only.
