import Image from "next/image";
import Link from "next/link";
import { site } from "@/lib/site";
import { footerColumns } from "@/lib/content";

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
      <rect x="2.5" y="5" width="19" height="14" rx="1" fill="none" stroke="#ff5615" strokeWidth="1.8" />
      <path d="M3 6l9 7 9-7" fill="none" stroke="#ff5615" strokeWidth="1.8" />
    </svg>
  );
}

function PinIcon() {
  return (
    <svg viewBox="0 0 25 27" aria-hidden="true">
      <path d="M12.5 2C8 2 4.5 5.4 4.5 9.8c0 5.8 8 15.2 8 15.2s8-9.4 8-15.2C20.5 5.4 17 2 12.5 2z" fill="#fb5314" />
      <circle cx="12.5" cy="9.8" r="3.2" fill="#fff" />
    </svg>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer id="contact">
      <div className="footer-main">
        <div className="footer-row">
          <div className="footer-about">
            <div className="footer-brand">
              <Image src="/brand/logo-mark.webp" alt="" width={207} height={240} unoptimized />
              <span className="logo-text">
                <span className="logo-name">Beaver and Weaver</span>
                <span className="logo-sub">Engineering Services</span>
              </span>
            </div>
            <p>
              BEAVER AND WEAVER (BWENSE) is an engineering service provider specialising in BIM, CAD and engineering
              detailing for the construction industry. Working across architectural, structural, MEP and facade
              disciplines, we help architects, engineers, contractors and fabricators deliver coordinated, buildable
              project information on time and to the required standards.
            </p>
            <div className="footer-email">
              <MailIcon />
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </div>
            {site.markets.map((m) => (
              <div key={m.code} className="footer-market">
                <PinIcon />
                <span>
                  {m.code} <span className="sep">|</span> {m.name}
                </span>
              </div>
            ))}
          </div>

          <div className="footer-cols">
            {footerColumns.map((col) => (
              <div key={col.title} className="footer-col">
                <h2>{col.title}</h2>
                <ul>
                  {col.links.map((l) => (
                    <li key={l.label}>
                      {l.href.startsWith("/") && !l.href.includes("#") ? (
                        <Link href={l.href}>{l.label}</Link>
                      ) : (
                        <a href={l.href}>{l.label}</a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="row">
          <p>
            © Copyright {year} {site.brand}
            {site.companyNumber ? ` | Company No. ${site.companyNumber}` : ""} | <Link href="/privacy-policy">Privacy Policy</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
