// Single source of truth for plan names and prices.
// PricingSection and FAQSection both read from here so the numbers can't drift apart.
// Awaiting founder confirmation of the final figures (values below are from commit f7beca2).
//
// Do not add struck-through "was" prices unless the plan was actually sold at that price;
// the pre-f7beca2 site listed ₹30,000 / ₹65,000 / ₹1,20,000+ per month, not ₹20,000 / ₹50,000 / ₹1,00,000.

export type PlanId = "basic" | "growth" | "enterprise";

export interface Plan {
  id: PlanId;
  name: string;
  setupPrice: string;
  monthlyPrice: string;
}

export const PLANS: Record<PlanId, Plan> = {
  basic: { id: "basic", name: "Basic", setupPrice: "₹19,999", monthlyPrice: "₹9,999" },
  growth: { id: "growth", name: "Growth", setupPrice: "₹44,999", monthlyPrice: "₹24,999" },
  enterprise: { id: "enterprise", name: "Enterprise", setupPrice: "₹75,999", monthlyPrice: "₹49,999" },
};

export const PLAN_ORDER: PlanId[] = ["basic", "growth", "enterprise"];

