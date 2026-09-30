import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Inline Tailwind CSS into the HTML instead of a render-blocking <link>. Most visitors to a
  // marketing site are first-time, so this speeds up first paint (see Lighthouse render-blocking).
  // Google profile photos shown in the client portal.
  images: {
    remotePatterns: [{ protocol: "https", hostname: "lh3.googleusercontent.com" }],
  },
  experimental: {
    inlineCss: true,
  },
  turbopack: {
    root: process.cwd(),
  },
};

export default nextConfig;
