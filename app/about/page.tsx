import { pageMeta } from "@/lib/seo";
import { PageHeader, Section, Heading } from "@/components/ui";
import TechStack from "@/components/TechStack";
import CTA from "@/components/CTA";
import { approach } from "@/data/site";

export const metadata = pageMeta("Tentang", "Independent web developer yang berfokus pada website modern, responsive, dan sesuai kebutuhan bisnis.", "/about");

export default function AboutPage() {
  return (
    <>
      <PageHeader title="Saya membangun website yang rapi, jelas, dan sesuai kebutuhan." desc="Saya sedang membangun layanan web development yang berfokus pada pembuatan website modern, responsive, dan sesuai kebutuhan bisnis." />
      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl">Filosofi</h2>
            <p className="mt-4 text-lg leading-relaxed text-ink/75">Website yang baik membantu pengunjung menemukan yang mereka cari dengan cepat, dan membantu pemiliknya mencapai tujuan. Tampilan penting, tetapi struktur, kecepatan, dan kemudahan perawatan sama pentingnya.</p>
          </div>
          <div>
            <h2 className="font-display text-3xl">Cara saya bekerja</h2>
            <ul className="mt-4 space-y-3 text-lg leading-relaxed text-ink/75">
              <li>Komunikasi terbuka dan scope yang disepakati sejak awal.</li>
              <li>Kode modular, dokumentasi seperlunya, mudah diteruskan.</li>
              <li>Perhatian pada responsive, SEO dasar, dan aksesibilitas.</li>
            </ul>
          </div>
        </div>
      </Section>
      <Section className="border-y border-ink/10 bg-ink/[.03] py-20 md:py-28">
        <Heading title="My Approach" />
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
          {approach.map((a, i) => (
            <li key={a.title} className="border-t-2 border-ink pt-5">
              <p className="font-mono text-sm text-accent">0{i + 1}</p>
              <h3 className="mt-2 font-display text-xl">{a.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{a.desc}</p>
            </li>
          ))}
        </ol>
      </Section>
      <TechStack />
      <CTA />
    </>
  );
}
