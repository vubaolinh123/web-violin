import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import ProductCard from "@/components/products/ProductCard";
import SectionHeading from "@/components/ui/SectionHeading";
import ContactPaths from "@/components/contact/ContactPaths";
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
        title="Strad Plus, from Technology to Product."
        intro="The full Strad Plus treatment applied directly to the instrument, or our bridge and soundpost set derived from the same acoustic technology."
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
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <SectionHeading
            eyebrow="Get in touch"
            title="Bring Strad Plus to your instrument, or your market."
            intro="Pricing and availability are given on request."
          />
          <div className="mt-12">
            <ContactPaths />
          </div>
        </div>
      </section>
    </>
  );
}
