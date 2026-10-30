"use client";

import { useState } from "react";
import { ExternalLink, Play } from "lucide-react";
import { INTERVIEW_VIDEO } from "@/lib/constants";
import ChladniArt from "./ChladniArt";

/** Click-to-load player so the heavy Google Drive frame is only fetched on demand. */
export default function VideoEmbed({ text }: { text: { title: string; play: string; openDrive: string } }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div>
      <div className="relative aspect-video w-full overflow-hidden bg-night-soft">
        {playing ? (
          <iframe
            src={INTERVIEW_VIDEO.embedUrl}
            title={text.title}
            allow="autoplay; fullscreen"
            allowFullScreen
            className="absolute inset-0 h-full w-full border-0"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`${text.play}: ${text.title}`}
            className="group absolute inset-0 flex items-center justify-center"
          >
            <div className="absolute inset-0 opacity-70">
              <ChladniArt n={3} m={8} width={160} height={90} resolution={110} levels={4} />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-night/70 via-transparent to-night/30" />
            <span className="relative flex h-20 w-20 items-center justify-center rounded-full border border-paper/70 text-paper transition-all duration-300 group-hover:scale-105 group-hover:bg-paper group-hover:text-night">
              <Play size={28} strokeWidth={1.5} className="ml-1" />
            </span>
          </button>
        )}
      </div>
      <p className="mt-4 flex flex-wrap items-center justify-between gap-3 text-sm text-paper/60">
        <span>{text.title}</span>
        <a
          href={INTERVIEW_VIDEO.watchUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-brass-light transition-colors hover:text-paper"
        >
          {text.openDrive} <ExternalLink size={13} strokeWidth={1.5} />
        </a>
      </p>
    </div>
  );
}
