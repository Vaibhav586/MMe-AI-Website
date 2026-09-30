import Link from "next/link";
import { ArrowLeft, Shield } from "lucide-react";
import { Logo } from "@/components/Logo";
import { SITE } from "@/lib/site";

type LegalSection = {
  title: string;
  body: string[];
};

type LegalDocumentProps = {
  title: string;
  description: string;
  sections: LegalSection[];
};


export function LegalDocument({
  title,
  description,
  sections,
}: LegalDocumentProps) {
  return (
    <main className="min-h-screen bg-bg px-5 py-10 text-slate-200 sm:px-8 lg:px-12 selection:bg-indigo-500/30 selection:text-white">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-slate-300 transition-colors hover:bg-white/[0.08] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to MMe-AI</span>
          </Link>

          <Link href="/" aria-label="MMe-AI home">
            <Logo size="sm" />
          </Link>
        </div>

        <section className="mt-8 rounded-2xl border border-indigo-500/20 bg-surface/90 p-6 shadow-2xl sm:p-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-400">
            <Shield className="h-3.5 w-3.5" />
            MMe-AI Legal Document
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-muted">
            {description}
          </p>
          <p className="mt-4 text-xs font-mono text-muted">Last updated: {SITE.legalUpdated}</p>
        </section>

        <div className="mt-6 space-y-4">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-white/[0.08] bg-surface/80 p-6 sm:p-8"
            >
              <h2 className="text-lg sm:text-xl font-bold text-white">{section.title}</h2>
              <div className="mt-3 space-y-3 text-xs sm:text-sm leading-relaxed text-muted">
                {section.body.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-8 rounded-2xl border border-indigo-500/20 bg-surface p-6 sm:p-8">
          <h2 className="text-base font-bold text-white">Contact & Support</h2>
          <p className="mt-2 text-xs sm:text-sm text-muted leading-relaxed">
            For questions about these terms, privacy, refunds, demo requests, or data deletion, email the MMe-AI team at{" "}
            <a className="font-semibold text-indigo-400 hover:underline" href={`mailto:${SITE.email}`}>
              {SITE.email}
            </a>{" "}
            or call{" "}
            <a className="font-semibold text-indigo-400 hover:underline" href={`tel:${SITE.phoneE164}`}>
              {SITE.phoneDisplay}
            </a>{" "}
            ({SITE.businessHours}).
          </p>
        </section>
      </div>
    </main>
  );
}
