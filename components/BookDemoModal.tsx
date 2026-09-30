"use client";

import { useEffect, useRef } from "react";
import { X, MessageSquare, Sparkles } from "lucide-react";
import { AuditForm } from "@/components/AuditForm";
import { WhatsAppLink } from "@/components/WhatsAppLink";

interface BookDemoModalProps {
  onClose: () => void;
  plan?: string;
  industry?: string;
  source?: string;
}

export function BookDemoModal({ onClose, plan, industry, source }: BookDemoModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  // Focus the first field, close on Escape, and keep Tab inside the dialog.
  useEffect(() => {
    const dialog = dialogRef.current;
    dialog?.querySelector<HTMLElement>("input:not([type=hidden]):not([tabindex='-1'])")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab" || !dialog) return;
      const focusable = [...dialog.querySelectorAll<HTMLElement>("a[href], button:not([disabled]), input:not([type=hidden]):not([tabindex='-1']), select, textarea")];
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/80 p-4 backdrop-blur-md sm:items-center" onClick={onClose}>
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="audit-modal-title"
        onClick={(e) => e.stopPropagation()}
        className="relative my-8 w-full max-w-lg rounded-2xl border border-indigo-500/30 bg-surface p-6 text-slate-100 shadow-[0_25px_80px_rgba(0,0,0,0.9)] sm:p-8"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-5 top-5 rounded-full p-2 text-muted transition-colors hover:bg-white/10 hover:text-white"
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-indigo-400">
          <Sparkles className="h-4 w-4" aria-hidden="true" />
          <span>Free workflow audit</span>
        </div>
        <h2 id="audit-modal-title" className="mt-2 pr-8 text-2xl font-bold tracking-tight text-white">
          Get your free workflow audit
        </h2>
        <p className="mt-1.5 text-sm text-muted">
          Tell us how your team handles leads today. We&apos;ll show you 3 workflows MMe-AI can automate — in a 20-minute call.
        </p>

        <div className="mt-6">
          <AuditForm plan={plan} industry={industry} source={source} />
        </div>

        <WhatsAppLink
          location="modal"
          className="mt-3 flex items-center justify-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 py-2.5 text-sm font-semibold text-emerald-300 transition-colors hover:bg-emerald-500/20"
        >
          <MessageSquare className="h-4 w-4 text-emerald-400" aria-hidden="true" />
          Prefer WhatsApp? Chat with us
        </WhatsAppLink>
      </div>
    </div>
  );
}
