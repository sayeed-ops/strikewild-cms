export default function Education() {
  return (
    <section className="block" id="rules">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="label">// 03 · The 2026 rules, explained</span>
            <h2>What changed for free spins in 2026</h2>
          </div>
        </div>

        <div className="edu-grid">
          <div className="edu-card">
            <span className="num">New rule · effective 19 Jan 2026</span>
            <h3>Wagering capped at 10× the bonus</h3>
            <p>
              The UK Gambling Commission introduced a maximum wagering requirement of 10× across all
              bonus types. The old industry standard was 35×–60× — making most bonuses practically
              un-winnable.
            </p>
            <p>This change drives transparency, reduces complexity, and makes more bonuses actually claimable.</p>
            <div className="stat-row">
              <div className="stat">
                <div className="v">35–60×</div>
                <div className="l">Old wagering range</div>
              </div>
              <div className="stat">
                <div className="v y">10×</div>
                <div className="l">New maximum</div>
              </div>
              <div className="stat">
                <div className="v">~6×</div>
                <div className="l">Easier to clear</div>
              </div>
            </div>
          </div>

          <div className="edu-card" id="how">
            <span className="num">How we rank</span>
            <h3>We test every operator, every month</h3>
            <p>
              Real accounts. Real deposits. Real withdrawal attempts at five different amounts. We log
              registration friction, verification speed, bonus fairness and payout time — then re-rank
              monthly.
            </p>
            <p>
              We earn affiliate commission on signups.{" "}
              <strong style={{ color: "var(--text)" }}>
                Commission rates do not influence rankings
              </strong>{" "}
              — our editor signs off every list.
            </p>
            <div className="stat-row">
              <div className="stat">
                <div className="v">5</div>
                <div className="l">Withdrawal tests</div>
              </div>
              <div className="stat">
                <div className="v">30d</div>
                <div className="l">Re-rank cycle</div>
              </div>
              <div className="stat">
                <div className="v y">100%</div>
                <div className="l">UKGC licensed</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
