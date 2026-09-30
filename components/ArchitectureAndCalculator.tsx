"use client";

import { useState } from "react";
import { 
  Server, 
  Database, 
  Globe, 
  Cloud, 
  CheckCircle2, 
  Calculator,
  Sparkles,
  RefreshCw,
  Building
} from "lucide-react";
import { useDemoModal } from "@/components/DemoModalProvider";

export function ArchitectureAndCalculator() {
  const { openDemo } = useDemoModal();
  // Calculator state
  const [basePrice, setBasePrice] = useState<number>(5000);
  const [usageCost, setUsageCost] = useState<number>(2000);
  const [featureAddons, setFeatureAddons] = useState<number>(1500);
  const [supportTier, setSupportTier] = useState<number>(1000); // 500 standard, 1000 priority, 2500 dedicated
  const [multiplier, setMultiplier] = useState<number>(1.2);

  // Dynamic calculation: (B + U + F + S) * M
  const monthlyTotal = Math.round((basePrice + usageCost + featureAddons + supportTier) * multiplier);

  const pillars = [
    {
      title: "Client (Customer)",
      subtitle: "Different businesses, different plans",
      icon: Building,
      badgeColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
      items: [
        "Client A (Retail Business)",
        "Client B (Healthcare)",
        "Client C (Education)",
        "Client N (...)",
      ],
    },
    {
      title: "Frontend (Client Portal)",
      subtitle: "Web / Mobile App (White-labeled)",
      icon: Globe,
      badgeColor: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
      items: [
        "Sign Up / Login",
        "Choose Plan",
        "Make Payment",
        "Access Dashboard",
        "Use AI Features",
        "Manage Subscription",
      ],
    },
    {
      title: "Backend Services",
      subtitle: "APIs, Business Logic, Multi-tenant",
      icon: Server,
      badgeColor: "bg-purple-500/10 text-purple-400 border-purple-500/20",
      items: [
        "Authentication Service (JWT / OAuth)",
        "Client Management (Multi-tenant)",
        "Subscription Service (Plan logic, limits)",
        "Usage Tracking (API calls, storage, users)",
        "Feature Access Control (Permissions)",
        "Notification Service (Email, In-app)",
      ],
    },
    {
      title: "External Services",
      subtitle: "Third-party integrations",
      icon: Cloud,
      badgeColor: "bg-amber-500/10 text-amber-400 border-amber-500/20",
      items: [
        "Payment Gateway (Stripe / Razorpay)",
        "AI/ML Services (OpenAI, Claude, etc.)",
        "Cloud Infrastructure (AWS / GCP)",
        "Email / Notifications (SendGrid / SES)",
      ],
    },
    {
      title: "Databases",
      subtitle: "Store client data securely",
      icon: Database,
      badgeColor: "bg-rose-500/10 text-rose-400 border-rose-500/20",
      items: [
        "Client Database (Users, Orgs)",
        "Subscription Database (Plans, Billing)",
        "Usage Database (API usage, limits)",
        "Application Database (Client configs)",
      ],
    },
  ];

  const onboardingSteps = [
    { num: "1", title: "Sign Up", desc: "Client creates account & organization" },
    { num: "2", title: "Select Plan", desc: "Choose plan based on business needs" },
    { num: "3", title: "Payment", desc: "Complete payment via Stripe / Razorpay" },
    { num: "4", title: "Provision Access", desc: "System activates plan & sets usage limits" },
    { num: "5", title: "Use Platform", desc: "Client uses AI features (usage tracked)" },
    { num: "6", title: "Renew / Upgrade", desc: "Auto-renewal or manual upgrade" },
  ];

  const benefits = [
    "Separate subscription for each client",
    "Scalable multi-tenant architecture",
    "Flexibility in pricing and features",
    "Usage-based billing support",
    "Easy plan upgrades/downgrades",
    "Automated invoicing and renewals",
    "Secure and isolated client data",
    "Works for multiple industries and use cases",
  ];

  return (
    <section id="architecture" className="relative py-24 lg:py-32 bg-[#060812] border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/[0.08] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
            <span>Enterprise Architecture</span>
          </div>
          <h2 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Client-based Subscription Architecture
          </h2>
          <p className="mt-3 text-lg font-semibold text-indigo-400">
            Multi-tenant AI Business OS
          </p>
          <p className="mt-2 text-base text-slate-400">
            One Platform. Many Businesses. Tailored for Every Client.
          </p>
        </div>

        {/* 5-Column Architecture Grid */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-5">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="rounded-2xl border border-white/[0.08] bg-[#0c1026]/90 p-5 flex flex-col justify-between transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#101635]"
              >
                <div>
                  <div className="flex items-center gap-2 pb-3 border-b border-white/[0.06]">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.05] border border-white/10 text-indigo-400">
                      <Icon className="h-4 w-4" />
                    </div>
                    <div>
                      <h3 className="text-xs font-bold text-white tracking-wide">
                        {pillar.title}
                      </h3>
                    </div>
                  </div>
                  <p className="text-[11px] text-slate-400 mt-2 italic">
                    {pillar.subtitle}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {pillar.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="h-1.5 w-1.5 rounded-full bg-indigo-400 mt-1.5 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-5 pt-3 border-t border-white/[0.06] flex items-center justify-between text-[10px] font-mono text-slate-500">
                  <span>Isolated tenant</span>
                  <span className="text-emerald-400">Active</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* End-to-End Onboarding Flow */}
        <div className="mt-14 rounded-2xl border border-white/[0.08] bg-[#0c1026]/80 p-6 sm:p-8 backdrop-blur-xl">
          <div className="pb-4 border-b border-white/[0.06] flex flex-wrap items-center justify-between gap-2">
            <div>
              <h3 className="text-sm font-bold text-white tracking-wide flex items-center gap-2">
                <RefreshCw className="h-4 w-4 text-indigo-400" />
                End-to-End Flow
              </h3>
              <p className="text-xs text-slate-400 mt-0.5">
                From client onboarding to recurring subscription
              </p>
            </div>
            <span className="rounded-full bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 text-xs font-mono text-indigo-300">
              Ongoing Usage, Billing & Support
            </span>
          </div>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
            {onboardingSteps.map((step) => (
              <div
                key={step.num}
                className="rounded-xl border border-white/[0.06] bg-[#090d20] p-4 text-center relative"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-indigo-600/30 border border-indigo-400/40 text-xs font-bold text-white mx-auto">
                  {step.num}
                </div>
                <h4 className="mt-3 text-xs font-bold text-white">{step.title}</h4>
                <p className="mt-1 text-[11px] leading-tight text-slate-400">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Pricing Formula Calculator & Key Benefits */}
        <div className="mt-14 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Dynamic Interactive Calculator */}
          <div className="lg:col-span-7 rounded-2xl border border-indigo-500/30 bg-[#0c1028]/95 p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
            <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
                  <Calculator className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-wide">
                    Client-based Subscription Pricing Formula
                  </h3>
                  <span className="text-xs text-indigo-300 font-mono">
                    Monthly Price = [ B + U + F + S ] × M
                  </span>
                </div>
              </div>
              <span className="text-[10px] text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full font-mono">
                Interactive
              </span>
            </div>

            {/* Sliders */}
            <div className="mt-6 space-y-5">
              {/* Base Plan */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1.5">
                  <span>Base Plan Price (B) — Fixed monthly cost</span>
                  <span className="text-indigo-400 font-mono">₹ {basePrice.toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range"
                  min={3000}
                  max={15000}
                  step={500}
                  value={basePrice}
                  onChange={(e) => setBasePrice(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer h-1.5 bg-white/10 rounded"
                />
              </div>

              {/* Usage-based Cost */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1.5">
                  <span>Usage-based Cost (U) — API calls, storage, users</span>
                  <span className="text-indigo-400 font-mono">₹ {usageCost.toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range"
                  min={1000}
                  max={10000}
                  step={500}
                  value={usageCost}
                  onChange={(e) => setUsageCost(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer h-1.5 bg-white/10 rounded"
                />
              </div>

              {/* Feature Add-ons */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1.5">
                  <span>Feature Add-ons (F) — Premium modules & agents</span>
                  <span className="text-indigo-400 font-mono">₹ {featureAddons.toLocaleString("en-IN")}</span>
                </div>
                <input
                  type="range"
                  min={0}
                  max={6000}
                  step={500}
                  value={featureAddons}
                  onChange={(e) => setFeatureAddons(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer h-1.5 bg-white/10 rounded"
                />
              </div>

              {/* Support Tier */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1.5">
                  <span>Support Tier (S) — Standard / Priority / Dedicated</span>
                  <span className="text-indigo-400 font-mono">₹ {supportTier.toLocaleString("en-IN")}</span>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Standard", val: 500 },
                    { label: "Priority", val: 1000 },
                    { label: "Dedicated", val: 2500 },
                  ].map((tier) => (
                    <button
                      key={tier.label}
                      type="button"
                      onClick={() => setSupportTier(tier.val)}
                      className={`py-1.5 text-xs font-semibold rounded-lg border transition-all ${
                        supportTier === tier.val
                          ? "bg-indigo-600 border-indigo-400 text-white shadow-sm"
                          : "border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]"
                      }`}
                    >
                      {tier.label} (₹{tier.val})
                    </button>
                  ))}
                </div>
              </div>

              {/* Multiplier */}
              <div>
                <div className="flex justify-between text-xs font-semibold text-slate-200 mb-1.5">
                  <span>Client-specific Multiplier (M) — Scale & vertical</span>
                  <span className="text-indigo-400 font-mono">{multiplier.toFixed(1)}x</span>
                </div>
                <input
                  type="range"
                  min={1.0}
                  max={2.0}
                  step={0.1}
                  value={multiplier}
                  onChange={(e) => setMultiplier(Number(e.target.value))}
                  className="w-full accent-indigo-500 cursor-pointer h-1.5 bg-white/10 rounded"
                />
              </div>
            </div>

            {/* Calculated Monthly Price Banner */}
            <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-950/30 p-5 flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-xs font-semibold text-emerald-400 uppercase tracking-wider block">
                  Calculated Monthly Price
                </span>
                <span className="text-xs text-slate-300 font-mono mt-0.5 block">
                  ({basePrice} + {usageCost} + {featureAddons} + {supportTier}) × {multiplier.toFixed(1)}
                </span>
              </div>
              <div className="text-right">
                <div className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                  ₹ {monthlyTotal.toLocaleString("en-IN")}
                  <span className="text-xs font-medium text-slate-300"> / month</span>
                </div>
                <span className="text-[10px] text-emerald-300 font-medium">Tailored for your business scale</span>
              </div>
            </div>

            <div className="mt-6 text-center">
              <button
                onClick={() => openDemo()}
                className="glow-button w-full rounded-full py-3.5 text-sm font-semibold text-white shadow-lg"
              >
                Book an Enterprise Demo with this Estimate
              </button>
            </div>
          </div>

          {/* Right: Key Benefits Card */}
          <div className="lg:col-span-5 rounded-2xl border border-white/[0.08] bg-[#0c1026]/90 p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="pb-5 border-b border-white/[0.08]">
                <h3 className="text-base font-bold text-white tracking-wide flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-indigo-400" />
                  Key Benefits
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Built for enterprise reliability and multi-tenant isolation.
                </p>
              </div>

              <ul className="mt-6 space-y-3.5">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-3 text-xs sm:text-sm text-slate-300">
                    <div className="h-5 w-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 className="h-3.5 w-3.5" />
                    </div>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 pt-6 border-t border-white/[0.06] text-center">
              <span className="text-xs font-bold text-white tracking-wider uppercase block">
                MMe-AI
              </span>
              <span className="text-xs text-indigo-300 font-medium">
                Powering Every Business with AI
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
