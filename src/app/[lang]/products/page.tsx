import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ProductCard from "@/components/products/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactPaths from "@/components/contact/ContactPaths";
import { getProducts } from "@/lib/data/products";
import { alternates, getLang, type LangParams, type Locale } from "@/lib/i18n";

const copy = {
  en: {
    meta: {
      title: "Products",
      description:
        "The Strad Plus bridge and soundpost set, and the Strad Plus method applied directly to wooden instruments.",
    },
    hero: {
      eyebrow: "Products",
      title: "Strad Plus, from Technology to Product.",
      intro:
        "The full Strad Plus treatment applied directly to the instrument, or our bridge and soundpost set derived from the same acoustic technology.",
    },
    contact: {
      eyebrow: "Get in touch",
      title: "Bring Strad Plus to your instrument, or your market.",
      intro: "Pricing and availability are given on request.",
    },
  },
  vi: {
    meta: {
      title: "Sản phẩm",
      description:
        "Bộ ngựa đàn và hồn đàn Strad Plus, cùng phương pháp Strad Plus áp dụng trực tiếp lên các nhạc cụ bằng gỗ.",
    },
    hero: {
      eyebrow: "Sản phẩm",
      title: "Strad Plus, từ công nghệ đến sản phẩm.",
      intro:
        "Quy trình Strad Plus trọn vẹn áp dụng trực tiếp lên cây đàn, hoặc bộ ngựa đàn và hồn đàn được phát triển từ cùng công nghệ âm học.",
    },
    contact: {
      eyebrow: "Liên hệ",
      title: "Mang Strad Plus đến cây đàn của bạn, hoặc thị trường của bạn.",
      intro: "Giá và tình trạng sản phẩm được cung cấp theo yêu cầu.",
    },
  },
} satisfies Record<Locale, unknown>;

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await getLang(params);
  return { ...copy[lang].meta, alternates: alternates(lang, "/products") };
}

export default async function ProductsPage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = copy[lang];

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro} figure={{ n: 4, m: 7 }} />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-14">
          {getProducts(lang).map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <ProductCard product={p} lang={lang} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep/60">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <SectionHeading eyebrow={t.contact.eyebrow} title={t.contact.title} intro={t.contact.intro} />
          <div className="mt-12">
            <ContactPaths lang={lang} />
          </div>
        </div>
      </section>
    </>
  );
}
