import { cn } from "@/lib/utils/cn";

export default function Wordmark({
  tone = "light",
  className,
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  return (
    <span
      className={cn(
        "font-display text-2xl font-semibold uppercase tracking-[0.22em] md:text-[1.7rem]",
        tone === "light" ? "text-ink" : "text-paper",
        className
      )}
    >
      Strad
      <span className={tone === "light" ? "text-varnish" : "text-brass-light"}>+</span>
    </span>
  );
}
