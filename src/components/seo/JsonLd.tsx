import { CONTACT_INFO, SITE_DESCRIPTION, SITE_NAME, SITE_URL } from "@/lib/constants";

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

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE_NAME,
        url: SITE_URL,
        description: SITE_DESCRIPTION,
        founder: { "@type": "Person", name: "Nguyễn Xuân Huy" },
        email: CONTACT_INFO.email,
        telephone: CONTACT_INFO.phone,
        contactPoint: {
          "@type": "ContactPoint",
          email: CONTACT_INFO.email,
          telephone: CONTACT_INFO.phone,
          contactType: "sales",
          availableLanguage: "English",
        },
      }}
    />
  );
}

export function ProductJsonLd({
  name,
  description,
  slug,
}: {
  name: string;
  description: string;
  slug: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Product",
        name,
        description,
        url: `${SITE_URL}/products/${slug}`,
        brand: { "@type": "Brand", name: SITE_NAME },
      }}
    />
  );
}
