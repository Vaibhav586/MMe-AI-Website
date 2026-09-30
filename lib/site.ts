// Site-wide facts: URL, contact details, socials and the public route list.
// Change them here, not in components.

export const SITE = {
  name: "MMe-AI",
  url: "https://www.mme-ai.com",
  tagline: "Less busywork. More business.",
  founder: "Manish Kumar",
  location: "Delhi NCR, India",
  // TODO(founder): the hello@mme-ai.com mailbox must exist (Google Workspace / Zoho) before deploying.
  email: "hello@mme-ai.com",
  phoneDisplay: "+91 8851144571",
  phoneE164: "+918851144571",
  whatsappNumber: "918851144571",
  businessHours: "Mon–Sat, 10am–7pm IST",
  // Shown as "Last updated" on every legal page. Change it whenever a policy changes.
  legalUpdated: "30 September 2026",
  // TODO(founder): paste the hosted 2-minute demo video URL (MP4 on a CDN, or similar). Empty shows a "coming soon" note.
  demoVideoUrl: "",
  demoVideoPoster: "/opengraph-image",
} as const;

// The one WhatsApp link used everywhere (floating button, modal, footer, pages).
// It carries a fixed greeting only; never put visitor-entered data in a URL.
export const WHATSAPP_URL = `https://wa.me/${SITE.whatsappNumber}?text=Hi%20MMe-AI%2C%20I%27d%20like%20a%20free%20workflow%20audit`;

// Company social profiles. Leave a URL empty to hide its icon (and keep it out of JSON-LD sameAs).
// TODO(founder): add each real MMe-AI profile URL once the account exists.
export const SOCIALS = {
  linkedin: "",
  instagram: "",
  x: "",
  youtube: "",
};

export function activeSocialUrls(): string[] {
  return Object.values(SOCIALS).filter(Boolean);
}

export const FOUNDER = {
  name: "Manish Kumar",
  role: "Founder",
  // TODO(founder): add the photo at public/team/manish.jpg (square, at least 400px). Initials show until then.
  photo: "/team/manish.jpg",
  // TODO(founder): add the LinkedIn profile URL.
  linkedin: "",
};

// Grievance Officer under the DPDP Act, 2023.
// TODO(legal): appoint the Grievance Officer and set their name and a dedicated email (e.g. grievance@mme-ai.com).
export const GRIEVANCE_OFFICER = {
  name: "",
  email: "",
};

// TODO(founder): confirm where customer data is stored (e.g. "AWS Mumbai (ap-south-1), India").
export const DATA_STORAGE_LOCATION = "";

// Public, indexable pages. The sitemap is built from this list; add new pages here.
export const PUBLIC_ROUTES: { path: string; priority: number }[] = [
  { path: "/", priority: 1.0 },
  { path: "/real-estate", priority: 0.8 },
  { path: "/platform", priority: 0.7 },
  { path: "/about", priority: 0.6 },
  { path: "/contact", priority: 0.6 },
  { path: "/privacy-policy", priority: 0.3 },
  { path: "/terms-of-service", priority: 0.3 },
  { path: "/refund-policy", priority: 0.3 },
  { path: "/data-deletion-request", priority: 0.3 },
];
