"use client";

import { useMemo, useState } from "react";
import type { Offer, FilterKey, RibbonKind } from "@/lib/data";

type FilterValue = "all" | FilterKey;
type SortValue = "rating" | "spins" | "slots" | "payout";

const FILTER_CHIPS: { value: FilterValue; label: string }[] = [
  { value: "all", label: "All" },
  { value: "no-deposit", label: "No deposit" },
  { value: "no-wagering", label: "No wagering" },
  { value: "exclusive", label: "Exclusive" },
  { value: "new", label: "New offer" },
];

const RIBBON_LABEL: Record<Exclude<RibbonKind, "">, string> = {
  new: "New offer",
  exclusive: "Exclusive",
  choice: "Best choice",
  code: "Code",
};

function leadingNumber(s: string): number {
  const m = s.match(/\d+/);
  return m ? parseInt(m[0], 10) : 0;
}

const SORT_FNS: Record<SortValue, (a: Offer, b: Offer) => number> = {
  rating: (a, b) => b.rating - a.rating,
  spins: (a, b) => leadingNumber(b.title) - leadingNumber(a.title),
  slots: (a, b) => b.slots - a.slots,
  payout: (a, b) => a.payoutDays - b.payoutDays,
};

interface Props {
  offers: Offer[];
}

export default function FilterableOffers({ offers }: Props) {
  const [filter, setFilter] = useState<FilterValue>("all");
  const [sort, setSort] = useState<SortValue>("rating");
  const [visible, setVisible] = useState<number>(7);

  const chipCount = (value: FilterValue): number => {
    if (value === "all") return offers.length;
    return offers.filter((o) => o.filters.includes(value)).length;
  };

  const filtered = useMemo(() => {
    const arr =
      filter === "all"
        ? offers.slice()
        : offers.filter((o) => o.filters.includes(filter));
    return arr.sort(SORT_FNS[sort]);
  }, [offers, filter, sort]);

  const shown = filtered.slice(0, visible);
  const remaining = filtered.length - visible;

  const onFilter = (v: FilterValue) => {
    setFilter(v);
    setVisible(7);
  };

  return (
    <section className="block">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="label">// 02 · The full board</span>
            <h2>Compare {filtered.length} offers from UKGC-licensed casinos</h2>
          </div>
          <div className="right mono">
            <span>{filtered.length}</span> offers · updated 12 min ago
          </div>
        </div>

        <div className="filter-bar">
          <div className="group">
            <span className="gap-l">Filter</span>
            {FILTER_CHIPS.map((c) => (
              <button
                key={c.value}
                className={`chip${filter === c.value ? " active" : ""}`}
                onClick={() => onFilter(c.value)}
                type="button"
              >
                {c.label} <span className="count">{chipCount(c.value)}</span>
              </button>
            ))}
          </div>
          <div className="right">
            <span className="gap-l">Sort</span>
            <select
              className="select"
              value={sort}
              onChange={(e) => setSort(e.target.value as SortValue)}
            >
              <option value="rating">Highest rated</option>
              <option value="spins">Most spins</option>
              <option value="slots">Largest slot library</option>
              <option value="payout">Fastest payout</option>
            </select>
          </div>
        </div>

        <div className="offers">
          {shown.map((o) => (
            <article
              key={o.id}
              className="offer"
              data-filters={o.filters.join(" ")}
              data-rating={o.rating}
              data-slots={o.slots}
              data-payout={o.payoutDays}
            >
              {o.ribbon && (
                <span className={`ribbon ${o.ribbon}`}>
                  {RIBBON_LABEL[o.ribbon]}
                </span>
              )}
              <div className={`rk${o.rank <= 3 ? " top" : ""}`}>
                {o.rank < 10 ? `0${o.rank}` : o.rank}
              </div>
              <div className="logo-cell">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="brand-img" src={o.logoUrl} alt={o.brand} />
              </div>
              <div className="main">
                <h4>{o.title}</h4>
                <div className="desc">{o.desc}</div>
                <div className="tags">
                  {o.tags.map((t, i) => (
                    <span key={i} className={`pill ${t.color}`}>
                      {t.label}
                    </span>
                  ))}
                </div>
              </div>
              <div className="slots">
                <div className="n">{o.slots.toLocaleString()}</div>
                <div className="l">Slots</div>
              </div>
              <div className={`rating-cell${o.rating >= 9.9 ? " gold" : ""}`}>
                <div className="s">{o.rating.toFixed(1)}</div>
                <div className="st">★★★★★</div>
              </div>
              <div className="cta-cell">
                <a href={o.ctaUrl ?? "#"} className="btn-play">
                  Play
                </a>
              </div>
            </article>
          ))}
        </div>

        {remaining > 0 && (
          <div className="load-more">
            <button
              type="button"
              className="btn btn-ghost btn-lg"
              onClick={() => setVisible((v) => v + 6)}
            >
              <span>
                Show {remaining} more {remaining === 1 ? "offer" : "offers"}
              </span>
              <span style={{ fontSize: 18 }}>↓</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
