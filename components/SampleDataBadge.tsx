// Pill marking mockups whose figures are sample data, not customer results.
export function SampleDataBadge({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-amber-400/40 bg-amber-400/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-amber-200 ${className}`}
    >
      Sample data
    </span>
  );
}
