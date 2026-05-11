import { cn } from "@/lib/utils/cn";

type BadgeVariant = "gold" | "dark" | "outline" | "success" | "muted";

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export default function Badge({
  children,
  variant = "gold",
  className,
}: BadgeProps) {
  const variants: Record<BadgeVariant, string> = {
    gold: "bg-gold/20 text-gold-light border border-gold/30",
    dark: "bg-charcoal-700 text-parchment border border-charcoal-600",
    outline: "bg-transparent text-gold border border-gold/60",
    success: "bg-emerald-900/40 text-emerald-400 border border-emerald-800/50",
    muted: "bg-charcoal-600 text-parchment/60 border border-charcoal-600",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-0.5 rounded text-xs font-mono font-medium tracking-wider uppercase",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
