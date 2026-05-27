import type { Offer } from "@/lib/data";

interface Props {
  offers: Offer[];
}

const RANK_LABELS = ["🏆 Best overall", "2nd", "3rd"];

function pluralPills(o: Offer): { className: string; label: string }[] {
  const pills: { className: string; label: string }[] = o.tags.map((t) => ({
    className: `pill ${t.color}`,
    label: t.label,
  }));
  pills.push({
    className: "pill",
    label: `${o.slots.toLocaleString()} slots`,
  });
  if (o.payoutDays <= 1) {
    pills.push({ className: "pill", label: "24h withdrawal" });
  }
  return pills;
}

function rankBadge(o: Offer, i: number): string {
  if (i === 0) return RANK_LABELS[0];
  if (o.ribbon === "exclusive") return `${RANK_LABELS[i]} · Exclusive`;
  return RANK_LABELS[i];
}

function ctaText(o: Offer, i: number): string {
  if (i === 0) {
    const spins = o.title.match(/\d+/)?.[0];
    return spins ? `Claim ${spins} spins` : "Claim offer";
  }
  if (o.ribbon === "exclusive") return "Claim exclusive";
  return "Play now";
}

export default function Top3({ offers }: Props) {
  const top = offers.filter((o) => o.rank <= 3).sort((a, b) => a.rank - b.rank);

  return (
    <section className="block" id="offers">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="label">// 01 · Editor&apos;s pick</span>
            <h2>This week&apos;s top 3 offers</h2>
          </div>
          <div className="right">
            <span className="live">Live · re-ranked daily</span>
          </div>
        </div>

        <div className="top3">
          {top.map((o, i) => (
            <article
              key={o.id}
              className={`pcard${i === 0 ? " featured" : ""}`}
            >
              <span className="rank-badge">{rankBadge(o, i)}</span>
              <div className="logo">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="brand-img" src={o.logoUrl} alt={o.brand} />
              </div>
              <h3 className="offer">{o.title}</h3>
              <div className="offer-tag">{o.desc}</div>
              <div className="rating">
                <span className="score">{o.rating.toFixed(1)}</span>
                <span className="score-label">/ 10</span>
                <span className="stars">★★★★★</span>
              </div>
              <div className="pills">
                {pluralPills(o).map((p, j) => (
                  <span key={j} className={p.className}>
                    {p.label}
                  </span>
                ))}
              </div>
              <a href={o.ctaUrl ?? "#"} className="btn-play">
                {ctaText(o, i)}
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
