// Dipisah dari data/site.ts karena file itu mengekspor variabel bernama `process` (langkah kerja),
// yang menimpa `process` bawaan Node. Nilai di bawah diisi dari next.config.mjs.
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000").replace(/\/+$/, "");
