import { CONTACT_INFO, SITE_NAME, SITE_URL } from "@/lib/constants";
import { getDictionary } from "@/lib/dictionary";
import { localePath, type Locale } from "@/lib/i18n";

interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      // "<" is escaped so that the payload can never close the script tag
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  );
}

export function OrganizationJsonLd({ lang }: { lang: Locale }) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        description: getDictionary(lang).site.description,
        founder: { "@type": "Person", name: "Nguyễn Xuân Huy" },
        email: CONTACT_INFO.email,
        telephone: CONTACT_INFO.phone,
        contactPoint: {
          "@type": "ContactPoint",
          email: CONTACT_INFO.email,
          telephone: CONTACT_INFO.phone,
          contactType: "sales",
          availableLanguage: ["English", "Vietnamese"],
        },
      }}
    />
  );
}

export function ProductJsonLd({
  name,
  description,
  slug,
  lang,
}: {
  name: string;
  description: string;
  slug: string;
  lang: Locale;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Product",
        name,
        description,
        url: `${SITE_URL}${localePath(lang, `/products/${slug}`)}`,
        brand: { "@type": "Brand", name: SITE_NAME },
      }}
    />
  );
}
