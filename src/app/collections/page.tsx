import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { collections } from "@/lib/data/collections";
import SectionTitle from "@/components/ui/SectionTitle";

export const metadata: Metadata = {
  title: "Collections",
  description: "Browse our curated violin collections — Master Series, Student Series, Baroque, and Accessories.",
};

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-charcoal py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14">
          <SectionTitle
            overline="Browse by Theme"
            title="Our Collections"
            subtitle="Instruments and accessories curated by style, purpose and expertise level."
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {collections.map((col) => (
            <Link key={col.id} href={`/collections/${col.slug}`} className="group block">
              <div className="relative aspect-[16/9] rounded overflow-hidden bg-charcoal-700">
                <Image
                  src={col.image}
                  alt={col.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/40 to-transparent" />
                <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/30 transition-all duration-300 rounded" />
                <div className="absolute inset-0 p-6 flex flex-col justify-end">
                  <p className="font-mono text-xs text-gold/70 tracking-widest uppercase mb-1">
                    {col.productCount} items · {col.priceRange}
                  </p>
                  <h2 className="font-display text-3xl text-parchment group-hover:text-gold transition-colors">
                    {col.name}
                  </h2>
                  <p className="font-body text-sm text-parchment/60 mt-2 line-clamp-2">
                    {col.description}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 font-mono text-xs text-gold/60 group-hover:text-gold tracking-widest uppercase transition-colors">
                    Explore <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
