import type { MetadataRoute } from "next";
import { snowmobiles } from "@/data/products";
import { site } from "@/data/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ["", "/snowbike", "/catalog", "/delivery", "/about"];
  return [
    ...staticPages.map((route) => ({ url: `https://${site.domain}${route}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: route === "" ? 1 : 0.7 })),
    ...snowmobiles.map((item) => ({ url: `https://${site.domain}/catalog/${item.slug}`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 })),
  ];
}
