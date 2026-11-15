import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BILLING_URL, EMAIL, GITHUB_URL, LINKEDIN_URL, MAILTO, RYNVO_URL } from "@/lib/site-content";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row">
          <p className="footer__brand">Nicklaus Vega</p>
          <ul className="footer__links">
            <li>
              <Link className="footer__link" href="/projects">
                Projects
              </Link>
            </li>
            <li>
              <Link className="footer__link" href="/about">
                About
              </Link>
            </li>
            <li>
              <a className="footer__link" href={RYNVO_URL} target="_blank" rel="noopener noreferrer">
                Rynvo <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a className="footer__link" href={BILLING_URL} target="_blank" rel="noopener noreferrer">
                Billing portal <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a className="footer__link" href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">
                LinkedIn <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a className="footer__link" href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
                GitHub <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a className="footer__link" href={MAILTO}>
                {EMAIL}
              </a>
            </li>
          </ul>
        </div>
        <div className="footer__fine t-small t-muted">
          <p>Austin, Texas</p>
          <p>© {year} Nicklaus Vega</p>
        </div>
      </div>
    </footer>
  );
}
