import { Lock, Users, ShieldAlert, History, Server, Sliders, Shield } from "lucide-react";

export function SecuritySection() {
  const securityFeatures = [
    {
      icon: Lock,
      title: "Secure access",
      desc: "Protected access to your business data at every layer.",
    },
    {
      icon: Users,
      title: "Role-based permissions",
      desc: "Team members see only what's relevant to their role.",
    },
    {
      icon: ShieldAlert,
      title: "Controlled data access",
      desc: "Data visibility is scoped and controlled by business rules.",
    },
    {
      icon: History,
      title: "Auditability",
      desc: "Track changes and activity across your workspace.",
    },
    {
      icon: Server,
      title: "Reliable infrastructure",
      desc: "Built on infrastructure designed for business continuity.",
    },
    {
      icon: Sliders,
      title: "Integration controls",
      desc: "Manage exactly what connects in and out of your workspace.",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#060813] border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-indigo-500/30 bg-indigo-500/[0.08] px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-indigo-300">
            <Shield className="h-3.5 w-3.5 text-indigo-400" />
            <span>Trust & Security</span>
          </div>
          <h2 className="mt-6 text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Business data deserves business-grade care.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Security designed for business workflows.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityFeatures.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-white/[0.08] bg-[#0c1026]/80 p-7 transition-all duration-300 hover:border-indigo-500/40 hover:bg-[#101633]"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-indigo-400">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 text-base font-bold text-white tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-400">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
