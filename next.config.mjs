// URL publik website. Dipakai untuk canonical, sitemap, robots, Open Graph, dan JSON-LD.
// Prioritas: NEXT_PUBLIC_SITE_URL (domain sendiri) -> domain produksi Vercel -> localhost (hanya dev).
const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ||
  (vercelUrl ? `https://${vercelUrl}` : "http://localhost:3000")
).replace(/\/+$/, "");

if (process.env.NODE_ENV === "production" && siteUrl.includes("localhost")) {
  console.warn(
    "\n[SEO] NEXT_PUBLIC_SITE_URL belum diisi. Canonical/sitemap akan memakai localhost.\n" +
      "      Isi dengan domain asli di environment variable hosting (mis. https://domainanda.com).\n"
  );
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  env: { NEXT_PUBLIC_SITE_URL: siteUrl },
};
export default nextConfig;
