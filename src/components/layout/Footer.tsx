"use client";

import Link from "next/link";
import { Mail, ExternalLink, Music, Radio, Tv, MessageCircle } from "lucide-react";
import { SITE_NAME, SITE_TAGLINE, FOOTER_LINKS, CONTACT_INFO } from "@/lib/constants";
import GoldDivider from "@/components/ui/GoldDivider";

const socialLinks = [
  { label: "Instagram", href: "https://instagram.com/arcoviolins", Icon: Music },
  { label: "Facebook", href: "https://facebook.com/arcoviolins", Icon: Radio },
  { label: "YouTube", href: "https://youtube.com/@arcoviolins", Icon: Tv },
  { label: "Twitter", href: "https://twitter.com/arcoviolins", Icon: MessageCircle },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal-800 border-t border-charcoal-700/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main footer grid */}
        <div className="py-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="sm:col-span-2 lg:col-span-1 space-y-5">
            <div>
              <Link href="/" className="font-display text-2xl text-gold hover:text-gold-light transition-colors">
                {SITE_NAME}
              </Link>
              <p className="mt-1 font-mono text-xs text-parchment/30 tracking-widest uppercase">
                {SITE_TAGLINE}
              </p>
            </div>
            <GoldDivider width="sm" />
            <p className="font-body text-sm text-parchment/50 leading-relaxed">
              Handcrafted violins and premium accessories for musicians and collectors worldwide.
            </p>
            {/* Socials */}
            <div className="flex items-center gap-3 pt-1">
              {socialLinks.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="p-2 text-parchment/40 hover:text-gold transition-colors border border-charcoal-700 hover:border-gold/40 rounded"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(FOOTER_LINKS).map(([heading, links]) => (
            <div key={heading} className="space-y-4">
              <h3 className="font-mono text-xs tracking-[0.2em] uppercase text-gold/80">
                {heading}
              </h3>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-body text-sm text-parchment/50 hover:text-parchment transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter strip */}
        <div className="py-8 border-t border-charcoal-700/60">
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 justify-between">
            <div>
              <h3 className="font-display text-xl text-parchment">
                Stay in tune with new arrivals
              </h3>
              <p className="font-body text-sm text-parchment/50 mt-1">
                No spam — only new instruments and luthier stories.
              </p>
            </div>
            <form
              className="flex w-full md:w-auto gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <label htmlFor="footer-email" className="sr-only">Email address</label>
              <input
                id="footer-email"
                type="email"
                placeholder="your@email.com"
                className="flex-1 md:w-56 px-4 py-2.5 bg-charcoal-700 border border-charcoal-600 hover:border-gold/40 focus:border-gold/60 focus:outline-none text-parchment text-sm rounded placeholder:text-parchment/30 transition-colors"
              />
              <button
                type="submit"
                className="px-5 py-2.5 bg-gold hover:bg-gold-light text-charcoal text-sm font-medium rounded transition-colors shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-5 border-t border-charcoal-700/40 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-body text-xs text-parchment/30">
            © {year} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-parchment/30 text-xs">
            <Mail size={12} />
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-parchment/60 transition-colors">
              {CONTACT_INFO.email}
            </a>
            <ExternalLink size={10} />
          </div>
        </div>
      </div>
    </footer>
  );
}
