import { Section, Heading } from "./ui";
import ServiceCard from "./ServiceCard";
import { services } from "@/data/site";

export default function Services() {
  return (
    <Section id="layanan">
      <Heading title="Layanan untuk berbagai kebutuhan online" desc="Pilih yang paling dekat dengan kebutuhan Anda. Jika belum yakin, kita bahas bersama di konsultasi awal." />
      <ul className="mt-12 divide-y divide-ink/10 border-y border-ink/10">
        {services.map((s) => <ServiceCard key={s.slug} service={s} />)}
      </ul>
    </Section>
  );
}
