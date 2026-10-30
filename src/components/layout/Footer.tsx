import Link from "next/link";
import { Mail, Phone } from "lucide-react";
import { CONTACT_INFO, SITE_NAME } from "@/lib/constants";
import { getDictionary } from "@/lib/dictionary";
import { localePath, type Locale } from "@/lib/i18n";
import Wordmark from "./Wordmark";

export default function Footer({ lang }: { lang: Locale }) {
  const year = new Date().getFullYear();
  const { footer, header } = getDictionary(lang);

  return (
    <footer className="bg-night text-paper/70">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 py-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <Link href={localePath(lang, "/")} aria-label={header.home}>
              <Wordmark tone="dark" />
            </Link>
            <p className="mt-5 max-w-sm font-display text-xl italic leading-snug text-paper/80">
              {footer.tagline}
            </p>
            <ul className="mt-8 space-y-3 text-sm">
              <li className="flex items-center gap-3">
                <Mail size={16} strokeWidth={1.5} className="text-brass-light" />
                <a href={`mailto:${CONTACT_INFO.email}`} className="transition-colors hover:text-paper">
                  {CONTACT_INFO.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} strokeWidth={1.5} className="text-brass-light" />
                <a href={`tel:${CONTACT_INFO.phoneHref}`} className="transition-colors hover:text-paper">
                  {CONTACT_INFO.phone}
                </a>
              </li>
            </ul>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 md:col-span-7 md:pl-8">
            {footer.columns.map(({ heading, links }) => (
              <div key={heading}>
                <h3 className="eyebrow text-brass-light">{heading}</h3>
                <ul className="mt-5 space-y-3">
                  {links.map((link) => (
                    <li key={link.href}>
                      <Link href={localePath(lang, link.href)} className="text-sm transition-colors hover:text-paper">
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-paper/10 py-6 text-xs text-paper/45">
          © {year} {SITE_NAME}. {footer.rights}
        </div>
      </div>
    </footer>
  );
}
