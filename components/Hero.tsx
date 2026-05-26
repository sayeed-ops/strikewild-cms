const tickerItems: { l: string; v: string; c?: "y" }[] = [
  { l: "OFFERS CLAIMED TODAY", v: "86,345", c: "y" },
  { l: "OPERATORS REVIEWED", v: "17" },
  { l: "AVG PAYOUT", v: "4.2 days" },
  { l: "NEW RULES", v: "JAN 2026" },
  { l: "NO DEPOSIT PICKS", v: "3" },
  { l: "NO WAGERING OFFERS", v: "12", c: "y" },
  { l: "EXCLUSIVE OFFERS", v: "2" },
  { l: "UKGC LICENSED", v: "100%", c: "y" },
];

export default function Hero() {
  const tickerItem = (t: (typeof tickerItems)[number], i: number) => (
    <span key={i}>
      ▸ {t.l} <span className={`v ${t.c ?? ""}`}>{t.v}</span>
    </span>
  );

  return (
    <section className="hero">
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-orb a" />
        <div className="hero-orb b" />
        <div className="hero-orb c" />
        <svg className="hero-sigil" viewBox="0 0 200 200" fill="none" aria-hidden="true">
          <path
            d="M110 10 L60 110 L100 110 L80 190 L150 80 L110 80 Z"
            stroke="currentColor"
            strokeWidth="1.5"
            fill="none"
          />
          <path
            d="M110 10 L60 110 L100 110 L80 190 L150 80 L110 80 Z"
            fill="currentColor"
            opacity=".3"
          />
        </svg>
      </div>
      <div className="container">
        <span className="eyebrow">
          <span className="dot-y" />
          UKGC Licensed · Updated 26 May 2026
        </span>
        <h1 className="hero-h">
          The <span className="hi">best free spins</span> in the UK.
          <br />
          No fluff, no fine print.
        </h1>
        <p className="sub">
          Every offer below is verified, fully compliant with the new 10× wagering cap, and ranked by
          what actually pays out — not by who pays us more.
        </p>
        <div className="cta-row">
          <a href="#offers" className="btn btn-primary btn-lg">
            See top offers <span style={{ fontSize: 18 }}>→</span>
          </a>
          <a href="#how" className="btn btn-ghost btn-lg">
            How we rank operators
          </a>
          <span className="legal mono">// 18+ · BeGambleAware.org</span>
        </div>
      </div>

      <div className="ticker-wrap" style={{ marginTop: 64 }}>
        <div className="ticker" id="ticker">
          {tickerItems.map(tickerItem)}
          {tickerItems.map((t, i) => tickerItem(t, i + tickerItems.length))}
        </div>
      </div>

      <div className="container">
        <div className="trust">
          <div className="trust-item">
            <div className="v">
              <span className="y">10×</span>
            </div>
            <div className="l">Max wagering cap</div>
            <div className="d">New UKGC rule effective Jan 2026 — every offer complies.</div>
          </div>
          <div className="trust-item">
            <div className="v">17</div>
            <div className="l">Operators reviewed</div>
            <div className="d">Only UKGC-licensed casinos make the list.</div>
          </div>
          <div className="trust-item">
            <div className="v">£0</div>
            <div className="l">No-deposit picks</div>
            <div className="d">Try real games before risking a penny of your own.</div>
          </div>
          <div className="trust-item">
            <div className="v">&lt;24h</div>
            <div className="l">Avg withdrawal</div>
            <div className="d">Median payout time on our top 5 operators.</div>
          </div>
        </div>
      </div>
    </section>
  );
}
