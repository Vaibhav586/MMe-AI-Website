"use client";

import { useState } from "react";
import Link from "next/link";
import { X, Send, MessageSquare, CheckCircle2, Sparkles, AlertTriangle, Loader2 } from "lucide-react";
import { SALES_EMAIL, whatsappLink } from "@/lib/contact";

interface BookDemoModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultPlan?: string;
}

export function BookDemoModal({ isOpen, onClose, defaultPlan }: BookDemoModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [industry, setIndustry] = useState("Real Estate");
  const [bottleneck, setBottleneck] = useState(
    defaultPlan ? `Interested in the ${defaultPlan}` : ""
  );
  const [consent, setConsent] = useState(false);
  const [honeypot, setHoneypot] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "saved" | "error">("idle");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          phone,
          industry,
          plan: defaultPlan || "",
          message: bottleneck,
          consent,
          company_website: honeypot,
        }),
      });
      if (!res.ok) throw new Error(`status ${res.status}`);
      setStatus("saved");
      // Conversion event for Google Tag Manager / GA4, if a tag is installed.
      (window as unknown as { dataLayer?: object[] }).dataLayer?.push({
        event: "demo_request_submitted",
        industry,
        plan: defaultPlan || "none",
      });
    } catch {
      setStatus("error");
    }
  };

  const fallbackMailto = () => {
    const subject = encodeURIComponent(`MMe-AI Demo Request: ${name} (${industry})`);
    const body = encodeURIComponent(
      `Name: ${name}
Email: ${email}
Phone: ${phone}
Industry: ${industry}
` +
      `Plan: ${defaultPlan || "Not selected"}

Workflows to automate:
${bottleneck}`
    );
    return `mailto:${SALES_EMAIL}?subject=${subject}&body=${body}`;
  };

  const handleWhatsApp = () => {
    window.open(
      whatsappLink(
        `Hi MMe-AI team, I just requested a demo.
` +
        `Name: ${name || "Potential Client"}
` +
        `Industry: ${industry}
` +
        `Requirements: ${bottleneck || "Automating business workflows"}`
      ),
      "_blank"
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-lg rounded-2xl border border-indigo-500/30 bg-[#0d1228] p-6 sm:p-8 shadow-[0_25px_80px_rgba(0,0,0,0.9)] text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 rounded-full p-2 text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          aria-label="Close modal"
        >
          <X className="h-5 w-5" />
        </button>

        {status === "saved" ? (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Thanks, {name.split(" ")[0] || "we've got it"}!</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto">
              Your demo request has been received. Our team will get in touch at <strong className="text-white">{email}</strong>.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-2.5 text-sm shadow-md"
              >
                <MessageSquare className="h-4 w-4" />
                Chat now on WhatsApp
              </button>
              <button
                onClick={onClose}
                className="rounded-full border border-white/15 px-6 py-2.5 text-sm text-slate-300 hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider">
              <Sparkles className="h-4 w-4" />
              <span>Book an Enterprise Demo</span>
            </div>
            <h3 className="mt-2 text-2xl font-bold text-white tracking-tight">
              See MMe-AI in Action
            </h3>
            <p className="mt-1 text-xs text-slate-400">
              Share your business details to explore a custom intelligence layer tailored for your team.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="modal-name" className="block text-xs font-medium text-slate-300 mb-1">
                  Full Name *
                </label>
                <input
                  id="modal-name"
                  type="text"
                  required
                  placeholder="e.g. Rahul Sharma"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-medium text-slate-300 mb-1">
                    Email Address *
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-medium text-slate-300 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="modal-industry" className="block text-xs font-medium text-slate-300 mb-1">
                  Industry Vertical
                </label>
                <select
                  id="modal-industry"
                  value={industry}
                  onChange={(e) => setIndustry(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-[#121733] px-4 py-2.5 text-sm text-white focus:border-indigo-500 focus:outline-none"
                >
                  <option value="Real Estate">Real Estate</option>
                  <option value="Healthcare">Healthcare</option>
                  <option value="Education">Education</option>
                  <option value="Retail">Retail</option>
                  <option value="Local Business">Local Business</option>
                  <option value="Services / Agency">Services / Agency</option>
                  <option value="Other">Other Vertical</option>
                </select>
              </div>

              <div>
                <label htmlFor="modal-bottleneck" className="block text-xs font-medium text-slate-300 mb-1">
                  What workflows do you want to automate?
                </label>
                <textarea
                  id="modal-bottleneck"
                  rows={3}
                  placeholder="e.g. Lead qualification, overdue follow-up alerts, weekly automated reporting..."
                  value={bottleneck}
                  onChange={(e) => setBottleneck(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 resize-none"
                />
              </div>

              {/* Honeypot: hidden from people, filled in by bots */}
              <input
                type="text"
                name="company_website"
                tabIndex={-1}
                autoComplete="off"
                aria-hidden="true"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                className="hidden"
              />

              <label className="flex items-start gap-2.5 text-[11px] leading-relaxed text-slate-400">
                <input
                  type="checkbox"
                  required
                  checked={consent}
                  onChange={(e) => setConsent(e.target.checked)}
                  className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-indigo-500"
                />
                <span>
                  I agree that MMe-AI may store these details and contact me about my demo request, as described in the{" "}
                  <Link href="/privacy-policy" target="_blank" className="text-indigo-300 underline hover:text-white">
                    Privacy Policy
                  </Link>
                  .
                </span>
              </label>

              {status === "error" && (
                <div role="alert" className="flex items-start gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-200">
                  <AlertTriangle className="h-4 w-4 shrink-0 mt-0.5" />
                  <span>
                    We couldn&apos;t save your request. Please try again, or{" "}
                    <a href={fallbackMailto()} className="underline hover:text-white">email it to {SALES_EMAIL}</a>.
                  </span>
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="glow-button w-full rounded-full py-3 text-sm font-semibold text-white shadow-md flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  <span>{status === "submitting" ? "Sending..." : "Request a Demo"}</span>
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
