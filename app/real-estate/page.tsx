import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Layers, MessageSquare, PhoneOff, BarChart3 } from "lucide-react";
import { SiteChrome } from "@/components/SiteChrome";
import { LiveRealEstateExample } from "@/components/LiveRealEstateExample";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { DemoButton } from "@/components/DemoButton";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { PLANS, PLAN_ORDER, monthlyLabel, setupLabel } from "@/lib/pricing";
import { faqPageJsonLd } from "@/lib/jsonld";
import type { Faq } from "@/lib/faq";

export const metadata: Metadata = {
  title: "WhatsApp Lead Follow-up Automation for Real Estate | MMe-AI",
  description:
    "A real estate CRM layer for India: WhatsApp automation for real estate teams that qualifies every enquiry, matches it to inventory and handles lead follow-up for builders and brokers until the site visit is booked.",
  alternates: { canonical: "/real-estate" },
};

const PAINS = [
  { icon: Layers, title: "Leads from 5+ portals", desc: "Meta ads, 99acres, MagicBricks, Housing.com and your website each land in a different inbox." },
  { icon: Clock, title: "2–4 hour response times", desc: "By the time someone calls back, the buyer has already spoken to two other projects." },
  { icon: PhoneOff, title: "Missed site-visit follow-ups", desc: "Interested buyers go quiet because nobody sent the reminder or the next option." },
  { icon: BarChart3, title: "No view of what actually sells", desc: "You can see leads per campaign, but not which campaign turns into bookings." },
];

// TODO(founder): replace with real numbers from the first real-estate pilot. Empty values show "Pilot results coming soon".
const RESULTS: { label: string; value: string }[] = [
  { label: "Response time to new enquiries", value: "" },
  { label: "Follow-ups completed on time", value: "" },
  { label: "Site visits booked", value: "" },
];

// TODO(founder): confirm which of these are actually supported today and remove the rest.
const INTEGRATIONS = ["Meta Lead Ads", "WhatsApp Cloud API", "99acres", "MagicBricks", "Housing.com", "Google Sheets", "HubSpot / Zoho"];

const REAL_ESTATE_FAQS: Faq[] = [
  {
    q: "Which lead sources can MMe-AI capture?",
    a: "Meta lead ads, your website forms and WhatsApp, plus property portals such as 99acres, MagicBricks and Housing.com. During the free audit we check exactly how each of your current sources can be connected.",
  },
  {
    q: "Do we need to replace our CRM?",
    a: "No. MMe-AI works alongside the CRM or sheets your team already uses and keeps them updated, so your sales team doesn't have to change tools.",
  },
  {
    q: "Will the AI message buyers without our approval?",
    a: "Only if you want it to. You decide which messages go out automatically, such as a first reply or a visit reminder, and which wait for a salesperson to approve, such as offers and pricing.",
  },
  {
    q: "How long does setup take?",
    a: "Most teams are live in 21 days. We start with one workflow, usually first reply and qualification for new enquiries, and add site-visit follow-ups and reporting after that.",
  },
  {
    q: "What does it cost?",
    a: `Plans start at ${monthlyLabel(PLANS.basic)} plus ${setupLabel(PLANS.basic)}. You can start with a 14-day pilot on one workflow with ₹0 setup. Prices exclude GST.`,
  },
];

export default function RealEstatePage() {
  return (
    <SiteChrome>
      <JsonLd data={faqPageJsonLd(REAL_ESTATE_FAQS)} />

      {/* Hero */}
      <section className="relative overflow-hidden px-4 pt-14 pb-16 sm:px-6 lg:pt-24 lg:pb-20 ambient-grid">
        <div className="mx-auto max-w-4xl text-center">
          <p className="inline-flex rounded-full border border-indigo-500/30 bg-indigo-500/[0.08] px-3.5 py-1 text-xs font-semibold text-indigo-300">
            For real-estate developers and brokers with 5–50 salespeople
          </p>
          <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-6xl">
            Never lose a property lead to a slow reply again.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            MMe-AI qualifies every enquiry from Meta ads, 99acres, MagicBricks and your website, matches it to inventory, and follows up on WhatsApp until the site visit is booked.
          </p>
          <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <DemoButton
              industry="Real Estate"
              source="real-estate-hero"
              className="glow-button inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-base font-semibold text-white"
            >
              <span>Get a free workflow audit</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </DemoButton>
            <WhatsAppLink
              location="real-estate-hero"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-6 py-3.5 text-base font-semibold text-emerald-300 hover:bg-emerald-500/20"
            >
              <MessageSquare className="h-4 w-4" aria-hidden="true" />
              <span>Chat on WhatsApp</span>
            </WhatsAppLink>
          </div>
        </div>
      </section>

      {/* Pain */}
      <section className="border-t border-white/[0.05] bg-bg px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Where property deals slip away</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {PAINS.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="rounded-2xl border border-white/[0.08] bg-surface p-6">
                <Icon className="h-6 w-6 text-amber-400" aria-hidden="true" />
                <h3 className="mt-4 text-base font-bold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7-step walkthrough */}
      <LiveRealEstateExample />

      {/* Results */}
      <section className="border-t border-white/[0.05] px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-5xl text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">What changes in 30 days</h2>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {RESULTS.map((r) => (
              <div key={r.label} className="rounded-2xl border border-white/[0.08] bg-surface p-6">
                <div className={r.value ? "text-3xl font-black text-white" : "text-sm font-semibold text-muted"}>
                  {r.value || "Pilot results coming soon"}
                </div>
                <div className="mt-2 text-sm text-slate-300">{r.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations */}
      <section aria-label="Integrations" className="border-t border-white/[0.05] bg-bg px-4 py-12 sm:px-6">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-xs font-semibold uppercase tracking-wider text-muted">Connects with</p>
          <ul className="mt-4 flex flex-wrap justify-center gap-2">
            {INTEGRATIONS.map((i) => (
              <li key={i} className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-medium text-slate-300">{i}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* Pricing summary */}
      <section className="border-t border-white/[0.05] px-4 py-16 sm:px-6 lg:py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">Simple monthly pricing</h2>
          <p className="mt-3 text-center text-sm text-slate-300">Start with a 14-day pilot on one workflow — ₹0 setup.</p>
          <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-3">
            {PLAN_ORDER.map((id) => {
              const plan = PLANS[id];
              return (
                <div key={id} className={`rounded-2xl p-6 ${plan.recommended ? "border-2 border-indigo-400 bg-surface" : "border border-white/[0.08] bg-surface"}`}>
                  <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                  <div className="mt-3 text-2xl font-black text-accent font-mono">{monthlyLabel(plan)}</div>
                  <div className="mt-1 text-sm text-muted">+ {setupLabel(plan)}</div>
                  <div className="mt-3 text-xs text-slate-300">{plan.aiActions} · {plan.seats}</div>
                </div>
              );
            })}
          </div>
          <p className="mt-6 text-center text-sm text-slate-300">
            Prices exclude GST.{" "}
            <Link href="/#pricing" className="font-semibold text-indigo-300 hover:text-white">Compare plans in full</Link>
          </p>
        </div>
      </section>

      <FAQSection faqs={REAL_ESTATE_FAQS} title="Real-estate questions" subtitle="What developers and brokers usually ask us." />
    </SiteChrome>
  );
}
