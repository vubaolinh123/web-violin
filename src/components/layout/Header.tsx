"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
import type { Dictionary } from "@/lib/dictionary";
import { localePath, splitLocale, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils/cn";
import Wordmark from "./Wordmark";
import MobileNav from "./MobileNav";
import LanguageSwitcher from "./LanguageSwitcher";

export interface HeaderText {
  nav: Dictionary["nav"];
  header: Dictionary["header"];
}

export default function Header({ lang, dict }: { lang: Locale; dict: HeaderText }) {
  const { path } = splitLocale(usePathname() ?? "/");
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 md:h-20">
          <Link href={localePath(lang, "/")} aria-label={dict.header.home} className="shrink-0">
            <Wordmark />
          </Link>

          {/* Full menu from xl: the Vietnamese labels are too long to sit beside the wordmark below that. */}
          <nav aria-label="Main" className="hidden items-center gap-7 xl:flex 2xl:gap-9">
            {dict.nav.map((link) => {
              const active = path === link.href || path.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={localePath(lang, link.href)}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative whitespace-nowrap py-1 text-[0.8rem] font-medium uppercase tracking-[0.14em] transition-colors",
                    active ? "text-varnish" : "text-ink-soft hover:text-ink"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-0.5 left-0 h-px bg-varnish transition-all duration-300",
                      active ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-4">
            <LanguageSwitcher lang={lang} label={dict.header.language} />

            <Link
              href={localePath(lang, "/contact")}
              aria-current={path === "/contact" ? "page" : undefined}
              className="hidden whitespace-nowrap border border-varnish px-5 py-2.5 text-[0.75rem] font-medium uppercase tracking-[0.14em] text-varnish transition-colors hover:bg-varnish hover:text-paper sm:inline-flex"
            >
              {dict.header.contact}
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label={dict.header.openMenu}
              className="-ml-2 p-2 text-ink-soft transition-colors hover:text-ink xl:hidden"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav lang={lang} dict={dict} isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
