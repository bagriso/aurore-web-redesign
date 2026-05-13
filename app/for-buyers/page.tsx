import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Debt Buyers — Aurore Labs",
  description:
    "Price with conviction. Place with intelligence. Aurore gives debt buyers the data layer to bid, place, and monitor portfolios with precision.",
};

export default function ForBuyersPage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-dots">
        <div className="container">
          <div style={{ marginBottom: "24px" }}>
            <div className="seg-switch">
              <Link href="/for-agencies">Collection agency</Link>
              <Link href="/for-buyers" className="is-active">
                Debt buyer
              </Link>
              <Link href="/for-sellers">Debt seller / creditor</Link>
            </div>
          </div>
          <h1
            className="display h-lg"
            style={{ marginBottom: "22px", maxWidth: "16ch" }}
          >
            Price with conviction. Place with intelligence.
          </h1>
          <p className="lede" style={{ maxWidth: "54ch", marginBottom: "36px" }}>
            Aurore gives debt buyers the data layer to bid on portfolios at the
            right price, route accounts to the right collectors, and watch
            performance in real time — before and after the wire clears.
          </p>
          <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-primary">
              Request a walkthrough
            </Link>
            <Link href="/solutions" className="btn btn-secondary">
              See all 17 products →
            </Link>
          </div>
        </div>
      </section>

      {/* § 01 Three decisions */}
      <section className="section">
        <div className="container">
          <div className="section-mark" style={{ marginBottom: "40px" }}>
            <span className="num">§ 01</span>
            <span className="label">Three decisions every buyer makes</span>
          </div>
          <div className="grid-3">
            {/* Decision 01 */}
            <article className="card card-pad-lg">
              <p
                className="mono"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  color: "var(--teal)",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                01 Diligence
              </p>
              <h3 className="h-sm display" style={{ marginBottom: "14px" }}>
                Is this portfolio worth what they&apos;re asking?
              </h3>
              <p className="body" style={{ marginBottom: "20px" }}>
                Score every file in the tape before you bid. Aurore surfaces
                litigation cost by state, predicted liquidation curves, and
                regulatory exposure flags — so your bid is grounded in data,
                not instinct.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                <span className="pill pill-accent">Buyer Bid Intelligence</span>
                <span className="pill pill-accent">Historical Yield Intelligence</span>
              </div>
            </article>

            {/* Decision 02 */}
            <article className="card card-pad-lg">
              <p
                className="mono"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  color: "var(--teal)",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                02 Placement
              </p>
              <h3 className="h-sm display" style={{ marginBottom: "14px" }}>
                Which collector should run this paper?
              </h3>
              <p className="body" style={{ marginBottom: "20px" }}>
                Match portfolio segments to collectors based on historical
                performance on similar paper — not relationships or habit.
                Route the right paper to the right shop from day one.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                <span className="pill pill-accent">Case Routing</span>
                <span className="pill pill-accent">Behavioral Segmentation</span>
              </div>
            </article>

            {/* Decision 03 */}
            <article className="card card-pad-lg">
              <p
                className="mono"
                style={{
                  fontSize: "11px",
                  letterSpacing: "0.1em",
                  color: "var(--teal)",
                  textTransform: "uppercase",
                  marginBottom: "12px",
                }}
              >
                03 Performance
              </p>
              <h3 className="h-sm display" style={{ marginBottom: "14px" }}>
                How is the book actually performing?
              </h3>
              <p className="body" style={{ marginBottom: "20px" }}>
                A live reporting portal gives every buyer a real-time view of
                liquidation curves, collector activity, dispute rates, and
                remittance detail — without waiting for a monthly call.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                <span className="pill pill-accent">Client Reporting Portal</span>
                <span className="pill pill-accent">Yield Intelligence</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-ink bg-dots-ink">
        <div className="container" style={{ maxWidth: "680px", textAlign: "center" }}>
          <h2
            className="display h-md"
            style={{ marginBottom: "18px", color: "var(--ink-rev)" }}
          >
            Tell us what you bid on. We&apos;ll show you what we&apos;d surface.
          </h2>
          <p
            className="lede"
            style={{ marginBottom: "36px", color: "rgba(245,241,233,0.78)" }}
          >
            Share a recent tape — or describe your typical portfolio mix — and
            we&apos;ll walk through exactly what Aurore would flag before you
            close.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-rev-primary">
              Request a walkthrough
            </Link>
            <Link href="/solutions" className="btn btn-rev-ghost">
              See all 17 solutions →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
