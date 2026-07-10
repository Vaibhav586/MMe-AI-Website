import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";

export const metadata: Metadata = {
  title: "Privacy Policy | MMe-AI",
  description:
    "Privacy Policy for MMe-AI demo requests, contact details and custom AI dashboard services.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      description="This policy explains how MMe-AI handles information shared through the website, demo requests, support conversations and client onboarding."
      sections={[
        {
          title: "Information we collect",
          body: [
            "When you request a demo or contact MMe-AI, we may collect your name, business name, industry, phone or WhatsApp number, email address and details about what you want to automate.",
            "If you become a client, additional workflow details may be collected so we can scope, configure and support your custom dashboard.",
          ],
        },
        {
          title: "How we use information",
          body: [
            "We use information to respond to enquiries, prepare demo conversations, understand business requirements, provide support and improve the MMe-AI service experience.",
            "MMe-AI does not sell personal information. Information is used for legitimate business communication and service delivery.",
          ],
        },
        {
          title: "Data deletion requests",
          body: [
            "You can request deletion of your contact or demo-request information by emailing MMe-AI with the subject “Data Deletion Request”.",
            "Some records may need to be retained where required for billing, dispute handling, compliance, security or legitimate business administration.",
          ],
        },
      ]}
    />
  );
}
