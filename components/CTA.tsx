import { Section, LinkButton } from "./ui";
import { waLink } from "@/data/site";

type Props = { title?: string; body?: string; label?: string };
export default function CTA({
  title = "Punya ide website? Mari kita wujudkan.",
  body = "Ceritakan kebutuhan Anda. Estimasi disesuaikan dengan scope dan kompleksitas project.",
  label = "Konsultasi Gratis",
}: Props) {
  return (
    <Section className="pb-20 md:pb-28">
      <div className="rounded-3xl bg-ink px-6 py-14 text-white sm:px-12 md:py-20">
        <h2 className="max-w-2xl font-display text-3xl leading-tight tracking-tight sm:text-5xl">{title}</h2>
        <p className="mt-5 max-w-xl text-lg text-white/80">{body}</p>
        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <LinkButton href="/contact" variant="light">{label}</LinkButton>
          <LinkButton href={waLink} external variant="outline-light">Chat via WhatsApp</LinkButton>
        </div>
      </div>
    </Section>
  );
}
