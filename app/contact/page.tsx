import type { Metadata } from "next";
import { Clock, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { SiteChrome } from "@/components/SiteChrome";
import { AuditForm } from "@/components/AuditForm";
import { WhatsAppLink } from "@/components/WhatsAppLink";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact | MMe-AI",
  description:
    "Talk to MMe-AI: request a free workflow audit, message us on WhatsApp, or email and call our Delhi NCR team (Mon–Sat, 10am–7pm IST).",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <SiteChrome>
      <section className="px-4 py-16 sm:px-6 lg:py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl">Talk to MMe-AI</h1>
            <p className="mt-4 text-base leading-relaxed text-slate-300">
              Tell us how your team handles leads today. We&apos;ll show you 3 workflows MMe-AI can automate — in a 20-minute call.
            </p>

            <ul className="mt-8 space-y-4 text-sm text-slate-300">
              <li>
                <WhatsAppLink location="contact" className="inline-flex items-center gap-3 font-semibold text-emerald-300 hover:text-emerald-200">
                  <MessageSquare className="h-5 w-5" aria-hidden="true" /> Chat on WhatsApp
                </WhatsAppLink>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-indigo-400" aria-hidden="true" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">{SITE.email}</a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-indigo-400" aria-hidden="true" />
                <a href={`tel:${SITE.phoneE164}`} className="hover:text-white">{SITE.phoneDisplay}</a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="h-5 w-5 text-indigo-400" aria-hidden="true" />
                <span>{SITE.location}</span>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-indigo-400" aria-hidden="true" />
                <span>{SITE.businessHours}</span>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-indigo-500/30 bg-surface p-6 sm:p-8 lg:col-span-3">
            <h2 className="text-xl font-bold text-white">Get your free workflow audit</h2>
            <div className="mt-5">
              <AuditForm source="contact-page" />
            </div>
          </div>
        </div>
      </section>
    </SiteChrome>
  );
}
