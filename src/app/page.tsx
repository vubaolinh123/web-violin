"use client";

import dynamic from "next/dynamic";
import HeroSection from "@/components/home/HeroSection";
import LoadingSkeleton from "@/components/ui/LoadingSkeleton";
import { OrganizationJsonLd, WebSiteJsonLd } from "@/components/seo/JsonLd";

const FeaturedProducts = dynamic(
  () => import("@/components/home/FeaturedProducts"),
  { ssr: false, loading: () => <LoadingSkeleton height="480px" className="mx-4" /> }
);

const CollectionsBanner = dynamic(
  () => import("@/components/home/CollectionsBanner"),
  { ssr: false, loading: () => <LoadingSkeleton height="420px" className="mx-4" /> }
);

const BrandStory = dynamic(
  () => import("@/components/home/BrandStory"),
  { ssr: false, loading: () => <LoadingSkeleton height="500px" className="mx-4" /> }
);

const TestimonialsSection = dynamic(
  () => import("@/components/home/TestimonialsSection"),
  { ssr: false, loading: () => <LoadingSkeleton height="360px" className="mx-4" /> }
);

const WhyChooseUs = dynamic(
  () => import("@/components/home/WhyChooseUs"),
  { ssr: false, loading: () => <LoadingSkeleton height="340px" className="mx-4" /> }
);

const NewsletterBanner = dynamic(
  () => import("@/components/home/NewsletterBanner"),
  { ssr: false, loading: () => <LoadingSkeleton height="280px" className="mx-4" /> }
);

export default function HomePage() {
  return (
    <>
      <OrganizationJsonLd />
      <WebSiteJsonLd />
      <HeroSection />
      <FeaturedProducts />
      <CollectionsBanner />
      <BrandStory />
      <TestimonialsSection />
      <WhyChooseUs />
      <NewsletterBanner />
    </>
  );
}
