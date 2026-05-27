/**
 * Canonical defaults for each homepage section, matching the original
 * hardcoded JSX. These are used:
 *   (a) when Sanity isn't configured, so the site still renders.
 *   (b) when a Sanity field is missing/empty, so partial migrations look fine.
 *   (c) as the seed payload for the migration script.
 */
import type {
  HeroSection,
  EducationSection,
  ExplainerSection,
  OtherDealsSection,
  ResponsibleSection,
  FooterSection,
  NavSection,
} from "@/lib/sanity/types";

export const defaultHero: Required<
  Pick<
    HeroSection,
    | "eyebrow"
    | "headlinePrefix"
    | "headlineHighlight"
    | "headlineSuffix"
    | "subheadline"
    | "primaryCtaLabel"
    | "primaryCtaHref"
    | "ghostCtaLabel"
    | "ghostCtaHref"
    | "legal"
    | "ticker"
    | "trustCards"
  >
> = {
  eyebrow: "UKGC Licensed · Updated 26 May 2026",
  headlinePrefix: "The ",
  headlineHighlight: "best free spins",
  headlineSuffix: " in the UK.\nNo fluff, no fine print.",
  subheadline:
    "Every offer below is verified, fully compliant with the new 10× wagering cap, and ranked by what actually pays out — not by who pays us more.",
  primaryCtaLabel: "See top offers",
  primaryCtaHref: "#offers",
  ghostCtaLabel: "How we rank operators",
  ghostCtaHref: "#how",
  legal: "// 18+ · BeGambleAware.org",
  ticker: [
    { label: "OFFERS CLAIMED TODAY", value: "86,345", highlight: true },
    { label: "OPERATORS REVIEWED", value: "17" },
    { label: "AVG PAYOUT", value: "4.2 days" },
    { label: "NEW RULES", value: "JAN 2026" },
    { label: "NO DEPOSIT PICKS", value: "3" },
    { label: "NO WAGERING OFFERS", value: "12", highlight: true },
    { label: "EXCLUSIVE OFFERS", value: "2" },
    { label: "UKGC LICENSED", value: "100%", highlight: true },
  ],
  trustCards: [
    {
      value: "10×",
      label: "Max wagering cap",
      description: "New UKGC rule effective Jan 2026 — every offer complies.",
      highlightValue: true,
    },
    {
      value: "17",
      label: "Operators reviewed",
      description: "Only UKGC-licensed casinos make the list.",
    },
    {
      value: "£0",
      label: "No-deposit picks",
      description: "Try real games before risking a penny of your own.",
    },
    {
      value: "<24h",
      label: "Avg withdrawal",
      description: "Median payout time on our top 5 operators.",
    },
  ],
};

export const defaultEducation: Required<
  Pick<EducationSection, "eyebrow" | "title" | "cards">
> = {
  eyebrow: "// 03 · The 2026 rules, explained",
  title: "What changed for free spins in 2026",
  cards: [
    {
      eyebrow: "New rule · effective 19 Jan 2026",
      title: "Wagering capped at 10× the bonus",
      paragraphs: [
        "The UK Gambling Commission introduced a maximum wagering requirement of 10× across all bonus types. The old industry standard was 35×–60× — making most bonuses practically un-winnable.",
        "This change drives transparency, reduces complexity, and makes more bonuses actually claimable.",
      ],
      stats: [
        { value: "35–60×", label: "Old wagering range" },
        { value: "10×", label: "New maximum", highlight: true },
        { value: "~6×", label: "Easier to clear" },
      ],
    },
    {
      eyebrow: "How we rank",
      title: "We test every operator, every month",
      paragraphs: [
        "Real accounts. Real deposits. Real withdrawal attempts at five different amounts. We log registration friction, verification speed, bonus fairness and payout time — then re-rank monthly.",
        "We earn affiliate commission on signups. Commission rates do not influence rankings — our editor signs off every list.",
      ],
      stats: [
        { value: "5", label: "Withdrawal tests" },
        { value: "30d", label: "Re-rank cycle" },
        { value: "100%", label: "UKGC licensed", highlight: true },
      ],
    },
  ],
};

export const defaultExplainer: Required<
  Pick<ExplainerSection, "eyebrow" | "title" | "rightMeta" | "cards">
> = {
  eyebrow: "// 04 · Free spins offers explained",
  title: "No deposit, no wagering & the new 2026 rules",
  rightMeta: "Fully UKGC compliant",
  cards: [
    {
      icon: "clock",
      title: "What are wagering requirements?",
      body: "When a casino offers a bonus or free spins, wagering requirements determine how many times you must bet your winnings before withdrawing. Under the new 2026 rules, the maximum is 10× — far more transparent than the 35×–60× previously common.",
      tag: "Cap: 10× max",
    },
    {
      icon: "menu",
      title: "No wagering free spins",
      body: "No-wagering bonuses eliminate playthrough requirements entirely. All winnings are immediately withdrawable as cash. They provide the clearest value and remain fully compliant with UK regulations — typically offering fewer spins (10–30) in exchange for simplicity.",
      tag: "0× playthrough",
    },
    {
      icon: "card",
      title: "No deposit free spins",
      body: "No-deposit bonuses require no upfront payment. Claim them by registering at a UKGC-licensed casino — letting UK players test slots and operators risk-free. They typically include max-win caps (£50–£100) and shorter expiry periods (24–48 hours).",
      tag: "£0 to start",
    },
    {
      icon: "warning",
      title: "New mixed-product ban",
      body: "Effective 19 January 2026, operators cannot offer promotions requiring players to engage with multiple gambling products (e.g. slots and sports betting) to unlock a single bonus. Simpler, safer promotional offers focused on a single product.",
      tag: "Single product only",
    },
  ],
};

