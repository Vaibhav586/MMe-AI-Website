"use client";

import { useSyncExternalStore } from "react";
import Script from "next/script";
import { readConsent, subscribeConsent } from "@/lib/consent";

const GA_ID = process.env.NEXT_PUBLIC_GA_ID ?? "";
const CLARITY_ID = process.env.NEXT_PUBLIC_CLARITY_ID ?? "";
const META_PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID ?? "";
const LINKEDIN_PARTNER_ID = process.env.NEXT_PUBLIC_LINKEDIN_PARTNER_ID ?? "";

export const ANALYTICS_ENABLED =
  process.env.NODE_ENV === "production" && Boolean(GA_ID || CLARITY_ID || META_PIXEL_ID || LINKEDIN_PARTNER_ID);

// IDs are only ever inserted into scripts after this check, so env values can't break out of the JS string.
const safeId = (id: string) => (/^[A-Za-z0-9_-]+$/.test(id) ? id : "");

// Production-only analytics. GA4 always loads, in consent mode with storage denied until the visitor
// accepts. Clarity, the Meta Pixel and the LinkedIn Insight Tag load only after "Accept".
export function Analytics() {
  // null on the server and until the visitor chooses.
  const consent = useSyncExternalStore(subscribeConsent, readConsent, () => null);

  if (!ANALYTICS_ENABLED) return null;
  const ga = safeId(GA_ID);
  const clarity = safeId(CLARITY_ID);
  const meta = safeId(META_PIXEL_ID);
  const linkedin = safeId(LINKEDIN_PARTNER_ID);
  const accepted = consent === "all";

  return (
    <>
      {ga && (
        <>
          <Script id="ga4-init" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = gtag;
var stored = null; try { stored = localStorage.getItem("mme-consent"); } catch (e) {}
var granted = stored === "all" ? "granted" : "denied";
gtag("consent", "default", { analytics_storage: granted, ad_storage: granted, ad_user_data: granted, ad_personalization: granted });
gtag("js", new Date());
gtag("config", "${ga}");`}
          </Script>
          <Script id="ga4-lib" src={`https://www.googletagmanager.com/gtag/js?id=${ga}`} strategy="afterInteractive" />
        </>
      )}

      {accepted && clarity && (
        <Script id="clarity" strategy="afterInteractive">
          {`(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","${clarity}");`}
        </Script>
      )}

      {accepted && meta && (
        <Script id="meta-pixel" strategy="afterInteractive">
          {`!function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,document,'script','https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '${meta}');
fbq('track', 'PageView');`}
        </Script>
      )}

      {accepted && linkedin && (
        <Script id="linkedin-insight" strategy="afterInteractive">
          {`window._linkedin_partner_id = "${linkedin}";
window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
window._linkedin_data_partner_ids.push(window._linkedin_partner_id);
(function(l){if(!l){window.lintrk=function(a,b){window.lintrk.q.push([a,b])};window.lintrk.q=[]}var s=document.getElementsByTagName("script")[0];var b=document.createElement("script");b.type="text/javascript";b.async=true;b.src="https://snap.licdn.com/li.lms-analytics/insight.min.js";s.parentNode.insertBefore(b,s);})(window.lintrk);`}
        </Script>
      )}
    </>
  );
}
