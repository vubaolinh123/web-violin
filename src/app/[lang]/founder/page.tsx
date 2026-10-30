import type { Metadata } from "next";
import ChladniArt from "@/components/ui/ChladniArt";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";

export const metadata: Metadata = {
  title: "Founder — Nguyễn Xuân Huy",
  description:
    "Nguyễn Xuân Huy: violinist, master craftsman and scientific researcher, founder of Strad Plus. Trained at the Hanoi Conservatory and the Tchaikovsky Moscow State Conservatory.",
};

const education = [
  {
    place: "Hanoi Conservatory",
    note: "Today the Vietnam National Academy of Music.",
  },
  {
    place: "Tchaikovsky Moscow State Conservatory",
    note: "Gained admission with outstanding results.",
  },
];

export default function FounderPage() {
  return (
    <>
      <PageHero
        eyebrow="Founder"
        title="Nguyễn Xuân Huy"
        intro="Violinist, master craftsman and scientific researcher."
        figure={{ n: 2, m: 5 }}
      />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-night md:sticky md:top-28">
              <ChladniArt n={2} m={5} levels={4} resolution={56} />
            </div>
          </Reveal>

          <div className="md:col-span-8">
            <Reveal>
              <SectionHeading eyebrow="Biography" title="Born into music." />
              <div className="prose-strad mt-8 text-lg leading-relaxed text-ink-soft">
                <p>
                  Nguyễn Xuân Huy was born into a family with a tradition in the arts. His father was a
                  violinist from the Shanghai Conservatory, his mother is a well-known vocalist in Vietnam,
                  and his sister is a DanceSport Master of Sport.
                </p>
                <p>
                  He is himself a celebrated violinist, and beyond the concert stage he is a craftsman and a
                  scientific researcher. More than thirty years of study, experiment and persistence led to
                  Strad Plus.
                </p>
              </div>
            </Reveal>

            <Reveal className="mt-16">
              <h3 className="eyebrow text-varnish">Education</h3>
              <ol className="mt-6 divide-y divide-line border-y border-line">
                {education.map((e) => (
                  <li key={e.place} className="py-6">
                    <p className="font-display text-2xl font-medium leading-snug">{e.place}</p>
                    <p className="mt-1 text-ink-soft">{e.note}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm text-ink-mute">
                A fuller biography will be added here.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center">
          <h2 className="max-w-xl font-display text-4xl font-medium leading-tight">
            Hear him explain the method.
          </h2>
          <ButtonLink href="/media" variant="outline">
            Watch the interview
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
