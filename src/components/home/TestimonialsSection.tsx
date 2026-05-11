"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/lib/data/testimonials";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-charcoal-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-14">
          <SectionTitle
            overline="What Musicians Say"
            title="From Our Community"
            subtitle="Trusted by professionals, students, and collectors across 40 countries."
          />
        </AnimatedSection>

        {/* Horizontal scroll container */}
        <div className="overflow-x-auto pb-6 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
          <div className="flex gap-5 w-max lg:w-auto lg:grid lg:grid-cols-4">
            {testimonials.map((t, i) => (
              <AnimatedSection
                key={t.id}
                delay={i * 0.07}
                className="w-72 lg:w-auto shrink-0 lg:shrink"
              >
                <div className="h-full bg-charcoal border-l-2 border-gold/40 hover:border-gold transition-colors duration-300 p-6 rounded-r space-y-4">
                  {/* Stars */}
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, si) => (
                      <Star
                        key={si}
                        size={13}
                        className={si < t.rating ? "fill-gold text-gold" : "fill-charcoal-600 text-charcoal-600"}
                      />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="font-display text-base text-parchment/80 leading-relaxed">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Instrument */}
                  <p className="font-mono text-xs text-gold/60 tracking-wide">
                    {t.instrument}
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-2 border-t border-charcoal-700">
                    <div className="relative w-9 h-9 rounded-full overflow-hidden shrink-0 bg-charcoal-700">
                      <Image
                        src={t.avatar}
                        alt={t.author}
                        fill
                        className="object-cover"
                        sizes="36px"
                      />
                    </div>
                    <div>
                      <p className="font-body text-sm font-medium text-parchment">
                        {t.author}
                      </p>
                      <p className="font-body text-xs text-parchment/40">
                        {t.location}
                      </p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
