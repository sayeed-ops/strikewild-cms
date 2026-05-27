import { groq } from "next-sanity";
import { sanityClient } from "./client";
import type {
  Offer,
  FaqEntry,
  SiteSettings,
  HeroSection,
  EducationSection,
  ExplainerSection,
  OtherDealsSection,
  ResponsibleSection,
  FooterSection,
  NavSection,
} from "./types";

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

const heroQuery = groq`*[_type == "heroSection"][0]`;
const educationQuery = groq`*[_type == "educationSection"][0]`;
const explainerQuery = groq`*[_type == "explainerSection"][0]`;
const otherDealsQuery = groq`*[_type == "otherDealsSection"][0]`;
const responsibleQuery = groq`*[_type == "responsibleSection"][0]`;
const footerQuery = groq`*[_type == "footerSection"][0]`;
const navQuery = groq`*[_type == "navSection"][0]`;

export async function getOffers(): Promise<Offer[]> {
  return sanityClient.fetch<Offer[]>(offersQuery);
}

export async function getFaq(): Promise<FaqEntry[]> {
  return sanityClient.fetch<FaqEntry[]>(faqQuery);
}

export async function getSiteSettings(): Promise<SiteSettings | null> {
  return sanityClient.fetch<SiteSettings | null>(siteSettingsQuery);
}

export async function getSections(): Promise<{
  hero: HeroSection | null;
  education: EducationSection | null;
  explainer: ExplainerSection | null;
  otherDeals: OtherDealsSection | null;
  responsible: ResponsibleSection | null;
  footer: FooterSection | null;
  nav: NavSection | null;
}> {
  const [hero, education, explainer, otherDeals, responsible, footer, nav] =
    await Promise.all([
      sanityClient.fetch<HeroSection | null>(heroQuery),
      sanityClient.fetch<EducationSection | null>(educationQuery),
      sanityClient.fetch<ExplainerSection | null>(explainerQuery),
      sanityClient.fetch<OtherDealsSection | null>(otherDealsQuery),
      sanityClient.fetch<ResponsibleSection | null>(responsibleQuery),
      sanityClient.fetch<FooterSection | null>(footerQuery),
      sanityClient.fetch<NavSection | null>(navQuery),
    ]);
  return { hero, education, explainer, otherDeals, responsible, footer, nav };
}
