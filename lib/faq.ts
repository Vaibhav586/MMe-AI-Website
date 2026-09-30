import { PLANS, PLAN_ORDER, monthlyLabel, setupLabel } from "@/lib/pricing";

// FAQ content. The FAQ section and the FAQPage JSON-LD both read from here so they stay in sync.
export interface Faq {
  q: string;
  a: string;
}

export const FAQS: Faq[] = [
  {
    q: "What exactly is MMe-AI?",
    a: "It's an AI-powered business operating layer that connects leads, customers, workflows, automation and analytics into one system built around your business.",
  },
  {
    q: "Is MMe-AI a CRM?",
    a: "No. A CRM stores records. MMe-AI connects your workflows, automates repetitive work and surfaces what needs attention across your team.",
  },
  {
    q: "Do we need to replace our existing software?",
    a: "No. MMe-AI is designed to work alongside the tools you already use, including your current CRM, email, WhatsApp, and spreadsheets.",
  },
  {
    q: "How is MMe-AI different from a normal dashboard?",
    a: "A dashboard only shows data. MMe-AI acts on it — automating steps, triggering reminders, qualifying leads, and highlighting what needs immediate action.",
  },
  {
    q: "Can MMe-AI be customized for our industry?",
    a: "Yes. Workflows, dashboards and automations are configured around your specific industry and process — from real estate to healthcare, education, retail, and local services.",
  },
  {
    q: "Can you integrate with our existing tools?",
    a: "MMe-AI connects with your existing tools where supported, bridging the gap between your communication channels and operational databases.",
  },
  {
    q: "Can we start with one workflow?",
    a: "Yes. Most teams start with a single high-effort workflow, prove the measurable time savings and conversion boost, and expand from there.",
  },
  {
    q: "What does a pilot usually include?",
    a: "We pick one high-impact workflow, map the current process, automate it, and refine it with your team during a 30-day optimization sprint.",
  },
  {
    q: "How is pricing calculated?",
    a: `MMe-AI has three plans, each a monthly subscription plus a one-time setup: ${PLAN_ORDER.map((id) => `${PLANS[id].name} (${monthlyLabel(PLANS[id])}, ${setupLabel(PLANS[id]).replace("one-time setup", "setup")})`).join(", ")}. Each plan includes a monthly allowance of AI actions. You can start with a 14-day pilot on one workflow with ₹0 setup. Prices exclude GST.`,
  },
  {
    q: "Who is MMe-AI designed for?",
    a: "Founders, sales leaders, operations heads, and growing businesses that want more visibility, faster response times, and less manual busywork.",
  },
];
