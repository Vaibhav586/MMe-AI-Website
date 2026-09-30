import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { SiteChrome } from "@/components/SiteChrome";
import { FounderCard } from "@/components/FounderCard";
import { DemoButton } from "@/components/DemoButton";
import { PHASES } from "@/lib/process";

export const metadata: Metadata = {
  title: "About | MMe-AI",
  description:
    "MMe-AI is built in Delhi NCR for sales teams drowning in follow-ups. Meet the founder and see how we set up AI automation around your business.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <SiteChrome>
      <section className="px-4 pt-16 pb-12 sm:px-6 lg:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-indigo-300">About MMe-AI</p>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            Built in Delhi NCR for teams drowning in follow-ups.
          </h1>
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-white">Why we started</h2>
          {/* TODO(founder): replace with the real story of why MMe-AI was started (2–3 short paragraphs). */}
          <p className="mt-4 text-base leading-relaxed text-slate-300">
            Growing sales teams lose deals in the gaps between their tools: an enquiry that waits hours for a reply, a follow-up nobody remembers, a report that takes a Sunday to put together. We started MMe-AI to close those gaps, with AI that does the repetitive work and a team that sets it up around how each business actually runs.
          </p>
        </div>
      </section>

      <section className="px-4 pb-16 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-2xl font-bold text-white">Who we are</h2>
          <div className="mt-5">
            <FounderCard />
          </div>
        </div>
      </section>

      <section className="border-t border-white/[0.05] bg-bg px-4 py-16 sm:px-6">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-bold text-white">How we work</h2>
          <ol className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {PHASES.map((phase, idx) => (
              <li key={phase.title} className="rounded-2xl border border-white/[0.08] bg-surface p-5">
                <span className="font-mono text-sm font-bold text-amber-300">0{idx + 1}</span>
                <h3 className="mt-2 text-base font-bold text-white">{phase.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-muted">{phase.desc}</p>
              </li>
            ))}
          </ol>
          <div className="mt-10 text-center">
            <DemoButton source="about" className="glow-button inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white">
              <span>Get a free workflow audit</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </DemoButton>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