export const defaultOtherDeals: Required<
  Pick<
    OtherDealsSection,
    "eyebrow" | "titlePrefix" | "titleHighlight" | "body" | "items" | "ctaLabel" | "ctaHref"
  >
> = {
  eyebrow: "// 06 · Beyond casino",
  titlePrefix: "Other deals from ",
  titleHighlight: "StrikeWild",
  body: "Free spins are just the start. Unlock exclusive deals across travel, shopping, dining and more — all hand-picked for StrikeWild members.",
  items: [
    { icon: "house", label: "Travel" },
    { icon: "bag", label: "Shopping" },
    { icon: "fork", label: "Dining" },
    { icon: "globe", label: "And more" },
  ],
  ctaLabel: "Discover deals now",
  ctaHref: "#",
};

export const defaultResponsible: Required<
  Pick<
    ResponsibleSection,
    "title" | "intro" | "tools" | "bodyParagraphs" | "supportLine" | "resources"
  >
> = {
  title: "Responsible gaming",
  intro:
    "Gambling can turn into an addiction. Always make use of the responsible-gaming tools available to you by online operators to help you stay in control.",
  tools: [
    { title: "Deposit limits", description: "Cap daily / weekly spend" },
    { title: "Reality checks", description: "Session-time reminders" },
    { title: "Self-exclusion", description: "Time-out or block your account" },
    { title: "GAMSTOP", description: "National self-exclusion scheme" },
  ],
  bodyParagraphs: [
    "Only stake money you can afford to lose. All operators licensed by the Gambling Commission of Great Britain provide responsible-gambling information — it is their responsibility to create a legal, fair and reliable environment where players can enjoy the thrill of an online casino.",
    "The Gambling Commission of Great Britain licenses and regulates businesses that offer gambling services in Great Britain. Our mission is to provide you with only the best online-slots experience by reviewing and recommending sites that are licensed to operate by the Gambling Commission.",
  ],
  supportLine:
    "If gambling is affecting you or someone you know, support is available 24/7:",
  resources: [
    { kind: "age", label: "18+" },
    {
      kind: "ga",
      label: "BeGambleAware",
      sublabel: ".org",
      href: "https://www.begambleaware.org",
    },
    {
      kind: "gc",
      label: "GamCare",
      sublabel: "0808 8020 133",
      href: "https://www.gamcare.org.uk",
    },
    {
      kind: "gs",
      label: "GAMSTOP",
      sublabel: "Self-exclude",
      href: "https://www.gamstop.co.uk",
    },
    { kind: "ukgc", label: "UKGC", sublabel: "Licensed only" },
  ],
};

export const defaultFooter: Required<
  Pick<
    FooterSection,
    "aboutText" | "columns" | "copyright" | "regulatorBadges"
  >
> = {
  aboutText:
    "StrikeWild is an independent affiliate comparing free-spins offers from UKGC-licensed operators. All featured bonuses comply with UK Gambling Commission regulations effective January 2026. We verify terms daily, test registration processes, and update recommendations to reflect current regulatory standards.",
  columns: [
    {
      heading: "Compare",
      links: [
        { label: "All free spins", href: "#" },
        { label: "No deposit", href: "#" },
        { label: "No wagering", href: "#" },
        { label: "Exclusive offers", href: "#" },
        { label: "New in 2026", href: "#" },
      ],
    },
    {
      heading: "Learn",
      links: [
        { label: "2026 UKGC rules", href: "#" },
        { label: "Wagering 101", href: "#" },
        { label: "Glossary", href: "#" },
        { label: "Our methodology", href: "#" },
      ],
    },
    {
      heading: "Trust",
      links: [
        { label: "Terms & conditions", href: "#" },
        { label: "Privacy policy", href: "#" },
        { label: "Editorial policy", href: "#" },
        { label: "Contact", href: "#" },
      ],
    },
  ],
  copyright: "© 2026 StrikeWild · Independent affiliate",
  regulatorBadges: ["UKGC", "GAMBLEAWARE", "GAMCARE", "GAMSTOP"],
};

export const defaultNav: Required<
  Pick<NavSection, "links" | "liveStat" | "ctaLabel" | "ctaHref">
> = {
  links: [
    { label: "Free spins", href: "#offers" },
    { label: "2026 rules", href: "#rules" },
    { label: "Explained", href: "#explained" },
    { label: "FAQ", href: "#faq" },
    { label: "Responsible", href: "#responsible" },
  ],
  liveStat: "86,345 claimed today",
  ctaLabel: "See top offers",
  ctaHref: "#offers",
};

export const defaultSiteContent = {
  hero: defaultHero,
  education: defaultEducation,
  explainer: defaultExplainer,
  otherDeals: defaultOtherDeals,
  responsible: defaultResponsible,
  footer: defaultFooter,
  nav: defaultNav,
};

export type ResolvedHero = typeof defaultHero;
export type ResolvedEducation = typeof defaultEducation;
export type ResolvedExplainer = typeof defaultExplainer;
export type ResolvedOtherDeals = typeof defaultOtherDeals;
export type ResolvedResponsible = typeof defaultResponsible;
export type ResolvedFooter = typeof defaultFooter;
export type ResolvedNav = typeof defaultNav;

export interface ResolvedSections {
  hero: ResolvedHero;
  education: ResolvedEducation;
  explainer: ResolvedExplainer;
  otherDeals: ResolvedOtherDeals;
  responsible: ResolvedResponsible;
  footer: ResolvedFooter;
  nav: ResolvedNav;
}
