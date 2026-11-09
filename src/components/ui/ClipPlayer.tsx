import type { Clip } from "@/lib/data/gallery";

/** Native player for a short clip hosted with the site. Nothing is downloaded until the visitor presses play. */
export default function ClipPlayer({ clip }: { clip: Clip }) {
  return (
    <figure>
      <video
        controls
        playsInline
        preload="none"
        poster={clip.poster}
        aria-label={clip.title}
        className="aspect-video w-full bg-night-soft"
      >
        <source src={clip.src} type="video/mp4" />
      </video>
      <figcaption className="mt-3 text-sm text-paper/70">{clip.title}</figcaption>
    </figure>
  );
}
