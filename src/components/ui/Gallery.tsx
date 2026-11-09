"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { GalleryImage } from "@/lib/data/gallery";

interface GalleryProps {
  images: GalleryImage[];
  labels: { close: string; previous: string; next: string };
}

/** Photo grid; a click opens the picture large, with arrow-key and swipe-free navigation. */
export default function Gallery({ images, labels }: GalleryProps) {
  const [open, setOpen] = useState<number | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const openerRef = useRef<HTMLElement | null>(null);

  const step = useCallback(
    (by: number) => setOpen((i) => (i === null ? i : (i + by + images.length) % images.length)),
    [images.length]
  );
  const close = useCallback(() => {
    setOpen(null);
    openerRef.current?.focus();
  }, []);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") step(-1);
      if (e.key === "ArrowRight") step(1);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, step]);

  const current = open === null ? null : images[open];

  return (
    <>
      <ul className="columns-2 gap-3 md:columns-3 lg:columns-4 [&>li]:mb-3">
        {images.map((image, i) => (
          <li key={image.src} className="break-inside-avoid">
            <button
              type="button"
              onClick={(e) => {
                openerRef.current = e.currentTarget;
                setOpen(i);
              }}
              aria-label={image.alt}
              className="group block w-full overflow-hidden bg-night"
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, 46vw"
                className="h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
              />
            </button>
          </li>
        ))}
      </ul>

      {current && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={current.alt}
          className="fixed inset-0 z-50 flex items-center justify-center bg-night/95 p-4 md:p-10"
          onClick={close}
        >
          <button
            ref={closeRef}
            type="button"
            onClick={close}
            aria-label={labels.close}
            className="absolute right-4 top-4 p-2 text-paper/80 transition-colors hover:text-paper"
          >
            <X size={26} strokeWidth={1.5} />
          </button>
          {images.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(-1);
                }}
                aria-label={labels.previous}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-3 text-paper/70 transition-colors hover:text-paper md:left-6"
              >
                <ChevronLeft size={34} strokeWidth={1.25} />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  step(1);
                }}
                aria-label={labels.next}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-3 text-paper/70 transition-colors hover:text-paper md:right-6"
              >
                <ChevronRight size={34} strokeWidth={1.25} />
              </button>
            </>
          )}
          <figure className="flex max-h-full max-w-full flex-col items-center" onClick={(e) => e.stopPropagation()}>
            <Image
              src={current.src}
              alt={current.alt}
              width={current.width}
              height={current.height}
              sizes="90vw"
              priority
              className="max-h-[80vh] w-auto max-w-full object-contain"
            />
            <figcaption className="mt-4 text-center text-sm text-paper/70">
              {current.alt}
              <span className="ml-3 text-paper/40">
                {(open ?? 0) + 1} / {images.length}
              </span>
            </figcaption>
          </figure>
        </div>
      )}
    </>
  );
}
