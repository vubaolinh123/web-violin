import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ChladniArt from "@/components/ui/ChladniArt";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import VideoEmbed from "@/components/ui/VideoEmbed";
import ProductCard from "@/components/products/ProductCard";
import { products } from "@/lib/data/products";
import { applications } from "@/lib/data/applications";

const facts = [
  { value: "30+", label: "years of research, testing and refinement" },
  { value: "3", label: "fields of application: instruments, interiors, sport" },
  { value: "Minutes", label: "for a treated instrument to open up" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-night">
        <div className="absolute inset-0" aria-hidden="true">
          <ChladniArt n={3} m={5} width={160} height={100} resolution={120} levels={5} />
          <div className="absolute inset-0 bg-gradient-to-r from-night via-night/80 to-night/10" />
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-night to-transparent" />
        </div>
        <div className="relative mx-auto max-w-7xl px-5 pb-24 pt-24 sm:px-8 md:pb-36 md:pt-36">
          <p className="eyebrow mb-6 text-brass-light">Acoustic research for wood</p>
          <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.05] text-paper sm:text-6xl md:text-7xl">
            Unlocking the acoustic DNA of wood.
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/75">
            Strad Plus is an acoustic formula, developed over more than thirty years by master luthier and
            researcher Nguyễn Xuân Huy, that changes how a piece of wood sounds, resonates and carries vibration.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <ButtonLink href="/technology" variant="solid" className="border-brass-light bg-brass-light text-night hover:border-paper hover:bg-paper">
              Discover the technology
            </ButtonLink>
            <ButtonLink href="/inquiry" variant="outline-light">
              Distributor inquiry
            </ButtonLink>
          </div>
        </div>
      </section>

      {/* Facts */}
      <section className="border-b border-line bg-paper-deep">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-8 md:grid-cols-3 md:gap-0 md:py-12">
          {facts.map((f, i) => (
            <div key={f.value} className={i > 0 ? "md:border-l md:border-line md:pl-10" : ""}>
              <p className="font-display text-5xl font-medium text-varnish">{f.value}</p>
              <p className="mt-2 max-w-[18rem] text-sm leading-relaxed text-ink-soft">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="section-offscreen mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <SectionHeading
              eyebrow="The story"
              title="A thirty-year pursuit of one sound."
            />
          </Reveal>
          <Reveal delay={0.1} className="prose-strad text-lg leading-relaxed text-ink-soft md:col-span-7">
            <p>
              Strad Plus began with a persistent wish: to recreate the sound of the instruments made by the
              legendary maker Stradivarius. Nguyễn Xuân Huy spent more than thirty years researching, testing
              and refining before Strad Plus was born.
            </p>
            <p>
              It is a formula in acoustics that reads the DNA of wood. Every piece of wood carries its own
              pressure points and its own matrix of sound. When the right formula is applied to those points,
              the sound quality, the resonance and the physical transmission of the wood change at once.
            </p>
            <p>
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 text-base font-medium text-varnish underline decoration-varnish/30 underline-offset-4 transition-all hover:gap-3 hover:decoration-varnish"
              >
                Read about the technology <ArrowRight size={16} strokeWidth={1.5} />
              </Link>
            </p>
          </Reveal>
        </div>
      </section>

      {/* Products */}
      <section className="section-offscreen border-t border-line bg-paper-deep/60">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Products"
              title="Strad Plus, in two forms."
              intro="Processed wooden components for the instrument you already play, or the method applied to the instrument itself."
            />
            <ButtonLink href="/products" variant="text">
              All products <ArrowRight size={15} strokeWidth={1.5} />
            </ButtonLink>
          </Reveal>
          <div className="mt-14 grid gap-12 md:grid-cols-2 md:gap-14">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-offscreen mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
        <Reveal>
          <SectionHeading
            eyebrow="Applications"
            title="One formula, many kinds of wood."
            intro="Wherever wood carries sound or vibration, Strad Plus can change the result."
          />
        </Reveal>
        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
          {applications.map((a, i) => (
            <Reveal key={a.id} delay={i * 0.1} className="bg-paper p-8 md:p-10">
              <p className="eyebrow text-varnish">0{i + 1}</p>
              <h3 className="mt-5 font-display text-3xl font-medium leading-tight">{a.title}</h3>
              <p className="mt-4 font-display text-xl italic leading-snug text-ink-soft">{a.lead}</p>
              <p className="mt-5 text-sm leading-relaxed text-ink-soft">{a.examples}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Video */}
      <section className="section-offscreen bg-night">
        <div className="mx-auto max-w-5xl px-5 py-24 sm:px-8 md:py-32">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Video"
              title="Hear what it does."
              intro="Strad Plus applied to a $400 guitar, in conversation with guitarist Vũ Đức Hiển and Nguyễn Xuân Huy."
            />
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <VideoEmbed />
          </Reveal>
        </div>
      </section>

      {/* Founder */}
      <section className="section-offscreen mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
        <div className="grid items-center gap-14 md:grid-cols-12">
          <Reveal className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden bg-night">
              <ChladniArt n={2} m={5} levels={4} resolution={56} />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7 md:pl-8">
            <SectionHeading
              eyebrow="Founder"
              title="Nguyễn Xuân Huy"
              intro="Violinist, master craftsman and scientific researcher. Born into a family of musicians, trained at the Hanoi Conservatory and the Tchaikovsky Moscow State Conservatory."
            />
            <ButtonLink href="/founder" variant="text" className="mt-8">
              Read his story <ArrowRight size={15} strokeWidth={1.5} />
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* Distributor CTA */}
      <section className="bg-varnish">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center md:py-20">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl font-medium leading-tight text-paper md:text-5xl">
              Interested in representing Strad Plus?
            </h2>
            <p className="mt-4 leading-relaxed text-paper/80">
              We are speaking with distributors, makers and workshops around the world.
            </p>
          </div>
          <ButtonLink href="/contact" variant="outline-light" className="shrink-0">
            Get in touch
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
