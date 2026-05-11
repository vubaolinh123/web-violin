"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { collections } from "@/lib/data/collections";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function CollectionsBanner() {
  const featured = collections.filter((c) => c.featured);

  return (
    <section className="py-24 md:py-32 relative overflow-hidden bg-charcoal-800">
      {/* Gradient mesh background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-gold/5 blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gold/4 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-charcoal-700/60 blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-14">
          <SectionTitle
            overline="Curated Collections"
            title="Shop by Collection"
            subtitle="Instruments and accessories grouped by purpose, style and expertise level."
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((collection, i) => (
            <AnimatedSection key={collection.id} delay={i * 0.1}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="group relative overflow-hidden rounded aspect-[4/3] bg-charcoal-700"
              >
                <Image
                  src={collection.image}
                  alt={collection.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
                {/* Gold border reveal on hover */}
                <div className="absolute inset-0 border-2 border-gold/0 group-hover:border-gold/40 transition-all duration-300 rounded" />

                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-6">
                  <p className="font-mono text-xs text-gold/70 tracking-widest uppercase mb-1">
                    {collection.productCount} items · {collection.priceRange}
                  </p>
                  <h3 className="font-display text-2xl text-parchment group-hover:text-gold transition-colors">
                    {collection.name}
                  </h3>
                  <p className="font-body text-sm text-parchment/60 mt-1 line-clamp-2">
                    {collection.description}
                  </p>
                  <Link
                    href={`/collections/${collection.slug}`}
                    className="mt-4 inline-flex items-center gap-2 text-xs font-mono text-gold/70 hover:text-gold tracking-widest uppercase transition-colors"
                  >
                    Explore <ArrowRight size={12} />
                  </Link>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.4} className="mt-10 text-center">
          <Link
            href="/collections"
            className="inline-flex items-center gap-2 font-body text-sm text-parchment/50 hover:text-gold border-b border-parchment/20 hover:border-gold pb-1 transition-all duration-300"
          >
            View all collections <ArrowRight size={14} />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
}
