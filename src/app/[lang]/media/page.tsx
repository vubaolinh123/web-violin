import type { Metadata } from "next";
import { Image as ImageIcon } from "lucide-react";
import PageHero from "@/components/ui/PageHero";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import VideoEmbed from "@/components/ui/VideoEmbed";

export const metadata: Metadata = {
  title: "Media",
  description:
    "Video and pictures of Strad Plus, including the interview with Nguyễn Xuân Huy and guitarist Vũ Đức Hiển.",
};

export default function MediaPage() {
  return (
    <>
      <PageHero
        eyebrow="Media"
        title="Video & pictures."
        intro="The best way to understand Strad Plus is to listen to it."
        figure={{ n: 3, m: 8 }}
      />

      <section className="bg-night">
        <div className="mx-auto max-w-5xl px-5 py-20 sm:px-8 md:py-20">
          <Reveal>
            <SectionHeading
              tone="dark"
              eyebrow="Interview"
              title="Strad Plus on a $400 guitar."
              intro="Nguyễn Xuân Huy discusses the method with guitarist Vũ Đức Hiển, with Strad Plus applied to a guitar worth four hundred dollars."
            />
          </Reveal>
          <Reveal delay={0.1} className="mt-12">
            <VideoEmbed />
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16 sm:px-8 md:py-20">
        <Reveal>
          <SectionHeading
            eyebrow="Pictures"
            title="Photography is on its way."
            intro="Retouched photographs of the products and of Strad Plus at work will be published here."
          />
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
