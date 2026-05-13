import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Solutions — Aurore Labs",
  description:
    "Seventeen purpose-built intelligence and automation products across six operating stages of the receivables lifecycle.",
};

export default function SolutionsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-dots">
        <div className="container" style={{ maxWidth: "780px" }}>
          <p className="eyebrow" style={{ marginBottom: "18px" }}>
            Solutions
          </p>
          <h1
            className="display h-lg"
            style={{ marginBottom: "22px" }}
          >
            Seventeen products. Six operating stages.
          </h1>
          <p className="lede" style={{ maxWidth: "54ch", marginBottom: "36px" }}>
            Every product maps to a specific decision point in the receivables
            lifecycle. Start with the stage that hurts most — expand as you
            prove value.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
            <a href="#stage-1" className="pill">
              <span className="dot" />
              § 01 Portfolio decisions
            </a>
            <a href="#stage-2" className="pill">
              <span className="dot" />
              § 02 Intake &amp; enrichment
            </a>
            <a href="#stage-3" className="pill">
              <span className="dot" />
              § 03 Routing &amp; decisioning
            </a>
            <a href="#stage-4" className="pill">
              <span className="dot" />
              § 04 Compliance &amp; learning
            </a>
            <a href="#stage-5" className="pill">
              <span className="dot" />
              § 05 Litigation &amp; recovery
            </a>
            <a href="#stage-6" className="pill">
              <span className="dot" />
              § 06 Stakeholder interfaces
            </a>
          </div>
        </div>
      </section>

      {/* Stage 1 */}
      <section id="stage-1" className="section">
        <div className="container">
          <div className="section-mark" style={{ marginBottom: "40px" }}>
            <span className="num">§ 01</span>
            <span className="label">Portfolio decisions</span>
          </div>
          <div className="grid-2">
            {/* Card 01 */}
            <article className="card card-pad-lg">
              <p className="eyebrow accent" style={{ marginBottom: "10px" }}>
                01 / 17
              </p>
              <h2 className="h-sm display" style={{ marginBottom: "14px" }}>
                Seller Portfolio Intelligence
              </h2>
              <p className="body-lg" style={{ marginBottom: "20px" }}>
                Model the expected value of a receivables portfolio before you
                sell it. Surface collector fit, regulatory exposure, and expected
                liquidation curves so your asking price is defensible — and your
                buyer has fewer surprises.
              </p>
              <ul
                className="body"
                style={{ paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <li>Historical liquidation curve modeling</li>
                <li>Collector performance fit scoring</li>
                <li>Regulatory exposure flags by state &amp; product type</li>
                <li>Bid-range recommendation with confidence band</li>
              </ul>
            </article>

            {/* Card 02 */}
            <article className="card card-pad-lg">
              <p className="eyebrow accent" style={{ marginBottom: "10px" }}>
                02 / 17
              </p>
              <h2 className="h-sm display" style={{ marginBottom: "14px" }}>
                Buyer Bid Intelligence
              </h2>
              <p className="body-lg" style={{ marginBottom: "20px" }}>
                Price a portfolio before you bid on it. Aurore scores each file
                inside the tape against historical yield data, collector
                performance comps, and litigation probability — so you know
                what you're buying before the wire clears.
              </p>
              <ul
                className="body"
                style={{ paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <li>File-level scorecards with predicted recovery rate</li>
                <li>Litigation cost modeling by state &amp; balance band</li>
                <li>Collector placement recommendation</li>
                <li>Post-purchase performance tracking</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Stage 2 */}
      <section id="stage-2" className="section bg-paper-2">
        <div className="container">
          <div className="section-mark" style={{ marginBottom: "40px" }}>
            <span className="num">§ 02</span>
            <span className="label">Intake &amp; enrichment</span>
          </div>
          <ul className="product-list">
            <li>
              <span className="pn">03 / 17</span>
              <span className="pname">Case Intake Automation</span>
              <span className="pdesc">
                Ingest new accounts from any forwarder format — flat file, API,
                or legacy EDI — validate, normalize, and load into your system
                of record without manual re-keying.
              </span>
            </li>
            <li>
              <span className="pn">04 / 17</span>
              <span className="pname">Data Analysis &amp; Augmentation</span>
              <span className="pdesc">
                Append skip-trace results, credit bureau refreshes, litigability
                scores, and asset searches. Surface the accounts worth working
                before your team touches the queue.
              </span>
            </li>
            <li>
              <span className="pn">05 / 17</span>
              <span className="pname">Historical Yield Intelligence</span>
              <span className="pdesc">
                Benchmark actual vs. expected recovery across every collector,
                product type, and vintage. Know which books performed — and
                why.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Stage 3 */}
      <section id="stage-3" className="section">
        <div className="container">
          <div className="section-mark" style={{ marginBottom: "40px" }}>
            <span className="num">§ 03</span>
            <span className="label">Routing &amp; decisioning</span>
          </div>
          <ul className="product-list">
            <li>
              <span className="pn">06 / 17</span>
              <span className="pname">Case Routing &amp; Decisioning</span>
              <span className="pdesc">
                Score and sort incoming accounts by collectibility, regulatory
                risk, and collector fit. Route each case to the right queue on
                day one.
              </span>
            </li>
            <li>
              <span className="pn">07 / 17</span>
              <span className="pname">Omnichannel Routing</span>
              <span className="pdesc">
                Orchestrate outreach across call, text, email, and mail by
                consumer preference signal and time-of-day yield data.
              </span>
            </li>
            <li>
              <span className="pn">08 / 17</span>
              <span className="pname">Behavioral Segmentation</span>
              <span className="pdesc">
                Cluster accounts by payment intent signal, channel
                responsiveness, and dispute probability. Feed segments directly
                into collector queues and campaign logic.
              </span>
            </li>
            <li>
              <span className="pn">09 / 17</span>
              <span className="pname">Yield (Next Action) Intelligence</span>
              <span className="pdesc">
                Surface the single best next action for each account —
                call, letter, settlement offer, or hold — scored by expected
                recovery lift.
              </span>
            </li>
            <li>
              <span className="pn">10 / 17</span>
              <span className="pname">Resource Allocation</span>
              <span className="pdesc">
                Match collector capacity to account priority in real time.
                Reduce idle time and over-dialing while keeping high-value
                accounts worked.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Stage 4 */}
      <section id="stage-4" className="section bg-paper-2">
        <div className="container">
          <div className="section-mark" style={{ marginBottom: "40px" }}>
            <span className="num">§ 04</span>
            <span className="label">Compliance &amp; learning</span>
          </div>
          <div className="grid-2">
            {/* Card 11 */}
            <article className="card card-pad-lg">
              <p className="eyebrow accent" style={{ marginBottom: "10px" }}>
                11 / 17
              </p>
              <h2 className="h-sm display" style={{ marginBottom: "14px" }}>
                Compliance Document Management
              </h2>
              <p className="body-lg" style={{ marginBottom: "20px" }}>
                Centralize chain-of-title documents, HIPAA authorizations, and
                state-specific notice templates. Automatically attach the right
                document set to each account at intake and surface gaps before
                a collector dials.
              </p>
              <ul
                className="body"
                style={{ paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <li>Document gap detection at intake</li>
                <li>State-specific notice template library</li>
                <li>Chain-of-title validation</li>
                <li>Audit-ready export on demand</li>
              </ul>
            </article>

            {/* Card 12 */}
            <article className="card card-pad-lg card-amber">
              <p className="eyebrow amber" style={{ marginBottom: "10px" }}>
                12 / 17
              </p>
              <h2 className="h-sm display" style={{ marginBottom: "14px" }}>
                Nudges &amp; A/B Learning Automation
              </h2>
              <p className="body-lg" style={{ marginBottom: "20px" }}>
                Run controlled experiments on message copy, offer structure, and
                outreach cadence. Aurore auto-promotes winning variants and
                retires losers — without a data science team.
              </p>
              <ul
                className="body"
                style={{ paddingLeft: "18px", display: "flex", flexDirection: "column", gap: "8px" }}
              >
                <li>Automated variant promotion &amp; retirement</li>
                <li>Segment-level experiment isolation</li>
                <li>Lift reporting with statistical significance flags</li>
                <li>No-code experiment builder</li>
              </ul>
            </article>
          </div>
        </div>
      </section>

      {/* Stage 5 */}
      <section id="stage-5" className="section">
        <div className="container">
          <div
            className="section-mark"
            style={{ marginBottom: "40px", justifyContent: "space-between" }}
          >
            <div style={{ display: "flex", alignItems: "baseline", gap: "14px" }}>
              <span className="num">§ 05</span>
              <span className="label">Litigation &amp; recovery</span>
            </div>
            <Link href="/for-law-firms" className="btn btn-ghost btn-sm">
              Built for law firms →
            </Link>
          </div>
          <ul className="product-list">
            <li>
              <span className="pn">13 / 17</span>
              <span className="pname">Civil Case Preparation</span>
              <span className="pdesc">
                Automate complaint drafting, summons packaging, and court-fee
                calculation for high-volume civil suit filing. Reduce paralegal
                prep time per case by 70–90%.
              </span>
            </li>
            <li>
              <span className="pn">14 / 17</span>
              <span className="pname">Small Claims Preparation</span>
              <span className="pdesc">
                Package and file small-claims matters in bulk — including
                Tyler Odyssey and OECI integrations — without manual data
                entry.
              </span>
            </li>
            <li>
              <span className="pn">15 / 17</span>
              <span className="pname">Garnishment Preparation Automation</span>
              <span className="pdesc">
                Generate garnishment writs, calculate exempt amounts by state,
                and track response deadlines from judgment through
                satisfaction.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* Stage 6 */}
      <section id="stage-6" className="section bg-paper-2">
        <div className="container">
          <div className="section-mark" style={{ marginBottom: "40px" }}>
            <span className="num">§ 06</span>
            <span className="label">Stakeholder interfaces</span>
          </div>
          <div className="grid-2">
            {/* Card 16 */}
            <article className="card card-pad-lg">
              <p className="eyebrow accent" style={{ marginBottom: "10px" }}>
                16 / 17
              </p>
              <h2 className="h-sm display" style={{ marginBottom: "14px" }}>
                Customer Interaction Portal
              </h2>
              <p className="body-lg">
                A consumer-facing self-service portal for payment plans, dispute
                submission, and cease-and-desist requests. FDCPA-aware, mobile
                responsive, and branded to your client&apos;s identity.
              </p>
            </article>

            {/* Card 17 */}
            <article className="card card-pad-lg">
              <p className="eyebrow accent" style={{ marginBottom: "10px" }}>
                17 / 17
              </p>
              <h2 className="h-sm display" style={{ marginBottom: "14px" }}>
                Client Reporting Portal
              </h2>
              <p className="body-lg">
                Give every forwarder and debt buyer a live view of their
                portfolio: liquidation curves, collector activity, dispute
                rates, and remittance detail — updated nightly, no call
                required.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* Closing dark section */}
      <section className="section bg-ink bg-dots-ink">
        <div className="container" style={{ maxWidth: "780px" }}>
          <h2
            className="display h-md"
            style={{ marginBottom: "32px", color: "var(--ink-rev)" }}
          >
            Start with one product. Add the rest as value is proven.
          </h2>
          <div className="card card-ink card-pad-lg">
            <p
              className="eyebrow"
              style={{ marginBottom: "20px", color: "rgba(245,241,233,0.55)" }}
            >
              Where to start by segment
            </p>
            <ul
              style={{
                listStyle: "none",
                margin: 0,
                padding: 0,
                display: "flex",
                flexDirection: "column",
                gap: "14px",
              }}
            >
              {[
                {
                  segment: "Debt buyer",
                  products: "Buyer Bid Intelligence → Case Routing → Historical Yield",
                  href: "/for-buyers",
                },
                {
                  segment: "Debt seller / creditor",
                  products: "Seller Portfolio Intelligence → Data Analysis → Compliance Docs",
                  href: "/for-sellers",
                },
                {
                  segment: "Collection agency",
                  products:
                    "Case Intake → Behavioral Segmentation → Yield Intelligence",
                  href: "/for-agencies",
                },
                {
                  segment: "Collection law firm",
                  products: "Civil Case Preparation → Garnishment → Resource Allocation",
                  href: "/for-law-firms",
                },
              ].map(({ segment, products, href }) => (
                <li
                  key={segment}
                  style={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "6px 12px",
                    alignItems: "baseline",
                    paddingBottom: "14px",
                    borderBottom: "1px solid var(--rev-line)",
                  }}
                >
                  <Link
                    href={href}
                    className="mono"
                    style={{
                      fontSize: "12px",
                      color: "var(--teal-bright)",
                      minWidth: "180px",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {segment} →
                  </Link>
                  <span
                    className="body-sm"
                    style={{ color: "rgba(245,241,233,0.7)" }}
                  >
                    {products}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ marginTop: "36px", display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <Link href="/contact" className="btn btn-rev-primary">
              Talk to us
            </Link>
            <Link href="/approach" className="btn btn-rev-ghost">
              How it works →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
