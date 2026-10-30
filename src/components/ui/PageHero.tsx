import ChladniArt from "./ChladniArt";
import SectionHeading from "./SectionHeading";

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro?: string;
  figure?: { n: number; m: number };
}

/** Title band for inner pages. */
export default function PageHero({ eyebrow, title, intro, figure = { n: 3, m: 5 } }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-night">
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 opacity-60 md:block" aria-hidden="true">
        <ChladniArt n={figure.n} m={figure.m} width={100} height={70} resolution={90} levels={4} />
        <div className="absolute inset-0 bg-gradient-to-r from-night via-night/60 to-transparent" />
      </div>
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-20">
        <SectionHeading as="h1" tone="dark" eyebrow={eyebrow} title={title} intro={intro} />
      </div>
    </section>
  );
}
