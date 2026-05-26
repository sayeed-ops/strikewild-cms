"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <div className="nav-inner">
        <a href="#" className="brand" aria-label="StrikeWild home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            className="brand-logo"
            src="/assets/logos/strikewild.svg"
            alt="StrikeWild"
            style={{ width: 150, height: 58 }}
          />
        </a>
        <nav className="nav-links">
          <a href="#offers">Free spins</a>
          <a href="#rules">2026 rules</a>
          <a href="#explained">Explained</a>
          <a href="#faq">FAQ</a>
          <a href="#responsible">Responsible</a>
        </nav>
        <div className="nav-cta">
          <span className="nav-stat">
            <span className="dot" />
            86,345 claimed today
          </span>
          <a href="#offers" className="btn btn-primary btn-sm">
            See top offers
          </a>
        </div>
      </div>
    </header>
  );
}
