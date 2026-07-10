"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  BellRing,
  Building2,
  Check,
  ChevronRight,
  GraduationCap,
  HeartPulse,
  LayoutDashboard,
  Mail,
  MapPin,
  Menu,
  PenLine,
  Phone,
  Play,
  Settings2,
  ShoppingBag,
  ShieldCheck,
  Sparkles,
  Store,
  UserRoundCheck,
  UsersRound,
  Workflow,
  X,
} from "lucide-react";
import Image from "next/image";
import type { FormEvent } from "react";
import { useEffect, useMemo, useState } from "react";
import { HeroScene } from "@/components/HeroScene";
import { Reveal } from "@/components/Reveal";
import { ScrollStory } from "@/components/ScrollStory";

const services = [
  {
    number: "01",
    icon: UserRoundCheck,
    title: "Lead Management",
    body: "Capture, qualify, assign, and track leads from one clean operating layer.",
    color: "#315C72",
  },
  {
    number: "02",
    icon: PenLine,
    title: "Content & Caption Assistant",
    body: "Turn business updates into useful captions, creatives, and publishing ideas.",
    color: "#4FA3A5",
  },
  {
    number: "03",
    icon: BellRing,
    title: "Follow-up Reminders",
    body: "Keep prospects, customers, and internal actions moving at the right time.",
    color: "#6D5BD0",
  },
  {
    number: "04",
    icon: BarChart3,
    title: "Analytics & Weekly Reports",
    body: "Get simple visibility into activity, pipeline, and weekly business signals.",
    color: "#7BAE7F",
  },
  {
    number: "05",
    icon: Workflow,
    title: "AI Workflow Automation",
    body: "Convert repeat work into reliable automations shaped around your team.",
    color: "#315C72",
  },
  {
    number: "06",
    icon: LayoutDashboard,
    title: "Custom Business Dashboard",
    body: "Bring your daily workflows into one custom dashboard built for your business.",
    color: "#4FA3A5",
  },
  {
    number: "07",
    icon: UsersRound,
    title: "Client/Customer Management",
    body: "Organize customer context, history, and next steps without tool chaos.",
    color: "#6D5BD0",
  },
  {
    number: "08",
    icon: Settings2,
    title: "Industry-Specific Setup",
    body: "Configure the dashboard around your vertical, process, and operating reality.",
    color: "#7BAE7F",
  },
];

const industries = [
  { name: "Real Estate", icon: Building2, color: "#315C72" },
  { name: "Healthcare", icon: HeartPulse, color: "#4FA3A5" },
  { name: "Education", icon: GraduationCap, color: "#6D5BD0" },
  { name: "Retail", icon: ShoppingBag, color: "#C08D5B" },
  { name: "Local Businesses", icon: Store, color: "#7BAE7F" },
];

const plans = [
  {
    name: "Base",
    setup: "₹10,000",
    monthly: "₹5,000",
    description: "One focused automation to remove a clear operational bottleneck.",
    items: ["Process discovery", "1 core workflow", "30-day optimization"],
  },
  {
    name: "Growth",
    setup: "₹20,000",
    monthly: "₹10,000",
    description: "A connected system across your content, leads, and reporting.",
    items: ["Growth system design", "Up to 4 workflows", "CRM + reporting layer"],
    featured: true,
  },
  {
    name: "Premium",
    setup: "₹30,000",
    monthly: "₹15,000",
    description: "A custom intelligence layer built across your business.",
    items: ["Cross-team automation", "Custom AI agents", "Ongoing growth support"],
  },
];

const trustPoints = [
  { title: "Founder-led implementation", icon: Sparkles },
  { title: "Custom dashboard setup", icon: LayoutDashboard },
  { title: "Secure client login", icon: ShieldCheck },
  { title: "Business-specific workflows", icon: Workflow },
  { title: "Basic support included", icon: Phone },
  { title: "Future features scoped separately", icon: Settings2 },
];

const realEstateModules = [
  "Lead tracking",
  "Property media",
  "AI content",
  "Analytics",
  "Billing",
  "Support",
  "Account settings",
];

const faqs = [
  {
    question: "What does a pilot usually include?",
    answer:
      "We pick one high-impact workflow, map the current process, automate it, and refine it with your team.",
  },
  {
    question: "Do you replace our existing tools?",
    answer:
      "Usually no. MMe-AI connects with your current content, CRM, reporting, and operations tools wherever possible.",
  },
  {
    question: "Is MMe-AI only for real estate?",
    answer:
      "No. The systems are designed for real estate, healthcare, education, retail, and local service businesses.",
  },
  {
    question: "How fast can we start?",
    answer:
      "Most businesses can start with discovery quickly and move into a focused pilot once the workflow scope is clear.",
  },
];

