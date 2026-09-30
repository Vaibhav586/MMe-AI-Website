// Cookie consent choice, kept in localStorage. Storage can be unavailable (private mode, blocked
// site data), so every access is wrapped; the in-memory fallback keeps the choice for this page view.

export type Consent = "all" | "essential";

const KEY = "mme-consent";
const CONSENT_EVENT = "mme-consent-change";
let memoryChoice: Consent | null = null;

export function readConsent(): Consent | null {
  try {
    const value = window.localStorage.getItem(KEY);
    if (value === "all" || value === "essential") return value;
  } catch {
    // fall back to the in-memory choice
  }
  return memoryChoice;
}

export function writeConsent(value: Consent): void {
  memoryChoice = value;
  try {
    window.localStorage.setItem(KEY, value);
  } catch {
    // in-memory choice still applies
  }
  const granted = value === "all" ? "granted" : "denied";
  window.gtag?.("consent", "update", {
    analytics_storage: granted,
    ad_storage: granted,
    ad_user_data: granted,
    ad_personalization: granted,
  });
  window.dispatchEvent(new Event(CONSENT_EVENT));
}

// For useSyncExternalStore.
export function subscribeConsent(onChange: () => void): () => void {
  window.addEventListener(CONSENT_EVENT, onChange);
  window.addEventListener("storage", onChange);
  return () => {
    window.removeEventListener(CONSENT_EVENT, onChange);
    window.removeEventListener("storage", onChange);
  };
}
