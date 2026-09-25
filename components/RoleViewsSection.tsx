"use client";

import { Crown, Briefcase, Cog } from "lucide-react";

export function RoleViewsSection() {
  const roles = [
    {
      role: "FOUNDERS",
      icon: Crown,
      question: "What needs attention today?",
      color: "from-amber-400/20 to-yellow-500/10",
      textColor: "text-amber-400",
      description: "High-level health scores, pipeline volume, revenue trajectory, and critical bottlenecks surfaced instantly.",
    },
    {
      role: "SALES",
      icon: Briefcase,
      question: "Which leads need action?",
      color: "from-indigo-400/20 to-purple-500/10",
      textColor: "text-indigo-400",
      description: "Auto-qualified inquiries, overdue follow-up queues, deal probability, and intelligent response drafts.",
    },
    {
      role: "OPERATIONS",
      icon: Cog,
      question: "Where is work getting stuck?",
      color: "from-emerald-400/20 to-teal-500/10",
      textColor: "text-emerald-400",
      description: "Task handoffs, client onboarding milestones, service delivery queues, and automated reporting.",
    },
  ];

  return (
    <section className="relative py-24 lg:py-32 bg-[#070914] border-t border-white/[0.05]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Built for the people running the business.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-400">
            Every role sees what matters most to them.
          </p>
        </div>

        {/* 3 Role Columns */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {roles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.role}
                className="rounded-2xl border border-white/[0.08] bg-[#0c1026]/90 p-8 text-center flex flex-col items-center justify-between transition-all duration-300 hover:border-white/20 hover:scale-105 shadow-xl"
              >
                <div className="flex flex-col items-center">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${item.color} border border-white/10 shadow-inner`}>
                    <Icon className={`h-7 w-7 ${item.textColor}`} />
                  </div>
                  <span className="mt-5 text-xs font-mono font-bold tracking-widest text-slate-400 uppercase">
                    {item.role}
                  </span>
                  <p className="mt-4 text-xl font-bold text-white leading-snug">
                    "{item.question}"
                  </p>
                  <p className="mt-3 text-xs leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Callout */}
        <div className="mt-14 mx-auto max-w-3xl text-center">
          <p className="text-base sm:text-lg font-medium text-slate-300 bg-white/[0.03] border border-white/10 rounded-2xl p-6 shadow-sm">
            MMe-AI turns operational data into a <strong className="text-white">clearer picture</strong> of what deserves attention.
          </p>
        </div>

      </div>
    </section>
  );
}
