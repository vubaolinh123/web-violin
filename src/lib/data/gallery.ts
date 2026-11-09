import type { Locale } from "@/lib/i18n";

export interface GalleryImage {
  src: string;
  width: number;
  height: number;
  alt: string;
}

export interface GalleryGroup {
  id: string;
  title: string;
  images: GalleryImage[];
}

export interface Clip {
  src: string;
  poster: string;
  title: string;
}

type Text = Record<Locale, string>;

const photo = (file: string, width: number, height: number, en: string, vi: string) => ({
  src: `/images/${file}`,
  width,
  height,
  alt: { en, vi } satisfies Text,
});

/** Photographs shown on the Media page, grouped by subject. Files live in public/images. */
const groups = [
  {
    id: "artist",
    title: { en: "The artist", vi: "Nghệ sĩ" },
    images: [
      photo("avatar-web.jpg", 900, 900, "Nguyễn Xuân Huy performing on a gold violin", "Nguyễn Xuân Huy biểu diễn trên cây violin dát vàng"),
      photo("people/huy-workshop-carving-scroll.jpg", 1261, 627, "Nguyễn Xuân Huy carving a violin scroll in his workshop", "Nguyễn Xuân Huy chạm khắc đầu đàn trong xưởng"),
      photo("people/huy-performing-event.jpg", 903, 854, "Nguyễn Xuân Huy playing at an event", "Nguyễn Xuân Huy chơi đàn trong một sự kiện"),
      photo("people/huy-presenting-gold-violin.jpg", 854, 1280, "Presenting a gold-inlaid violin", "Giới thiệu cây violin dát vàng"),
      photo("people/huy-with-white-porcelain-violins.jpg", 853, 1280, "With two white porcelain violins", "Bên hai cây violin sứ trắng"),
    ],
  },
  {
    id: "porcelain",
    title: { en: "The porcelain violin", vi: "Violin sứ" },
    images: [
      photo("porcelain/porcelain-violin-front-full.jpg", 960, 1280, "Porcelain violin, front", "Violin sứ, mặt trước"),
      photo("porcelain/porcelain-violin-back-full.jpg", 960, 1280, "Porcelain violin, back with Buddha motif", "Violin sứ, mặt sau với họa tiết Phật"),
      photo("porcelain/porcelain-scroll-carved.jpg", 960, 1280, "Carved and decorated porcelain scroll", "Đầu đàn bằng sứ được chạm khắc và trang trí"),
      photo("porcelain/porcelain-back-buddha-pipal-leaf.jpg", 960, 1280, "Buddha inside a pipal leaf, on the back plate", "Hình Phật trong lá bồ đề trên mặt sau đàn"),
      photo("porcelain/porcelain-pegbox-ornament.jpg", 960, 1280, "Ornamented pegbox", "Hộp trục đàn được trang trí"),
      photo("porcelain/porcelain-inscription-hn-2018.jpg", 1280, 960, "Inscription: Nguyen Xuan Huy, Hanoi, April 2018", "Dòng ghi: Nguyen Xuan Huy, Hà Nội, tháng 4 năm 2018"),
    ],
  },
  {
    id: "gold",
    title: { en: "The gold violin", vi: "Violin dát vàng" },
    images: [
      photo("gold/gold-violin-front-portrait.jpg", 960, 1280, "Gold violin, front", "Violin dát vàng, mặt trước"),
      photo("gold/gold-violin-back-bw.jpg", 1280, 960, "Gold violin, back, in black and white", "Violin dát vàng, mặt sau, ảnh đen trắng"),
      photo("gold/gold-violin-front-bw.jpg", 960, 1280, "Gold violin, front, in black and white", "Violin dát vàng, mặt trước, ảnh đen trắng"),
      photo("gold/gold-violin-back-landscape.jpg", 1280, 960, "Gold violin, back with engraved bells and holly", "Violin dát vàng, mặt sau khắc hình chuông và lá ô rô"),
      photo("gold/gold-violin-f-hole-detail.jpg", 1280, 960, "Gold violin, f-hole and purfling", "Violin dát vàng, lỗ thoát âm và viền đàn"),
      photo("gold/gold-violin-pegbox-top.jpg", 1280, 960, "Engraved pegbox", "Hộp trục đàn khắc hoa văn"),
      photo("gold/gold-violin-scroll-side.jpg", 1280, 960, "Gold scroll, side view", "Đầu đàn dát vàng nhìn nghiêng"),
      photo("gold/gold-violin-tailpiece-detail.jpg", 1280, 960, "Tailpiece and engraved ribs", "Dây cột và thành đàn khắc hoa văn"),
      photo("gold/gold-violin-inscription-noel-2024.jpg", 1280, 960, "Inscription: Nguyen Xuan Huy, Hanoi, Noel 2024", "Dòng ghi: Nguyen Xuan Huy, Hà Nội, Noel 2024"),
    ],
  },
  {
    id: "strad-plus",
    title: { en: "The Strad Plus violin", vi: "Cây violin Strad Plus" },
    images: [
      photo("violins/violin-front.jpg", 960, 1280, "Violin, front", "Violin, mặt trước"),
      photo("violins/violin-back.jpg", 960, 1280, "Violin, back", "Violin, mặt sau"),
      photo("violins/violin-side.jpg", 960, 1280, "Violin, side profile", "Violin, nhìn nghiêng"),
      photo("violins/violin-label-strad-plus-stamp.jpg", 1280, 960, "Strad Plus stamp and signed label, 2026", "Dấu Strad Plus và nhãn có chữ ký, 2026"),
      photo("violins/violin-front-closeup.jpg", 960, 1280, "Violin, front close-up", "Violin, cận cảnh mặt trước"),
      photo("violins/violin-bridge-closeup.jpg", 960, 1280, "Bridge, close-up", "Ngựa đàn, cận cảnh"),
      photo("violins/violin-scroll-pegbox.jpg", 960, 1280, "Scroll and pegbox", "Đầu đàn và hộp trục"),
      photo("violins/violin-back-maple.jpg", 1280, 960, "Flamed maple back", "Mặt sau bằng gỗ thích vân lửa"),
      photo("violins/violin-front-landscape.jpg", 1280, 960, "Violin, front, from above", "Violin, mặt trước nhìn từ trên xuống"),
      photo("violins/violin-pegbox-strings.jpg", 1280, 960, "Pegbox and strings", "Hộp trục và dây đàn"),
    ],
  },
];

const clips = [
  {
    file: "workshop-gold-leaf-porcelain-violin",
    title: { en: "Finishing a gold-leaf porcelain violin", vi: "Hoàn thiện cây violin sứ dát vàng" },
  },
  {
    file: "workshop-filing-porcelain-violin",
    title: { en: "Shaping the body of a porcelain violin", vi: "Chỉnh sửa thân cây violin sứ" },
  },
  {
    file: "workshop-gold-scroll-detail",
    title: { en: "Detailing a gold scroll", vi: "Hoàn thiện đầu đàn dát vàng" },
  },
  {
    file: "porcelain-material-preparation",
    title: { en: "Preparing the porcelain material", vi: "Chuẩn bị nguyên liệu sứ" },
  },
];

export function getGallery(lang: Locale): GalleryGroup[] {
  return groups.map((g) => ({
    id: g.id,
    title: g.title[lang],
    images: g.images.map((i) => ({ ...i, alt: i.alt[lang] })),
  }));
}

export function getClips(lang: Locale): Clip[] {
  return clips.map((c) => ({
    src: `/videos/${c.file}.mp4`,
    poster: `/videos/${c.file}.jpg`,
    title: c.title[lang],
  }));
}
