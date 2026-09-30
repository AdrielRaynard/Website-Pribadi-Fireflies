import { Section, Heading, LinkButton } from "./ui";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/site";

export default function Portfolio({ limit, asPage = false }: { limit?: number; asPage?: boolean }) {
  return (
    <Section id="portfolio">
      {!asPage && <Heading title="Contoh konsep project" desc="Portfolio ini masih tahap awal. Semua project di bawah adalah concept project buatan sendiri, bukan pekerjaan untuk klien." />}
      <div className="mt-2 grid gap-6 md:grid-cols-2 lg:grid-cols-3 [&:not(:first-child)]:mt-12">
        {projects.slice(0, limit).map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>
      <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <LinkButton href="/contact">Konsultasi Gratis</LinkButton>
        {!asPage && <LinkButton href="/portfolio" variant="ghost">Lihat semua portfolio</LinkButton>}
      </div>
    </Section>
  );
}
