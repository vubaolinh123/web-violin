import { cn } from "@/lib/utils/cn";

interface LoadingSkeletonProps {
  height?: string;
  width?: string;
  className?: string;
  rounded?: boolean;
  lines?: number;
}

export default function LoadingSkeleton({
  height = "200px",
  width = "100%",
  className,
  rounded = false,
  lines,
}: LoadingSkeletonProps) {
  if (lines) {
    return (
      <div className={cn("space-y-3", className)}>
        {Array.from({ length: lines }).map((_, i) => (
          <div
            key={i}
            className={cn(
              "animate-pulse bg-charcoal-700 rounded",
              i === lines - 1 && "w-2/3"
            )}
            style={{ height: "1rem" }}
          />
        ))}
      </div>
    );
  }

  return (
    <div
      className={cn(
        "animate-pulse bg-charcoal-700",
        rounded ? "rounded-full" : "rounded",
        className
      )}
      style={{ height, width }}
    />
  );
}

export function ProductCardSkeleton() {
  return (
    <div className="space-y-3">
      <LoadingSkeleton height="300px" className="rounded" />
      <LoadingSkeleton height="1rem" width="60%" />
      <LoadingSkeleton height="0.875rem" width="40%" />
      <LoadingSkeleton height="1.25rem" width="30%" />
    </div>
  );
}

export function ProductGridSkeleton({ count = 6 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <ProductCardSkeleton key={i} />
      ))}
    </div>
  );
}
