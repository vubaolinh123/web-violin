"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { ShoppingCart, ArrowRight } from "lucide-react";
import { getFeaturedProducts } from "@/lib/data/products";
import { formatPrice } from "@/lib/utils/formatPrice";
import { useCart } from "@/lib/hooks/useCart";
import SectionTitle from "@/components/ui/SectionTitle";
import Badge from "@/components/ui/Badge";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function FeaturedProducts() {
  const featured = getFeaturedProducts().slice(0, 3);
  const { addItem } = useCart();

  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-14">
          <SectionTitle
            overline="Curated Selection"
            title="Our Finest Instruments"
            subtitle="Each piece hand-selected by our master luthiers for exceptional tone and craftsmanship."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featured.map((product, i) => (
            <AnimatedSection key={product.id} delay={i * 0.1}>
              <m.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="group relative bg-charcoal-800 border border-charcoal-700 hover:border-gold/30 rounded overflow-hidden transition-[transform,box-shadow,border-color] duration-300 hover:shadow-2xl hover:shadow-gold/10"
              >
                {/* Image */}
                <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-700">
                  <Image
                    src={product.images[0]}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  {/* Quick-add overlay */}
                  <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <button
                      onClick={() => addItem(product)}
                      disabled={!product.inStock}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold hover:bg-gold-light text-charcoal text-sm font-medium rounded transition-colors disabled:opacity-50"
                    >
                      <ShoppingCart size={16} />
                      {product.inStock ? "Add to Cart" : "Out of Stock"}
                    </button>
                  </div>
                  {product.badge && (
                    <div className="absolute top-3 left-3">
                      <Badge variant="gold">{product.badge}</Badge>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-5 space-y-2">
                  <p className="font-mono text-xs text-parchment/30 tracking-widest uppercase">
                    {product.brand}
                  </p>
                  <Link href={`/shop/${product.slug}`}>
                    <h3 className="font-display text-xl text-parchment group-hover:text-gold transition-colors leading-snug">
                      {product.name}
                    </h3>
                  </Link>
                  <p className="font-body text-sm text-parchment/50 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between pt-2">
                    <div className="flex items-baseline gap-2">
                      <span className="font-mono text-lg text-gold">
                        {formatPrice(product.price)}
                      </span>
                      {product.originalPrice && (
                        <span className="font-mono text-sm text-parchment/30 line-through">
                          {formatPrice(product.originalPrice)}
                        </span>
                      )}
                    </div>
                    <Link
                      href={`/shop/${product.slug}`}
                      className="font-body text-xs text-parchment/40 hover:text-gold transition-colors flex items-center gap-1"
                    >
                      Details <ArrowRight size={12} />
                    </Link>
                  </div>
                </div>
              </m.div>
            </AnimatedSection>
          ))}
        </div>

        {/* View all link */}
        <AnimatedSection delay={0.3} className="mt-12 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 font-body text-sm text-parchment/50 hover:text-gold border-b border-parchment/20 hover:border-gold pb-1 transition-all duration-300"
          >
            View all instruments
            <ArrowRight size={14} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
