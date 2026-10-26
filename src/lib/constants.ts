export const SITE_NAME = "Strad Plus";
export const SITE_TAGLINE = "The acoustic DNA of wood";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://stradplus.com";
export const SITE_DESCRIPTION =
  "Strad Plus is an acoustic formula that changes how wood resonates. Developed over thirty years by master luthier and researcher Nguyễn Xuân Huy, for instruments, interiors and professional sport.";

export const NAV_LINKS = [
  { label: "Technology", href: "/technology" },
  { label: "Products", href: "/products" },
  { label: "Founder", href: "/founder" },
  { label: "Media", href: "/media" },
  { label: "Artists & Projects", href: "/artists-projects" },
  { label: "Contact", href: "/contact" },
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
    { label: "Contact form", href: "/contact" },
    { label: "Distributor inquiry", href: "/inquiry" },
  ],
};
