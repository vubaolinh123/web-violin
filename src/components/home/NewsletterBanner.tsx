"use client";

import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import AnimatedSection from "@/components/ui/AnimatedSection";
import GoldDivider from "@/components/ui/GoldDivider";

export default function NewsletterBanner() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="py-20 md:py-28 bg-charcoal-800 relative overflow-hidden">
      {/* Subtle radial glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-gold/4 blur-3xl" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection className="space-y-6">
          <div className="flex items-center justify-center w-14 h-14 rounded-full border border-gold/30 bg-gold/5 mx-auto">
            <Mail size={24} className="text-gold" strokeWidth={1.5} />
          </div>

          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-parchment font-light leading-tight">
            Stay in Tune
          </h2>

          <GoldDivider centered width="md" />

          <p className="font-body text-base text-parchment/55 max-w-md mx-auto leading-relaxed">
            New instruments, luthier stories, and exclusive early access — delivered to
            your inbox. No noise, only music.
          </p>

          {submitted ? (
            <div className="py-4">
              <p className="font-mono text-sm text-gold tracking-wide">
                ✓ You&apos;re on the list. We&apos;ll be in touch.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mt-2"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="flex-1 px-5 py-3.5 bg-charcoal-700 border border-charcoal-600 focus:border-gold/60 focus:outline-none text-parchment text-sm rounded placeholder:text-parchment/30 transition-colors"
              />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 btn-shimmer text-charcoal text-sm font-medium rounded transition-all shrink-0"
              >
                Subscribe <ArrowRight size={16} />
              </button>
            </form>
          )}

          <p className="font-body text-xs text-parchment/25 mt-2">
            Unsubscribe anytime. No spam, ever.
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
