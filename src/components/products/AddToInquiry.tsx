"use client";

import { useRouter } from "next/navigation";
import { Check, ClipboardList } from "lucide-react";
import { useInquiry } from "@/lib/hooks/useInquiry";
import { cn } from "@/lib/utils/cn";

export default function AddToInquiry({
  slug,
  variant = "solid",
  className,
}: {
  slug: string;
  variant?: "solid" | "outline";
  className?: string;
}) {
  const { items, add } = useInquiry();
  const router = useRouter();
  const inList = items.some((i) => i.product.slug === slug);

  return (
    <div className={cn("flex flex-wrap items-center gap-4", className)}>
      <button
        type="button"
        onClick={() => {
          add(slug);
        }}
        className={cn(
          "inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium tracking-wide transition-colors",
          variant === "solid"
            ? "border border-varnish bg-varnish text-paper hover:border-varnish-dark hover:bg-varnish-dark"
            : "border border-ink/70 text-ink hover:bg-ink hover:text-paper"
        )}
      >
        {inList ? <Check size={16} strokeWidth={1.75} /> : <ClipboardList size={16} strokeWidth={1.5} />}
        {inList ? "Added — add another" : "Add to inquiry"}
      </button>
      {inList && (
        <button
          type="button"
          onClick={() => router.push("/inquiry")}
          className="text-sm font-medium text-varnish underline underline-offset-4 decoration-varnish/30 hover:decoration-varnish"
        >
          View inquiry list
        </button>
      )}
    </div>
  );
}
