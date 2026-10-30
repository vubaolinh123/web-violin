import { ArrowRight } from "lucide-react";
import ButtonLink from "@/components/ui/ButtonLink";
import Reveal from "@/components/ui/Reveal";
import { getDictionary } from "@/lib/dictionary";
import { localePath, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils/cn";

/** The two audiences side by side, each with its own way to get in touch. */
export default function ContactPaths({ lang, tone = "light" }: { lang: Locale; tone?: "light" | "varnish" }) {
  const onVarnish = tone === "varnish";
  const paths = getDictionary(lang).contactPaths;
  return (
    <div
      className={cn(
        "grid gap-px md:grid-cols-2",
        onVarnish ? "bg-paper/20" : "border border-line bg-line"
      )}
    >
      {paths.map((path, i) => (
        <Reveal
          key={path.id}
          delay={i * 0.1}
          className={cn("flex flex-col p-8 md:p-12", onVarnish ? "bg-varnish" : "bg-paper")}
        >
          <p className={cn("eyebrow", onVarnish ? "text-paper/60" : "text-varnish")}>0{i + 1}</p>
          <h3
            className={cn(
              "mt-4 font-display text-3xl font-medium leading-tight md:text-[2.1rem]",
              onVarnish ? "text-paper" : "text-ink"
            )}
          >
            {path.title}
          </h3>
          <p className={cn("mt-4 max-w-md flex-1 leading-relaxed", onVarnish ? "text-paper/80" : "text-ink-soft")}>
            {path.description}
          </p>
          <ButtonLink
            href={localePath(lang, path.href)}
            variant={onVarnish ? "solid" : i === 0 ? "solid" : "outline"}
            className={cn(
              "mt-8 self-start",
              onVarnish && "border-paper bg-paper text-varnish hover:border-brass-light hover:bg-brass-light hover:text-night"
            )}
          >
            {path.cta} <ArrowRight size={15} strokeWidth={1.5} />
          </ButtonLink>
        </Reveal>
      ))}
    </div>
  );
}
