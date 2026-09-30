import { Section, Heading } from "./ui";
import { why } from "@/data/site";

export default function WhyChoose() {
  return (
    <Section className="border-y border-ink/10 bg-ink/[.03] py-20 md:py-28">
      <Heading title="Website yang bukan hanya terlihat bagus" desc="Struktur yang jelas, responsive, performant, dan siap dikembangkan seiring bisnis Anda tumbuh." />
      <dl className="mt-14 grid gap-x-10 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
        {why.map((w) => (
          <div key={w.title} className="reveal border-t-2 border-ink pt-5">
            <dt className="font-display text-xl">{w.title}</dt>
            <dd className="mt-2 text-ink/70">{w.desc}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}
