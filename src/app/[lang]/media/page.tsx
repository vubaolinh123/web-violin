import type { Metadata } from "next";
import { Image as ImageIcon } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoEmbed from "@/components/ui/VideoEmbed";
import { getDictionary } from "@/lib/dictionary";
import { alternates, getLang, type LangParams, type Locale } from "@/lib/i18n";

const copy = {
  en: {
    meta: {
      title: "Media",
      description:
        "Video and pictures of Strad Plus, including the interview with Nguyễn Xuân Huy and guitarist Vũ Đức Hiển.",
    },
    hero: {
      eyebrow: "Media",
      title: "Video & pictures.",
      intro: "The best way to understand Strad Plus is to listen to it.",
    },
    interview: {
      eyebrow: "Interview",
      title: "Strad Plus on a $400 guitar.",
      intro:
        "Nguyễn Xuân Huy discusses the method with guitarist Vũ Đức Hiển, with Strad Plus applied to a guitar worth four hundred dollars.",
    },
    pictures: {
      eyebrow: "Pictures",
      title: "Photography is on its way.",
      intro: "Retouched photographs of the products and of Strad Plus at work will be published here.",
    },
  },
  vi: {
    meta: {
      title: "Thư viện",
      description:
        "Video và hình ảnh về Strad Plus, gồm buổi trò chuyện cùng Nguyễn Xuân Huy và nghệ sĩ guitar Vũ Đức Hiển.",
    },
    hero: {
      eyebrow: "Thư viện",
      title: "Video & hình ảnh.",
      intro: "Cách tốt nhất để hiểu Strad Plus là lắng nghe nó.",
    },
    interview: {
      eyebrow: "Trò chuyện",
      title: "Strad Plus trên cây guitar 400 đô.",
      intro:
        "Nguyễn Xuân Huy trò chuyện về phương pháp cùng nghệ sĩ guitar Vũ Đức Hiển, với Strad Plus được áp dụng cho một cây guitar giá bốn trăm đô la.",
    },
    pictures: {
      eyebrow: "Hình ảnh",
      title: "Hình ảnh sắp ra mắt.",
      intro: "Hình ảnh chỉn chu về sản phẩm và Strad Plus khi ứng dụng thực tế sẽ được đăng tải tại đây.",
    },
  },
} satisfies Record<Locale, unknown>;

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await getLang(params);
  return { ...copy[lang].meta, alternates: alternates(lang, "/media") };
}

export default async function MediaPage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = copy[lang];

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro} figure={{ n: 3, m: 8 }} />

      <section className="bg-night">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 md:py-20">
          <Reveal>
            <SectionHeading tone="dark" eyebrow={t.interview.eyebrow} title={t.interview.title} intro={t.interview.intro} />
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <VideoEmbed text={getDictionary(lang).video} />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <Reveal>
          <SectionHeading eyebrow={t.pictures.eyebrow} title={t.pictures.title} intro={t.pictures.intro} />
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div
              key={i}
              className="flex aspect-[4/5] items-center justify-center border border-dashed border-line bg-paper-deep/50 text-line"
              aria-hidden="true"
            >
              <ImageIcon size={32} strokeWidth={1} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
