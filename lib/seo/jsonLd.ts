import type { Offer, FaqEntry } from "@/lib/data";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://strikewild.example.com";
const SITE_NAME = "StrikeWild";

type JsonLdNode = Record<string, unknown>;

function organization(): JsonLdNode {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: SITE_NAME,
    url: SITE_URL,
    logo: {
      "@type": "ImageObject",
      url: `${SITE_URL}/assets/logos/strikewild.svg`,
    },
  };
}

function website(): JsonLdNode {
  return {
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    url: SITE_URL,
    name: SITE_NAME,
    inLanguage: "en-GB",
    publisher: { "@id": `${SITE_URL}/#organization` },
  };
}

function faqPage(faq: FaqEntry[]): JsonLdNode {
  return {
    "@type": "FAQPage",
    "@id": `${SITE_URL}/#faq`,
    mainEntity: faq.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

function itemList(offers: Offer[]): JsonLdNode {
  return {
    "@type": "ItemList",
    "@id": `${SITE_URL}/#offers`,
    name: "Best UK free spins offers 2026",
    itemListOrder: "https://schema.org/ItemListOrderAscending",
    numberOfItems: offers.length,
    itemListElement: offers.map((o) => ({
      "@type": "ListItem",
      position: o.rank,
      item: {
        "@type": "Offer",
        name: `${o.brand} — ${o.title}`,
        description: o.desc,
        seller: {
          "@type": "Organization",
          name: o.brand,
        },
        aggregateRating: {
          "@type": "AggregateRating",
          ratingValue: o.rating,
          bestRating: 10,
          worstRating: 0,
          ratingCount: o.slots,
        },
      },
    })),
  };
}

export function buildHomepageJsonLd(
  offers: Offer[],
  faq: FaqEntry[]
): string {
  const graph = {
    "@context": "https://schema.org",
    "@graph": [organization(), website(), faqPage(faq), itemList(offers)],
  };
  return JSON.stringify(graph);
}
