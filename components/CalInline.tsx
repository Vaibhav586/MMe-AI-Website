"use client";

import Script from "next/script";

// Cal.com inline booking widget. NEXT_PUBLIC_CAL_LINK is the booking path, e.g. "mme-ai/workflow-audit"
// (a full https://cal.com/... URL also works). Only the fixed booking link is passed; no visitor data.
export function CalInline({ calLink }: { calLink: string }) {
  const path = calLink.replace(/^https?:\/\/(app\.)?cal\.com\//, "").replace(/^\/+/, "");
  return (
    <>
      <div id="cal-inline" className="min-h-[640px] w-full overflow-hidden rounded-2xl border border-white/10 bg-white" />
      <Script id="cal-embed" strategy="afterInteractive">
        {`(function (C, A, L) { let p = function (a, ar) { a.q.push(ar); }; let d = C.document; C.Cal = C.Cal || function () { let cal = C.Cal; let ar = arguments; if (!cal.loaded) { cal.ns = {}; cal.q = cal.q || []; d.head.appendChild(d.createElement("script")).src = A; cal.loaded = true; } if (ar[0] === L) { const api = function () { p(api, arguments); }; const namespace = ar[1]; api.q = api.q || []; if (typeof namespace === "string") { cal.ns[namespace] = cal.ns[namespace] || api; p(cal.ns[namespace], ar); p(cal, ["initNamespace", namespace]); } else p(cal, ar); return; } p(cal, ar); }; })(window, "https://app.cal.com/embed/embed.js", "init");
Cal("init", { origin: "https://cal.com" });
Cal("inline", { elementOrSelector: "#cal-inline", calLink: ${JSON.stringify(path)}, layout: "month_view" });
Cal("ui", { theme: "dark", hideEventTypeDetails: false });`}
      </Script>
    </>
  );
}
