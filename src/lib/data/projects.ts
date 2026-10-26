export interface Project {
  title: string;
  category: string;
  artist: string;
  description: string;
  video?: boolean;
}

/** Artists and projects are being compiled; entries are added here as they are confirmed. */
export const projects: Project[] = [
  {
    title: "Strad Plus on a $400 guitar",
    category: "Guitar",
    artist: "Vũ Đức Hiển, guitarist",
    description:
      "Strad Plus applied to an entry-level guitar, shown in an interview with guitarist Vũ Đức Hiển.",
    video: true,
  },
];
