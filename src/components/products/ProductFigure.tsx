import Image from "next/image";
import type { Product } from "@/lib/data/products";
import ChladniArt from "@/components/ui/ChladniArt";

/**
 * Product picture. Uses the first photograph when one has been supplied,
 * otherwise an acoustic contour figure in the same frame.
 */
export default function ProductFigure({
  product,
  priority = false,
  sizes,
}: {
  product: Product;
  priority?: boolean;
  sizes: string;
}) {
  const photo = product.images[0];

  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden bg-night">
      {photo ? (
        <Image src={photo} alt={product.name} fill sizes={sizes} priority={priority} className="object-cover" />
      ) : (
        <ChladniArt n={product.figure.n} m={product.figure.m} levels={4} resolution={56} />
      )}
    </div>
  );
}
