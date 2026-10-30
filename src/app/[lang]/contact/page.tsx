import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ContactPaths from "@/components/contact/ContactPaths";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Strad Plus: evaluation samples for distributors and industry partners, and Strad Plus for musicians and instrument owners.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="How can we help?"
        intro="Choose the option that fits you best, so your request reaches the right people."
        figure={{ n: 2, m: 3 }}
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-20">
        <ContactPaths />

        <div className="mt-16 flex flex-col gap-6 border-t border-line pt-10 sm:flex-row sm:items-center sm:gap-12">
          <h2 className="eyebrow text-varnish">Or reach us directly</h2>
          <a
            href={`mailto:${CONTACT_INFO.email}`}
            className="flex items-center gap-3 font-display text-2xl transition-colors hover:text-varnish"
          >
            <Mail size={18} strokeWidth={1.5} className="text-varnish" />
            {CONTACT_INFO.email}
          </a>
          <a
            href={`tel:${CONTACT_INFO.phoneHref}`}
            className="flex items-center gap-3 font-display text-2xl transition-colors hover:text-varnish"
          >
            <Phone size={18} strokeWidth={1.5} className="text-varnish" />
            {CONTACT_INFO.phone}
          </a>
        </div>
      </section>
    </>
  );
}
