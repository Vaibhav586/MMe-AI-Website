"use client";

import { createContext, useCallback, useContext, useState } from "react";
import { BookDemoModal } from "@/components/BookDemoModal";

interface DemoModalContextValue {
  openDemo: (planName?: string) => void;
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
  const [plan, setPlan] = useState<string | undefined>(undefined);

  const openDemo = useCallback((planName?: string) => {
    setPlan(planName);
    setIsOpen(true);
  }, []);

  return (
    <DemoModalContext.Provider value={{ openDemo }}>
      {children}
      {/* Mounted only while open, so each opening starts with a fresh form and the chosen plan */}
      {isOpen && <BookDemoModal isOpen onClose={() => setIsOpen(false)} defaultPlan={plan} />}
    </DemoModalContext.Provider>
  );
}
