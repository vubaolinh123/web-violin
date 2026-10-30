"use client";

import { usePathname } from "next/navigation";
import ButtonLink from "@/components/ui/ButtonLink";
import { getDictionary } from "@/lib/dictionary";
import { localePath, splitLocale } from "@/lib/i18n";

/** 404 message in the language of the requested URL. */
export default function NotFoundContent() {
  const { lang } = splitLocale(usePathname() ?? "/");
  const t = getDictionary(lang).notFound;

  return (
    <>
      <h1 className="mt-4 font-display text-4xl font-medium">{t.title}</h1>
      <p className="mt-4 leading-relaxed text-ink-soft">{t.text}</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <ButtonLink href={localePath(lang, "/")}>{t.home}</ButtonLink>
        <ButtonLink href={localePath(lang, "/products")} variant="outline">
          {t.products}
        </ButtonLink>
      </div>
    </>
  );
}
