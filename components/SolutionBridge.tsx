"use client";

import { useState } from "react";
import { Database, MessageSquare, Mail, Cpu, ArrowRight, Zap, CheckCircle2, AlertOctagon, TrendingUp, Layers } from "lucide-react";
import { IllustrativeBadge } from "@/components/IllustrativeBadge";

export function SolutionBridge() {
  const [activeCategory, setActiveCategory] = useState<"tools" | "mme" | "actions">("mme");

  return (
    <section className="relative py-20 lg:py-28 bg-[#070913] border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xl sm:text-2xl font-medium text-slate-400">
            More tools don't automatically create a better workflow.
          </p>
          <h2 className="mt-3 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            That's where <span className="text-indigo-400">MMe-AI</span> comes in.
          </h2>
        </div>

        {/* Architectural Flow Diagram Card */}
        <div className="mt-14 mx-auto max-w-4xl rounded-2xl border border-indigo-500/20 bg-[#0a0e24]/90 p-8 sm:p-12 shadow-[0_20px_60px_rgba(99,102,241,0.12)] backdrop-blur-xl glow-card-purple">
          <div className="-mt-4 sm:-mt-6 mb-4 flex justify-end">
            <IllustrativeBadge />
          </div>

          {/* VIEW 1: EXISTING TOOLS (Friction & Silos) */}
          {activeCategory === "tools" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center animate-in fade-in duration-300">
              <div className="md:col-span-4 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-amber-400 mb-2 flex items-center gap-1.5 font-bold">
                  <AlertOctagon className="h-3.5 w-3.5" />
                  Siloed Tool Stack
                </span>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <Database className="h-4 w-4 text-indigo-400" />
                    Legacy CRM
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-1">Manual data re-entry required</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <MessageSquare className="h-4 w-4 text-emerald-400" />
                    WhatsApp Business
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-1">Chats disconnected from sales records</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <Mail className="h-4 w-4 text-blue-400" />
                    Forms & Email Inbox
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-1">Leads sit unassigned for hours</span>
                </div>
              </div>

              {/* Middle: Fragmented manual handoff */}
              <div className="md:col-span-4 flex flex-col gap-2.5 py-2">
                <div className="rounded-lg border border-red-500/30 bg-red-500/[0.08] px-3.5 py-2 text-xs font-mono text-red-300 flex items-center justify-between">
                  <span>Delayed sync</span>
                  <span className="text-[10px] bg-red-500/20 px-1.5 py-0.5 rounded">4-6h lag</span>
                </div>
                <div className="rounded-lg border border-red-500/30 bg-red-500/[0.08] px-3.5 py-2 text-xs font-mono text-red-300 flex items-center justify-between">
                  <span>Lost context</span>
                  <span className="text-[10px] bg-red-500/20 px-1.5 py-0.5 rounded">No history</span>
                </div>
                <div className="rounded-lg border border-red-500/30 bg-red-500/[0.08] px-3.5 py-2 text-xs font-mono text-red-300 flex items-center justify-between">
                  <span>Missed follow-ups</span>
                  <span className="text-[10px] bg-red-500/20 px-1.5 py-0.5 rounded">38% dropped</span>
                </div>
              </div>

              {/* Right: Operational Friction */}
              <div className="md:col-span-4 rounded-xl border border-amber-500/40 bg-gradient-to-b from-[#241a10] to-[#120d08] p-6 text-center shadow-lg">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/20 border border-amber-400/40">
                  <AlertOctagon className="h-6 w-6 text-amber-400" />
                </div>
                <h3 className="mt-3 text-sm font-bold text-white tracking-wide">
                  Operational Blindspots
                </h3>
                <p className="text-[11px] text-amber-200/80 mt-1">
                  Team spends 3+ hours daily doing manual updates across tabs.
                </p>
                <div className="mt-3 text-[10px] font-mono text-amber-300 bg-amber-500/10 px-2 py-1 rounded">
                  Status: High Friction
                </div>
              </div>
            </div>
          )}

          {/* VIEW 2: MME-AI (Intelligent Orchestration - Default) */}
          {activeCategory === "mme" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center animate-in fade-in duration-300">
              {/* Left: Connected Feeds */}
              <div className="md:col-span-4 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2 block">
                  Ingested Streams
                </span>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm text-slate-200">
                  <Database className="h-4 w-4 text-indigo-400" />
                  <span>CRM Database</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm text-slate-200">
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  <span>WhatsApp Cloud API</span>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.04] p-3 text-sm text-slate-200">
                  <Mail className="h-4 w-4 text-blue-400" />
                  <span>Digital Landing Forms</span>
                </div>
              </div>

              {/* Middle: Connecting Operational Streams */}
              <div className="md:col-span-4 flex flex-col gap-3 py-2">
                <div className="flex items-center justify-between rounded-lg border border-indigo-500/20 bg-indigo-500/[0.07] px-4 py-2 text-xs font-medium text-indigo-300">
                  <span>Leads Stream</span>
                  <ArrowRight className="h-3.5 w-3.5 text-indigo-400" />
                </div>
                <div className="flex items-center justify-between rounded-lg border border-indigo-500/20 bg-indigo-500/[0.07] px-4 py-2 text-xs font-medium text-indigo-300">
                  <span>Workflow Trigger</span>
                  <ArrowRight className="h-3.5 w-3.5 text-indigo-400" />
                </div>
                <div className="flex items-center justify-between rounded-lg border border-indigo-500/20 bg-indigo-500/[0.07] px-4 py-2 text-xs font-medium text-indigo-300">
                  <span>Analytics Signal</span>
                  <ArrowRight className="h-3.5 w-3.5 text-indigo-400" />
                </div>
              </div>

              {/* Right: Central Intelligent Layer */}
              <div className="md:col-span-4 rounded-xl border border-indigo-500/40 bg-gradient-to-b from-[#13193c] to-[#0c102a] p-6 text-center shadow-[0_0_35px_rgba(99,102,241,0.25)] relative overflow-hidden">
                <div className="absolute top-0 right-0 h-16 w-16 bg-indigo-500/20 rounded-full blur-xl" />
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600/30 border border-indigo-400/40 shadow-inner">
                  <Cpu className="h-7 w-7 text-indigo-300 animate-pulse" />
                </div>
                <h3 className="mt-4 text-base font-bold text-white tracking-wide">
                  MMe-AI
                </h3>
                <p className="text-xs font-medium text-indigo-300 mt-0.5">
                  Intelligent Layer
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/25 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
                  Active Processing
                </div>
              </div>
            </div>
          )}

          {/* VIEW 3: BUSINESS ACTIONS (Automated Output & Revenue) */}
          {activeCategory === "actions" && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center animate-in fade-in duration-300">
              <div className="md:col-span-4 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 mb-2 flex items-center gap-1.5 font-bold">
                  <Zap className="h-3.5 w-3.5" />
                  Automated Triggers
                </span>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                    Auto-Lead Scoring
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-1">High-intent tagged in 0.3s</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <MessageSquare className="h-4 w-4 text-emerald-400" />
                    Instant WhatsApp Dispatch
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-1">Personalized property deck sent</span>
                </div>
                <div className="rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs text-slate-300">
                  <div className="flex items-center gap-2 font-semibold text-white">
                    <TrendingUp className="h-4 w-4 text-emerald-400" />
                    Deal Pipeline Updated
                  </div>
                  <span className="text-[10px] text-slate-400 block mt-1">Zero drop-offs or lost leads</span>
                </div>
              </div>

              {/* Middle: Sub-second Execution stream */}
              <div className="md:col-span-4 flex flex-col gap-2.5 py-2">
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/[0.08] px-3.5 py-2 text-xs font-mono text-emerald-300 flex items-center justify-between">
                  <span>Lead Response</span>
                  <span className="text-[10px] bg-emerald-500/20 px-1.5 py-0.5 rounded font-bold">&lt; 2 mins</span>
                </div>
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/[0.08] px-3.5 py-2 text-xs font-mono text-emerald-300 flex items-center justify-between">
                  <span>Team Workload</span>
                  <span className="text-[10px] bg-emerald-500/20 px-1.5 py-0.5 rounded font-bold">-70% manual</span>
                </div>
                <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/[0.08] px-3.5 py-2 text-xs font-mono text-emerald-300 flex items-center justify-between">
                  <span>Conversion Lift</span>
                  <span className="text-[10px] bg-emerald-500/20 px-1.5 py-0.5 rounded font-bold">+24% Won</span>
                </div>
              </div>

              {/* Right: High Output Result */}
              <div className="md:col-span-4 rounded-xl border border-emerald-500/40 bg-gradient-to-b from-[#0d2218] to-[#08150f] p-6 text-center shadow-lg">
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/20 border border-emerald-400/40">
                  <TrendingUp className="h-6 w-6 text-emerald-400" />
                </div>
                <h3 className="mt-3 text-sm font-bold text-white tracking-wide">
                  Revenue Accelerated
                </h3>
                <p className="text-[11px] text-emerald-200/80 mt-1">
                  Every lead moves automatically to site visit and booking.
                </p>
                <div className="mt-3 text-[10px] font-mono text-emerald-300 bg-emerald-500/10 px-2 py-1 rounded">
                  Status: 24/7 Autonomous
                </div>
              </div>
            </div>
          )}

          {/* Category Toggle Pills */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3 pt-6 border-t border-white/[0.08]">
            <button
              type="button"
              onClick={() => setActiveCategory("tools")}
              className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all ${activeCategory === "tools"
                ? "bg-amber-500 text-slate-950 font-bold shadow-[0_0_15px_rgba(245,158,11,0.35)] scale-105"
                : "bg-white/[0.05] text-slate-300 hover:bg-white/[0.08]"
                }`}
            >
              Existing tools (The Problem)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("mme")}
              className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all ${activeCategory === "mme"
                ? "bg-indigo-600 text-white shadow-[0_0_15px_rgba(99,102,241,0.35)] scale-105"
                : "bg-white/[0.05] text-slate-300 hover:bg-white/[0.08]"
                }`}
            >
              MMe-AI (Intelligent Bridge)
            </button>
            <button
              type="button"
              onClick={() => setActiveCategory("actions")}
              className={`rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all ${activeCategory === "actions"
                ? "bg-emerald-600 text-white shadow-[0_0_15px_rgba(16,185,129,0.35)] scale-105"
                : "bg-white/[0.05] text-slate-300 hover:bg-white/[0.08]"
                }`}
            >
              Business Actions (The Outcome)
            </button>
          </div>

          <p className="mt-6 text-center text-sm font-medium text-slate-300 max-w-xl mx-auto">
            {activeCategory === "tools" && "Without an operating layer, your team spends hours manually bridging disconnected apps."}
            {activeCategory === "mme" && "MMe-AI connects the operational pieces of your business and adds intelligence where your team needs it."}
            {activeCategory === "actions" && "Autonomous triggers turn incoming customer intent into revenue-generating business results."}
          </p>
          <p className="mt-1 text-center text-xs text-slate-500">
            Connects with your existing tools where supported.
          </p>

        </div>

      </div>
    </section>
  );
}

