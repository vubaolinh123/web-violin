import { ImageResponse } from "next/og";
import { getDictionary } from "@/lib/dictionary";
import { LOCALES, getLang } from "@/lib/i18n";

export const alt = "Strad Plus — the acoustic DNA of wood";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export default async function OpengraphImage({ params }: { params: Promise<{ lang: string }> }) {
  const { site } = getDictionary(await getLang(params));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#15110d",
          color: "#f6f1e8",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 96, letterSpacing: 12, textTransform: "uppercase" }}>
          Strad<span style={{ color: "#cdb27a", marginLeft: 28 }}>Plus</span>
        </div>
        <div style={{ marginTop: 28, fontSize: 40, fontStyle: "italic", color: "#cdb27a" }}>
          {`${site.tagline}.`}
        </div>
      </div>
    ),
    size
  );
}
