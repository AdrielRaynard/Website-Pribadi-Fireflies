import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { site } from "@/data/site";
import JsonLd from "@/components/JsonLd";
import { siteSchema } from "@/lib/seo";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: site.seoTitle, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  // og:image & twitter:image beranda diambil otomatis dari app/opengraph-image.png dan app/twitter-image.png.
  openGraph: { type: "website", locale: "id_ID", siteName: site.name, title: site.seoTitle, description: site.description, url: "/" },
  twitter: { card: "summary_large_image", title: site.seoTitle, description: site.description },
  // Verifikasi Google Search Console (opsional). Isi NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION.
  verification: { google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || undefined },
};
export const viewport: Viewport = { themeColor: "#FFFFFF", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <JsonLd data={siteSchema()} />
        <a href="#main" className="sr-only rounded-full bg-ink px-4 py-2 text-white focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50">Lewati ke konten</a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
