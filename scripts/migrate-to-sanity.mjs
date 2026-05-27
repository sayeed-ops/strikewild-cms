#!/usr/bin/env node
/**
 * One-off migration: seed Sanity from lib/offers.ts and lib/faq.ts.
 *
 * Usage:
 *   1. Fill in .env.local with NEXT_PUBLIC_SANITY_PROJECT_ID, NEXT_PUBLIC_SANITY_DATASET,
 *      and SANITY_WRITE_TOKEN (Editor token from sanity.io/manage > API > Tokens).
 *   2. Run: npm run migrate
 *   3. Verify in Studio: npm run studio:dev
 *   4. Delete this script + revoke the write token.
 *
 * Idempotent: re-running will replace existing docs (same _id), not duplicate.
 */

import { createClient } from "@sanity/client";
import { readFileSync, existsSync } from "node:fs";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { createReadStream } from "node:fs";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");

// --- Load .env.local manually (no dotenv dep) ---
const envPath = path.join(root, ".env.local");
if (existsSync(envPath)) {
  for (const line of readFileSync(envPath, "utf8").split("\n")) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m) process.env[m[1]] ??= m[2].replace(/^["']|["']$/g, "");
  }
}

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET ?? "production";
const token = process.env.SANITY_WRITE_TOKEN;

if (!projectId || projectId === "your-project-id") {
  console.error("❌ NEXT_PUBLIC_SANITY_PROJECT_ID not set in .env.local");
  process.exit(1);
}
if (!token) {
  console.error("❌ SANITY_WRITE_TOKEN not set in .env.local");
  process.exit(1);
}

const client = createClient({
  projectId,
  dataset,
  apiVersion: "2024-10-01",
  token,
  useCdn: false,
});

