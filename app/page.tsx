"use client";

import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { SolutionBridge } from "@/components/SolutionBridge";
import { ProductModules } from "@/components/ProductModules";
import { ComparisonSection } from "@/components/ComparisonSection";
import { WorkflowProcess } from "@/components/WorkflowProcess";
import { IndustrySwitcher } from "@/components/IndustrySwitcher";
import { LiveRealEstateExample } from "@/components/LiveRealEstateExample";
import { DashboardShowcase } from "@/components/DashboardShowcase";
import { AIAgentsSection } from "@/components/AIAgentsSection";
import { RoleViewsSection } from "@/components/RoleViewsSection";
import { EnterpriseGovernanceSection } from "@/components/EnterpriseGovernanceSection";
import { SecuritySection } from "@/components/SecuritySection";
import { IntegrationSection } from "@/components/IntegrationSection";
import { ArchitectureAndCalculator } from "@/components/ArchitectureAndCalculator";
import { PricingSection } from "@/components/PricingSection";
import { FAQSection } from "@/components/FAQSection";
import { CTAAndFooter } from "@/components/CTAAndFooter";
import { BookDemoModal } from "@/components/BookDemoModal";

export default function Home() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<string | undefined>(undefined);

  const handleOpenDemo = (planName?: string) => {
    setSelectedPlan(planName);
    setIsDemoModalOpen(true);
  };

  const handleCloseDemo = () => {
    setIsDemoModalOpen(false);
    setSelectedPlan(undefined);
  };

  return (
    <div id="top" className="min-h-screen bg-[#070913] text-[#f8fafc] selection:bg-indigo-500/30 selection:text-white">
      {/* Sticky Navbar */}
      <Navbar 
        onOpenDemo={() => handleOpenDemo()} 
        onOpenAction={() => {
          const el = document.getElementById("rs-real-estate");
          if (el) el.scrollIntoView({ behavior: "smooth" });
        }}
      />

      <main id="main-content">
        {/* 1. Hero Section + Interactive Hero Dashboard Preview */}
        <HeroSection onOpenDemo={() => handleOpenDemo()} />

        {/* 2. Value-Based Credit Pricing (High-priority, directly below Hero) */}
        <PricingSection onOpenDemo={(plan) => handleOpenDemo(plan)} />

        {/* 3. Problem & Reality Check (Tangled software diagram + Pain points) */}
        <ProblemSection />

        {/* 3. The Bridge / Solution Transition (More tools don't create better workflow) */}
        <div id="solutions">
          <SolutionBridge />
        </div>

        {/* 4. Product Modules (Everything your team needs. One intelligent workspace) */}
        <ProductModules />

        {/* 5. Contrast / Value Prop & Competitive Landscape Matrix */}
        <ComparisonSection />

        {/* 6. Structured Workflow (01 Discover, 02 Map, 03 Configure, 04 Automate, 05 Optimize) */}
        <WorkflowProcess />

        {/* 7. Multi-Industry Switcher (Real Estate, Healthcare, Education, Retail, Local, Services) */}
        <IndustrySwitcher />

        {/* 8. Live Real Estate Walkthrough (RS Real Estate use case + simulated AI Assistant) */}
        <LiveRealEstateExample />

        {/* 9. Full Interactive Dashboard Showcase (Overview, Revenue +18% MoM, Intelligence alerts) */}
        <DashboardShowcase />

        {/* 10. AI Agents in Action (Lead Qualifier, Follow-up, Reporting, Content) */}
        <AIAgentsSection />

        {/* 11. Role-Based Perspectives (Founders, Sales, Operations) */}
        <RoleViewsSection />

        {/* 12. Multi-Agent Execution & Observability Layer (Run ledger, Sandboxing, Memory Graph) */}
        <EnterpriseGovernanceSection />

        {/* 13. Trust & Security Architecture (Secure access, RBAC, Scoped access, Auditing) */}
        <SecuritySection />

        {/* 14. Integration Strategy (Already have a CRM? Good. Keep it.) */}
        <IntegrationSection onOpenDemo={() => handleOpenDemo()} />

        {/* 14. Client-based Subscription Architecture & Pricing Formula Calculator (From attached diagram!) */}
        <ArchitectureAndCalculator onOpenDemo={() => handleOpenDemo()} />

        {/* 15. Comprehensive FAQ Accordion */}
        <FAQSection />
      </main>

      {/* 17. Pre-footer Banner & Rich Footer */}
      <div id="book-demo">
        <CTAAndFooter onOpenDemo={() => handleOpenDemo()} />
      </div>

      {/* Interactive Booking Modal */}
      <BookDemoModal
        isOpen={isDemoModalOpen}
        onClose={handleCloseDemo}
        defaultPlan={selectedPlan}
      />
    </div>
  );
}
