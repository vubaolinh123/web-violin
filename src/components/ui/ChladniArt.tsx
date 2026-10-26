import Image from "next/image";
import { cn } from "@/lib/utils/cn";

interface ChladniArtProps {
  /** Mode numbers of the vibration pattern. Different pairs give different figures. */
  n?: number;
  m?: number;
  width?: number;
  height?: number;
  /** Number of contour levels either side of the nodal line. */
  levels?: number;
  /** Grid resolution along the x axis; y follows the aspect ratio. */
  resolution?: number;
  tone?: "dark" | "light";
  alt?: string;
  className?: string;
}

/**
 * Contour map of a vibrating wooden plate, served as a cached SVG from /art
 * so the line data never bloats the page HTML. Fills its positioned parent.
 */
export default function ChladniArt({
  n = 3,
  m = 5,
  width = 100,
  height = 125,
  levels = 3,
  resolution = 48,
  tone = "dark",
  alt = "",
  className,
}: ChladniArtProps) {
  const src = `/art/${tone}-${n}-${m}-${width}x${height}-${resolution}-${levels}.svg`;

  return (
    <Image
      src={src}
      alt={alt}
      fill
      unoptimized
      aria-hidden={alt ? undefined : true}
      className={cn("object-cover", className)}
    />
  );
}
