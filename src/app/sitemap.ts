import type { MetadataRoute } from "next";
import { products } from "@/lib/data/products";
import { collections } from "@/lib/data/collections";
import { SITE_URL } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    { url: SITE_URL, priority: 1.0, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/shop`, priority: 0.9, changeFrequency: "daily" as const },
    { url: `${SITE_URL}/collections`, priority: 0.8, changeFrequency: "weekly" as const },
    { url: `${SITE_URL}/about`, priority: 0.7, changeFrequency: "monthly" as const },
    { url: `${SITE_URL}/contact`, priority: 0.6, changeFrequency: "monthly" as const },
  ];

  const productPages = products.map((p) => ({
    url: `${SITE_URL}/shop/${p.slug}`,
    priority: 0.8,
    changeFrequency: "weekly" as const,
  }));

  const collectionPages = collections.map((c) => ({
    url: `${SITE_URL}/collections/${c.slug}`,
    priority: 0.75,
    changeFrequency: "weekly" as const,
  }));

  return [
    ...staticPages,
    ...productPages,
    ...collectionPages,
  ].map((page) => ({
    url: page.url,
    lastModified: new Date(),
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}
