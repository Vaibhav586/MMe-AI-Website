"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { getSession, signOut } from "next-auth/react";
import { LayoutDashboard, LogOut } from "lucide-react";

export interface SessionUser {
  name?: string | null;
  email?: string | null;
  image?: string | null;
}

// Reads the session in the browser so marketing pages stay static. null = signed out or still loading.
export function useSessionUser(): SessionUser | null {
  const [user, setUser] = useState<SessionUser | null>(null);
  useEffect(() => {
    let active = true;
    getSession()
      .then((session) => active && setUser(session?.user ?? null))
      .catch(() => {});
    return () => {
      active = false;
    };
  }, []);
  return user;
}

export function Avatar({ user, size = 32 }: { user: SessionUser; size?: number }) {
  const initial = (user.name || user.email || "?").trim()[0]?.toUpperCase();
  return user.image ? (
    // eslint-disable-next-line @next/next/no-img-element -- Google avatar; tiny and already optimised by Google
    <img src={user.image} alt="" width={size} height={size} referrerPolicy="no-referrer" className="rounded-full object-cover" style={{ width: size, height: size }} />
  ) : (
    <span className="flex items-center justify-center rounded-full bg-indigo-500/25 text-sm font-bold text-indigo-100" style={{ width: size, height: size }}>
      {initial}
    </span>
  );
}

// Signed in: avatar button with a small menu (name, email, My portal, Sign out). Signed out: nothing.
export function UserMenu({ user }: { user: SessionUser }) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!ref.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-label="Your account"
        aria-expanded={open}
        aria-controls="account-menu"
        className="flex rounded-full ring-2 ring-white/10 transition hover:ring-indigo-400/60"
      >
        <Avatar user={user} />
      </button>
      {open && (
        <div id="account-menu" className="absolute right-0 top-full z-50 mt-3 w-60 rounded-xl border border-white/10 bg-surface p-2 shadow-2xl">
          <div className="border-b border-white/[0.06] px-3 py-2.5">
            {user.name && <div className="truncate text-sm font-semibold text-white">{user.name}</div>}
            {user.email && <div className="truncate text-xs text-muted">{user.email}</div>}
          </div>
          <Link
            href="/portal"
            onClick={() => setOpen(false)}
            className="mt-1 flex items-center gap-2.5 rounded-lg px-3 py-2 text-sm text-slate-200 hover:bg-white/[0.06] hover:text-white"
          >
            <LayoutDashboard className="h-4 w-4" aria-hidden="true" /> My portal
          </Link>
          <button
            type="button"
            onClick={() => signOut({ redirectTo: "/" })}
            className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-sm text-slate-200 hover:bg-white/[0.06] hover:text-white"
          >
            <LogOut className="h-4 w-4" aria-hidden="true" /> Sign out
          </button>
        </div>
      )}
    </div>
  );
}
