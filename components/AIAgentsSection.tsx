import { UserCheck, BellRing, BarChart, PenTool } from "lucide-react";
import { SampleDataBadge } from "@/components/SampleDataBadge";

const AGENTS = [
  {
    title: "Lead Qualifier",
    icon: UserCheck,
    desc: "Reads every new enquiry and sorts out who is ready to buy.",
    input: "New enquiry from your website",
    reasoning: "Picks out budget (₹2.8 Cr) and urgency",
    action: "Tags it high-intent and sends it to a senior rep",
  },
  {
    title: "Follow-up Agent",
    icon: BellRing,
    desc: "Makes sure no lead goes quiet without a follow-up.",
    input: "Lead with no reply for 2 days",
    reasoning: "Decides it needs a nudge and drafts the message",
    action: "WhatsApp follow-up waits for your approval",
  },
  {
    title: "Reporting Agent",
    icon: BarChart,
    desc: "Turns the week's activity into a short report.",
    input: "Weekly activity from your CRM",
    reasoning: "Spots what's converting and where leads drop",
    action: "Summary lands in the founders' inbox",
  },
  {
    title: "Content Agent",
    icon: PenTool,
    desc: "Drafts messages and brochures in your tone.",
    input: "Customer question and property details",
    reasoning: "Writes a reply that fits the buyer",
    action: "Draft ready for your team to review",
  },
];

export function AIAgentsSection() {
  return (
    <section className="relative py-20 lg:py-24 bg-bg border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            AI that does the work, not just answers.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            Four agents handle the repetitive work around your leads. Your team approves what matters.
          </p>
        </div>

        <div className="relative mt-14">
          <SampleDataBadge className="absolute -top-8 right-0" />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {AGENTS.map((agent) => {
              const Icon = agent.icon;
              return (
                <div key={agent.title} className="rounded-2xl border border-white/[0.08] bg-surface/90 p-6">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-indigo-500/20 bg-indigo-500/10 text-indigo-400">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 text-base font-bold text-white">{agent.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{agent.desc}</p>
                  <dl className="mt-5 space-y-2 text-xs">
                    <div className="rounded-lg border border-white/[0.05] bg-black/40 p-2.5">
                      <dt className="text-muted">When</dt>
                      <dd className="mt-0.5 text-white">{agent.input}</dd>
                    </div>
                    <div className="rounded-lg border border-indigo-500/20 bg-indigo-500/[0.08] p-2.5">
                      <dt className="text-indigo-300">It</dt>
                      <dd className="mt-0.5 text-indigo-100">{agent.reasoning}</dd>
                    </div>
                    <div className="rounded-lg border border-emerald-500/20 bg-emerald-500/[0.08] p-2.5">
                      <dt className="text-emerald-300">Result</dt>
                      <dd className="mt-0.5 text-emerald-100">{agent.action}</dd>
                    </div>
                  </dl>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
