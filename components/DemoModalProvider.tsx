"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { BookDemoModal } from "@/components/BookDemoModal";
import { track } from "@/lib/track";

export interface DemoOptions {
  plan?: string;
  industry?: string;
  // Where the modal was opened from, for analytics (e.g. "hero", "pricing-growth").
  source?: string;
  // Visible text of the button that opened it, for the cta_click event.
  label?: string;
}

interface DemoModalContextValue {
  openDemo: (options?: DemoOptions) => void;
  isOpen: boolean;
}

const DemoModalContext = createContext<DemoModalContextValue | null>(null);

export function useDemoModal(): DemoModalContextValue {
  const ctx = useContext(DemoModalContext);
  if (!ctx) throw new Error("useDemoModal must be used inside <DemoModalProvider>");
  return ctx;
}

// Holds the demo modal state so the page itself can stay a Server Component.
export function DemoModalProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<DemoOptions>({});

  const openDemo = useCallback((opts: DemoOptions = {}) => {
    const source = opts.source ?? "unknown";
    track("cta_click", { location: source, label: opts.label });
    track("demo_open", { source });
    setOptions(opts);
    setIsOpen(true);
  }, []);

  return (
    <DemoModalContext.Provider value={{ openDemo, isOpen }}>
      {children}
      {/* Mounted only while open, so each opening starts with a fresh form and the chosen plan */}
      {isOpen && <BookDemoModal onClose={() => setIsOpen(false)} plan={options.plan} industry={options.industry} source={options.source} />}
    </DemoModalContext.Provider>
  );
}
