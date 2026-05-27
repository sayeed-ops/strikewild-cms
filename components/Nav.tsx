"use client";

import { useEffect, useState } from "react";
import type { ResolvedNav } from "@/lib/sections/defaults";

interface Props {
  nav: ResolvedNav;
}

export default function Nav({ nav }: Props) {
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
          {nav.links.map((link, i) => (
            <a key={i} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
        <div className="nav-cta">
          <span className="nav-stat">
            <span className="dot" />
            {nav.liveStat}
          </span>
          <a href={nav.ctaHref} className="btn btn-primary btn-sm">
            {nav.ctaLabel}
          </a>
        </div>
      </div>
    </header>
  );
}
