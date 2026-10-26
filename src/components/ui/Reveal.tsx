"use client";

import { m, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils/cn";

interface RevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

/** Gentle fade-and-rise on first scroll into view. */
export default function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reduced = useReducedMotion();

  return (
    <m.div
      initial={{ opacity: 0, y: reduced ? 0 : 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px 0px" }}
      transition={{ duration: reduced ? 0 : 0.7, delay: reduced ? 0 : delay, ease: "easeOut" }}
      className={cn(className)}
    >
      {children}
    </m.div>
  );
}
