import type { MetadataRoute } from "next";
import { products } from "@/lib/data/products";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "", priority: 1 },
    { path: "/technology", priority: 0.9 },
    { path: "/products", priority: 0.9 },
    { path: "/founder", priority: 0.7 },
    { path: "/media", priority: 0.7 },
    { path: "/artists-projects", priority: 0.6 },
    { path: "/contact", priority: 0.6 },
    ...products.map((p) => ({ path: `/products/${p.slug}`, priority: 0.8 })),
  ];

  return pages.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority,
  }));
}
