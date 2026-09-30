"use client";

import { useState } from "react";
import { 
  UsersRound, 
  UserCheck, 
  Workflow, 
  BellRing, 
  BarChart3, 
  PenTool, 
  LayoutGrid, 
  Bot,
  Sparkles,
  Clock,
  Send,
  CheckCircle2,
  Play
} from "lucide-react";
import { IllustrativeBadge } from "@/components/IllustrativeBadge";

export function ProductModules() {
  const [selectedModule, setSelectedModule] = useState<string>("lead-mgmt");
  const [leadStatus, setLeadStatus] = useState<string>("Open");
  const [reminderSent, setReminderSent] = useState<boolean>(false);
  const [captionDraft, setCaptionDraft] = useState<string>("Exclusive 3 BHK Villa in North Bangalore starting at ₹2.4 Cr! Click to schedule a private tour.");
  const [agentTriggered, setAgentTriggered] = useState<boolean>(false);
  const [activeMetric, setActiveMetric] = useState<number>(2);

  const modules = [
    {
      id: "lead-mgmt",
      icon: UserCheck,
      title: "Lead Management",
      description: "Capture and organize leads. Track stages, ownership, activity and next actions.",
      preview: (
        <div className="mt-4 rounded-lg bg-black/40 border border-white/[0.06] p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            <span className="text-xs text-slate-300 font-medium">New Lead #8492</span>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setLeadStatus(prev => prev === "Open" ? "Qualified ✓" : prev === "Qualified ✓" ? "Negotiation" : "Open");
            }}
            className="rounded bg-indigo-500/20 hover:bg-indigo-500/40 px-2 py-0.5 text-[11px] font-semibold text-indigo-300 border border-indigo-500/30 transition-colors"
          >
            {leadStatus}
          </button>
        </div>
      ),
    },
    {
      id: "customer-mgmt",
      icon: UsersRound,
      title: "Customer Management",
      description: "Keep customer context, conversations, activity and important information together.",
      preview: (
        <div className="mt-4 rounded-lg bg-black/40 border border-white/[0.06] p-3 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="h-7 w-7 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-[11px] font-bold text-white">
              VS
            </div>
            <div className="flex flex-col text-left">
              <span className="text-xs text-slate-200 font-medium">Vikramaditya S.</span>
              <span className="text-[10px] text-slate-400">Context synced</span>
            </div>
          </div>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
            VIP
          </span>
        </div>
      ),
    },
    {
      id: "ai-automation",
      icon: Workflow,
      title: "AI Automation",
      description: "Automate repetitive tasks and workflows based on business rules and events.",
      preview: (
        <div className="mt-4 rounded-lg bg-black/40 border border-white/[0.06] p-3 flex items-center justify-between gap-2">
          <span className="text-[11px] font-mono text-slate-300 truncate">
            if lead idle &gt; 2 days
          </span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setReminderSent(true);
              setTimeout(() => setReminderSent(false), 2500);
            }}
            className="shrink-0 rounded bg-indigo-600/30 hover:bg-indigo-600/50 px-2 py-0.5 text-[10px] font-semibold text-indigo-200 border border-indigo-400/30 flex items-center gap-1 transition-colors"
          >
            <Send className="h-2.5 w-2.5" />
            {reminderSent ? "Sent ✓" : "Trigger"}
          </button>
        </div>
      ),
    },
    {
      id: "followup-engine",
      icon: BellRing,
      title: "Follow-up Engine",
      description: "Reduce missed follow-ups with intelligent reminders, triggers and workflows.",
      preview: (
        <div className="mt-4 rounded-lg bg-black/40 border border-white/[0.06] p-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Clock className="h-3.5 w-3.5 text-amber-400 shrink-0" />
            <span className="text-[11px] text-amber-300 font-medium">
              Due: Tomorrow 11 AM
            </span>
          </div>
          <span className="text-[10px] text-emerald-400 font-mono">Auto-queued</span>
        </div>
      ),
    },
    {
      id: "analytics",
      icon: BarChart3,
      title: "Business Analytics",
      description: "Turn operational data into useful business visibility.",
      preview: (
        <div className="mt-4 rounded-lg bg-black/40 border border-white/[0.06] p-3 flex items-end justify-between h-10 px-4">
          {[16, 28, 36, 24, 32].map((h, i) => (
            <button
              key={i}
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setActiveMetric(i);
              }}
              style={{ height: `${h}px` }}
              className={`w-3 rounded-t transition-all ${
                activeMetric === i ? "bg-amber-400 shadow-[0_0_8px_rgba(245,158,11,0.5)]" : "bg-indigo-500/50 hover:bg-indigo-400"
              }`}
            />
          ))}
        </div>
      ),
    },
    {
      id: "content",
      icon: PenTool,
      title: "Content & Communication",
      description: "Help teams create and manage customer-facing content and communicates faster.",
      preview: (
        <div className="mt-4 rounded-lg bg-black/40 border border-white/[0.06] p-3 flex items-center justify-between">
          <span className="text-xs text-slate-300">WhatsApp Marketing</span>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setCaptionDraft(prev => prev.includes("Villa") ? "Prestige Towers Penthouse preview released! 3 slots left." : "Exclusive 3 BHK Villa in North Bangalore starting at ₹2.4 Cr! Click to schedule a private tour.");
            }}
            className="text-[10px] text-purple-300 bg-purple-500/20 hover:bg-purple-500/40 px-2 py-0.5 rounded border border-purple-500/30 transition-colors"
          >
            Regenerate
          </button>
        </div>
      ),
    },
    {
      id: "custom-dashboard",
      icon: LayoutGrid,
      title: "Custom Dashboard",
      description: "Build dashboards around what matters to that specific business.",
      preview: (
        <div className="mt-4 rounded-lg bg-black/40 border border-white/[0.06] p-3 flex items-center justify-between text-xs text-slate-300">
          <span>Multi-tenant view</span>
          <span className="text-[10px] font-mono text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">Configured</span>
        </div>
      ),
    },
    {
      id: "ai-agents",
      icon: Bot,
      title: "AI Agents",
      description: "Deploy AI agents for specific tasks where autonomous or semi-autonomous assistance makes sense.",
      preview: (
        <div className="mt-4 rounded-lg bg-black/40 border border-white/[0.06] p-3 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] text-emerald-300 font-medium">
              {agentTriggered ? "Scoring 98%..." : "Agent Active"}
            </span>
          </div>
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              setAgentTriggered(true);
              setTimeout(() => setAgentTriggered(false), 2000);
            }}
            className="text-[10px] bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded text-white font-mono"
          >
            Run
          </button>
        </div>
      ),
    },
  ];

  return (
    <section id="product" className="relative py-24 lg:py-32 bg-[#060813] border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-purple-500/30 bg-purple-500/[0.08] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-purple-300">
            <Sparkles className="h-3.5 w-3.5 text-purple-400" />
            <span>Interactive Product Suite</span>
          </div>
          <h2 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Everything your team needs. One intelligent workspace.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Click any card to select it and test the live micro-actions built into every module.
          </p>
        </div>

        {/* 8 Modular Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((module) => {
            const Icon = module.icon;
            const isSelected = selectedModule === module.id;
            return (
              <div
                key={module.id}
                onClick={() => setSelectedModule(module.id)}
                className={`cursor-pointer group relative rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between ${
                  isSelected
                    ? "border-2 border-amber-400 bg-[#121635] shadow-[0_0_30px_rgba(245,158,11,0.25)] scale-[1.02]"
                    : "border border-white/[0.08] bg-[#0c1026]/80 hover:border-indigo-500/40 hover:bg-[#101633] hover:shadow-[0_10px_35px_rgba(99,102,241,0.15)]"
                }`}
              >
                <div>
                  <div className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all ${
                    isSelected ? "bg-amber-400/20 text-amber-300 border-amber-400/40" : "bg-indigo-500/10 border-indigo-500/20 text-indigo-400 group-hover:scale-110"
                  }`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className={`mt-5 text-base font-bold tracking-wide ${isSelected ? "text-amber-300" : "text-white"}`}>
                    {module.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {module.description}
                  </p>
                </div>
                {module.preview}
              </div>
            );
          })}
        </div>

        {/* Dynamic Interactive Drawer for selected module */}
        <div className="mt-10 rounded-xl border border-white/[0.08] bg-[#0c1026]/90 p-5 flex flex-wrap items-center justify-between gap-4 text-xs">
          <div className="flex flex-wrap items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-emerald-400 animate-ping" />
            <span className="text-slate-300">
              Selected Module: <strong className="text-white">{modules.find(m => m.id === selectedModule)?.title}</strong>
            </span>
            <span className="text-slate-500">|</span>
            <span className="text-slate-400">Status: Integrated & Ready in Multi-tenant Bundle</span>
            <IllustrativeBadge />
          </div>
          <div className="text-indigo-400 font-mono">
            {selectedModule === "content" && captionDraft}
            {selectedModule === "lead-mgmt" && `Current Stage: ${leadStatus}`}
            {selectedModule === "ai-automation" && (reminderSent ? "Dispatched automated WhatsApp trigger!" : "Rule: Idle > 48h active")}
            {selectedModule === "analytics" && `Bar index ${activeMetric + 1} selected: Top conversion channel`}
            {selectedModule === "ai-agents" && (agentTriggered ? "Scored intent at 98% high probability" : "4 autonomous models ready")}
            {(selectedModule === "customer-mgmt" || selectedModule === "followup-engine" || selectedModule === "custom-dashboard") && "Full REST & Webhook API active"}
          </div>
        </div>

      </div>
    </section>
  );
}

