export default function Top3() {
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
          <article className="pcard featured">
            <span className="rank-badge">🏆 Best overall</span>
            <div className="logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="brand-img" src="/assets/logos/MRQ.svg" alt="MrQ" />
            </div>
            <h3 className="offer">300 Cash Spins</h3>
            <div className="offer-tag">No wagering · No code needed</div>
            <div className="rating">
              <span className="score">10.0</span>
              <span className="score-label">/ 10</span>
              <span className="stars">★★★★★</span>
            </div>
            <div className="pills">
              <span className="pill green">No wagering</span>
              <span className="pill">£10 min deposit</span>
              <span className="pill">900 slots</span>
              <span className="pill">24h withdrawal</span>
            </div>
            <a href="#" className="btn-play">
              Claim 300 spins
            </a>
          </article>

          <article className="pcard">
            <span className="rank-badge">2nd</span>
            <div className="logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="brand-img" src="/assets/logos/coral.svg" alt="Coral" />
            </div>
            <h3 className="offer">100 Free Spins</h3>
            <div className="offer-tag">No wagering</div>
            <div className="rating">
              <span className="score">9.9</span>
              <span className="score-label">/ 10</span>
              <span className="stars">★★★★★</span>
            </div>
            <div className="pills">
              <span className="pill green">No wagering</span>
              <span className="pill">4,324 slots</span>
            </div>
            <a href="#" className="btn-play">
              Play now
            </a>
          </article>

          <article className="pcard">
            <span className="rank-badge">3rd · Exclusive</span>
            <div className="logo">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img className="brand-img" src="/assets/logos/lagbrokes.webp" alt="Ladbrokes" />
            </div>
            <h3 className="offer">100 Free Spins</h3>
            <div className="offer-tag">StrikeWild exclusive</div>
            <div className="rating">
              <span className="score">9.9</span>
              <span className="score-label">/ 10</span>
              <span className="stars">★★★★★</span>
            </div>
            <div className="pills">
              <span className="pill pink">Exclusive</span>
              <span className="pill">4,443 slots</span>
            </div>
            <a href="#" className="btn-play">
              Claim exclusive
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
