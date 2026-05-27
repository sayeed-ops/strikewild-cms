import type { ResolvedResponsible } from "@/lib/sections/defaults";

interface Props {
  responsible: ResolvedResponsible;
}

export default function Responsible({ responsible }: Props) {
  return (
    <section className="block" id="responsible">
      <div className="container">
        <div className="responsible">
          <div className="rg-left">
            <div className="rg-icon">18+</div>
            <h2>{responsible.title}</h2>
            <p>{responsible.intro}</p>
            <div className="rg-tools">
              {responsible.tools.map((t, i) => (
                <div key={i} className="rg-tool">
                  <div className="t">{t.title}</div>
                  <div className="d">{t.description}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="rg-right">
            {responsible.bodyParagraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
            <p>{responsible.supportLine}</p>
            <div className="cert-strip">
              {responsible.resources.map((r, i) => {
                const inner = (
                  <>
                    {r.label && <span className="cert-mark">{r.label}</span>}
                    {r.sublabel && <span>{r.sublabel}</span>}
                  </>
                );
                if (r.kind === "age") {
                  return (
                    <div key={i} className="cert age">
                      {r.label}
                    </div>
                  );
                }
                if (r.kind === "ukgc") {
                  return (
                    <span key={i} className="cert ukgc">
                      {inner}
                    </span>
                  );
                }
                return (
                  <a key={i} href={r.href ?? "#"} className={`cert ${r.kind}`}>
                    {inner}
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
