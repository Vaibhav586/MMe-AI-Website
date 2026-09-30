import {
  Database,
  MessageSquare,
  Mail,
  FileSpreadsheet,
  Calculator,
  FileText,
  BarChart,
  Share2
} from "lucide-react";

export function ProblemSection() {
  const painPoints = [
    "Missed follow-ups",
    "Manual updates",
    "Repeated work",
    "Lost context",
    "Delayed decisions",
    "Fragmented reporting",
  ];

  const floatingTools = [
    { name: "CRM", icon: Database, x: "15%", y: "30%" },
    { name: "WhatsApp", icon: MessageSquare, x: "28%", y: "55%" },
    { name: "Email", icon: Mail, x: "42%", y: "20%" },
    { name: "Google Sheets", icon: FileSpreadsheet, x: "56%", y: "45%" },
    { name: "Marketing Tools", icon: Share2, x: "36%", y: "75%" },
    { name: "Accounting", icon: Calculator, x: "70%", y: "22%" },
    { name: "Forms", icon: FileText, x: "82%", y: "48%" },
    { name: "Reports", icon: BarChart, x: "72%", y: "70%" },
  ];

  return (
    <section className="relative py-20 lg:py-28 bg-bg border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Quote Callout Banner */}
        <div className="mx-auto max-w-4xl text-center pb-16 border-b border-white/[0.06]">
          <p className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-snug">
            Not another dashboard. Not another disconnected tool.
          </p>
          <p className="mt-3 text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-500 bg-clip-text text-transparent leading-snug">
            A business system designed around how your company actually works.
          </p>
        </div>

        {/* Section Heading */}
        <div className="mt-16 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Leads go cold between your tools.
          </h2>
          <p className="mt-4 text-lg text-muted">
            The problem is everything between them. Already have a CRM? Keep it. MMe-AI works between the tools you already use.
          </p>
        </div>

        {/* Disconnected Tools Network Diagram */}
        <div className="mt-12 mx-auto max-w-4xl rounded-2xl border border-white/10 bg-surface/90 p-8 sm:p-12 relative overflow-hidden shadow-2xl">
          {/* Subtle connecting mesh background */}
          <div className="relative h-72 sm:h-80 w-full flex items-center justify-center">
            <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 800 320">
              {/* Tangled chaotic lines */}
              <path d="M 120 100 Q 250 140 340 70" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
              <path d="M 230 170 Q 300 240 450 150" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
              <path d="M 340 70 Q 420 120 560 80" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
              <path d="M 450 150 Q 560 120 660 160" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
              <path d="M 300 230 Q 450 200 580 220" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
              <path d="M 560 80 Q 640 100 660 160" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray="4 4" fill="none" />
            </svg>

            {/* Floating Disconnected Tool Nodes */}
            <div className="relative w-full h-full">
              {floatingTools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <div
                    key={tool.name}
                    className="absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 rounded-lg border border-white/10 bg-surface/90 px-3.5 py-2 shadow-lg transition-transform hover:scale-110"
                    style={{ left: tool.x, top: tool.y }}
                  >
                    <Icon className="h-4 w-4 text-indigo-400" />
                    <span className="text-xs font-medium text-slate-200">{tool.name}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Pain Points Pills */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 pt-6 border-t border-white/[0.06]">
            {painPoints.map((pain) => (
              <span
                key={pain}
                className="rounded-full border border-red-500/20 bg-red-500/[0.06] px-4 py-1.5 text-xs font-medium text-red-300"
              >
                {pain}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