const quickLinks = [
  { label: "Home", href: "#top" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "RS Use Case", href: "#rs-real-estate" },
  { label: "Industries", href: "#industries" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
  { label: "Book Live Demo", href: "#book-demo" },
];

const footerSolutions = services.map((service) => ({
  label: service.title,
  href: "#solutions",
}));

const footerIndustries = industries.map((industry) => ({
  label: industry.name,
  href: "#industries",
}));

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms of Service", href: "/terms-of-service" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "Data Deletion Request", href: "/data-deletion-request" },
];

const contact = {
  founder: "Manish Kumar",
  email: "mmeai.official@gmail.com",
  phone: "+91 8851144571",
  phoneHref: "tel:+918851144571",
  whatsappHref: "https://wa.me/918851144571",
  location: "Delhi NCR, India",
};

type DemoFormState = {
  name: string;
  businessName: string;
  industry: string;
  phone: string;
  email: string;
  automationGoal: string;
};

type FooterColumnProps = {
  title: string;
  links: { label: string; href: string }[];
};

const initialDemoForm: DemoFormState = {
  name: "",
  businessName: "",
  industry: "",
  phone: "",
  email: "",
  automationGoal: "",
};

function buildDemoMailto(form: DemoFormState) {
  const body = [
    "New MMe-AI live demo request",
    "",
    `Name: ${form.name}`,
    `Business Name: ${form.businessName}`,
    `Industry: ${form.industry}`,
    `Phone / WhatsApp: ${form.phone}`,
    `Email: ${form.email}`,
    "",
    "What do you want to automate?",
    form.automationGoal,
  ].join("\n");

  return `mailto:${contact.email}?subject=${encodeURIComponent(
    "MMe-AI Live Demo Request",
  )}&body=${encodeURIComponent(body)}`;
}

function Logo({ footer = false }: { footer?: boolean }) {
  return (
    <a href="#top" className="group flex items-center gap-3" aria-label="MMe-AI home">
      <span
        className={`relative flex shrink-0 items-center justify-center overflow-hidden border border-white/80 bg-white/85 shadow-[0_10px_26px_rgba(49,92,114,.12)] transition-transform group-hover:-translate-y-0.5 ${
          footer ? "h-12 w-12 rounded-2xl" : "h-10 w-10 rounded-xl"
        }`}
      >
        <Image
          src="/mme-ai-logo-mark.svg"
          alt=""
          width={56}
          height={56}
          priority={!footer}
          unoptimized
          className="h-full w-full object-contain p-1"
        />
      </span>
      <span
        className={`font-[family-name:var(--font-display)] font-bold tracking-[-0.04em] text-[#18202F] ${
          footer ? "text-xl" : "text-lg"
        }`}
      >
        MMe <span className="font-medium text-[#4FA3A5]">AI</span>
      </span>
    </a>
  );
}

