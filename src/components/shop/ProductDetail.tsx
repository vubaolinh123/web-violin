"use client";

import { useState } from "react";
import Link from "next/link";
import { ShoppingCart, Star, Check, ArrowLeft } from "lucide-react";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils/formatPrice";
import { useCart } from "@/lib/hooks/useCart";
import ProductImageGallery from "./ProductImageGallery";
import Badge from "@/components/ui/Badge";
import GoldDivider from "@/components/ui/GoldDivider";
import { ProductJsonLd } from "@/components/seo/JsonLd";

interface ProductDetailProps {
  product: Product;
}

export default function ProductDetail({ product }: ProductDetailProps) {
  const { addItem, items } = useCart();
  const [added, setAdded] = useState(false);

  const inCart = items.some((i) => i.product.id === product.id);

  const handleAddToCart = () => {
    addItem(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <>
      <ProductJsonLd
        name={product.name}
        description={product.description}
        price={product.price}
        image={product.images[0]}
        sku={product.id}
        inStock={product.inStock}
        rating={product.rating}
        reviewCount={product.reviewCount}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 mb-8 font-body text-sm text-parchment/40">
          <Link href="/shop" className="hover:text-gold transition-colors flex items-center gap-1">
            <ArrowLeft size={14} /> Shop
          </Link>
          <span>/</span>
          <span className="capitalize">{product.category}</span>
          <span>/</span>
          <span className="text-parchment/70 line-clamp-1">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Gallery */}
          <ProductImageGallery images={product.images} productName={product.name} />

          {/* Details */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              {product.badge && <Badge variant="gold">{product.badge}</Badge>}
              {!product.inStock && <Badge variant="muted">Out of Stock</Badge>}
              {product.inStock && (
                <Badge variant="success">In Stock</Badge>
              )}
            </div>

            {/* Brand */}
            <p className="font-mono text-xs text-parchment/30 tracking-widest uppercase">
              {product.brand}
            </p>

            {/* Name */}
            <h1 className="font-display text-4xl md:text-5xl text-parchment font-light leading-tight">
              {product.name}
            </h1>

            <GoldDivider width="md" />

            {/* Rating */}
            <div className="flex items-center gap-3">
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    className={
                      i < Math.round(product.rating)
                        ? "fill-gold text-gold"
                        : "fill-charcoal-600 text-charcoal-600"
                    }
                  />
                ))}
              </div>
              <span className="font-mono text-sm text-gold">{product.rating}</span>
              <span className="font-body text-sm text-parchment/40">
                ({product.reviewCount} reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-3xl text-gold">
                {formatPrice(product.price)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="font-mono text-xl text-parchment/30 line-through">
                    {formatPrice(product.originalPrice)}
                  </span>
                  <Badge variant="outline">
                    Save {Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </Badge>
                </>
              )}
            </div>

            {/* Description */}
            <p className="font-body text-base text-parchment/60 leading-relaxed">
              {product.description}
            </p>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              disabled={!product.inStock}
              className="w-full flex items-center justify-center gap-3 py-4 text-base font-medium rounded transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed
                         bg-gold hover:bg-gold-light text-charcoal shadow-lg hover:shadow-gold/20 active:scale-[0.99]"
            >
              {added ? (
                <>
                  <Check size={18} /> Added to Cart
                </>
              ) : (
                <>
                  <ShoppingCart size={18} />
                  {product.inStock ? "Add to Cart" : "Out of Stock"}
                </>
              )}
            </button>

            {inCart && !added && (
              <p className="text-center font-body text-xs text-parchment/40">
                Already in your cart.{" "}
                <Link href="/cart" className="text-gold hover:underline">
                  View cart
                </Link>
              </p>
            )}

            {/* Specs */}
            <div className="border border-charcoal-700 rounded overflow-hidden">
              <div className="px-5 py-3 bg-charcoal-700/50">
                <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-gold/70">
                  Specifications
                </h2>
              </div>
              <table className="w-full text-sm">
                <tbody>
                  {Object.entries(product.specs).map(([key, value]) => (
                    <tr key={key} className="border-t border-charcoal-700">
                      <td className="px-5 py-3 font-body text-parchment/40 capitalize w-2/5">
                        {key}
                      </td>
                      <td className="px-5 py-3 font-body text-parchment/70">
                        {String(value)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        {/* Long description */}
        <div className="mt-16 max-w-3xl">
          <h2 className="font-display text-3xl text-parchment mb-6">About this Instrument</h2>
          <GoldDivider width="md" className="mb-8" />
          <div className="space-y-5">
            {product.longDescription.split("\n\n").map((para, i) => (
              <p key={i} className="font-body text-base text-parchment/60 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
