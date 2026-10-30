import type { Metadata } from "next";
import RequestPage from "@/components/contact/RequestPage";

export const metadata: Metadata = {
  title: "Request an Evaluation Sample",
  description:
    "For distributors, instrument shops, workshops, manufacturers and industry partners: request a Strad Plus evaluation sample.",
};

export default function RequestEvaluationPage() {
  return (
    <RequestPage
      kind="evaluation"
      eyebrow="For Distributors & Industry Partners"
      title="Request an Evaluation Sample"
      intro="We believe Strad Plus should be experienced firsthand."
      lead={[
        "If you are a distributor, instrument shop, workshop, manufacturer or industry partner interested in evaluating Strad Plus, please tell us more about yourself below.",
      ]}
      figure={{ n: 4, m: 5 }}
    />
  );
}
