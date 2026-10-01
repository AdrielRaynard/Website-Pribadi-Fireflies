import { Section, Heading, LinkButton } from "./ui";
import { faqs } from "@/data/site";
import JsonLd from "./JsonLd";
import { faqSchema } from "@/lib/seo";

export default function FAQ() {
  return (
    <Section id="faq">
      <JsonLd data={faqSchema()} />
      <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div>
          <Heading title="Pertanyaan yang sering diajukan" desc="Belum menemukan jawabannya? Tanyakan langsung, konsultasi awal gratis." />
          <div className="mt-8"><LinkButton href="/contact">Konsultasi Gratis</LinkButton></div>
        </div>
        <div className="divide-y divide-ink/10 border-y border-ink/10">
          {faqs.map((f) => (
            <details key={f.q} className="group">
              <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-lg [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden="true" className="text-2xl text-accent transition-transform duration-200 group-open:rotate-45">+</span>
              </summary>
              <p className="pb-5 pr-8 leading-relaxed text-ink/75">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </Section>
  );
}
