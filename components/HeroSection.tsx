"use client";

import { useState } from "react";
import { 
  ArrowRight, 
  Sparkles, 
  Bot, 
  Zap, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  Send, 
  Layers, 
  Cpu, 
  Activity, 
  BarChart3,
  ShieldCheck,
  UserCheck,
  MessageSquare
} from "lucide-react";
import { IllustrativeBadge } from "@/components/IllustrativeBadge";
import { useDemoModal } from "@/components/DemoModalProvider";

export function HeroSection() {
  const { openDemo } = useDemoModal();
  const [activeTab, setActiveTab] = useState<"LEAD" | "AI" | "WORKFLOW" | "ACTION" | "ANALYTICS">("LEAD");
  const [eventTriggered, setEventTriggered] = useState(false);

  // Dynamic content depending on activeTab
  const tabContent = {
    LEAD: {
      leftTitle: "Lead Pipeline",
      leftBadge: "Real-time sync",
      stats: [
        { val: "124", label: "New Leads", color: "text-white" },
        { val: "18", label: "Follow-ups Due", color: "text-amber-400" },
        { val: "37", label: "Active Opps", color: "text-indigo-400" },
        { val: "12", label: "Conversions", color: "text-emerald-400" },
      ],
      footerNote: "Lead capture: Website, WhatsApp & Ads",
      centerTitle: "Lead Routing & Qualification",
      centerSubtitle: "Auto-qualified based on intent & budget",
      status: "Automated routing active - 99.4%",
      insights: [
        "3 high-priority leads detected today",
        "Lead 'Rahul Sharma' qualified for 3 BHK",
        "WhatsApp response time: 1.8 mins avg",
        "Lead-to-opportunity rate up by 14%",
      ],
    },
    AI: {
      leftTitle: "AI Model Fleet",
      leftBadge: "Multi-Model AI",
      stats: [
        { val: "99.2%", label: "Accuracy", color: "text-white" },
        { val: "1.2s", label: "Latency", color: "text-emerald-400" },
        { val: "4", label: "Active Agents", color: "text-indigo-400" },
        { val: "840+", label: "Actions / Day", color: "text-purple-400" },
      ],
      footerNote: "Models: GPT-4o, Claude 3.5, Llama 3",
      centerTitle: "Reasoning & Context Engine",
      centerSubtitle: "Extracts customer intent and history",
      status: "Neural context stream connected",
      insights: [
        "Sentiment analysis: 94% positive",
        "Auto-drafted 42 follow-up messages",
        "Customer tone calibrated per vertical",
        "Zero hallucination guardrails active",
      ],
    },
    WORKFLOW: {
      leftTitle: "Automation Engine",
      leftBadge: "Live triggers",
      stats: [
        { val: "24", label: "Active Rules", color: "text-white" },
        { val: "0", label: "Failed Tasks", color: "text-emerald-400" },
        { val: "142h", label: "Saved / Mo", color: "text-indigo-400" },
        { val: "99.9%", label: "Uptime", color: "text-purple-400" },
      ],
      footerNote: "Triggers: Webhooks, DB events, Time",
      centerTitle: "End-to-End Workflow Graph",
      centerSubtitle: "Automates repetitive cross-tool steps",
      status: "Automation Running - 24 Workflows",
      insights: [
        "Lead idle > 2 days reminder fired",
        "Weekly reporting scheduled for Sunday",
        "CRM data mirrored to reporting layer",
        "Document generator dispatched proposal",
      ],
    },
    ACTION: {
      leftTitle: "Action Queue",
      leftBadge: "Needs attention",
      stats: [
        { val: "8", label: "Pending Tasks", color: "text-amber-400" },
        { val: "15", label: "Auto-Executed", color: "text-emerald-400" },
        { val: "3", label: "VIP Calls", color: "text-indigo-400" },
        { val: "2", label: "Contracts Out", color: "text-purple-400" },
      ],
      footerNote: "Human-in-the-loop approval ready",
      centerTitle: "Smart Task Execution",
      centerSubtitle: "Surfaces high-leverage business moves",
      status: "Queue prioritized by revenue impact",
      insights: [
        "Approve WhatsApp offer for Prestige deal",
        "Call scheduled with Dr. Mehra at 4:30 PM",
        "Follow-up email ready for one-click send",
        "Site visit confirmation waiting approval",
      ],
    },
    ANALYTICS: {
      leftTitle: "Executive Signal",
      leftBadge: "Real-time KPIs",
      stats: [
        { val: "+18%", label: "MoM Growth", color: "text-emerald-400" },
        { val: "₹8.4Cr", label: "Pipeline Value", color: "text-white" },
        { val: "24%", label: "Close Rate", color: "text-indigo-400" },
        { val: "4.2m", label: "Avg Response", color: "text-purple-400" },
      ],
      footerNote: "Granular weekly & monthly reporting",
      centerTitle: "Business Intelligence Hub",
      centerSubtitle: "Clear visibility into what creates revenue",
      status: "Pipeline velocity tracking active",
      insights: [
        "Google Ads leads show highest close rate",
        "Weekend response speed increased 3x",
        "Healthcare vertical enquiries surged 28%",
        "Forecasted target attainment: 114%",
      ],
    },
  };

  const current = tabContent[activeTab];

  return (
    <section className="relative overflow-hidden pt-12 pb-24 lg:pt-20 lg:pb-32 ambient-grid">
      {/* Background ambient glowing orbs */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-indigo-600/15 rounded-full blur-[120px] -z-10" />
      <div className="pointer-events-none absolute top-48 left-1/4 w-[350px] h-[350px] bg-purple-600/10 rounded-full blur-[100px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Hero Header Content */}
        <div className="mx-auto max-w-4xl text-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/[0.08] px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-indigo-300 shadow-[0_0_20px_rgba(99,102,241,0.2)]">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>Manage · Monitor · Execute with Autonomous AI</span>
          </div>

          {/* Main Headline */}
          <h1 className="mt-8 text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-[68px] leading-[1.08]">
            Manage, Monitor, and Execute Enterprise Workflows with{" "}
            <span className="bg-gradient-to-r from-white via-indigo-100 to-indigo-300 bg-clip-text text-transparent">
              Autonomous AI Agents.
            </span>
          </h1>

          {/* Subtitle with clean SaaS positioning */}
          <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Accelerate pipeline velocity, eliminate manual data entry across your CRM and communication channels, and orchestrate multi-agent workflows with enterprise-grade observability and zero data risk.
          </p>

          {/* 4 Architectural Benefit Badges */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5">
            <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/25 bg-indigo-500/10 px-3.5 py-1 text-xs font-medium text-indigo-300">
              <Cpu className="h-3.5 w-3.5 text-indigo-400" />
              <span>Manage: Leads, Context & Processes</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3.5 py-1 text-xs font-medium text-emerald-300">
              <Activity className="h-3.5 w-3.5 text-emerald-400" />
              <span>Monitor: Execution Observability & Audit Logs</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/25 bg-purple-500/10 px-3.5 py-1 text-xs font-medium text-purple-300">
              <ShieldCheck className="h-3.5 w-3.5 text-purple-400" />
              <span>Execute: Multi-Agent Workflows Across Tools</span>
            </div>
            <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/25 bg-amber-500/10 px-3.5 py-1 text-xs font-medium text-amber-300">
              <UserCheck className="h-3.5 w-3.5 text-amber-400" />
              <span>Human-in-the-Loop Control</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => openDemo()}
              className="glow-button inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white shadow-[0_0_25px_rgba(99,102,241,0.4)]"
            >
              <span>Book an Enterprise Demo</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <a
              href="#governance"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-7 py-4 text-base font-semibold text-white backdrop-blur-md transition-all hover:bg-white/[0.08] hover:border-white/30"
            >
              <span>Explore Architecture</span>
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </a>
          </div>

          <p className="mt-4 text-xs font-medium text-slate-400">
            Connects seamlessly with your CRM, WhatsApp Cloud, Google Workspace, Slack, and internal APIs.
          </p>
        </div>

        {/* Interactive Hero Dashboard Widget */}
        <div className="mt-14 mx-auto max-w-5xl">
          {/* Widget Sub-tabs */}
          <div className="flex items-center justify-center gap-2 sm:gap-4 mb-4 overflow-x-auto py-2">
            {(["LEAD", "AI", "WORKFLOW", "ACTION", "ANALYTICS"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`text-xs font-mono font-bold tracking-widest px-4 py-2 rounded-lg transition-all duration-200 uppercase cursor-pointer ${
                  activeTab === tab
                    ? "text-white bg-indigo-600/30 border border-indigo-400 shadow-[0_0_15px_rgba(99,102,241,0.35)] scale-105"
                    : "text-slate-400 hover:text-slate-200 border border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.05]"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Main Dashboard Card Container */}
          <div className="relative rounded-2xl border border-white/10 bg-[#0d1229]/90 p-5 sm:p-7 shadow-[0_25px_80px_rgba(0,0,0,0.65)] backdrop-blur-xl glow-card-purple transition-all duration-300">
            <div className="mb-3 flex justify-end">
              <IllustrativeBadge />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
              
              {/* Left Column: Dynamic Metrics based on activeTab */}
              <div className="md:col-span-4 rounded-xl border border-white/[0.07] bg-[#090d20]/80 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                    <span className="text-sm font-semibold text-white tracking-wide">{current.leftTitle}</span>
                    <span className="text-[10px] font-mono text-indigo-300 bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                      {current.leftBadge}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mt-5">
                    {current.stats.map((s, idx) => (
                      <div key={idx} className="rounded-lg bg-white/[0.03] p-3 border border-white/[0.04]">
                        <div className={`text-2xl font-bold tracking-tight ${s.color}`}>{s.val}</div>
                        <div className="text-xs text-slate-400 mt-1">{s.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400">
                  <span>{current.footerNote}</span>
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                </div>
              </div>

              {/* Center Column: Interactive Graphic & Live State */}
              <div className="md:col-span-5 rounded-xl border border-indigo-500/20 bg-[#090d20]/80 p-5 flex flex-col items-center justify-between relative overflow-hidden">
                <div className="w-full flex items-center justify-between pb-3 border-b border-white/[0.06]">
                  <span className="text-sm font-semibold text-white tracking-wide flex items-center gap-2">
                    <Zap className="h-4 w-4 text-indigo-400" />
                    {current.centerTitle}
                  </span>
                  <span className="text-[10px] font-mono text-indigo-400 uppercase tracking-wider bg-indigo-500/10 px-2 py-0.5 rounded border border-indigo-500/20">
                    Active
                  </span>
                </div>

                {/* Animated Graph Diagram */}
                <div className="relative my-4 w-full h-36 flex items-center justify-center">
                  <svg className="w-full h-full" viewBox="0 0 300 130" fill="none">
                    {/* Connecting lines */}
                    <line x1="50" y1="65" x2="150" y2="35" stroke="rgba(99, 102, 241, 0.45)" strokeWidth="2" strokeDasharray="4 4" className="subtle-node-line" />
                    <line x1="50" y1="65" x2="150" y2="95" stroke="rgba(99, 102, 241, 0.45)" strokeWidth="2" strokeDasharray="4 4" className="subtle-node-line" />
                    <line x1="150" y1="35" x2="250" y2="65" stroke="rgba(168, 85, 247, 0.45)" strokeWidth="2" strokeDasharray="4 4" className="subtle-node-line" />
                    <line x1="150" y1="95" x2="250" y2="65" stroke="rgba(168, 85, 247, 0.45)" strokeWidth="2" strokeDasharray="4 4" className="subtle-node-line" />
                    <line x1="150" y1="35" x2="150" y2="95" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1.5" />

                    {/* Left Node */}
                    <circle cx="50" cy="65" r="14" fill="#131938" stroke="#6366f1" strokeWidth="2" />
                    <circle cx="50" cy="65" r="5" fill="#a5b4fc" />

                    {/* Center Top */}
                    <circle cx="150" cy="35" r="15" fill="#131938" stroke="#8b5cf6" strokeWidth="2" />
                    <circle cx="150" cy="35" r="5" fill="#c084fc" />

                    {/* Center Bottom */}
                    <circle cx="150" cy="95" r="15" fill="#131938" stroke="#8b5cf6" strokeWidth="2" />
                    <circle cx="150" cy="95" r="5" fill="#c084fc" />

                    {/* Right Node */}
                    <circle cx="250" cy="65" r="16" fill="#17224d" stroke="#10b981" strokeWidth="2.5" />
                    <circle cx="250" cy="65" r="6" fill="#34d399" />
                  </svg>
                </div>

                <div className="w-full text-center space-y-2">
                  <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/15 px-4 py-1.5 text-xs font-medium text-indigo-200">
                    <span className="h-2 w-2 rounded-full bg-indigo-400 animate-pulse" />
                    <span>{eventTriggered ? "Processing Inbound Webhook Payload (0.18s)..." : current.status}</span>
                  </div>
                  <div>
                    <button
                      type="button"
                      onClick={() => {
                        setEventTriggered(true);
                        setTimeout(() => setEventTriggered(false), 2000);
                      }}
                      className="text-[11px] font-mono text-amber-300 hover:text-amber-200 bg-amber-400/10 hover:bg-amber-400/20 border border-amber-400/30 px-3 py-1 rounded-full transition-colors inline-flex items-center gap-1.5"
                    >
                      <Sparkles className="h-3 w-3 text-amber-400" />
                      {eventTriggered ? "Signal Ingested ✓" : `Simulate ${activeTab} Signal`}
                    </button>
                  </div>
                </div>
              </div>

              {/* Right Column: Dynamic Business Insights */}
              <div className="md:col-span-3 rounded-xl border border-white/[0.07] bg-[#090d20]/80 p-5 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
                    <span className="text-sm font-semibold text-white tracking-wide">Live Signals</span>
                    <Bot className="h-4 w-4 text-purple-400" />
                  </div>
                  <ul className="mt-4 space-y-3">
                    {current.insights.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <span className={`h-1.5 w-1.5 rounded-full mt-1.5 shrink-0 ${
                          idx === 0 ? "bg-amber-400" : idx === 1 ? "bg-indigo-400" : idx === 2 ? "bg-emerald-400" : "bg-purple-400"
                        }`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-4 pt-3 border-t border-white/[0.06] text-[11px] text-slate-400 flex items-center justify-between">
                  <span>Updated live</span>
                  <span className="text-emerald-400 font-mono">100% online</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
