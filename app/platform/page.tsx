import type { Metadata } from "next";
import { SiteChrome } from "@/components/SiteChrome";
import { ComparisonSection } from "@/components/ComparisonSection";
import { EnterpriseGovernanceSection } from "@/components/EnterpriseGovernanceSection";
import { SecuritySection } from "@/components/SecuritySection";

export const metadata: Metadata = {
  title: "Platform & Security | MMe-AI",
  description:
    "How MMe-AI works alongside your existing tools, keeps every AI action visible and approvable, and protects your business data.",
  alternates: { canonical: "/platform" },
};

export default function PlatformPage() {
  return (
    <SiteChrome>
      <ComparisonSection />
      <EnterpriseGovernanceSection />
      <SecuritySection />
    </SiteChrome>
  );
}
