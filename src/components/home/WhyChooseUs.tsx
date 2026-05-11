"use client";

import { Award, Users, HeartHandshake } from "lucide-react";
import SectionTitle from "@/components/ui/SectionTitle";
import AnimatedSection from "@/components/ui/AnimatedSection";

const features = [
  {
    icon: Award,
    title: "Master Craftsmanship",
    description:
      "Every instrument is built or selected by luthiers with decades of training. We follow the same methods used in Cremona for four centuries — because shortcuts cost tone.",
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description:
      "Not sure which violin suits your level and budget? Our team includes former professional performers who will match you with the right instrument — no upselling, just honest advice.",
  },
  {
    icon: HeartHandshake,
    title: "Lifetime Support",
    description:
      "Your relationship with us begins at purchase. We offer complimentary setup reviews, bow rehearing discounts, and a dedicated after-sales luthier for all customers.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 md:py-32 bg-charcoal">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="mb-16 text-center">
          <SectionTitle
            overline="Why Arco Violins"
            title="The Arco Difference"
            subtitle="Three pillars that define every interaction with us."
            centered
          />
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
          {features.map(({ icon: Icon, title, description }, i) => (
            <AnimatedSection key={title} delay={i * 0.12}>
              <div className="flex flex-col items-center text-center space-y-5">
                {/* Gold circle icon */}
                <div className="w-16 h-16 rounded-full border border-gold/30 flex items-center justify-center bg-gold/5 shrink-0">
                  <Icon size={28} className="text-gold" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-2xl text-parchment">{title}</h3>
                <p className="font-body text-sm text-parchment/55 leading-relaxed max-w-xs">
                  {description}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
