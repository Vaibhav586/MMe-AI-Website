// Marks mockup panels whose figures are sample data, not customer results.
export function IllustrativeBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/[0.05] px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-slate-400 ${className}`}
    >
      Illustrative example · sample data
    </span>
  );
}
