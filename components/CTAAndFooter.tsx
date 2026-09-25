"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, Phone, MapPin, MessageSquare } from "lucide-react";

interface CTAAndFooterProps {
  onOpenDemo: () => void;
}

export function CTAAndFooter({ onOpenDemo }: CTAAndFooterProps) {
  const handleWhatsApp = () => {
    window.open("https://wa.me/918851144571?text=Hi%20Manish,%20I'm%20interested%20in%20MMe-AI", "_blank");
  };

  return (
    <footer className="relative bg-[#05070f] border-t border-white/[0.08] text-slate-300">
      
      {/* Pre-footer Call to Action Banner (Matching video frame 01:05) */}
      <div className="relative border-b border-white/[0.08] bg-gradient-to-b from-[#090d22] to-[#05070f] py-20 lg:py-28 overflow-hidden">
        {/* Glow orb */}
        <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-600/15 rounded-full blur-[140px]" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Your business already has the tools. <br />
            <span className="bg-gradient-to-r from-indigo-300 via-purple-300 to-indigo-400 bg-clip-text text-transparent">
              Now give them an intelligent layer.
            </span>
          </h2>
          <p className="mt-5 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Tell us how your business works. We'll identify where MMe-AI can create the most value.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onOpenDemo}
              className="glow-button inline-flex items-center gap-2 rounded-full px-8 py-4 text-base font-semibold text-white shadow-xl"
            >
              <span>Book an Enterprise Demo</span>
              <ArrowRight className="h-4 w-4" />
            </button>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 hover:bg-emerald-500/20 px-7 py-4 text-base font-semibold text-emerald-300 transition-colors"
            >
              <MessageSquare className="h-4 w-4 text-emerald-400" />
              <span>Talk to Solutions Engineering</span>
            </button>
          </div>

          <p className="mt-8 text-xs font-mono text-slate-500">
            mme-ai.com — MMe-AI : Less busywork. More business.
          </p>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="#top" className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-indigo-500/30 bg-[#0d122e] p-1 shadow-sm">
                <Image
                  src="/logo.png"
                  alt="MMe-AI Logo"
                  width={40}
                  height={40}
                  className="h-full w-full object-cover rounded-lg"
                />
              </div>
              <span className="text-xl font-bold tracking-tight text-white flex items-center">
                MMe<span className="text-indigo-400 font-extrabold">-AI</span>
              </span>
            </Link>
            <p className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">
              Industry-Specific AI Business OS
            </p>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Custom AI dashboards for leads, content, follow-ups, reports, automation, and client operations.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-indigo-400" />
                <a href="mailto:mmeai.official@gmail.com" className="hover:text-white transition-colors">
                  mmeai.official@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-indigo-400" />
                <a href="tel:+918851144571" className="hover:text-white transition-colors">
                  +91 8851144571
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-indigo-400" />
                <span>Delhi NCR, India</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Product
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#product" className="hover:text-white transition-colors">Product</a></li>
              <li><a href="#solutions" className="hover:text-white transition-colors">Solutions</a></li>
              <li><a href="#industries" className="hover:text-white transition-colors">Industries</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
              <li><a href="#architecture" className="hover:text-white transition-colors">Architecture</a></li>
              <li><a href="#pricing" className="hover:text-white transition-colors">Pricing</a></li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#top" className="hover:text-white transition-colors">About</a></li>
              <li><button onClick={onOpenDemo} className="hover:text-white transition-colors text-left">Contact</button></li>
              <li><a href="mailto:mmeai.official@gmail.com" className="hover:text-white transition-colors">Careers</a></li>
              <li><Link href="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link href="/refund-policy" className="hover:text-white transition-colors">Refund Policy</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-white">
              Social
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <svg className="h-3.5 w-3.5 text-indigo-400 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.63 1.63 0 1 0 0-3.26 1.63 1.63 0 0 0 0 3.26M7.86 18.5V10.13H5.07V18.5h2.79z"/>
                </svg>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  LinkedIn
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-3.5 w-3.5 text-pink-400 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-3.5 w-3.5 text-sky-400 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  X (Twitter)
                </a>
              </li>
              <li className="flex items-center gap-2">
                <svg className="h-3.5 w-3.5 text-red-400 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  YouTube
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Legal / Copyright Bar */}
        <div className="mt-14 pt-8 border-t border-white/[0.06] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © 2026 MMe-AI. All rights reserved. Founded by Manish Kumar.
          </div>
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms
            </Link>
            <Link href="/refund-policy" className="hover:text-white transition-colors">
              Refund Policy
            </Link>
            <Link href="/data-deletion-request" className="hover:text-white transition-colors">
              Data Deletion
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
