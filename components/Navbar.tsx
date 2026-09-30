"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Play } from "lucide-react";
import { useDemoModal } from "@/components/DemoModalProvider";

export function Navbar() {
  const { openDemo } = useDemoModal();
  const onOpenDemo = () => openDemo();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: "Product", href: "#product" },
    { label: "Solutions", href: "#solutions" },
    { label: "Pricing", href: "#pricing" },
    { label: "Architecture", href: "#architecture" },
    { label: "Governance", href: "#governance" },
    { label: "Platform Advantage", href: "#comparison" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.07] bg-[#070913]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand Logo */}
        <Link href="#top" className="flex items-center gap-3 group">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-indigo-500/30 bg-[#0d122e] p-1 shadow-[0_0_15px_rgba(99,102,241,0.25)] transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/logo.png"
              alt="MMe-AI Logo"
              width={40}
              height={40}
              className="h-full w-full object-cover rounded-lg"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold tracking-tight text-white flex items-center">
              MMe<span className="text-indigo-400 font-extrabold">-AI</span>
            </span>
            <span className="text-[10px] uppercase tracking-wider text-slate-400 font-medium -mt-1 hidden sm:block">
              AI Business OS
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenDemo}
            className="glow-button inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all"
          >
            Book an Enterprise Demo
          </button>
          <a
            href="#rs-real-estate"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-slate-200 transition-all hover:bg-white/[0.08] hover:text-white hover:border-white/20"
          >
            <Play className="h-3.5 w-3.5 fill-indigo-400 text-indigo-400" />
            <span>See MMe-AI in Action</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenDemo}
            className="glow-button rounded-full px-3.5 py-1.5 text-xs font-semibold text-white"
          >
            Book an Enterprise Demo
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg border border-white/10 p-2 text-slate-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-white/10 bg-[#0a0e22]/98 px-6 py-6 backdrop-blur-2xl">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-300 hover:text-white py-1 border-b border-white/[0.04]"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex flex-col gap-3 pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemo();
                }}
                className="glow-button w-full rounded-full py-3 text-center text-sm font-semibold text-white"
              >
                Book an Enterprise Demo
              </button>
              <a
                href="#rs-real-estate"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full text-center rounded-full border border-white/10 py-2.5 text-sm font-medium text-slate-300"
              >
                See MMe-AI in Action
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
