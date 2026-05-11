import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://arcoviolins.com"),
  title: {
    default: "Arco Violins — Premium Violin Shop",
    template: "%s | Arco Violins",
  },
  description:
    "Discover handcrafted violins, premium bows, and accessories at Arco Violins. Serving musicians and collectors worldwide with instruments of exceptional quality.",
  keywords: ["violin", "bow", "violin shop", "handcrafted violin", "premium instruments", "Arco Violins"],
  authors: [{ name: "Arco Violins" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://arcoviolins.com",
    siteName: "Arco Violins",
    title: "Arco Violins — Premium Violin Shop",
    description:
      "Discover handcrafted violins, premium bows, and accessories at Arco Violins.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Arco Violins — Premium Violin Shop",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Arco Violins — Premium Violin Shop",
    description:
      "Discover handcrafted violins, premium bows, and accessories at Arco Violins.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${dmSans.variable} ${jetbrains.variable} h-full`}
      data-scroll-behavior="smooth"
    >
      <body className="min-h-full flex flex-col bg-charcoal text-parchment font-body antialiased" suppressHydrationWarning>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
