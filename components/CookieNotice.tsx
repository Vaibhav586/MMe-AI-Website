"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import { readConsent, subscribeConsent, writeConsent } from "@/lib/consent";
import { ANALYTICS_ENABLED } from "@/components/Analytics";

// Bottom bar asking for analytics consent. Shown only when analytics is configured and no choice is stored.
export function CookieNotice() {
  // "undecided" on the server so the bar never flashes into the static HTML; decided on the client.
  const consent = useSyncExternalStore(subscribeConsent, readConsent, () => "server" as const);
  if (!ANALYTICS_ENABLED || consent !== null) return null;

  const choose = (value: "all" | "essential") => writeConsent(value);

  return (
    <div
      role="region"
      aria-label="Cookie preferences"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-surface/95 px-4 py-4 backdrop-blur-xl"
      style={{ paddingBottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs leading-relaxed text-slate-300">
          We use cookies to understand how visitors use this site and to measure our ads.{" "}
          <Link href="/privacy-policy" className="text-indigo-300 underline hover:text-white">Privacy Policy</Link>
        </p>
        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => choose("essential")}
            className="rounded-full border border-white/15 px-4 py-2 text-xs font-semibold text-slate-200 hover:bg-white/10"
          >
            Only essential
          </button>
          <button
            type="button"
            onClick={() => choose("all")}
            className="rounded-full bg-indigo-600 px-5 py-2 text-xs font-semibold text-white hover:bg-indigo-500"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
