import { pageMeta, breadcrumbSchema, webPageSchema, portfolioSchema } from "@/lib/seo";
import JsonLd from "@/components/JsonLd";
import { PageHeader } from "@/components/ui";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";

const PAGE_TITLE = "Portfolio Website: Contoh Concept Project";
const PAGE_DESC = "Lihat contoh concept project website buatan Fireflies: landing page coffee shop, company profile agensi kreatif, dan portfolio personal fotografer.";
export const metadata = pageMeta(PAGE_TITLE, PAGE_DESC, "/portfolio");

export default function PortfolioPage() {
  return (
    <>
      <JsonLd data={[
        webPageSchema("CollectionPage", PAGE_TITLE, PAGE_DESC, "/portfolio"),
        breadcrumbSchema([{ name: "Portfolio", path: "/portfolio" }]),
        portfolioSchema(),
      ]} />
      <PageHeader title="Portfolio" desc="Saya sedang membangun portfolio. Project di bawah adalah concept project buatan sendiri untuk menunjukkan pendekatan desain dan pengembangan, bukan pekerjaan untuk klien." />
      <Portfolio asPage />
      <CTA title="Ingin project Anda tampil di sini?" body="Mari diskusikan kebutuhan website Anda." />
    </>
  );
}
