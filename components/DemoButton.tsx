"use client";

import { useDemoModal } from "@/components/DemoModalProvider";

// Opens the demo modal from Server Component sections.
export function DemoButton({ className, plan, children }: { className?: string; plan?: string; children: React.ReactNode }) {
  const { openDemo } = useDemoModal();
  return (
    <button type="button" onClick={() => openDemo(plan)} className={className}>
      {children}
    </button>
  );
}
