export default function OtherDeals() {
  return (
    <section className="block">
      <div className="container">
        <div className="other-deals">
          <div className="od-left">
            <div className="od-eyebrow">// 06 · Beyond casino</div>
            <h2>
              Other deals from <span style={{ color: "var(--yellow)" }}>StrikeWild</span>
            </h2>
            <p>
              Free spins are just the start. Unlock exclusive deals across travel, shopping, dining
              and more — all hand-picked for StrikeWild members.
            </p>
            <div className="icons">
              <span className="od-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 12l9-7 9 7" />
                  <path d="M5 10v9h14v-9" />
                </svg>
                Travel
              </span>
              <span className="od-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 7h18l-2 13H5L3 7z" />
                  <path d="M8 7V5a4 4 0 018 0v2" />
                </svg>
                Shopping
              </span>
              <span className="od-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4v6a4 4 0 008 0V4" />
                  <path d="M8 12v8" />
                  <path d="M16 4v16M16 14c2 0 4-1 4-4s-2-4-4-4" />
                </svg>
                Dining
              </span>
              <span className="od-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18" />
                  <path d="M12 3a14 14 0 010 18" />
                  <path d="M12 3a14 14 0 000 18" />
                </svg>
                And more
              </span>
            </div>
          </div>
          <div className="od-right">
            <a href="#" className="btn btn-primary od-cta">
              Discover deals now <span style={{ fontSize: 18 }}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
