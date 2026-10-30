import type { Locale } from "@/lib/i18n";

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

type ProductText = Omit<Product, "slug" | "images" | "figure">;

interface ProductEntry {
  slug: string;
  images: string[];
  figure: { n: number; m: number };
  text: Record<Locale, ProductText>;
}

const entries: ProductEntry[] = [
  {
    slug: "instrument-treatment",
    images: [],
    figure: { n: 2, m: 7 },
    text: {
      en: {
        name: "The Complete Strad Plus Process",
        kind: "Direct treatment",
        summary:
          "Applied directly to the instrument itself, delivering the fullest expression of its natural voice.",
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
      },
      vi: {
        name: "Quy trình Strad Plus trọn vẹn",
        kind: "Xử lý trực tiếp",
        summary: "Áp dụng trực tiếp lên chính cây đàn, giúp giọng tự nhiên của nhạc cụ được thể hiện trọn vẹn nhất.",
        description: [
          "Nhạc cụ được xử lý trực tiếp bằng phương pháp Strad Plus phản hồi ngay lập tức. Thay vì phải chơi nhiều năm để một cây violin mới “mở tiếng”, cây đàn bắt đầu cất tiếng chỉ sau vài phút.",
          "Quy trình được thực hiện trên các nhạc cụ làm từ gỗ, từ các loại đàn dây kéo vĩ đến guitar và piano.",
        ],
        benefitsTitle: "Những thay đổi",
        benefits: [
          "Cây đàn mở tiếng chỉ sau vài phút, không cần chơi nhiều năm",
          "Âm thanh hoà quyện và cân bằng, nhưng vẫn tách bạch rõ giữa các âm vực trầm, trung và cao",
          "Phản hồi tốt hơn ở các thế bấm cao, hỗ trợ kỹ thuật của người chơi",
        ],
        scopeTitle: "Các nhạc cụ áp dụng",
        scope: [
          { group: "Đàn dây kéo vĩ", items: "Violin, viola, cello, contrabass" },
          { group: "Đàn dây gảy", items: "Guitar" },
          { group: "Đàn phím", items: "Piano" },
        ],
      },
    },
  },
  {
    slug: "bridge-and-soundpost-set",
    images: [],
    figure: { n: 3, m: 5 },
    text: {
      en: {
        name: "Strad Plus Bridge & Soundpost Set",
        kind: "Component set",
        summary:
          "Specially prepared components that bring key Strad Plus benefits to the instrument you already play.",
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
      },
      vi: {
        name: "Bộ ngựa đàn & hồn đàn Strad Plus",
        kind: "Bộ linh kiện",
        summary: "Linh kiện được xử lý đặc biệt, mang những ưu điểm cốt lõi của Strad Plus đến cây đàn bạn đang chơi.",
        description: [
          "Ngựa đàn và hồn đàn là hai chi tiết gỗ nhỏ truyền dao động của cây violin từ dây đàn xuống thân đàn. Bộ Strad Plus được làm từ gỗ đã xử lý bằng công thức Strad Plus, giúp cây đàn truyền âm tự do hơn ngay từ nốt đầu tiên.",
          "Đây là cách nhanh chóng để người chơi hoặc xưởng đàn cảm nhận Strad Plus mà không phải can thiệp vào chính cây đàn.",
        ],
        benefitsTitle: "Người chơi cảm nhận được",
        benefits: [
          "Âm lượng lớn hơn rõ rệt",
          "Tiếng đàn tập trung và rõ nét hơn",
          "Phản hồi tốt hơn khi vĩ chạm dây",
          "Âm thanh mượt mà, cân bằng khi chuyển dây",
        ],
      },
    },
  },
];

export function getProducts(lang: Locale): Product[] {
  return entries.map(({ text, ...rest }) => ({ ...rest, ...text[lang] }));
}

export const PRODUCT_SLUGS = entries.map((e) => e.slug);

export function getProductBySlug(lang: Locale, slug: string) {
  return getProducts(lang).find((p) => p.slug === slug);
}
