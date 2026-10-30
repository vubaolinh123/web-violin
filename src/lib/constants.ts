export const SITE_NAME = "Strad Plus";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://stradplus.com";

// Displayed text (navigation, tagline, contact paths…) is per language, in src/lib/dictionary.ts.

export const CONTACT_INFO = {
  email: "contact@stradplus.com",
  phone: "+49 176 3169 3400",
  phoneHref: "+4917631693400",
};

/** Google Drive file id of the Nguyễn Xuân Huy interview. */
export const INTERVIEW_VIDEO = {
  id: "1Xl3NP5Igv9flgMIReUMyBplxD5UbhOBZ",
  watchUrl:
    "https://drive.google.com/file/d/1Xl3NP5Igv9flgMIReUMyBplxD5UbhOBZ/view",
  embedUrl:
    "https://drive.google.com/file/d/1Xl3NP5Igv9flgMIReUMyBplxD5UbhOBZ/preview",
};
