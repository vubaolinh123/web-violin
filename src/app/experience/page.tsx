import type { Metadata } from "next";
import RequestPage from "@/components/contact/RequestPage";

export const metadata: Metadata = {
  title: "Experience Strad Plus",
  description:
    "For musicians and instrument owners: learn about availability, ordering and how Strad Plus can be applied to your instrument.",
};

export default function ExperiencePage() {
  return (
    <RequestPage
      kind="experience"
      eyebrow="For Musicians & Instrument Owners"
      title="Experience Strad Plus"
      intro="Hear what Strad Plus can do for the instrument you play."
      lead={[
        "Interested in experiencing Strad Plus on your own instrument? Contact us to learn about product availability, ordering information and how Strad Plus can be applied to your instrument.",
      ]}
      figure={{ n: 3, m: 7 }}
    />
  );
}
