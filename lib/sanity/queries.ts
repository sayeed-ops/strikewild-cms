import { groq } from "next-sanity";
import { sanityClient } from "./client";
import type { Offer, FaqEntry, SiteSettings } from "./types";

const offersQuery = groq`
  *[_type == "offer"] | order(rank asc) {
    _id,
    rank,
    brand,
    "logo": logo,
    "logoUrl": logo.asset->url,
    title,
    desc,
    slots,
    rating,
    ribbon,
    "tags": coalesce(tags[]{ color, label }, []),
    "filters": coalesce(filters, []),
    payoutDays,
    ctaUrl,
  }
`;

const faqQuery = groq`
  *[_type == "faq"] | order(order asc) {
    _id,
    order,
    question,
    answer,
  }
`;

const siteSettingsQuery = groq`
  *[_type == "siteSettings"][0]{
    siteName,
    defaultTitle,
    defaultDescription,
    "ogImage": ogImage,
    "ogImageUrl": ogImage.asset->url,
    navStat,
  }
`;

export async function getOffers(): Promise<Offer[]> {
  return sanityClient.fetch<Offer[]>(offersQuery);
}

export async function getFaq(): Promise<FaqEntry[]> {
  return sanityClient.fetch<FaqEntry[]>(faqQuery);
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return sanityClient.fetch<SiteSettings | null>(siteSettingsQuery);
}
