import { Section, Heading } from "./ui";
import { techGroups } from "@/data/site";

export default function TechStack() {
  return (
    <Section>
      <Heading title="Technology I Work With" desc="Teknologi dipilih berdasarkan kebutuhan project, bukan sebaliknya. Daftar ini menunjukkan apa yang biasa saya gunakan." />
      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-5">
        {techGroups.map((g) => (
          <div key={g.title}>
            <h3 className="border-b-2 border-ink pb-3 font-display text-xl">{g.title}</h3>
            <ul className="mt-2 divide-y divide-ink/10 text-sm">
              {g.items.map((i) => <li key={i} className="py-2.5 text-ink/80">{i}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
