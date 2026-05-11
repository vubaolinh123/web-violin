import type { Collection } from "@/types/collection";

export const collections: Collection[] = [
  {
    id: "master-series",
    slug: "master-series",
    name: "Master Series",
    description: "Professional instruments for discerning musicians — hand-built to the highest standards.",
    longDescription:
      "The Master Series represents the pinnacle of our craft. Every instrument in this collection is hand-selected, individually adjusted, and certified by our head luthier. Prices start at $3,000 and reflect the true cost of exceptional materials and skilled labor. These are instruments built to last generations.",
    image: "https://picsum.photos/seed/col-master/1200/800",
    productCount: 8,
    priceRange: "$3,000 – $8,500",
    featured: true,
  },
  {
    id: "student-series",
    slug: "student-series",
    name: "Student Series",
    description: "Quality instruments at accessible prices — the best start for any young musician.",
    longDescription:
      "Learning on a good instrument accelerates progress and builds confidence. The Student Series offers solid tonewoods, professional setup, and reliable fittings at prices that won't strain a family budget. From beginner outfits to conservatory-grade instruments, we have the right violin for every stage.",
    image: "https://picsum.photos/seed/col-student/1200/800",
    productCount: 6,
    priceRange: "$265 – $1,200",
    featured: true,
  },
  {
    id: "baroque",
    slug: "baroque",
    name: "Baroque Collection",
    description: "Period instruments and bows for historically informed performance practice.",
    longDescription:
      "The Baroque Collection brings together instruments, bows, and strings designed for historically informed performance. Each item is built or sourced to meet the exacting standards of period performance specialists — from gut-strung violins with Baroque neck angles to snakewood bows with convex cambers.",
    image: "https://picsum.photos/seed/col-baroque/1200/800",
    productCount: 3,
    priceRange: "$980 – $3,400",
    featured: true,
  },
  {
    id: "accessories",
    slug: "accessories",
    name: "Accessories & Care",
    description: "Everything you need to maintain, protect and get the best from your instrument.",
    longDescription:
      "From premium strings and rosins to humidity control systems and professional cases, the Accessories & Care collection keeps your instrument performing at its best. Every product is tested and approved by our in-house luthiers before it earns a place on our shelves.",
    image: "https://picsum.photos/seed/col-accessories/1200/800",
    productCount: 8,
    priceRange: "$14 – $580",
    featured: false,
  },
];

export function getCollectionBySlug(slug: string): Collection | undefined {
  return collections.find((c) => c.slug === slug);
}
