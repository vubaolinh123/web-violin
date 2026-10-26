import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ProductCard from "@/components/products/ProductCard";
import ButtonLink from "@/components/ui/ButtonLink";
import { products } from "@/lib/data/products";

export const metadata: Metadata = {
  title: "Products",
  description:
    "The Strad Plus bridge and soundpost set, and the Strad Plus method applied directly to wooden instruments.",
};

export default function ProductsPage() {
  return (
    <>
      <PageHero
        eyebrow="Products"
        title="Strad Plus, ready to use."
        intro="Two ways to bring the formula to an instrument. Pricing and availability are given on inquiry."
        figure={{ n: 4, m: 7 }}
      />

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-28">
        <div className="grid gap-14 md:grid-cols-2 md:gap-16">
          {products.map((p, i) => (
            <Reveal key={p.slug} delay={i * 0.1}>
              <ProductCard product={p} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center">
          <div className="max-w-xl">
            <h2 className="font-display text-4xl font-medium leading-tight">Distributor or workshop?</h2>
            <p className="mt-3 leading-relaxed text-ink-soft">
              Tell us what you are interested in and we will respond with terms and availability.
            </p>
          </div>
          <ButtonLink href="/inquiry">Start an inquiry</ButtonLink>
        </div>
      </section>
    </>
  );
}
