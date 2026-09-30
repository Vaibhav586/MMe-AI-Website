import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { FOUNDER } from "@/lib/site";

// Founder photo if public/team/manish.jpg exists (checked at build time), otherwise initials.
export function FounderCard({ quote }: { quote?: string }) {
  const hasPhoto = fs.existsSync(path.join(process.cwd(), "public", FOUNDER.photo));
  const initials = FOUNDER.name.split(" ").map((n) => n[0]).join("");
  return (
    <div className="flex flex-col items-center gap-5 rounded-2xl border border-white/[0.08] bg-surface p-6 text-center sm:flex-row sm:text-left">
      {hasPhoto ? (
        <Image src={FOUNDER.photo} alt={FOUNDER.name} width={96} height={96} className="h-24 w-24 shrink-0 rounded-full object-cover" />
      ) : (
        <span aria-hidden="true" className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-500/15 text-2xl font-bold text-indigo-200">
          {initials}
        </span>
      )}
      <div>
        {quote && <p className="text-base font-medium text-white">{quote}</p>}
        <p className={`${quote ? "mt-2 text-sm" : "text-lg font-bold"} text-slate-300`}>
          {FOUNDER.name}, {FOUNDER.role}
        </p>
        {FOUNDER.linkedin && (
          <a href={FOUNDER.linkedin} target="_blank" rel="noopener noreferrer" className="mt-2 inline-block text-sm font-semibold text-indigo-300 underline hover:text-white">
            Connect on LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}
