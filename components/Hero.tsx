import type { ResolvedHero } from "@/lib/sections/defaults";

interface Props {
  hero: ResolvedHero;
}

export default function Hero({ hero }: Props) {
  const tickerLine = hero.ticker.map((t, i) => (
    <span key={i}>
      ▸ {t.label}{" "}
      <span className={`v ${t.highlight ? "y" : ""}`}>{t.value}</span>
    </span>
  ));

  const renderSuffixLines = () => {
    const lines = hero.headlineSuffix.split("\n");
    return lines.map((line, i) => (
      <span key={i}>
        {i > 0 && <br />}
        {line}
      </span>
    ));
  };

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
          {hero.eyebrow}
        </span>
        <h1 className="hero-h">
          {hero.headlinePrefix}
          <span className="hi">{hero.headlineHighlight}</span>
          {renderSuffixLines()}
        </h1>
        <p className="sub">{hero.subheadline}</p>
        <div className="cta-row">
          <a href={hero.primaryCtaHref} className="btn btn-primary btn-lg">
            {hero.primaryCtaLabel} <span style={{ fontSize: 18 }}>→</span>
          </a>
          <a href={hero.ghostCtaHref} className="btn btn-ghost btn-lg">
            {hero.ghostCtaLabel}
          </a>
          <span className="legal mono">{hero.legal}</span>
        </div>
      </div>

      <div className="ticker-wrap" style={{ marginTop: 64 }}>
        <div className="ticker" id="ticker">
          {tickerLine}
          {tickerLine}
        </div>
      </div>

      <div className="container">
        <div className="trust">
          {hero.trustCards.map((c, i) => (
            <div key={i} className="trust-item">
              <div className="v">
                {c.highlightValue ? <span className="y">{c.value}</span> : c.value}
              </div>
              <div className="l">{c.label}</div>
              <div className="d">{c.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
