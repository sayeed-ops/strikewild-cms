# StrikeWild — CMS Setup Guide

This guide walks you through wiring up Sanity (the CMS) and Netlify so non-tech editors can manage offers, FAQs, and site settings without touching code.

**Current state:** The site builds and renders correctly using the hardcoded data in `lib/offers.ts` and `lib/faq.ts` as a fallback. Once you complete the steps below, content will flow from Sanity instead.

---

## 1. Create a Sanity project

1. Sign up at [sanity.io](https://www.sanity.io/) (free).
2. Go to [sanity.io/manage](https://www.sanity.io/manage) → **Create new project**.
3. Project name: `StrikeWild`. Dataset: `production` (default, public is fine).
4. Copy the **Project ID** shown on the project dashboard.

## 2. Configure environment variables

```bash
cp .env.local.example .env.local
```

Open `.env.local` and fill in:

- `NEXT_PUBLIC_SANITY_PROJECT_ID` — from step 1
- `NEXT_PUBLIC_SANITY_DATASET` — usually `production`
- `SANITY_STUDIO_PROJECT_ID` — same project ID
- `SANITY_STUDIO_DATASET` — usually `production`
- `NEXT_PUBLIC_SITE_URL` — production URL once domain is purchased (e.g. `https://strikewild.com`). For now, leave the placeholder.

For the migration step you also need a write token:

1. In [sanity.io/manage](https://www.sanity.io/manage) → your project → **API** → **Tokens** → **Add API token**.
2. Name: `Migration script`. Permissions: **Editor**.
3. Copy the token into `.env.local` as `SANITY_WRITE_TOKEN=...`.
4. **Delete the token** after migration is complete.

## 3. Add CORS origin for the Studio

In [sanity.io/manage](https://www.sanity.io/manage) → your project → **API** → **CORS Origins** → **Add CORS origin**:

- URL: `http://localhost:3333`
- Allow credentials: **yes**

(Add your deployed Studio URL later, e.g. `https://strikewild.sanity.studio`.)

## 4. Seed Sanity with the existing offers + FAQs

```bash
npm run migrate
```

This will:

- Upload all 17 operator logos to Sanity as image assets
- Create 17 `offer` documents
- Create 7 `faq` documents
- Create the `siteSettings` singleton

The script is **idempotent**: re-running replaces existing docs by ID rather than duplicating.

## 5. Launch the Studio locally

```bash
npm run studio:dev
```

Open `http://localhost:3333`. Sign in with your Sanity account.

You should see:

- **Site settings** (singleton)
- **Offers** (17 documents)
- **FAQ** (7 documents)

Edit anything to confirm changes flow through.

## 6. Deploy the Studio so editors can reach it

```bash
npm run studio:deploy
```

Pick a hostname like `strikewild` → Studio becomes available at `https://strikewild.sanity.studio`. Share this URL with editors.

To invite editors:

1. [sanity.io/manage](https://www.sanity.io/manage) → your project → **Members** → **Invite member**.
2. Choose role: **Editor** (can create/edit content) or **Viewer** (read-only).
3. Free tier allows 3 users total.

## 7. Verify content flows into the site

With `.env.local` filled in:

```bash
npm run build
```

Open `out/index.html` in a browser. The offer cards should now reflect whatever you have in Sanity (not the fallback in `lib/offers.ts`).

To switch back to fallback temporarily, comment out `NEXT_PUBLIC_SANITY_PROJECT_ID` in `.env.local`.

## 8. Wire auto-rebuild on content change (Netlify webhook → Sanity)

Editors should not have to wait for a developer to deploy. Set this up so publishes trigger a rebuild automatically.

**8a. Create a Netlify build hook:**

1. Netlify dashboard → your site → **Site configuration** → **Build & deploy** → **Build hooks** → **Add build hook**.
2. Name: `Sanity content update`. Branch: `main` (or whichever is deployed).
3. Copy the build hook URL.

**8b. Add it to Sanity:**

1. [sanity.io/manage](https://www.sanity.io/manage) → your project → **API** → **Webhooks** → **Create webhook**.
2. Name: `Netlify rebuild`.
3. URL: paste the Netlify build hook URL from 8a.
4. Trigger on: **Create, Update, Delete**.
5. Filter (GROQ): `_type in ["offer", "faq", "siteSettings", "heroSection", "educationSection", "explainerSection", "otherDealsSection", "responsibleSection", "footerSection", "navSection"]`
6. HTTP method: `POST`. Save.

**8c. Test:**

Edit any offer in Studio → publish → Netlify dashboard should show a build kicking off within seconds.

## 9. Add Sanity env vars to Netlify

Netlify dashboard → **Site configuration** → **Environment variables** → add each of these:

- `NEXT_PUBLIC_SANITY_PROJECT_ID`
- `NEXT_PUBLIC_SANITY_DATASET`
- `NEXT_PUBLIC_SANITY_API_VERSION` (optional, defaults to `2024-10-01`)
- `NEXT_PUBLIC_SITE_URL` (once domain is set up)

Trigger a deploy to apply.

## 10. Clean up

Once migration is verified working end-to-end:

- Revoke the `SANITY_WRITE_TOKEN` in Sanity (step 2).
- Delete `scripts/migrate-to-sanity.mjs` — it's a one-off, not part of normal workflow.
- Optionally delete `lib/offers.ts` and `lib/faq.ts` (the fallback). The data adapter at [lib/data.ts](lib/data.ts) will then always read from Sanity. **Only do this after confirming a production deploy reads correctly from Sanity** — otherwise the site falls back to broken state if Sanity is misconfigured.

---

## How editors use the Studio

1. Go to `https://strikewild.sanity.studio` and sign in.
2. **Site content** group (left sidebar) holds every page section as a single document:
   - **Site settings** — global SEO defaults
   - **Navigation** — header links and CTA
   - **Hero** — headline, subheadline, ticker stats, trust cards, CTAs
   - **Education** — the two "2026 rules" cards
   - **Explainer** — the four "free spins explained" cards (each card has an icon picker)
   - **Other deals** — the cross-sell section
   - **Responsible gaming** — intro, tools, body paragraphs, resource links
   - **Footer** — about text, link columns, copyright, regulator badges
3. **Offers** and **FAQ** are document lists below the divider — add, remove, reorder freely.
4. To edit an offer: click **Offers** → click any operator → change fields → **Publish**.
5. To add a new offer: click **Offers** → **+** (top right) → fill in fields → **Publish**.
6. To reorder offers: edit the `rank` field. Lower numbers = higher placement. Top 3 ranks automatically populate the "This week's top 3" section on the homepage.
7. Within ~2 minutes of publish, Netlify rebuilds and the live site updates.

**Icons:** In the Explainer and Other deals sections, each card/item picks an icon from a fixed dropdown. The icon set is defined in [components/icons/registry.tsx](components/icons/registry.tsx) — to add a new option, a developer needs to add it there and to the dropdown list in the schema.

**Empty fields:** If you blank out a field by accident, the site falls back to the default value (defined in [lib/sections/defaults.ts](lib/sections/defaults.ts)) instead of rendering blank. To intentionally hide a section, the site's component code needs to support that — ask a developer.

## Troubleshooting

**"Missing environment variable" error on build:**
Make sure `.env.local` has `NEXT_PUBLIC_SANITY_PROJECT_ID` set, OR delete `.env.local` entirely to fall back to the hardcoded data.

**Migration script fails with "Insufficient permissions":**
The `SANITY_WRITE_TOKEN` needs `Editor` role, not `Viewer`.

**Studio shows blank page:**
Check the CORS origin in [sanity.io/manage](https://www.sanity.io/manage) includes the URL you're loading the Studio from.

**Netlify rebuild not triggering:**
In Sanity Studio → ⋮ menu → **Webhooks log** to see if the hook fired. If it did but Netlify didn't build, double-check the URL.

---

## What's next (Phase 2 & 3)

This guide covers Phase 1. See [.claude/plans/okay-please-review-this-structured-turtle.md](.claude/plans/okay-please-review-this-structured-turtle.md) for the full roadmap:

- **Phase 2** — Make every hardcoded section (Hero, Education, Explainer, OtherDeals, Responsible, Footer, Nav) editable from Sanity.
- **Phase 3** — Add a blog system with full SEO (Article schema, RSS, sitemap entries per post).
