import type { Metadata } from "next";
import Link from "next/link";
import { redirect } from "next/navigation";
import { auth, signIn } from "@/auth";
import { Logo } from "@/components/Logo";

export const metadata: Metadata = {
  title: "Log in | MMe-AI",
  robots: { index: false, follow: false },
};

// Auth.js redirects here with ?error=<code> when sign-in fails.
const ERRORS: Record<string, string> = {
  AccessDenied: "Access was denied. Please try another Google account.",
  Configuration: "Sign-in isn't set up correctly yet. Please contact us on WhatsApp or email.",
  OAuthAccountNotLinked: "This email is linked to a different sign-in method.",
};

// Without these, Auth.js would send visitors to Google with client_id=undefined (Google error 401 invalid_client).
const googleConfigured = Boolean(process.env.AUTH_GOOGLE_ID && process.env.AUTH_GOOGLE_SECRET);

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  if (await auth()) redirect("/portal");
  const { error } = await searchParams;
  const errorMessage = !googleConfigured
    ? ERRORS.Configuration
    : error
      ? (ERRORS[error] ?? "Something went wrong signing you in. Please try again.")
      : "";

  return (
    <main className="flex min-h-screen items-center justify-center bg-bg px-4 py-16">
      <div className="w-full max-w-sm">
        <Link href="/" aria-label="MMe-AI home" className="mx-auto mb-8 flex w-fit">
          <Logo />
        </Link>
        <div className="rounded-2xl border border-white/10 bg-surface p-7 text-center shadow-2xl">
          <h1 className="text-2xl font-bold text-white">Log in to MMe-AI</h1>
          <p className="mt-2 text-sm text-muted">New here? Signing in with Google creates your account.</p>

          {errorMessage && (
            <p role="alert" className="mt-5 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-200">
              {errorMessage}
            </p>
          )}

          <form
            className="mt-6"
            action={async () => {
              "use server";
              if (!googleConfigured) redirect("/login?error=Configuration");
              await signIn("google", { redirectTo: "/portal" });
            }}
          >
            <button
              type="submit"
              disabled={!googleConfigured}
              className="flex w-full items-center justify-center gap-3 rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition-colors hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-50"
            >
              <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.27-4.74 3.27-8.1z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.1a6.6 6.6 0 0 1 0-4.2V7.06H2.18a11 11 0 0 0 0 9.88l3.66-2.84z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.2 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.06l3.66 2.84C6.71 7.3 9.14 5.38 12 5.38z" />
              </svg>
              Continue with Google
            </button>
          </form>

          <p className="mt-6 text-[11px] leading-relaxed text-muted">
            By continuing you agree to our{" "}
            <Link href="/terms-of-service" className="underline hover:text-white">Terms</Link> and{" "}
            <Link href="/privacy-policy" className="underline hover:text-white">Privacy Policy</Link>.
          </p>
        </div>
      </div>
    </main>
  );
}
