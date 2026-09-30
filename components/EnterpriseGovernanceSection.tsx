"use client";

import { useState } from "react";
import { ShieldCheck, Eye, Brain, CheckCircle2, AlertTriangle, Terminal, RotateCcw, Bot } from "lucide-react";
import { SampleDataBadge } from "@/components/SampleDataBadge";
import { SOC2_CLAIM } from "@/lib/claims";

export function EnterpriseGovernanceSection() {
  type GovernanceTab = "agents" | "observability" | "memory" | "approval";
  const [activeGovernanceTab, setActiveGovernanceTab] = useState<GovernanceTab>("observability");
  const [replayState, setReplayState] = useState<boolean>(false);
  const [activeApprovalStep, setActiveApprovalStep] = useState<"pending" | "approved" | "rejected">("pending");

  const agentTeam = [
    {
      role: "Planner Agent",
      badge: "Goal Decomposition",
      desc: "Deconstructs high-level business goals into executable sub-tasks with strict dependency chains.",
      contract: "Outputs typed DAG of actions with execution bounds.",
    },
    {
      role: "Researcher Agent",
      badge: "Context & Retrieval",
      desc: "Queries internal CRM, WhatsApp history, and documents across Google/Microsoft using permission-aware search.",
      contract: "Output checked against your inventory data; cites exact source documents.",
    },
    {
      role: "Executor Agent",
      badge: "Sandboxed Tool Use",
      desc: "Invokes external APIs (WhatsApp Cloud, Stripe, CRM) using temporary scoped credentials and ephemeral tokens.",
      contract: "Restricted by tool allowlists; transaction limits enforced.",
    },
    {
      role: "Verifier Agent",
      badge: "Output Validation",
      desc: "Validates JSON schemas, customer-facing tone, budget constraints, and compliance rules prior to dispatch.",
      contract: "Scores confidence; blocks actions falling below threshold.",
    },
    {
      role: "Auditor Agent",
      badge: "Compliance & Ledger",
      desc: "Logs every event, latency metric, token cost, and user interaction into a complete, replayable activity log.",
      contract: `${SOC2_CLAIM}; complete, replayable activity log.`,
    },
  ];

  const memoryTiers = [
    {
      type: "Episodic Memory",
      title: "Previous Run History",
      desc: "Remembers what happened in prior workflow executions, client meetings, and negotiation rounds.",
      retention: "Indexed by timestamp & entity ID",
    },
    {
      type: "Semantic Memory",
      title: "Organizational Knowledge Graph",
      desc: "Persistent verified facts about client terms, inventory catalogs, company policies, and pricing formulas.",
      retention: "Permission-aware vector index",
    },
    {
      type: "Procedural Memory",
      title: "Workflow SOPs & Rules",
      desc: "Deterministic guidelines specifying exactly how handoffs, site visits, and approvals must proceed.",
      retention: "Version-controlled workflow schemas",
    },
    {
      type: "Working Memory",
      title: "Active Context Window",
      desc: "Short-lived, isolated context for the current transaction, scrubbed immediately upon workflow completion.",
      retention: "Ephemeral runtime memory",
    },
  ];

  return (
    <section id="governance" className="relative py-24 lg:py-32 bg-bg border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/[0.08] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            <ShieldCheck className="h-4 w-4 text-indigo-400" />
            <span>Enterprise Security & Observability</span>
          </div>
          <h2 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Multi-Agent Execution & Observability
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Scale autonomous execution with total operational confidence. Every agent action is scoped to its verified identity, organizational policy, and required approval state.
          </p>
        </div>

        {/* 4 Feature Tabs Switcher */}
        <div role="tablist" aria-label="Governance views" className="mt-12 flex flex-wrap items-center justify-center gap-3">
          {[
            { id: "observability", label: "Execution Observability & Audit Logs", icon: Eye },
            { id: "agents", label: "Multi-Agent Teams", icon: Bot },
            { id: "approval", label: "Human-in-the-Loop Controls", icon: CheckCircle2 },
            { id: "memory", label: "Durable Memory Graph", icon: Brain },
          ].map((tab) => {
            const Icon = tab.icon;
            const isSelected = activeGovernanceTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                onClick={() => setActiveGovernanceTab(tab.id as GovernanceTab)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all ${isSelected
                  ? "bg-amber-400 text-slate-950 font-bold shadow-[0_0_20px_rgba(245,158,11,0.35)] scale-105"
                  : "border border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white"
                  }`}
              >
                <Icon className={`h-4 w-4 ${isSelected ? "text-slate-950" : "text-muted"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Display Container */}
        <div className="mt-12 rounded-2xl border border-white/10 bg-surface/95 p-6 sm:p-10 shadow-2xl">

          {/* TAB 1: FULL EXECUTION OBSERVABILITY */}
          {activeGovernanceTab === "observability" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-white/[0.06]">
                <div>
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <Terminal className="h-5 w-5 text-indigo-400" />
                    Replayable Agent Run Ledger & Audit Trace
                  </h3>
                  <p className="text-xs text-muted mt-1">
                    Every step, model call, latency metric, and token cost is inspectable and reproducible.
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
                    Trace ID: #run_9482_mme
                  </span>
                  <button
                    type="button"
                    onClick={() => {
                      setReplayState(true);
                      setTimeout(() => setReplayState(false), 2400);
                    }}
                    className="rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white px-3 py-1.5 text-xs font-semibold flex items-center gap-1.5 transition-colors shadow-sm"
                  >
                    <RotateCcw className={`h-3 w-3 ${replayState ? "animate-spin" : ""}`} />
                    {replayState ? "Replaying Trace..." : "Replay Run From Step 1"}
                  </button>
                </div>
              </div>

              {/* Execution Run Timeline */}
              <div className="space-y-3 font-mono text-xs">
                <div className="flex justify-end">
                  <SampleDataBadge />
                </div>
                {[
                  { step: "01", name: "Inbound Intent Classifier", agent: "Planner Agent", latency: "140ms", tokens: "412 tok ($0.0012)", status: "PASSED", detail: "Parsed customer query: 'Looking for 3 BHK high-rise in Hebbal, ₹2.5-3 Cr budget'. Extracted intent: VIP Luxury Buyer." },
                  { step: "02", name: "Context & Catalog Retrieval", agent: "Researcher Agent", latency: "220ms", tokens: "1,204 tok ($0.0036)", status: "PASSED", detail: "Searched inventory catalog. Surfaced Prestige Towers (Unit 14B) & Sobha Dream with 100% budget match." },
                  { step: "03", name: "Safety & Output Validation", agent: "Verifier Agent", latency: "95ms", tokens: "280 tok ($0.0008)", status: "PASSED", detail: "Verified pricing accuracy. Verified zero hallucination. Intent confidence: 96%." },
                  { step: "04", name: "Human Approval Checkpoint", agent: "Approval Gate", latency: "Human In Loop", tokens: "0 tok", status: "APPROVED", detail: "High-value WhatsApp brochure and private site visit reservation approved by Sales Manager Rajesh K." },
                  { step: "05", name: "Sandboxed API Dispatch", agent: "Executor Agent", latency: "180ms", tokens: "0 tok", status: "EXECUTED", detail: "Dispatched WhatsApp Cloud API message with interactive calendar RSVP link. Synced CRM lead stage." },
                ].map((item) => (
                  <div key={item.step} className="rounded-xl border border-white/[0.06] bg-surface p-4 flex flex-col md:flex-row md:items-center justify-between gap-3 hover:border-indigo-500/30 transition-all">
                    <div className="flex items-start gap-3">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600/20 text-indigo-300 font-bold shrink-0 mt-0.5">
                        {item.step}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-white">{item.name}</span>
                          <span className="text-[10px] text-muted bg-white/5 px-2 py-0.5 rounded">
                            {item.agent}
                          </span>
                        </div>
                        <p className="text-muted text-[11px] mt-1 font-sans">{item.detail}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-[11px] shrink-0 md:text-right">
                      <div>
                        <span className="text-muted block">{item.latency}</span>
                        <span className="text-muted block text-[10px]">{item.tokens}</span>
                      </div>
                      <span className="rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/25 px-2 py-1 font-bold">
                        {item.status} ✓
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Observability Metrics Banner */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4 border-t border-white/[0.06] text-center">
                <div className="rounded-lg bg-black/40 p-3">
                  <span className="text-[10px] text-muted uppercase font-mono block">Total End-to-End Latency</span>
                  <span className="text-base font-bold text-white font-mono mt-0.5 block">635ms</span>
                </div>
                <div className="rounded-lg bg-black/40 p-3">
                  <span className="text-[10px] text-muted uppercase font-mono block">Compute Cost</span>
                  <span className="text-base font-bold text-emerald-400 font-mono mt-0.5 block">$0.0056 / run</span>
                </div>
                <div className="rounded-lg bg-black/40 p-3">
                  <span className="text-[10px] text-muted uppercase font-mono block">Model Routing</span>
                  <span className="text-base font-bold text-indigo-300 font-mono mt-0.5 block">Best model per task (Anthropic, OpenAI)</span>
                </div>
                <div className="rounded-lg bg-black/40 p-3">
                  <span className="text-[10px] text-muted uppercase font-mono block">Audit Controls</span>
                  <span className="text-sm font-bold text-amber-400 font-mono mt-0.5 block">{SOC2_CLAIM}</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: GOVERNED MULTI-AGENT TEAMS */}
          {activeGovernanceTab === "agents" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="pb-4 border-b border-white/[0.06]">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Bot className="h-5 w-5 text-indigo-400" />
                  Multi-Agent Teams & Role Separation
                </h3>
                <p className="text-xs text-muted mt-1">
                  Divide mission-critical workflows across specialized agent contracts, preventing cascade failures and unauthorized execution.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {agentTeam.map((agent) => (
                  <div key={agent.role} className="rounded-xl border border-white/[0.08] bg-surface p-5 flex flex-col justify-between hover:border-amber-400/40 transition-all">
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                        <h4 className="text-sm font-bold text-white">{agent.role}</h4>
                        <span className="text-[10px] font-mono text-amber-300 bg-amber-400/10 border border-amber-400/30 px-2 py-0.5 rounded">
                          {agent.badge}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                        {agent.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/[0.04]">
                      <span className="text-[10px] uppercase font-mono text-muted block mb-1">Enforced Boundary:</span>
                      <span className="text-[11px] font-mono text-indigo-300 block">
                        {agent.contract}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Sandboxing Card */}
                <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-5 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-emerald-500/20">
                      <h4 className="text-sm font-bold text-white">Process Isolation & Sandboxing</h4>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2 py-0.5 rounded">
                        Container Isolation
                      </span>
                    </div>
                    <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                      Every tool invocation runs in an isolated runtime environment with strict tool allowlists, ephemeral OAuth tokens, and rate limits.
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-emerald-500/20 text-[11px] font-mono text-emerald-300">
                    ✓ Zero destructive write permissions without verified approval
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: HUMAN APPROVAL CHECKPOINTS */}
          {activeGovernanceTab === "approval" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="pb-4 border-b border-white/[0.06]">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-emerald-400" />
                  Policy-Driven Human-in-the-Loop Controls
                </h3>
                <p className="text-xs text-muted mt-1">
                  Automate routine operations at machine speed while routing high-stakes transactions, contract terms, and sensitive outreach to verified human approvers.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
                {/* Risk-Tiered Action Matrix */}
                <div className="space-y-3">
                  <span className="text-xs font-mono uppercase text-muted tracking-wider block font-semibold">
                    Policy Boundaries
                  </span>

                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-white">Tier 1: Fully Autonomous (Zero Approval)</span>
                      <span className="text-[10px] font-mono text-emerald-300 bg-emerald-500/20 px-2 py-0.5 rounded">Auto-Exec</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      • Inbound lead classification & intent scoring<br />
                      • CRM contact deduplication & tagging<br />
                      • Catalog property matching & brochure compilation<br />
                      • Internal Slack/Teams status alerts
                    </p>
                  </div>

                  <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-bold text-white">Tier 2: Gated Approval Required</span>
                      <span className="text-[10px] font-mono text-amber-300 bg-amber-500/20 px-2 py-0.5 rounded">Approval Gate</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      • Sending outbound custom pricing discounts<br />
                      • Confirming legal agreements or refund requests<br />
                      • Discarding or archiving high-value pipeline opportunities<br />
                      • Modifying multi-tenant billing subscriptions
                    </p>
                  </div>
                </div>

                {/* Live Simulated Human Approval Modal */}
                <div className="rounded-xl border border-white/[0.08] bg-surface p-5 shadow-inner">
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                    <span className="text-xs font-bold text-white flex items-center gap-1.5">
                      <AlertTriangle className="h-4 w-4 text-amber-400" />
                      Pending Approval Request #AP-8492
                    </span>
                    <span className="text-[10px] font-mono text-amber-400">Action: WhatsApp Offer Dispatch</span>
                  </div>

                  <div className="mt-4 space-y-3 text-xs">
                    <div className="rounded-lg bg-black/40 p-3 text-slate-300">
                      <div className="text-[10px] text-muted uppercase font-mono mb-1">Generated Action Proposal:</div>
                      <p className="leading-relaxed">
                        Send negotiated counter-offer of <strong className="text-white">₹2.65 Cr</strong> (inclusive of 2 covered car parks) for Prestige Towers Unit 14B to client <strong className="text-white">Vikramaditya Singhania</strong>.
                      </p>
                    </div>

                    <div className="flex justify-between items-center text-[11px] text-muted px-1 font-mono">
                      <span>Confidence Score: <strong>96%</strong></span>
                      <span>Assigned Rep: <strong>Rajesh Kumar</strong></span>
                    </div>

                    <div className="pt-2 flex gap-3">
                      <button
                        type="button"
                        aria-pressed={activeApprovalStep === "approved"}
                        onClick={() => setActiveApprovalStep("approved")}
                        className={`flex-1 rounded-lg py-2.5 text-xs font-bold transition-all shadow ${activeApprovalStep === "approved"
                          ? "bg-emerald-600 text-white"
                          : "bg-emerald-600/30 hover:bg-emerald-600 text-emerald-200 hover:text-white"
                          }`}
                      >
                        {activeApprovalStep === "approved" ? "Approved & Dispatched ✓" : "Approve & Execute"}
                      </button>
                      <button
                        type="button"
                        aria-pressed={activeApprovalStep === "rejected"}
                        onClick={() => setActiveApprovalStep("rejected")}
                        className={`flex-1 rounded-lg py-2.5 text-xs font-bold transition-all ${activeApprovalStep === "rejected"
                          ? "bg-red-600 text-white"
                          : "bg-white/5 hover:bg-red-600/20 text-muted hover:text-red-300"
                          }`}
                      >
                        {activeApprovalStep === "rejected" ? "Action Blocked ✗" : "Reject Action"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: 4-TIER MEMORY GRAPH */}
          {activeGovernanceTab === "memory" && (
            <div className="space-y-6 animate-in fade-in duration-300">
              <div className="pb-4 border-b border-white/[0.06]">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <Brain className="h-5 w-5 text-indigo-400" />
                  Multi-Tier Persistent Memory Architecture
                </h3>
                <p className="text-xs text-muted mt-1">
                  Maintain persistent, permission-aware organizational context across workflows with structured episodic, semantic, and procedural memory tiers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {memoryTiers.map((mem) => (
                  <div key={mem.type} className="rounded-xl border border-white/[0.08] bg-surface p-5 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                        <h4 className="text-sm font-bold text-white">{mem.title}</h4>
                        <span className="text-[10px] font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded">
                          {mem.type}
                        </span>
                      </div>
                      <p className="text-xs text-slate-300 mt-3 leading-relaxed">
                        {mem.desc}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-white/[0.04] text-[11px] font-mono text-muted">
                      Storage Policy: <strong className="text-amber-300">{mem.retention}</strong>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
}
