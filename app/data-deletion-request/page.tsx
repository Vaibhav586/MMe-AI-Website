import type { Metadata } from "next";
import { LegalDocument } from "@/components/LegalDocument";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  alternates: { canonical: "/data-deletion-request" },
  title: "Data Deletion Request | MMe-AI",
  description:
    "Request deletion of demo or contact information shared with MMe-AI.",
};

export default function DataDeletionRequestPage() {
  return (
    <LegalDocument
      title="Data Deletion Request"
      description="Use this page to understand how to request deletion of contact or demo-request information shared with MMe-AI."
      sections={[
        {
          title: "How to request deletion",
          body: [
            `Email ${SITE.email} with the subject “Data Deletion Request”. Include your name, business name, email address and phone number used in the demo or contact request.`,
            "MMe-AI will review the request and respond through the contact details available in the request.",
          ],
        },
        {
          title: "What can be deleted",
          body: [
            "Demo request details, general enquiry information and non-essential contact records can usually be deleted on request.",
            "Some records may need to be retained for billing, dispute handling, security, compliance or legitimate business administration.",
          ],
        },
      ]}
    />
  );
}
