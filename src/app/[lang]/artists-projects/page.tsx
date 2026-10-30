import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import ButtonLink from "@/components/ui/ButtonLink";
import ChladniArt from "@/components/ui/ChladniArt";
import { getProjects } from "@/lib/data/projects";
import { alternates, getLang, localePath, type LangParams, type Locale } from "@/lib/i18n";

const copy = {
  en: {
    meta: { title: "Artists & Projects", description: "Musicians, makers and projects working with Strad Plus." },
    hero: {
      eyebrow: "Artists & Projects",
      title: "Who is working with Strad Plus.",
      intro: "Musicians, makers and projects that have put the formula to use.",
    },
    watch: "Watch the interview",
    more: {
      eyebrow: "More to come",
      title: "This list is growing.",
      intro:
        "Further artists and projects will be published here as they are confirmed. If you play, build or restore instruments and would like to work with Strad Plus, we would like to hear from you.",
      cta: "Contact us",
    },
  },
  vi: {
    meta: {
      title: "Nghệ sĩ & Dự án",
      description: "Những nghệ sĩ, người làm đàn và dự án đang làm việc cùng Strad Plus.",
    },
    hero: {
      eyebrow: "Nghệ sĩ & Dự án",
      title: "Những người đang đồng hành cùng Strad Plus.",
      intro: "Những nghệ sĩ, người làm đàn và dự án đã ứng dụng công thức Strad Plus.",
    },
    watch: "Xem buổi trò chuyện",
    more: {
      eyebrow: "Còn nữa",
      title: "Danh sách đang tiếp tục được bổ sung.",
      intro:
        "Các nghệ sĩ và dự án khác sẽ được đăng tải tại đây khi được xác nhận. Nếu bạn chơi, chế tác hay phục chế nhạc cụ và muốn hợp tác cùng Strad Plus, chúng tôi rất mong được lắng nghe bạn.",
      cta: "Liên hệ với chúng tôi",
    },
  },
} satisfies Record<Locale, unknown>;

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await getLang(params);
  return { ...copy[lang].meta, alternates: alternates(lang, "/artists-projects") };
}

export default async function ArtistsProjectsPage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = copy[lang];

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro} figure={{ n: 5, m: 8 }} />

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="divide-y divide-line border-y border-line">
          {getProjects(lang).map((p) => (
            <Reveal key={p.title} className="grid items-center gap-8 py-10 md:grid-cols-12 md:gap-12">
              <div className="relative aspect-video overflow-hidden bg-night md:col-span-4">
                <ChladniArt n={3} m={8} width={160} height={90} resolution={90} levels={4} />
                {p.video && (
                  <span className="absolute inset-0 flex items-center justify-center text-paper">
                    <span className="flex h-14 w-14 items-center justify-center rounded-full border border-paper/70">
                      <Play size={20} strokeWidth={1.5} className="ml-0.5" />
                    </span>
                  </span>
                )}
              </div>
              <div className="md:col-span-8">
                <p className="eyebrow text-varnish">{p.category}</p>
                <h2 className="mt-3 font-display text-3xl font-medium leading-tight md:text-4xl">{p.title}</h2>
                <p className="mt-2 text-sm text-ink-mute">{p.artist}</p>
                <p className="mt-4 max-w-xl leading-relaxed text-ink-soft">{p.description}</p>
                {p.video && (
                  <Link
                    href={localePath(lang, "/media")}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-varnish transition-all hover:gap-3"
                  >
                    {t.watch} <ArrowRight size={15} strokeWidth={1.5} />
                  </Link>
                )}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-16 max-w-2xl">
          <SectionHeading eyebrow={t.more.eyebrow} title={t.more.title} intro={t.more.intro} />
          <ButtonLink href={localePath(lang, "/contact")} variant="outline" className="mt-8">
            {t.more.cta}
          </ButtonLink>
        </Reveal>
      </section>
    </>
  );
}
