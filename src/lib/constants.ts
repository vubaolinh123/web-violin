export const SITE_NAME = "Strad Plus";
export const SITE_TAGLINE = "The acoustic DNA of wood";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://stradplus.com";
export const SITE_DESCRIPTION =
  "Strad Plus is a proprietary method that enhances the way wood resonates, responds and transmits vibration. Developed over more than thirty years by violinist, craftsman and researcher Nguyễn Xuân Huy, for musical instruments, architectural acoustics and sports equipment.";

export const NAV_LINKS = [
  { label: "Technology", href: "/technology" },
  { label: "Products", href: "/products" },
  { label: "Founder", href: "/founder" },
  { label: "Media", href: "/media" },
  { label: "Artists & Projects", href: "/artists-projects" },
];

export const CONTACT_INFO = {
  email: "contact@stradplus.com",
  phone: "+49 176 3169 3400",
  phoneHref: "+4917631693400",
};

/** Google Drive file id of the Nguyễn Xuân Huy interview. */
export const INTERVIEW_VIDEO = {
  id: "1Xl3NP5Igv9flgMIReUMyBplxD5UbhOBZ",
  title: "Strad Plus on a $400 guitar — interview with Nguyễn Xuân Huy and guitarist Vũ Đức Hiển",
  watchUrl:
    "https://drive.google.com/file/d/1Xl3NP5Igv9flgMIReUMyBplxD5UbhOBZ/view",
  embedUrl:
    "https://drive.google.com/file/d/1Xl3NP5Igv9flgMIReUMyBplxD5UbhOBZ/preview",
};

export const FOOTER_LINKS = {
  Explore: [
    { label: "Technology", href: "/technology" },
    { label: "Products", href: "/products" },
    { label: "Founder", href: "/founder" },
  ],
  Gallery: [
    { label: "Media", href: "/media" },
    { label: "Artists & Projects", href: "/artists-projects" },
  ],
  Contact: [
    { label: "Distributors & Partners", href: "/request-evaluation" },
    { label: "Musicians & Owners", href: "/experience" },
  ],
};

/** The two ways in: every "contact" entry point leads to these. */
export const CONTACT_PATHS = [
  {
    id: "partners",
    title: "For Distributors & Industry Partners",
    description:
      "We are looking for distributors, instrument shops, workshops and industry partners interested in evaluating Strad Plus and exploring opportunities to represent it in their local market.",
    cta: "Request an Evaluation Sample",
    href: "/request-evaluation",
    question: "Representing Strad Plus in your market?",
  },
  {
    id: "musicians",
    title: "For Musicians & Instrument Owners",
    description:
      "Interested in experiencing Strad Plus on your own instrument? Contact us to learn about product availability, ordering information and how Strad Plus can be applied to your instrument.",
    cta: "Contact Strad Plus",
    href: "/experience",
    question: "Looking for Strad Plus for your own instrument?",
  },
];
