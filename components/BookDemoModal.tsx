"use client";

import { useState } from "react";
import { X, Send, MessageSquare, CheckCircle2, Sparkles } from "lucide-react";

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
    defaultPlan ? `Interested in ${defaultPlan} Plan` : ""
  );
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const subject = encodeURIComponent(`MMe-AI Enterprise Demo Request: ${name} (${industry})`);
    const body = encodeURIComponent(
      `Hi MMe-AI Team,\n\nI would like to book an enterprise demo of the MMe-AI Business OS.\n\n` +
      `Name: ${name}\n` +
      `Email: ${email}\n` +
      `Phone: ${phone}\n` +
      `Industry: ${industry}\n` +
      `Preferred Plan: ${defaultPlan || "Custom"}\n\n` +
      `Workflow Bottleneck / Needs:\n${bottleneck}\n\n` +
      `Looking forward to connecting.`
    );

    // Launch email client
    window.location.href = `mailto:mmeai.official@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleWhatsApp = () => {
    const text = encodeURIComponent(
      `Hi Manish, I want to book an enterprise demo for MMe-AI.\n` +
      `Name: ${name || "Potential Client"}\n` +
      `Industry: ${industry}\n` +
      `Phone: ${phone}\n` +
      `Requirements: ${bottleneck || "Automating business workflows"}`
    );
    window.open(`https://wa.me/918851144571?text=${text}`, "_blank");
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

        {submitted ? (
          <div className="py-8 text-center space-y-4">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              <CheckCircle2 className="h-8 w-8" />
            </div>
            <h3 className="text-xl font-bold text-white">Your Request is Ready!</h3>
            <p className="text-sm text-slate-300 max-w-sm mx-auto">
              Your email client should have opened with your pre-filled inquiry. You can also message Manish directly on WhatsApp for an immediate response.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={handleWhatsApp}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold px-6 py-2.5 text-sm shadow-md"
              >
                <MessageSquare className="h-4 w-4" />
                WhatsApp Manish Directly
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
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

              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="glow-button flex-1 rounded-full py-3 text-sm font-semibold text-white shadow-md flex items-center justify-center gap-2"
                >
                  <Send className="h-4 w-4" />
                  <span>Submit Enterprise Demo Request</span>
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="rounded-full border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300 px-5 py-3 text-sm font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <MessageSquare className="h-4 w-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500 mt-2">
                Sends directly to <strong className="text-slate-400">mmeai.official@gmail.com</strong> & Manish Kumar (+91 8851144571).
              </p>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
