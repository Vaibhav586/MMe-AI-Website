import type { Metadata } from "next";
import { CheckCircle2, MessageSquare } from "lucide-react";
import { SiteChrome } from "@/components/SiteChrome";
import { CalInline } from "@/components/CalInline";
import { SITE } from "@/lib/site";
import { WhatsAppLink } from "@/components/WhatsAppLink";

export const metadata: Metadata = {
  title: "Thank you | MMe-AI",
  robots: { index: false, follow: false },
};

// Shown after a successful audit request. Kept out of the sitemap and disallowed in robots.txt.
export default function ThankYouPage() {
  const calLink = process.env.NEXT_PUBLIC_CAL_LINK ?? "";
  return (
    <SiteChrome>
      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-emerald-500/30 bg-emerald-500/20 text-emerald-400">
            <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
          </div>
          <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            Thanks — we&apos;ll WhatsApp you within 2 working hours.
          </h1>
          <p className="mt-4 text-base text-slate-300">
            {calLink ? "Want to skip the wait? Pick a time for your 20-minute audit call below." : "Want to talk sooner? Message us on WhatsApp."}
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-4xl">
          {calLink ? (
            <CalInline calLink={calLink} />
          ) : (
            <div className="flex flex-col items-center gap-3 text-sm text-slate-300">
              <WhatsAppLink
                location="thank-you"
                className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500"
              >
                <MessageSquare className="h-4 w-4" aria-hidden="true" />
                Chat on WhatsApp
              </WhatsAppLink>
              <span>
                or email <a href={`mailto:${SITE.email}`} className="text-indigo-300 underline">{SITE.email}</a>
              </span>
            </div>
          )}
        </div>
      </section>
    </SiteChrome>
  );
}
