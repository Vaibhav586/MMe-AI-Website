import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Shield, Mail, Phone } from "lucide-react";

type LegalSection = {
  title: string;
  body: string[];
};

type LegalDocumentProps = {
  title: string;
  description: string;
  sections: LegalSection[];
};

const contactEmail = "mmeai.official@gmail.com";
const contactPhone = "+91 8851144571";

export function LegalDocument({
  title,
  description,
  sections,
}: LegalDocumentProps) {
  return (
    <main className="min-h-screen bg-[#070913] px-5 py-10 text-slate-200 sm:px-8 lg:px-12 selection:bg-indigo-500/30 selection:text-white">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between pb-6 border-b border-white/[0.08]">
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-xs font-semibold text-slate-300 transition-colors hover:bg-white/[0.08] hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Back to MMe-AI</span>
          </Link>

          <Link href="/" className="flex items-center gap-2.5">
            <div className="relative h-8 w-8 overflow-hidden rounded-lg border border-indigo-500/30 bg-[#0d122e] p-0.5">
              <Image
                src="/logo.png"
                alt="MMe-AI Logo"
                width={32}
                height={32}
                className="h-full w-full object-cover rounded-md"
              />
            </div>
            <span className="text-sm font-bold text-white">
              MMe<span className="text-indigo-400">-AI</span>
            </span>
          </Link>
        </div>

        <section className="mt-8 rounded-2xl border border-indigo-500/20 bg-[#0c1028]/90 p-6 shadow-2xl backdrop-blur-md sm:p-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-indigo-400">
            <Shield className="h-3.5 w-3.5" />
            MMe-AI Legal Document
          </span>
          <h1 className="mt-4 text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            {title}
          </h1>
          <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-400">
            {description}
          </p>
          <p className="mt-4 text-xs font-mono text-slate-500">Last updated: 2026</p>
        </section>

        <div className="mt-6 space-y-4">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-2xl border border-white/[0.08] bg-[#090d20]/80 p-6 sm:p-8"
            >
              <h2 className="text-lg sm:text-xl font-bold text-white">{section.title}</h2>
              <div className="mt-3 space-y-3 text-xs sm:text-sm leading-relaxed text-slate-400">
                {section.body.map((paragraph, idx) => (
                  <p key={idx}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-8 rounded-2xl border border-indigo-500/20 bg-[#0b0f24] p-6 sm:p-8">
          <h2 className="text-base font-bold text-white">Contact & Support</h2>
          <p className="mt-2 text-xs sm:text-sm text-slate-400 leading-relaxed">
            For questions about these terms, privacy, refunds, demo requests, or data deletion, reach out to Manish Kumar at{" "}
            <a className="font-semibold text-indigo-400 hover:underline" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>{" "}
            or call{" "}
            <a className="font-semibold text-indigo-400 hover:underline" href={`tel:${contactPhone}`}>
              {contactPhone}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
