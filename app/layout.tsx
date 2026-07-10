import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MMe-AI | Industry-Specific AI Business OS",
  description:
    "MMe-AI builds custom AI dashboards for growing businesses to manage leads, content, follow-ups, reports and automation from one place.",
  openGraph: {
    title: "MMe-AI | Industry-Specific AI Business OS",
    description:
      "Custom AI dashboards for leads, content, follow-ups, reports and automation.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
