import Image from "next/image";

// MMe-AI logo: the brand "mMe" mark (public/brand/mme-logo.png, cropped from "MMe logo 1.png")
// plus the "MMe-AI" wordmark on one baseline with "-AI" in the brand colour.
export const LOGO_SRC = "/brand/mme-logo.png";

export function Logo({ size = "md" }: { size?: "sm" | "md" }) {
  const px = size === "sm" ? 32 : 40;
  return (
    <span className="inline-flex items-center gap-2.5 whitespace-nowrap">
      <Image
        src={LOGO_SRC}
        alt=""
        width={px}
        height={px}
        priority
        className="shrink-0 rounded-[10px]"
        style={{ width: px, height: px }}
      />
      <span className={`${size === "sm" ? "text-lg" : "text-[22px]"} font-bold tracking-tight text-text font-display`}>
        MMe<span className="text-indigo-400">-AI</span>
      </span>
    </span>
  );
}
