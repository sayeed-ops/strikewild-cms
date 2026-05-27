/**
 * Unified data layer.
 *
 * Reads from Sanity when NEXT_PUBLIC_SANITY_PROJECT_ID is configured.
 * Falls back to the hardcoded lib/offers.ts + lib/faq.ts otherwise,
 * so the site still builds before Sanity is wired up.
 *
 * Once Sanity is the sole source of truth, delete lib/offers.ts and
 * lib/faq.ts and inline the queries here.
 */
import type {
  Offer as SanityOffer,
  FaqEntry as SanityFaqEntry,
  PillColor,
  RibbonKind as RawRibbonKind,
  FilterKey,
} from "@/lib/sanity/types";

export type RibbonKind = Exclude<RawRibbonKind, "">;
export type { PillColor, FilterKey };

export interface OfferTag {
  color: PillColor;
  label: string;
}

export interface Offer {
  id: string;
  rank: number;
  brand: string;
  logoUrl: string;
  title: string;
  desc: string;
  slots: number;
  rating: number;
  ribbon?: RibbonKind;
  tags: OfferTag[];
  filters: FilterKey[];
  payoutDays: number;
  ctaUrl?: string;
}

export interface FaqEntry {
  id: string;
  question: string;
  answer: string;
}

function isSanityConfigured(): boolean {
  const id = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  return !!id && id !== "your-project-id";
}

function fromSanityOffer(o: SanityOffer): Offer {
  return {
    id: o._id,
    rank: o.rank,
    brand: o.brand,
    logoUrl: o.logoUrl,
    title: o.title,
    desc: o.desc,
    slots: o.slots,
    rating: o.rating,
    ribbon: o.ribbon ? o.ribbon : undefined,
    tags: o.tags ?? [],
    filters: o.filters ?? [],
    payoutDays: o.payoutDays,
    ctaUrl: o.ctaUrl,
  };
}

function fromSanityFaq(f: SanityFaqEntry): FaqEntry {
  return { id: f._id, question: f.question, answer: f.answer };
}

async function loadFromSanity(): Promise<{ offers: Offer[]; faq: FaqEntry[] }> {
  const { getOffers, getFaq } = await import("@/lib/sanity/queries");
  const [rawOffers, rawFaq] = await Promise.all([getOffers(), getFaq()]);
  return {
    offers: rawOffers.map(fromSanityOffer),
    faq: rawFaq.map(fromSanityFaq),
  };
}

async function loadFromFallback(): Promise<{ offers: Offer[]; faq: FaqEntry[] }> {
  const { offers: hardcoded } = await import("@/lib/offers");
  const { faq: hardcodedFaq } = await import("@/lib/faq");
  const offers: Offer[] = hardcoded.map((o) => ({
    id: `offer-${o.rank}`,
    rank: o.rank,
    brand: o.brand,
    logoUrl: o.logoSrc,
    title: o.title,
    desc: o.desc,
    slots: o.slots,
    rating: o.rating,
    ribbon: o.ribbon,
    tags: o.tags.map(([color, label]) => ({ color, label })),
    filters: o.filters,
    payoutDays: o.payoutDays,
  }));
  const faq: FaqEntry[] = hardcodedFaq.map((f, i) => ({
    id: `faq-${i + 1}`,
    question: f.q,
    answer: f.a,
  }));
  return { offers, faq };
}

export async function getContent(): Promise<{
  offers: Offer[];
  faq: FaqEntry[];
}> {
  return isSanityConfigured() ? loadFromSanity() : loadFromFallback();
}
