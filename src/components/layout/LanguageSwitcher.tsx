"use client";

import { usePathname } from "next/navigation";
import { LOCALES, LOCALE_COOKIE, LOCALE_LABELS, localePath, splitLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils/cn";

function rememberLocale(lang: Locale) {
  document.cookie = `${LOCALE_COOKIE}=${lang}; path=/; max-age=31536000; samesite=lax`;
}

/** EN / VI toggle that keeps the visitor on the same page and remembers the choice. */
export default function LanguageSwitcher({
  lang,
  label,
  className,
}: {
  lang: Locale;
  label: string;
  className?: string;
}) {
  const { path } = splitLocale(usePathname() ?? "/");

  return (
    <nav aria-label={label} className={cn("flex items-center text-[0.75rem] font-medium tracking-[0.14em]", className)}>
      {LOCALES.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 && <span className="mx-1.5 text-line" aria-hidden="true">/</span>}
          {l === lang ? (
            <span aria-current="true" className="text-varnish">
              {LOCALE_LABELS[l].short}
            </span>
          ) : (
            // A plain link, not next/link: switching language swaps the root layout anyway, and a full
            // request carries the new cookie instead of reusing a cached, redirected route.
            <a
              href={localePath(l, path)}
              hrefLang={l}
              lang={l}
              onClick={() => rememberLocale(l)}
              title={LOCALE_LABELS[l].name}
              className="text-ink-mute transition-colors hover:text-ink"
            >
              {LOCALE_LABELS[l].short}
            </a>
          )}
        </span>
      ))}
    </nav>
  );
}
