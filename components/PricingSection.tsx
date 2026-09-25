"use client";

import { useState } from "react";
import { Check, Sparkles, Zap, Lock, EyeOff, UserCog, Link2, CheckCircle2 } from "lucide-react";

interface PricingSectionProps {
  onOpenDemo: (planName?: string) => void;
}

export function PricingSection({ onOpenDemo }: PricingSectionProps) {
  const [currency, setCurrency] = useState<"INR" | "USD">("INR");
  const [selectedPlan, setSelectedPlan] = useState<string>("Pro");

  // High-ticket B2B Credit-Based Pricing Structure
  const plans = [
    {
      id: "basic",
      name: "Basic",
      badge: "GROWING BUSINESS",
      tagline: "For growing businesses & boutique sales teams",
      priceINR: "₹30,000",
      priceUSD: "$349",
      period: "/ month",
      credits: "Standard AI credit pool",
      seats: "Up to 5 Seats",
      target: "Growing businesses & boutique sales teams",
      features: [
        "Core Manage·Monitor·Execute platform",
        "Standard AI credit pool",
        "Up to 5 team seats",
        "Daily velocity safeguards",
        "Real-time execution observability",
        "Standard email & chat support",
      ],
      popular: false,
      ctaText: "Book an Enterprise Demo",
    },
    {
      id: "pro",
      name: "Pro",
      badge: "MOST POPULAR",
      tagline: "For scaling mid-market companies & RevOps teams",
      priceINR: "₹65,000",
      priceUSD: "$749",
      period: "/ month",
      credits: "Higher AI credit allocation",
      seats: "Up to 15 Seats",
      target: "Scaling mid-market & RevOps teams",
      features: [
        "Higher AI credit allocation",
        "Priority workflow execution queues",
        "Advanced multi-agent capabilities",
        "Up to 15 team seats",
        "Daily velocity safeguards & priority uptime",
        "Dedicated onboarding specialist",
      ],
      popular: true,
      ctaText: "Book Pro Enterprise Demo",
    },
    {
      id: "enterprise",
      name: "Plus / Enterprise",
      badge: "CUSTOMIZABLE",
      tagline: "For large enterprises & high-volume operations",
      priceINR: "₹1,20,000+",
      priceUSD: "$1,399+",
      period: "/ month",
      credits: "Massive / custom AI credit allowances",
      seats: "Unlimited Seats",
      target: "Large enterprises & high-volume operations",
      features: [
        "Massive or custom AI credit allowances",
        "Extended or unlimited team seats",
        "Dedicated execution support",
        "Audit logs & compliance reporting",
        "Optional BYOK (Bring Your Own Key)",
        "Custom SLAs & private deployment",
      ],
      popular: false,
      ctaText: "Talk to Solutions Engineering",
    },
  ];

  return (
    <section id="pricing" className="relative py-20 lg:py-28 bg-[#060813] border-t border-b border-white/[0.06]">
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-600/10 rounded-full blur-[140px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/[0.08] px-4 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>Value-Based Credit Pricing</span>
          </div>

          <h2 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Transparent Pricing Built for Scale.
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Predictable monthly credits covering AI reasoning and multi-step workflow executions—no confusing raw token math. Built-in daily rate safeguards keep your operations running with 100% uptime.
          </p>

          {/* Interactive Controls: Currency Switcher & Billing Cycle */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            
            {/* Currency Switcher */}
            <div className="inline-flex items-center gap-1 p-1 rounded-full border border-white/10 bg-[#0d122b] text-xs">
              <button
                type="button"
                onClick={() => setCurrency("INR")}
                className={`rounded-full px-3.5 py-1.5 font-semibold transition-all ${
                  currency === "INR"
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                ₹ INR
              </button>
              <button
                type="button"
                onClick={() => setCurrency("USD")}
                className={`rounded-full px-3.5 py-1.5 font-semibold transition-all ${
                  currency === "USD"
                    ? "bg-indigo-600 text-white shadow-sm"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                $ USD
              </button>
            </div>

            </div>
        </div>

        {/* 3 High-Ticket B2B Tiers Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => {
            const isSelected = selectedPlan === plan.name;
            const price = currency === "INR" ? plan.priceINR : plan.priceUSD;

            return (
              <div
                key={plan.id}
                onClick={() => setSelectedPlan(plan.name)}
                className={`cursor-pointer rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 relative ${
                  plan.popular
                    ? "border-2 border-amber-400 bg-[#0e153b] shadow-[0_0_40px_rgba(245,158,11,0.22)] lg:-translate-y-2 ring-1 ring-amber-400/50"
                    : isSelected
                    ? "border-2 border-indigo-400 bg-[#0d122e] shadow-[0_0_30px_rgba(99,102,241,0.25)]"
                    : "border border-white/[0.08] bg-[#090d22]/90 hover:border-white/20 hover:bg-[#0c102a]"
                }`}
              >
                {/* Popular Pill */}
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-amber-400 to-amber-500 px-4 py-0.5 text-[10px] font-extrabold tracking-widest text-slate-950 uppercase shadow-md">
                    {plan.badge}
                  </div>
                )}

                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
                      {plan.badge}
                    </span>
                    <span className="text-[11px] font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded">
                      {plan.seats}
                    </span>
                  </div>

                  <h3 className={`mt-2 text-2xl font-extrabold tracking-tight ${plan.popular ? "text-amber-300" : "text-white"}`}>
                    {plan.name}
                  </h3>

                  <p className="mt-1 text-xs text-slate-400 min-h-[32px] leading-relaxed">
                    {plan.tagline}
                  </p>

                  {/* Price Banner */}
                  <div className="mt-5 pb-5 border-b border-white/[0.08]">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-black tracking-tight text-white font-mono">
                        {price}
                      </span>
                      <span className="text-xs text-slate-400 font-medium">
                        {plan.period}
                      </span>
                    </div>

                    <div className="mt-2.5 inline-flex items-center gap-1.5 rounded-lg bg-white/[0.04] border border-white/[0.06] px-3 py-1 text-xs text-slate-300 font-mono">
                      <Zap className="h-3.5 w-3.5 text-amber-400" />
                      <span>{plan.credits}</span>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-5">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 block mb-3 font-semibold">
                      What's Included:
                    </span>
                    <ul className="space-y-2.5 text-xs text-slate-300">
                      {plan.features.map((feat, idx) => (
                        <li key={idx} className="flex items-start gap-2.5">
                          <Check className={`h-4 w-4 shrink-0 mt-0.5 ${plan.popular ? "text-amber-400" : "text-indigo-400"}`} />
                          <span className="leading-snug">{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Plan CTA Button */}
                <div className="mt-8 pt-5 border-t border-white/[0.06]">
                  <button
                    type="button"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenDemo(`${plan.name} Plan (${currency})`);
                    }}
                    className={`w-full rounded-full py-3 text-xs font-bold tracking-wide transition-all ${
                      plan.popular
                        ? "bg-amber-400 text-slate-950 hover:bg-amber-300 shadow-[0_0_20px_rgba(245,158,11,0.35)]"
                        : isSelected
                        ? "bg-indigo-600 text-white hover:bg-indigo-500 shadow-sm"
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

        {/* Enterprise Trust & Ecosystem Strip */}
        <div className="mt-14 rounded-2xl border border-white/[0.08] bg-[#0a0e24] p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="flex items-start gap-3.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-500/15 border border-indigo-500/20 text-indigo-400 shrink-0 mt-0.5">
                <Lock className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Strict Tenant Data Isolation</h4>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  Every customer runs in a fully isolated tenant with strict data boundaries and zero cross-tenant leakage.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/15 border border-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                <EyeOff className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Zero Model Training on Customer Data</h4>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  Your business data is never used to train AI models. Your workflows, your data, your control.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5">
              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-amber-500/15 border border-amber-500/20 text-amber-400 shrink-0 mt-0.5">
                <UserCog className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Enterprise Role-Based Access Control</h4>
                <p className="mt-1 text-xs text-slate-400 leading-relaxed">
                  Granular RBAC scopes access to exactly what every role needs—across seats, workflows, and audit trails.
                </p>
              </div>
            </div>

          </div>

          {/* B2B Ecosystem Connectors */}
          <div className="mt-6 pt-6 border-t border-white/[0.08] flex flex-col items-center gap-3">
            <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
              <Link2 className="h-3.5 w-3.5 text-indigo-400" />
              Native Ecosystem Connectors
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {["Salesforce", "HubSpot", "Pipedrive", "WhatsApp Cloud API", "Slack", "Enterprise Webhooks"].map((c) => (
                <span key={c} className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs text-slate-300 font-medium">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Final Reassurance Note */}
        <div className="mt-8 text-center text-xs text-slate-400 flex flex-wrap items-center justify-center gap-6">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            <span>No long-term lock-in on monthly plans</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            <span>SOC 2 Type II compliant infrastructure</span>
          </span>
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-400" />
            <span>Upgrade, downgrade, or cancel anytime</span>
          </span>
        </div>

      </div>
    </section>
  );
}
