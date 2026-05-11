"use client";

import { m, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import { NAV_LINKS, SITE_NAME } from "@/lib/constants";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileNav({ isOpen, onClose }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <m.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-charcoal/80 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Drawer */}
          <m.div
            key="drawer"
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed inset-y-0 left-0 z-50 w-4/5 max-w-xs bg-charcoal-800 border-r border-charcoal-700 flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-5 border-b border-charcoal-700">
              <span className="font-display text-xl text-gold tracking-wide">
                {SITE_NAME}
              </span>
              <button
                onClick={onClose}
                aria-label="Close menu"
                className="p-2 text-parchment/60 hover:text-parchment transition-colors"
              >
                <X size={22} />
              </button>
            </div>

            {/* Nav links */}
            <nav className="flex-1 px-6 py-8 space-y-1">
              {NAV_LINKS.map((link, i) => (
                <m.div
                  key={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={onClose}
                    className="block py-3 px-2 font-display text-2xl text-parchment/80 hover:text-gold transition-colors border-b border-charcoal-700/50"
                  >
                    {link.label}
                  </Link>
                </m.div>
              ))}
            </nav>

            {/* Footer */}
            <div className="px-6 py-5 border-t border-charcoal-700">
              <p className="font-mono text-xs text-parchment/30 tracking-widest uppercase">
                Instruments of Exceptional Character
              </p>
            </div>
          </m.div>
        </>
      )}
    </AnimatePresence>
  );
}
