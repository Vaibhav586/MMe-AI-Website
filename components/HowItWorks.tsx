import { HOW_IT_WORKS } from "@/lib/process";

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-20 lg:py-24 bg-bg border-t border-white/[0.05]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">How it works</h2>
          <p className="mt-4 text-base sm:text-lg text-muted">
            Three steps from scattered tools to a system that follows up for you.
          </p>
        </div>

        <ol className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOW_IT_WORKS.map((step, idx) => (
            <li key={step.title} className="rounded-2xl border border-white/[0.08] bg-surface p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full border border-amber-400/40 bg-amber-400/10 font-mono text-sm font-bold text-amber-300">
                {idx + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold text-white">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{step.desc}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
