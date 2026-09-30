"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowRight, Bot, CheckCircle2, Sparkles, Home, MessageSquare, Calendar, DollarSign, Award, ChevronRight, Send, UserCheck } from "lucide-react";
import { SampleDataBadge } from "@/components/SampleDataBadge";

export function LiveRealEstateExample({ showSolutionLink = false }: { showSolutionLink?: boolean }) {
  const [activeStep, setActiveStep] = useState(0); // Default to Step 1 (index 0) so user can walk through all 7
  const [testSent, setTestSent] = useState(false);

  const journeySteps = [
    { num: 1, title: "New Enquiry", desc: "Captured from website & ad forms", tag: "Inbound" },
    { num: 2, title: "AI Qualification", desc: "Budget, location and intent scored", tag: "AI Agent" },
    { num: 3, title: "Property Match", desc: "Matching listings surfaced automatically", tag: "Catalog Engine" },
    { num: 4, title: "Client Follow-up", desc: "Personalized WhatsApp reminder scheduled", tag: "Follow-up" },
    { num: 5, title: "Site Visit", desc: "Calendar scheduled with route & notes", tag: "Operations" },
    { num: 6, title: "Negotiation", desc: "Terms & discounts tracked within pipeline", tag: "Closing" },
    { num: 7, title: "Conversion", desc: "Booking confirmed, advance token logged", tag: "Won" },
  ];

  return (
    <section id="rs-real-estate" className="relative py-24 lg:py-32 bg-bg border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/[0.08] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-ping" />
            <span>Interactive Live Walkthrough</span>
          </div>
          <h2 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            See MMe-AI through a real-estate workflow.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            Click any step below to see how MMe-AI automates every phase from lead to closing.
          </p>
        </div>

        {/* 2-Column Showcase */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: 7-step Vertical Sequence */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="text-xs font-mono uppercase text-muted px-1 pb-1 flex justify-between">
              <span>Workflow Pipeline</span>
              <span className="text-indigo-400 font-semibold">Step {activeStep + 1} of 7</span>
            </div>
            {journeySteps.map((step, idx) => {
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.title}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => {
                    setActiveStep(idx);
                    setTestSent(false);
                  }}
                  className={`w-full text-left cursor-pointer rounded-xl p-3.5 transition-all duration-200 border flex items-center justify-between gap-3 ${
                    isSelected
                      ? "border-amber-400/80 bg-surface shadow-[0_0_25px_rgba(245,158,11,0.25)] ring-1 ring-amber-400/50"
                      : "border-white/[0.06] bg-surface/70 hover:border-white/15 hover:bg-surface"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold shrink-0 transition-transform ${
                        isSelected
                          ? "bg-amber-400 text-slate-950 font-black scale-110 shadow-md"
                          : "bg-white/[0.05] text-muted"
                      }`}
                    >
                      {step.num}
                    </div>
                    <div>
                      <h3 className={`text-sm font-semibold ${isSelected ? "text-amber-300" : "text-slate-200"}`}>
                        {step.title}
                      </h3>
                      <p className="text-xs text-muted mt-0.5 line-clamp-1">{step.desc}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-mono px-2 py-0.5 rounded ${
                    isSelected ? "bg-amber-400/20 text-amber-300 border border-amber-400/40" : "bg-white/[0.04] text-muted"
                  }`}>
                    {step.tag}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right: Dynamic MMe-AI Assistant Interactive Card */}
          <div className="relative lg:col-span-7 rounded-2xl border border-indigo-500/30 bg-surface/95 p-6 sm:p-8 shadow-2xl">
            <SampleDataBadge className="absolute -top-3 right-4" />
            {/* Header bar */}
            <div className="flex items-center justify-between pb-5 border-b border-white/[0.08]">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
                  <Bot className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white tracking-wide">MMe-AI Assistant & Automation</h3>
                  <span className="text-[11px] text-muted">Current Step: <strong className="text-indigo-300">{journeySteps[activeStep].title}</strong></span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3 py-1 text-xs font-semibold text-emerald-400">
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Live Sync
                </span>
              </div>
            </div>

            {/* DYNAMIC CONTENT PER STEP */}
            <div className="mt-6 space-y-4 min-h-[310px]">
              
              {/* STEP 1: NEW ENQUIRY */}
              {activeStep === 0 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="rounded-xl border border-white/[0.08] bg-black/40 p-4">
                    <div className="text-xs font-medium text-muted mb-2 flex items-center justify-between">
                      <span className="flex items-center gap-2 text-indigo-300">
                        <Sparkles className="h-3.5 w-3.5 text-indigo-400" />
                        Inbound Webhook Received:
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400">0.2s latency</span>
                    </div>
                    <div className="rounded-lg border border-indigo-500/20 bg-indigo-500/[0.06] p-3 text-xs font-mono text-indigo-200 space-y-1">
                      <div><span className="text-muted">Client:</span> Vikramaditya Singhania</div>
                      <div><span className="text-muted">Channel:</span> Meta Ad Campaign #BangaloreNorthLuxury</div>
                      <div><span className="text-muted">Form Note:</span> Looking for 3 BHK high-rise with balcony view near Hebbal, ready in 3 months.</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="rounded-xl border border-white/[0.06] bg-surface p-3">
                      <span className="text-[10px] text-muted uppercase font-mono">Contact Info</span>
                      <div className="text-xs font-semibold text-white mt-1">+91 98450 •••••</div>
                      <div className="text-[11px] text-muted truncate">vikram.singhania@techcorp.in</div>
                    </div>
                    <div className="rounded-xl border border-white/[0.06] bg-surface p-3">
                      <span className="text-[10px] text-muted uppercase font-mono">System Trigger</span>
                      <div className="text-xs font-semibold text-emerald-400 mt-1">Lead Ingested ✓</div>
                      <div className="text-[11px] text-muted">Multi-tenant DB record created</div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 2: AI QUALIFICATION */}
              {activeStep === 1 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="rounded-xl border border-indigo-500/30 bg-indigo-950/20 p-4">
                    <div className="flex items-center justify-between pb-2 border-b border-indigo-500/20">
                      <span className="text-xs font-bold text-white flex items-center gap-1.5">
                        <UserCheck className="h-4 w-4 text-indigo-400" />
                        AI Qualification Engine
                      </span>
                      <span className="rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 px-2 py-0.5 text-[10px] font-bold font-mono">
                        INTENT: 96% (HIGH)
                      </span>
                    </div>
                    <div className="mt-3 grid grid-cols-3 gap-2 text-center">
                      <div className="rounded-lg bg-black/40 p-2 border border-white/5">
                        <span className="text-[10px] text-muted block">Extracted Budget</span>
                        <span className="text-xs font-bold text-amber-400 mt-0.5 block">₹2.5 - 3.0 Cr</span>
                      </div>
                      <div className="rounded-lg bg-black/40 p-2 border border-white/5">
                        <span className="text-[10px] text-muted block">Preferred Area</span>
                        <span className="text-xs font-bold text-white mt-0.5 block">Hebbal / Yelahanka</span>
                      </div>
                      <div className="rounded-lg bg-black/40 p-2 border border-white/5">
                        <span className="text-[10px] text-muted block">Purchase Timeframe</span>
                        <span className="text-xs font-bold text-emerald-400 mt-0.5 block">&lt; 45 Days</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/[0.06] bg-black/40 p-3.5 flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2.5">
                      <div className="h-7 w-7 rounded-full bg-indigo-600/40 flex items-center justify-center font-bold text-white text-[11px]">
                        RK
                      </div>
                      <div>
                        <span className="font-semibold text-white">Auto-Assigned Consultant:</span>
                        <span className="text-muted block text-[11px]">Rajesh Kumar (Senior Luxury Specialist)</span>
                      </div>
                    </div>
                    <span className="rounded bg-indigo-500/20 text-indigo-300 px-2 py-1 text-[10px] font-semibold border border-indigo-500/30">
                      Notified via App
                    </span>
                  </div>
                </div>
              )}

              {/* STEP 3: PROPERTY MATCH */}
              {activeStep === 2 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="rounded-xl border border-white/[0.06] bg-black/40 p-4">
                    <div className="text-xs font-medium text-slate-300 mb-3 flex items-center justify-between">
                      <span className="flex items-center gap-2">
                        <Home className="h-4 w-4 text-indigo-400" />
                        3 Matching Properties Found in Catalog:
                      </span>
                      <span className="text-[10px] text-emerald-400 font-mono">100% criteria match</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <div className="rounded-lg border border-white/10 bg-surface p-3 transition-transform hover:scale-105">
                        <div className="flex items-center gap-1 text-[11px] font-semibold text-white">
                          <Home className="h-3.5 w-3.5 text-indigo-400" />
                          Prestige Towers
                        </div>
                        <div className="text-xs font-bold text-amber-400 mt-1">₹2.4 Cr</div>
                        <div className="text-[10px] text-muted">Hebbal, Bangalore</div>
                        <div className="text-[9px] text-emerald-400 mt-1">3 BHK • 2150 sqft</div>
                      </div>
                      <div className="rounded-lg border border-indigo-500/40 bg-indigo-950/40 p-3 shadow-md transition-transform hover:scale-105">
                        <div className="flex items-center gap-1 text-[11px] font-semibold text-white">
                          <Home className="h-3.5 w-3.5 text-indigo-400" />
                          Sobha Dream
                        </div>
                        <div className="text-xs font-bold text-amber-400 mt-1">₹2.8 Cr</div>
                        <div className="text-[10px] text-muted">Yelahanka, Bangalore</div>
                        <div className="text-[9px] text-emerald-400 mt-1">3.5 BHK • 2400 sqft</div>
                      </div>
                      <div className="rounded-lg border border-white/10 bg-surface p-3 transition-transform hover:scale-105">
                        <div className="flex items-center gap-1 text-[11px] font-semibold text-white">
                          <Home className="h-3.5 w-3.5 text-indigo-400" />
                          Brigade Park
                        </div>
                        <div className="text-xs font-bold text-amber-400 mt-1">₹2.2 Cr</div>
                        <div className="text-[10px] text-muted">Devanahalli, Bangalore</div>
                        <div className="text-[9px] text-emerald-400 mt-1">3 BHK • 1980 sqft</div>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/[0.06] p-3 flex items-center justify-between text-xs">
                    <span className="text-indigo-200">Interactive property brochures compiled automatically</span>
                    <span className="text-[11px] font-mono text-emerald-400">Ready to dispatch</span>
                  </div>
                </div>
              )}

              {/* STEP 4: CLIENT FOLLOW-UP */}
              {activeStep === 3 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="rounded-xl border border-emerald-500/30 bg-emerald-950/20 p-4">
                    <div className="flex items-center justify-between pb-2 border-b border-emerald-500/20">
                      <span className="text-xs font-bold text-white flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-emerald-400" />
                        Automated WhatsApp Message Preview
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400">Official Cloud API</span>
                    </div>
                    <div className="mt-3 rounded-lg bg-black/60 border border-white/10 p-3 text-xs text-slate-200 leading-relaxed">
                      &ldquo;Namaste Vikramaditya ji, thank you for connecting with RS Real Estate. Based on your preference for a 3 BHK in North Bangalore (₹2-3 Cr), our system has reserved previews for <strong>Prestige Towers</strong> and <strong>Sobha Dream</strong>. When would you like to schedule an exclusive site visit this weekend?&rdquo;
                    </div>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-white/[0.06] bg-black/40 p-3.5">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-emerald-400" />
                      <span className="text-xs text-slate-300">Scheduled reminder: <strong>Tomorrow at 11:00 AM</strong></span>
                    </div>
                    <button
                      type="button"
                      onClick={() => setTestSent(true)}
                      className="rounded-lg bg-emerald-600 hover:bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white transition-all flex items-center gap-1.5 shadow-sm"
                    >
                      <Send className="h-3 w-3" />
                      {testSent ? "Test Sent to WhatsApp ✓" : "Test Trigger Follow-up"}
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 5: SITE VISIT */}
              {activeStep === 4 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="rounded-xl border border-white/[0.08] bg-black/40 p-4">
                    <div className="flex items-center justify-between pb-2 border-b border-white/[0.06]">
                      <span className="text-xs font-bold text-white flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-indigo-400" />
                        Confirmed Site Visit Log
                      </span>
                      <span className="rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/40 px-2 py-0.5 text-[10px] font-mono">
                        Saturday, 11:30 AM
                      </span>
                    </div>
                    <div className="mt-3 grid grid-cols-2 gap-3 text-xs">
                      <div className="rounded-lg bg-surface p-2.5 border border-white/5">
                        <span className="text-[10px] text-muted block">Location</span>
                        <span className="font-semibold text-white mt-0.5 block">Prestige Towers - Unit 14B</span>
                        <span className="text-[10px] text-indigo-400">Hebbal Ring Road</span>
                      </div>
                      <div className="rounded-lg bg-surface p-2.5 border border-white/5">
                        <span className="text-[10px] text-muted block">Escort & Executive</span>
                        <span className="font-semibold text-white mt-0.5 block">Rajesh Kumar</span>
                        <span className="text-[10px] text-muted">Site manager alerted</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-indigo-500/20 bg-indigo-500/[0.06] p-3 flex items-center justify-between text-xs">
                    <span className="text-indigo-200">Google Maps route & digital gate pass auto-dispatched to client phone</span>
                    <span className="text-emerald-400 font-mono text-[10px]">Verified ✓</span>
                  </div>
                </div>
              )}

              {/* STEP 6: NEGOTIATION */}
              {activeStep === 5 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="rounded-xl border border-amber-500/30 bg-amber-950/20 p-4">
                    <div className="flex items-center justify-between pb-2 border-b border-amber-500/20">
                      <span className="text-xs font-bold text-white flex items-center gap-2">
                        <DollarSign className="h-4 w-4 text-amber-400" />
                        Offer & Terms Tracking
                      </span>
                      <span className="rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 px-2 py-0.5 text-[10px] font-mono">
                        In Progress
                      </span>
                    </div>
                    <div className="mt-3 space-y-2 text-xs">
                      <div className="flex justify-between items-center rounded-lg bg-black/40 p-2">
                        <span className="text-muted">Initial Quote:</span>
                        <span className="text-slate-300 font-mono line-through">₹2,80,00,000</span>
                      </div>
                      <div className="flex justify-between items-center rounded-lg bg-indigo-950/40 p-2 border border-indigo-500/30">
                        <span className="text-white font-medium">Negotiated Price:</span>
                        <span className="text-amber-400 font-mono font-bold text-sm">₹2,65,00,000</span>
                      </div>
                      <div className="flex justify-between items-center rounded-lg bg-black/40 p-2 text-[11px] text-slate-300">
                        <span>Included Amenities:</span>
                        <span className="text-emerald-300 font-medium">2 Covered Car Parks + Clubhouse Lifetime</span>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-xl border border-white/[0.06] bg-black/40 p-3 text-xs text-slate-300 flex items-center justify-between">
                    <span>Payment structure: 10% token, 80% bank sanction, 10% on registration</span>
                    <span className="text-[10px] font-mono text-emerald-400">Legal Cleared</span>
                  </div>
                </div>
              )}

              {/* STEP 7: CONVERSION */}
              {activeStep === 6 && (
                <div className="space-y-4 animate-in fade-in duration-300">
                  <div className="rounded-xl border border-emerald-500/50 bg-emerald-950/30 p-5 text-center">
                    <div className="h-12 w-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-2">
                      <Award className="h-6 w-6" />
                    </div>
                    <h4 className="text-base font-bold text-white">Deal Successfully Won & Converted!</h4>
                    <p className="text-xs text-emerald-200 mt-1">Prestige Towers Unit 14B officially booked</p>
                    
                    <div className="mt-4 inline-flex items-center gap-3 rounded-lg bg-black/50 border border-white/10 px-4 py-2 text-xs font-mono">
                      <span className="text-muted">Booking Advance Received:</span>
                      <span className="text-emerald-400 font-bold text-sm">₹5,00,000</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <div className="rounded-xl border border-white/[0.06] bg-surface p-3">
                      <span className="text-[10px] text-muted uppercase font-mono">Automated Actions</span>
                      <div className="text-[11px] text-slate-200 mt-1">
                        • Digital Agreement e-signed<br />
                        • WhatsApp receipt issued<br />
                        • Inventory marked SOLD
                      </div>
                    </div>
                    <div className="rounded-xl border border-white/[0.06] bg-surface p-3">
                      <span className="text-[10px] text-muted uppercase font-mono">Pipeline Attribution</span>
                      <div className="text-xs font-bold text-white mt-1">₹2.65 Cr Total Deal</div>
                      <div className="text-[11px] text-emerald-400">Gross Margin + Commission logged</div>
                    </div>
                  </div>
                </div>
              )}

            </div>

            {/* Real Estate Use Case Note */}
            <div className="mt-6 pt-5 border-t border-white/[0.06] flex items-center justify-between text-xs text-muted">
              <span>Client walkthrough: <strong className="text-white">RS Real Estate</strong> · figures are sample data</span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => {
                    const next = (activeStep + 1) % 7;
                    setActiveStep(next);
                    setTestSent(false);
                  }}
                  className="rounded-lg bg-white/[0.06] hover:bg-white/[0.12] px-3 py-1 text-xs text-white border border-white/10 flex items-center gap-1 transition-all"
                >
                  <span>Next Step</span>
                  <ChevronRight className="h-3 w-3" />
                </button>
              </div>
            </div>

          </div>

        </div>

        {showSolutionLink && (
          <div className="mt-10 text-center">
            <Link href="/real-estate" className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-300 hover:text-white">
              See the full real-estate solution <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
