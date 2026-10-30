import type { MetadataRoute } from "next";
import { PRODUCT_SLUGS } from "@/lib/data/products";
import { SITE_URL } from "@/lib/constants";
import { LOCALES, localePath } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = [
    { path: "/", priority: 1 },
    { path: "/technology", priority: 0.9 },
    { path: "/products", priority: 0.9 },
    { path: "/founder", priority: 0.7 },
    { path: "/media", priority: 0.7 },
    { path: "/artists-projects", priority: 0.6 },
    { path: "/contact", priority: 0.6 },
    { path: "/request-evaluation", priority: 0.7 },
    { path: "/experience", priority: 0.7 },
    ...PRODUCT_SLUGS.map((slug) => ({ path: `/products/${slug}`, priority: 0.8 })),
  ];

  const url = (lang: (typeof LOCALES)[number], path: string) =>
    `${SITE_URL}${path === "/" && lang === "en" ? "" : localePath(lang, path)}`;

  // One entry per language, each listing every language version as an alternate.
  return pages.flatMap(({ path, priority }) =>
    LOCALES.map((lang) => ({
      url: url(lang, path),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority,
      alternates: { languages: Object.fromEntries(LOCALES.map((l) => [l, url(l, path)])) },
    }))
  );
}
