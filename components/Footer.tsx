import Link from "next/link";
import Logo from "./Logo";
import { nav, site, waLink } from "@/data/site";

export default function Footer() {
  return (
    <footer className="border-t border-ink/10">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <Logo className="h-9 w-auto" />
            <span className="font-display text-xl font-semibold">{site.name}</span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-ink/70">
            {site.title}. Membantu membuat website yang jelas strukturnya, responsive, dan dapat dikembangkan sesuai kebutuhan.
          </p>
        </div>
        <nav aria-label="Footer">
          <p className="font-display text-lg">Halaman</p>
          <ul className="mt-3 space-y-1">
            {nav.map((n) => (
              <li key={n.href}><Link href={n.href} className="inline-block py-1 text-sm text-ink/75 hover:text-accent">{n.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div>
          <p className="font-display text-lg">Kontak</p>
          <ul className="mt-3 space-y-1 text-sm">
            <li><a href={waLink} target="_blank" rel="noopener noreferrer" className="inline-block py-1 text-ink/75 hover:text-accent">WhatsApp</a></li>
            <li><a href={`mailto:${site.email}`} className="inline-block py-1 text-ink/75 hover:text-accent">{site.email}</a></li>
          </ul>
        </div>
      </div>
      <p className="border-t border-ink/10 px-5 py-5 text-center text-xs text-ink/60">© {new Date().getFullYear()} {site.name}. Semua hak dilindungi.</p>
    </footer>
  );
}
