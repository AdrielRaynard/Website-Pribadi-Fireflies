import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/data/site";

export default function ProjectCard({ project: p }: { project: Project }) {
  return (
    <article className="card group overflow-hidden hover:-translate-y-1 hover:border-ink/30">
      <div aria-hidden={p.image ? undefined : "true"} className="aspect-[4/3] p-5" style={{ background: `linear-gradient(135deg, ${p.colors[0]}, ${p.colors[1]})` }}>
        <div className="flex h-full flex-col overflow-hidden rounded-lg bg-white shadow-lg transition duration-500 group-hover:scale-[1.03]">
          <div className="flex shrink-0 gap-1.5 border-b border-black/5 px-3 py-2"><i className="h-1.5 w-1.5 rounded-full bg-black/20" /><i className="h-1.5 w-1.5 rounded-full bg-black/20" /><i className="h-1.5 w-1.5 rounded-full bg-black/20" /></div>
          {p.image ? (
            <div className="relative min-h-0 flex-1">
              <Image src={p.image} alt={`${p.name} website preview`} fill sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw" className="object-cover object-top" />
            </div>
          ) : (
            <div className="space-y-2.5 p-4">
              <div className="h-3 w-2/3 rounded" style={{ background: p.colors[0] }} />
              <div className="h-2 w-full rounded bg-black/10" /><div className="h-2 w-4/5 rounded bg-black/10" />
              <div className="mt-4 h-7 w-24 rounded-full" style={{ background: p.colors[1] }} />
            </div>
          )}
        </div>
      </div>
      <div className="p-6">
        <span className="inline-block rounded-full border border-accent/30 bg-accent/5 px-2.5 py-0.5 text-xs font-medium text-accent">Concept Project</span>
        <h3 className="mt-3 font-display text-2xl">{p.name}</h3>
        <p className="text-sm text-ink/60">{p.category}</p>
        <p className="mt-3 text-ink/75">{p.description}</p>
        <ul className="mt-4 flex flex-wrap gap-2" aria-label="Tech stack">
          {p.stack.map((t) => <li key={t} className="rounded-md bg-ink/5 px-2 py-1 font-mono text-xs">{t}</li>)}
        </ul>
        {p.url ? (
          <Link href={p.url} className="btn btn-ghost mt-6 !min-h-11 w-full">View Project<span className="sr-only">: {p.name}</span></Link>
        ) : (
          <span className="mt-6 flex min-h-11 items-center justify-center rounded-full border border-dashed border-ink/25 text-sm text-ink/60">View Project: demo segera hadir</span>
        )}
      </div>
    </article>
  );
}
