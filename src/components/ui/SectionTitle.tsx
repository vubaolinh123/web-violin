import { cn } from "@/lib/utils/cn";
import GoldDivider from "./GoldDivider";

interface SectionTitleProps {
  overline?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
  showDivider?: boolean;
}

export default function SectionTitle({
  overline,
  title,
  subtitle,
  centered = false,
  light = false,
  className,
  showDivider = true,
}: SectionTitleProps) {
  return (
    <div className={cn("space-y-4", centered && "text-center", className)}>
      {overline && (
        <p className="font-mono text-xs tracking-[0.25em] uppercase text-gold">
          {overline}
        </p>
      )}
      <h2
        className={cn(
          "font-display text-4xl md:text-5xl lg:text-6xl font-light leading-tight",
          light ? "text-charcoal" : "text-parchment"
        )}
      >
        {title}
      </h2>
      {showDivider && <GoldDivider centered={centered} width="md" />}
      {subtitle && (
        <p
          className={cn(
            "font-body text-base md:text-lg leading-relaxed max-w-2xl",
            light ? "text-charcoal-600" : "text-parchment/70",
            centered && "mx-auto"
          )}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
