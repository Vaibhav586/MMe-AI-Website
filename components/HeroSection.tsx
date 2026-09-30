"use client";

import { useState } from "react";
import { ArrowRight, Play, Zap, Bot } from "lucide-react";
import { useDemoModal } from "@/components/DemoModalProvider";
import { SampleDataBadge } from "@/components/SampleDataBadge";
import { VideoModal } from "@/components/VideoModal";
import { track } from "@/lib/track";

type Tab = "LEADS" | "AI" | "WORKFLOWS" | "ACTIONS" | "REPORTS";

// Sample figures for the hero mockup. Not customer results; the panel is labelled "Sample data".
const TABS: Record<Tab, { title: string; stats: { val: string; label: string; color: string }[]; status: string; signals: string[] }> = {
  LEADS: {
    title: "Lead pipeline",
    stats: [
      { val: "124", label: "New leads", color: "text-white" },
      { val: "18", label: "Follow-ups due", color: "text-amber-400" },
      { val: "37", label: "Active deals", color: "text-indigo-400" },
      { val: "12", label: "Won", color: "text-emerald-400" },
    ],
    status: "Routing new enquiries",
    signals: ["3 high-priority leads today", "Rahul Sharma qualified for 3 BHK", "Average WhatsApp reply: 1.8 min"],
  },
  AI: {
    title: "AI agents",
    stats: [
      { val: "4", label: "Agents working", color: "text-white" },
      { val: "42", label: "Drafts written", color: "text-emerald-400" },
      { val: "38", label: "Leads qualified", color: "text-indigo-400" },
      { val: "9", label: "Awaiting approval", color: "text-amber-400" },
    ],
    status: "Reading enquiry context",
    signals: ["42 follow-up messages drafted", "Tone matched to your brand", "Output checked against your inventory data"],
  },
  WORKFLOWS: {
    title: "Automations",
    stats: [
      { val: "24", label: "Active rules", color: "text-white" },
      { val: "0", label: "Failed tasks", color: "text-emerald-400" },
      { val: "142h", label: "Saved / month", color: "text-indigo-400" },
      { val: "6", label: "Tools connected", color: "text-purple-400" },
    ],
    status: "24 workflows running",
    signals: ["Idle-lead reminder sent", "Weekly report set for Sunday", "Proposal sent from template"],
  },
  ACTIONS: {
    title: "Needs your approval",
    stats: [
      { val: "8", label: "Pending", color: "text-amber-400" },
      { val: "15", label: "Done automatically", color: "text-emerald-400" },
      { val: "3", label: "Priority calls", color: "text-indigo-400" },
      { val: "2", label: "Offers out", color: "text-purple-400" },
    ],
    status: "Sorted by deal value",
    signals: ["Approve WhatsApp offer for Unit 14B", "Call with Dr. Mehra at 4:30 PM", "Site visit confirmation ready"],
  },
  REPORTS: {
    title: "This month",
    stats: [
      { val: "₹8.4Cr", label: "Pipeline value", color: "text-white" },
      { val: "24%", label: "Close rate", color: "text-indigo-400" },
      { val: "4.2m", label: "Avg. response", color: "text-purple-400" },
      { val: "31", label: "Site visits", color: "text-emerald-400" },
    ],
    status: "Tracking what sells",
    signals: ["Google Ads leads close best", "Weekend replies 3x faster", "Summary sent to founders"],
  },
};

