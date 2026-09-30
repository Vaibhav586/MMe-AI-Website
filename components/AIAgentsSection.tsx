"use client";

import { useState } from "react";
import { UserCheck, BellRing, BarChart, PenTool, Sparkles, Play, CheckCircle2, Bot } from "lucide-react";
import { IllustrativeBadge } from "@/components/IllustrativeBadge";

export function AIAgentsSection() {
  const [selectedAgent, setSelectedAgent] = useState<string>("lead-qualifier");
  const [simulating, setSimulating] = useState<boolean>(false);
  const [simulationLog, setSimulationLog] = useState<string | null>(null);

  const agents = [
    {
      id: "lead-qualifier",
      title: "Lead Qualifier",
      icon: UserCheck,
      desc: "Understands incoming enquiries and organizes lead information.",
      input: "New enquiry from web form",
      reasoning: "Extracts budget (₹2.8 Cr) & intent (Immediate)",
      action: "Lead tagged #HighIntent & routed to senior rep",
      tags: ["AI-assisted", "Workflow-based"],
      testPrompt: "Parsed Vikramaditya's inquiry for 3 BHK high-rise. Budget confirmed, credit score pre-verified, matched to Hebbal projects in 240ms.",
    },
    {
      id: "followup-agent",
      title: "Follow-up Agent",
      icon: BellRing,
      desc: "Helps identify and manage follow-up actions.",
      input: "Lead idle > 2 days in pipeline",
      reasoning: "Flags follow-up priority & draft personalized copy",
      action: "Reminder suggested & WhatsApp scheduled",
      tags: ["AI-assisted", "Human approval where required"],
      testPrompt: "Detected 48h inactivity for Rohan Aggarwal. Auto-generated WhatsApp reminder offering weekend site visit slot. Queued for rep approval.",
    },
    {
      id: "reporting-agent",
      title: "Reporting Agent",
      icon: BarChart,
      desc: "Turns business activity into concise reports and insights.",
      input: "Weekly activity data from CRM & ERP",
      reasoning: "Summarizes key conversion trends & leakages",
      action: "Executive summary drafted & sent to founders",
      tags: ["AI-assisted", "Workflow-based"],
      testPrompt: "Synthesized 280 inquiries, 32 site visits, and 12 deal closures. Identified 18% MoM pipeline velocity increase with Google Search ads.",
    },
    {
      id: "content-agent",
      title: "Content Agent",
      icon: PenTool,
      desc: "Assists with business content and communication.",
      input: "Customer message context & property specs",
      reasoning: "Drafts tailored luxury value proposition",
      action: "Brochure copy & pitch ready for review",
      tags: ["AI-assisted", "Human approval where required"],
      testPrompt: "Drafted tailored luxury brochure teaser for Prestige Towers with emphasis on private deck and clubhouse amenities. Ready for WhatsApp dispatch.",
    },
  ];

  const handleRunSimulation = (agentId: string) => {
    setSelectedAgent(agentId);
    setSimulating(true);
    setSimulationLog("Running neural reasoning pipeline...");
    setTimeout(() => {
      const found = agents.find(a => a.id === agentId);
      setSimulationLog(found?.testPrompt || "Task successfully completed!");
      setSimulating(false);
    }, 800);
  };

  return (
    <section className="relative py-24 lg:py-32 bg-[#060813] border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/[0.08] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>AI Agents Fleet</span>
          </div>
          <h2 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            AI that doesn't stop at answering.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Let AI assist with the repetitive work around your business. Click any agent below to test run its reasoning.
          </p>
        </div>

        {/* 4 Agent Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent) => {
            const Icon = agent.icon;
            const isSelected = selectedAgent === agent.id;
            return (
              <div
                key={agent.id}
                onClick={() => setSelectedAgent(agent.id)}
                className={`cursor-pointer rounded-2xl p-6 flex flex-col justify-between transition-all duration-300 ${
                  isSelected
                    ? "border-2 border-amber-400 bg-[#121635] shadow-[0_0_30px_rgba(245,158,11,0.25)] scale-[1.02]"
                    : "border border-white/[0.08] bg-[#0c1026]/90 hover:border-indigo-500/40 hover:bg-[#101533] hover:shadow-[0_10px_35px_rgba(99,102,241,0.15)]"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <div className={`flex h-11 w-11 items-center justify-center rounded-xl border ${
                      isSelected ? "bg-amber-400/20 text-amber-300 border-amber-400/30" : "bg-indigo-500/10 border-indigo-500/20 text-indigo-400"
                    }`}>
                      <Icon className="h-5 w-5" />
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleRunSimulation(agent.id);
                      }}
                      className="rounded-lg bg-white/[0.06] hover:bg-white/[0.12] border border-white/10 px-2.5 py-1 text-[11px] text-white flex items-center gap-1 transition-colors"
                    >
                      <Play className="h-2.5 w-2.5 text-emerald-400" />
                      Test Run
                    </button>
                  </div>
                  <h3 className={`mt-4 text-base font-bold tracking-wide ${isSelected ? "text-amber-300" : "text-white"}`}>
                    {agent.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {agent.desc}
                  </p>

                  {/* Flow Steps */}
                  <div className="mt-6 space-y-2.5 text-[11px] font-mono">
                    <div className="rounded-lg bg-black/40 border border-white/[0.05] p-2.5 flex items-center justify-between text-slate-300">
                      <span className="text-slate-400">Input:</span>
                      <span className="text-white font-medium truncate ml-1">{agent.input}</span>
                    </div>
                    <div className="rounded-lg bg-indigo-500/[0.08] border border-indigo-500/20 p-2.5 flex items-center justify-between text-indigo-200">
                      <span className="text-indigo-400">Reasoning:</span>
                      <span className="font-medium truncate ml-1">{agent.reasoning}</span>
                    </div>
                    <div className="rounded-lg bg-emerald-500/[0.08] border border-emerald-500/20 p-2.5 flex items-center justify-between text-emerald-200">
                      <span className="text-emerald-400">Action:</span>
                      <span className="font-medium truncate ml-1">{agent.action}</span>
                    </div>
                  </div>
                </div>

                {/* Footer Tags */}
                <div className="mt-6 pt-4 border-t border-white/[0.06] flex flex-wrap gap-1.5">
                  {agent.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-white/[0.04] px-2 py-0.5 text-[10px] text-slate-400 border border-white/[0.06]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            );
          })}
        </div>

        {/* Live Simulation Output Box */}
        <div className="mt-10 rounded-2xl border border-white/[0.08] bg-[#0c1028]/95 p-6 shadow-xl backdrop-blur-xl">
          <div className="flex items-center justify-between pb-3 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <Bot className="h-4 w-4 text-indigo-400" />
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                Live Agent Simulation Terminal ({agents.find(a => a.id === selectedAgent)?.title})
              </span>
            </div>
            <button
              type="button"
              onClick={() => handleRunSimulation(selectedAgent)}
              className="text-xs bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-3 py-1 rounded-lg flex items-center gap-1.5 transition-colors"
            >
              <Play className="h-3 w-3" />
              {simulating ? "Processing..." : "Run Test Simulation"}
            </button>
          </div>
          <div className="mt-3 flex justify-end">
            <IllustrativeBadge />
          </div>
          <div className="mt-2 p-4 rounded-xl bg-black/60 border border-white/5 font-mono text-xs text-indigo-200 leading-relaxed">
            {simulating ? (
              <span className="flex items-center gap-2 text-amber-400 animate-pulse">
                <span className="h-2 w-2 rounded-full bg-amber-400" />
                Executing model reasoning graph...
              </span>
            ) : simulationLog ? (
              <div>
                <span className="text-emerald-400 font-bold block mb-1">✓ EXECUTION SUCCESS (240ms):</span>
                <span>{simulationLog}</span>
              </div>
            ) : (
              <div>
                <span className="text-slate-400 font-bold block mb-1">PROMPT SIMULATION READY:</span>
                <span>{agents.find(a => a.id === selectedAgent)?.testPrompt}</span>
              </div>
            )}
          </div>
        </div>

      </div>
    </section>
  );
}

