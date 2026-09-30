import { ChevronDown } from "lucide-react";
import { FAQS, type Faq } from "@/lib/faq";

// Server-rendered <details> accordion: every answer is in the HTML for search engines,
// and the shared `name` makes opening one question close the others (no client JS).
export function FAQSection({
  faqs = FAQS,
  title = "Frequently asked questions.",
  subtitle = "Everything you need to know before getting started.",
}: {
  faqs?: Faq[];
  title?: string;
  subtitle?: string;
}) {
  return (
    <section id="faq" className="relative py-24 lg:py-32 bg-bg border-t border-white/[0.05]">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            {title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            {subtitle}
          </p>
        </div>

        {/* Accordion List */}
        <div className="mt-16 space-y-4">
          {faqs.map((faq, idx) => (
            <details
              key={faq.q}
              name="faq"
              open={idx === 0}
              className="group rounded-2xl border transition-all duration-200 overflow-hidden border-white/[0.08] bg-surface/80 hover:border-white/15 open:border-indigo-500/40 open:bg-surface"
            >
              <summary className="w-full flex items-center justify-between p-6 text-left cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                <span className="text-base font-semibold text-slate-200 group-open:text-white">
                  {faq.q}
                </span>
                <span className="ml-4 flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.05] shrink-0 transition-transform duration-200 text-muted group-open:rotate-180 group-open:text-indigo-400">
                  <ChevronDown className="h-4 w-4" aria-hidden="true" />
                </span>
              </summary>
              <div className="px-6 pb-6 pt-1 text-sm leading-relaxed text-slate-300 border-t border-white/[0.04]">
                {faq.a}
              </div>
            </details>
          ))}
        </div>

      </div>
    </section>
  );
}
