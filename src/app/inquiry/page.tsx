import type { Metadata } from "next";
import PageHero from "@/components/ui/PageHero";
import InquiryView from "@/components/contact/InquiryView";

export const metadata: Metadata = {
  title: "Inquiry",
  description: "Send Strad Plus an inquiry about the products you are interested in.",
  robots: { index: false, follow: true },
};

export default function InquiryPage() {
  return (
    <>
      <PageHero
        eyebrow="Inquiry"
        title="Your inquiry."
        intro="Choose the products you are interested in and tell us about your needs. We will reply with pricing, availability and terms."
        figure={{ n: 4, m: 5 }}
      />
      <InquiryView />
    </>
  );
}
