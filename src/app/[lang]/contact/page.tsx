import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ContactPaths from "@/components/contact/ContactPaths";
import { CONTACT_INFO } from "@/lib/constants";
import { getDictionary } from "@/lib/dictionary";
import { alternates, getLang, type LangParams, type Locale } from "@/lib/i18n";

const copy = {
  en: {
    meta: {
      title: "Contact",
      description:
        "Contact Strad Plus: evaluation samples for distributors and industry partners, and Strad Plus for musicians and instrument owners.",
    },
    hero: {
      eyebrow: "Contact",
      title: "How can we help?",
      intro: "Choose the option that fits you best, so your request reaches the right people.",
    },
  },
  vi: {
    meta: {
      title: "Liên hệ",
      description:
        "Liên hệ Strad Plus: mẫu trải nghiệm cho nhà phân phối và đối tác trong ngành, và Strad Plus cho nghệ sĩ cùng chủ nhạc cụ.",
    },
    hero: {
      eyebrow: "Liên hệ",
      title: "Chúng tôi có thể giúp gì cho bạn?",
      intro: "Hãy chọn hình thức phù hợp nhất để yêu cầu của bạn đến đúng người phụ trách.",
    },
  },
} satisfies Record<Locale, unknown>;

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await getLang(params);
  return { ...copy[lang].meta, alternates: alternates(lang, "/contact") };
}

export default async function ContactPage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = copy[lang];

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro} figure={{ n: 2, m: 3 }} />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-20">
        <ContactPaths lang={lang} />

        <div className="mt-16 flex flex-col gap-6 border-t border-line pt-10 sm:flex-row sm:items-center sm:gap-12">
          <h2 className="eyebrow text-varnish">{getDictionary(lang).reachDirectly}</h2>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-3 font-display text-2xl transition-colors hover:text-varnish"
          >
            <Mail size={18} strokeWidth={1.5} className="text-varnish" />
            {CONTACT_INFO.email}
          </a>
          <a
            href={`tel:${CONTACT_INFO.phoneHref}`}
            className="flex items-center gap-3 font-display text-2xl transition-colors hover:text-varnish"
          >
            <Phone size={18} strokeWidth={1.5} className="text-varnish" />
            {CONTACT_INFO.phone}
          </a>
        </div>
      </section>
    </>
  );
}
