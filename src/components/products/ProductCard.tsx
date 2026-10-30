import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/data/products";
import { getDictionary } from "@/lib/dictionary";
import { localePath, type Locale } from "@/lib/i18n";
import ProductFigure from "./ProductFigure";

export default function ProductCard({ product, lang }: { product: Product; lang: Locale }) {
  const href = localePath(lang, `/products/${product.slug}`);
  return (
    <article className="group grid gap-6 sm:grid-cols-[2fr_3fr] sm:items-center sm:gap-8">
      <Link
        href={href}
        aria-label={product.name}
        className="block overflow-hidden"
      >
        <div className="transition-transform duration-700 group-hover:scale-[1.02]">
          <ProductFigure product={product} sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 100vw" />
        </div>
      </Link>
      <div className="flex flex-col">
        <p className="eyebrow text-varnish">{product.kind}</p>
        <h3 className="mt-3 font-display text-3xl font-medium leading-tight text-ink">
          <Link href={href} className="transition-colors hover:text-varnish">
            {product.name}
          </Link>
        </h3>
        <p className="mt-3 leading-relaxed text-ink-soft">{product.summary}</p>
        <Link
          href={href}
          className="mt-5 inline-flex items-center gap-2 self-start text-sm font-medium text-varnish transition-all group-hover:gap-3"
        >
          {getDictionary(lang).details} <ArrowRight size={15} strokeWidth={1.5} />
        </Link>
      </div>
    </article>
  );
}
