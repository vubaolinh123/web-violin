"use client";

import { useState, useMemo } from "react";
import { products } from "@/lib/data/products";
import ProductGrid from "@/components/shop/ProductGrid";
import ProductFilters, { type FilterState } from "@/components/shop/ProductFilters";
import SectionTitle from "@/components/ui/SectionTitle";

const allBrands = [...new Set(products.map((p) => p.brand))];
const maxPrice = Math.max(...products.map((p) => p.price));

const defaultFilters: FilterState = {
  categories: [],
  maxPrice,
  brands: [],
  inStockOnly: false,
};

export default function ShopPage() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (filters.categories.length > 0 && !filters.categories.includes(p.category)) return false;
      if (p.price > filters.maxPrice) return false;
      if (filters.brands.length > 0 && !filters.brands.includes(p.brand)) return false;
      if (filters.inStockOnly && !p.inStock) return false;
      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-charcoal py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <SectionTitle
            overline="Our Catalog"
            title="All Instruments"
            subtitle={`${filtered.length} instrument${filtered.length !== 1 ? "s" : ""} available`}
            showDivider={false}
          />
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <ProductFilters
            availableBrands={allBrands}
            maxProductPrice={maxPrice}
            filters={filters}
            onChange={setFilters}
          />
          <div className="flex-1 min-w-0">
            <ProductGrid products={filtered} />
          </div>
        </div>
      </div>
    </div>
  );
}
