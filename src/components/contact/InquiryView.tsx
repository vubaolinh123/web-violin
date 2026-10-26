"use client";

import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useInquiry } from "@/lib/hooks/useInquiry";
import ContactForm from "./ContactForm";
import ButtonLink from "@/components/ui/ButtonLink";

export default function InquiryView() {
  const { items, setQuantity, remove, clear } = useInquiry();

  return (
    <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
      <div className="grid gap-16 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <h2 className="eyebrow text-varnish">Products of interest</h2>

          {items.length === 0 ? (
            <div className="mt-6 border border-dashed border-line p-8">
              <p className="leading-relaxed text-ink-soft">
                Nothing selected yet. You can browse the products and add what interests you, or simply write
                to us in the form.
              </p>
              <ButtonLink href="/products" variant="outline" className="mt-6">
                Browse products
              </ButtonLink>
            </div>
          ) : (
            <>
              <ul className="mt-6 divide-y divide-line border-y border-line">
                {items.map(({ product, quantity }) => (
                  <li key={product.slug} className="py-5">
                    <Link
                      href={`/products/${product.slug}`}
                      className="font-display text-2xl leading-snug transition-colors hover:text-varnish"
                    >
                      {product.name}
                    </Link>
                    <div className="mt-4 flex items-center justify-between">
                      <div className="flex items-center border border-line" role="group" aria-label="Quantity">
                        <button
                          type="button"
                          onClick={() => setQuantity(product.slug, quantity - 1)}
                          aria-label={`Decrease quantity of ${product.name}`}
                          className="p-2.5 text-ink-soft transition-colors hover:text-varnish"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="min-w-10 text-center text-sm tabular-nums" aria-live="polite">
                          {quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() => setQuantity(product.slug, quantity + 1)}
                          aria-label={`Increase quantity of ${product.name}`}
                          className="p-2.5 text-ink-soft transition-colors hover:text-varnish"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        type="button"
                        onClick={() => remove(product.slug)}
                        aria-label={`Remove ${product.name}`}
                        className="p-2 text-ink-mute transition-colors hover:text-varnish"
                      >
                        <Trash2 size={17} strokeWidth={1.5} />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
              <button
                type="button"
                onClick={clear}
                className="mt-4 text-sm text-ink-mute underline underline-offset-4 transition-colors hover:text-varnish"
              >
                Clear list
              </button>
            </>
          )}
        </div>

        <div className="lg:col-span-7">
          <h2 className="eyebrow text-varnish">Your details</h2>
          <div className="mt-6">
            <ContactForm
              items={items.map((i) => `${i.product.name} × ${i.quantity}`)}
              onSent={clear}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
