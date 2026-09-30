import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";

export const metadata: Metadata = {
  alternates: { canonical: "/refund-policy" },
  title: "Refund Policy | MMe-AI",
  description:
    "Refund Policy for MMe-AI custom dashboard setup and monthly subscription services.",
};

export default function RefundPolicyPage() {
  return (
    <LegalDocument
      title="Refund Policy"
      description="MMe-AI provides custom setup and monthly service work. Refund handling depends on project status, delivered scope and subscription usage."
      sections={[
        {
          title: "Setup fees",
          body: [
            "Setup fees cover discovery, planning, configuration and implementation effort. Once setup work has started, refunds may be limited based on work already completed.",
            "If a project has not started, MMe-AI can review the request and confirm whether a refund or adjustment is possible.",
          ],
        },
        {
          title: "Monthly subscription",
          body: [
            "Monthly subscription fees generally cover access, maintenance, support and ongoing workflow assistance for that billing period.",
            "Cancellation or changes should be requested before the next billing period where possible.",
          ],
        },
        {
          title: "How to request a review",
          body: [
            "To request a refund review, email MMe-AI with your name, business name, payment details and the reason for the request.",
            "Refund decisions are reviewed case by case based on confirmed scope, project progress and service usage.",
          ],
        },
      ]}
    />
  );
}
