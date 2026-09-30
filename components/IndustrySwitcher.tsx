"use client";

import { useState } from "react";
import { 
  Building2, 
  HeartPulse, 
  GraduationCap, 
  ShoppingBag, 
  Store, 
  Briefcase, 
  ChevronRight
} from "lucide-react";
import { IllustrativeBadge } from "@/components/IllustrativeBadge";

export function IndustrySwitcher() {
  const [activeVertical, setActiveVertical] = useState<string>("real-estate");

  const industries = [
    { id: "real-estate", name: "Real Estate", icon: Building2 },
    { id: "healthcare", name: "Healthcare", icon: HeartPulse },
    { id: "education", name: "Education", icon: GraduationCap },
    { id: "retail", name: "Retail", icon: ShoppingBag },
    { id: "local-business", name: "Local Business", icon: Store },
    { id: "services", name: "Services/Agencies", icon: Briefcase },
  ];

  const industryData: Record<
    string,
    {
      workflow: string[];
      metrics: { label: string; value: string; color: string }[];
    }
  > = {
    "real-estate": {
      workflow: [
        "Lead",
        "Qualification",
        "Property Matching",
        "Follow-up",
        "Site Visit",
        "Negotiation",
        "Booking",
        "Reporting",
      ],
      metrics: [
        { label: "Active Leads", value: "148", color: "text-white" },
        { label: "Site Visits", value: "32", color: "text-indigo-400" },
        { label: "Follow-ups", value: "21", color: "text-amber-400" },
        { label: "High Intent Leads", value: "17", color: "text-purple-400" },
        { label: "Pipeline Value", value: "₹8.4Cr", color: "text-emerald-400" },
        { label: "Conversion Overview", value: "24%", color: "text-teal-400" },
      ],
    },
    healthcare: {
      workflow: [
        "Enquiry",
        "Triage",
        "Doctor Match",
        "Appointment",
        "Consultation",
        "Treatment Plan",
        "Follow-up Care",
        "Health Records",
      ],
      metrics: [
        { label: "Active Inquiries", value: "210", color: "text-white" },
        { label: "Booked Consults", value: "84", color: "text-indigo-400" },
        { label: "Follow-up Reminders", value: "36", color: "text-amber-400" },
        { label: "Urgent Care Leads", value: "12", color: "text-purple-400" },
        { label: "Clinic Revenue", value: "₹18.2L", color: "text-emerald-400" },
        { label: "Patient Retention", value: "88%", color: "text-teal-400" },
      ],
    },
    education: {
      workflow: [
        "Application",
        "Course Advisory",
        "Counselor Call",
        "Demo Class",
        "Fee Quotation",
        "Enrollment",
        "Onboarding",
        "Progress Track",
      ],
      metrics: [
        { label: "Student Enquiries", value: "340", color: "text-white" },
        { label: "Demo Classes", value: "92", color: "text-indigo-400" },
        { label: "Counseling Dues", value: "45", color: "text-amber-400" },
        { label: "High Probability", value: "62", color: "text-purple-400" },
        { label: "Admissions Value", value: "₹45.0L", color: "text-emerald-400" },
        { label: "Enrollment Rate", value: "31%", color: "text-teal-400" },
      ],
    },
    retail: {
      workflow: [
        "Store Visit / Cart",
        "Inventory Check",
        "Custom Order",
        "WhatsApp Follow-up",
        "Payment Link",
        "Dispatch",
        "Feedback",
        "Re-order Trigger",
      ],
      metrics: [
        { label: "Store Visitors", value: "520", color: "text-white" },
        { label: "WhatsApp Orders", value: "115", color: "text-indigo-400" },
        { label: "Abandoned Carts", value: "38", color: "text-amber-400" },
        { label: "VIP Buyers", value: "44", color: "text-purple-400" },
        { label: "Monthly GMV", value: "₹26.5L", color: "text-emerald-400" },
        { label: "Repeat Purchase", value: "42%", color: "text-teal-400" },
      ],
    },
    "local-business": {
      workflow: [
        "Phone / Walk-in",
        "Quote Request",
        "Estimate Sent",
        "SMS Follow-up",
        "Job Scheduled",
        "Service Done",
        "Invoice",
        "Google Review",
      ],
      metrics: [
        { label: "Local Calls / DMs", value: "95", color: "text-white" },
        { label: "Quotes Delivered", value: "48", color: "text-indigo-400" },
        { label: "Pending Follow-ups", value: "14", color: "text-amber-400" },
        { label: "Ready to Book", value: "22", color: "text-purple-400" },
        { label: "Job Billings", value: "₹9.2L", color: "text-emerald-400" },
        { label: "Customer Rating", value: "4.9 ★", color: "text-teal-400" },
      ],
    },
    services: {
      workflow: [
        "Inbound Lead",
        "Scope Discovery",
        "Proposal",
        "Closing Call",
        "Contract Signed",
        "Project Sprint",
        "Retainer Renewal",
        "Reporting",
      ],
      metrics: [
        { label: "Client Inbounds", value: "78", color: "text-white" },
        { label: "Proposals Out", value: "26", color: "text-indigo-400" },
        { label: "Closing Calls", value: "15", color: "text-amber-400" },
        { label: "Retainer Opps", value: "11", color: "text-purple-400" },
        { label: "Pipeline Value", value: "₹38.0L", color: "text-emerald-400" },
        { label: "Win Rate", value: "38%", color: "text-teal-400" },
      ],
    },
  };

  const current = industryData[activeVertical];

  return (
    <section id="industries" className="relative py-24 lg:py-32 bg-[#070914] border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            One platform. Built differently for every industry.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Configured workflows and dashboards specific to how each industry operates.
          </p>
        </div>

        {/* Industry Filter Tabs */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-2.5">
          {industries.map((ind) => {
            const Icon = ind.icon;
            const isSelected = activeVertical === ind.id;
            return (
              <button
                key={ind.id}
                onClick={() => setActiveVertical(ind.id)}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-xs font-semibold tracking-wide transition-all ${
                  isSelected
                    ? "bg-amber-400 text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.35)] scale-105"
                    : "border border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08] hover:text-white"
                }`}
              >
                <Icon className={`h-4 w-4 ${isSelected ? "text-slate-950" : "text-slate-400"}`} />
                <span>{ind.name}</span>
              </button>
            );
          })}
        </div>

        {/* Dashboard & Workflow Preview for selected industry */}
        <div className="mt-12 rounded-2xl border border-white/[0.08] bg-[#0c1026]/90 p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          
          {/* Example Workflow Pipeline Header */}
          <div className="pb-6 border-b border-white/[0.06]">
            <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
              EXAMPLE WORKFLOW
            </span>
            {/* Horizontal flow bar */}
            <div className="mt-4 flex flex-wrap items-center gap-2 overflow-x-auto pb-2">
              {current.workflow.map((node, i) => (
                <div key={node} className="flex items-center gap-2 shrink-0">
                  <span
                    className={`rounded-lg px-3 py-1.5 text-xs font-semibold tracking-wide ${
                      i === 6 // e.g. Booking
                        ? "bg-indigo-600 text-white shadow-[0_0_12px_rgba(99,102,241,0.4)]"
                        : "bg-white/[0.05] text-slate-300 border border-white/[0.06]"
                    }`}
                  >
                    {node}
                  </span>
                  {i < current.workflow.length - 1 && (
                    <ChevronRight className="h-3.5 w-3.5 text-slate-600 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="mt-8 flex justify-end">
            <IllustrativeBadge />
          </div>
          <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {current.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-xl border border-white/[0.06] bg-[#080c1d] p-4 text-center transition-transform hover:scale-105"
              >
                <div className={`text-2xl font-bold tracking-tight ${metric.color}`}>
                  {metric.value}
                </div>
                <div className="mt-1 text-xs text-slate-400">
                  {metric.label}
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
