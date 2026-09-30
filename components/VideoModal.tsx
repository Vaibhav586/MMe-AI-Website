"use client";

import { useEffect, useRef } from "react";
import { X } from "lucide-react";
import { SITE } from "@/lib/site";
import { track } from "@/lib/track";

export function VideoModal({
  onClose,
  src = SITE.demoVideoUrl,
  poster = SITE.demoVideoPoster,
  label = "MMe-AI 2-minute demo",
  trackAs = "demo",
}: {
  onClose: () => void;
  src?: string;
  poster?: string;
  label?: string;
  // Sent as the video_play "video" parameter.
  trackAs?: string;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    closeRef.current?.focus();
    // No video yet: count opening the placeholder as the play intent.
    if (!src) track("video_play", { video: trackAs, placeholder: true });
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose, src, trackAs]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={label}
        className="relative w-full max-w-4xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close video"
          className="absolute -top-11 right-0 rounded-full p-2 text-slate-300 hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>
        {/* TODO(founder): set SITE.demoVideoUrl in lib/site.ts once the demo video is recorded. */}
        {src ? (
          <video
            className="aspect-video w-full rounded-xl border border-white/10 bg-black"
            controls
            autoPlay
            onPlay={() => track("video_play", { video: trackAs })}
            playsInline
            poster={poster}
            src={src}
          />
        ) : (
          <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-white/10 bg-black">
            {/* eslint-disable-next-line @next/next/no-img-element -- generated OG image used as a placeholder poster */}
            <img src={poster} alt="" className="h-full w-full object-cover opacity-40" />
            <p className="absolute inset-0 flex items-center justify-center text-sm font-medium text-slate-200">
              The 2-minute demo video is coming soon.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
