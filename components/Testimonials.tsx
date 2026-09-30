"use client";

import { useState } from "react";
import Image from "next/image";
import { Play, Quote } from "lucide-react";
import { testimonials, type Testimonial } from "@/lib/proof";
import { VideoModal } from "@/components/VideoModal";

// Up to 3 testimonial cards before pricing. Renders nothing until lib/proof.ts has testimonials.
export function Testimonials() {
  const [playing, setPlaying] = useState<Testimonial | null>(null);
  const items = testimonials.slice(0, 3);
  if (!items.length) return null;

  return (
    <section aria-labelledby="testimonials-title" className="border-t border-white/[0.05] bg-bg px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h2 id="testimonials-title" className="text-center text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          What teams say after switching
        </h2>
        <div className={`mt-12 grid grid-cols-1 gap-6 ${items.length === 1 ? "mx-auto max-w-md" : items.length === 2 ? "mx-auto max-w-4xl md:grid-cols-2" : "md:grid-cols-3"}`}>
          {items.map((t) => (
            <figure key={`${t.name}-${t.company}`} className="flex flex-col rounded-2xl border border-white/[0.08] bg-surface p-6">
              {t.metric && (
                <div className="mb-5 rounded-xl border border-accent/30 bg-accent/10 p-3">
                  <div className="text-xs text-muted">{t.metric.label}</div>
                  <div className="mt-0.5 text-lg font-bold text-accent">{t.metric.value}</div>
                </div>
              )}
              {t.video && (
                <button
                  type="button"
                  onClick={() => setPlaying(t)}
                  aria-label={`Play video testimonial from ${t.name}`}
                  className="relative mb-5 aspect-video overflow-hidden rounded-xl border border-white/10"
                >
                  <Image src={t.video.poster} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
                  <span className="absolute inset-0 flex items-center justify-center bg-black/30">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-bg">
                      <Play className="h-5 w-5 fill-current" aria-hidden="true" />
                    </span>
                  </span>
                </button>
              )}
              <Quote className="h-5 w-5 text-indigo-400" aria-hidden="true" />
              <blockquote className="mt-3 flex-1 text-sm leading-relaxed text-slate-200">{t.quote}</blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                {t.photo && <Image src={t.photo} alt="" width={44} height={44} className="h-11 w-11 rounded-full object-cover" />}
                <div className="min-w-0 flex-1">
                  <div className="text-sm font-semibold text-white">{t.name}</div>
                  <div className="text-xs text-muted">{t.role}, {t.company}</div>
                </div>
                {t.companyLogo && (
                  <Image src={t.companyLogo} alt={t.company} width={80} height={28} className="h-7 w-auto object-contain opacity-80" />
                )}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
      {playing?.video && (
        <VideoModal
          onClose={() => setPlaying(null)}
          src={playing.video.src}
          poster={playing.video.poster}
          label={`Video testimonial from ${playing.name}`}
          trackAs={`testimonial-${playing.company}`}
        />
      )}
    </section>
  );
}
