export interface Product {
  slug: string;
  name: string;
  kind: string;
  summary: string;
  description: string[];
  benefitsTitle: string;
  benefits: string[];
  scopeTitle?: string;
  scope?: { group: string; items: string }[];
  /** Photographs, relative to /public. Empty until retouched images are supplied. */
  images: string[];
  /** Parameters of the placeholder acoustic figure shown while there is no photograph. */
  figure: { n: number; m: number };
}

export const products: Product[] = [
  {
    slug: "bridge-and-soundpost-set",
    name: "Strad Plus Bridge & Soundpost Set",
    kind: "Component set",
    summary:
      "A bridge and soundpost, each processed with the Strad Plus formula, supplied as a matched set.",
    description: [
      "The bridge and the soundpost are the two small pieces of wood that carry a violin's vibration from the strings to the body. The Strad Plus set is made from wood that has been treated with the Strad Plus formula, so that the instrument can transmit sound more freely from the first note.",
      "It is a quick way for a player or a workshop to hear what Strad Plus does, without altering the instrument itself.",
    ],
    benefitsTitle: "What players notice",
    benefits: [
      "A clearly louder sound",
      "A more focused, more defined tone",
      "Improved response when the bow meets the string",
      "A smooth, balanced sound when crossing strings",
    ],
    images: [],
    figure: { n: 3, m: 5 },
  },
  {
    slug: "instrument-treatment",
    name: "Strad Plus Applied to Your Instrument",
    kind: "Direct treatment",
    summary:
      "The Strad Plus method applied directly to a wooden instrument, with an effect that can be heard immediately.",
    description: [
      "An instrument treated directly with the Strad Plus method responds at once. Instead of waiting years of playing for a new violin to open up, the instrument begins to speak within minutes.",
      "The treatment is carried out on instruments made of wood, from the bowed strings to the guitar and the piano.",
    ],
    benefitsTitle: "What changes",
    benefits: [
      "The instrument opens up within minutes, with no need for years of playing",
      "Sound that is blended and balanced, yet keeps a clear separation between low, middle and high voices",
      "Greater response in the upper positions, which supports the player's technique",
    ],
    scopeTitle: "Instruments the treatment applies to",
    scope: [
      { group: "Bowed strings", items: "Violin, viola, violoncello, double bass" },
      { group: "Plucked strings", items: "Guitar" },
      { group: "Keyboard", items: "Piano" },
    ],
    images: [],
    figure: { n: 2, m: 7 },
  },
];

export function getProductBySlug(slug: string) {
  return products.find((p) => p.slug === slug);
}
