"use client";

import Link from "next/link";
import { ShoppingBag, ArrowRight } from "lucide-react";
import { useCart } from "@/lib/hooks/useCart";
import CartItem from "@/components/cart/CartItem";
import CartSummary from "@/components/cart/CartSummary";
import GoldDivider from "@/components/ui/GoldDivider";

export default function CartPage() {
  const { items, total, count } = useCart();

  return (
    <div className="min-h-screen bg-charcoal py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold mb-2">Your Selection</p>
          <h1 className="font-display text-5xl text-parchment font-light">Cart</h1>
          <GoldDivider width="md" className="mt-4" />
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center space-y-6">
            <div className="w-20 h-20 rounded-full bg-charcoal-700 border border-charcoal-600 flex items-center justify-center">
              <ShoppingBag size={32} className="text-parchment/30" />
            </div>
            <div>
              <p className="font-display text-3xl text-parchment/50 mb-2">Your cart is empty</p>
              <p className="font-body text-sm text-parchment/30">
                Discover our instruments and add something you love.
              </p>
            </div>
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gold hover:bg-gold-light text-charcoal font-medium rounded transition-colors"
            >
              Browse the Shop <ArrowRight size={16} />
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Items list */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <p className="font-body text-sm text-parchment/50">
                  {count} {count === 1 ? "item" : "items"} in your cart
                </p>
              </div>
              <div>
                {items.map((item) => (
                  <CartItem key={item.product.id} item={item} />
                ))}
              </div>
            </div>

            {/* Summary */}
            <div className="lg:col-span-1">
              <CartSummary total={total} count={count} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
