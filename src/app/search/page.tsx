"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { products } from "@/lib/data/products";
import ProductGrid from "@/components/shop/ProductGrid";
import GoldDivider from "@/components/ui/GoldDivider";
import { Suspense } from "react";

function SearchResults() {
  const searchParams = useSearchParams();
  const initialQ = searchParams.get("q") ?? "";
  const [query, setQuery] = useState(initialQ);

  const results = useMemo(() => {
    if (!query.trim()) return [];
    const q = query.toLowerCase();
    return products.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="min-h-screen bg-charcoal py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold mb-2">Search</p>
          <h1 className="font-display text-5xl text-parchment font-light">Find Instruments</h1>
          <GoldDivider width="md" className="mt-4" />
        </div>

        {/* Search input */}
        <div className="relative max-w-xl mb-12">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-parchment/30" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search violins, bows, accessories…"
            className="w-full pl-11 pr-4 py-3.5 bg-charcoal-700 border border-charcoal-600 focus:border-gold/60 focus:outline-none text-parchment text-base rounded placeholder:text-parchment/25 transition-colors"
            autoFocus
          />
        </div>

        {query.trim() ? (
          <>
            <p className="font-body text-sm text-parchment/40 mb-6">
              {results.length} result{results.length !== 1 ? "s" : ""} for &quot;{query}&quot;
            </p>
            <ProductGrid products={results} />
          </>
        ) : (
          <p className="font-body text-parchment/30 text-center py-16">
            Start typing to search our catalog…
          </p>
        )}
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-charcoal" />}>
      <SearchResults />
    </Suspense>
  );
}
