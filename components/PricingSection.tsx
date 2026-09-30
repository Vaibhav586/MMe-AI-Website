"use client";

import { Check, Info, Lock, EyeOff, UserCog, Link2, Sparkles } from "lucide-react";
import { PLANS, PLAN_ORDER, AI_ACTION_DEFINITION, monthlyLabel, setupLabel } from "@/lib/pricing";
import { SOC2_CLAIM } from "@/lib/claims";
import { useEffect, useRef } from "react";
import { useDemoModal } from "@/components/DemoModalProvider";
import { track } from "@/lib/track";

const CONNECTORS = ["Salesforce", "HubSpot", "Pipedrive", "WhatsApp Cloud API", "Slack", "Webhooks"];

export function PricingSection() {
  const { openDemo } = useDemoModal();
  const sectionRef = useRef<HTMLElement>(null);

  // pricing_view: once per browser session, when half the section is on screen.
  useEffect(() => {
    const el = sectionRef.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    try {
      if (sessionStorage.getItem("mme-pricing-viewed")) return;
    } catch {
      // storage unavailable: fall through and track once for this page view
    }
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        track("pricing_view");
        try {
          sessionStorage.setItem("mme-pricing-viewed", "1");
        } catch {
          // ignore
        }
        observer.disconnect();
      },
      { threshold: 0.5 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="pricing" className="relative py-20 lg:py-28 bg-bg border-t border-b border-white/[0.06]">
      <div className="pointer-events-none hidden sm:block absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-indigo-600/10 rounded-full blur-[140px] -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Choose the right plan for your team
          </h2>
          <p className="mt-3 text-sm sm:text-base text-muted max-w-xl mx-auto">
            Start with one workflow. Add more as your team and lead volume grow.
          </p>
        </div>

        {/* Pilot banner */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 rounded-2xl border border-amber-400/30 bg-amber-400/[0.06] p-5 text-center sm:flex-row sm:text-left">
          <p className="flex items-start gap-2.5 text-sm text-amber-100">
            <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-amber-300" aria-hidden="true" />
            <span>
              <strong className="text-white">Start with a 14-day pilot on one workflow — ₹0 setup.</strong>{" "}
              If it doesn&apos;t save your team time, you don&apos;t continue.
            </span>
          </p>
          <button
            type="button"
            onClick={() => openDemo({ plan: "pilot", source: "pricing-pilot", label: "Start my pilot" })}
            className="glow-button shrink-0 whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-bold"
          >
            Start my pilot
          </button>
        </div>

        {/* Plan cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {PLAN_ORDER.map((id) => {
            const plan = PLANS[id];
            return (
              <div
                key={plan.id}
                className={`relative flex flex-col justify-between rounded-2xl p-6 sm:p-7 ${
                  plan.recommended
                    ? "border-2 border-indigo-400 bg-surface shadow-[0_0_48px_rgba(99,102,241,0.18)] md:-translate-y-2"
                    : "border border-white/[0.08] bg-surface/90"
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-accent px-4 py-0.5 text-[10px] font-extrabold uppercase tracking-widest text-bg shadow-md">
                    Recommended
                  </div>
                )}

                <div>
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-2xl font-black tracking-tight text-white">{plan.name}</h3>
                    <span className="mt-1 shrink-0 rounded border border-indigo-500/20 bg-indigo-500/10 px-2 py-0.5 text-[10px] font-mono text-indigo-300">
                      {plan.seats}
                    </span>
                  </div>
                  <p className="mt-1 text-xs leading-relaxed text-muted">{plan.tagline}</p>

                  <div className="mt-5 border-b border-white/[0.07] pb-5">
                    <div className="text-3xl font-black tracking-tight text-accent font-mono">{monthlyLabel(plan)}</div>
                    <div className="mt-1 text-sm text-muted">+ {setupLabel(plan)}</div>
                  </div>

                  <div className="mt-4 flex items-center gap-1.5 text-xs text-slate-200">
                    <span>{plan.aiActions}</span>
                    <span className="group relative inline-flex">
                      <button
                        type="button"
                        aria-label="What is an AI action?"
                        aria-describedby={`ai-action-${plan.id}`}
                        className="rounded-full text-muted hover:text-white"
                      >
                        <Info className="h-3.5 w-3.5" aria-hidden="true" />
                      </button>
                      <span
                        id={`ai-action-${plan.id}`}
                        role="tooltip"
                        className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 w-56 -translate-x-1/2 rounded-lg border border-white/10 bg-surface p-2.5 text-[11px] leading-snug text-slate-200 opacity-0 shadow-xl transition-opacity group-hover:opacity-100 group-focus-within:opacity-100"
                      >
                        {AI_ACTION_DEFINITION}
                      </span>
                    </span>
                  </div>

                  <ul className="mt-5 space-y-2.5">
                    {plan.features.map((feat) => (
                      <li key={feat} className="flex items-start gap-2.5 text-xs text-slate-300">
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-indigo-400" aria-hidden="true" />
                        <span className="leading-snug">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => openDemo({ plan: plan.name, source: `pricing-${plan.id}`, label: plan.cta })}
                  className={`mt-8 w-full rounded-full py-3 text-sm font-bold tracking-wide transition-all ${
                    plan.recommended
                      ? "glow-button"
                      : "border border-white/15 bg-white/[0.04] text-white hover:bg-white/[0.08] hover:border-white/30"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm text-slate-300">Prices exclude GST. Monthly plans, cancel anytime.</p>

        {/* Trust + connectors */}
        <div className="mt-10 rounded-2xl border border-white/[0.08] bg-surface p-6 sm:p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/15 text-indigo-400">
                <Lock className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Strict Tenant Data Isolation</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted">Every customer runs in a fully isolated tenant with strict data boundaries and zero cross-tenant leakage.</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-emerald-500/20 bg-emerald-500/15 text-emerald-400">
                <EyeOff className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Zero Model Training on Customer Data</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted">Your business data is never used to train AI models. Your workflows, your data, your control.</p>
              </div>
            </div>
            <div className="flex items-start gap-3.5">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/15 text-amber-400">
                <UserCog className="h-5 w-5" aria-hidden="true" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-white">Enterprise Role-Based Access Control</h4>
                <p className="mt-1 text-xs leading-relaxed text-muted">Granular RBAC scopes access to exactly what every role needs—across seats, workflows, and audit trails.</p>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col items-center gap-3 border-t border-white/[0.08] pt-6">
            <span className="flex items-center gap-1.5 text-[11px] font-mono uppercase tracking-wider text-muted">
              <Link2 className="h-3.5 w-3.5 text-indigo-400" aria-hidden="true" />
              Native Ecosystem Connectors
            </span>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {CONNECTORS.map((c) => (
                <span key={c} className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-medium text-slate-300">{c}</span>
              ))}
            </div>
            <p className="text-[11px] text-muted">{SOC2_CLAIM}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
