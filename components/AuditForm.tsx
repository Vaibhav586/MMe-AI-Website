"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { AlertTriangle, Loader2, Send } from "lucide-react";
import { INDUSTRIES, TEAM_SIZES, leadSchema } from "@/lib/lead";
import { SITE } from "@/lib/site";
import { track, trackMetaLead } from "@/lib/track";

type FieldErrors = Partial<Record<string, string>>;

const inputClass =
  "w-full rounded-xl border bg-white/[0.04] px-4 py-2.5 text-sm text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500";
const labelClass = "mb-1 block text-xs font-medium text-slate-300";

// The free-audit form. Used in the demo modal and on /contact.
// On success it redirects to /thank-you; nothing the visitor typed goes into the URL.
export function AuditForm({ plan, industry: defaultIndustry, source }: { plan?: string; industry?: string; source?: string }) {
  const router = useRouter();
  const [status, setStatus] = useState<"idle" | "submitting" | "error">("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [formError, setFormError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget)) as Record<string, string>;
    const payload = {
      name: data.name,
      email: data.email,
      whatsapp: data.whatsapp,
      company: data.company,
      teamSize: data.teamSize || undefined,
      industry: data.industry || undefined,
      message: data.message,
      plan: data.plan,
      consent: data.consent === "on",
      company_website: data.company_website,
    };

    const check = leadSchema.safeParse(payload);
    if (!check.success) {
      setErrors(Object.fromEntries(check.error.issues.map((i) => [String(i.path[0]), i.message])));
      setFormError("");
      return;
    }

    setErrors({});
    setStatus("submitting");
    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = await res.json().catch(() => ({}));
      if (!res.ok || !json.ok) {
        setErrors(json.fieldErrors ?? {});
        throw new Error(json.error || `status ${res.status}`);
      }
      const conversion = { industry: payload.industry ?? "", team_size: payload.teamSize ?? "", plan: payload.plan || "none" };
      track("demo_submit", conversion);
      trackMetaLead(conversion);
      router.push("/thank-you");
    } catch (err) {
      setStatus("error");
      setFormError(err instanceof Error && err.message.startsWith("Too many") ? err.message : "");
    }
  };

  const fieldError = (name: string) =>
    errors[name] ? (
      <p id={`${name}-error`} className="mt-1 text-[11px] text-amber-300">{errors[name]}</p>
    ) : null;
  const errProps = (name: string) => ({
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${name}-error` : undefined,
    className: `${inputClass} ${errors[name] ? "border-amber-400/70" : "border-white/10"}`,
  });

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-4" data-source={source}>
      <input type="hidden" name="plan" value={plan ?? ""} />
      {/* Honeypot: hidden from people, filled in by bots */}
      <input type="text" name="company_website" tabIndex={-1} autoComplete="off" aria-hidden="true" className="hidden" />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="lead-name" className={labelClass}>Name *</label>
          <input id="lead-name" name="name" type="text" autoComplete="name" required placeholder="e.g. Rahul Sharma" {...errProps("name")} />
          {fieldError("name")}
        </div>
        <div>
          <label htmlFor="lead-email" className={labelClass}>Work email *</label>
          <input id="lead-email" name="email" type="email" autoComplete="email" required placeholder="name@company.com" {...errProps("email")} />
          {fieldError("email")}
        </div>
        <div>
          <label htmlFor="lead-whatsapp" className={labelClass}>WhatsApp number *</label>
          <input id="lead-whatsapp" name="whatsapp" type="tel" autoComplete="tel" inputMode="tel" required placeholder="+91 98765 43210" {...errProps("whatsapp")} />
          {fieldError("whatsapp")}
        </div>
        <div>
          <label htmlFor="lead-company" className={labelClass}>Company name *</label>
          <input id="lead-company" name="company" type="text" autoComplete="organization" required placeholder="e.g. Sharma Realty" {...errProps("company")} />
          {fieldError("company")}
        </div>
        <div>
          <label htmlFor="lead-team" className={labelClass}>Team size</label>
          <select id="lead-team" name="teamSize" defaultValue="" className={`${inputClass} border-white/10 bg-surface`}>
            <option value="">Select</option>
            {TEAM_SIZES.map((size) => (
              <option key={size} value={size}>{size}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="lead-industry" className={labelClass}>Industry</label>
          <select id="lead-industry" name="industry" defaultValue={defaultIndustry ?? ""} className={`${inputClass} border-white/10 bg-surface`}>
            <option value="">Select</option>
            {INDUSTRIES.map((ind) => (
              <option key={ind} value={ind}>{ind}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="lead-message" className={labelClass}>What slows your team down? (optional)</label>
        <textarea
          id="lead-message"
          name="message"
          rows={3}
          placeholder="e.g. Leads from ads wait hours for a reply, follow-ups get missed..."
          className={`${inputClass} resize-none border-white/10`}
        />
      </div>

      <div>
        <label className="flex items-start gap-2.5 text-[11px] leading-relaxed text-muted">
          <input type="checkbox" name="consent" required className="mt-0.5 h-3.5 w-3.5 shrink-0 accent-indigo-500" {...(errors.consent ? { "aria-invalid": true, "aria-describedby": "consent-error" } : {})} />
          <span>
            I agree that MMe-AI may store these details and contact me about my request, as described in the{" "}
            <Link href="/privacy-policy" target="_blank" className="text-indigo-300 underline hover:text-white">Privacy Policy</Link>.
          </span>
        </label>
        {fieldError("consent")}
      </div>

      {status === "error" && (
        <div role="alert" className="flex items-start gap-2 rounded-xl border border-amber-500/30 bg-amber-500/10 p-3 text-xs text-amber-200">
          <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
          <span>
            {formError || "We couldn't save your request. Please try again, or email us at"}{" "}
            {!formError && (
              <a href={`mailto:${SITE.email}`} className="underline hover:text-white">{SITE.email}</a>
            )}
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="glow-button flex w-full items-center justify-center gap-2 rounded-full py-3 text-sm font-semibold text-white shadow-md disabled:opacity-60"
      >
        {status === "submitting" ? <Loader2 className="h-4 w-4 animate-spin" aria-hidden="true" /> : <Send className="h-4 w-4" aria-hidden="true" />}
        <span>{status === "submitting" ? "Sending..." : "Request my free audit"}</span>
      </button>
    </form>
  );
}
