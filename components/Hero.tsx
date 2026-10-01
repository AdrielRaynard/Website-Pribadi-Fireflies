import { LinkButton } from "./ui";

function HeroVisual() {
  const row = (k: string, v: string) => (
    <div><span className="text-ink">  {k}</span>: <span className="text-accent">{v}</span>,</div>
  );
  return (
    <div aria-hidden="true" className="rise relative" style={{ animationDelay: ".25s" }}>
      <div className="absolute -inset-6 -z-10 bg-[radial-gradient(55%_55%_at_75%_25%,rgba(142,27,43,.13),transparent),radial-gradient(50%_50%_at_15%_85%,rgba(21,41,77,.12),transparent)]" />
      <div className="overflow-hidden rounded-2xl border border-ink/15 bg-white shadow-[0_30px_60px_-30px_rgba(21,41,77,.35)]">
        <div className="flex items-center gap-2 border-b border-ink/10 px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-accent/70" /><span className="h-2.5 w-2.5 rounded-full bg-ink/25" /><span className="h-2.5 w-2.5 rounded-full bg-ink/25" />
          <span className="ml-3 rounded-md bg-ink/5 px-3 py-1 font-mono text-xs text-ink/60">website.ts</span>
        </div>
        <pre className="overflow-x-auto p-5 font-mono text-[13px] leading-7 text-ink/80 sm:p-7 sm:text-sm">
          <div><span className="text-accent">const</span> website = {"{"}</div>
          {row("responsive", "true")}
          {row("markup", '"HTML semantik"')}
          {row("seo", '"metadata dasar"')}
          {row("aksesibilitas", '"keyboard + kontras"')}
          {row("dikembangkan", '"sesuai kebutuhan"')}
          <div>{"}"}</div>
        </pre>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="border-b border-ink/10">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-[1.15fr_.85fr]">
        <div>
          <p className="rise font-mono text-sm text-accent">Independent Web Developer</p>
          <h1 className="rise mt-5 font-display text-[2.6rem] leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl" style={{ animationDelay: ".08s" }}>
            Jasa pembuatan website agar bisnis Anda tampil lebih profesional.
          </h1>
          <p className="rise mt-6 max-w-xl text-lg leading-relaxed text-ink/75" style={{ animationDelay: ".16s" }}>
            Halo, saya adalah seorang mahasiswa Fakultas Ilmu Komputer Universitas Indonesia yang ingin membantu bisnis, UMKM, profesional, agency, dan organisasi memiliki website yang responsive, jelas strukturnya, dan bisa dikembangkan sesuai kebutuhan.
          </p>
          <div className="rise mt-9 flex flex-col gap-3 sm:flex-row" style={{ animationDelay: ".24s" }}>
            <LinkButton href="/contact">Konsultasi Gratis</LinkButton>
            <LinkButton href="/portfolio" variant="ghost">Lihat Portfolio</LinkButton>
          </div>
        </div>
        <HeroVisual />
      </div>
    </section>
  );
}
