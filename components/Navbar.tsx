"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import { nav, site } from "@/data/site";

export default function Navbar() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return (
    <header className="sticky top-0 z-40 border-b border-ink/10 bg-paper/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" onClick={close} className="flex items-center gap-3">
          <Logo priority className="h-8 w-auto" />
          <span className="font-display text-lg font-semibold">{site.name}</span>
        </Link>
        <nav aria-label="Utama" className="hidden items-center gap-1 md:flex">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined}
              className={`rounded-full px-3 py-2 text-sm transition-colors hover:text-accent ${path === n.href ? "font-semibold text-accent" : "text-ink/75"}`}>
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-primary ml-3 !min-h-10 !px-5">Konsultasi Gratis</Link>
        </nav>
        <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-nav"
          aria-label={open ? "Tutup menu" : "Buka menu"} className="grid h-11 w-11 place-items-center rounded-full border border-ink/20 md:hidden">
          <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" aria-hidden="true">
            <path d={open ? "M6 6l12 12M18 6L6 18" : "M4 8h16M4 16h16"} />
          </svg>
        </button>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Menu mobile" className="border-t border-ink/10 bg-paper px-5 pb-6 pt-2 md:hidden">
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} onClick={close} aria-current={path === n.href ? "page" : undefined}
                  className={`flex min-h-14 items-center border-b border-ink/10 font-display text-xl ${path === n.href ? "text-accent" : ""}`}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Link href="/contact" onClick={close} className="btn btn-primary mt-5 w-full">Konsultasi Gratis</Link>
        </nav>
      )}
    </header>
  );
}
