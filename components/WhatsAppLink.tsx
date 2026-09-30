"use client";

import { WHATSAPP_URL } from "@/lib/site";
import { track } from "@/lib/track";

// Every WhatsApp link on the site: same fixed URL, plus a whatsapp_click event with where it was clicked.
export function WhatsAppLink({
  location,
  className,
  children,
  ...rest
}: { location: string; className?: string; children: React.ReactNode } & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a
      {...rest}
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => track("whatsapp_click", { location })}
      className={className}
    >
      {children}
    </a>
  );
}
