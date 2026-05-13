"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/solutions",     label: "Solutions",    key: "solutions" },
  { href: "/for-agencies",  label: "For Agencies", key: "agencies" },
  { href: "/customers",     label: "Customers",    key: "customers" },
  { href: "/calculator",    label: "ROI",          key: "roi" },
  { href: "/trust",         label: "Trust",        key: "trust" },
  { href: "/about",         label: "About",        key: "about" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="site-nav">
      <div className="container inner">
        <Link href="/" className="brand">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo-dark.svg" alt="Aurore" style={{ height: 34, width: "auto" }} />
        </Link>
        <nav className="primary">
          {navLinks.map((l) => (
            <Link
              key={l.key}
              href={l.href}
              style={pathname === l.href ? { color: "var(--teal)", fontWeight: 500 } : undefined}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="right">
          <Link href="/contact" className="btn btn-primary btn-sm">
            Book a walkthrough
          </Link>
        </div>
      </div>
    </header>
  );
}
