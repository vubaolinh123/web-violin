import Link from "next/link";
import { cn } from "@/lib/utils/cn";

type Variant = "solid" | "outline" | "outline-light" | "text";

const variants: Record<Variant, string> = {
  solid: "bg-varnish text-paper hover:bg-varnish-dark border border-varnish hover:border-varnish-dark",
  outline: "border border-ink/70 text-ink hover:bg-ink hover:text-paper",
  "outline-light": "border border-paper/60 text-paper hover:bg-paper hover:text-ink",
  text: "text-varnish hover:text-varnish-dark underline underline-offset-4 decoration-varnish/30 hover:decoration-varnish px-0 py-0",
};

interface ButtonLinkProps {
  href: string;
  variant?: Variant;
  children: React.ReactNode;
  className?: string;
  external?: boolean;
}

export default function ButtonLink({
  href,
  variant = "solid",
  children,
  className,
  external,
}: ButtonLinkProps) {
  const classes = cn(
    "inline-flex items-center justify-center gap-2 text-sm font-medium tracking-wide transition-colors duration-300",
    variant !== "text" && "px-7 py-3.5",
    variants[variant],
    className
  );

  if (external) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
