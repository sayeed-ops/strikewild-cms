export type PillColor = "" | "green" | "yellow" | "pink" | "blue" | "orange";
export type RibbonKind = "new" | "exclusive" | "choice" | "code";
export type FilterKey = "no-deposit" | "no-wagering" | "exclusive" | "new";

export interface Offer {
  rank: number;
  brand: string;
  logoSrc: string;
  title: string;
  desc: string;
  slots: number;
  rating: number;
  ribbon?: RibbonKind;
  tags: [PillColor, string][];
  filters: FilterKey[];
  payoutDays: number;
}

export const offers: Offer[] = [
  { rank: 1, brand: "MrQ", logoSrc: "/assets/logos/MRQ.svg", title: "300 Cash Spins", desc: "No wagering · spins credited on first deposit · 3-day expiry.", slots: 900, rating: 10.0, ribbon: "new", tags: [["green", "No wagering"], ["", "£10 deposit"]], filters: ["no-wagering", "new"], payoutDays: 1 },
  { rank: 2, brand: "Coral", logoSrc: "/assets/logos/coral.svg", title: "100 Free Spins", desc: "£10 deposit · spins on Big Bass series · 7-day expiry.", slots: 4324, rating: 9.9, tags: [["green", "No wagering"], ["", "£10 deposit"]], filters: ["no-wagering"], payoutDays: 3 },
  { rank: 3, brand: "Ladbrokes", logoSrc: "/assets/logos/lagbrokes.webp", title: "100 Free Spins", desc: "StrikeWild exclusive · register and verify your account.", slots: 4443, rating: 9.9, ribbon: "exclusive", tags: [["pink", "Exclusive"], ["green", "No wagering"]], filters: ["no-wagering", "exclusive"], payoutDays: 2 },
  { rank: 4, brand: "bwin", logoSrc: "/assets/logos/bwin.webp", title: "100 Free Spins", desc: "£10 deposit · big casino games · fast withdrawal verified.", slots: 5000, rating: 9.9, tags: [["blue", "Fast withdrawal"], ["", "£10 deposit"]], filters: [], payoutDays: 1 },
  { rank: 5, brand: "Foxy Bingo", logoSrc: "/assets/logos/foxybingo.webp", title: "200 Free Spins", desc: "Brand new operator · no wagering · 7-day expiry on spins.", slots: 2500, rating: 9.8, ribbon: "new", tags: [["green", "No wagering"], ["yellow", "Brand new"]], filters: ["no-wagering", "new"], payoutDays: 3 },
  { rank: 6, brand: "William Hill Vegas", logoSrc: "/assets/logos/william%20hill.webp", title: "200 Free Spins", desc: "Code WHV200 · spins on Big Bass Splash · 200 slots only.", slots: 1000, rating: 9.8, ribbon: "code", tags: [["blue", "Code: WHV200"], ["", "£10 deposit"]], filters: [], payoutDays: 4 },
  { rank: 7, brand: "Sky Vegas", logoSrc: "/assets/logos/skyvegas.webp", title: "70 Free Spins", desc: "No deposit & no wagering · best choice for first-time players.", slots: 2700, rating: 9.8, ribbon: "choice", tags: [["green", "No deposit"], ["green", "No wagering"]], filters: ["no-deposit", "no-wagering"], payoutDays: 2 },
  { rank: 8, brand: "Betfair", logoSrc: "/assets/logos/betfair.webp", title: "50 Free Spins", desc: "No deposit & no wagering · 1,000 qualifying slots.", slots: 1000, rating: 9.8, ribbon: "choice", tags: [["green", "No deposit"], ["green", "No wagering"]], filters: ["no-deposit", "no-wagering"], payoutDays: 2 },
  { rank: 9, brand: "Mr Vegas", logoSrc: "/assets/logos/mr%20vegas.webp", title: "100% up to £50 + 11 spins", desc: "Welcome bonus · 10× wagering on deposit match.", slots: 850, rating: 9.7, tags: [["blue", "10× wagering"], ["", "Welcome"]], filters: [], payoutDays: 5 },
  { rank: 10, brand: "Betfred", logoSrc: "/assets/logos/betfred.webp", title: "200 Free Spins", desc: "Stake £10 · no wagering on winnings · 14-day expiry.", slots: 250, rating: 9.7, tags: [["green", "No wagering"], ["", "Stake £10"]], filters: ["no-wagering"], payoutDays: 3 },
  { rank: 11, brand: "Lucky Vegas", logoSrc: "/assets/logos/lucky%20vegas.webp", title: "100 Free Spins", desc: "Bonus on Big Bass Bonanza · spread over 5 days.", slots: 3000, rating: 9.7, tags: [["yellow", "Daily drops"], ["", "Big Bass"]], filters: [], payoutDays: 4 },
  { rank: 12, brand: "Mecca", logoSrc: "/assets/logos/mecca.webp", title: "50 Free Spins + £20", desc: "£20 slot bonus · daily prize draws · low playthrough.", slots: 700, rating: 9.6, tags: [["yellow", "Daily prizes"], ["", "£10 deposit"]], filters: [], payoutDays: 2 },
  { rank: 13, brand: "Paddy Power", logoSrc: "/assets/logos/paddypower%20games.webp", title: "60 Free Spins", desc: "No deposit & no wagering · 30-day expiry · UK only.", slots: 1000, rating: 9.6, tags: [["green", "No deposit"], ["green", "No wagering"]], filters: ["no-deposit", "no-wagering"], payoutDays: 3 },
  { rank: 14, brand: "Lottomart", logoSrc: "/assets/logos/lottomart%20games.webp", title: "500 Free Spins", desc: "No wagering on winnings · Lottomart exclusive.", slots: 4000, rating: 9.6, ribbon: "exclusive", tags: [["pink", "Exclusive"], ["green", "No wagering"]], filters: ["no-wagering", "exclusive"], payoutDays: 3 },
  { rank: 15, brand: "BetVictor", logoSrc: "/assets/logos/vetvictor.webp", title: "50 Free Spins + £20", desc: "No-wagering free spins · £20 casino bonus included.", slots: 4370, rating: 9.5, tags: [["green", "No wagering"], ["", "£20 bonus"]], filters: ["no-wagering"], payoutDays: 3 },
  { rank: 16, brand: "LeoVegas", logoSrc: "/assets/logos/leovegas.webp", title: "50 Free Spins", desc: "No wagering · spins valid 7 days on selected slots.", slots: 550, rating: 9.5, ribbon: "new", tags: [["green", "No wagering"], ["yellow", "New"]], filters: ["no-wagering", "new"], payoutDays: 4 },
  { rank: 17, brand: "Monopoly", logoSrc: "/assets/logos/monopoly.webp", title: "30 Free Spins", desc: "No wagering on winnings · no max-win cap on payouts.", slots: 892, rating: 9.5, tags: [["green", "No wagering"], ["green", "No caps"]], filters: ["no-wagering"], payoutDays: 3 },
];
