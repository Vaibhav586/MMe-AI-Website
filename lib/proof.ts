// Social proof shown on the homepage. Fill these in; each section renders only when its data exists.
// Only add real customers who have agreed to be shown — no placeholder names, logos or numbers.

export interface ProofLogo {
  name: string;
  // Path under /public, e.g. "/logos/acme.svg". Shown in greyscale, colour on hover.
  src: string;
  url?: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
  // Path under /public, e.g. "/testimonials/priya.jpg".
  photo?: string;
  // Company logo path under /public.
  companyLogo?: string;
  // One real result, e.g. { label: "Response time", value: "4 hrs → 2 min" }.
  metric?: { label: string; value: string };
  // Optional video testimonial: hosted MP4 URL plus a poster image under /public.
  video?: { src: string; poster: string };
}

export interface Stat {
  label: string;
  value: string;
}

export interface ReviewBadge {
  platform: "G2" | "Capterra" | "Google";
  // Profile or review page URL. The badge renders only when this is set.
  url: string;
  // Optional rating text, e.g. "4.8/5".
  rating?: string;
}

// TODO(founder): add pilot customers' logos once they agree (logo files go in public/logos/).
export const logos: ProofLogo[] = [];

// TODO(founder): add up to 3 testimonials, each with one real metric.
export const testimonials: Testimonial[] = [];

// TODO(founder): add stats only when they come from real customer data.
export const stats: Stat[] = [];

// TODO(founder): add review profile URLs once listed on G2, Capterra and Google Business Profile.
export const reviewBadges: ReviewBadge[] = [
  { platform: "G2", url: "" },
  { platform: "Capterra", url: "" },
  { platform: "Google", url: "" },
];

// Founder strip above the final CTA. Uses FOUNDER (photo, LinkedIn) from lib/site.ts.
export const founderStrip = {
  enabled: true,
  quote: "Hi, I'm Manish — I personally review every workflow audit.",
};
