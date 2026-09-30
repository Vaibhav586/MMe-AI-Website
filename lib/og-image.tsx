import { ImageResponse } from "next/og";
import { SITE } from "@/lib/site";
import fs from "node:fs";
import path from "node:path";
import { LOGO_SRC } from "@/components/Logo";

export const OG_ALT = "MMe-AI: Your AI operations team, set up for you in 21 days.";
export const OG_SIZE = { width: 1200, height: 630 };

// Inter Tight 700 as TTF (next/og can't read woff2). Fetched at build time; falls back to the default font.
async function loadDisplayFont(): Promise<ArrayBuffer | null> {
  try {
    const css = await (await fetch("https://fonts.googleapis.com/css2?family=Inter+Tight:wght@700")).text();
    const url = css.match(/src: url\((.+?)\) format\('(opentype|truetype)'\)/)?.[1];
    return url ? await (await fetch(url)).arrayBuffer() : null;
  } catch {
    return null;
  }
}

// Shared by app/opengraph-image.tsx and app/twitter-image.tsx.
export async function renderOgImage() {
  const font = await loadDisplayFont();
  const logo = `data:image/png;base64,${fs.readFileSync(path.join(process.cwd(), "public", LOGO_SRC)).toString("base64")}`;
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "72px 80px",
          background: "#070913",
          backgroundImage: "radial-gradient(circle at 85% 15%, rgba(99,102,241,0.28), transparent 55%)",
          color: "#f8fafc",
          fontFamily: font ? "Inter Tight" : undefined,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- next/og renders plain <img> */}
          <img src={logo} width={64} height={64} alt="" style={{ borderRadius: 14 }} />
          <div style={{ display: "flex", fontSize: 46, fontWeight: 700, letterSpacing: -1 }}>
            <span>MMe</span>
            <span style={{ color: "#818cf8" }}>-AI</span>
          </div>
        </div>
        <div style={{ display: "flex", fontSize: 70, fontWeight: 700, lineHeight: 1.06, letterSpacing: -2.5, maxWidth: 1000 }}>
          Your AI operations team, set up for you in 21 days.
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 30, color: "#94a3b8" }}>
          <span>{SITE.tagline}</span>
          <span>www.mme-ai.com</span>
        </div>
      </div>
    ),
    {
      ...OG_SIZE,
      fonts: font ? [{ name: "Inter Tight", data: font, weight: 700, style: "normal" }] : undefined,
    },
  );
}
