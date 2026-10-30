import { SITE_URL } from "@/lib/constants";

export const LOCALES = ["en", "vi"] as const;
export type Locale = (typeof LOCALES)[number];

/** English lives at the unprefixed URLs (/technology); Vietnamese under /vi (/vi/technology). */
export const DEFAULT_LOCALE: Locale = "en";

/** Remembers the visitor's choice from the language switcher. */
export const LOCALE_COOKIE = "NEXT_LOCALE";

export const LOCALE_LABELS: Record<Locale, { short: string; name: string; og: string }> = {
  en: { short: "EN", name: "English", og: "en_US" },
  vi: { short: "VI", name: "Tiếng Việt", og: "vi_VN" },
};

export function hasLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

/** Public URL path of a page in the given language. `path` is the English path, e.g. "/products". */
export function localePath(lang: Locale, path: string) {
  if (lang === DEFAULT_LOCALE) return path;
  return path === "/" ? `/${lang}` : `/${lang}${path}`;
}

/**
 * Splits a pathname into its language and the language-neutral path. Accepts both public URLs and
 * the internal /en/... paths that usePathname() reports for rewritten English pages.
 */
export function splitLocale(pathname: string): { lang: Locale; path: string } {
  for (const lang of LOCALES) {
    if (pathname === `/${lang}`) return { lang, path: "/" };
    if (pathname.startsWith(`/${lang}/`)) return { lang, path: pathname.slice(lang.length + 1) };
  }
  return { lang: DEFAULT_LOCALE, path: pathname };
}

/** Canonical URL plus hreflang alternates for a page, for the metadata `alternates` field. */
export function alternates(lang: Locale, path: string) {
  const url = (l: Locale) => `${SITE_URL}${localePath(l, path) === "/" ? "" : localePath(l, path)}`;
  return {
    canonical: url(lang),
    languages: {
      ...Object.fromEntries(LOCALES.map((l) => [l, url(l)])),
      "x-default": url(DEFAULT_LOCALE),
    },
  };
}

/** Params of every page under app/[lang]. */
export interface LangParams {
  params: Promise<{ lang: string }>;
}

/** Reads the language from route params; the proxy only ever routes supported languages here. */
export async function getLang(params: Promise<{ lang: string }>): Promise<Locale> {
  const { lang } = await params;
  return hasLocale(lang) ? lang : DEFAULT_LOCALE;
}
