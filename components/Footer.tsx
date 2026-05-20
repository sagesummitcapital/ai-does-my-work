"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Wordmark } from "./Wordmark";

export function Footer() {
  const [year, setYear] = useState(2026);
  useEffect(() => { setYear(new Date().getFullYear()); }, []);

  return (
    <footer className="footer">
      <div className="container-x footer__inner">
        <div className="footer__brand">
          <Wordmark />
          <p>
            AI-native operational transformation for private equity firms and
            middle-market businesses.
          </p>
        </div>

        <div className="footer__col">
          <h4>Practice</h4>
          <ul>
            <li><Link href="#problem">The shift</Link></li>
            <li><Link href="#audit">AI Infrastructure Audit</Link></li>
            <li><Link href="#framework">Framework</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Engage</h4>
          <ul>
            <li><Link href="#contact">Book an AI Audit</Link></li>
            <li><Link href="#audit">What we deliver</Link></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Company</h4>
          <ul>
            <li>
              <a
                href="https://sagesummitcapital.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sage Summit Capital
              </a>
            </li>
            <li>
              <a href="mailto:hello@aidoesmywork.com">hello@aidoesmywork.com</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container-x footer__bottom-inner">
          <span>© {year} AI Does My Work. All rights reserved.</span>
          <a
            className="footer__sage"
            href="https://sagesummitcapital.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Sage Summit Capital — opens in new tab"
          >
            A Sage Summit Capital company
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 3h7v7" />
              <path d="M13 3L4 12" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
