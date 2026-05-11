import type { Metadata } from "next";
import Image from "next/image";
import { team } from "@/lib/data/team";
import SectionTitle from "@/components/ui/SectionTitle";
import GoldDivider from "@/components/ui/GoldDivider";

export const metadata: Metadata = {
  title: "About Us",
  description: "Meet the luthiers and musicians behind Arco Violins. Our story, our craft, our team.",
};

const milestones = [
  { year: "2008", event: "Arco Violins founded in New York by Giovanni Ferrara after 15 years in Cremona." },
  { year: "2011", event: "Opened our first dedicated workshop space in Manhattan's Garment District." },
  { year: "2014", event: "Linh Nguyen joins as Master Bow Maker, launching our bow collection." },
  { year: "2017", event: "Partnership with three Cremona workshops for direct-import Italian instruments." },
  { year: "2020", event: "Launched online shop and international shipping to 40+ countries." },
  { year: "2024", event: "Celebrating 16 years and over 2,000 instruments placed with musicians worldwide." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-charcoal">
      {/* Hero */}
      <div className="relative h-64 md:h-96 overflow-hidden bg-charcoal-800">
        <Image
          src="https://picsum.photos/seed/about-hero/1400/600"
          alt="Arco Violins workshop"
          fill
          priority
          className="object-cover opacity-50"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
        <div className="absolute inset-0 flex items-end max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
          <div>
            <p className="font-mono text-xs text-gold tracking-[0.25em] uppercase mb-2">Est. 2008</p>
            <h1 className="font-display text-5xl md:text-6xl text-parchment font-light">Our Story</h1>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        {/* Brand story */}
        <section className="max-w-3xl space-y-6">
          <GoldDivider width="md" />
          <p className="font-body text-lg text-parchment/70 leading-relaxed">
            Arco Violins was founded on a single conviction: that the joy of playing an exceptional instrument
            should not be limited to those with auction-house budgets. We source, build, and set up every
            instrument with the obsessive care of our Cremonese training — and we price them honestly.
          </p>
          <p className="font-body text-base text-parchment/55 leading-relaxed">
            From beginner outfits that won&apos;t hinder a child&apos;s progress, to master-grade violins worthy
            of the concert stage — every instrument that leaves our workshop has been individually adjusted,
            tested, and approved by a trained luthier. We stand behind every sale with lifetime after-sales
            support and transparent pricing.
          </p>
        </section>

        {/* Team */}
        <section>
          <SectionTitle
            overline="The People"
            title="Meet Our Team"
            subtitle="Luthiers, bow makers, acousticians, and musicians — united by a love of the instrument."
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <div key={member.id} className="space-y-4">
                <div className="relative aspect-[4/5] rounded overflow-hidden bg-charcoal-700">
                  <Image
                    src={member.photo}
                    alt={member.name}
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl text-parchment">{member.name}</h3>
                  <p className="font-mono text-xs text-gold tracking-wide mt-0.5">{member.role}</p>
                  <p className="font-body text-sm text-parchment/50 mt-2 leading-relaxed">{member.bio}</p>
                  <p className="font-mono text-xs text-parchment/30 mt-2 italic">{member.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section>
          <SectionTitle
            overline="Heritage"
            title="Our Milestones"
            className="mb-12"
          />
          <div className="relative border-l border-gold/20 ml-4 space-y-8">
            {milestones.map((m) => (
              <div key={m.year} className="relative pl-8">
                <div className="absolute -left-2 top-1 w-4 h-4 rounded-full border-2 border-gold bg-charcoal" />
                <p className="font-mono text-sm text-gold mb-1">{m.year}</p>
                <p className="font-body text-base text-parchment/60 leading-relaxed">{m.event}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
