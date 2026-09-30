import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { DATA_STORAGE_LOCATION, GRIEVANCE_OFFICER, SITE } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/privacy-policy" },
  title: "Privacy Policy | MMe-AI",
  description:
    "How MMe-AI collects, uses and protects information from audit requests, contact details and client services, including your rights under India's DPDP Act, 2023.",
};

const grievanceContact = GRIEVANCE_OFFICER.name
  ? `${GRIEVANCE_OFFICER.name}, Grievance Officer, at ${GRIEVANCE_OFFICER.email || SITE.email}`
  : `our Grievance Officer at ${GRIEVANCE_OFFICER.email || SITE.email}`;

const storageSentence = DATA_STORAGE_LOCATION
  ? `Your data is stored in ${DATA_STORAGE_LOCATION}.`
  : "Your data is stored with our cloud hosting provider, with access limited to the people who need it to deliver the service.";

export default function PrivacyPolicyPage() {
  return (
    <LegalDocument
      title="Privacy Policy"
      description="This policy explains how MMe-AI handles information shared through the website, audit and demo requests, support conversations and client onboarding."
      sections={[
        {
          title: "Information we collect",
          body: [
            "When you request a workflow audit or contact MMe-AI, we collect your name, work email, WhatsApp number, company name, team size, industry and anything you tell us about how your team works.",
            "If you become a client, additional workflow details may be collected so we can scope, configure and support your setup.",
            "If you sign in to the MMe-AI portal with Google, we receive your name, email address and profile photo from Google. We use them only to identify you and show your account.",
          ],
        },
        {
          title: "How we use information",
          body: [
            "We use information to respond to enquiries, prepare audit and demo conversations, understand business requirements, provide support and improve the MMe-AI service experience.",
            "MMe-AI does not sell personal information. Information is used for legitimate business communication and service delivery.",
          ],
        },
        {
          title: "Cookies and analytics",
          body: [
            "We use Google Analytics to understand how visitors use this website. Until you choose \"Accept\" in the cookie notice, it runs without storing analytics cookies.",
            "If you choose \"Accept\", we also use Microsoft Clarity (to see how pages are used), the Meta Pixel and the LinkedIn Insight Tag (to measure our ads). Choosing \"Only essential\" keeps these off. You can change your choice by clearing this site's data in your browser.",
          ],
        },
        // TODO(legal): have this section reviewed by a lawyer before launch.
        {
          title: "Data Protection (DPDP Act, 2023)",
          body: [
            "What we collect: the contact and business details listed above, and, for clients, the workflow data needed to run the service.",
            "Why we collect it: to respond to your request, deliver and support the service you sign up for, and meet our legal obligations. We only use your data for these purposes.",
            "Consent: we process your personal data with your consent, which you give when you submit our forms. You can withdraw consent at any time by emailing us; this does not affect processing that happened before you withdrew it.",
            `Your rights: you can ask to access the personal data we hold about you, correct or update it, or have it erased, and you can nominate someone to exercise these rights on your behalf. Email ${SITE.email} and we will respond within a reasonable time.`,
            `Grievances: if you have a concern about how we handle your data, contact ${grievanceContact}. If you are not satisfied with our response, you may complain to the Data Protection Board of India.`,
            `Where your data is stored: ${storageSentence}`,
          ],
        },
        {
          title: "Data deletion requests",
          body: [
            "You can request deletion of your contact or audit-request information by emailing MMe-AI with the subject “Data Deletion Request”.",
            "Some records may need to be retained where required for billing, dispute handling, compliance, security or legitimate business administration.",
          ],
        },
      ]}
    />
  );
}
