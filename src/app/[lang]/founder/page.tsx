import type { Metadata } from "next";
import Image from "next/image";
import { ChevronDown, ExternalLink } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { press, type MediaLink } from "@/lib/data/press";
import { alternates, getLang, type LangParams, type Locale } from "@/lib/i18n";

/** One entry of a Featured Media dropdown. Entries without `links` show a "coming soon" note. */
interface MediaItem {
  title: string;
  links?: MediaLink[];
}

interface MediaGroup {
  title: string;
  tagline?: string;
  items: MediaItem[];
}

/** Cover picture of each Featured Media group, in the order the groups are listed. */
const covers = [
  { src: "/images/gold/gold-violin-pegbox-strings.jpg", position: "50% 50%" },
  { src: "/videos/workshop-gold-leaf-porcelain-violin.jpg", position: "50% 50%" },
  { src: "/images/violins/violin-back-maple.jpg", position: "50% 50%" },
  { src: "/images/violins/violin-label-strad-plus-stamp.jpg", position: "50% 55%" },
];

const copy = {
  en: {
    meta: {
      title: "Founder — Nguyễn Xuân Huy",
      description:
        "Nguyễn Xuân Huy: violinist, craftsman and scientific researcher, founder of Strad Plus. Trained at the Hanoi Conservatory and the Tchaikovsky Moscow State Conservatory.",
    },
    hero: { eyebrow: "Founder", intro: "Violinist, craftsman and scientific researcher." },
    portraitAlt: "Nguyễn Xuân Huy performing on a gold violin",
    born: {
      title: "Born into Music",
      paragraphs: [
        "Nguyễn Xuân Huy was born into a family devoted to the arts. His father was a violinist trained at the Shanghai Conservatory, his mother is a renowned Vietnamese vocalist, and his sister is a Master of Sport in DanceSport.",
        "Following the same path, he became a professional violinist and trained at both the Hanoi Conservatory and the Tchaikovsky Moscow State Conservatory.",
        "Yet beyond performance, he became fascinated by a question that would shape the next three decades of his life: what gives a great instrument its unique voice?",
      ],
      closing: "That pursuit ultimately led to the creation of Strad Plus.",
    },
    glance: {
      title: "At a Glance",
      items: [
        {
          title: "Professional Violinist",
          text: "Trained at the Hanoi Conservatory and the Tchaikovsky Moscow State Conservatory",
        },
        {
          title: "Century Orchestra Member",
          text: "Selected among hundreds of applicants to join the international orchestra supported by Princess Diana",
        },
        {
          title: "Cultural Innovator",
          text: "Creator of major Vietnamese classical music initiatives including Luala Concert and “Dieu Con Mai”",
        },
        {
          title: "Porcelain Violin Pioneer",
          text: "First person in the world to create and professionally perform on a porcelain violin",
        },
        { title: "30+ Years of Research", text: "Studying wood acoustics, resonance, and instrument performance" },
        {
          title: "Creator of Strad Plus",
          text: "A proprietary acoustic method developed through decades of research and experimentation",
        },
      ],
    },
    media: {
      title: "Featured Media",
      pending: "Links and images will be added soon.",
      viTag: "Vietnamese",
      groups: [
        {
          title: "Performance & Musicianship",
          tagline: "Nguyễn Xuân Huy as a performing violinist.",
          items: [
            { title: "Concert performances", links: [press.tokyo] },
            { title: "Solo performances", links: [press.vnexpress] },
            { title: "Interviews related to performance", links: [press.cand2016, press.dep2015, press.sggp, press.nld2007] },
          ],
        },
        {
          title: "The Porcelain Violin Project",
          tagline: "The world’s first professionally playable porcelain violin.",
          items: [
            { title: "Documentary videos", links: [press.vnewsVideo] },
            { title: "Interviews", links: [press.vnewsInterview, press.daudu, press.tienphong] },
            { title: "Press articles", links: [press.vtv, press.vietnamnet2019, press.tokyo] },
            { title: "Guinness / Record coverage", links: [press.toquoc, press.vietnamnet2022] },
            { title: "Museum exhibitions", links: [press.vnewsLamDong] },
            { title: "Performances with the porcelain violin", links: [press.tokyo] },
          ],
        },
        {
          title: "Research & Innovation",
          items: [
            { title: "Research articles" },
            { title: "Interviews related to Strad Plus" },
            { title: "Talks on acoustics" },
            { title: "Articles on instrument making", links: [press.cand2011, press.dantri, press.vnexpress] },
            { title: "Other research projects", links: [press.botket] },
          ],
        },
        {
          title: "Press & Recognition",
          items: [
            { title: "Press", links: [press.nhandan2013, press.nhandan2011, press.ttvh2012, press.dantri, press.vnexpress, press.nld2007] },
            { title: "Television", links: [press.vtc, press.thanhnien] },
            { title: "VTV", links: [press.vtv] },
            { title: "Awards", links: [press.toquoc, press.vietnamnet2022] },
            { title: "Artistic profiles", links: [press.wikipedia, press.cand2016, press.sggp, press.dep2015] },
          ],
        },
      ] satisfies MediaGroup[],
    },
  },
  vi: {
    meta: {
      title: "Nhà sáng lập — Nguyễn Xuân Huy",
      description:
        "Nguyễn Xuân Huy: nghệ sĩ violin, nghệ nhân và nhà nghiên cứu khoa học, người sáng lập Strad Plus. Theo học tại Nhạc viện Hà Nội và Nhạc viện Quốc gia Tchaikovsky Moskva.",
    },
    hero: { eyebrow: "Nhà sáng lập", intro: "Nghệ sĩ violin, nghệ nhân và nhà nghiên cứu khoa học." },
    portraitAlt: "Nguyễn Xuân Huy biểu diễn trên cây violin dát vàng",
    born: {
      title: "Sinh ra trong âm nhạc",
      paragraphs: [
        "Nguyễn Xuân Huy sinh ra trong một gia đình gắn bó với nghệ thuật. Cha ông là nghệ sĩ violin được đào tạo tại Nhạc viện Thượng Hải, mẹ ông là một ca sĩ nổi tiếng của Việt Nam, và em gái ông là Kiện tướng Dancesport.",
        "Tiếp nối con đường ấy, ông trở thành nghệ sĩ violin chuyên nghiệp, được đào tạo tại cả Nhạc viện Hà Nội và Nhạc viện Quốc gia Tchaikovsky Moskva.",
        "Nhưng ngoài biểu diễn, ông say mê một câu hỏi sẽ định hình ba thập kỷ tiếp theo của cuộc đời: điều gì làm nên giọng nói riêng của một cây đàn vĩ đại?",
      ],
      closing: "Hành trình theo đuổi câu hỏi ấy cuối cùng đã dẫn đến sự ra đời của Strad Plus.",
    },
    glance: {
      title: "Điểm nhấn",
      items: [
        {
          title: "Nghệ sĩ violin chuyên nghiệp",
          text: "Được đào tạo tại Nhạc viện Hà Nội và Nhạc viện Quốc gia Tchaikovsky Moskva",
        },
        {
          title: "Thành viên Century Orchestra",
          text: "Được chọn trong hàng trăm ứng viên để gia nhập dàn nhạc quốc tế do Công nương Diana bảo trợ",
        },
        {
          title: "Nhà đổi mới văn hoá",
          text: "Người sáng lập những sáng kiến lớn cho âm nhạc cổ điển Việt Nam, trong đó có Luala Concert và “Dieu Con Mai”",
        },
        {
          title: "Người tiên phong violin sứ",
          text: "Người đầu tiên trên thế giới chế tạo và biểu diễn chuyên nghiệp trên một cây violin sứ",
        },
        { title: "Hơn 30 năm nghiên cứu", text: "Nghiên cứu âm học của gỗ, sự cộng hưởng và chất lượng nhạc cụ" },
        {
          title: "Người sáng tạo Strad Plus",
          text: "Phương pháp âm học độc quyền được phát triển qua nhiều thập kỷ nghiên cứu và thử nghiệm",
        },
      ],
    },
    media: {
      title: "Tư liệu nổi bật",
      pending: "Liên kết và hình ảnh sẽ sớm được cập nhật.",
      viTag: "",
      groups: [
        {
          title: "Biểu diễn & Nghệ thuật âm nhạc",
          tagline: "Nguyễn Xuân Huy trên cương vị nghệ sĩ violin biểu diễn.",
          items: [
            { title: "Các buổi hoà nhạc", links: [press.tokyo] },
            { title: "Biểu diễn độc tấu", links: [press.vnexpress] },
            { title: "Phỏng vấn về biểu diễn", links: [press.cand2016, press.dep2015, press.sggp, press.nld2007] },
          ],
        },
        {
          title: "Dự án Violin sứ",
          tagline: "Cây violin sứ đầu tiên trên thế giới có thể biểu diễn chuyên nghiệp.",
          items: [
            { title: "Video tài liệu", links: [press.vnewsVideo] },
            { title: "Phỏng vấn", links: [press.vnewsInterview, press.daudu, press.tienphong] },
            { title: "Bài báo", links: [press.vtv, press.vietnamnet2019, press.tokyo] },
            { title: "Guinness / Thông tin về kỷ lục", links: [press.toquoc, press.vietnamnet2022] },
            { title: "Triển lãm bảo tàng", links: [press.vnewsLamDong] },
            { title: "Biểu diễn với violin sứ", links: [press.tokyo] },
          ],
        },
        {
          title: "Nghiên cứu & Đổi mới",
          items: [
            { title: "Bài báo về nghiên cứu" },
            { title: "Phỏng vấn liên quan đến Strad Plus" },
            { title: "Các buổi nói chuyện về âm học" },
            { title: "Bài viết về chế tác đàn", links: [press.cand2011, press.dantri, press.vnexpress] },
            { title: "Các dự án nghiên cứu khác", links: [press.botket] },
          ],
        },
        {
          title: "Báo chí & Ghi nhận",
          items: [
            { title: "Báo chí", links: [press.nhandan2013, press.nhandan2011, press.ttvh2012, press.dantri, press.vnexpress, press.nld2007] },
            { title: "Truyền hình", links: [press.vtc, press.thanhnien] },
            { title: "VTV", links: [press.vtv] },
            { title: "Các giải thưởng", links: [press.toquoc, press.vietnamnet2022] },
            { title: "Hồ sơ nghệ thuật", links: [press.wikipedia, press.cand2016, press.sggp, press.dep2015] },
          ],
        },
      ] satisfies MediaGroup[],
    },
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

      {/* Born into Music */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-4">
            <div className="relative aspect-[4/5] overflow-hidden bg-night md:sticky md:top-28">
              <Image
                src="/images/avatar-web.jpg"
                alt={t.portraitAlt}
                fill
                priority
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover object-[58%_40%]"
              />
            </div>
          </Reveal>

          <Reveal className="md:col-span-8">
            <SectionHeading title={t.born.title} />
            <div className="prose-strad mt-8 text-lg leading-relaxed text-ink-soft">
              {t.born.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
            <p className="mt-8 border-l-2 border-varnish pl-6 font-display text-2xl italic leading-snug text-ink md:text-3xl">
              {t.born.closing}
            </p>
          </Reveal>
        </div>
      </section>

      {/* At a Glance */}
      <section className="border-y border-line bg-paper-deep/60">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
          <Reveal>
            <SectionHeading title={t.glance.title} />
          </Reveal>
          <div className="mt-12 grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
            {t.glance.items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 0.08} className="bg-paper p-8 md:p-10">
                <p className="eyebrow text-varnish">0{i + 1}</p>
                <h3 className="mt-4 font-display text-3xl font-medium leading-tight">{item.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Media */}
      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <Reveal>
          <SectionHeading title={t.media.title} />
        </Reveal>
        <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
          {t.media.groups.map((group: MediaGroup, i) => (
            <Reveal key={group.title} delay={(i % 2) * 0.1} className="bg-paper">
              <div className="relative aspect-[16/9] overflow-hidden bg-night">
                <Image
                  src={covers[i].src}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                  style={{ objectPosition: covers[i].position }}
                />
              </div>
              <div className="p-8 md:p-10">
                <p className="eyebrow text-varnish">0{i + 1}</p>
                <h3 className="mt-4 font-display text-3xl font-medium leading-tight">{group.title}</h3>
                {group.tagline && (
                  <p className="mt-3 font-display text-xl italic leading-snug text-ink-soft">{group.tagline}</p>
                )}

                <div className="mt-6 divide-y divide-line border-y border-line">
                  {group.items.map((item) => (
                    <details key={item.title} className="group">
                      <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 text-ink transition-colors hover:text-varnish [&::-webkit-details-marker]:hidden">
                        <span>{item.title}</span>
                        <ChevronDown
                          size={17}
                          strokeWidth={1.5}
                          className="shrink-0 text-ink-mute transition-transform duration-300 group-open:rotate-180"
                        />
                      </summary>
                      <div className="pb-5 text-sm leading-relaxed text-ink-soft">
                        {item.links?.length ? (
                          <ul className="space-y-3">
                            {item.links.map((link) => (
                              <li key={link.href}>
                                <a
                                  href={link.href}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="group/link inline-flex items-start gap-2 text-ink transition-colors hover:text-varnish"
                                >
                                  <span className="underline decoration-line underline-offset-4 group-hover/link:decoration-varnish">
                                    {link.title}
                                  </span>
                                  <ExternalLink size={13} strokeWidth={1.5} className="mt-1 shrink-0 text-ink-mute" />
                                </a>
                                <p className="mt-0.5 text-xs text-ink-mute">
                                  {link.source}
                                  {link.year ? ` · ${link.year}` : ""}
                                  {link.lang === "vi" && t.media.viTag ? ` · ${t.media.viTag}` : ""}
                                </p>
                              </li>
                            ))}
                          </ul>
                        ) : (
                          <p className="text-ink-mute">{t.media.pending}</p>
                        )}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
