"use client";

import { useState } from "react";
import type { FaqEntry } from "@/lib/data";

interface Props {
  faq: FaqEntry[];
}

export default function FAQ({ faq }: Props) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (i: number) => setOpenIdx((cur) => (cur === i ? null : i));

  return (
    <section className="block" id="faq">
      <div className="container">
        <div
          className="section-head"
          style={{
            justifyContent: "center",
            textAlign: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div>
            <span className="label">// 05 · Frequently asked</span>
            <h2 style={{ textAlign: "center" }}>Free spins, demystified</h2>
          </div>
        </div>

        <div className="faq">
          {faq.map((f, i) => (
            <div key={f.id} className={`faq-item${openIdx === i ? " open" : ""}`}>
              <button className="faq-q" type="button" onClick={() => toggle(i)}>
                <span>{f.question}</span>
                <span className="plus" />
              </button>
              <div className="faq-a">
                <div className="inner">{f.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
