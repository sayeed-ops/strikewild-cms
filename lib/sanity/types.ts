import type { SanityImageSource } from "@sanity/image-url";

export type PillColor = "" | "green" | "yellow" | "pink" | "blue" | "orange";
export type RibbonKind = "" | "new" | "exclusive" | "choice" | "code";
export type FilterKey = "no-deposit" | "no-wagering" | "exclusive" | "new";

export interface OfferTag {
  color: PillColor;
  label: string;
}

export interface Offer {
  _id: string;
  rank: number;
  brand: string;
  logo: SanityImageSource;
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
  _id: string;
  order: number;
  question: string;
  answer: string;
}

export interface SiteSettings {
  siteName: string;
  defaultTitle: string;
  defaultDescription: string;
  ogImage?: SanityImageSource;
  ogImageUrl?: string;
  navStat?: string;
}
