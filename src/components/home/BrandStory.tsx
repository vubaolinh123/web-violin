"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GoldDivider from "@/components/ui/GoldDivider";

export default function BrandStory() {
  return (
    <section className="py-24 md:py-32 bg-charcoal overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Text left */}
          <AnimatedSection direction="left">
            <div className="space-y-7">
              <p className="font-mono text-xs tracking-[0.3em] uppercase text-gold">
                Our Story
              </p>
              <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl text-parchment font-light leading-tight">
                "Every instrument carries the memory of the hands that made it."
              </blockquote>
              <GoldDivider width="md" />
              <div className="space-y-4 font-body text-base text-parchment/60 leading-relaxed">
                <p>
                  Arco Violins was founded in 2008 by Giovanni Ferrara, a luthier who spent
                  fifteen years apprenticing in Cremona — the birthplace of Stradivari. He
                  returned with one conviction: that exceptional instruments should be available
                  to musicians beyond the world of elite auction houses.
                </p>
                <p>
                  From our New York workshop, we source, build, and set up every instrument
                  by hand. Our luthiers spend days — sometimes weeks — on a single setup,
                  because we believe the difference between an average violin and a great
                  one is often in the final 5% of preparation.
                </p>
                <p>
                  We invite you to experience that difference.
                </p>
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 font-body text-sm text-gold hover:text-gold-light border-b border-gold/40 hover:border-gold pb-1 transition-all duration-300"
              >
                Meet our team <ArrowRight size={14} />
              </Link>
            </div>
          </AnimatedSection>

          {/* Image right — asymmetric with gold frame offset */}
          <AnimatedSection direction="right" delay={0.15}>
            <div className="relative">
              {/* Gold frame offset */}
              <div className="absolute -top-4 -right-4 w-full h-full border border-gold/20 rounded pointer-events-none z-0" />
              {/* Main image */}
              <div className="relative aspect-[3/4] rounded overflow-hidden z-10">
                <Image
                  src="https://picsum.photos/seed/brand-story/700/900"
                  alt="Luthier at work in Arco Violins workshop"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 to-transparent" />
              </div>
              {/* Stat overlay card */}
              <div className="absolute bottom-8 -left-6 bg-charcoal-800 border border-charcoal-700 p-5 rounded shadow-2xl z-20">
                <p className="font-mono text-3xl text-gold">16+</p>
                <p className="font-body text-xs text-parchment/50 tracking-widest uppercase mt-1">
                  Years of Craft
                </p>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
