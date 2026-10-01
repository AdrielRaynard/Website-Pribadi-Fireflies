import type { Metadata } from "next";
import { faqs, projects, services, site, techGroups } from "@/data/site";

/** Ubah path relatif (mis. "/about") menjadi URL absolut. */
export const absoluteUrl = (path = "/") => `${site.url}${path === "/" ? "" : path}`;

const ids = {
  org: `${site.url}/#organization`,
  website: `${site.url}/#website`,
};

// Gambar OG/Twitter bawaan (app/opengraph-image.png, 1200x630).
// Ditulis eksplisit agar semua halaman anak ikut memilikinya (metadata per halaman
// menimpa metadata parent, sehingga tanpa ini og:image hilang di halaman selain beranda).
const ogImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: "Logo Fireflies, kupu-kupu geometris berwarna biru tua dan merah marun",
  type: "image/png",
};

/** Metadata per halaman: title, description, canonical, Open Graph, dan Twitter Card. */
export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "id_ID",
      siteName: site.name,
      title: `${title} | ${site.name}`,
      description,
      url: path,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${site.name}`,
      description,
      images: [{ url: "/twitter-image.png", width: 1200, height: 630, alt: ogImage.alt }],
    },
  };
}

/* ------------------------------ Structured data ------------------------------ */

const indonesia = { "@type": "Country", name: "Indonesia" };

/** Organization + WebSite (dipasang di seluruh halaman lewat layout). */
export function siteSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ids.org,
        name: site.name,
        alternateName: [`${site.name} Web Developer`, `${site.name} ${site.title}`],
        url: site.url,
        description: site.description,
        logo: { "@type": "ImageObject", url: absoluteUrl("/icon.png"), width: 512, height: 512 },
        image: absoluteUrl("/opengraph-image.png"),
        email: site.email,
        telephone: `+${site.whatsapp}`,
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          email: site.email,
          telephone: `+${site.whatsapp}`,
          availableLanguage: ["id", "en"],
        },
        areaServed: indonesia,
        knowsAbout: ["Pembuatan website", ...services.map((s) => s.title), ...techGroups.find((g) => g.title === "Frontend")!.items],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Layanan pembuatan website",
          itemListElement: services.map((s) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: s.title, description: s.description },
          })),
        },
      },
      {
        "@type": "WebSite",
        "@id": ids.website,
        url: site.url,
        name: site.name,
        alternateName: `${site.name} Web Developer`,
        description: site.description,
        inLanguage: "id-ID",
        publisher: { "@id": ids.org },
      },
    ],
  };
}

/** BreadcrumbList untuk halaman selain beranda. */
export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [{ name: "Beranda", path: "/" }, ...items].map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
}

/** FAQPage — dibangun dari data yang sama dengan FAQ yang tampil di halaman. */
export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

/** Daftar layanan (halaman /services). */
export function servicesSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Layanan pembuatan website",
    itemListElement: services.map((s, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "Service",
        name: s.title,
        description: s.description,
        serviceType: "Pembuatan website",
        provider: { "@id": ids.org },
        areaServed: indonesia,
      },
    })),
  };
}

/** Daftar concept project (halaman /portfolio). */
export function portfolioSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Contoh concept project website",
    itemListElement: projects.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      item: {
        "@type": "CreativeWork",
        name: p.name,
        description: p.description,
        genre: p.category,
        keywords: p.stack.join(", "),
        creator: { "@id": ids.org },
        ...(p.url ? { url: p.url } : {}),
        ...(p.image ? { image: absoluteUrl(p.image) } : {}),
      },
    })),
  };
}

/** Tipe halaman spesifik (WebPage dengan subtipe) yang terhubung ke WebSite. */
export function webPageSchema(type: "AboutPage" | "ContactPage" | "CollectionPage" | "WebPage", name: string, description: string, path: string) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    "@id": `${absoluteUrl(path)}#webpage`,
    url: absoluteUrl(path),
    name,
    description,
    inLanguage: "id-ID",
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.org },
  };
}
