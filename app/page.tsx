import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyChoose from "@/components/WhyChoose";
import Portfolio from "@/components/Portfolio";
import Process from "@/components/Process";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyChoose />
      <Portfolio limit={3} />
      <Process />
      <FAQ />
      <CTA />
    </>
  );
}
