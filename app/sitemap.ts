import type { MetadataRoute } from "next";
import { nav, site } from "@/data/site";

// Prioritas & frekuensi per halaman. lastModified memakai site.lastUpdated (tetap, tidak berubah tiap build).
const meta: Record<string, { priority: number; changeFrequency: "weekly" | "monthly" }> = {
  "/": { priority: 1, changeFrequency: "weekly" },
  "/services": { priority: 0.9, changeFrequency: "monthly" },
  "/portfolio": { priority: 0.8, changeFrequency: "monthly" },
  "/about": { priority: 0.7, changeFrequency: "monthly" },
  "/contact": { priority: 0.6, changeFrequency: "monthly" },
};

export default function sitemap(): MetadataRoute.Sitemap {
  return nav.map((n) => ({
    url: `${site.url}${n.href === "/" ? "" : n.href}`,
    lastModified: new Date(site.lastUpdated),
    ...(meta[n.href] ?? { priority: 0.5, changeFrequency: "monthly" as const }),
  }));
}
