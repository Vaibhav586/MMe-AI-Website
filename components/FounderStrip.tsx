import { FounderCard } from "@/components/FounderCard";
import { founderStrip } from "@/lib/proof";

// "Hi, I'm Manish" strip above the final CTA.
export function FounderStrip() {
  if (!founderStrip.enabled) return null;
  return (
    <section aria-label="From the founder" className="border-t border-white/[0.05] bg-bg px-4 py-14 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <FounderCard quote={founderStrip.quote} />
      </div>
    </section>
  );
}