// --- Source data (inlined to avoid TS import) ---
const offers = [
  { rank: 1, brand: "MrQ", logoSrc: "/assets/logos/MRQ.svg", title: "300 Cash Spins", desc: "No wagering · spins credited on first deposit · 3-day expiry.", slots: 900, rating: 10.0, ribbon: "new", tags: [["green", "No wagering"], ["", "£10 deposit"]], filters: ["no-wagering", "new"], payoutDays: 1 },
  { rank: 2, brand: "Coral", logoSrc: "/assets/logos/coral.svg", title: "100 Free Spins", desc: "£10 deposit · spins on Big Bass series · 7-day expiry.", slots: 4324, rating: 9.9, tags: [["green", "No wagering"], ["", "£10 deposit"]], filters: ["no-wagering"], payoutDays: 3 },
  { rank: 3, brand: "Ladbrokes", logoSrc: "/assets/logos/lagbrokes.webp", title: "100 Free Spins", desc: "StrikeWild exclusive · register and verify your account.", slots: 4443, rating: 9.9, ribbon: "exclusive", tags: [["pink", "Exclusive"], ["green", "No wagering"]], filters: ["no-wagering", "exclusive"], payoutDays: 2 },
  { rank: 4, brand: "bwin", logoSrc: "/assets/logos/bwin.webp", title: "100 Free Spins", desc: "£10 deposit · big casino games · fast withdrawal verified.", slots: 5000, rating: 9.9, tags: [["blue", "Fast withdrawal"], ["", "£10 deposit"]], filters: [], payoutDays: 1 },
  { rank: 5, brand: "Foxy Bingo", logoSrc: "/assets/logos/foxybingo.webp", title: "200 Free Spins", desc: "Brand new operator · no wagering · 7-day expiry on spins.", slots: 2500, rating: 9.8, ribbon: "new", tags: [["green", "No wagering"], ["yellow", "Brand new"]], filters: ["no-wagering", "new"], payoutDays: 3 },
  { rank: 6, brand: "William Hill Vegas", logoSrc: "/assets/logos/william hill.webp", title: "200 Free Spins", desc: "Code WHV200 · spins on Big Bass Splash · 200 slots only.", slots: 1000, rating: 9.8, ribbon: "code", tags: [["blue", "Code: WHV200"], ["", "£10 deposit"]], filters: [], payoutDays: 4 },
  { rank: 7, brand: "Sky Vegas", logoSrc: "/assets/logos/skyvegas.webp", title: "70 Free Spins", desc: "No deposit & no wagering · best choice for first-time players.", slots: 2700, rating: 9.8, ribbon: "choice", tags: [["green", "No deposit"], ["green", "No wagering"]], filters: ["no-deposit", "no-wagering"], payoutDays: 2 },
  { rank: 8, brand: "Betfair", logoSrc: "/assets/logos/betfair.webp", title: "50 Free Spins", desc: "No deposit & no wagering · 1,000 qualifying slots.", slots: 1000, rating: 9.8, ribbon: "choice", tags: [["green", "No deposit"], ["green", "No wagering"]], filters: ["no-deposit", "no-wagering"], payoutDays: 2 },
  { rank: 9, brand: "Mr Vegas", logoSrc: "/assets/logos/mr vegas.webp", title: "100% up to £50 + 11 spins", desc: "Welcome bonus · 10× wagering on deposit match.", slots: 850, rating: 9.7, tags: [["blue", "10× wagering"], ["", "Welcome"]], filters: [], payoutDays: 5 },
  { rank: 10, brand: "Betfred", logoSrc: "/assets/logos/betfred.webp", title: "200 Free Spins", desc: "Stake £10 · no wagering on winnings · 14-day expiry.", slots: 250, rating: 9.7, tags: [["green", "No wagering"], ["", "Stake £10"]], filters: ["no-wagering"], payoutDays: 3 },
  { rank: 11, brand: "Lucky Vegas", logoSrc: "/assets/logos/lucky vegas.webp", title: "100 Free Spins", desc: "Bonus on Big Bass Bonanza · spread over 5 days.", slots: 3000, rating: 9.7, tags: [["yellow", "Daily drops"], ["", "Big Bass"]], filters: [], payoutDays: 4 },
  { rank: 12, brand: "Mecca", logoSrc: "/assets/logos/mecca.webp", title: "50 Free Spins + £20", desc: "£20 slot bonus · daily prize draws · low playthrough.", slots: 700, rating: 9.6, tags: [["yellow", "Daily prizes"], ["", "£10 deposit"]], filters: [], payoutDays: 2 },
  { rank: 13, brand: "Paddy Power", logoSrc: "/assets/logos/paddypower games.webp", title: "60 Free Spins", desc: "No deposit & no wagering · 30-day expiry · UK only.", slots: 1000, rating: 9.6, tags: [["green", "No deposit"], ["green", "No wagering"]], filters: ["no-deposit", "no-wagering"], payoutDays: 3 },
  { rank: 14, brand: "Lottomart", logoSrc: "/assets/logos/lottomart games.webp", title: "500 Free Spins", desc: "No wagering on winnings · Lottomart exclusive.", slots: 4000, rating: 9.6, ribbon: "exclusive", tags: [["pink", "Exclusive"], ["green", "No wagering"]], filters: ["no-wagering", "exclusive"], payoutDays: 3 },
  { rank: 15, brand: "BetVictor", logoSrc: "/assets/logos/vetvictor.webp", title: "50 Free Spins + £20", desc: "No-wagering free spins · £20 casino bonus included.", slots: 4370, rating: 9.5, tags: [["green", "No wagering"], ["", "£20 bonus"]], filters: ["no-wagering"], payoutDays: 3 },
  { rank: 16, brand: "LeoVegas", logoSrc: "/assets/logos/leovegas.webp", title: "50 Free Spins", desc: "No wagering · spins valid 7 days on selected slots.", slots: 550, rating: 9.5, ribbon: "new", tags: [["green", "No wagering"], ["yellow", "New"]], filters: ["no-wagering", "new"], payoutDays: 4 },
  { rank: 17, brand: "Monopoly", logoSrc: "/assets/logos/monopoly.webp", title: "30 Free Spins", desc: "No wagering on winnings · no max-win cap on payouts.", slots: 892, rating: 9.5, tags: [["green", "No wagering"], ["green", "No caps"]], filters: ["no-wagering"], payoutDays: 3 },
];

