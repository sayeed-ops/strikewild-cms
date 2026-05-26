export default function Responsible() {
  return (
    <section className="block" id="responsible">
      <div className="container">
        <div className="responsible">
          <div className="rg-left">
            <div className="rg-icon">18+</div>
            <h2>Responsible gaming</h2>
            <p>
              Gambling can turn into an addiction. Always make use of the responsible-gaming tools
              available to you by online operators to help you stay in control.
            </p>
            <div className="rg-tools">
              <div className="rg-tool">
                <div className="t">Deposit limits</div>
                <div className="d">Cap daily / weekly spend</div>
              </div>
              <div className="rg-tool">
                <div className="t">Reality checks</div>
                <div className="d">Session-time reminders</div>
              </div>
              <div className="rg-tool">
                <div className="t">Self-exclusion</div>
                <div className="d">Time-out or block your account</div>
              </div>
              <div className="rg-tool">
                <div className="t">GAMSTOP</div>
                <div className="d">National self-exclusion scheme</div>
              </div>
            </div>
          </div>
          <div className="rg-right">
            <p>
              Only stake money you can afford to lose. All operators licensed by the Gambling
              Commission of Great Britain provide responsible-gambling information — it is their
              responsibility to create a legal, fair and reliable environment where players can enjoy
              the thrill of an online casino.
            </p>
            <p>
              The <strong>Gambling Commission of Great Britain</strong> licenses and regulates
              businesses that offer gambling services in Great Britain. Our mission is to provide you
              with only the best online-slots experience by reviewing and recommending sites that are
              licensed to operate by the Gambling Commission.
            </p>
            <p>If gambling is affecting you or someone you know, support is available 24/7:</p>
            <div className="cert-strip">
              <div className="cert age">18+</div>
              <a href="https://www.begambleaware.org" className="cert ga">
                <span className="cert-mark">BeGambleAware</span>
                <span>.org</span>
              </a>
              <a href="https://www.gamcare.org.uk" className="cert gc">
                <span className="cert-mark">GamCare</span>
                <span>0808 8020 133</span>
              </a>
              <a href="https://www.gamstop.co.uk" className="cert gs">
                <span className="cert-mark">GAMSTOP</span>
                <span>Self-exclude</span>
              </a>
              <span className="cert ukgc">
                <span className="cert-mark">UKGC</span>
                <span>Licensed only</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
