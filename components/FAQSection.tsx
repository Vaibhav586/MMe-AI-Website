"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First item open by default

  const faqs = [
    {
      q: "What exactly is MMe-AI?",
      a: "It's an AI-powered business operating layer that connects leads, customers, workflows, automation and analytics into one system built around your business.",
    },
    {
      q: "Is MMe-AI a CRM?",
      a: "No. A CRM stores records. MMe-AI connects your workflows, automates repetitive work and surfaces what needs attention across your team.",
    },
    {
      q: "Do we need to replace our existing software?",
      a: "No. MMe-AI is designed to work alongside the tools you already use, including your current CRM, email, WhatsApp, and spreadsheets.",
    },
    {
      q: "How is MMe-AI different from a normal dashboard?",
      a: "A dashboard only shows data. MMe-AI acts on it — automating steps, triggering reminders, qualifying leads, and highlighting what needs immediate action.",
    },
    {
      q: "Can MMe-AI be customized for our industry?",
      a: "Yes. Workflows, dashboards and automations are configured around your specific industry and process — from real estate to healthcare, education, retail, and local services.",
    },
    {
      q: "Can you integrate with our existing tools?",
      a: "MMe-AI connects with your existing tools where supported, bridging the gap between your communication channels and operational databases.",
    },
    {
      q: "Can we start with one workflow?",
      a: "Yes. Most teams start with a single high-effort workflow, prove the measurable time savings and conversion boost, and expand from there.",
    },
    {
      q: "What does a pilot usually include?",
      a: "We pick one high-impact workflow, map the current process, automate it, and refine it with your team during a 30-day optimization sprint.",
    },
    {
      q: "How is pricing calculated?",
      a: "MMe-AI runs on three transparent B2B tiers—Basic (₹30,000/mo), Pro (₹65,000/mo), and Plus/Enterprise (₹1,20,000+/mo). Each tier includes predictable monthly AI credits covering reasoning and multi-step executions, built-in daily rate safeguards for 100% uptime, and custom enterprise pricing available on request.",
    },
    {
      q: "Who is MMe-AI designed for?",
      a: "Founders, sales leaders, operations heads, and growing businesses that want more visibility, faster response times, and less manual busywork.",
    },
  ];

  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-[#060812] border-t border-white/[0.05]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Frequently asked questions.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Everything you need to know before getting started.
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-16 space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.q}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? "border-indigo-500/40 bg-[#0c1028]"
                    : "border-white/[0.08] bg-[#090d20]/80 hover:border-white/15"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-base font-semibold ${isOpen ? "text-white" : "text-slate-200"}`}>
                    {faq.q}
                  </span>
                  <div
                    className={`ml-4 flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.05] shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-indigo-400" : "text-slate-400"
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-slate-300 border-t border-white/[0.04]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
