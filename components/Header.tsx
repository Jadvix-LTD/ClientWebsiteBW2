"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { topNav } from "@/lib/site";
import { services } from "@/lib/services";

function Cog() {
  return (
    <svg viewBox="0 0 512 512" aria-hidden="true">
      <path
        fill="currentColor"
        d="M487.4 315.7l-42.6-24.6c4.3-23.2 4.3-47 0-70.2l42.6-24.6c4.9-2.8 7.1-8.6 5.5-14-11.1-35.6-30-67.8-54.7-94.6-3.8-4.1-10-5.1-14.8-2.3L380.8 110c-17.9-15.4-38.5-27.3-60.8-35.1V25.8c0-5.6-3.9-10.5-9.4-11.7-36.7-8.2-74.3-7.8-109.2 0-5.5 1.2-9.4 6.1-9.4 11.7V75c-22.2 7.9-42.8 19.8-60.8 35.1L88.7 85.5c-4.9-2.8-11-1.9-14.8 2.3-24.7 26.7-43.6 58.9-54.7 94.6-1.7 5.4.6 11.2 5.5 14L67.3 221c-4.3 23.2-4.3 47 0 70.2l-42.6 24.6c-4.9 2.8-7.1 8.6-5.5 14 11.1 35.6 30 67.8 54.7 94.6 3.8 4.1 10 5.1 14.8 2.3l42.6-24.6c17.9 15.4 38.5 27.3 60.8 35.1v49.2c0 5.6 3.9 10.5 9.4 11.7 36.7 8.2 74.3 7.8 109.2 0 5.5-1.2 9.4-6.1 9.4-11.7v-49.2c22.2-7.9 42.8-19.8 60.8-35.1l42.6 24.6c4.9 2.8 11 1.9 14.8-2.3 24.7-26.7 43.6-58.9 54.7-94.6 1.5-5.5-.7-11.3-5.6-14.1zM256 336c-44.1 0-80-35.9-80-80s35.9-80 80-80 80 35.9 80 80-35.9 80-80 80z"
      />
    </svg>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="top-header">
        <nav className="top-nav" aria-label="Company">
          {topNav.map((l) => (
            <a key={l.label} href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
      </div>

      <header className="main-header">
        <Link href="/" className="logo-link" aria-label="Beaver and Weaver Engineering Services, home">
          <Image src="/brand/logo-mark.webp" alt="" width={207} height={240} priority unoptimized />
          <span className="logo-text">
            <span className="logo-name">Beaver and Weaver</span>
            <span className="logo-sub">Engineering Services</span>
          </span>
        </Link>

        <nav className="main-nav" aria-label="Services">
          <ul>
            {services.map((s) => (
              <li key={s.slug}>
                <a href={`/#${s.slug}`}>
                  <Cog />
                  {s.nav}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <button
          type="button"
          className="mobile-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="skip-link">{open ? "Close menu" : "Open menu"}</span>
          <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2.4" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2.4" />
            )}
          </svg>
        </button>

        {open && (
          <nav id="mobile-menu" className="mobile-menu" aria-label="Mobile">
            {topNav.map((l) => (
              <a key={l.label} href={l.href} onClick={() => setOpen(false)}>
                {l.label}
              </a>
            ))}
            {services.map((s) => (
              <a key={s.slug} href={`/#${s.slug}`} onClick={() => setOpen(false)}>
                {s.nav}
              </a>
            ))}
          </nav>
        )}
      </header>
    </>
  );
}