function FooterColumn({ title, links }: FooterColumnProps) {
  return (
    <div>
      <h3 className="text-sm font-bold tracking-[-0.01em] text-[#18202F]">
        {title}
      </h3>
      <ul className="mt-5 space-y-3">
        {links.map((link) => (
          <li key={`${title}-${link.label}`}>
            <a
              href={link.href}
              className="text-sm leading-6 text-[#667085] transition-colors hover:text-[#315C72]"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoForm, setDemoForm] = useState<DemoFormState>(initialDemoForm);
  const [demoSubmitted, setDemoSubmitted] = useState(false);
  const { scrollYProgress } = useScroll();
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const demoMailto = useMemo(() => buildDemoMailto(demoForm), [demoForm]);

  useEffect(() => {
    function closeMenuOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setMenuOpen(false);
      }
    }

    window.addEventListener("keydown", closeMenuOnEscape);
    return () => window.removeEventListener("keydown", closeMenuOnEscape);
  }, []);

  function updateDemoField(field: keyof DemoFormState, value: string) {
    setDemoForm((current) => ({ ...current, [field]: value }));
    setDemoSubmitted(false);
  }

  function handleDemoSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setDemoSubmitted(true);
    window.location.href = demoMailto;
  }

  return (
    <main id="main-content">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="noise" />
      <motion.div
        className="fixed left-0 top-0 z-[80] h-[2px] bg-[#4FA3A5]"
        style={{ width: progressWidth }}
      />

      <header className="fixed left-0 right-0 top-0 z-50 px-4 pt-4 sm:px-7">
        <nav
          className="glass mx-auto flex h-16 max-w-[1340px] items-center justify-between rounded-2xl px-4 sm:px-6"
          aria-label="Primary navigation"
        >
          <Logo />
          <div className="hidden items-center gap-8 md:flex">
            <a
              href="#how-it-works"
              className="text-sm font-semibold text-[#667085] transition-colors hover:text-[#18202F]"
            >
              How it works
            </a>
            <a
              href="#solutions"
              className="text-sm font-semibold text-[#667085] transition-colors hover:text-[#18202F]"
            >
              Solutions
            </a>
            <a
              href="#industries"
              className="text-sm font-semibold text-[#667085] transition-colors hover:text-[#18202F]"
            >
              Industries
            </a>
            <a
              href="#pricing"
              className="text-sm font-semibold text-[#667085] transition-colors hover:text-[#18202F]"
            >
              Plans
            </a>
          </div>
          <a
            href="#book-demo"
            className="hidden items-center gap-2 rounded-xl bg-[#18202F] px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#315C72] md:flex"
          >
            Book Live Demo <ArrowRight className="h-4 w-4" />
          </a>
          <button
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#EEF4F2] text-[#18202F] md:hidden"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label="Toggle navigation"
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        {menuOpen && (
          <motion.div
            id="mobile-navigation"
            className="glass mx-auto mt-2 flex max-w-[1340px] flex-col rounded-2xl p-3 md:hidden"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {[
              ["How it works", "#how-it-works"],
              ["Solutions", "#solutions"],
              ["RS use case", "#rs-real-estate"],
              ["Industries", "#industries"],
              ["Plans", "#pricing"],
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-semibold text-[#667085] hover:bg-white"
              >
                {label}
              </a>
            ))}
            <a
              href="#book-demo"
              onClick={() => setMenuOpen(false)}
              className="mt-1 flex items-center justify-between rounded-xl bg-[#18202F] px-4 py-3 text-sm font-semibold text-white"
            >
              Book Live Demo <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>
        )}
      </header>

      <section
        id="top"
        aria-labelledby="hero-title"
        className="relative min-h-screen overflow-hidden px-5 pb-16 pt-32 sm:px-8 sm:pt-40 lg:px-12"
      >
        <div className="absolute left-[5%] top-36 h-2 w-2 rounded-full bg-[#4FA3A5]/60" />
        <div className="absolute right-[8%] top-56 h-3 w-3 rounded-full bg-[#6D5BD0]/40" />
        <div className="absolute bottom-24 left-[18%] h-2.5 w-2.5 rounded-full bg-[#7BAE7F]/60" />
        <div className="mx-auto grid min-h-[calc(100vh-10rem)] max-w-[1340px] items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
          <div className="relative z-10">
            <motion.div
              className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#D9E2E1] bg-white/55 px-3 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#315C72] backdrop-blur-sm"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7BAE7F] opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7BAE7F]" />
              </span>
              Your intelligent growth layer
            </motion.div>
            <motion.h1
              id="hero-title"
              className="max-w-[760px] text-[clamp(3.15rem,7vw,7rem)] font-semibold leading-[0.92] text-[#18202F]"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            >
              AI automation that moves{" "}
              <span className="relative inline-block text-[#315C72]">
                businesses
                <svg
                  className="absolute -bottom-2 left-0 h-3 w-full overflow-visible"
                  viewBox="0 0 300 12"
                  preserveAspectRatio="none"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M2 8 C70 2 210 2 298 7"
                    fill="none"
                    stroke="#4FA3A5"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1, delay: 0.85 }}
                  />
                </svg>
              </span>{" "}
              forward.
            </motion.h1>
            <motion.p
              className="mt-8 max-w-[610px] text-lg leading-8 text-[#667085] sm:text-xl"
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              MMe-AI helps growing businesses manage leads, content,
              follow-ups, reports and automation from one custom AI dashboard.
            </motion.p>
            <motion.p
              className="mt-4 max-w-[610px] text-base leading-7 text-[#667085]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.32 }}
            >
              We build industry-specific AI Business OS dashboards customized
              around your actual business workflow.
            </motion.p>
            <motion.div
              className="mt-9 flex flex-col gap-3 sm:flex-row"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.38 }}
            >
              <a
                href="#book-demo"
                className="group flex items-center justify-center gap-2.5 rounded-2xl bg-[#18202F] px-6 py-4 text-sm font-bold text-white shadow-[0_14px_32px_rgba(24,32,47,.18)] transition-all hover:-translate-y-1 hover:bg-[#315C72]"
              >
                Book a Live Demo
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#how-it-works"
                className="flex items-center justify-center gap-2.5 rounded-2xl border border-[#D9E2E1] bg-white/60 px-6 py-4 text-sm font-bold text-[#18202F] backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white"
              >
                <Play className="h-4 w-4 fill-[#4FA3A5] text-[#4FA3A5]" />
                Explore How It Works
              </a>
            </motion.div>
            <motion.div
              className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-[#667085]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.6 }}
            >
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#7BAE7F]" /> Built around your
                business
              </span>
              <span className="flex items-center gap-2">
                <Check className="h-4 w-4 text-[#7BAE7F]" /> Founder-led setup
                by Manish Kumar
              </span>
            </motion.div>
          </div>
          <HeroScene />
        </div>
      </section>

      <div className="overflow-hidden border-y border-[#D9E2E1] bg-white/35 py-5">
        <div className="marquee-track flex w-max items-center">
          {[...Array(2)].flatMap((_, group) =>
            [
              "AUTOMATION",
              "INTELLIGENCE",
              "CONTENT SYSTEMS",
              "LEAD WORKFLOWS",
              "GROWTH SIGNALS",
            ].map((item) => (
              <div
                key={`${group}-${item}`}
                className="flex items-center whitespace-nowrap px-8 text-xs font-bold tracking-[0.2em] text-[#667085]"
              >
                {item}
                <span className="ml-16 h-1.5 w-1.5 rounded-full bg-[#4FA3A5]" />
              </div>
            )),
          )}
        </div>
      </div>

      <ScrollStory />

      <section
        id="solutions"
        aria-labelledby="solutions-title"
        className="relative overflow-hidden bg-[#F7F3EA] px-5 py-28 sm:px-8 sm:py-36 lg:px-12"
      >
        <div className="mx-auto max-w-[1340px]">
          <Reveal className="flex flex-col justify-between gap-7 md:flex-row md:items-end">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4FA3A5]">
                Core MMe-AI modules
              </span>
              <h2
                id="solutions-title"
                className="mt-4 max-w-2xl text-[clamp(2.6rem,5vw,5.2rem)] font-semibold leading-[0.98]"
              >
                Less busywork.
                <br />
                <span className="text-[#667085]">One custom AI dashboard.</span>
              </h2>
            </div>
            <p className="max-w-md text-base leading-7 text-[#667085] sm:text-lg">
              The dashboard is configured around the workflows your business
              actually runs: leads, content, follow-ups, reporting, and client
              operations.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Reveal key={service.title} delay={index * 0.08}>
                  <motion.article
                    className="group relative min-h-[285px] overflow-hidden rounded-[28px] border border-[#D9E2E1] bg-white/62 p-6 shadow-[0_18px_60px_rgba(49,92,114,.06)] backdrop-blur-sm sm:p-7"
                    whileHover={{ y: -8 }}
                    transition={{ type: "spring", stiffness: 240, damping: 20 }}
                  >
                    <div
                      className="absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-[0.08] transition-transform duration-500 group-hover:scale-125"
                      style={{ backgroundColor: service.color }}
                    />
                    <div className="flex items-center justify-between">
                      <span
                        className="flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-lg"
                        style={{ backgroundColor: service.color }}
                      >
                        <Icon className="h-5 w-5" strokeWidth={1.7} />
                      </span>
                      <span className="font-[family-name:var(--font-display)] text-xs font-bold text-[#667085]/60">
                        {service.number}
                      </span>
                    </div>
                    <h3 className="mt-12 text-2xl font-semibold leading-tight">
                      {service.title}
                    </h3>
                    <p className="mt-4 text-[15px] leading-6 text-[#667085]">
                      {service.body}
                    </p>
                    <div
                      className="absolute bottom-0 left-0 h-1 w-0 transition-all duration-500 group-hover:w-full"
                      style={{ backgroundColor: service.color }}
                    />
                  </motion.article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="rs-real-estate"
        aria-labelledby="rs-real-estate-title"
        className="relative overflow-hidden bg-[#F6F8F5] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="absolute -left-28 top-16 h-80 w-80 rounded-full bg-[#4FA3A5]/10 blur-3xl" />
        <div className="absolute -right-24 bottom-12 h-80 w-80 rounded-full bg-[#6D5BD0]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1240px] gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
          <Reveal>
            <span className="inline-flex rounded-full border border-[#D9E2E1] bg-white/65 px-3 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#315C72]">
              First live vertical
            </span>
            <h2
              id="rs-real-estate-title"
              className="mt-5 text-[clamp(2.5rem,5vw,5rem)] font-semibold leading-[0.98] text-[#18202F]"
            >
              Live Use Case:
              <br />
              <span className="text-[#315C72]">RS Real Estate</span>
            </h2>
            <p className="mt-6 max-w-xl text-base leading-7 text-[#667085] sm:text-lg">
              Built for real estate consultants to manage leads, properties,
              media, AI content, analytics, billing, support and account
              settings from one dashboard.
            </p>
            <p className="mt-5 max-w-xl rounded-2xl border border-[#D9E2E1] bg-white/60 p-4 text-sm leading-6 text-[#667085]">
              RS Real Estate is the first live use case under MMe-AI. The
              company remains an industry-specific AI Business OS for multiple
              business verticals.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="relative overflow-hidden rounded-[34px] border border-[#D9E2E1] bg-white/68 p-6 shadow-[0_28px_80px_rgba(49,92,114,.08)] backdrop-blur-sm sm:p-8">
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#7BAE7F]/16 blur-2xl" />
              <div className="relative">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#4FA3A5]">
                      Dashboard scope
                    </span>
                    <h3 className="mt-3 text-2xl font-semibold text-[#18202F]">
                      One workflow layer for consultants
                    </h3>
                  </div>
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#315C72] text-white shadow-lg">
                    <Building2 className="h-6 w-6" strokeWidth={1.6} />
                  </span>
                </div>
                <div className="mt-8 grid gap-3 sm:grid-cols-2">
                  {realEstateModules.map((module) => (
                    <div
                      key={module}
                      className="flex items-center gap-3 rounded-2xl border border-[#D9E2E1] bg-[#F7F3EA]/70 px-4 py-3 text-sm font-semibold text-[#18202F]"
                    >
                      <Check className="h-4 w-4 text-[#7BAE7F]" />
                      {module}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="industries"
        aria-labelledby="industries-title"
        className="relative overflow-hidden bg-[#F3F0FF] px-5 py-28 sm:px-8 sm:py-36 lg:px-12"
      >
        <div className="absolute left-1/2 top-1/2 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#6D5BD0]/[0.08]" />
        <div className="absolute left-1/2 top-1/2 h-[28rem] w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#6D5BD0]/10" />
        <div className="relative mx-auto max-w-[1340px]">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#6D5BD0]">
              Built for real businesses
            </span>
            <h2
              id="industries-title"
              className="mt-4 text-[clamp(2.6rem,5vw,5rem)] font-semibold leading-[0.98]"
            >
              One intelligence layer.
              <br />
              <span className="text-[#667085]">Many industries.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-[#667085]">
              Every business has different friction. MMe-AI adapts the system to
              your customers, team, and operating reality.
            </p>
          </Reveal>

          <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-5">
            {industries.map((industry, index) => {
              const Icon = industry.icon;
              return (
                <Reveal key={industry.name} delay={index * 0.07}>
                  <motion.div
                    className={`group glass flex min-h-[180px] flex-col items-center justify-center rounded-[28px] p-5 text-center ${
                      index === 4 ? "col-span-2 md:col-span-1" : ""
                    }`}
                    whileHover={{ y: -8, rotate: index % 2 ? 1 : -1 }}
                  >
                    <span
                      className="flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-lg transition-transform duration-300 group-hover:scale-110"
                      style={{ backgroundColor: industry.color }}
                    >
                      <Icon className="h-6 w-6" strokeWidth={1.6} />
                    </span>
                    <span className="mt-5 font-[family-name:var(--font-display)] text-[15px] font-bold text-[#18202F]">
                      {industry.name}
                    </span>
                  </motion.div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="trust"
        aria-labelledby="trust-title"
        className="relative overflow-hidden bg-[#F7F3EA] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="mx-auto max-w-3xl text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#315C72]">
              Production-ready foundation
            </span>
            <h2
              id="trust-title"
              className="mt-4 text-[clamp(2.4rem,5vw,4.8rem)] font-semibold leading-[0.98]"
            >
              Built like a real client system,
              <br />
              <span className="text-[#667085]">not a generic AI template.</span>
            </h2>
          </Reveal>

          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {trustPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Reveal key={point.title} delay={index * 0.05}>
                  <div className="flex min-h-[118px] items-center gap-4 rounded-[26px] border border-[#D9E2E1] bg-white/60 p-5 shadow-[0_18px_55px_rgba(49,92,114,.05)] backdrop-blur-sm">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#EEF4F2] text-[#315C72]">
                      <Icon className="h-5 w-5" strokeWidth={1.7} />
                    </span>
                    <span className="font-semibold leading-6 text-[#18202F]">
                      {point.title}
                    </span>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="pricing"
        aria-labelledby="pricing-title"
        className="bg-[#EEF4F2] px-5 py-28 sm:px-8 sm:py-36 lg:px-12"
      >
        <div className="mx-auto max-w-[1240px]">
          <Reveal className="text-center">
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#4FA3A5]">
              Start at the right size
            </span>
            <h2
              id="pricing-title"
              className="mt-4 text-[clamp(2.6rem,5vw,5rem)] font-semibold leading-none"
            >
              A clear path from
              <br />
              <span className="text-[#315C72]">pilot to scale.</span>
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-[#667085] sm:text-lg">
              Pricing follows a one-time setup + monthly subscription model.
              Final pricing depends on modules, workflow complexity and
              automation scope.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-3 lg:items-center">
            {plans.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 0.08}>
                <article
                  className={`relative overflow-hidden rounded-[30px] border p-7 sm:p-9 ${
                    plan.featured
                      ? "min-h-[450px] border-[#315C72] bg-[#315C72] text-white shadow-[0_28px_80px_rgba(49,92,114,.22)] lg:-translate-y-4"
                      : "min-h-[410px] border-[#D9E2E1] bg-white/65 text-[#18202F]"
                  }`}
                >
                  {plan.featured && (
                    <>
                      <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#4FA3A5]/20 blur-2xl" />
                      <span className="absolute right-7 top-7 rounded-full bg-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-white/80">
                        Most popular
                      </span>
                    </>
                  )}
                  <div className="relative">
                    <span
                      className={`text-xs font-bold uppercase tracking-[0.18em] ${
                        plan.featured ? "text-[#B9DAD6]" : "text-[#4FA3A5]"
                      }`}
                    >
                      {plan.name}
                    </span>
                    <h3 className="mt-7 text-3xl font-semibold">
                      {index === 0
                        ? "Solve one thing well."
                        : index === 1
                          ? "Connect the growth engine."
                          : "Transform how you operate."}
                    </h3>
                    <div className="mt-7 flex flex-wrap items-end gap-x-4 gap-y-2">
                      <div>
                        <span
                          className={`block text-[10px] font-bold uppercase tracking-[0.16em] ${
                            plan.featured ? "text-white/55" : "text-[#667085]"
                          }`}
                        >
                          Setup
                        </span>
                        <span className="mt-1 block text-2xl font-bold tracking-[-0.04em]">
                          {plan.setup}
                        </span>
                      </div>
                      <span
                        className={`pb-1 text-sm ${
                          plan.featured ? "text-white/45" : "text-[#667085]"
                        }`}
                      >
                        +
                      </span>
                      <div>
                        <span
                          className={`block text-[10px] font-bold uppercase tracking-[0.16em] ${
                            plan.featured ? "text-white/55" : "text-[#667085]"
                          }`}
                        >
                          Monthly
                        </span>
                        <span className="mt-1 block text-2xl font-bold tracking-[-0.04em]">
                          {plan.monthly}
                          <span
                            className={`ml-1 text-xs font-medium tracking-normal ${
                              plan.featured ? "text-white/55" : "text-[#667085]"
                            }`}
                          >
                            /mo
                          </span>
                        </span>
                      </div>
                    </div>
                    <p
                      className={`mt-6 min-h-[72px] text-[15px] leading-6 ${
                        plan.featured ? "text-white/65" : "text-[#667085]"
                      }`}
                    >
                      {plan.description}
                    </p>
                    <div
                      className={`my-7 h-px ${
                        plan.featured ? "bg-white/15" : "bg-[#D9E2E1]"
                      }`}
                    />
                    <ul className="space-y-4">
                      {plan.items.map((item) => (
                        <li key={item} className="flex items-center gap-3 text-sm">
                          <span
                            className={`flex h-5 w-5 items-center justify-center rounded-full ${
                              plan.featured
                                ? "bg-white/12 text-[#B9DAD6]"
                                : "bg-[#E6F0E7] text-[#6A9A6F]"
                            }`}
                          >
                            <Check className="h-3 w-3" strokeWidth={2.5} />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#book-demo"
                      className={`mt-9 flex w-full items-center justify-between rounded-2xl px-5 py-4 text-sm font-bold transition-transform hover:-translate-y-1 ${
                        plan.featured
                          ? "bg-white text-[#18202F]"
                          : "bg-[#EEF4F2] text-[#18202F]"
                      }`}
                    >
                      Book Live Demo <ChevronRight className="h-4 w-4" />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
          <p className="mt-6 text-center text-sm text-[#667085]">
            Custom automation scope may vary by business. Future features are
            handled as a separate scope.
          </p>
        </div>
      </section>

      <section
        id="faq"
        aria-labelledby="faq-title"
        className="relative overflow-hidden bg-[#F6F8F5] px-5 py-24 sm:px-8 sm:py-32 lg:px-12"
      >
        <div className="absolute -left-24 top-16 h-72 w-72 rounded-full bg-[#7BAE7F]/10 blur-3xl" />
        <div className="absolute -right-28 bottom-6 h-80 w-80 rounded-full bg-[#6D5BD0]/10 blur-3xl" />
        <div className="relative mx-auto grid max-w-[1240px] gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
          <Reveal>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#315C72]">
              FAQ
            </span>
            <h2
              id="faq-title"
              className="mt-4 text-[clamp(2.4rem,4.6vw,4.6rem)] font-semibold leading-[0.98]"
            >
              Clear answers before
              <br />
              <span className="text-[#667085]">we build the system.</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-7 text-[#667085] sm:text-lg">
              MMe-AI starts with a focused pilot, then expands only where
              automation creates measurable business value.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {faqs.map((item, index) => (
              <Reveal key={item.question} delay={index * 0.06}>
                <article className="h-full rounded-[26px] border border-[#D9E2E1] bg-white/70 p-6 shadow-[0_18px_50px_rgba(49,92,114,.06)] backdrop-blur-sm">
                  <h3 className="text-lg font-semibold leading-snug text-[#18202F]">
                    {item.question}
                  </h3>
                  <p className="mt-4 text-sm leading-6 text-[#667085]">
                    {item.answer}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="book-demo"
        aria-labelledby="book-demo-title"
        className="relative overflow-hidden bg-[#F7F3EA] px-5 py-20 sm:px-8 sm:py-28 lg:px-12"
      >
        <span id="pilot" className="absolute -top-24" aria-hidden="true" />
        <Reveal className="relative mx-auto max-w-[1340px] overflow-hidden rounded-[36px] bg-[#18202F] px-6 py-10 text-white shadow-[0_35px_90px_rgba(24,32,47,.2)] sm:px-10 sm:py-14 lg:px-16">
          <div className="absolute -right-24 -top-40 h-[32rem] w-[32rem] rounded-full bg-[#4FA3A5]/20 blur-3xl" />
          <div className="absolute -bottom-40 left-1/3 h-[25rem] w-[25rem] rounded-full bg-[#6D5BD0]/20 blur-3xl" />
          <div className="soft-grid absolute inset-0 opacity-[0.08]" />
          <div className="relative grid gap-10 lg:grid-cols-[0.86fr_1.14fr] lg:items-start">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#9AC9C5]">
                Book Live Demo
              </span>
              <h2
                id="book-demo-title"
                className="mt-5 max-w-3xl text-[clamp(2.5rem,5.5vw,5.4rem)] font-semibold leading-[0.95]"
              >
                See how MMe-AI can fit your workflow.
              </h2>
              <p className="mt-6 max-w-xl text-lg leading-8 text-white/60">
                Share your business details and what you want to automate. This
                opens a prefilled email to MMe-AI so the request is sent from
                your own mail app.
              </p>
              <div className="mt-8 grid gap-3 text-sm text-white/70">
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Mail className="h-4 w-4 text-[#9AC9C5]" />
                  {contact.email}
                </a>
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-3 transition-colors hover:text-white"
                >
                  <Phone className="h-4 w-4 text-[#9AC9C5]" />
                  {contact.phone}
                </a>
                <span className="flex items-center gap-3">
                  <Sparkles className="h-4 w-4 text-[#9AC9C5]" />
                  Founder-led by {contact.founder}
                </span>
              </div>
            </div>

            <form
              onSubmit={handleDemoSubmit}
              className="rounded-[30px] border border-white/15 bg-white/[0.08] p-5 backdrop-blur-md sm:p-7"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-semibold text-white/78">
                  Name
                  <input
                    required
                    value={demoForm.name}
                    onChange={(event) => updateDemoField("name", event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-white/15 bg-white/90 px-4 py-3 text-sm text-[#18202F] outline-none transition focus:border-[#9AC9C5] focus:ring-4 focus:ring-[#9AC9C5]/20"
                    placeholder="Your name"
                  />
                </label>
                <label className="block text-sm font-semibold text-white/78">
                  Business Name
                  <input
                    required
                    value={demoForm.businessName}
                    onChange={(event) =>
                      updateDemoField("businessName", event.target.value)
                    }
                    className="mt-2 w-full rounded-2xl border border-white/15 bg-white/90 px-4 py-3 text-sm text-[#18202F] outline-none transition focus:border-[#9AC9C5] focus:ring-4 focus:ring-[#9AC9C5]/20"
                    placeholder="Company / brand"
                  />
                </label>
                <label className="block text-sm font-semibold text-white/78">
                  Industry
                  <input
                    required
                    value={demoForm.industry}
                    onChange={(event) =>
                      updateDemoField("industry", event.target.value)
                    }
                    className="mt-2 w-full rounded-2xl border border-white/15 bg-white/90 px-4 py-3 text-sm text-[#18202F] outline-none transition focus:border-[#9AC9C5] focus:ring-4 focus:ring-[#9AC9C5]/20"
                    placeholder="Real estate, retail, healthcare..."
                  />
                </label>
                <label className="block text-sm font-semibold text-white/78">
                  Phone / WhatsApp
                  <input
                    required
                    value={demoForm.phone}
                    onChange={(event) => updateDemoField("phone", event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-white/15 bg-white/90 px-4 py-3 text-sm text-[#18202F] outline-none transition focus:border-[#9AC9C5] focus:ring-4 focus:ring-[#9AC9C5]/20"
                    placeholder="+91 ..."
                  />
                </label>
                <label className="block text-sm font-semibold text-white/78 sm:col-span-2">
                  Email
                  <input
                    required
                    type="email"
                    value={demoForm.email}
                    onChange={(event) => updateDemoField("email", event.target.value)}
                    className="mt-2 w-full rounded-2xl border border-white/15 bg-white/90 px-4 py-3 text-sm text-[#18202F] outline-none transition focus:border-[#9AC9C5] focus:ring-4 focus:ring-[#9AC9C5]/20"
                    placeholder="you@business.com"
                  />
                </label>
                <label className="block text-sm font-semibold text-white/78 sm:col-span-2">
                  What do you want to automate?
                  <textarea
                    required
                    rows={4}
                    value={demoForm.automationGoal}
                    onChange={(event) =>
                      updateDemoField("automationGoal", event.target.value)
                    }
                    className="mt-2 w-full resize-none rounded-2xl border border-white/15 bg-white/90 px-4 py-3 text-sm text-[#18202F] outline-none transition focus:border-[#9AC9C5] focus:ring-4 focus:ring-[#9AC9C5]/20"
                    placeholder="Leads, follow-ups, content, reporting, dashboard setup..."
                  />
                </label>
              </div>
              <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center">
                <button
                  type="submit"
                  className="group flex items-center justify-center gap-2 rounded-2xl bg-[#F7F3EA] px-6 py-4 text-sm font-bold text-[#18202F] transition-all hover:-translate-y-1 hover:bg-white"
                >
                  Send Demo Request
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-center gap-2 rounded-2xl border border-white/15 px-6 py-4 text-sm font-bold text-white/86 transition-all hover:-translate-y-1 hover:bg-white/10"
                >
                  WhatsApp Manish
                </a>
              </div>
              <p className="mt-4 text-xs leading-5 text-white/48">
                No fake calendar booking here — the form opens your email app
                with the request prefilled for {contact.email}.
              </p>
              {demoSubmitted && (
                <p className="mt-3 rounded-2xl border border-[#9AC9C5]/30 bg-[#9AC9C5]/10 px-4 py-3 text-sm text-[#DDF6F3]">
                  Your demo email is ready. Please send it from your email app
                  to complete the request.
                </p>
              )}
            </form>
          </div>
        </Reveal>
      </section>

      <footer className="relative overflow-hidden border-t border-[#D9E2E1] bg-[linear-gradient(180deg,#F7F3EA_0%,#EEF4F2_100%)] px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-12">
        <div className="absolute left-0 top-0 h-px w-full bg-white/75" />
        <div className="absolute -left-28 bottom-10 h-72 w-72 rounded-full bg-[#4FA3A5]/10 blur-3xl" />
        <div className="absolute right-0 top-10 h-72 w-72 rounded-full bg-[#6D5BD0]/10 blur-3xl" />
        <div className="relative mx-auto max-w-[1340px]">
          <div className="grid gap-10 lg:grid-cols-[1.25fr_.7fr_.95fr_.75fr_1.05fr] lg:gap-8">
            <div className="max-w-sm">
              <Logo footer />
              <p className="mt-6 text-base font-semibold leading-7 text-[#18202F]">
                Industry-Specific AI Business OS.
              </p>
              <p className="mt-3 text-sm leading-6 text-[#667085]">
                Custom AI dashboards for leads, content, follow-ups, reports,
                automation, and client operations.
              </p>
              <div className="mt-6 overflow-hidden rounded-[22px] border border-[#D9E2E1] bg-white/55 p-3 shadow-[0_18px_50px_rgba(49,92,114,.07)] backdrop-blur-sm">
                <Image
                  src="/mme-ai-logo-full.svg"
                  alt="MMe-AI AI-driven Intelligence"
                  width={260}
                  height={110}
                  unoptimized
                  className="h-auto w-full rounded-2xl"
                />
              </div>
            </div>

            <FooterColumn title="Quick links" links={quickLinks} />
            <FooterColumn title="Solutions" links={footerSolutions} />
            <FooterColumn title="Industries" links={footerIndustries} />

            <div className="rounded-[28px] border border-[#D9E2E1] bg-white/60 p-6 shadow-[0_22px_65px_rgba(49,92,114,.08)] backdrop-blur-sm">
              <p className="text-lg font-semibold leading-7 text-[#18202F]">
                Ready to automate your business?
              </p>
              <a
                href="#book-demo"
                className="mt-5 inline-flex items-center gap-2 rounded-2xl bg-[#315C72] px-5 py-3 text-sm font-bold text-white shadow-[0_12px_28px_rgba(49,92,114,.18)] transition-all hover:-translate-y-0.5 hover:bg-[#26495B]"
              >
                Book Live Demo <ArrowRight className="h-4 w-4" />
              </a>
              <div className="mt-7 space-y-3 border-t border-[#D9E2E1] pt-5">
                <p className="flex items-center gap-3 text-sm text-[#667085]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF4F2] text-[#315C72]">
                    <Sparkles className="h-4 w-4" />
                  </span>
                  {contact.founder}
                </p>
                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-3 text-sm text-[#667085] transition-colors hover:text-[#315C72]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF4F2] text-[#315C72]">
                    <Mail className="h-4 w-4" />
                  </span>
                  {contact.email}
                </a>
                <a
                  href={contact.phoneHref}
                  className="flex items-center gap-3 text-sm text-[#667085] transition-colors hover:text-[#315C72]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF4F2] text-[#315C72]">
                    <Phone className="h-4 w-4" />
                  </span>
                  {contact.phone}
                </a>
                <p className="flex items-center gap-3 text-sm text-[#667085]">
                  <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEF4F2] text-[#315C72]">
                    <MapPin className="h-4 w-4" />
                  </span>
                  {contact.location}
                </p>
              </div>
            </div>
          </div>

          <div
            id="footer-legal"
            className="mt-12 flex flex-col gap-4 border-t border-[#D9E2E1] pt-6 text-xs text-[#667085] sm:flex-row sm:items-center sm:justify-between"
          >
            <p>© 2026 MMe-AI. All rights reserved.</p>
            <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Legal">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-[#315C72]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
        </div>
      </footer>
    </main>
  );
}
