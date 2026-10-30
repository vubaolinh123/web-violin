import { NextResponse, type NextRequest } from "next/server";
import { DEFAULT_LOCALE, LOCALE_COOKIE, hasLocale, localePath, splitLocale } from "@/lib/i18n";

/**
 * Language routing. English is served at the unprefixed URLs by rewriting them to /en internally;
 * Vietnamese pages live under /vi. A visitor's saved choice, or else a Vietnamese browser language,
 * sends unprefixed requests to the Vietnamese version.
 */
export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // /en/... is internal only: send it to the public unprefixed URL.
  if (pathname === `/${DEFAULT_LOCALE}` || pathname.startsWith(`/${DEFAULT_LOCALE}/`)) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.slice(DEFAULT_LOCALE.length + 1) || "/";
    return NextResponse.redirect(url);
  }

  const { lang, path } = splitLocale(pathname);
  if (lang !== DEFAULT_LOCALE) return NextResponse.next();

  const preferred = preferredLocale(request);
  if (preferred !== DEFAULT_LOCALE) {
    const url = request.nextUrl.clone();
    url.pathname = localePath(preferred, path);
    return NextResponse.redirect(url);
  }

  const url = request.nextUrl.clone();
  url.pathname = `/${DEFAULT_LOCALE}${pathname === "/" ? "" : pathname}`;
  return NextResponse.rewrite(url);
}

function preferredLocale(request: NextRequest) {
  const saved = request.cookies.get(LOCALE_COOKIE)?.value;
  if (saved && hasLocale(saved)) return saved;
  const primary = request.headers.get("accept-language")?.split(",")[0]?.trim().slice(0, 2).toLowerCase();
  return primary === "vi" ? "vi" : DEFAULT_LOCALE;
}

export const config = {
  // Pages only: skip API routes, Next internals, generated art, metadata images and any file with an extension.
  matcher: ["/((?!api/|_next/|art/|.*opengraph-image|.*\\..*).*)"],
};
