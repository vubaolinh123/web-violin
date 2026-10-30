import type { Metadata } from "next";
import RequestPage from "@/components/contact/RequestPage";
import { alternates, getLang, type LangParams, type Locale } from "@/lib/i18n";

const copy = {
  en: {
    meta: {
      title: "Request an Evaluation Sample",
      description:
        "For distributors, instrument shops, workshops, manufacturers and industry partners: request a Strad Plus evaluation sample.",
    },
    eyebrow: "For Distributors & Industry Partners",
    title: "Request an Evaluation Sample",
    intro: "We believe Strad Plus should be experienced firsthand.",
    lead: [
      "If you are a distributor, instrument shop, workshop, manufacturer or industry partner interested in evaluating Strad Plus, please tell us more about yourself below.",
    ],
  },
  vi: {
    meta: {
      title: "Yêu cầu mẫu trải nghiệm",
      description:
        "Dành cho nhà phân phối, cửa hàng nhạc cụ, xưởng chế tác, nhà sản xuất và đối tác trong ngành: yêu cầu mẫu trải nghiệm Strad Plus.",
    },
    eyebrow: "Dành cho Nhà phân phối & Đối tác",
    title: "Yêu cầu mẫu trải nghiệm",
    intro: "Chúng tôi tin rằng Strad Plus cần được trải nghiệm tận tai.",
    lead: [
      "Nếu bạn là nhà phân phối, cửa hàng nhạc cụ, xưởng chế tác, nhà sản xuất hoặc đối tác trong ngành muốn trải nghiệm Strad Plus, hãy cho chúng tôi biết thêm về bạn qua biểu mẫu bên dưới.",
    ],
  },
} satisfies Record<Locale, unknown>;

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await getLang(params);
  return { ...copy[lang].meta, alternates: alternates(lang, "/request-evaluation") };
}

export default async function RequestEvaluationPage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = copy[lang];

  return (
    <RequestPage
      lang={lang}
      kind="evaluation"
      eyebrow={t.eyebrow}
      title={t.title}
      intro={t.intro}
      lead={t.lead}
      figure={{ n: 4, m: 5 }}
    />
  );
}
