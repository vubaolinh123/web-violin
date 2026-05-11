"use client";

import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { formatPrice } from "@/lib/utils/formatPrice";
import GoldDivider from "@/components/ui/GoldDivider";

interface CartSummaryProps {
  total: number;
  count: number;
}

export default function CartSummary({ total, count }: CartSummaryProps) {
  const shipping = total >= 500 ? 0 : 25;
  const grandTotal = total + shipping;

  return (
    <div className="bg-charcoal-800 border border-charcoal-700 rounded p-6 space-y-5 sticky top-24">
      <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-gold/80">
        Order Summary
      </h2>

      <GoldDivider width="full" />

      <div className="space-y-3 font-body text-sm">
        <div className="flex justify-between text-parchment/60">
          <span>Subtotal ({count} {count === 1 ? "item" : "items"})</span>
          <span className="font-mono">{formatPrice(total)}</span>
        </div>
        <div className="flex justify-between text-parchment/60">
          <span>Shipping</span>
          <span className="font-mono">
            {shipping === 0 ? (
              <span className="text-emerald-400">Free</span>
            ) : (
              formatPrice(shipping)
            )}
          </span>
        </div>
        {shipping > 0 && (
          <p className="text-xs text-parchment/30 italic">
            Free shipping on orders over $500
          </p>
        )}
      </div>

      <GoldDivider width="full" />

      <div className="flex justify-between font-body text-base">
        <span className="text-parchment/80">Total</span>
        <span className="font-mono text-xl text-gold">{formatPrice(grandTotal)}</span>
      </div>

      <button
        className="w-full flex items-center justify-center gap-2 py-4 bg-gold hover:bg-gold-light text-charcoal font-medium rounded transition-colors shadow-lg hover:shadow-gold/20"
        onClick={() => alert("Checkout not implemented in demo.")}
      >
        <ShoppingBag size={18} />
        Proceed to Checkout
      </button>

      <Link
        href="/shop"
        className="flex items-center justify-center gap-2 text-sm text-parchment/40 hover:text-gold transition-colors"
      >
        Continue Shopping <ArrowRight size={14} />
      </Link>
    </div>
  );
}
