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
          "The treatment can be applied wherever wood contributes to the voice and character of an instrument.",
        ],
        benefitsTitle: "What changes",
        benefits: [
          "The instrument begins to speak within minutes, without years of waiting.",
          "A balanced, cohesive tone while maintaining clear separation across low, middle and high registers.",
          "Greater responsiveness in higher positions, allowing for more confident and precise playing.",
        ],
      },
      vi: {
        name: "Quy trình Strad Plus trọn vẹn",
        kind: "Xử lý trực tiếp",
        summary: "Áp dụng trực tiếp lên chính cây đàn, giúp giọng tự nhiên của nhạc cụ được thể hiện trọn vẹn nhất.",
        description: [
          "Nhạc cụ được xử lý trực tiếp bằng phương pháp Strad Plus phản hồi ngay lập tức. Thay vì phải chơi nhiều năm để một cây violin mới “mở tiếng”, cây đàn bắt đầu cất tiếng chỉ sau vài phút.",
          "Quy trình có thể được áp dụng ở bất cứ nơi nào gỗ góp phần tạo nên giọng nói và cá tính của một nhạc cụ.",
        ],
        benefitsTitle: "Những thay đổi",
        benefits: [
          "Cây đàn bắt đầu cất tiếng chỉ sau vài phút, không phải chờ đợi nhiều năm.",
          "Âm thanh cân bằng, liền mạch, đồng thời vẫn tách bạch rõ ràng giữa các âm vực trầm, trung và cao.",
          "Phản hồi tốt hơn ở các thế bấm cao, giúp người chơi tự tin và chính xác hơn.",
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
          "Crafted from wood treated with the Strad Plus method, this bridge and soundpost set brings key benefits of the technology to the violin you already play.",
          "It helps the instrument respond, resonate, and speak more freely from the very first note, without applying the complete Strad Plus process directly to the instrument.",
        ],
        benefitsTitle: "What Players Notice",
        benefits: [
          "Greater volume and projection",
          "A more focused and defined tone",
          "Immediate response",
          "Smoother string crossings",
        ],
      },
      vi: {
        name: "Bộ ngựa đàn & hồn đàn Strad Plus",
        kind: "Bộ linh kiện",
        summary: "Linh kiện được xử lý đặc biệt, mang những ưu điểm cốt lõi của Strad Plus đến cây đàn bạn đang chơi.",
        description: [
          "Được làm từ gỗ đã xử lý bằng phương pháp Strad Plus, bộ ngựa đàn và hồn đàn này mang những lợi ích cốt lõi của công nghệ đến cây violin bạn đang chơi.",
          "Bộ sản phẩm giúp cây đàn phản hồi, cộng hưởng và cất tiếng tự do hơn ngay từ nốt đầu tiên, mà không cần áp dụng toàn bộ quy trình Strad Plus trực tiếp lên nhạc cụ.",
        ],
        benefitsTitle: "Người chơi cảm nhận được",
        benefits: [
          "Âm lượng và độ vang xa lớn hơn",
          "Tiếng đàn tập trung và rõ nét hơn",
          "Phản hồi tức thì",
          "Chuyển dây mượt mà hơn",
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
