// Analytics events. Sends to GA4 (gtag) and the Meta Pixel (fbq) when they are loaded; otherwise a no-op.

type Params = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

export function track(event: string, params: Params = {}): void {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", event, params);
    window.fbq?.("trackCustom", event, params);
  } catch {
    // Never let analytics break the page.
  }
}

// Standard Meta "Lead" conversion, fired alongside demo_submit.
export function trackMetaLead(params: Params = {}): void {
  try {
    window.fbq?.("track", "Lead", params);
  } catch {
    // ignore
  }
}
