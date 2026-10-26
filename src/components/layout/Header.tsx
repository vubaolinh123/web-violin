"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ClipboardList, Menu } from "lucide-react";
import { useInquiry } from "@/lib/hooks/useInquiry";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";
import Wordmark from "./Wordmark";
import MobileNav from "./MobileNav";

export default function Header() {
  const { count } = useInquiry();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-30 border-b border-line bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 md:h-20">
          <Link href="/" aria-label="Strad Plus — home" className="shrink-0">
            <Wordmark />
          </Link>

          <nav aria-label="Main" className="hidden items-center gap-7 lg:flex xl:gap-9">
            {NAV_LINKS.map((link) => {
              const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group relative py-1 text-[0.8rem] font-medium uppercase tracking-[0.14em] transition-colors",
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

          <div className="flex items-center gap-1">
            <Link
              href="/inquiry"
              aria-label={`Inquiry list, ${count} ${count === 1 ? "item" : "items"}`}
              className="relative flex items-center gap-2 p-2 text-ink-soft transition-colors hover:text-ink"
            >
              <ClipboardList size={20} strokeWidth={1.5} />
              <span className="hidden text-[0.8rem] font-medium uppercase tracking-[0.14em] sm:inline">
                Inquiry
              </span>
              {count > 0 && (
                <span className="flex h-[18px] min-w-[18px] items-center justify-center rounded-full bg-varnish px-1 text-[10px] font-semibold text-paper">
                  {count > 99 ? "99+" : count}
                </span>
              )}
            </Link>

            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="p-2 text-ink-soft transition-colors hover:text-ink lg:hidden"
            >
              <Menu size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
