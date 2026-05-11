"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import type { CartItem as CartItemType } from "@/types/cart";
import { formatPrice } from "@/lib/utils/formatPrice";
import { useCart } from "@/lib/hooks/useCart";

interface CartItemProps {
  item: CartItemType;
}

export default function CartItem({ item }: CartItemProps) {
  const { updateQty, removeItem } = useCart();
  const { product, quantity } = item;

  return (
    <div className="flex gap-4 py-5 border-b border-charcoal-700">
      {/* Image */}
      <Link href={`/shop/${product.slug}`} className="shrink-0">
        <div className="relative w-20 h-24 rounded overflow-hidden bg-charcoal-700">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="80px"
          />
        </div>
      </Link>

      {/* Details */}
      <div className="flex-1 min-w-0 space-y-1.5">
        <p className="font-mono text-xs text-parchment/30 tracking-widest uppercase truncate">
          {product.brand}
        </p>
        <Link href={`/shop/${product.slug}`}>
          <h3 className="font-display text-lg text-parchment hover:text-gold transition-colors leading-snug line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="font-mono text-base text-gold">
          {formatPrice(product.price)}
        </p>

        {/* Quantity controls */}
        <div className="flex items-center gap-3 pt-1">
          <div className="flex items-center gap-1 border border-charcoal-700 rounded">
            <button
              onClick={() => updateQty(product.id, quantity - 1)}
              aria-label="Decrease quantity"
              className="p-1.5 text-parchment/50 hover:text-parchment transition-colors disabled:opacity-30"
              disabled={quantity <= 1}
            >
              <Minus size={14} />
            </button>
            <span className="w-8 text-center font-mono text-sm text-parchment">
              {quantity}
            </span>
            <button
              onClick={() => updateQty(product.id, quantity + 1)}
              aria-label="Increase quantity"
              className="p-1.5 text-parchment/50 hover:text-parchment transition-colors"
            >
              <Plus size={14} />
            </button>
          </div>

          <button
            onClick={() => removeItem(product.id)}
            aria-label="Remove item"
            className="p-1.5 text-parchment/30 hover:text-red-400 transition-colors"
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>

      {/* Line total */}
      <div className="shrink-0 text-right">
        <p className="font-mono text-base text-parchment/80">
          {formatPrice(product.price * quantity)}
        </p>
        {quantity > 1 && (
          <p className="font-body text-xs text-parchment/30 mt-1">
            {quantity} × {formatPrice(product.price)}
          </p>
        )}
      </div>
    </div>
  );
}
