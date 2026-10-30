import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import ChladniArt from "@/components/ui/ChladniArt";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import { getApplications } from "@/lib/data/applications";
import { alternates, getLang, localePath, type LangParams, type Locale } from "@/lib/i18n";

const copy = {
  en: {
    meta: {
      title: "The Technology",
      description:
        "How Strad Plus works: a proprietary acoustic process, applied to specific points within the wood, that changes how vibration travels through the material.",
    },
    hero: {
      eyebrow: "The Technology",
      title: "What is Strad Plus?",
      intro: "A proprietary method that enhances the way wood resonates, responds, and transmits vibration.",
    },
    onThisPage: "On this page",
    sections: [
      { id: "beginning", label: "The Beginning" },
      { id: "discovery", label: "The Discovery" },
      { id: "how-it-works", label: "How It Works" },
      { id: "results", label: "What It Changes" },
      { id: "applications", label: "Fields of Application" },
      { id: "in-practice", label: "See It In Practice" },
    ],
    beginning: {
      title: "Inspired by Stradivari.",
      paragraphs: [
        "For three centuries, the instruments of Antonio Stradivari have been the reference for what a violin can sound like. Strad Plus began with a persistent ambition: to understand and recreate the extraordinary acoustic qualities that made those instruments legendary.",
        "Violinist, craftsman and researcher Nguyễn Xuân Huy devoted more than thirty years to that question, researching, testing and refining his ideas before ultimately developing Strad Plus.",
      ],
    },
    discovery: {
      title: "The acoustic DNA of wood.",
      caption: "Illustration: the nodal lines and contours of a vibrating plate of wood.",
      points: [
        "Every piece of wood possesses unique acoustic characteristics.",
        "Strad Plus identifies and works with these characteristics to modify the way vibration travels through the material.",
      ],
    },
    howItWorks: {
      title: "Working with the wood, not against it.",
      intro:
        "Rather than adding material or modifying the structure of an instrument, Strad Plus works by applying a proprietary acoustic process to specific points within the wood.",
      principles: [
        { title: "Nothing added", text: "No material is added to the wood." },
        { title: "Structure untouched", text: "The construction of the instrument is not modified." },
        {
          title: "Specific points",
          text: "A proprietary acoustic process is applied to specific points within the wood.",
        },
      ],
    },
    /** Draft wording, drawn from what players report; to be confirmed. */
    results: {
      title: "What it changes.",
      intro: "What players and listeners notice once the wood has been treated.",
      items: [
        { title: "Resonance", text: "The wood vibrates more freely, giving a fuller, richer sound." },
        { title: "Responsiveness", text: "The instrument answers the player sooner and more directly." },
        { title: "Clarity & balance", text: "A blended sound that still keeps a clear separation between voices." },
        { title: "Immediacy", text: "The change is heard within minutes, not after years of playing." },
      ],
    },
    applications: {
      title: "One Technology, Endless Possibilities",
      intro: "Wherever wood matters, Strad Plus makes a difference.",
    },
    practice: {
      title: "See it in practice.",
      items: [
        {
          title: "Products",
          text: "The Complete Strad Plus Process and the Strad Plus Bridge & Soundpost Set.",
          href: "/products",
          cta: "View products",
        },
        {
          title: "Media",
          text: "Videos and pictures of Strad Plus at work, including the $400 guitar interview.",
          href: "/media",
          cta: "Watch & see",
        },
      ],
    },
  },
  vi: {
    meta: {
      title: "Công nghệ",
      description:
        "Cách Strad Plus hoạt động: một quy trình âm học độc quyền, áp dụng vào những điểm xác định bên trong gỗ, làm thay đổi cách dao động truyền qua vật liệu.",
    },
    hero: {
      eyebrow: "Công nghệ",
      title: "Strad Plus là gì?",
      intro: "Phương pháp độc quyền giúp gỗ cộng hưởng, phản hồi và truyền dao động tốt hơn.",
    },
    onThisPage: "Trong trang này",
    sections: [
      { id: "beginning", label: "Khởi nguồn" },
      { id: "discovery", label: "Khám phá" },
      { id: "how-it-works", label: "Cách hoạt động" },
      { id: "results", label: "Những thay đổi" },
      { id: "applications", label: "Lĩnh vực ứng dụng" },
      { id: "in-practice", label: "Trải nghiệm thực tế" },
    ],
    beginning: {
      title: "Cảm hứng từ Stradivari.",
      paragraphs: [
        "Suốt ba thế kỷ, những cây đàn của Antonio Stradivari là chuẩn mực cho âm thanh mà một cây violin có thể đạt tới. Strad Plus bắt đầu từ một khát vọng bền bỉ: thấu hiểu và tái tạo những phẩm chất âm học phi thường đã làm nên huyền thoại của những cây đàn ấy.",
        "Nghệ sĩ violin, nghệ nhân và nhà nghiên cứu Nguyễn Xuân Huy đã dành hơn ba mươi năm cho câu hỏi đó, nghiên cứu, thử nghiệm và hoàn thiện ý tưởng trước khi phát triển thành Strad Plus.",
      ],
    },
    discovery: {
      title: "ADN âm học của gỗ.",
      caption: "Minh hoạ: các đường nút và đường đồng mức của một tấm gỗ đang dao động.",
      points: [
        "Mỗi miếng gỗ đều mang những đặc tính âm học riêng biệt.",
        "Strad Plus xác định và tác động vào những đặc tính này để thay đổi cách dao động truyền qua vật liệu.",
      ],
    },
    howItWorks: {
      title: "Thuận theo gỗ, không chống lại gỗ.",
      intro:
        "Thay vì thêm vật liệu hay thay đổi cấu trúc nhạc cụ, Strad Plus áp dụng một quy trình âm học độc quyền vào những điểm xác định bên trong gỗ.",
      principles: [
        { title: "Không thêm gì", text: "Không bổ sung bất kỳ vật liệu nào vào gỗ." },
        { title: "Giữ nguyên cấu trúc", text: "Kết cấu của nhạc cụ không bị thay đổi." },
        {
          title: "Điểm xác định",
          text: "Quy trình âm học độc quyền được áp dụng vào những điểm xác định bên trong gỗ.",
        },
      ],
    },
    results: {
      title: "Những thay đổi.",
      intro: "Điều người chơi và người nghe cảm nhận được sau khi gỗ được xử lý.",
      items: [
        { title: "Cộng hưởng", text: "Gỗ dao động tự do hơn, cho âm thanh đầy đặn và giàu sắc thái hơn." },
        { title: "Độ nhạy", text: "Cây đàn đáp lại người chơi nhanh và trực tiếp hơn." },
        { title: "Trong trẻo & cân bằng", text: "Âm thanh hoà quyện mà vẫn tách bạch rõ giữa các bè." },
        { title: "Tức thì", text: "Sự thay đổi được cảm nhận chỉ sau vài phút, không phải sau nhiều năm chơi đàn." },
      ],
    },
    applications: {
      title: "Một công nghệ, vô vàn khả năng",
      intro: "Ở đâu gỗ tạo nên khác biệt, ở đó Strad Plus phát huy giá trị.",
    },
    practice: {
      title: "Trải nghiệm thực tế.",
      items: [
        {
          title: "Sản phẩm",
          text: "Quy trình Strad Plus trọn vẹn và Bộ ngựa đàn & hồn đàn Strad Plus.",
          href: "/products",
          cta: "Xem sản phẩm",
        },
        {
          title: "Thư viện",
          text: "Video và hình ảnh Strad Plus khi ứng dụng thực tế, gồm cả buổi trò chuyện về cây guitar 400 đô.",
          href: "/media",
          cta: "Xem & nghe",
        },
      ],
    },
  },
} satisfies Record<Locale, unknown>;

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await getLang(params);
  return { ...copy[lang].meta, alternates: alternates(lang, "/technology") };
}

