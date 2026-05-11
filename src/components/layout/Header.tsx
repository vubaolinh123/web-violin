"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingCart, Menu, Search } from "lucide-react";
import { useScrollY } from "@/lib/hooks/useScrollY";
import { useCart } from "@/lib/hooks/useCart";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils/cn";
import MobileNav from "./MobileNav";

export default function Header() {
  const scrollY = useScrollY();
  const { count } = useCart();
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);

  const isHome = pathname === "/";
  const isTransparent = isHome && scrollY < 80;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-30 transition-all duration-500",
          isTransparent
            ? "bg-transparent"
            : "bg-charcoal/95 backdrop-blur-md border-b border-charcoal-700/60 shadow-lg shadow-charcoal/20"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link
              href="/"
              className="font-display text-xl md:text-2xl tracking-wide text-gold hover:text-gold-light transition-colors shrink-0"
            >
              {SITE_NAME}
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-body text-sm tracking-wide transition-colors relative group",
                    pathname === link.href
                      ? "text-gold"
                      : "text-parchment/70 hover:text-parchment"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute -bottom-1 left-0 h-px bg-gold transition-all duration-300",
                      pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                    )}
                  />
                </Link>
              ))}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-1 md:gap-2">
              <Link
                href="/search"
                aria-label="Search"
                className="p-2 text-parchment/60 hover:text-parchment transition-colors"
              >
                <Search size={20} />
              </Link>

              <Link
                href="/cart"
                aria-label={`Cart (${count} items)`}
                className="relative p-2 text-parchment/60 hover:text-parchment transition-colors"
              >
                <ShoppingCart size={20} />
                {count > 0 && (
                  <span className="absolute -top-0.5 -right-0.5 min-w-[18px] h-[18px] flex items-center justify-center bg-gold text-charcoal text-[10px] font-mono font-bold rounded-full px-1">
                    {count > 99 ? "99+" : count}
                  </span>
                )}
              </Link>

              {/* Mobile hamburger */}
              <button
                onClick={() => setMobileOpen(true)}
                aria-label="Open menu"
                className="md:hidden p-2 text-parchment/60 hover:text-parchment transition-colors"
              >
                <Menu size={22} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Spacer for non-home pages */}
      {!isHome && <div className="h-16 md:h-20" />}

      <MobileNav isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
