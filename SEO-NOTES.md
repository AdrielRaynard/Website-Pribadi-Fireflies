# Catatan SEO

## Wajib setelah deploy
1. Isi `NEXT_PUBLIC_SITE_URL` di environment variable hosting (mis. `https://domainanda.com`, tanpa `/` di akhir), lalu redeploy.
   Tanpa ini canonical, sitemap, dan Open Graph tidak menunjuk ke domain Anda.
2. Daftarkan website di Google Search Console (https://search.google.com/search-console).
   Verifikasi lewat DNS (disarankan) atau isi `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` (metode HTML tag).
3. Di Search Console: Sitemaps -> kirim `sitemap.xml`. Lalu URL Inspection -> "Request indexing" untuk `/`, `/services`, `/portfolio`, `/about`, `/contact`.
4. Cek hasil: https://search.google.com/test/rich-results dan https://validator.schema.org

## Yang perlu dirawat
- `data/site.ts` -> `lastUpdated`: ubah saat konten berubah signifikan (dipakai di sitemap).
- Judul <= 60 karakter, deskripsi <= 160 karakter (`site.seoTitle`, `site.description`, dan `pageMeta(...)` tiap halaman).
