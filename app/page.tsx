import type { Metadata } from "next";
import { SiteChrome } from "@/components/SiteChrome";
import { HeroSection } from "@/components/HeroSection";
import { IntegrationsStrip } from "@/components/IntegrationsStrip";
import { ProblemSection } from "@/components/ProblemSection";
import { HowItWorks } from "@/components/HowItWorks";
import { LiveRealEstateExample } from "@/components/LiveRealEstateExample";
import { AIAgentsSection } from "@/components/AIAgentsSection";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { SocialProof } from "@/components/SocialProof";
import { Testimonials } from "@/components/Testimonials";
import { FounderStrip } from "@/components/FounderStrip";
import { JsonLd } from "@/components/JsonLd";
import { FAQS } from "@/lib/faq";
import { faqPageJsonLd, organizationJsonLd, softwareApplicationJsonLd } from "@/lib/jsonld";

export const metadata: Metadata = {
  alternates: { canonical: "/" },
};

// Server Component. Interactive sections are their own client components;
// the demo modal lives in DemoModalProvider (inside SiteChrome).
export default function Home() {
  return (
    <SiteChrome>
      <JsonLd data={organizationJsonLd()} />
      <JsonLd data={softwareApplicationJsonLd()} />
      <JsonLd data={faqPageJsonLd(FAQS)} />
      <HeroSection />
      <SocialProof />
      <IntegrationsStrip />
      <ProblemSection />
      <HowItWorks />
      <LiveRealEstateExample showSolutionLink />
      <AIAgentsSection />
      <Testimonials />
      <PricingSection />
      <FAQSection />
      <FounderStrip />
    </SiteChrome>
  );
}
