import type { Locale } from "@/lib/i18n";

export interface Application {
  id: string;
  title: string;
  lead: string;
  body: string;
  examples: string;
  figure: { n: number; m: number };
}

type ApplicationText = Pick<Application, "title" | "lead" | "body" | "examples">;

const entries: { id: string; figure: { n: number; m: number }; text: Record<Locale, ApplicationText> }[] = [
  {
    id: "instruments",
    figure: { n: 3, m: 5 },
    text: {
      en: {
        title: "Musical Instruments",
        lead: "Bring out the instrument's true voice without years of waiting.",
        body: "Strad Plus lets an instrument sound blended and yet clearly separated between its strings, with a clean, clear tone. It is a new step for makers, particularly of instruments built from wood.",
        examples: "From string instruments and pianos to any wooden musical instrument.",
      },
      vi: {
        title: "Nhạc cụ",
        lead: "Đánh thức giọng thật của cây đàn mà không phải chờ đợi nhiều năm.",
        body: "Strad Plus giúp nhạc cụ có âm thanh hoà quyện mà vẫn tách bạch giữa các dây, với chất âm trong và sạch. Đây là bước tiến mới cho những người làm đàn, đặc biệt với các nhạc cụ làm từ gỗ.",
        examples: "Từ các loại đàn dây và piano đến mọi nhạc cụ làm bằng gỗ.",
      },
    },
  },
  {
    id: "interiors",
    figure: { n: 2, m: 4 },
    text: {
      en: {
        title: "Interiors & Architecture",
        lead: "Unlock better acoustic performance wherever wood shapes the listening experience.",
        body: "Wooden furniture such as speaker cabinets, tables and wardrobes, and large spaces such as churches, recording studios, opera houses and conference centres, can all be shaped by Strad Plus. The result is a new quality in daily life, work and entertainment.",
        examples:
          "From speaker cabinets and furniture to studios, churches, opera houses, conference centres, and beyond.",
      },
      vi: {
        title: "Nội thất & Kiến trúc",
        lead: "Nâng tầm chất lượng âm học ở bất cứ nơi nào gỗ định hình trải nghiệm nghe.",
        body: "Đồ gỗ như thùng loa, bàn, tủ, cùng những không gian lớn như nhà thờ, phòng thu, nhà hát opera và trung tâm hội nghị đều có thể được cải thiện bằng Strad Plus. Kết quả là một chất lượng mới cho đời sống, công việc và giải trí.",
        examples: "Từ thùng loa và đồ nội thất đến phòng thu, nhà thờ, nhà hát opera, trung tâm hội nghị và hơn thế nữa.",
      },
    },
  },
  {
    id: "sport",
    figure: { n: 4, m: 6 },
    text: {
      en: {
        title: "Professional Sport",
        lead: "Strengthen the connection between athlete and equipment.",
        body: "Applied to professional playing surfaces and equipment, the technology noticeably improves the sensation of bounce, impact and the vibration that travels from the equipment to the hand. That precision in every touch helps athletes get the most from their performance.",
        examples:
          "From billiard cues, table tennis rackets and bowling lanes to any sporting equipment where wood influences performance.",
      },
      vi: {
        title: "Thể thao chuyên nghiệp",
        lead: "Gắn kết chặt chẽ hơn giữa vận động viên và dụng cụ.",
        body: "Khi áp dụng cho bề mặt thi đấu và dụng cụ chuyên nghiệp, công nghệ cải thiện rõ rệt cảm giác nảy, lực va chạm và dao động truyền từ dụng cụ đến tay. Sự chính xác trong từng cú chạm giúp vận động viên phát huy tối đa phong độ.",
        examples: "Từ cơ bi-a, vợt bóng bàn, đường lăn bowling đến mọi dụng cụ thể thao mà gỗ ảnh hưởng đến hiệu suất.",
      },
    },
  },
];

export function getApplications(lang: Locale): Application[] {
  return entries.map(({ text, ...rest }) => ({ ...rest, ...text[lang] }));
}
