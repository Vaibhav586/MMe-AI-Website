"use client";

import { useState } from "react";
import { Check, Zap, Database, Shield, Eye, CheckCircle2, Cpu } from "lucide-react";
import { SOC2_CLAIM } from "@/lib/claims";

export function ComparisonSection() {
  const [activeTab, setActiveTab] = useState<"architecture" | "pillars">("architecture");

  const traditionalPoints = [
    "Isolated data silos across multiple tools",
    "Requires manual copy-pasting between tabs",
    "Brittle webhooks with zero execution reasoning",
    "Black-box AI prompts without audit trails",
    "All-or-nothing permissions with high risk",
    "Static dashboards showing only past events",
  ];

  const mmePoints = [
    "Autonomous multi-agent orchestration layer",
    "Acts across your existing CRM, WhatsApp & ERP",
    "Replayable run ledger with complete observability",
    "4-tier cross-system durable memory graph",
    "Policy-driven human approval gates for critical actions",
    "Fast, automated workflow execution",
  ];

  // Architectural Paradigm Comparison
  const architectureComparison = [
    {
      capability: "Multi-Agent Orchestration",
      mme: "Dedicated Planner, Executor, Verifier & Auditor agents with role contracts",
      legacy: "Single-prompt LLM wrappers with unconstrained execution scopes",
    },
    {
      capability: "Execution Observability & Auditability",
      mme: "Complete, replayable activity log with step-level timing and costs",
      legacy: "Basic activity logs or black-box outcomes with no inspectable reasoning",
    },
    {
      capability: "Security & Credential Sandboxing",
      mme: "Per-step tool allowlists, ephemeral OAuth tokens, zero ambient write access",
      legacy: "Static API keys stored in plain credentials with broad platform access",
    },
    {
      capability: "Human-in-the-Loop Control",
      mme: "Configurable risk-tiered approval gates based on confidence & transaction value",
      legacy: "Ad-hoc manual notifications or unrestricted autonomous execution",
    },
    {
      capability: "Durable Cross-System Memory",
      mme: "4-tier memory graph separating episodic history, policies, and working state",
      legacy: "Stateless prompt windows or simple keyword search with high hallucination",
    },
    {
      capability: "Integration Model",
      mme: "Orchestrates across your current stack without forcing platform migration",
      legacy: "Forces teams to migrate data into yet another proprietary destination tool",
    },
    {
      capability: "Enterprise Data Isolation",
      mme: `Zero customer data training and strict tenant isolation. ${SOC2_CLAIM}.`,
      legacy: "Ambiguous model provider data usage policies and shared tenant data stores",
    },
  ];

  const valuePillars = [
    {
      title: "Manage",
      icon: Cpu,
      summary: "One intelligent space for leads, context & processes.",
      detail: "Organize leads, customer context, and team processes in one intelligent space—eliminating the copy-paste between tabs, tools, and spreadsheets.",
      benefit: "Keeps every customer interaction and internal process in a single, shared source of truth.",
    },
    {
      title: "Monitor",
      icon: Eye,
      summary: "Total execution observability in real time.",
      detail: "Track every operation with real-time monitoring, complete audit logs, and full agent visibility—inspect every decision, API call, and latency metric.",
      benefit: "Provides complete transparency and confidence in every automated action.",
    },
    {
      title: "Execute",
      icon: Zap,
      summary: "Autonomous multi-agent workflows across your stack.",
      detail: "Run autonomous multi-agent workflows across your existing CRM, WhatsApp, and tools—turning incoming customer intent into completed business outcomes.",
      benefit: "Executes multi-step work at machine speed while keeping humans in the loop.",
    },
  ];

  return (
    <section id="comparison" className="relative py-24 lg:py-32 bg-bg border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/[0.08] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            <Shield className="h-3.5 w-3.5 text-indigo-400" />
            <span>Platform Advantage</span>
          </div>
          <h2 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Don&apos;t replace your stack. <br />
            <span className="bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
              Empower it with autonomous AI execution.
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            MMe-AI acts as an intelligent operating layer across your existing CRM, messaging channels, and internal systems—delivering reliable automation with enterprise-grade guardrails.
          </p>
        </div>

        {/* Side-by-side Architectural Contrast */}
        <div className="mt-16 mx-auto max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Left: Fragmented Point Solutions */}
          <div className="rounded-2xl border border-white/[0.08] bg-surface/80 p-8 sm:p-10 flex flex-col justify-between shadow-lg">
            <div>
              <div className="flex items-center gap-3 pb-6 border-b border-white/[0.08]">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.05] border border-white/10 text-muted">
                  <Database className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-200">Fragmented Point Solutions</h3>
                  <span className="text-xs text-muted">Isolated Apps & Brittle Glue</span>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {traditionalPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm text-muted">
                    <span className="h-5 w-5 rounded-full bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 mt-0.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-slate-500" />
                    </span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-4 border-t border-white/[0.06] text-xs text-muted">
              Traps valuable context in disconnected silos with high manual maintenance overhead.
            </div>
          </div>

          {/* Right: MMe-AI Governed Execution Layer */}
          <div className="relative rounded-2xl bg-gradient-to-br from-amber-400 via-amber-500 to-yellow-500 p-8 sm:p-10 text-slate-950 flex flex-col justify-between shadow-[0_20px_60px_rgba(245,158,11,0.35)] transform md:-translate-y-2">
            <div>
              <div className="flex items-center gap-3 pb-6 border-b border-black/15">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black/15 border border-black/20 text-slate-950">
                  <Zap className="h-5 w-5 fill-slate-950" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-950 tracking-tight">MMe-AI Platform</h3>
                  <span className="text-xs font-semibold text-slate-900/80">Manage, Monitor & Execute Operating Layer</span>
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {mmePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-sm font-semibold text-slate-950">
                    <div className="h-5 w-5 rounded-full bg-slate-950 text-amber-400 flex items-center justify-center shrink-0 mt-0.5 shadow-sm">
                      <Check className="h-3.5 w-3.5 stroke-[3]" />
                    </div>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10 pt-4 border-t border-black/15 text-xs font-bold text-slate-900">
              Unifies your existing systems with autonomous, observable, and policy-controlled workflows.
            </div>
          </div>

        </div>

        {/* Dynamic Architectural Comparison Matrix & Core Pillars */}
        <div className="mt-20 rounded-2xl border border-white/10 bg-surface/90 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-white/[0.08]">
            <div>
              <h3 className="text-xl font-bold text-white tracking-wide">
                Architectural Breakdown
              </h3>
              <p className="text-xs text-muted mt-1">
                How modern autonomous agent execution compares to legacy point solutions.
              </p>
            </div>

            <div role="tablist" aria-label="Comparison view" className="flex items-center gap-2 bg-black/40 p-1 rounded-xl border border-white/10">
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "architecture"}
                onClick={() => setActiveTab("architecture")}
                className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-all ${
                  activeTab === "architecture"
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-muted hover:text-white"
                }`}
              >
                Architecture Comparison
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={activeTab === "pillars"}
                onClick={() => setActiveTab("pillars")}
                className={`rounded-lg px-4 py-1.5 text-xs font-semibold transition-all ${
                  activeTab === "pillars"
                    ? "bg-amber-400 text-slate-950 font-bold shadow-sm"
                    : "text-muted hover:text-white"
                }`}
              >
                Core Value Pillars
              </button>
            </div>
          </div>

          {/* TAB 1: ARCHITECTURE COMPARISON */}
          {activeTab === "architecture" && (
            <div className="mt-6 overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-white/[0.08] text-muted font-mono text-[11px]">
                    <th className="py-3.5 pr-4 w-1/4">Enterprise Capability</th>
                    <th className="py-3.5 px-4 w-1/2 bg-amber-400/10 text-amber-300 font-bold border-x border-amber-400/20">
MMe-AI Execution Layer
                    </th>
                    <th className="py-3.5 pl-4 w-1/4">Legacy Point Solutions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/[0.04]">
                  {architectureComparison.map((row, idx) => (
                    <tr key={idx} className="hover:bg-white/[0.02] transition-colors">
                      <td className="py-4 pr-4 font-semibold text-white">
                        {row.capability}
                      </td>
                      <td className="py-4 px-4 bg-amber-400/[0.06] border-x border-amber-400/20 font-medium text-slate-200">
                        <div className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                          <span>{row.mme}</span>
                        </div>
                      </td>
                      <td className="py-4 pl-4 text-muted">
                        {row.legacy}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

          {/* TAB 2: CORE VALUE PILLARS */}
          {activeTab === "pillars" && (
            <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6 animate-in fade-in duration-200">
              {valuePillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div key={pillar.title} className="rounded-xl border border-white/[0.08] bg-surface p-6 flex flex-col justify-between hover:border-indigo-500/30 transition-all">
                    <div>
                      <div className="flex items-center gap-3 pb-4 border-b border-white/[0.06]">
                        <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/15 border border-indigo-500/20 text-indigo-400">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-white tracking-wide">{pillar.title}</h4>
                          <span className="text-[11px] text-muted">{pillar.summary}</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-300 mt-4 leading-relaxed">
                        {pillar.detail}
                      </p>
                    </div>
                    <div className="mt-5 pt-3 border-t border-white/[0.04] flex items-start gap-2 text-xs text-amber-300">
                      <Check className="h-4 w-4 text-amber-400 shrink-0 mt-0.5" />
                      <span>{pillar.benefit}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {/* Section Footer */}
          <div className="mt-8 pt-6 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
            <span className="text-muted">
              Built to integrate seamlessly with your existing infrastructure, CRM, and communication channels.
            </span>
            <span className="text-indigo-400 font-mono font-semibold shrink-0">
              Enterprise-Grade Multi-Agent Security
            </span>
          </div>

        </div>

      </div>
    </section>
  );
}
