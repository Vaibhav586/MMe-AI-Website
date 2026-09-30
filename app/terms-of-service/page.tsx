import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";

export const metadata: Metadata = {
  alternates: { canonical: "/terms-of-service" },
  title: "Terms of Service | MMe-AI",
  description:
    "Terms of Service for MMe-AI website, demo requests and custom AI automation services.",
};

export default function TermsOfServicePage() {
  return (
    <LegalDocument
      title="Terms of Service"
      description="These terms provide a simple professional baseline for using the MMe-AI website, requesting a demo and discussing custom AI dashboard services."
      sections={[
        {
          title: "Website and demo use",
          body: [
            "The website is provided to explain MMe-AI services and collect demo enquiries. Submitting a demo request does not create a paid engagement by itself.",
            "Any project scope, pricing, timelines and responsibilities should be confirmed separately before paid implementation begins.",
          ],
        },
        {
          title: "Custom implementation",
          body: [
            "MMe-AI builds business-specific dashboards and automation workflows based on the client’s requirements, tools and operational process.",
            "Clients are responsible for providing accurate business information, reviewing outputs and confirming approvals before systems are used in live operations.",
          ],
        },
        {
          title: "No guaranteed results",
          body: [
            "MMe-AI can help organize workflows, automation and reporting, but does not guarantee leads, revenue, business growth or specific commercial outcomes.",
            "Future features, integrations or additional modules may be handled as separate scope and pricing.",
          ],
        },
      ]}
    />
  );
}
