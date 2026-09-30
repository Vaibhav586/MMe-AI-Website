import { SITE, activeSocialUrls } from "@/lib/site";
import { PLANS, PLAN_ORDER } from "@/lib/pricing";
import type { Faq } from "@/lib/faq";

// schema.org structured data. Built from the same config as the visible page so they can't drift apart.

export function organizationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/brand/mme-logo.png`,
    slogan: SITE.tagline,
    founder: { "@type": "Person", name: SITE.founder },
    address: { "@type": "PostalAddress", addressRegion: "Delhi NCR", addressCountry: "IN" },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      email: SITE.email,
      telephone: SITE.phoneE164,
      areaServed: "IN",
    },
    sameAs: activeSocialUrls(),
  };
}

export function softwareApplicationJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: SITE.name,
    url: SITE.url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: PLAN_ORDER.map((id) => {
      const plan = PLANS[id];
      return {
        "@type": "Offer",
        name: `${plan.name} plan`,
        price: plan.monthlyINR,
        priceCurrency: "INR",
        priceSpecification: {
          "@type": "UnitPriceSpecification",
          // "From ₹X/mo" plans are a minimum, not a fixed price.
          ...(plan.monthlyFrom ? { minPrice: plan.monthlyINR } : { price: plan.monthlyINR }),
          priceCurrency: "INR",
          unitText: "MONTH",
        },
      };
    }),
  };
}

export function faqPageJsonLd(faqs: Faq[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.q,
      acceptedAnswer: { "@type": "Answer", text: faq.a },
    })),
  };
}
