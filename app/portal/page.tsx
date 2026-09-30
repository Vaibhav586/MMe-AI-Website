import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { redirect } from "next/navigation";
import { CalendarDays, LogOut, Mail, MessageSquare, Sparkles } from "lucide-react";
import { auth, signOut } from "@/auth";
import { Logo } from "@/components/Logo";
import { DemoModalProvider } from "@/components/DemoModalProvider";
import { DemoButton } from "@/components/DemoButton";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Your portal | MMe-AI",
  robots: { index: false, follow: false },
};

// Signed-in client portal. The session check here is the real access control: signed-out
// visitors are sent to /login. Placeholder until the product dashboard exists.
export default async function PortalPage() {
  const session = await auth();
  if (!session?.user) redirect("/login");
  const { name, email, image } = session.user;
  const firstName = name?.split(" ")[0] || "there";

  return (
    <DemoModalProvider>
      <div className="min-h-screen bg-bg">
        <header className="border-b border-white/[0.07]">
          <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6">
            <Link href="/" aria-label="MMe-AI home">
              <Logo size="sm" />
            </Link>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <button type="submit" className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-white/10">
                <LogOut className="h-3.5 w-3.5" aria-hidden="true" />
                Sign out
              </button>
            </form>
          </div>
        </header>

        <main className="mx-auto max-w-5xl px-4 py-12 sm:px-6">
          <div className="flex items-center gap-4">
            {image ? (
              <Image src={image} alt="" width={56} height={56} className="h-14 w-14 rounded-full" />
            ) : (
              <span aria-hidden="true" className="flex h-14 w-14 items-center justify-center rounded-full bg-indigo-500/20 text-lg font-bold text-indigo-200">
                {firstName[0]?.toUpperCase()}
              </span>
            )}
            <div>
              <h1 className="text-2xl font-bold text-white sm:text-3xl">Welcome, {firstName}</h1>
              <p className="text-sm text-muted">{email}</p>
            </div>
          </div>

          <section className="mt-10 rounded-2xl border border-accent/30 bg-accent/[0.06] p-6">
            <div className="flex items-start gap-3">
              <Sparkles className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden="true" />
              <div className="flex-1">
                <h2 className="text-lg font-bold text-white">Your plan: none yet</h2>
                <p className="mt-1 text-sm text-slate-300">
                  Start with a 14-day pilot on one workflow — ₹0 setup. We&apos;ll map your workflow on a 20-minute call.
                </p>
              </div>
            </div>
            <DemoButton plan="pilot" source="portal" className="glow-button mt-5 rounded-full px-6 py-3 text-sm font-semibold">
              Start my pilot
            </DemoButton>
          </section>

          <section className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
            <DemoButton source="portal-audit" className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-surface p-5 text-left hover:border-white/20">
              <CalendarDays className="h-5 w-5 text-indigo-400" aria-hidden="true" />
              <span>
                <span className="block text-sm font-semibold text-white">Book an audit call</span>
                <span className="block text-xs text-muted">20 minutes with our team</span>
              </span>
            </DemoButton>
            <WhatsAppLink location="portal" className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-surface p-5 hover:border-white/20">
              <MessageSquare className="h-5 w-5 text-emerald-400" aria-hidden="true" />
              <span>
                <span className="block text-sm font-semibold text-white">WhatsApp support</span>
                <span className="block text-xs text-muted">{SITE.businessHours}</span>
              </span>
            </WhatsAppLink>
            <a href={`mailto:${SITE.email}`} className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-surface p-5 hover:border-white/20">
              <Mail className="h-5 w-5 text-indigo-400" aria-hidden="true" />
              <span>
                <span className="block text-sm font-semibold text-white">Email us</span>
                <span className="block text-xs text-muted">{SITE.email}</span>
              </span>
            </a>
          </section>
        </main>
      </div>
    </DemoModalProvider>
  );
}
