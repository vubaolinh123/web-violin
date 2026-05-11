"use client";

import { m, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  duration?: number;
  once?: boolean;
}

export default function AnimatedSection({
  children,
  className,
  delay = 0,
  direction = "up",
  duration = 0.6,
  once = true,
}: AnimatedSectionProps) {
  const prefersReduced = useReducedMotion();

  const offsets: Record<string, { x?: number; y?: number }> = {
    up: { y: prefersReduced ? 0 : 32 },
    down: { y: prefersReduced ? 0 : -32 },
    left: { x: prefersReduced ? 0 : 32 },
    right: { x: prefersReduced ? 0 : -32 },
    none: {},
  };

  const initial = { opacity: 0, ...offsets[direction] };
  const animate = { opacity: 1, x: 0, y: 0 };

  return (
    <m.div
      initial={initial}
      whileInView={animate}
      viewport={{ once, margin: "-100px 0px" }}
      transition={{ duration: prefersReduced ? 0 : duration, delay: prefersReduced ? 0 : delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </m.div>
  );
}
