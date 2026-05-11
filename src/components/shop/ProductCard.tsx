"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart, Star } from "lucide-react";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils/formatPrice";
import { useCart } from "@/lib/hooks/useCart";
import Badge from "@/components/ui/Badge";

interface ProductCardProps {
  product: Product;
  priority?: boolean;
}

export default function ProductCard({ product, priority = false }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="group bg-charcoal-800 border border-charcoal-700 hover:border-gold/30 rounded overflow-hidden transition-colors duration-300 hover:shadow-xl hover:shadow-gold/8"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden bg-charcoal-700">
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          priority={priority}
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Quick-add overlay */}
        <div className="absolute inset-0 bg-charcoal/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-5">
          <button
            onClick={() => addItem(product)}
            disabled={!product.inStock}
            aria-label={`Add ${product.name} to cart`}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold hover:bg-gold-light disabled:opacity-50 text-charcoal text-sm font-medium rounded transition-colors"
          >
            <ShoppingCart size={15} />
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </button>
        </div>

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1.5">
          {product.badge && <Badge variant="gold">{product.badge}</Badge>}
          {!product.inStock && <Badge variant="muted">Out of Stock</Badge>}
          {product.originalPrice && (
            <Badge variant="outline">
              -{Math.round((1 - product.price / product.originalPrice) * 100)}%
            </Badge>
          )}
        </div>
      </div>

      {/* Info */}
      <div className="p-4 space-y-2">
        <p className="font-mono text-xs text-parchment/30 tracking-widest uppercase truncate">
          {product.brand} · {product.category}
        </p>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-display text-lg text-parchment group-hover:text-gold transition-colors leading-snug line-clamp-2">
            {product.name}
          </h3>
        </Link>

        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={11}
                className={
                  i < Math.round(product.rating)
                    ? "fill-gold text-gold"
                    : "fill-charcoal-600 text-charcoal-600"
                }
              />
            ))}
          </div>
          <span className="font-mono text-xs text-parchment/30">
            ({product.reviewCount})
          </span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2 pt-1">
          <span className="font-mono text-lg text-gold">
            {formatPrice(product.price)}
          </span>
          {product.originalPrice && (
            <span className="font-mono text-sm text-parchment/30 line-through">
              {formatPrice(product.originalPrice)}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
