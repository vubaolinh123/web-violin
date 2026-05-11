import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { collections, getCollectionBySlug } from "@/lib/data/collections";
import { getProductsByCollection } from "@/lib/data/products";
import ProductGrid from "@/components/shop/ProductGrid";
import GoldDivider from "@/components/ui/GoldDivider";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const col = getCollectionBySlug(slug);
  if (!col) return {};
  return {
    title: col.name,
    description: col.description,
    openGraph: {
      title: col.name,
      description: col.description,
      images: [{ url: col.image, width: 1200, height: 800, alt: col.name }],
    },
  };
}

export default async function CollectionPage({ params }: Props) {
  const { slug } = await params;
  const col = getCollectionBySlug(slug);
  if (!col) notFound();

  const colProducts = getProductsByCollection(slug);

  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero banner */}
      <div className="relative h-64 md:h-80 overflow-hidden">
        <Image
          src={col.image}
          alt={col.name}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/60 to-charcoal/20" />
        <div className="absolute inset-0 flex flex-col justify-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-10">
          <p className="font-mono text-xs text-gold/70 tracking-[0.25em] uppercase mb-2">
            Collection · {col.productCount} items
          </p>
          <h1 className="font-display text-4xl md:text-5xl text-parchment font-light">
            {col.name}
          </h1>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-2xl mb-10 space-y-4">
          <GoldDivider width="md" />
          <p className="font-body text-base text-parchment/60 leading-relaxed">
            {col.longDescription}
          </p>
          <p className="font-mono text-sm text-parchment/30">
            Price range: {col.priceRange}
          </p>
        </div>

        <ProductGrid products={colProducts} />
      </div>
    </div>
  );
}
