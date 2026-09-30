import Link from "next/link";
import type { ReactNode } from "react";

export function Section({ id, className = "py-20 md:py-28", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={className}>
      <div className="mx-auto max-w-6xl px-5 sm:px-8">{children}</div>
    </section>
  );
}

export function Heading({ title, desc, as: Tag = "h2" }: { title: string; desc?: string; as?: "h1" | "h2" }) {
  const size = Tag === "h1" ? "text-4xl leading-[1.08] sm:text-5xl lg:text-6xl" : "text-3xl leading-tight sm:text-4xl";
  return (
    <div className="max-w-3xl">
      <Tag className={`font-display tracking-tight ${size}`}>{title}</Tag>
      {desc && <p className="mt-5 max-w-2xl text-lg leading-relaxed text-ink/75">{desc}</p>}
    </div>
  );
}

export function PageHeader({ title, desc }: { title: string; desc?: string }) {
  return (
    <Section className="border-b border-ink/10 pb-16 pt-16 md:pb-20 md:pt-24">
      <div className="rise"><Heading as="h1" title={title} desc={desc} /></div>
    </Section>
  );
}

type Variant = "primary" | "ghost" | "light" | "outline-light";
export function LinkButton({ href, variant = "primary", external, children, className = "" }: { href: string; variant?: Variant; external?: boolean; children: ReactNode; className?: string }) {
  const cls = `btn btn-${variant} ${className}`;
  return external ? (
    <a href={href} className={cls} target="_blank" rel="noopener noreferrer">{children}</a>
  ) : (
    <Link href={href} className={cls}>{children}</Link>
  );
}

const paths: Record<string, string> = {
  landing: "M4 5h16v14H4zM4 9h16M8 13h5",
  company: "M4 20V8l8-4 8 4v12M9 20v-6h6v6",
  portfolio: "M3 7h18v13H3zM8 7V4h8v3M3 13h18",
  blog: "M5 4h14v16H5zM8 8h8M8 12h8M8 16h5",
  event: "M4 6h16v14H4zM4 10h16M8 3v4M16 3v4",
  custom: "M8 8l-4 4 4 4M16 8l4 4-4 4M13 6l-2 12",
};
export function Icon({ name }: { name: string }) {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={paths[name]} />
    </svg>
  );
}
