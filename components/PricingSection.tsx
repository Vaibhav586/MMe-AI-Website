"use client";

import { useState } from "react";
import { Check, Sparkles, Lock, EyeOff, UserCog, Link2, CheckCircle2, ArrowDown } from "lucide-react";

interface PricingSectionProps {
  onOpenDemo: (planName?: string) => void;
}

export function PricingSection({ onOpenDemo }: PricingSectionProps) {
  const [selectedPlan, setSelectedPlan] = useState<string>("Growth");

  const plans = [
    {
      id: "basic",
      name: "BASIC",
      badge: "GROWING BUSINESS",
      tagline: "Growing businesses / boutique sales teams",
      setupPrice: "₹19,999",
      setupLabel: "one-time",
      monthlyPrice: "₹9,999",
      monthlyOldPrice: "₹20,000",
      setupOldPrice: "₹29,999",
      seats: "Up to 5 seats",
      aiCapacity: "Standard AI capacity",
      features: [
        "Core Manage–Monitor–Execute platform",
        "Standard AI capacity",
        "Up to 5 team seats",
        "Daily velocity safeguards",
        "Real-time execution observability",
        "Standard email & chat support",
      ],
      popular: false,
      ctaText: "Talk to MME AI",
    },
    {
      id: "growth",
      name: "GROWTH",
      badge: "RECOMMENDED FOR SCALING TEAMS",
      tagline: "Scaling mid-market companies / RevOps teams",
      setupPrice: "₹44,999",
      setupLabel: "one-time",
      monthlyPrice: "₹24,999",
      monthlyOldPrice: "₹50,000",
      setupOldPrice: "₹59,999",
      seats: "Up to 15 seats",
      aiCapacity: "Higher AI capacity",
      features: [
        "Core Manage–Monitor–Execute platform",
        "Higher AI capacity",
        "Up to 15 team seats",
        "Daily velocity safeguards",
        "Real-time execution observability",
        "Priority workflow execution",
        "Advanced multi-agent capabilities",
        "Priority uptime",
        "Dedicated onboarding specialist",
      ],
      popular: true,
      ctaText: "Talk to MME AI",
    },
    {
      id: "enterprise",
      name: "ENTERPRISE",
      badge: "FULL GOVERNANCE",
      tagline: "Large enterprises / high-volume operations",
      setupPrice: "₹75,999",
      setupLabel: "one-time",
      monthlyPrice: "₹49,999",
      monthlyOldPrice: "₹1,00,000",
      setupOldPrice: "₹99,999",
      seats: "Unlimited / extended",
      aiCapacity: "Custom / high-volume",
      features: [
        "Core Manage–Monitor–Execute platform",
        "Custom / high-volume AI capacity",
        "Unlimited / extended seats",
        "Daily velocity safeguards",
        "Real-time execution observability",
        "Priority workflow execution",
        "Advanced multi-agent capabilities",
        "Priority uptime",
        "Dedicated onboarding",
        "Dedicated execution support",
        "Audit logs & compliance reporting",
        "BYOK (Bring Your Own Key)",
        "Private deployment",
        "Custom SLAs",
      ],
      popular: false,
      ctaText: "Talk to MME AI",
    },
  ];

  return (
    <section id="pricing" className="relative py-20 lg:py-28 bg-[#060813] border-t border-b border-white/[0.06]">
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-600/10 rounded-full blur-[140px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/[0.08] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>Automation • AI • Managed Workflows</span>
          </div>
          <h2 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Choose the Right AI Business OS for Your Scale
          </h2>
          <p className="mt-3 text-sm text-slate-400 max-w-xl mx-auto">
            Built to scale from focused automation to business-critical AI operations.
          </p>
        </div>

        {/* 3 Pricing Cards */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.name;
            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.name)}
                className={`cursor-pointer rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? "border-2 border-indigo-400 bg-[#0b1030] shadow-[0_0_48px_rgba(99,102,241,0.18)] lg:-translate-y-2"
                    : isSelected
                    ? "border border-indigo-500/50 bg-[#0d122e] shadow-[0_0_24px_rgba(99,102,241,0.12)]"
                    : "border border-white/[0.08] bg-[#090d22]/90 hover:border-white/20"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-indigo-500 px-4 py-0.5 text-[10px] font-extrabold tracking-widest text-white uppercase shadow-md whitespace-nowrap">
                    {plan.badge}
                  </div>
                )}

                <div>
                  {/* Plan name + seats */}
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-2xl font-black tracking-tight text-white">{plan.name}</h3>
                    <span className="text-[10px] font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded shrink-0 mt-1">
                      {plan.seats}
                    </span>
                  </div>

                  <p className="mt-1 text-xs text-slate-400 leading-relaxed">{plan.tagline}</p>

                  {/* AI Capacity pill */}
                  <div className="mt-3 inline-flex items-center gap-1.5 rounded-full border border-slate-700 bg-slate-800/60 px-3 py-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
                    <span className="text-[11px] text-slate-300 font-medium">{plan.aiCapacity}</span>
                  </div>

                  {/* Pricing */}
                  <div className="mt-5 pb-5 border-b border-white/[0.07] space-y-3">
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">One-time Setup</span>
                      {plan.setupOldPrice && (
                        <div className="flex items-baseline gap-2 mt-0.5">
                          <span className="text-sm font-medium text-slate-600 line-through font-mono">{plan.setupOldPrice}</span>
                        </div>
                      )}
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-3xl font-black tracking-tight text-white font-mono">{plan.setupPrice}</span>
                        <span className="text-xs text-slate-500">{plan.setupLabel}</span>
                      </div>
                    </div>
                    <div>
                      <span className="text-[10px] font-mono uppercase tracking-wider text-slate-500">Monthly</span>
                      {plan.monthlyOldPrice && (
                        <div className="flex items-baseline gap-2 mt-0.5">
                          <span className="text-sm font-medium text-slate-600 line-through font-mono">{plan.monthlyOldPrice}</span>
                          <span className="text-[9px] font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-1.5 py-0.5 rounded">Current Price</span>
                        </div>
                      )}
                      <div className="flex items-baseline gap-1.5 mt-0.5">
                        <span className="text-2xl font-black tracking-tight text-indigo-300 font-mono">{plan.monthlyPrice}</span>
                        <span className="text-xs text-slate-400">/ month</span>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <ul className="mt-5 space-y-2.5">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="h-3.5 w-3.5 shrink-0 mt-0.5 text-indigo-400" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 pt-5 border-t border-white/[0.06]">
                  <button
                    type="button"
                    onClick={(e) => { e.stopPropagation(); onOpenDemo(`${plan.name} Plan`); }}
                    className={`w-full rounded-full py-3 text-xs font-bold tracking-wide transition-all ${
                      plan.popular
                        ? "bg-indigo-600 text-white hover:bg-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.35)]"
                        : "border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/30"
                    }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Comparison Strip */}
        <div className="mt-14 rounded-2xl border border-white/[0.08] bg-[#0a0e24] p-6 sm:p-8">
          <p className="text-[11px] font-mono uppercase tracking-widest text-slate-400 text-center mb-6">What Changes as You Scale?</p>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 text-center">
            {[
              { label: "AI Capacity", values: ["Standard", "Higher", "Custom / High-volume"] },
              { label: "Team Seats", values: ["5", "15", "Unlimited / extended"] },
              { label: "Workflow Priority", values: ["Standard", "Priority", "Priority / Custom"] },
              { label: "AI Agents", values: ["Standard", "Advanced multi-agent", "Advanced / Custom"] },
              { label: "Support", values: ["Standard", "Dedicated onboarding", "Dedicated execution"] },
            ].map((col) => (
              <div key={col.label} className="flex flex-col gap-2">
                <span className="text-[10px] font-mono uppercase tracking-wider text-indigo-400 font-semibold">{col.label}</span>
                {col.values.map((v, i) => (
                  <span key={i} className={`text-xs rounded-lg px-2 py-1.5 ${
                    i === 0 ? "bg-slate-800/60 text-slate-300" :
                    i === 1 ? "bg-indigo-500/10 border border-indigo-500/20 text-indigo-200" :
                    "bg-indigo-600/15 border border-indigo-400/25 text-indigo-100 font-medium"
                  }`}>{v}</span>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Value Progression */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 text-center">
          {[
            { tier: "BASIC", label: "Start" },
            { tier: "GROWTH", label: "Scale" },
            { tier: "ENTERPRISE", label: "Control & Govern" },
          ].map((item, i) => (
            <div key={item.tier} className="flex items-center gap-3">
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-xs font-black tracking-widest text-white">{item.tier}</span>
                <span className="text-[10px] text-slate-400">{item.label}</span>
              </div>
              {i < 2 && <ArrowDown className="h-4 w-4 text-indigo-500 sm:rotate-[-90deg]" />}
            </div>
          ))}
        </div>
        <p className="mt-4 text-center text-sm font-semibold text-white">More than more features — more operational capacity.</p>
        <p className="mt-1 text-center text-xs text-slate-400 max-w-lg mx-auto">
          Upgrade as your AI workload, automation volume, team size and governance needs grow.
        </p>

        {/* AI Capacity Info Box */}
        <div className="mt-10 rounded-xl border border-indigo-500/20 bg-indigo-500/[0.05] p-5 sm:p-6 max-w-2xl mx-auto">
          <p className="text-[11px] font-mono uppercase tracking-widest text-indigo-400 mb-3">AI Capacity</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs text-slate-300">
            <div><span className="font-semibold text-white">Basic</span><br />Standard monthly AI allocation</div>
            <div><span className="font-semibold text-white">Growth</span><br />Higher monthly AI allocation</div>
            <div><span className="font-semibold text-white">Enterprise</span><br />Custom / high-volume allocation based on workload</div>
          </div>
          <p className="mt-4 text-[10px] text-slate-500 leading-relaxed">
            AI capacity is designed around expected workload and usage. Exact credit allowances are determined by MME AI based on workload, model/API costs and deployment requirements.
          </p>
        </div>

        {/* When to Upgrade */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          <div className="rounded-xl border border-white/[0.07] bg-[#0a0e24] p-5">
            <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">Basic → Growth</p>
            <p className="text-xs text-slate-300 leading-relaxed">Your automation usage is growing, teams are expanding, and workflows are becoming more AI-intensive.</p>
          </div>
          <div className="rounded-xl border border-white/[0.07] bg-[#0a0e24] p-5">
            <p className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">Growth → Enterprise</p>
            <p className="text-xs text-slate-300 leading-relaxed">You need higher-scale automation, stronger governance, dedicated support, custom controls or private deployment.</p>
          </div>
        </div>

        {/* Enterprise Trust Strip */}
        <div className="mt-10 rounded-2xl border border-white/[0.08] bg-[#0a0e24] p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/15 border border-indigo-500/20 text-indigo-400 shrink-0 mt-0.5">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Strict Tenant Data Isolation</h4>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">Every customer runs in a fully isolated tenant with strict data boundaries and zero cross-tenant leakage.</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                <EyeOff className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Zero Model Training on Customer Data</h4>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">Your business data is never used to train AI models. Your workflows, your data, your control.</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15 border border-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                <UserCog className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Enterprise Role-Based Access Control</h4>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">Granular RBAC scopes access to exactly what every role needs—across seats, workflows, and audit trails.</p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-white/[0.08] flex flex-col items-center gap-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Link2 className="h-3.5 w-3.5 text-indigo-400" />
              Native Ecosystem Connectors
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {["Salesforce", "HubSpot", "Pipedrive", "WhatsApp Cloud API", "Slack", "Enterprise Webhooks"].map((c) => (
                <span key={c} className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-slate-300 font-medium">{c}</span>
              ))}
            </div>
          </div>
        </div>

        {/* Footer note + CTA */}
        <div className="mt-8 text-center space-y-4">
          <p className="text-[11px] text-slate-500 max-w-xl mx-auto leading-relaxed">
            Pricing and final scope may vary based on workflow complexity, integrations, deployment requirements and business needs.
          </p>
          <button
            type="button"
            onClick={() => onOpenDemo()}
            className="inline-flex items-center gap-2 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-bold px-8 py-3 transition-all shadow-[0_0_24px_rgba(99,102,241,0.3)]"
          >
            Talk to MME AI
          </button>
          <p className="text-xs text-slate-500">www.mme-ai.com &nbsp;·&nbsp; Less busywork. More business.</p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />No long-term lock-in on monthly plans</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />SOC 2 Type II compliant infrastructure</span>
            <span className="flex items-center gap-1.5"><CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />Upgrade, downgrade, or cancel anytime</span>
          </div>
        </div>

      </div>
    </section>
  );
}
