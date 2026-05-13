import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="cols">
          <div>
            <Link href="/" className="brand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/logo-white.svg" alt="Aurore" style={{ height: 34, width: "auto" }} />
            </Link>
            <p
              style={{
                marginTop: 18,
                maxWidth: "38ch",
                fontSize: 14,
                lineHeight: 1.6,
                color: "rgba(245,241,233,0.72)",
              }}
            >
              Intelligence and automation for the entire debt-collections
              ecosystem. From the day a portfolio is sold to the day a
              garnishment clears.
            </p>
            <div
              style={{
                marginTop: 22,
                display: "flex",
                gap: 8,
                flexWrap: "wrap",
              }}
            >
              <Link href="/contact" className="btn btn-rev-primary btn-sm">
                Book a walkthrough
              </Link>
              <Link href="/calculator" className="btn btn-rev-ghost btn-sm">
                See ROI calculator →
              </Link>
            </div>
          </div>

          <div>
            <h4>Platform</h4>
            <ul>
              <li><Link href="/solutions">All 17 solutions</Link></li>
              <li><Link href="/approach">How we deploy</Link></li>
              <li><Link href="/trust">Trust &amp; security</Link></li>
              <li><Link href="/calculator">ROI calculator</Link></li>
            </ul>
          </div>

          <div>
            <h4>For your operation</h4>
            <ul>
              <li><Link href="/for-agencies">Collection agencies</Link></li>

              <li><Link href="/for-buyers">Debt buyers</Link></li>
              <li><Link href="/for-sellers">Debt sellers</Link></li>
            </ul>
          </div>

          <div>
            <h4>Company</h4>
            <ul>
              <li><Link href="/about">About Aurore</Link></li>
              <li><Link href="/customers">Customers</Link></li>
              <li><Link href="/insights">Insights</Link></li>
              <li><Link href="/contact">Contact</Link></li>
              <li><a href="https://aurore-labs.notion.site/careers-latam" target="_blank" rel="noopener noreferrer">Careers</a></li>
            </ul>
          </div>
        </div>

        <div className="bottom">
          <span>© {year} Aurore Labs · Fairfield, CA · Santiago</span>
          <span>Aurorelabs.ai</span>
          <span>Built for operators</span>
        </div>
      </div>
    </footer>
  );
}
