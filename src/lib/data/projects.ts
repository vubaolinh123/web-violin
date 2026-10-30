import type { Locale } from "@/lib/i18n";

export interface Project {
  title: string;
  category: string;
  artist: string;
  description: string;
  video?: boolean;
}

/** Artists and projects are being compiled; entries are added here as they are confirmed. */
const projects: Record<Locale, Project[]> = {
  en: [
    {
      title: "Strad Plus on a $400 guitar",
      category: "Guitar",
      artist: "Vũ Đức Hiển, guitarist",
      description:
        "Strad Plus applied to an entry-level guitar, shown in an interview with guitarist Vũ Đức Hiển.",
      video: true,
    },
  ],
  vi: [
    {
      title: "Strad Plus trên cây guitar 400 đô",
      category: "Guitar",
      artist: "Vũ Đức Hiển, nghệ sĩ guitar",
      description: "Strad Plus được áp dụng cho một cây guitar phổ thông, giới thiệu trong buổi trò chuyện cùng nghệ sĩ guitar Vũ Đức Hiển.",
      video: true,
    },
  ],
};

export function getProjects(lang: Locale): Project[] {
  return projects[lang];
}
