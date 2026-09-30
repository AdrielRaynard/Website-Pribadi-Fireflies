import { pageMeta } from "@/lib/seo";
import { PageHeader, Section } from "@/components/ui";
import ContactForm from "@/components/ContactForm";
import { site, waLink } from "@/data/site";

export const metadata = pageMeta("Kontak", "Konsultasi gratis untuk project website Anda lewat WhatsApp, email, atau formulir.", "/contact");

export default function ContactPage() {
  return (
    <>
      <PageHeader title="Punya ide website? Mari kita wujudkan." desc="Ceritakan kebutuhan Anda. Konsultasi awal gratis, dan estimasi disesuaikan dengan scope dan kompleksitas project." />
      <Section>
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
          <div>
            <h2 className="font-display text-3xl">Pilih cara yang paling nyaman</h2>
            <ul className="mt-8 divide-y divide-ink/10 border-y border-ink/10">
              <li className="py-5">
                <p className="text-sm text-ink/60">WhatsApp</p>
                <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">Konsultasi Gratis via WhatsApp</a>
              </li>
              <li className="py-5">
                <p className="text-sm text-ink/60">Email</p>
                <a href={`mailto:${site.email}`} className="mt-1 inline-block py-1 font-display text-xl text-accent underline-offset-4 hover:underline">{site.email}</a>
              </li>
            </ul>
          </div>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
