import { chladniSvg } from "@/lib/chladni";

const NAME = /^(dark|light)-(\d{1,2})-(\d{1,2})-(\d{2,3})x(\d{2,3})-(\d{2,3})-(\d)\.svg$/;

interface Context {
  params: Promise<{ file: string }>;
}

export async function GET(_request: Request, { params }: Context) {
  const { file } = await params;
  const match = NAME.exec(file);
  if (!match) return new Response("Not found", { status: 404 });

  const [, tone, n, m, width, height, resolution, levels] = match;
  const svg = chladniSvg({
    tone: tone as "dark" | "light",
    n: Number(n),
    m: Number(m),
    width: Number(width),
    height: Number(height),
    resolution: Math.min(Number(resolution), 160),
    levels: Math.min(Number(levels), 6),
  });

  return new Response(svg, {
    headers: {
      "Content-Type": "image/svg+xml",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
