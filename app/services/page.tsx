import { pageMeta, breadcrumbSchema, webPageSchema, servicesSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { PageHeader } from "@/components/ui";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

const PAGE_TITLE = "Jasa Pembuatan Website & Landing Page";
const PAGE_DESC = "Jasa pembuatan website: landing page, company profile, portfolio, blog, event/agency, dan website custom. Responsive, rapi, dan sesuai kebutuhan Anda.";
export const metadata = pageMeta(PAGE_TITLE, PAGE_DESC, "/services");

export default function ServicesPage() {
  return (
    <>
      <JsonLd data={[
        webPageSchema("CollectionPage", PAGE_TITLE, PAGE_DESC, "/services"),
        breadcrumbSchema([{ name: "Layanan", path: "/services" }]),
        servicesSchema(),
      ]} />
      <PageHeader title="Layanan pembuatan website" desc="Dari landing page sederhana sampai kebutuhan custom. Semua dibangun dengan struktur yang rapi dan siap dikembangkan." />
      <Services />
      <WhyChoose />
      <Process />
      <FAQ />
      <CTA title="Konsultasikan Project Anda" body="Tidak ada angka harga baku. Setiap project berbeda, jadi estimasi disesuaikan dengan scope dan kompleksitas project." label="Request Project Estimate" />
    </>
  );
}
