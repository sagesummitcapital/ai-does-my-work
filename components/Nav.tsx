"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";

const links = [
  { href: "#problem",   label: "Problem" },
  { href: "#audit",     label: "The Audit" },
  { href: "#framework", label: "Framework" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <div className="container-x nav__inner">
        <Wordmark />

        <nav className="nav__links" aria-label="Primary">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="nav__link">
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="#contact" className="btn btn-primary nav__cta">
          Book an AI Audit
          <span className="btn-arrow">→</span>
        </Link>

        <button
          className={`nav__menu ${open ? "nav__menu--open" : ""}`}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <nav className="nav__mobile" aria-label="Mobile">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="nav__link"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setOpen(false)}
            className="btn btn-primary"
            style={{ alignSelf: "flex-start", marginTop: 6 }}
          >
            Book an AI Audit
            <span className="btn-arrow">→</span>
          </Link>
        </nav>
      )}
    </header>
  );
}
