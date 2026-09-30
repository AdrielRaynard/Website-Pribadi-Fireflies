import { Section, Heading, LinkButton } from "./ui";
import { process } from "@/data/site";

export default function Process() {
  return (
    <Section className="border-y border-ink/10 bg-ink/[.03] py-20 md:py-28">
      <Heading title="Alur kerja yang jelas, dari diskusi sampai website tayang" />
      <ol className="mt-14 grid gap-10 md:grid-cols-5 md:gap-6">
        {process.map((s, i) => (
          <li key={s.title} className="reveal relative border-l border-ink/20 pl-6 md:border-l-0 md:border-t md:pl-0 md:pt-6">
            <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-accent md:-top-[5px] md:left-0" aria-hidden="true" />
            <p className="font-mono text-sm text-accent">0{i + 1}</p>
            <h3 className="mt-2 font-display text-xl">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-ink/70">{s.desc}</p>
          </li>
        ))}
      </ol>
      <div className="mt-12"><LinkButton href="/contact">Konsultasi Gratis</LinkButton></div>
    </Section>
  );
}
