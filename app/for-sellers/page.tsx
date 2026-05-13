import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Debt Sellers — Aurore Labs",
  description:
    "Sell at the price your data deserves. Aurore for banks, lenders, medical systems, retail, telecom, and landlords moving receivables portfolios.",
};

export default function ForSellersPage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-dots">
        <div className="container">
          <div style={{ marginBottom: "24px" }}>
            <div className="seg-switch">
              <Link href="/for-agencies">Collection agency</Link>
              <Link href="/for-law-firms">Collection law firm</Link>
              <Link href="/for-buyers">Debt buyer</Link>
              <Link href="/for-sellers" className="is-active">
                Debt seller / creditor
              </Link>
            </div>
          </div>
          <h1
            className="display h-lg"
            style={{ marginBottom: "22px", maxWidth: "16ch" }}
          >
            Sell at the price your data deserves.
          </h1>
          <p className="lede" style={{ maxWidth: "56ch", marginBottom: "36px" }}>
            Aurore for banks, lenders, medical systems, retail, telecom, and
            landlords moving receivables portfolios. Model the value before
            you market it — and know whether the buyer delivered after the
            sale.
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

      {/* § 01 Three moments */}
      <section className="section">
        <div className="container">
          <div className="section-mark" style={{ marginBottom: "40px" }}>
            <span className="num">§ 01</span>
            <span className="label">Three moments in the sale</span>
          </div>
          <div className="grid-3">
            {/* Moment 01 */}
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
                01 Pre-sale
              </p>
              <h3 className="h-sm display" style={{ marginBottom: "14px" }}>
                What is this portfolio actually worth?
              </h3>
              <p className="body" style={{ marginBottom: "20px" }}>
                Model expected liquidation before you set your asking price.
                Aurore benchmarks your portfolio against historical performance
                data on comparable paper — so you know what a realistic bid
                looks like before you hear one.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                <span className="pill pill-accent">Seller Portfolio Intelligence</span>
              </div>
            </article>

            {/* Moment 02 */}
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
                02 Diligence
              </p>
              <h3 className="h-sm display" style={{ marginBottom: "14px" }}>
                Is the data clean enough to ship?
              </h3>
              <p className="body" style={{ marginBottom: "20px" }}>
                Data quality problems discovered during buyer diligence kill
                deals — or cut the price. Aurore surfaces field completeness
                gaps, chain-of-title issues, and regulatory exposure flags
                before your tape leaves the building.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                <span className="pill pill-accent">Data Analysis &amp; Augmentation</span>
                <span className="pill pill-accent">Compliance Doc Management</span>
              </div>
            </article>

            {/* Moment 03 */}
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
                03 Post-sale
              </p>
              <h3 className="h-sm display" style={{ marginBottom: "14px" }}>
                Did the portfolio perform like we said it would?
              </h3>
              <p className="body" style={{ marginBottom: "20px" }}>
                Close the feedback loop. Aurore tracks actual recovery against
                the model you built pre-sale — so every future pricing
                conversation starts from a stronger baseline.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                <span className="pill pill-accent">Historical Yield Intelligence</span>
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
            Tell us what&apos;s on your books. We&apos;ll model what it&apos;s worth.
          </h2>
          <p
            className="lede"
            style={{ marginBottom: "36px", color: "rgba(245,241,233,0.78)" }}
          >
            Share your portfolio mix — product type, vintage, balance bands —
            and we&apos;ll return a valuation model before you go to market.
          </p>
          <div style={{ display: "flex", gap: "12px", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-rev-primary">
              Request a walkthrough
            </Link>
            <Link href="/solutions" className="btn btn-rev-ghost">
              See all 17 products →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
