import { Mail, Phone } from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/ui/PageHero";
import RequestForm from "./RequestForm";
import { CONTACT_INFO, CONTACT_PATHS } from "@/lib/constants";
import type { FormKind } from "@/lib/forms";

interface RequestPageProps {
  kind: FormKind;
  eyebrow: string;
  title: string;
  intro: string;
  /** Longer introduction shown beside the form. */
  lead: string[];
  figure: { n: number; m: number };
}

/** Layout shared by the two request pages: title band, introduction, form and direct contact. */
export default function RequestPage({ kind, eyebrow, title, intro, lead, figure }: RequestPageProps) {
  const other = CONTACT_PATHS.find((p) => p.id !== (kind === "evaluation" ? "partners" : "musicians"));

  return (
    <>
      <PageHero eyebrow={eyebrow} title={title} intro={intro} figure={figure} />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-20">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-16">
          <aside className="lg:col-span-4">
            <div className="prose-strad text-lg leading-relaxed text-ink-soft">
              {lead.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>

            <div className="mt-10 border-t border-line pt-8">
              <h2 className="eyebrow text-varnish">Or reach us directly</h2>
              <ul className="mt-5 space-y-3 text-ink-soft">
                <li className="flex items-center gap-3">
                  <Mail size={17} strokeWidth={1.5} className="shrink-0 text-varnish" />
                  <a href={`mailto:${CONTACT_INFO.email}`} className="transition-colors hover:text-varnish">
                    {CONTACT_INFO.email}
                  </a>
                </li>
                <li className="flex items-center gap-3">
                  <Phone size={17} strokeWidth={1.5} className="shrink-0 text-varnish" />
                  <a href={`tel:${CONTACT_INFO.phoneHref}`} className="transition-colors hover:text-varnish">
                    {CONTACT_INFO.phone}
                  </a>
                </li>
              </ul>
            </div>

            {other && (
              <p className="mt-10 text-sm leading-relaxed text-ink-mute">
                {other.question}{" "}
                <Link href={other.href} className="text-varnish underline underline-offset-4 decoration-varnish/30 hover:decoration-varnish">
                  {other.cta}
                </Link>
              </p>
            )}
          </aside>

          <div className="lg:col-span-8">
            <RequestForm kind={kind} />
          </div>
        </div>
      </section>
    </>
  );
}
