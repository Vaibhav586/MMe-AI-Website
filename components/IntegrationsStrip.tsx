// Thin "works with" row under the hero. Keep this list to integrations that actually exist.
const TOOLS = ["WhatsApp", "Google Sheets", "Email", "HubSpot", "Salesforce", "Pipedrive", "Slack", "Webhooks"];

export function IntegrationsStrip() {
  return (
    <section aria-label="Works with your existing tools" className="border-t border-white/[0.05] bg-bg py-8">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
          Works with the tools you already use
        </p>
        <ul className="mt-4 flex flex-wrap items-center justify-center gap-2">
          {TOOLS.map((tool) => (
            <li key={tool} className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1 text-xs font-medium text-slate-300">
              {tool}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
