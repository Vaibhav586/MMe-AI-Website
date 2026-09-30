// Public contact details used across the site. Change them here, not in components.
// TODO(founder): replace with role addresses on the company domain (sales@, support@, privacy@mme-ai.com).
export const SALES_EMAIL = "mmeai.official@gmail.com";
export const PHONE_DISPLAY = "+91 8851144571";
export const PHONE_E164 = "+918851144571";
export const WHATSAPP_NUMBER = "918851144571";

export function whatsappLink(text: string): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
}

// Company social profiles. Leave a URL empty to hide its icon in the footer.
// TODO(founder): add each real MMe-AI profile URL once the account exists.
export const SOCIAL_LINKS = {
  linkedin: "",
  instagram: "",
  x: "",
  youtube: "",
};
