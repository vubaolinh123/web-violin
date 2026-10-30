import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ChladniArt from "@/components/ui/ChladniArt";
import ButtonLink from "@/components/ui/ButtonLink";
import SectionHeading from "@/components/ui/SectionHeading";
import Reveal from "@/components/ui/Reveal";
import VideoEmbed from "@/components/ui/VideoEmbed";
import ProductCard from "@/components/products/ProductCard";
import ContactPaths from "@/components/contact/ContactPaths";
import { products } from "@/lib/data/products";
import { applications } from "@/lib/data/applications";
import { projects } from "@/lib/data/projects";
import { cn } from "@/lib/utils/cn";

const facts = [
  { value: "30+", label: "years of research, testing and refinement" },
  {
    value: "3",
    label: "fields of application: Musical Instruments, Architectural Acoustics, Sports Equipment",
  },
  { value: "Minutes", label: "to reveal the instrument's true voice" },
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
          <p className="eyebrow mb-6 text-brass-light">A Secret Formula</p>
          <h1 className="max-w-3xl font-display text-5xl font-medium leading-[1.05] text-paper sm:text-6xl md:text-7xl">
            Deciphering the Acoustic DNA of Wood
          </h1>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-paper/75">
            Developed by violinist, craftsman and researcher Nguyễn Xuân Huy over more than thirty years, Strad
            Plus is a proprietary method that enhances the way wood resonates, responds, and transmits vibration.
          </p>
          <div className="mt-10">
            <ButtonLink href="/technology" variant="solid" className="border-brass-light bg-brass-light text-night hover:border-paper hover:bg-paper">
              Discover Strad Plus <ArrowRight size={15} strokeWidth={1.5} />
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
              <p className="mt-2 max-w-[19rem] text-sm leading-relaxed text-ink-soft">{f.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Story */}
      <section className="section-offscreen mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <SectionHeading
              eyebrow="The story"
              title="A thirty-year pursuit of one sound."
            />
          </Reveal>
          <Reveal delay={0.1} className="prose-strad text-lg leading-relaxed text-ink-soft md:col-span-7">
            <p>
              Strad Plus began with a persistent ambition: to understand and recreate the extraordinary acoustic
              qualities that made Stradivari instruments legendary. For more than thirty years, Nguyễn Xuân Huy
              researched, tested, and refined his ideas before ultimately developing Strad Plus.
            </p>
            <p>
              At the heart of Strad Plus lies what we describe as the &ldquo;acoustic DNA&rdquo; of wood. Every
              piece of wood possesses its own resonance characteristics and vibrational behavior. By identifying
              and treating key acoustic points within the material, Strad Plus can immediately change how
              vibrations are transmitted through the wood, enhancing resonance, responsiveness, and overall sound
              quality.
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

      {/* Founder */}
      <section className="section-offscreen border-t border-line bg-paper-deep/60">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 md:grid-cols-12 md:py-20">
          <Reveal className="md:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-night">
              <ChladniArt n={2} m={5} levels={4} resolution={56} />
            </div>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-8 md:pl-8">
            <SectionHeading
              eyebrow="Founder"
              title="Nguyễn Xuân Huy"
              intro="Violinist, craftsman and scientific researcher. Born into a family of musicians, trained at the Hanoi Conservatory and the Tchaikovsky Moscow State Conservatory. Driven by a lifelong quest to understand the voice of wood, he spent more than thirty years developing what would eventually become Strad Plus."
            />
            <ButtonLink href="/founder" variant="text" className="mt-8">
              Read his story <ArrowRight size={15} strokeWidth={1.5} />
            </ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* Products */}
      <section className="section-offscreen border-t border-line">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
          <Reveal className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Products"
              title="Strad Plus, from Technology to Product."
              intro="The full Strad Plus treatment applied directly to the instrument, or our bridge and soundpost set derived from the same acoustic technology."
            />
            <ButtonLink href="/products" variant="text">
              All products <ArrowRight size={15} strokeWidth={1.5} />
            </ButtonLink>
          </Reveal>
          <div className="mt-10 grid gap-10 lg:grid-cols-2 lg:gap-14">
            {products.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.1}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Applications */}
      <section className="section-offscreen border-t border-line bg-paper-deep/60">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
          <Reveal>
            <SectionHeading
              eyebrow="Applications"
              title="One Technology, Endless Possibilities"
              intro="Wherever wood matters, Strad Plus makes a difference."
            />
          </Reveal>
          <div className="mt-10 grid gap-px border border-line bg-line md:grid-cols-3">
            {applications.map((a, i) => (
              <Reveal key={a.id} delay={i * 0.1} className="flex flex-col bg-paper p-8">
                <p className="eyebrow text-varnish">0{i + 1}</p>
                <h3 className="mt-5 font-display text-3xl font-medium leading-tight">{a.title}</h3>
                <p className="mt-4 flex-1 font-display text-xl italic leading-snug text-ink-soft">{a.lead}</p>
                <p className="mt-6 border-t border-line pt-5 text-sm leading-relaxed text-ink-soft">
                  {a.examples}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Video */}
      <section className="section-offscreen bg-night">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 md:py-20 lg:grid-cols-12 lg:gap-14">
          <Reveal className="lg:col-span-4">
            <SectionHeading
              tone="dark"
              eyebrow="Video"
              title="Hear what it does."
              intro="Strad Plus applied to a $400 guitar, in conversation with guitarist Vũ Đức Hiển and Nguyễn Xuân Huy."
            />
          </Reveal>
          <Reveal delay={0.1} className="lg:col-span-8">
            <VideoEmbed />
          </Reveal>
        </div>
      </section>

      {/* Recognition & Collaborations */}
      <section className="section-offscreen mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <Reveal className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Recognition"
            title="Recognition & Collaborations"
            intro="Musicians, makers and institutions who have heard and worked with Strad Plus."
          />
          <ButtonLink href="/artists-projects" variant="text">
            All artists & projects <ArrowRight size={15} strokeWidth={1.5} />
          </ButtonLink>
        </Reveal>
        <div className={cn("mt-10 grid gap-px border border-line bg-line", projects.length > 1 && "md:grid-cols-2")}>
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="bg-paper p-8">
              <p className="eyebrow text-varnish">{p.category}</p>
              <h3 className="mt-4 font-display text-3xl font-medium leading-tight">{p.title}</h3>
              <p className="mt-2 text-sm text-ink-mute">{p.artist}</p>
              <p className="mt-4 leading-relaxed text-ink-soft">{p.description}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-varnish">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
          <Reveal>
            <h2 className="max-w-2xl font-display text-4xl font-medium leading-tight text-paper md:text-6xl">
              Bring Strad Plus to Your Region
            </h2>
          </Reveal>
          <div className="mt-10 md:mt-12">
            <ContactPaths tone="varnish" />
          </div>
        </div>
      </section>
    </>
  );
}
