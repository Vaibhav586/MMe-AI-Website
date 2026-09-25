"use client";

import { Database, MessageSquare, Mail, FileSpreadsheet, ArrowDown, ArrowRight, Zap, Eye, CheckCircle2 } from "lucide-react";

interface IntegrationSectionProps {
  onOpenDemo: () => void;
}

export function IntegrationSection({ onOpenDemo }: IntegrationSectionProps) {
  return (
    <section className="relative py-24 lg:py-32 bg-[#070914] border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Already have a CRM? <br />
            <span className="text-indigo-400">Good. Keep it.</span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            MMe-AI isn't about replacing every tool your business already uses. It's about improving what happens between them.
          </p>
        </div>

        {/* Stack Flow Diagram Card */}
        <div className="mt-16 mx-auto max-w-3xl rounded-2xl border border-white/10 bg-[#0c1026]/90 p-8 sm:p-12 shadow-2xl backdrop-blur-xl glow-card-purple">
          
          {/* Top Layer: Current Systems */}
          <div className="text-center">
            <span className="text-[11px] font-mono tracking-widest text-slate-400 uppercase">
              YOUR CURRENT SYSTEM
            </span>
            <div className="mt-4 flex flex-wrap items-center justify-center gap-2.5">
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-200">
                <Database className="h-3.5 w-3.5 text-indigo-400" /> CRM
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-200">
                <MessageSquare className="h-3.5 w-3.5 text-emerald-400" /> WhatsApp
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-200">
                <Mail className="h-3.5 w-3.5 text-blue-400" /> Email
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-200">
                <FileSpreadsheet className="h-3.5 w-3.5 text-green-400" /> Sheets
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs text-slate-200">
                Existing tools
              </span>
            </div>
          </div>

          {/* Arrow Down */}
          <div className="my-6 flex justify-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <ArrowDown className="h-4 w-4" />
            </div>
          </div>

          {/* Middle Layer: MMe-AI Core */}
          <div className="mx-auto max-w-md rounded-xl border border-indigo-500/50 bg-gradient-to-r from-indigo-900/60 via-purple-900/50 to-indigo-900/60 p-4 text-center shadow-[0_0_30px_rgba(99,102,241,0.25)]">
            <span className="text-base font-bold text-white tracking-wide flex items-center justify-center gap-2">
              <Zap className="h-4 w-4 text-indigo-300" />
              MMe-AI Intelligent Operating Layer
            </span>
          </div>

          {/* Arrow Down */}
          <div className="my-6 flex justify-center">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-500/20 text-indigo-400 border border-indigo-500/30">
              <ArrowDown className="h-4 w-4" />
            </div>
          </div>

          {/* Bottom Layer: Business Outcomes */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="rounded-xl border border-white/10 bg-[#090d20] p-3 text-center">
              <Zap className="h-4 w-4 text-indigo-400 mx-auto" />
              <div className="mt-2 text-xs font-semibold text-slate-200">Connected workflows</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#090d20] p-3 text-center">
              <CheckCircle2 className="h-4 w-4 text-emerald-400 mx-auto" />
              <div className="mt-2 text-xs font-semibold text-slate-200">Automation</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#090d20] p-3 text-center">
              <Zap className="h-4 w-4 text-purple-400 mx-auto" />
              <div className="mt-2 text-xs font-semibold text-slate-200">AI assistance</div>
            </div>
            <div className="rounded-xl border border-white/10 bg-[#090d20] p-3 text-center">
              <Eye className="h-4 w-4 text-amber-400 mx-auto" />
              <div className="mt-2 text-xs font-semibold text-slate-200">Business visibility</div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="mt-10 text-center">
            <button
              onClick={onOpenDemo}
              className="glow-button inline-flex items-center gap-2 rounded-full px-7 py-3 text-sm font-semibold text-white shadow-lg"
            >
              <span>Find Your First Automation</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
