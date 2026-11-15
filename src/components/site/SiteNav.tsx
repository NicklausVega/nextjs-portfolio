"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState, useSyncExternalStore } from "react";
import { useTheme } from "next-themes";
import * as Dialog from "@radix-ui/react-dialog";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { ArrowRight, ArrowUpRight, ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { BILLING_URL, MAILTO, RYNVO_URL } from "@/lib/site-content";

const internal = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

const subscribeNoop = () => () => {};

function ThemeToggle({ className = "" }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribeNoop, () => true, () => false);
  const isDark = mounted && resolvedTheme === "dark";
  return (
    <button
      type="button"
      className={`nav__icon-btn ${className}`}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
    >
      {isDark ? <Sun size={20} strokeWidth={1.75} /> : <Moon size={20} strokeWidth={1.75} />}
    </button>
  );
}

export function SiteNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = !isHome || scrolled;
  const isCurrent = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={`nav ${solid ? "nav--solid" : ""}`}>
      <div className="nav__bar">
        <span className="nav__spacer" aria-hidden="true" />
        <Link href="/" className="nav__brand" aria-current={pathname === "/" ? "page" : undefined}>
          Nicklaus Vega
        </Link>
        <nav aria-label="Primary" className="nav__links">
          {internal.slice(1).map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav__link"
              aria-current={isCurrent(item.href) ? "page" : undefined}
            >
              {item.label}
            </Link>
          ))}
          <a className="nav__link" href={RYNVO_URL} target="_blank" rel="noopener noreferrer">
            Rynvo <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <a className="nav__link nav__link--billing" href={BILLING_URL} target="_blank" rel="noopener noreferrer">
            Billing portal <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
            <span className="sr-only">(opens in a new tab)</span>
          </a>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger className="nav__link nav__more">
              More <ChevronDown size={14} strokeWidth={2} aria-hidden="true" />
            </DropdownMenu.Trigger>
            <DropdownMenu.Portal>
              <DropdownMenu.Content className="menu-pop" align="end" sideOffset={8}>
                <DropdownMenu.Item asChild>
                  <a className="menu-pop__item" href={BILLING_URL} target="_blank" rel="noopener noreferrer">
                    Billing portal <ArrowUpRight size={14} strokeWidth={2} aria-hidden="true" />
                  </a>
                </DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </nav>
        <ThemeToggle className="nav__theme" />
        <a className={`btn ${solid ? "btn--primary" : "btn--on-photo"} nav__cta`} href={MAILTO}>
          Email me
        </a>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger className="nav__icon-btn nav__menu-btn" aria-label="Open menu">
            <Menu size={22} strokeWidth={1.75} />
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="sheet-overlay" />
            <Dialog.Content className="sheet" aria-describedby={undefined}>
              <div className="sheet__head">
                <Dialog.Title className="t-h3">Menu</Dialog.Title>
                <Dialog.Close className="nav__icon-btn" aria-label="Close menu">
                  <X size={22} strokeWidth={1.75} />
                </Dialog.Close>
              </div>
              <ul className="sheet__list">
                {internal.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="sheet__link"
                      aria-current={isCurrent(item.href) ? "page" : undefined}
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a className="sheet__link" href={RYNVO_URL} target="_blank" rel="noopener noreferrer">
                    Rynvo <ArrowUpRight size={20} strokeWidth={1.75} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <a className="sheet__link" href={BILLING_URL} target="_blank" rel="noopener noreferrer">
                    Billing portal <ArrowUpRight size={20} strokeWidth={1.75} aria-hidden="true" />
                  </a>
                </li>
                <li>
                  <SheetThemeRow />
                </li>
              </ul>
              <a className="btn btn--primary btn--block" href={MAILTO}>
                Email me <ArrowRight className="btn__arrow" size={18} strokeWidth={2} aria-hidden="true" />
              </a>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}

function SheetThemeRow() {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribeNoop, () => true, () => false);
  const isDark = mounted && resolvedTheme === "dark";
  return (
    <button type="button" className="sheet__link" onClick={() => setTheme(isDark ? "light" : "dark")}>
      {isDark ? "Light theme" : "Dark theme"}
      {isDark ? <Sun size={20} strokeWidth={1.75} aria-hidden="true" /> : <Moon size={20} strokeWidth={1.75} aria-hidden="true" />}
    </button>
  );
}
