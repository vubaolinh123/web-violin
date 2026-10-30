import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { PRODUCT_SLUGS, getProductBySlug, getProducts } from "@/lib/data/products";
import ProductFigure from "@/components/products/ProductFigure";
import ButtonLink from "@/components/ui/ButtonLink";
import ProductCard from "@/components/products/ProductCard";
import { ProductJsonLd } from "@/components/seo/JsonLd";
import SectionHeading from "@/components/ui/SectionHeading";
import { getDictionary } from "@/lib/dictionary";
import { LOCALES, alternates, getLang, localePath, type Locale } from "@/lib/i18n";

interface Props {
  params: Promise<{ lang: string; slug: string }>;
}

const copy = {
  en: {
    back: "All products",
    price: "Price on request",
    priceNote:
      "Distributors and industry partners can request an evaluation sample. Musicians and instrument owners can contact us about availability and ordering.",
    more: { eyebrow: "Also from Strad Plus", title: "Continue exploring." },
  },
  vi: {
    back: "Tất cả sản phẩm",
    price: "Giá theo yêu cầu",
    priceNote:
      "Nhà phân phối và đối tác trong ngành có thể yêu cầu mẫu trải nghiệm. Nghệ sĩ và chủ nhạc cụ có thể liên hệ để biết tình trạng sản phẩm và cách đặt hàng.",
    more: { eyebrow: "Sản phẩm khác của Strad Plus", title: "Tiếp tục khám phá." },
  },
} satisfies Record<Locale, unknown>;

export function generateStaticParams() {
  return LOCALES.flatMap((lang) => PRODUCT_SLUGS.map((slug) => ({ lang, slug })));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const lang = await getLang(params);
  const product = getProductBySlug(lang, slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.summary,
    alternates: alternates(lang, `/products/${slug}`),
    openGraph: { title: product.name, description: product.summary },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const lang = await getLang(params);
  const product = getProductBySlug(lang, slug);
  if (!product) notFound();

  const t = copy[lang];
  const others = getProducts(lang).filter((p) => p.slug !== product.slug);

  return (
    <>
      <ProductJsonLd name={product.name} description={product.summary} slug={product.slug} lang={lang} />

      <div className="mx-auto max-w-7xl px-5 pt-8 sm:px-8">
        <Link
          href={localePath(lang, "/products")}
          className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-varnish"
        >
          <ArrowLeft size={15} strokeWidth={1.5} /> {t.back}
        </Link>
      </div>

      <section className="mx-auto max-w-7xl px-5 py-12 sm:px-8 md:py-16">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-5">
            <ProductFigure product={product} priority sizes="(min-width: 768px) 40vw, 100vw" />
          </div>

          <div className="md:col-span-7">
            <p className="eyebrow text-varnish">{product.kind}</p>
            <h1 className="mt-4 font-display text-4xl font-medium leading-[1.1] md:text-5xl">
              {product.name}
            </h1>

            <div className="prose-strad mt-8 text-lg leading-relaxed text-ink-soft">
              {product.description.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <h2 className="eyebrow mt-12 text-ink">{product.benefitsTitle}</h2>
            <ul className="mt-5 divide-y divide-line border-y border-line">
              {product.benefits.map((b) => (
                <li key={b} className="flex gap-4 py-4 text-ink-soft">
                  <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-varnish" aria-hidden="true" />
                  {b}
                </li>
              ))}
            </ul>

            {product.scope && (
              <>
                <h2 className="eyebrow mt-12 text-ink">{product.scopeTitle}</h2>
                <dl className="mt-5 divide-y divide-line border-y border-line">
                  {product.scope.map((s) => (
                    <div key={s.group} className="grid gap-1 py-4 sm:grid-cols-[10rem_1fr]">
                      <dt className="font-medium text-ink">{s.group}</dt>
                      <dd className="text-ink-soft">{s.items}</dd>
                    </div>
                  ))}
                </dl>
              </>
            )}

            <div className="mt-12 border border-line bg-paper-deep/60 p-6 md:p-8">
              <p className="font-display text-2xl">{t.price}</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">{t.priceNote}</p>
              <div className="mt-6 flex flex-wrap gap-3">
                {getDictionary(lang).contactPaths.map((path, i) => (
                  <ButtonLink key={path.id} href={localePath(lang, path.href)} variant={i === 0 ? "solid" : "outline"}>
                    {path.cta}
                  </ButtonLink>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep/60">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionHeading eyebrow={t.more.eyebrow} title={t.more.title} />
          <div className="mt-12 grid max-w-md">
            {others.map((p) => (
              <ProductCard key={p.slug} product={p} lang={lang} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
