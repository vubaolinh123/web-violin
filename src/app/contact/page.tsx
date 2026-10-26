import type { Metadata } from "next";
import { Mail, Phone } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import { CONTACT_INFO } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Strad Plus: distributor and workshop enquiries, press, and artists interested in the technology.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let us talk."
        intro="For distribution, workshops, press, or to work with an artist on a project."
        figure={{ n: 2, m: 3 }}
      />

      <section className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-28">
        <div className="grid gap-16 md:grid-cols-12">
          <aside className="md:col-span-4">
            <h2 className="eyebrow text-varnish">Direct</h2>
            <ul className="mt-6 space-y-6">
              <li className="flex gap-4">
                <Mail size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-varnish" />
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-ink-mute">Email</p>
                  <a
                    href={`mailto:${CONTACT_INFO.email}`}
                    className="mt-1 block font-display text-2xl transition-colors hover:text-varnish"
                  >
                    {CONTACT_INFO.email}
                  </a>
                </div>
              </li>
              <li className="flex gap-4">
                <Phone size={20} strokeWidth={1.5} className="mt-1 shrink-0 text-varnish" />
                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-ink-mute">Phone</p>
                  <a
                    href={`tel:${CONTACT_INFO.phoneHref}`}
                    className="mt-1 block font-display text-2xl transition-colors hover:text-varnish"
                  >
                    {CONTACT_INFO.phone}
                  </a>
                </div>
              </li>
            </ul>
          </aside>

          <div className="md:col-span-8">
            <h2 className="eyebrow text-varnish">Send a message</h2>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
