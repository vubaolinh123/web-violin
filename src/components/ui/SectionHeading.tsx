import { cn } from "@/lib/utils/cn";

interface SectionHeadingProps {
  eyebrow?: React.ReactNode;
  title: string;
  intro?: string;
  centered?: boolean;
  tone?: "light" | "dark";
  as?: "h1" | "h2";
  className?: string;
}

export default function SectionHeading({
  eyebrow,
  title,
  intro,
  centered = false,
  tone = "light",
  as: Tag = "h2",
  className,
}: SectionHeadingProps) {
  const dark = tone === "dark";
  return (
    <div className={cn("max-w-2xl", centered && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className={cn("eyebrow mb-4", dark ? "text-brass-light" : "text-varnish")}>
          {eyebrow}
        </p>
      )}
      <Tag
        className={cn(
          "font-display text-4xl font-medium leading-[1.1] md:text-5xl",
          dark ? "text-paper" : "text-ink"
        )}
      >
        {title}
      </Tag>
      {intro && (
        <p
          className={cn(
            "mt-5 text-base leading-relaxed md:text-lg",
            dark ? "text-paper/70" : "text-ink-soft"
          )}
        >
          {intro}
        </p>
      )}
    </div>
  );
}
