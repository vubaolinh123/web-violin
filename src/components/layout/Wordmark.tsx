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
        "whitespace-nowrap font-display text-xl font-semibold uppercase tracking-[0.16em] sm:text-2xl md:text-[1.6rem] md:tracking-[0.2em]",
        tone === "light" ? "text-ink" : "text-paper",
        className
      )}
    >
      Strad <span className={tone === "light" ? "text-varnish" : "text-brass-light"}>Plus</span>
    </span>
  );
}
