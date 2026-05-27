import type { ResolvedFooter } from "@/lib/sections/defaults";

interface Props {
  footer: ResolvedFooter;
}

export default function Footer({ footer }: Props) {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-about">
            <a href="#" className="brand" aria-label="StrikeWild home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="brand-logo"
                src="/assets/logos/strikewild.svg"
                alt="StrikeWild"
                style={{ height: 36 }}
              />
            </a>
            <p>{footer.aboutText}</p>
          </div>
          {footer.columns.map((col, i) => (
            <div key={i}>
              <h4>{col.heading}</h4>
              <ul>
                {col.links.map((link, li) => (
                  <li key={li}>
                    <a href={link.href}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="footer-base">
          <span>{footer.copyright}</span>
          <div className="logos">
            {footer.regulatorBadges.map((b, i) => (
              <span key={i}>{b}</span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
