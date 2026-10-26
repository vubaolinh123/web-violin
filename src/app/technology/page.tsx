import type { Metadata } from "next";
import ChladniArt from "@/components/ui/ChladniArt";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import { applications } from "@/lib/data/applications";

export const metadata: Metadata = {
  title: "Technology",
  description:
    "Strad Plus is an acoustic formula that reads the DNA of wood: every piece of wood has its own pressure points and matrix of sound, and the right formula changes how it resonates.",
};

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="Technology"
        title="What is Strad Plus?"
        intro="An acoustic formula that decodes the DNA of wood."
        figure={{ n: 3, m: 5 }}
      />

      {/* Origin */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-28">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <SectionHeading eyebrow="Origin" title="The story of Strad Plus" />
          </Reveal>
          <Reveal delay={0.1} className="prose-strad text-lg leading-relaxed text-ink-soft md:col-span-7">
            <p>
              It started with a strong, persistent urge to recreate the sound of the instruments of the
              legendary maker Stradivarius. Master craftsman Nguyễn Xuân Huy went through more than thirty
              years of research, experiment and perseverance, and Strad Plus was the result.
            </p>
          </Reveal>
        </div>
      </section>

      {/* The formula */}
      <section className="border-y border-line bg-paper-deep/60">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 md:grid-cols-12 md:gap-16 md:py-28">
          <Reveal className="md:col-span-5">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden bg-night">
                <ChladniArt n={3} m={5} levels={5} resolution={64} />
              </div>
              <figcaption className="mt-4 text-sm leading-relaxed text-ink-mute">
                Illustration: the nodal lines and contours of a vibrating plate of wood.
              </figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <SectionHeading eyebrow="The formula" title="Reading the DNA of wood." />
            <div className="prose-strad mt-8 text-lg leading-relaxed text-ink-soft">
              <p>
                Strad Plus is an acoustic formula that can decode the DNA of wood. On every piece of wood
                there are pressure points, and a matrix of sound that belongs to that piece alone.
              </p>
              <p>
                When the right formula is programmed and activated on these points, the sound quality, the
                resonance and the physical transmission of the wood change immediately. That is the core of
                Strad Plus.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Capabilities */}
      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="What it can do"
            title="A formula with practical use across industries."
          />
        </Reveal>

        <div className="mt-16 divide-y divide-line border-y border-line">
          {applications.map((a, i) => (
            <Reveal key={a.id} className="grid gap-6 py-12 md:grid-cols-12 md:gap-16 md:py-14">
              <div className="md:col-span-4">
                <p className="eyebrow text-varnish">0{i + 1}</p>
                <h3 className="mt-4 font-display text-4xl font-medium leading-tight">{a.title}</h3>
              </div>
              <div className="md:col-span-8">
                <p className="font-display text-2xl italic leading-snug text-ink">{a.lead}</p>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">{a.body}</p>
                <p className="mt-5 text-sm text-ink-mute">
                  <span className="font-medium uppercase tracking-[0.14em] text-ink-soft">Examples — </span>
                  {a.examples}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-night">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center">
          <h2 className="max-w-xl font-display text-4xl font-medium leading-tight text-paper">
            See the products built on the formula.
          </h2>
          <div className="flex flex-wrap gap-4">
            <ButtonLink href="/products" variant="solid" className="border-brass-light bg-brass-light text-night hover:border-paper hover:bg-paper">
              View products
            </ButtonLink>
            <ButtonLink href="/media" variant="outline-light">
              Watch the video
            </ButtonLink>
          </div>
        </div>
      </section>
    </>
  );
}
