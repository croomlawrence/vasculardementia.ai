"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import NavDropdown from "./NavDropdown";

type NavLink = readonly [string, string];

export default function SiteHeader({
  caregiverLinks,
  organizationLinks,
}: {
  caregiverLinks: readonly NavLink[];
  organizationLinks: readonly NavLink[];
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const showScreenCta = pathname !== "/news";

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header className="site-header">
      <a className="skip-link" href="#site-main">
        Skip to content
      </a>
      <div className="site-header-bar">
        <Link href="/" className="wordmark" onClick={() => setOpen(false)}>
          VascuMind®
          <small>Memory and blood flow</small>
        </Link>
        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="site-menu"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? "Close" : "Menu"}
        </button>
        <nav
          id="site-menu"
          className={open ? "site-menu is-open" : "site-menu"}
          aria-label="Primary"
          onClick={(event) => {
            const target = event.target as HTMLElement;
            if (target.closest("a")) setOpen(false);
          }}
        >
          <div className="site-links">
            <NavDropdown summary="For caregivers">
              {caregiverLinks.map(([label, href]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </NavDropdown>
            <NavDropdown summary="For organizations">
              {organizationLinks.map(([label, href]) => (
                <Link key={href} href={href}>
                  {label}
                </Link>
              ))}
            </NavDropdown>
            <Link href="/about">About</Link>
            <Link href="/news">News</Link>
          </div>
          <div className="header-actions">
            <Link href="/resources/5-questions-guide" className="btn-secondary btn-compact">
              Get the free guide
            </Link>
            {showScreenCta ? (
              <Link href="/memory-screen" className="btn-primary btn-compact">
                Start the memory screen
              </Link>
            ) : null}
          </div>
        </nav>
      </div>
    </header>
  );
}
