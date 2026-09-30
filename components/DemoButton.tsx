"use client";

import { useDemoModal } from "@/components/DemoModalProvider";

// Opens the demo modal from Server Component sections.
export function DemoButton({ className, plan, industry, source, children }: { className?: string; plan?: string; industry?: string; source?: string; children: React.ReactNode }) {
  const { openDemo } = useDemoModal();
  return (
    <button type="button" onClick={(e) => openDemo({ plan, industry, source, label: e.currentTarget.textContent?.trim() })} className={className}>
      {children}
    </button>
  );
}
