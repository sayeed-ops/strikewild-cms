import type { ResolvedEducation } from "@/lib/sections/defaults";

interface Props {
  education: ResolvedEducation;
}

export default function Education({ education }: Props) {
  return (
    <section className="block" id="rules">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="label">{education.eyebrow}</span>
            <h2>{education.title}</h2>
          </div>
        </div>

        <div className="edu-grid">
          {education.cards.map((card, i) => (
            <div
              key={i}
              className="edu-card"
              id={i === 1 ? "how" : undefined}
            >
              {card.eyebrow && <span className="num">{card.eyebrow}</span>}
              <h3>{card.title}</h3>
              {card.paragraphs.map((p, pi) => (
                <p key={pi}>{p}</p>
              ))}
              {card.stats && card.stats.length > 0 && (
                <div className="stat-row">
                  {card.stats.map((s, si) => (
                    <div key={si} className="stat">
                      <div className={`v${s.highlight ? " y" : ""}`}>{s.value}</div>
                      <div className="l">{s.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
