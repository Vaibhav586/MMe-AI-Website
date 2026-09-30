import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

// Customer login: Google sign-in, JWT session in an encrypted cookie (no database yet).
// Anyone with a Google account can sign in; the first sign-in is their sign-up.
// Env (see .env.example / docs/login.md): AUTH_SECRET, AUTH_GOOGLE_ID, AUTH_GOOGLE_SECRET.
export const { handlers, auth, signIn, signOut } = NextAuth({
  providers: [Google],
  session: { strategy: "jwt", maxAge: 30 * 24 * 60 * 60 },
  pages: { signIn: "/login", error: "/login" },
  events: {
    // Record each sign-in in the shared lead store (same webhook as the audit form), so the team
    // can see who signed up. Without a database we can't tell a first sign-in from a repeat one;
    // the first row for an email is the sign-up.
    async signIn({ user }) {
      const storeUrl = process.env.DEMO_LEADS_WEBHOOK_URL;
      if (!storeUrl || !user.email) return;
      try {
        await fetch(storeUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "sign_in",
            name: user.name ?? "",
            email: user.email,
            submittedAt: new Date().toISOString(),
          }),
          signal: AbortSignal.timeout(5_000),
        });
      } catch (err) {
        console.error("[auth] failed to record sign-in", err);
      }
    },
  },
});
