import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { getProductBySlug, products } from "@/lib/data/products";
import ProductFigure from "@/components/products/ProductFigure";
import AddToInquiry from "@/components/products/AddToInquiry";
import ProductCard from "@/components/products/ProductCard";
import { ProductJsonLd } from "@/components/seo/JsonLd";
import SectionHeading from "@/components/ui/SectionHeading";

interface Props {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.summary,
    openGraph: { title: product.name, description: product.summary },
  };
}

export default async function ProductPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      <ProductJsonLd name={product.name} description={product.summary} slug={product.slug} />

      <div className="mx-auto max-w-7xl px-5 pt-8 sm:px-8">
        <Link
          href="/products"
          className="inline-flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-varnish"
        >
          <ArrowLeft size={15} strokeWidth={1.5} /> All products
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
              <p className="font-display text-2xl">Price on request</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-soft">
                Add this to your inquiry list and send it to us. We will reply with pricing, availability and
                distributor terms.
              </p>
              <AddToInquiry slug={product.slug} className="mt-6" />
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep/60">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <SectionHeading eyebrow="Also from Strad Plus" title="Continue exploring." />
          <div className="mt-12 grid max-w-md">
            {others.map((p) => (
              <ProductCard key={p.slug} product={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