const faq = [
  { q: "What are the new UK wagering requirement rules for 2026?", a: "As of 19 January 2026, the UK Gambling Commission caps all bonus wagering requirements at a maximum of 10× the bonus amount. This replaces the previous industry practice where operators imposed 35× to 60× wagering. For example, a £10 bonus now requires a maximum of £100 total wagering — significantly improving transparency and reducing the risk of players gambling longer than intended." },
  { q: "What are no-wagering free spins?", a: "No-wagering free spins credit all winnings directly as withdrawable cash with zero playthrough requirements. Unlike standard bonuses with 10× wagering, no-wagering offers let you withdraw immediately after spinning. If you win £20 from no-wagering spins, that £20 is real cash in your account." },
  { q: "Can I still get free spins without making a deposit?", a: "Yes. No-deposit free spins remain available from UKGC-licensed casinos. These bonuses are credited upon registration and ID verification — no upfront payment required. No-deposit offers typically provide 10–50 spins and may include max-win caps (commonly £50–£100) and shorter expiry periods (24–48 hours)." },
  { q: "How do I claim a no-deposit free spins offer?", a: "Register at a participating UKGC-licensed casino through a verified link, complete standard account verification (required under UK regulations for player protection), and the spins are credited automatically. Most casinos require codes during registration." },
  { q: "What's the difference between 10× wagering and no wagering?", a: "Offers with 10× wagering require any winnings to be wagered 10 times before withdrawal. For example, a £10 win needs £100 total play-through before withdrawal. No-wagering means all winnings are withdrawable immediately as cash." },
  { q: "Why are UK wagering requirements changing in 2026?", a: "The UKGC introduced the 10× cap and mixed-product promotion ban (effective 19 January 2026) to protect consumers from confusing bonus terms and excessive gambling. Previous requirements exceeding 50× often led players to gamble longer and faster than intended." },
  { q: "Can casinos still offer deposit-match bonuses with free spins?", a: "Yes. Deposit bonuses remain available, but they must comply with the new 10× wagering cap. Additionally, promotions cannot require you to play multiple gambling products — for example, an offer cannot require both sports betting and slot play to unlock a single bonus. All terms must be displayed clearly under UKGC rules." },
];

// --- Helpers ---
function deterministicId(prefix, key) {
  // Sanity IDs allow: letters, digits, dashes, dots, underscores.
  const slug = key
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
  return `${prefix}-${slug}`;
}

async function uploadLogo(localPath) {
  const fullPath = path.join(root, "public", localPath);
  if (!existsSync(fullPath)) {
    console.warn(`⚠️  Logo not found, skipping image: ${localPath}`);
    return null;
  }
  const filename = path.basename(localPath);
  const stream = createReadStream(fullPath);
  const asset = await client.assets.upload("image", stream, { filename });
  return {
    _type: "image",
    asset: { _type: "reference", _ref: asset._id },
  };
}

// --- Migration ---
async function migrateOffers() {
  console.log(`\n📦 Migrating ${offers.length} offers...`);
  for (const o of offers) {
    const id = deterministicId("offer", o.brand);
    process.stdout.write(`  ${o.rank.toString().padStart(2)}. ${o.brand}... `);
    const logo = await uploadLogo(o.logoSrc);
    const doc = {
      _id: id,
      _type: "offer",
      rank: o.rank,
      brand: o.brand,
      logo,
      title: o.title,
      desc: o.desc,
      slots: o.slots,
      rating: o.rating,
      ribbon: o.ribbon ?? "",
      tags: o.tags.map(([color, label]) => ({
        _type: "tag",
        _key: deterministicId("t", `${color}-${label}`),
        color,
        label,
      })),
      filters: o.filters,
      payoutDays: o.payoutDays,
    };
    await client.createOrReplace(doc);
    console.log("✓");
  }
}

async function migrateFaq() {
  console.log(`\n💬 Migrating ${faq.length} FAQ entries...`);
  for (let i = 0; i < faq.length; i++) {
    const f = faq[i];
    const id = deterministicId("faq", `${i + 1}-${f.q.slice(0, 40)}`);
    process.stdout.write(`  ${(i + 1).toString().padStart(2)}. ${f.q.slice(0, 60)}... `);
    await client.createOrReplace({
      _id: id,
      _type: "faq",
      order: i + 1,
      question: f.q,
      answer: f.a,
    });
    console.log("✓");
  }
}

async function migrateSiteSettings() {
  console.log(`\n⚙️  Creating site settings singleton...`);
  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    siteName: "StrikeWild",
    defaultTitle: "StrikeWild — Best Free Spins Offers 2026",
    defaultDescription:
      "Compare the best UK free spins offers from UKGC-licensed casinos. Every offer verified, fully compliant with the 2026 10× wagering cap, ranked by real-world payout performance.",
    navStat: "86,345 claimed today",
  });
  console.log("  ✓");
}

(async () => {
  try {
    await migrateSiteSettings();
    await migrateOffers();
    await migrateFaq();
    console.log("\n✅ Migration complete. Verify in Studio: npm run studio:dev");
  } catch (err) {
    console.error("\n❌ Migration failed:", err);
    process.exit(1);
  }
})();
