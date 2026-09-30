"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useDemoModal } from "@/components/DemoModalProvider";
import { Logo } from "@/components/Logo";

// Industries with their own page link to it; the rest open the audit form with that industry preselected.
const SOLUTIONS: { label: string; href?: string; industry?: string }[] = [
  { label: "Real Estate", href: "/real-estate" },
  { label: "Healthcare", industry: "Healthcare" },
  { label: "Education", industry: "Education" },
  { label: "Agencies", industry: "Services / Agency" },
];

const LINKS = [
  { label: "Product", href: "/#how-it-works" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Platform", href: "/platform" },
];

const linkClass = "whitespace-nowrap text-sm font-medium text-slate-300 transition-colors hover:text-white";

export function Navbar() {
  const { openDemo } = useDemoModal();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const solutionsRef = useRef<HTMLDivElement>(null);

  // Close the Solutions dropdown on outside click or Escape.
  useEffect(() => {
    if (!solutionsOpen) return;
    const onClick = (e: MouseEvent) => {
      if (!solutionsRef.current?.contains(e.target as Node)) setSolutionsOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setSolutionsOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [solutionsOpen]);

  const pickSolution = (item: (typeof SOLUTIONS)[number]) => {
    setSolutionsOpen(false);
    setMobileMenuOpen(false);
    if (item.industry) openDemo({ industry: item.industry, source: "nav-solutions", label: item.label });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.07] bg-bg/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 lg:h-20 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" aria-label="MMe-AI home" className="shrink-0">
          <Logo />
        </Link>

        {/* Desktop navigation */}
        <nav aria-label="Main" className="hidden lg:flex items-center gap-7">
          <Link href={LINKS[0].href} className={linkClass}>{LINKS[0].label}</Link>
          <div ref={solutionsRef} className="relative">
            <button
              type="button"
              aria-expanded={solutionsOpen}
              aria-controls="solutions-menu"
              onClick={() => setSolutionsOpen((o) => !o)}
              className={`${linkClass} inline-flex items-center gap-1`}
            >
              Solutions
              <ChevronDown className={`h-4 w-4 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
            {solutionsOpen && (
              <ul id="solutions-menu" className="absolute left-1/2 top-full mt-3 w-52 -translate-x-1/2 rounded-xl border border-white/10 bg-surface p-2 shadow-2xl">
                {SOLUTIONS.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <Link href={item.href} onClick={() => pickSolution(item)} className="block rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/[0.06] hover:text-white">
                        {item.label}
                      </Link>
                    ) : (
                      <button type="button" onClick={() => pickSolution(item)} className="block w-full rounded-lg px-3 py-2 text-left text-sm text-slate-200 hover:bg-white/[0.06] hover:text-white">
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>
          {LINKS.slice(1).map((link) => (
            <Link key={link.label} href={link.href} className={linkClass}>{link.label}</Link>
          ))}
        </nav>

        {/* Desktop actions */}
        <div className="hidden lg:flex items-center gap-5">
          <Link href="/login" className={linkClass}>Login</Link>
          <button
            type="button"
            onClick={() => openDemo({ source: "nav", label: "Get a free audit" })}
            className="glow-button whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold text-white"
          >
            Get a free audit
          </button>
        </div>

        {/* Mobile actions */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            type="button"
            onClick={() => openDemo({ source: "nav-mobile", label: "Get a free audit" })}
            className="glow-button whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-semibold text-white"
          >
            Get a free audit
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen((o) => !o)}
            className="rounded-lg border border-white/10 p-2 text-slate-300 hover:text-white"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {mobileMenuOpen && (
        <nav id="mobile-menu" aria-label="Main" className="lg:hidden border-b border-white/10 bg-surface px-6 py-5">
          <ul className="flex flex-col gap-1">
            <li>
              <Link href={LINKS[0].href} onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-200">
                {LINKS[0].label}
              </Link>
            </li>
            <li className="py-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-muted">Solutions</span>
              <ul className="mt-1 grid grid-cols-2 gap-1">
                {SOLUTIONS.map((item) => (
                  <li key={item.label}>
                    {item.href ? (
                      <Link href={item.href} onClick={() => pickSolution(item)} className="block py-1.5 text-sm text-slate-300">{item.label}</Link>
                    ) : (
                      <button type="button" onClick={() => pickSolution(item)} className="block py-1.5 text-left text-sm text-slate-300">{item.label}</button>
                    )}
                  </li>
                ))}
              </ul>
            </li>
            {LINKS.slice(1).map((link) => (
              <li key={link.label}>
                <Link href={link.href} onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-200">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/login" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-base font-medium text-slate-200">Login</Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
