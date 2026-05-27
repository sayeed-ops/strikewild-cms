import type { ResolvedOtherDeals } from "@/lib/sections/defaults";
import { Icon, type IconKey } from "@/components/icons/registry";

interface Props {
  otherDeals: ResolvedOtherDeals;
}

export default function OtherDeals({ otherDeals }: Props) {
  return (
    <section className="block">
      <div className="container">
        <div className="other-deals">
          <div className="od-left">
            <div className="od-eyebrow">{otherDeals.eyebrow}</div>
            <h2>
              {otherDeals.titlePrefix}
              <span style={{ color: "var(--yellow)" }}>{otherDeals.titleHighlight}</span>
            </h2>
            <p>{otherDeals.body}</p>
            <div className="icons">
              {otherDeals.items.map((item, i) => (
                <span key={i} className="od-icon">
                  <Icon name={item.icon as IconKey} />
                  {item.label}
                </span>
              ))}
            </div>
          </div>
          <div className="od-right">
            <a href={otherDeals.ctaHref} className="btn btn-primary od-cta">
              {otherDeals.ctaLabel} <span style={{ fontSize: 18 }}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
