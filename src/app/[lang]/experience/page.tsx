import type { Metadata } from "next";
import RequestPage from "@/components/contact/RequestPage";
import { alternates, getLang, type LangParams, type Locale } from "@/lib/i18n";

const copy = {
  en: {
    meta: {
      title: "Experience Strad Plus",
      description:
        "For musicians and instrument owners: learn about availability, ordering and how Strad Plus can be applied to your instrument.",
    },
    eyebrow: "For Musicians & Instrument Owners",
    title: "Experience Strad Plus",
    intro: "Hear what Strad Plus can do for the instrument you play.",
    lead: [
      "Interested in experiencing Strad Plus on your own instrument? Contact us to learn about product availability, ordering information and how Strad Plus can be applied to your instrument.",
    ],
  },
  vi: {
    meta: {
      title: "Trải nghiệm Strad Plus",
      description:
        "Dành cho nghệ sĩ và chủ nhạc cụ: tìm hiểu tình trạng sản phẩm, cách đặt hàng và cách Strad Plus được áp dụng cho nhạc cụ của bạn.",
    },
    eyebrow: "Dành cho Nghệ sĩ & Chủ nhạc cụ",
    title: "Trải nghiệm Strad Plus",
    intro: "Lắng nghe điều Strad Plus có thể làm cho cây đàn bạn đang chơi.",
    lead: [
      "Bạn muốn trải nghiệm Strad Plus trên chính cây đàn của mình? Hãy liên hệ để biết về tình trạng sản phẩm, cách đặt hàng và cách Strad Plus được áp dụng cho nhạc cụ của bạn.",
    ],
  },
} satisfies Record<Locale, unknown>;

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await getLang(params);
  return { ...copy[lang].meta, alternates: alternates(lang, "/experience") };
}

export default async function ExperiencePage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = copy[lang];

  return (
    <RequestPage
      lang={lang}
      kind="experience"
      eyebrow={t.eyebrow}
      title={t.title}
      intro={t.intro}
      lead={t.lead}
      figure={{ n: 3, m: 7 }}
    />
  );
}
