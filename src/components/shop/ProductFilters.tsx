"use client";

import { useState, useCallback } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import type { Category } from "@/types/product";
import { cn } from "@/lib/utils/cn";

export interface FilterState {
  categories: Category[];
  maxPrice: number;
  brands: string[];
  inStockOnly: boolean;
}

interface ProductFiltersProps {
  availableBrands: string[];
  maxProductPrice: number;
  filters: FilterState;
  onChange: (filters: FilterState) => void;
}

const CATEGORIES: { value: Category; label: string }[] = [
  { value: "violin", label: "Violins" },
  { value: "bow", label: "Bows" },
  { value: "case", label: "Cases" },
  { value: "accessory", label: "Accessories" },
];

export default function ProductFilters({
  availableBrands,
  maxProductPrice,
  filters,
  onChange,
}: ProductFiltersProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleCategory = useCallback(
    (cat: Category) => {
      const next = filters.categories.includes(cat)
        ? filters.categories.filter((c) => c !== cat)
        : [...filters.categories, cat];
      onChange({ ...filters, categories: next });
    },
    [filters, onChange]
  );

  const toggleBrand = useCallback(
    (brand: string) => {
      const next = filters.brands.includes(brand)
        ? filters.brands.filter((b) => b !== brand)
        : [...filters.brands, brand];
      onChange({ ...filters, brands: next });
    },
    [filters, onChange]
  );

  const clearAll = useCallback(() => {
    onChange({
      categories: [],
      maxPrice: maxProductPrice,
      brands: [],
      inStockOnly: false,
    });
  }, [maxProductPrice, onChange]);

  const hasActiveFilters =
    filters.categories.length > 0 ||
    filters.brands.length > 0 ||
    filters.inStockOnly ||
    filters.maxPrice < maxProductPrice;

  const filterContent = (
    <div className="space-y-7">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="font-mono text-xs tracking-[0.2em] uppercase text-gold/80">
          Filters
        </h2>
        {hasActiveFilters && (
          <button
            onClick={clearAll}
            className="font-body text-xs text-parchment/40 hover:text-gold transition-colors flex items-center gap-1"
          >
            <X size={12} /> Clear all
          </button>
        )}
      </div>

      {/* Category */}
      <div className="space-y-3">
        <h3 className="font-body text-sm font-medium text-parchment/70">Category</h3>
        <div className="space-y-2">
          {CATEGORIES.map(({ value, label }) => (
            <label key={value} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.categories.includes(value)}
                onChange={() => toggleCategory(value)}
                className="w-4 h-4 accent-amber-500 cursor-pointer"
              />
              <span className={cn(
                "font-body text-sm transition-colors",
                filters.categories.includes(value) ? "text-gold" : "text-parchment/60 group-hover:text-parchment"
              )}>
                {label}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price range */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <h3 className="font-body text-sm font-medium text-parchment/70">Max Price</h3>
          <span className="font-mono text-xs text-gold">
            ${filters.maxPrice.toLocaleString()}
          </span>
        </div>
        <input
          type="range"
          min={0}
          max={maxProductPrice}
          step={100}
          value={filters.maxPrice}
          onChange={(e) => onChange({ ...filters, maxPrice: Number(e.target.value) })}
          className="w-full accent-amber-500 cursor-pointer"
        />
        <div className="flex justify-between font-mono text-xs text-parchment/30">
          <span>$0</span>
          <span>${maxProductPrice.toLocaleString()}</span>
        </div>
      </div>

      {/* Brands */}
      <div className="space-y-3">
        <h3 className="font-body text-sm font-medium text-parchment/70">Brand</h3>
        <div className="space-y-2">
          {availableBrands.map((brand) => (
            <label key={brand} className="flex items-center gap-3 cursor-pointer group">
              <input
                type="checkbox"
                checked={filters.brands.includes(brand)}
                onChange={() => toggleBrand(brand)}
                className="w-4 h-4 accent-amber-500 cursor-pointer"
              />
              <span className={cn(
                "font-body text-sm transition-colors",
                filters.brands.includes(brand) ? "text-gold" : "text-parchment/60 group-hover:text-parchment"
              )}>
                {brand}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* In stock */}
      <div>
        <label className="flex items-center gap-3 cursor-pointer group">
          <input
            type="checkbox"
            checked={filters.inStockOnly}
            onChange={(e) => onChange({ ...filters, inStockOnly: e.target.checked })}
            className="w-4 h-4 accent-amber-500 cursor-pointer"
          />
          <span className={cn(
            "font-body text-sm transition-colors",
            filters.inStockOnly ? "text-gold" : "text-parchment/60 group-hover:text-parchment"
          )}>
            In stock only
          </span>
        </label>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile toggle */}
      <div className="lg:hidden mb-4">
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-charcoal-800 border border-charcoal-700 text-parchment/70 text-sm rounded hover:border-gold/40 transition-colors"
        >
          <SlidersHorizontal size={16} />
          Filters
          {hasActiveFilters && (
            <span className="ml-1 w-4 h-4 flex items-center justify-center bg-gold text-charcoal text-[10px] font-bold rounded-full">
              !
            </span>
          )}
        </button>
        {mobileOpen && (
          <div className="mt-4 p-5 bg-charcoal-800 border border-charcoal-700 rounded">
            {filterContent}
          </div>
        )}
      </div>

      {/* Desktop sidebar */}
      <div className="hidden lg:block w-56 shrink-0">
        <div className="sticky top-24 p-5 bg-charcoal-800 border border-charcoal-700 rounded">
          {filterContent}
        </div>
      </div>
    </>
  );
}
