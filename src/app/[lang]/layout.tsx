import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MotionProvider from "@/components/motion/MotionProvider";
import { OrganizationJsonLd } from "@/components/seo/JsonLd";
import { SITE_NAME, SITE_URL } from "@/lib/constants";
import { getDictionary } from "@/lib/dictionary";
import { LOCALES, LOCALE_LABELS, alternates, getLang, type LangParams } from "@/lib/i18n";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin", "latin-ext", "vietnamese"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "latin-ext", "vietnamese"],
  display: "swap",
});

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LangParams): Promise<Metadata> {
  const lang = await getLang(params);
  const { site } = getDictionary(lang);
  const title = `${SITE_NAME} — ${site.tagline}`;
  return {
    metadataBase: new URL(SITE_URL),
    title: { default: title, template: `%s | ${SITE_NAME}` },
    description: site.description,
    keywords: [
      "Strad Plus",
      "Nguyễn Xuân Huy",
      "violin acoustics",
      "violin bridge",
      "soundpost",
      "luthier",
      "instrument resonance",
      "wood acoustics",
    ],
    authors: [{ name: SITE_NAME }],
    alternates: alternates(lang, "/"),
    openGraph: {
      type: "website",
      locale: LOCALE_LABELS[lang].og,
      alternateLocale: LOCALES.filter((l) => l !== lang).map((l) => LOCALE_LABELS[l].og),
      siteName: SITE_NAME,
      title,
      description: site.description,
    },
    twitter: { card: "summary_large_image", title, description: site.description },
    robots: { index: true, follow: true },
  };
}

export const viewport: Viewport = {
  themeColor: "#fcfaf6",
};

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const lang = await getLang(params);
  const dict = getDictionary(lang);

  return (
    <html
      lang={lang}
      className={`${cormorant.variable} ${inter.variable} h-full`}
      data-scroll-behavior="smooth"
    >
      <body className="flex min-h-full flex-col bg-paper font-body text-ink antialiased">
        <OrganizationJsonLd lang={lang} />
        <MotionProvider>
          <Header lang={lang} dict={{ nav: dict.nav, header: dict.header }} />
          <main className="flex-1">{children}</main>
          <Footer lang={lang} />
        </MotionProvider>
      </body>
    </html>
  );
}
