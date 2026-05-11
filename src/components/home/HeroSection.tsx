"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { m, useScroll, useTransform, type Variants } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const imageRotate = useTransform(scrollYProgress, [0, 1], [4, 7]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "10%"]);

  const containerVariants: Variants = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.15, delayChildren: 0.2 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 28 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  };

  return (
    <section
      ref={containerRef}
      className="grain-overlay relative min-h-screen flex items-center overflow-hidden bg-charcoal"
      style={{ position: "relative" }}
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-charcoal via-charcoal-800 to-charcoal pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_70%_50%,rgba(201,168,76,0.06),transparent)] pointer-events-none" />

      {/* Violin image — right side, parallax */}
      <m.div
        style={{ y: imageY, rotate: imageRotate, willChange: "transform" }}
        className="absolute right-[-8%] md:right-[-4%] lg:right-0 top-[5%] w-[65%] md:w-[55%] lg:w-[48%] h-[90%] pointer-events-none select-none"
      >
        <div className="relative w-full h-full">
          <Image
            src="https://picsum.photos/seed/hero-violin/900/1100"
            alt="Premium handcrafted violin"
            fill
            priority
            className="object-cover object-center opacity-60 md:opacity-75"
            sizes="(max-width: 768px) 65vw, 50vw"
          />
          {/* Fade out to left */}
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/30 to-transparent" />
          {/* Fade out bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-transparent to-transparent" />
        </div>
      </m.div>

      {/* Text content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-24 pb-16 md:pt-0 md:pb-0">
        <m.div
          style={{ y: textY }}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-xl lg:max-w-2xl"
        >
          {/* Overline */}
          <m.p
            variants={itemVariants}
            className="font-mono text-xs md:text-sm tracking-[0.3em] uppercase text-gold mb-6"
          >
            Est. 2008 · Cremona-Inspired
          </m.p>

          {/* Headline */}
          <m.h1
            variants={itemVariants}
            className="font-display font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-parchment leading-[0.95] mb-6"
          >
            Instruments
            <br />
            <span className="text-gold-gradient italic">of Exceptional</span>
            <br />
            Character
          </m.h1>

          {/* Sub-divider */}
          <m.div variants={itemVariants} className="flex items-center gap-3 mb-6">
            <span className="block w-12 h-px bg-gold/60" />
            <span className="block w-1.5 h-1.5 rotate-45 bg-gold shrink-0" />
            <span className="block w-12 h-px bg-gold/60" />
          </m.div>

          {/* Body copy */}
          <m.p
            variants={itemVariants}
            className="font-body text-base md:text-lg text-parchment/60 leading-relaxed mb-10 max-w-md"
          >
            Handcrafted violins, master bows, and curated accessories — each instrument
            selected for tone, craft, and lasting beauty.
          </m.p>

          {/* CTAs */}
          <m.div variants={itemVariants} className="flex flex-wrap gap-4">
            <Link
              href="/shop"
              className="inline-flex items-center gap-2 px-8 py-4 text-lg rounded-sm btn-shimmer text-charcoal font-medium shadow-lg hover:shadow-gold/30 hover:shadow-xl transition-all duration-300"
            >
              Explore the Shop
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/collections"
              className="inline-flex items-center px-8 py-4 text-lg rounded-sm bg-transparent border border-gold/60 hover:border-gold text-gold hover:bg-gold/10 font-medium transition-all duration-300"
            >
              View Collections
            </Link>
          </m.div>

          {/* Stats */}
          <m.div
            variants={itemVariants}
            className="flex flex-wrap gap-8 mt-14 pt-8 border-t border-charcoal-700/60"
          >
            {[
              { value: "200+", label: "Instruments" },
              { value: "16yr", label: "Heritage" },
              { value: "4.8★", label: "Avg. Rating" },
            ].map(({ value, label }) => (
              <div key={label}>
                <p className="font-mono text-2xl text-gold">{value}</p>
                <p className="font-body text-xs text-parchment/40 tracking-widest uppercase mt-0.5">
                  {label}
                </p>
              </div>
            ))}
          </m.div>
        </m.div>
      </div>

      {/* Scroll indicator */}
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-parchment/30">
          Scroll
        </span>
        <m.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="block w-px h-8 bg-gradient-to-b from-parchment/30 to-transparent"
        />
      </m.div>
    </section>
  );
}
