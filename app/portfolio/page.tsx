import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/ui";
import Portfolio from "@/components/Portfolio";
import CTA from "@/components/CTA";

export const metadata = pageMeta("Portfolio", "Contoh concept project website: landing page, company profile, dan portfolio personal.", "/portfolio");

export default function PortfolioPage() {
  return (
    <>
      <PageHeader title="Portfolio" desc="Saya sedang membangun portfolio. Project di bawah adalah concept project buatan sendiri untuk menunjukkan pendekatan desain dan pengembangan, bukan pekerjaan untuk klien." />
      <Portfolio asPage />
      <CTA title="Ingin project Anda tampil di sini?" body="Mari diskusikan kebutuhan website Anda." />
    </>
  );
}