export function HeroSection() {
  const { openDemo } = useDemoModal();
  const [activeTab, setActiveTab] = useState<Tab>("LEADS");
  const [videoOpen, setVideoOpen] = useState(false);
  const current = TABS[activeTab];

  return (
    <section className="relative overflow-hidden pt-10 pb-16 lg:pt-20 lg:pb-24 ambient-grid">
      <div className="pointer-events-none hidden sm:block absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-indigo-600/15 rounded-full blur-[120px] -z-10" />

      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        {/* Copy + CTAs */}
        <div className="text-center lg:text-left">
          <div className="inline-flex items-center rounded-full border border-indigo-500/30 bg-indigo-500/[0.08] px-3.5 py-1 text-[11px] sm:text-xs font-semibold tracking-wide text-indigo-300">
            Manage · Monitor · Execute — for Indian sales teams
          </div>

          <h1 className="mt-5 text-[34px] font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[56px]">
            Your AI operations team, set up for you in 21 days.
          </h1>

          <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 max-w-xl mx-auto lg:mx-0">
            MMe-AI connects your CRM, WhatsApp and sheets, then runs your lead qualification, follow-ups and reports automatically — built around how your business works.
          </p>

          <div className="mt-7 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <button
              type="button"
              id="hero-primary-cta"
              onClick={() => openDemo({ source: "hero", label: "Get a free workflow audit" })}
              className="glow-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white shadow-[0_0_25px_rgba(99,102,241,0.4)]"
            >
              <span>Get a free workflow audit</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              id="hero-secondary-cta"
              onClick={() => {
                track("cta_click", { location: "hero", label: "Watch 2-min demo" });
                setVideoOpen(true);
              }}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-base font-semibold text-white transition-all hover:border-white/30 hover:bg-white/[0.08]"
            >
              <Play className="h-4 w-4 fill-white" aria-hidden="true" />
              <span>Watch 2-min demo</span>
            </button>
          </div>

          <p className="mt-4 text-xs text-muted">
            No need to replace your CRM · Setup in 21 days · Cancel monthly plans anytime
          </p>
        </div>

        {/* Sample dashboard */}
        <div className="relative rounded-2xl border border-white/10 bg-surface/90 p-4 sm:p-5 shadow-[0_25px_80px_rgba(0,0,0,0.65)] glow-card-purple">
          <SampleDataBadge className="absolute -top-3 right-4" />

          <div role="tablist" aria-label="Dashboard views" className="flex gap-1.5 overflow-x-auto pb-3">
            {(Object.keys(TABS) as Tab[]).map((tab) => (
              <button
                key={tab}
                type="button"
                role="tab"
                aria-selected={activeTab === tab}
                onClick={() => setActiveTab(tab)}
                className={`shrink-0 rounded-lg px-3 py-1.5 text-[11px] font-mono font-bold tracking-wider transition-colors ${
                  activeTab === tab
                    ? "border border-indigo-400 bg-indigo-600/30 text-white"
                    : "border border-white/[0.06] bg-white/[0.02] text-muted hover:text-slate-200"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div role="tabpanel" className="grid grid-cols-1 gap-4 sm:grid-cols-5">
            <div className="rounded-xl border border-white/[0.07] bg-surface/80 p-4 sm:col-span-3">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
                <span className="text-sm font-semibold text-white">{current.title}</span>
                <span className="flex items-center gap-1.5 text-[10px] font-mono text-indigo-300">
                  <Zap className="h-3 w-3" aria-hidden="true" /> Live
                </span>
              </div>
              <div className="mt-3 grid grid-cols-2 gap-2.5">
                {current.stats.map((s) => (
                  <div key={s.label} className="rounded-lg border border-white/[0.04] bg-white/[0.03] p-2.5">
                    <div className={`text-xl font-bold tracking-tight ${s.color}`}>{s.val}</div>
                    <div className="mt-0.5 text-[11px] text-muted">{s.label}</div>
                  </div>
                ))}
              </div>
              <svg className="mt-3 h-12 w-full" viewBox="0 0 300 48" fill="none" aria-hidden="true">
                <line x1="20" y1="24" x2="110" y2="10" stroke="rgba(99,102,241,0.45)" strokeWidth="2" strokeDasharray="4 4" className="subtle-node-line" />
                <line x1="20" y1="24" x2="110" y2="38" stroke="rgba(99,102,241,0.45)" strokeWidth="2" strokeDasharray="4 4" className="subtle-node-line" />
                <line x1="110" y1="10" x2="200" y2="24" stroke="rgba(168,85,247,0.45)" strokeWidth="2" strokeDasharray="4 4" className="subtle-node-line" />
                <line x1="110" y1="38" x2="200" y2="24" stroke="rgba(168,85,247,0.45)" strokeWidth="2" strokeDasharray="4 4" className="subtle-node-line" />
                <line x1="200" y1="24" x2="280" y2="24" stroke="rgba(16,185,129,0.45)" strokeWidth="2" strokeDasharray="4 4" className="subtle-node-line" />
                <circle cx="20" cy="24" r="7" fill="#131938" stroke="#6366f1" strokeWidth="2" />
                <circle cx="110" cy="10" r="6" fill="#131938" stroke="#8b5cf6" strokeWidth="2" />
                <circle cx="110" cy="38" r="6" fill="#131938" stroke="#8b5cf6" strokeWidth="2" />
                <circle cx="200" cy="24" r="7" fill="#131938" stroke="#8b5cf6" strokeWidth="2" />
                <circle cx="280" cy="24" r="8" fill="#17224d" stroke="#10b981" strokeWidth="2.5" />
              </svg>
              <div className="mt-2 flex items-center gap-2 text-[11px] text-indigo-200">
                <span className="h-2 w-2 rounded-full bg-indigo-400 motion-safe:animate-pulse" />
                {current.status}
              </div>
            </div>

            <div className="rounded-xl border border-white/[0.07] bg-surface/80 p-4 sm:col-span-2">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-2.5">
                <span className="text-sm font-semibold text-white">Signals</span>
                <Bot className="h-4 w-4 text-purple-400" aria-hidden="true" />
              </div>
              <ul className="mt-3 space-y-2.5">
                {current.signals.map((item, idx) => (
                  <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                    <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${idx === 0 ? "bg-amber-400" : idx === 1 ? "bg-indigo-400" : "bg-emerald-400"}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
    </section>
  );
}
