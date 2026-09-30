// Single source of truth for plans and prices.
// The pricing cards, the FAQ and the JSON-LD (homepage and landing pages) all read from here.
//
// Do not add struck-through "was" prices unless the plan was actually sold at that price;
// the pre-f7beca2 site listed ₹30,000 / ₹65,000 / ₹1,20,000+ per month, not ₹20,000 / ₹50,000 / ₹1,00,000.

export type PlanId = "basic" | "growth" | "enterprise";

export interface Plan {
  id: PlanId;
  name: string;
  tagline: string;
  monthlyINR: number;
  // true shows "From ₹X/mo" instead of "₹X/mo".
  monthlyFrom?: boolean;
  // null means "Custom setup".
  setupINR: number | null;
  seats: string;
  // TODO(founder): confirm the real monthly AI action allowances before launch.
  aiActions: string;
  features: string[];
  cta: string;
  recommended?: boolean;
}

export const AI_ACTION_DEFINITION = "An AI action = one qualification, message draft, follow-up or report step.";

export const PLANS: Record<PlanId, Plan> = {
  basic: {
    id: "basic",
    name: "Basic",
    tagline: "Growing businesses and boutique sales teams",
    monthlyINR: 9999,
    setupINR: 19999,
    seats: "Up to 5 seats",
    aiActions: "Up to 3,000 AI actions/month",
    features: [
      "Core Manage–Monitor–Execute platform",
      "See every AI action and approve important ones",
      "Up to 5 team seats",
      "Standard email & chat support",
    ],
    cta: "Start with a pilot",
  },
  growth: {
    id: "growth",
    name: "Growth",
    tagline: "Scaling mid-market companies and RevOps teams",
    monthlyINR: 24999,
    setupINR: 44999,
    seats: "Up to 15 seats",
    aiActions: "Up to 12,000 AI actions/month",
    features: [
      "Everything in Basic, plus:",
      "Priority workflow execution",
      "Advanced multi-agent capabilities",
      "Priority uptime",
      "Up to 15 team seats",
      "Dedicated onboarding specialist",
    ],
    cta: "Start Growth",
    recommended: true,
  },
  enterprise: {
    id: "enterprise",
    name: "Enterprise",
    tagline: "Large enterprises and high-volume operations",
    monthlyINR: 49999,
    monthlyFrom: true,
    setupINR: null,
    seats: "Unlimited / extended seats",
    aiActions: "Custom volume",
    features: [
      "Everything in Growth, plus:",
      "Dedicated execution support",
      "Audit logs & compliance reporting",
      "BYOK (Bring Your Own Key)",
      "Private deployment",
      "Custom SLAs",
    ],
    cta: "Talk to sales",
  },
};

export const PLAN_ORDER: PlanId[] = ["basic", "growth", "enterprise"];

export function formatINR(amount: number): string {
  return `₹${amount.toLocaleString("en-IN")}`;
}

export function monthlyLabel(plan: Plan): string {
  return `${plan.monthlyFrom ? "From " : ""}${formatINR(plan.monthlyINR)}/mo`;
}

export function setupLabel(plan: Plan): string {
  return plan.setupINR === null ? "Custom setup" : `${formatINR(plan.setupINR)} one-time setup`;
}
