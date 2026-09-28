import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MMe-AI | Industry-Specific AI Business OS",
  description:
    "MMe-AI is the intelligent operating layer to Manage, Monitor, and Execute — custom dashboards, autonomous multi-agent workflows, and real-time observability across your CRM, WhatsApp, and tools.",
  keywords: [
    "AI Business OS",
    "Workflow Automation",
    "Lead Management",
    "Custom Business Dashboard",
    "AI Agents",
    "Multi-tenant AI Platform",
    "MMe-AI",
  ],
  authors: [{ name: "Manish Kumar", url: "https://www.mme-ai.com" }],
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    title: "MMe-AI | Industry-Specific AI Business OS",
    description:
      "Manage, Monitor, and Execute your business workflows with autonomous AI across your CRM, WhatsApp, and tools.",
    url: "https://www.mme-ai.com",
    siteName: "MMe-AI",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 800,
        alt: "MMe-AI Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MMe-AI | Industry-Specific AI Business OS",
    description:
      "Manage, Monitor, and Execute your business workflows with autonomous AI across your CRM, WhatsApp, and tools.",
    images: ["/logo.png"],
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
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="icon" href="/logo.png" type="image/png" />
      </head>
      <body className="min-h-screen bg-[#070913] text-[#f8fafc] antialiased selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}
