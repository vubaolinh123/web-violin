"use client";

import { useEffect } from "react";
import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { localePath, type Locale } from "@/lib/i18n";
import Wordmark from "./Wordmark";
import LanguageSwitcher from "./LanguageSwitcher";
import type { HeaderText } from "./Header";

interface MobileNavProps {
  lang: Locale;
  dict: HeaderText;
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ lang, dict, isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <m.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-night/60"
            onClick={onClose}
          />

          <m.div
            key="drawer"
            role="dialog"
            aria-modal="true"
            aria-label={dict.header.menu}
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 32, stiffness: 320 }}
            className="fixed inset-y-0 right-0 z-50 flex w-4/5 max-w-sm flex-col bg-paper"
          >
            <div className="flex items-center justify-between border-b border-line px-6 py-5">
              <Wordmark />
              <button
                type="button"
                onClick={onClose}
                aria-label={dict.header.closeMenu}
                className="p-2 text-ink-soft transition-colors hover:text-ink"
              >
                <X size={22} strokeWidth={1.5} />
              </button>
            </div>

            <nav aria-label="Mobile" className="flex-1 overflow-y-auto px-6 py-6">
              {dict.nav.map((link, i) => (
                <m.div
                  key={link.href}
                  initial={{ opacity: 0, x: 16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.06 + i * 0.05 }}
                >
                  <Link
                    href={localePath(lang, link.href)}
                    onClick={onClose}
                    className="block border-b border-line py-4 font-display text-2xl text-ink transition-colors hover:text-varnish"
                  >
                    {link.label}
                  </Link>
                </m.div>
              ))}
              <Link
                href={localePath(lang, "/contact")}
                onClick={onClose}
                className="mt-8 inline-flex bg-varnish px-7 py-3.5 text-sm font-medium tracking-wide text-paper"
              >
                {dict.header.contactLong}
              </Link>
              <LanguageSwitcher lang={lang} label={dict.header.language} className="mt-8 text-sm" />
            </nav>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
