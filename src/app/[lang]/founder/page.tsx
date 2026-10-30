import type { Metadata } from "next";
import ChladniArt from "@/components/ui/ChladniArt";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import { alternates, getLang, localePath, type LangParams, type Locale } from "@/lib/i18n";

const copy = {
  en: {
    meta: {
      title: "Founder — Nguyễn Xuân Huy",
      description:
        "Nguyễn Xuân Huy: violinist, master craftsman and scientific researcher, founder of Strad Plus. Trained at the Hanoi Conservatory and the Tchaikovsky Moscow State Conservatory.",
    },
    hero: { eyebrow: "Founder", intro: "Violinist, master craftsman and scientific researcher." },
    biography: {
      eyebrow: "Biography",
      title: "Born into music.",
      paragraphs: [
        "Nguyễn Xuân Huy was born into a family with a tradition in the arts. His father was a violinist from the Shanghai Conservatory, his mother is a well-known vocalist in Vietnam, and his sister is a DanceSport Master of Sport.",
        "He is himself a celebrated violinist, and beyond the concert stage he is a craftsman and a scientific researcher. More than thirty years of study, experiment and persistence led to Strad Plus.",
      ],
    },
    educationTitle: "Education",
    education: [
      { place: "Hanoi Conservatory", note: "Today the Vietnam National Academy of Music." },
      { place: "Tchaikovsky Moscow State Conservatory", note: "Gained admission with outstanding results." },
    ],
    fuller: "A fuller biography will be added here.",
    interview: { title: "Hear him explain the method.", cta: "Watch the interview" },
  },
  vi: {
    meta: {
      title: "Nhà sáng lập — Nguyễn Xuân Huy",
      description:
        "Nguyễn Xuân Huy: nghệ sĩ violin, nghệ nhân và nhà nghiên cứu khoa học, người sáng lập Strad Plus. Theo học tại Nhạc viện Hà Nội và Nhạc viện Quốc gia Tchaikovsky Moskva.",
    },
    hero: { eyebrow: "Nhà sáng lập", intro: "Nghệ sĩ violin, nghệ nhân bậc thầy và nhà nghiên cứu khoa học." },
    biography: {
      eyebrow: "Tiểu sử",
      title: "Sinh ra trong âm nhạc.",
      paragraphs: [
        "Nguyễn Xuân Huy sinh ra trong một gia đình có truyền thống nghệ thuật. Cha ông là nghệ sĩ violin tốt nghiệp Nhạc viện Thượng Hải, mẹ ông là ca sĩ nổi tiếng tại Việt Nam, và em gái ông là Kiện tướng Dancesport.",
        "Bản thân ông là một nghệ sĩ violin tài danh; ngoài sân khấu biểu diễn, ông còn là nghệ nhân và nhà nghiên cứu khoa học. Hơn ba mươi năm học hỏi, thử nghiệm và bền bỉ đã dẫn tới Strad Plus.",
      ],
    },
    educationTitle: "Học vấn",
    education: [
      { place: "Nhạc viện Hà Nội", note: "Nay là Học viện Âm nhạc Quốc gia Việt Nam." },
      { place: "Nhạc viện Quốc gia Tchaikovsky Moskva", note: "Trúng tuyển với thành tích xuất sắc." },
    ],
    fuller: "Tiểu sử đầy đủ hơn sẽ sớm được cập nhật tại đây.",
    interview: { title: "Nghe ông chia sẻ về phương pháp.", cta: "Xem buổi trò chuyện" },
  },
} satisfies Record<Locale, unknown>;

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await getLang(params);
  return { ...copy[lang].meta, alternates: alternates(lang, "/founder") };
}

export default async function FounderPage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = copy[lang];

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title="Nguyễn Xuân Huy" intro={t.hero.intro} figure={{ n: 2, m: 5 }} />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-night md:sticky md:top-28">
              <ChladniArt n={2} m={5} levels={4} resolution={56} />
            </div>
          </Reveal>

          <div className="md:col-span-8">
            <Reveal>
              <SectionHeading eyebrow={t.biography.eyebrow} title={t.biography.title} />
              <div className="prose-strad mt-8 text-lg leading-relaxed text-ink-soft">
                {t.biography.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>

            <Reveal className="mt-16">
              <h3 className="eyebrow text-varnish">{t.educationTitle}</h3>
              <ol className="mt-6 divide-y divide-line border-y border-line">
                {t.education.map((e) => (
                  <li key={e.place} className="py-6">
                    <p className="font-display text-2xl font-medium leading-snug">{e.place}</p>
                    <p className="mt-1 text-ink-soft">{e.note}</p>
                  </li>
                ))}
              </ol>
              <p className="mt-6 text-sm text-ink-mute">{t.fuller}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-paper-deep/60">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center">
          <h2 className="max-w-xl font-display text-4xl font-medium leading-tight">{t.interview.title}</h2>
          <ButtonLink href={localePath(lang, "/media")} variant="outline">
            {t.interview.cta}
          </ButtonLink>
        </div>
      </section>
    </>
  );
}
