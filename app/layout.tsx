import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { SITE } from "@/lib/site";
import { Analytics } from "@/components/Analytics";
import { CookieNotice } from "@/components/CookieNotice";

// Body: Inter 400/500. Headings: Inter Tight 600/700. Exposed to CSS via @theme in globals.css.
// Self-hosted Latin-only variable files (SIL Open Font License; see app/fonts/OFL-Inter.txt and OFL-InterTight.txt). Loading them via
// next/font/google also pulled ~170 KB of latin-ext files just for the ₹ sign, which now uses the system font.
const inter = localFont({ src: "./fonts/inter-latin.woff2", weight: "400 500", variable: "--font-inter", display: "swap" });
const interTight = localFont({ src: "./fonts/inter-tight-latin.woff2", weight: "600 700", variable: "--font-inter-tight", display: "swap" });

const TITLE = "MMe-AI | AI Sales & Follow-up Automation for Indian Businesses (WhatsApp + CRM)";
const DESCRIPTION =
  "MMe-AI connects your CRM, WhatsApp and sheets, then automates lead qualification, follow-ups and reporting. Set up for your business in 21 days.";

// Canonical URLs are set per page (alternates.canonical), not here, so no page inherits the homepage's.
// The Open Graph / Twitter image comes from app/opengraph-image.tsx and app/twitter-image.tsx.
export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: TITLE,
  description: DESCRIPTION,
  authors: [{ name: SITE.founder, url: SITE.url }],
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE.url,
    siteName: SITE.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#070913",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} ${interTight.variable}`}>
      <body className="min-h-screen bg-bg text-text font-sans antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
        <CookieNotice />
        <Analytics />
      </body>
    </html>
  );
}
