import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoEmbed from "@/components/ui/VideoEmbed";
import Gallery from "@/components/ui/Gallery";
import ClipPlayer from "@/components/ui/ClipPlayer";
import { getClips, getGallery } from "@/lib/data/gallery";
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
    workshop: {
      eyebrow: "In the workshop",
      title: "Made by hand.",
      intro: "Short clips from Nguyễn Xuân Huy\u2019s workshop, where each instrument is carved, shaped and finished by hand.",
    },
    pictures: {
      eyebrow: "Pictures",
      title: "The artist and his instruments.",
      intro: "Photographs of Nguyễn Xuân Huy, his porcelain and gold violins, and the Strad Plus violin. Select a picture to view it larger.",
    },
    gallery: { close: "Close", previous: "Previous picture", next: "Next picture" },
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
    workshop: {
      eyebrow: "Trong xưởng",
      title: "Làm hoàn toàn bằng tay.",
      intro: "Những đoạn clip ngắn từ xưởng của Nguyễn Xuân Huy, nơi mỗi cây đàn được chạm khắc, tạo hình và hoàn thiện thủ công.",
    },
    pictures: {
      eyebrow: "Hình ảnh",
      title: "Nghệ sĩ và những cây đàn của ông.",
      intro: "Hình ảnh Nguyễn Xuân Huy, những cây violin sứ và dát vàng, cùng cây violin Strad Plus. Bấm vào ảnh để xem lớn hơn.",
    },
    gallery: { close: "Đóng", previous: "Ảnh trước", next: "Ảnh tiếp theo" },
  },
} satisfies Record<Locale, unknown>;

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await getLang(params);
  return { ...copy[lang].meta, alternates: alternates(lang, "/media") };
}

export default async function MediaPage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = copy[lang];
  const clips = getClips(lang);
  const gallery = getGallery(lang);

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

      <section className="border-t border-paper/10 bg-night">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
          <Reveal>
            <SectionHeading tone="dark" eyebrow={t.workshop.eyebrow} title={t.workshop.title} intro={t.workshop.intro} />
          </Reveal>
          <div className="mt-12 grid gap-8 md:grid-cols-2">
            {clips.map((clip, i) => (
              <Reveal key={clip.src} delay={(i % 2) * 0.1}>
                <ClipPlayer clip={clip} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <Reveal>
          <SectionHeading eyebrow={t.pictures.eyebrow} title={t.pictures.title} intro={t.pictures.intro} />
        </Reveal>
        <div className="mt-12 space-y-14">
          {gallery.map((group) => (
            <div key={group.id}>
              <h3 className="mb-5 font-display text-3xl font-medium leading-tight">{group.title}</h3>
              <Gallery images={group.images} labels={t.gallery} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