export default async function TechnologyPage({ params }: LangParams) {
  const lang = await getLang(params);
  const t = copy[lang];
  const applications = getApplications(lang);

  const eyebrow = (index: number) => (
    <span className="tabular-nums">
      0{index + 1} — {t.sections[index].label}
    </span>
  );

  return (
    <>
      <PageHero eyebrow={t.hero.eyebrow} title={t.hero.title} intro={t.hero.intro} figure={{ n: 3, m: 5 }} />

      {/* Section index */}
      <nav aria-label={t.onThisPage} className="border-b border-line bg-paper-deep/60">
        <ol className="mx-auto flex max-w-7xl gap-x-8 gap-y-2 overflow-x-auto px-5 py-4 text-xs font-medium uppercase tracking-[0.14em] text-ink-soft sm:px-8">
          {t.sections.map((s, i) => (
            <li key={s.id} className="shrink-0">
              <a href={`#${s.id}`} className="transition-colors hover:text-varnish">
                <span className="text-varnish">0{i + 1}</span> {s.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>

      {/* 01 The Beginning */}
      <section id="beginning" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <div className="grid gap-14 md:grid-cols-12 md:gap-16">
          <Reveal className="md:col-span-5">
            <SectionHeading eyebrow={eyebrow(0)} title={t.beginning.title} />
          </Reveal>
          <Reveal delay={0.1} className="prose-strad text-lg leading-relaxed text-ink-soft md:col-span-7">
            {t.beginning.paragraphs.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </Reveal>
        </div>
      </section>

      {/* 02 The Discovery */}
      <section id="discovery" className="scroll-mt-24 border-y border-line bg-paper-deep/60">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 md:grid-cols-12 md:gap-16 md:py-20">
          <Reveal className="md:col-span-5">
            <figure>
              <div className="relative aspect-[4/5] overflow-hidden bg-night">
                <ChladniArt n={3} m={5} levels={5} resolution={64} />
              </div>
              <figcaption className="mt-4 text-sm leading-relaxed text-ink-mute">{t.discovery.caption}</figcaption>
            </figure>
          </Reveal>
          <Reveal delay={0.1} className="md:col-span-7">
            <SectionHeading eyebrow={eyebrow(1)} title={t.discovery.title} />
            <ol className="mt-10 divide-y divide-line border-y border-line">
              {t.discovery.points.map((point, i) => (
                <li key={point} className="flex gap-6 py-6">
                  <span className="font-display text-3xl leading-none text-varnish">{i + 1}</span>
                  <p className="font-display text-2xl leading-snug text-ink">{point}</p>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* 03 How It Works */}
      <section id="how-it-works" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <Reveal>
          <SectionHeading eyebrow={eyebrow(2)} title={t.howItWorks.title} intro={t.howItWorks.intro} />
        </Reveal>
        <div className="mt-14 grid gap-px border border-line bg-line md:grid-cols-3">
          {t.howItWorks.principles.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.1} className="bg-paper p-8 md:p-10">
              <h3 className="font-display text-3xl font-medium leading-tight">{p.title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{p.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 04 What It Changes */}
      <section id="results" className="scroll-mt-24 bg-night">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
          <Reveal>
            <SectionHeading tone="dark" eyebrow={eyebrow(3)} title={t.results.title} intro={t.results.intro} />
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {t.results.items.map((r, i) => (
              <Reveal key={r.title} delay={i * 0.08} className="border-t border-paper/20 pt-6">
                <h3 className="font-display text-2xl font-medium text-paper">{r.title}</h3>
                <p className="mt-3 leading-relaxed text-paper/70">{r.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 05 Fields of Application */}
      <section id="applications" className="scroll-mt-24 mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <Reveal>
          <SectionHeading eyebrow={eyebrow(4)} title={t.applications.title} intro={t.applications.intro} />
        </Reveal>

        <div className="mt-16 divide-y divide-line border-y border-line">
          {applications.map((a, i) => (
            <Reveal key={a.id} className="grid gap-6 py-12 md:grid-cols-12 md:gap-16 md:py-14">
              <div className="md:col-span-4">
                <p className="eyebrow text-varnish">0{i + 1}</p>
                <h3 className="mt-4 font-display text-4xl font-medium leading-tight">{a.title}</h3>
              </div>
              <div className="md:col-span-8">
                <p className="font-display text-2xl italic leading-snug text-ink">{a.lead}</p>
                <p className="mt-5 text-lg leading-relaxed text-ink-soft">{a.body}</p>
                <p className="mt-5 text-sm text-ink-mute">{a.examples}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 06 See It In Practice */}
      <section id="in-practice" className="scroll-mt-24 border-t border-line bg-paper-deep/60">
        <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
          <Reveal>
            <SectionHeading eyebrow={eyebrow(5)} title={t.practice.title} />
          </Reveal>
          <div className="mt-12 grid gap-px border border-line bg-line md:grid-cols-2">
            {t.practice.items.map((p, i) => (
              <Reveal key={p.href} delay={i * 0.1} className="bg-paper">
                <Link href={localePath(lang, p.href)} className="group flex h-full flex-col p-8 md:p-10">
                  <h3 className="font-display text-3xl font-medium leading-tight transition-colors group-hover:text-varnish">
                    {p.title}
                  </h3>
                  <p className="mt-3 flex-1 leading-relaxed text-ink-soft">{p.text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-varnish transition-all group-hover:gap-3">
                    {p.cta} <ArrowRight size={15} strokeWidth={1.5} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
