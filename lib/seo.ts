import type { Metadata } from "next";
import { site } from "@/data/site";

export function pageMeta(title: string, description: string, path: string): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: { type: "website", locale: "id_ID", siteName: site.name, title, description, url: path },
    twitter: { card: "summary_large_image", title, description },
  };
}
