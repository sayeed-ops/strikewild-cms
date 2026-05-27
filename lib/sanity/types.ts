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

// --- Section singletons ---

export interface HeroTickerItem {
  label: string;
  value: string;
  highlight?: boolean;
}

export interface HeroTrustCard {
  value: string;
  label: string;
  description: string;
  highlightValue?: boolean;
}

export interface HeroSection {
  eyebrow?: string;
  headlinePrefix?: string;
  headlineHighlight?: string;
  headlineSuffix?: string;
  subheadline?: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  ghostCtaLabel?: string;
  ghostCtaHref?: string;
  legal?: string;
  ticker?: HeroTickerItem[];
  trustCards?: HeroTrustCard[];
}

export interface EducationStat {
  value: string;
  label: string;
  highlight?: boolean;
}

export interface EducationCard {
  eyebrow?: string;
  title: string;
  paragraphs: string[];
  stats?: EducationStat[];
}

export interface EducationSection {
  eyebrow?: string;
  title?: string;
  cards?: EducationCard[];
}

export interface ExplainerCard {
  icon: string;
  title: string;
  body: string;
  tag?: string;
}

export interface ExplainerSection {
  eyebrow?: string;
  title?: string;
  rightMeta?: string;
  cards?: ExplainerCard[];
}

export interface OtherDealsItem {
  icon: string;
  label: string;
}

export interface OtherDealsSection {
  eyebrow?: string;
  titlePrefix?: string;
  titleHighlight?: string;
  body?: string;
  items?: OtherDealsItem[];
  ctaLabel?: string;
  ctaHref?: string;
}

export interface ResponsibleTool {
  title: string;
  description: string;
}

export interface ResponsibleResource {
  kind: "age" | "ga" | "gc" | "gs" | "ukgc";
  label?: string;
  sublabel?: string;
  href?: string;
}

export interface ResponsibleSection {
  title?: string;
  intro?: string;
  tools?: ResponsibleTool[];
  bodyParagraphs?: string[];
  supportLine?: string;
  resources?: ResponsibleResource[];
}

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterColumn {
  heading: string;
  links: FooterLink[];
}

export interface FooterSection {
  aboutText?: string;
  columns?: FooterColumn[];
  copyright?: string;
  regulatorBadges?: string[];
}

export interface NavLink {
  label: string;
  href: string;
}

export interface NavSection {
  links?: NavLink[];
  liveStat?: string;
  ctaLabel?: string;
  ctaHref?: string;
}

export interface SiteContent {
  hero?: HeroSection;
  education?: EducationSection;
  explainer?: ExplainerSection;
  otherDeals?: OtherDealsSection;
  responsible?: ResponsibleSection;
  footer?: FooterSection;
  nav?: NavSection;
}
