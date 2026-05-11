"use client";

import { cn } from "@/lib/utils/cn";
import { forwardRef, type ButtonHTMLAttributes } from "react";

type Variant = "primary" | "secondary" | "ghost" | "outline";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  shimmer?: boolean;
  fullWidth?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      shimmer = false,
      fullWidth = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-body font-medium tracking-wide transition-all duration-300 cursor-pointer select-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold disabled:opacity-50 disabled:cursor-not-allowed";

    const variants: Record<Variant, string> = {
      primary: shimmer
        ? "btn-shimmer text-charcoal shadow-lg hover:shadow-gold/30 hover:shadow-xl"
        : "bg-gold hover:bg-gold-light text-charcoal shadow-lg hover:shadow-gold/30 hover:shadow-xl",
      secondary:
        "bg-charcoal-700 hover:bg-charcoal-600 text-parchment border border-charcoal-600 hover:border-gold/40",
      ghost:
        "bg-transparent hover:bg-charcoal-700 text-parchment hover:text-gold",
      outline:
        "bg-transparent border border-gold/60 hover:border-gold text-gold hover:bg-gold/10",
    };

    const sizes: Record<Size, string> = {
      sm: "px-4 py-2 text-sm rounded",
      md: "px-6 py-3 text-base rounded",
      lg: "px-8 py-4 text-lg rounded-sm",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(
          base,
          variants[variant],
          sizes[size],
          fullWidth && "w-full",
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
