import { z } from "zod";

// Demo / audit request fields. Shared by the form (client-side checks) and /api/demo (authoritative checks).

export const INDUSTRIES = [
  "Real Estate",
  "Healthcare",
  "Education",
  "Retail",
  "Local Business",
  "Services / Agency",
  "Other",
] as const;

export const TEAM_SIZES = ["1–5", "6–15", "16–50", "50+"] as const;

// 10-digit Indian mobile starting 6–9, optional +91 / 91 prefix. Spaces, dashes and brackets are ignored.
export function normalizeIndianMobile(input: string): string | null {
  const digits = input.replace(/[\s\-()]/g, "");
  const match = digits.match(/^(?:\+?91)?([6-9]\d{9})$/);
  return match ? `+91${match[1]}` : null;
}

const optionalText = (max: number) => z.string().trim().max(max).optional().default("");

export const leadSchema = z.object({
  name: z.string({ error: "Please enter your name" }).trim().min(1, "Please enter your name").max(120),
  email: z.email({ error: "Please enter a valid work email" }).max(200),
  whatsapp: z
    .string({ error: "Enter a 10-digit Indian mobile number" })
    .trim()
    .max(20)
    .transform((value, ctx) => {
      const normalized = normalizeIndianMobile(value);
      if (!normalized) {
        ctx.addIssue({ code: "custom", message: "Enter a 10-digit Indian mobile number" });
        return z.NEVER;
      }
      return normalized;
    }),
  company: z.string({ error: "Please enter your company name" }).trim().min(1, "Please enter your company name").max(160),
  teamSize: z.enum(TEAM_SIZES, { error: "Please pick a team size" }).optional(),
  industry: z.enum(INDUSTRIES, { error: "Please pick an industry" }).optional(),
  message: optionalText(2000),
  plan: optionalText(80),
  consent: z.literal(true, { error: "Please agree so we can contact you" }),
});

export type LeadInput = z.input<typeof leadSchema>;
export type Lead = z.output<typeof leadSchema>;
