import Image from "next/image";
import { logos, reviewBadges, stats } from "@/lib/proof";

// Logo strip, stats and review badges under the hero. Each part renders only when lib/proof.ts has data.
export function SocialProof() {
  const badges = reviewBadges.filter((b) => b.url);
  if (!logos.length && !stats.length && !badges.length) return null;

  return (
    <section aria-label="Customers" className="border-t border-white/[0.05] bg-bg px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-6xl text-center">
        {logos.length > 0 && (
          <>
            <p className="text-xs font-semibold uppercase tracking-wider text-muted">Teams automating with MMe-AI</p>
            <ul className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
              {logos.map((logo) => {
                const img = (
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={140}
                    height={40}
                    className="h-8 w-auto object-contain opacity-70 grayscale transition hover:opacity-100 hover:grayscale-0"
                  />
                );
                return (
                  <li key={logo.name}>
                    {logo.url ? (
                      <a href={logo.url} target="_blank" rel="noopener noreferrer">{img}</a>
                    ) : (
                      img
                    )}
                  </li>
                );
              })}
            </ul>
          </>
        )}

        {stats.length > 0 && (
          <dl className="mx-auto mt-8 flex max-w-4xl flex-wrap justify-center gap-x-12 gap-y-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="text-xs text-muted">{s.label}</dt>
                <dd className="mt-1 text-2xl font-bold text-accent">{s.value}</dd>
              </div>
            ))}
          </dl>
        )}

        {badges.length > 0 && (
          <ul className="mt-8 flex flex-wrap justify-center gap-3">
            {badges.map((b) => (
              <li key={b.platform}>
                <a
                  href={b.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-1.5 text-xs font-semibold text-slate-200 hover:border-white/25"
                >
                  {b.platform === "Google" ? "Google reviews" : `Reviews on ${b.platform}`}
                  {b.rating && <span className="text-accent">{b.rating}</span>}
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </section>
  );
}
