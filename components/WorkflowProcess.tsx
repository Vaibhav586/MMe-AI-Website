"use client";

import { useState } from "react";
import { CheckCircle2, Clock, FileText, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";

export function WorkflowProcess() {
  const [activeStep, setActiveStep] = useState(2); // 0-indexed, default is step 03 (index 2)

  const steps = [
    {
      num: "01",
      title: "Discover",
      desc: "Understand how your business currently operates.",
      timeline: "Days 1 - 3",
      focus: "Operational Audit & Tech Stack Inspection",
      deliverables: [
        "Current Workflow Blueprint & tool map",
        "Data silo & leakage identification",
        "Process bottleneck assessment",
      ],
      activities: "Interviews with team leads, inspecting existing CRM / WhatsApp setup, mapping client touchpoints.",
      sampleOutput: "System diagnostic identifying 4 critical drops in current lead-to-booking funnel.",
    },
    {
      num: "02",
      title: "Map",
      desc: "Identify bottlenecks, repetitive tasks and disconnected processes.",
      timeline: "Days 4 - 7",
      focus: "Process Redesign & Automation Scoring",
      deliverables: [
        "Target State Architecture Diagram",
        "High-ROI Automation Priority Scorecard",
        "Trigger & Action Logic Flowcharts",
      ],
      activities: "Defining boundary conditions, streamlining manual approvals, designing sub-second handoffs.",
      sampleOutput: "Engineered workflow designed to cut lead response latency from 4 hours to under 2 minutes.",
    },
    {
      num: "03",
      title: "Configure",
      desc: "Build the dashboard, workflows and business-specific experience.",
      highlight: true,
      timeline: "Week 2",
      focus: "Tenant Setup, Dashboards & API Connections",
      deliverables: [
        "Dedicated Multi-tenant Workspace & Domain",
        "WhatsApp Cloud API & CRM Schema Sync",
        "Role-Specific Views (Founder / Sales / Ops)",
      ],
      activities: "Custom database partitioning, pipeline stage customization, live credential verification.",
      sampleOutput: "Custom tenant workspace deployed with branded portals and database isolation.",
    },
    {
      num: "04",
      title: "Automate",
      desc: "Introduce AI and automation where they create real value.",
      timeline: "Week 3",
      focus: "AI Agent Fleet Deployment & Guardrails",
      deliverables: [
        "Autonomous Lead Qualifier Agent",
        "Cadence Engine for WhatsApp Follow-ups",
        "Human-in-the-loop Approval System",
      ],
      activities: "Calibrating LLM prompt reasoning to company tone, setting safety confidence thresholds, integration dry runs.",
      sampleOutput: "4 AI agents live qualifying and advancing leads with 99.2% accuracy.",
    },
    {
      num: "05",
      title: "Optimize",
      desc: "Improve the system as your business evolves.",
      timeline: "Ongoing & 30-Day Review",
      focus: "Performance Tuning & Conversion Lift",
      deliverables: [
        "Weekly Executive Performance Summaries",
        "Agent Prompt Calibration & New Triggers",
        "Quarterly Roadmap & Feature Expansion",
      ],
      activities: "Measuring team time saved, monitoring conversion lift, scaling workflows across new service lines.",
      sampleOutput: "Continuous feedback loop delivering +24% higher close rate in 30 days.",
    },
  ];

  const current = steps[activeStep];

  return (
    <section id="how-it-works" className="relative py-24 lg:py-32 bg-[#060812] border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-500/[0.08] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-amber-300">
            <Sparkles className="h-3.5 w-3.5 text-amber-400" />
            <span>Implementation Framework</span>
          </div>
          <h2 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Built around your workflow.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Click any phase below to inspect deliverables, timeline, and execution activities.
          </p>
        </div>

        {/* 5-Step Process Pipeline */}
        <div className="mt-20 relative">
          {/* Background Connecting Line (desktop) */}
          <div className="hidden lg:block absolute top-[28px] left-[10%] right-[10%] h-[2px] bg-white/[0.12] -z-0" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 lg:gap-4 relative z-10">
            {steps.map((step, idx) => {
              const isSelected = activeStep === idx;
              const isStep03 = step.highlight;

              return (
                <button
                  key={step.num}
                  type="button"
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer rounded-2xl p-6 transition-all duration-300 flex flex-col items-center text-center text-left ${
                    isSelected
                      ? "border-2 border-amber-400 bg-[#121630] shadow-[0_0_30px_rgba(245,158,11,0.25)] ring-1 ring-amber-400/50 scale-105"
                      : isStep03
                      ? "border border-amber-500/50 bg-[#0d1228] hover:border-amber-400"
                      : "border border-white/[0.08] bg-[#0a0e22] hover:border-white/20 hover:bg-[#0e132e]"
                  }`}
                >
                  {/* Number Badge */}
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-full text-base font-mono font-bold transition-all shadow-md ${
                      isSelected
                        ? "bg-amber-400 text-slate-950 scale-110 shadow-[0_0_20px_rgba(245,158,11,0.4)]"
                        : isStep03
                        ? "bg-[#151c38] text-amber-300 border border-amber-500/40"
                        : "bg-[#101428] text-slate-300 border border-white/10"
                    }`}
                  >
                    {step.num}
                  </div>

                  {/* Title */}
                  <h3
                    className={`mt-5 text-lg font-bold tracking-tight ${
                      isSelected ? "text-amber-300" : isStep03 ? "text-amber-400" : "text-white"
                    }`}
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs leading-relaxed text-slate-400">
                    {step.desc}
                  </p>
                </button>
              );
            })}
          </div>

          {/* DYNAMIC EXPANDED DETAIL CARD FOR SELECTED STEP */}
          <div className="mt-12 rounded-2xl border border-amber-500/30 bg-[#0c1028]/95 p-6 sm:p-8 shadow-2xl backdrop-blur-xl animate-in fade-in duration-300">
            <div className="flex flex-wrap items-center justify-between pb-5 border-b border-white/[0.08] gap-3">
              <div className="flex items-center gap-3">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-400/20 text-amber-300 font-mono font-bold text-sm border border-amber-400/30">
                  {current.num}
                </span>
                <div>
                  <h3 className="text-lg font-bold text-white tracking-wide flex items-center gap-2">
                    Phase {current.num}: {current.title}
                  </h3>
                  <p className="text-xs text-amber-300/90">{current.focus}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/25 px-3 py-1 text-xs font-mono text-indigo-300">
                  <Clock className="h-3.5 w-3.5 text-indigo-400" />
                  {current.timeline}
                </span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
              {/* Deliverables */}
              <div className="md:col-span-6 space-y-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block font-semibold">
                  Key Deliverables
                </span>
                <div className="space-y-2">
                  {current.deliverables.map((d) => (
                    <div key={d} className="flex items-start gap-2.5 rounded-xl border border-white/[0.06] bg-[#090d20] p-3 text-xs text-slate-200">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Execution Details & Output Sample */}
              <div className="md:col-span-6 space-y-4">
                <div className="rounded-xl border border-white/[0.06] bg-[#090d20] p-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block mb-1.5">
                    What Happens During This Phase
                  </span>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {current.activities}
                  </p>
                </div>

                <div className="rounded-xl border border-indigo-500/30 bg-indigo-950/20 p-4">
                  <span className="text-xs font-mono uppercase tracking-wider text-indigo-300 flex items-center gap-1.5 mb-1.5">
                    <FileText className="h-3.5 w-3.5" />
                    Verified Output Sample
                  </span>
                  <p className="text-xs text-slate-200 italic font-mono">
                    "{current.sampleOutput}"
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs text-slate-400">
              <span>MMe-AI Implementation Protocol</span>
              <button
                type="button"
                onClick={() => setActiveStep((activeStep + 1) % 5)}
                className="text-amber-400 hover:text-amber-300 font-semibold flex items-center gap-1"
              >
                <span>Next Phase ({steps[(activeStep + 1) % 5].title})</span>
                <ArrowRight className="h-3 w-3" />
              </button>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

