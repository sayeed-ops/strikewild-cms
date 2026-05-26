export default function Explainer() {
  return (
    <section className="block" id="explained">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="label">// 04 · Free spins offers explained</span>
            <h2>No deposit, no wagering &amp; the new 2026 rules</h2>
          </div>
          <div className="right mono">Fully UKGC compliant</div>
        </div>

        <div className="explainer-grid">
          <div className="explainer-card">
            <div className="ico">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="9" />
                <path d="M12 7v5l3 2" />
              </svg>
            </div>
            <h3>What are wagering requirements?</h3>
            <p>
              When a casino offers a bonus or free spins, wagering requirements determine how many
              times you must bet your winnings before withdrawing. Under the new 2026 rules, the
              maximum is 10× — far more transparent than the 35×–60× previously common.
            </p>
            <span className="tag">Cap: 10× max</span>
          </div>

          <div className="explainer-card">
            <div className="ico">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 12h18" />
                <path d="M3 6h18" />
                <path d="M3 18h18" />
                <path d="M7 3l-4 9 4 9" />
              </svg>
            </div>
            <h3>No wagering free spins</h3>
            <p>
              No-wagering bonuses eliminate playthrough requirements entirely. All winnings are
              immediately withdrawable as cash. They provide the clearest value and remain fully
              compliant with UK regulations — typically offering fewer spins (10–30) in exchange for
              simplicity.
            </p>
            <span className="tag">0× playthrough</span>
          </div>

          <div className="explainer-card">
            <div className="ico">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="6" width="18" height="13" rx="2" />
                <path d="M3 10h18" />
                <path d="M8 15h3" />
              </svg>
            </div>
            <h3>No deposit free spins</h3>
            <p>
              No-deposit bonuses require no upfront payment. Claim them by registering at a
              UKGC-licensed casino — letting UK players test slots and operators risk-free. They
              typically include max-win caps (£50–£100) and shorter expiry periods (24–48 hours).
            </p>
            <span className="tag">£0 to start</span>
          </div>

          <div className="explainer-card">
            <div className="ico">
              <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2L2 19h20L12 2z" />
                <path d="M12 9v5" />
                <circle cx="12" cy="17" r=".8" fill="currentColor" />
              </svg>
            </div>
            <h3>New mixed-product ban</h3>
            <p>
              Effective 19 January 2026, operators cannot offer promotions requiring players to engage
              with multiple gambling products (e.g. slots and sports betting) to unlock a single
              bonus. Simpler, safer promotional offers focused on a single product.
            </p>
            <span className="tag">Single product only</span>
          </div>
        </div>
      </div>
    </section>
  );
}
