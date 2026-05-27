import type { ResolvedExplainer } from "@/lib/sections/defaults";
import { Icon, type IconKey } from "@/components/icons/registry";

interface Props {
  explainer: ResolvedExplainer;
}

export default function Explainer({ explainer }: Props) {
  return (
    <section className="block" id="explained">
      <div className="container">
        <div className="section-head">
          <div>
            <span className="label">{explainer.eyebrow}</span>
            <h2>{explainer.title}</h2>
          </div>
          <div className="right mono">{explainer.rightMeta}</div>
        </div>

        <div className="explainer-grid">
          {explainer.cards.map((card, i) => (
            <div key={i} className="explainer-card">
              <div className="ico">
                <Icon name={card.icon as IconKey} />
              </div>
              <h3>{card.title}</h3>
              <p>{card.body}</p>
              {card.tag && <span className="tag">{card.tag}</span>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
