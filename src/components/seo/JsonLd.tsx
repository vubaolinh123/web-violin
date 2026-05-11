interface JsonLdProps {
  data: Record<string, unknown>;
}

export default function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function OrganizationJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Arco Violins",
        url: "https://arcoviolins.com",
        logo: "https://arcoviolins.com/images/logo.svg",
        description:
          "Premium violin shop offering handcrafted violins, bows, and accessories for musicians and collectors worldwide.",
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+1-212-555-0182",
          contactType: "customer service",
          availableLanguage: "English",
        },
        sameAs: [
          "https://instagram.com/arcoviolins",
          "https://facebook.com/arcoviolins",
          "https://youtube.com/@arcoviolins",
        ],
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "Arco Violins",
        url: "https://arcoviolins.com",
        potentialAction: {
          "@type": "SearchAction",
          target: "https://arcoviolins.com/search?q={search_term_string}",
          "query-input": "required name=search_term_string",
        },
      }}
    />
  );
}

export function ProductJsonLd({
  name,
  description,
  price,
  image,
  sku,
  inStock,
  rating,
  reviewCount,
}: {
  name: string;
  description: string;
  price: number;
  image: string;
  sku: string;
  inStock: boolean;
  rating: number;
  reviewCount: number;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Product",
        name,
        description,
        image,
        sku,
        brand: { "@type": "Brand", name: "Arco Violins" },
        offers: {
          "@type": "Offer",
          price,
          priceCurrency: "USD",
          availability: inStock
            ? "https://schema.org/InStock"
            : "https://schema.org/OutOfStock",
          url: `https://arcoviolins.com/shop/${sku}`,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: rating,
          reviewCount,
        },
      }}
    />
  );
}
