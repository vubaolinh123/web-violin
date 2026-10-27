import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ChladniArt from "@/components/ui/ChladniArt";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { applications } from "@/lib/data/applications";

export const metadata: Metadata = {
  title: "The Technology",
  description:
    "How Strad Plus works: a proprietary acoustic process, applied to specific points within the wood, that changes how vibration travels through the material.",
};

const sections = [
  { id: "beginning", label: "The Beginning" },
  { id: "discovery", label: "The Discovery" },
  { id: "how-it-works", label: "How It Works" },
  { id: "results", label: "What It Changes" },
  { id: "applications", label: "Fields of Application" },
  { id: "in-practice", label: "See It In Practice" },
];

const principles = [
  { title: "Nothing added", text: "No material is added to the wood." },
  { title: "Structure untouched", text: "The construction of the instrument is not modified." },
  { title: "Specific points", text: "A proprietary acoustic process is applied to specific points within the wood." },
];

/** Draft wording, drawn from what players report; to be confirmed. */
const results = [
  { title: "Resonance", text: "The wood vibrates more freely, giving a fuller, richer sound." },
  { title: "Responsiveness", text: "The instrument answers the player sooner and more directly." },
  { title: "Clarity & balance", text: "A blended sound that still keeps a clear separation between voices." },
  { title: "Immediacy", text: "The change is heard within minutes, not after years of playing." },
];

const practice = [
  {
    title: "Products",
    text: "The Complete Strad Plus Process and the Strad Plus Bridge & Soundpost Set.",
    href: "/products",
    cta: "View products",
  },
  {
    title: "Media",
    text: "Videos and pictures of Strad Plus at work, including the $400 guitar interview.",
    href: "/media",
    cta: "Watch & see",
  },
];

function Eyebrow({ index }: { index: number }) {
  return (
    <span className="tabular-nums">
      0{index + 1} — {sections[index].label}
    </span>
  );
}

export default function TechnologyPage() {
  return (
    <>
      <PageHero
        eyebrow="The Technology"
        title="What is Strad Plus?"
        intro="A proprietary method that enhances the way wood resonates, responds, and transmits vibration."
        figure={{ n: 3, m: 5 }}
      />

      {/* Section index */}
      <nav aria-label="On this page" className="border-b border-line bg-paper-deep/60">
        <ol className="mx-auto flex max-w-7xl gap-x-8 gap-y-2 overflow-x-auto px-5 py-4 text-xs font-medium uppercase tracking-[0.14em] text-ink-soft sm:px-8">
          {sections.map((s, i) => (
            <li key={s.id} className="shrink-0">
              <a href={`#${s.id}`} className="transition-colors hover:text-varnish">
                <span className="text-varnish">0{i + 1}</span> {s.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* 01 The Beginning */}
      <section id="beginning" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-28">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <SectionHeading eyebrow={<Eyebrow index={0} />} title="Inspired by Stradivari." />
          </Reveal>
          <Reveal delay={0.1} className="prose-strad text-lg leading-relaxed text-ink-soft md:col-span-7">
            <p>
              For three centuries, the instruments of Antonio Stradivari have been the reference for what a
              violin can sound like. Strad Plus began with a persistent ambition: to understand and recreate the
              extraordinary acoustic qualities that made those instruments legendary.
            </p>
            <p>
              Violinist, craftsman and researcher Nguyễn Xuân Huy devoted more than thirty years to that question,
              researching, testing and refining his ideas before ultimately developing Strad Plus.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 02 The Discovery */}
      <section id="discovery" className="scroll-mt-24 border-y border-line bg-paper-deep/60">
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
            <SectionHeading eyebrow={<Eyebrow index={1} />} title="The acoustic DNA of wood." />
            <ol className="mt-10 divide-y divide-line border-y border-line">
              {[
                "Every piece of wood possesses unique acoustic characteristics.",
                "Strad Plus identifies and works with these characteristics to modify the way vibration travels through the material.",
              ].map((point, i) => (
                <li key={point} className="flex gap-6 py-6">
                  <span className="font-display text-3xl leading-none text-varnish">{i + 1}</span>
                  <p className="font-display text-2xl leading-snug text-ink">{point}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 03 How It Works */}
      <section id="how-it-works" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow={<Eyebrow index={2} />}
            title="Working with the wood, not against it."
            intro="Rather than adding material or modifying the structure of an instrument, Strad Plus works by applying a proprietary acoustic process to specific points within the wood."
          />
        </Reveal>
        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="bg-paper p-8 md:p-10">
              <h3 className="font-display text-3xl font-medium leading-tight">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 04 What It Changes */}
      <section id="results" className="scroll-mt-24 bg-night">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-28">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow={<Eyebrow index={3} />}
              title="What it changes."
              intro="What players and listeners notice once the wood has been treated."
            />
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {results.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08} className="border-t border-paper/20 pt-6">
                <h3 className="font-display text-2xl font-medium text-paper">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-paper/70">{r.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Fields of Application */}
      <section id="applications" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow={<Eyebrow index={4} />}
            title="One Technology, Endless Possibilities"
            intro="Wherever wood matters, Strad Plus makes a difference."
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
                <p className="mt-5 text-sm text-ink-mute">{a.examples}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 06 See It In Practice */}
      <section id="in-practice" className="scroll-mt-24 border-t border-line bg-paper-deep/60">
        <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-28">
          <Reveal>
            <SectionHeading eyebrow={<Eyebrow index={5} />} title="See it in practice." />
          </Reveal>
          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
            {practice.map((p, i) => (
              <Reveal key={p.href} delay={i * 0.1} className="bg-paper">
                <Link href={p.href} className="group flex h-full flex-col p-8 md:p-10">
                  <h3 className="font-display text-3xl font-medium leading-tight transition-colors group-hover:text-varnish">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{p.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-varnish transition-all group-hover:gap-3">
                    {p.cta} <ArrowRight size={15} strokeWidth={1.5} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
