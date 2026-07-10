import Link from "next/link";

type LegalSection = {
  title: string;
  body: string[];
};

type LegalDocumentProps = {
  title: string;
  description: string;
  sections: LegalSection[];
};

const contactEmail = "mmeai.official@gmail.com";
const contactPhone = "+91 8851144571";

export function LegalDocument({
  title,
  description,
  sections,
}: LegalDocumentProps) {
  return (
    <main className="min-h-screen bg-[#F7F3EA] px-5 py-10 text-[#18202F] sm:px-8 lg:px-12">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/"
          className="inline-flex rounded-2xl border border-[#D9E2E1] bg-white/65 px-4 py-3 text-sm font-bold text-[#315C72] transition-colors hover:bg-white"
        >
          ← Back to MMe-AI
        </Link>

        <section className="mt-10 rounded-[34px] border border-[#D9E2E1] bg-white/68 p-6 shadow-[0_28px_80px_rgba(49,92,114,.08)] backdrop-blur-sm sm:p-10">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#4FA3A5]">
            MMe-AI legal
          </span>
          <h1 className="mt-4 text-[clamp(2.5rem,6vw,5rem)] font-semibold leading-[0.98]">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-[#667085]">
            {description}
          </p>
          <p className="mt-4 text-sm text-[#667085]">Last updated: July 10, 2026</p>
        </section>

        <div className="mt-6 space-y-4">
          {sections.map((section) => (
            <section
              key={section.title}
              className="rounded-[28px] border border-[#D9E2E1] bg-white/58 p-6 shadow-[0_16px_45px_rgba(49,92,114,.05)]"
            >
              <h2 className="text-2xl font-semibold">{section.title}</h2>
              <div className="mt-4 space-y-3 text-sm leading-6 text-[#667085]">
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </div>

        <section className="mt-6 rounded-[28px] border border-[#D9E2E1] bg-[#EEF4F2] p-6">
          <h2 className="text-xl font-semibold">Contact</h2>
          <p className="mt-3 text-sm leading-6 text-[#667085]">
            For questions about these terms, privacy, refunds, demo requests, or
            data deletion, contact MMe-AI at{" "}
            <a className="font-semibold text-[#315C72]" href={`mailto:${contactEmail}`}>
              {contactEmail}
            </a>{" "}
            or{" "}
            <a className="font-semibold text-[#315C72]" href="tel:+918851144571">
              {contactPhone}
            </a>
            .
          </p>
        </section>
      </div>
    </main>
  );
}
