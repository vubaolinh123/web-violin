import { cn } from "@/lib/utils/cn";

interface GoldDividerProps {
  className?: string;
  width?: "sm" | "md" | "lg" | "full";
  centered?: boolean;
}

export default function GoldDivider({
  className,
  width = "md",
  centered = false,
}: GoldDividerProps) {
  const widths = {
    sm: "w-12",
    md: "w-24",
    lg: "w-40",
    full: "w-full",
  };

  return (
    <div className={cn("flex items-center gap-3", centered && "justify-center", className)}>
      <span className={cn("block h-px bg-gradient-to-r from-transparent via-gold to-transparent", widths[width])} />
      <span className="block w-1.5 h-1.5 rotate-45 bg-gold shrink-0" />
      <span className={cn("block h-px bg-gradient-to-r from-transparent via-gold to-transparent", widths[width])} />
    </div>
  );
}
