import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/ui";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export const metadata = pageMeta("Layanan Pembuatan Website", "Landing page, company profile, portfolio, blog, event/agency, dan website custom yang disesuaikan dengan kebutuhan Anda.", "/services");

export default function ServicesPage() {
  return (
    <>
      <PageHeader title="Layanan pembuatan website" desc="Dari landing page sederhana sampai kebutuhan custom. Semua dibangun dengan struktur yang rapi dan siap dikembangkan." />
      <Services />
      <WhyChoose />
      <Process />
      <FAQ />
      <CTA title="Konsultasikan Project Anda" body="Tidak ada angka harga baku. Setiap project berbeda, jadi estimasi disesuaikan dengan scope dan kompleksitas project." label="Request Project Estimate" />
    </>
  );
}
