export default function Footer() {
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
            <p>
              StrikeWild is an independent affiliate comparing free-spins offers from UKGC-licensed
              operators. All featured bonuses comply with UK Gambling Commission regulations
              effective January 2026. We verify terms daily, test registration processes, and update
              recommendations to reflect current regulatory standards.
            </p>
          </div>
          <div>
            <h4>Compare</h4>
            <ul>
              <li><a href="#">All free spins</a></li>
              <li><a href="#">No deposit</a></li>
              <li><a href="#">No wagering</a></li>
              <li><a href="#">Exclusive offers</a></li>
              <li><a href="#">New in 2026</a></li>
            </ul>
          </div>
          <div>
            <h4>Learn</h4>
            <ul>
              <li><a href="#">2026 UKGC rules</a></li>
              <li><a href="#">Wagering 101</a></li>
              <li><a href="#">Glossary</a></li>
              <li><a href="#">Our methodology</a></li>
            </ul>
          </div>
          <div>
            <h4>Trust</h4>
            <ul>
              <li><a href="#">Terms &amp; conditions</a></li>
              <li><a href="#">Privacy policy</a></li>
              <li><a href="#">Editorial policy</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-base">
          <span>© 2026 StrikeWild · Independent affiliate</span>
          <div className="logos">
            <span>UKGC</span>
            <span>GAMBLEAWARE</span>
            <span>GAMCARE</span>
            <span>GAMSTOP</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
