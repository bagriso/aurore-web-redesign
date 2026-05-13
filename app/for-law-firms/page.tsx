import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Collection Law Firms — Aurore Labs",
  description:
    "More judgments per attorney. Fewer phones ringing into a void. Intelligence and automation purpose-built for collection law firms.",
};

export default function ForLawFirmsPage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-dots">
        <div className="container">
          <div style={{ marginBottom: "24px" }}>
            <div className="seg-switch">
              <Link href="/for-agencies">Collection agency</Link>
              <Link href="/for-law-firms" className="is-active">
                Collection law firm
              </Link>
              <Link href="/for-buyers">Debt buyer</Link>
              <Link href="/for-sellers">Debt seller / creditor</Link>
            </div>
          </div>
          <h1
            className="display h-lg"
            style={{ marginBottom: "22px", maxWidth: "20ch" }}
          >
            More judgments per attorney. Fewer phones ringing into a void.
          </h1>
          <p className="lede" style={{ maxWidth: "54ch", marginBottom: "36px" }}>
            Aurore automates the paralegal work that shouldn&apos;t require a
            paralegal — so your attorneys and collectors focus on the decisions
            that actually require judgment.
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

      {/* Stat band */}
      <section className="section-tight bg-paper-2">
        <div className="container">
          <div className="card card-pad-lg">
            <p className="eyebrow" style={{ marginBottom: "22px" }}>
              Q4 2025 engagement snapshot — mid-size collection law firm
            </p>
            <div className="statband">
              <div className="stat">
                <div className="unit">Outreach volume</div>
                <div className="num">4,170</div>
                <div className="label">outbound calls placed in the quarter</div>
              </div>
              <div className="stat">
                <div className="unit">Answer rate</div>
                <div
                  className="num"
                  style={{ color: "var(--rose)" }}
                >
                  16.6%
                </div>
                <div className="label">of calls reached a live party</div>
              </div>
              <div className="stat">
                <div className="unit">Top-performer coverage</div>
                <div className="num">59.2%</div>
                <div className="label">of answered calls handled by top-quartile collectors</div>
              </div>
              <div className="stat">
                <div className="unit">4 PM coverage gap</div>
                <div
                  className="num"
                  style={{ color: "var(--rose)" }}
                >
                  2%
                </div>
                <div className="label">of calls placed in the 4–5 PM peak window</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* § 01 Pains */}
      <section className="section">
        <div className="container">
          <div className="section-mark" style={{ marginBottom: "40px" }}>
            <span className="num">§ 01</span>
            <span className="label">The five pains we hear most</span>
          </div>
          <div className="grid-3" style={{ gap: "16px" }}>
            {/* Pain 01 */}
            <article className="card card-pad">
              <span className="pill pill-rose" style={{ marginBottom: "14px", display: "inline-flex" }}>
                Pain 01
              </span>
              <h3 className="h-sm display" style={{ marginBottom: "12px" }}>
                &ldquo;Our paralegals spend their days copying court documents instead of practicing law.&rdquo;
              </h3>
              <p className="body" style={{ marginBottom: "14px" }}>
                Manual complaint drafting, summons packaging, and court-fee
                calculation absorb hours that should go toward cases requiring
                actual legal judgment.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                <span className="pill pill-accent">Civil Case Preparation</span>
                <span className="pill pill-accent">Small Claims Preparation</span>
              </div>
            </article>

            {/* Pain 02 */}
            <article className="card card-pad">
              <span className="pill pill-rose" style={{ marginBottom: "14px", display: "inline-flex" }}>
                Pain 02
              </span>
              <h3 className="h-sm display" style={{ marginBottom: "12px" }}>
                &ldquo;We win the judgment and then sit on it for months waiting for the right garnishment window.&rdquo;
              </h3>
              <p className="body" style={{ marginBottom: "14px" }}>
                Post-judgment enforcement requires tracking employer responses,
                exempt calculations by state, and deadline chains — none of
                which should be manual.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                <span className="pill pill-accent">Garnishment Preparation Automation</span>
              </div>
            </article>

            {/* Pain 03 */}
            <article className="card card-pad">
              <span className="pill pill-rose" style={{ marginBottom: "14px", display: "inline-flex" }}>
                Pain 03
              </span>
              <h3 className="h-sm display" style={{ marginBottom: "12px" }}>
                &ldquo;The phone rings and no one is there — or the wrong collector handles it.&rdquo;
              </h3>
              <p className="body" style={{ marginBottom: "14px" }}>
                Answer rate analysis reveals when and where your outreach
                capacity is misaligned. The Q4 data above is typical — and
                fixable.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                <span className="pill pill-accent">Resource Allocation</span>
                <span className="pill pill-accent">Omnichannel Routing</span>
              </div>
            </article>

            {/* Pain 04 */}
            <article className="card card-pad">
              <span className="pill pill-rose" style={{ marginBottom: "14px", display: "inline-flex" }}>
                Pain 04
              </span>
              <h3 className="h-sm display" style={{ marginBottom: "12px" }}>
                &ldquo;A Tyler Odyssey rejection at 4:55 PM costs us the filing date and two weeks.&rdquo;
              </h3>
              <p className="body" style={{ marginBottom: "14px" }}>
                E-filing errors caused by missing documents or stale data are
                preventable. Compliance checks at intake catch them before
                the clock matters.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                <span className="pill pill-accent">Civil Case Preparation</span>
                <span className="pill pill-accent">Small Claims Preparation</span>
                <span className="pill pill-accent">Compliance Doc Management</span>
              </div>
            </article>

            {/* Pain 05 */}
            <article className="card card-pad">
              <span className="pill pill-rose" style={{ marginBottom: "14px", display: "inline-flex" }}>
                Pain 05
              </span>
              <h3 className="h-sm display" style={{ marginBottom: "12px" }}>
                &ldquo;The forwarder asked for a remittance report. Last week.&rdquo;
              </h3>
              <p className="body" style={{ marginBottom: "14px" }}>
                Manual EOM reporting delays payments and erodes forwarder trust.
                A live portal eliminates the ask entirely.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                <span className="pill pill-accent">Client Reporting Portal</span>
                <span className="pill pill-accent">Case Intake Automation</span>
              </div>
            </article>

            {/* Card 06 — card-teal */}
            <article className="card card-pad card-teal">
              <span className="pill pill-accent" style={{ marginBottom: "14px", display: "inline-flex" }}>
                +
              </span>
              <h3 className="h-sm display" style={{ marginBottom: "12px" }}>
                &ldquo;And the meaningful-attorney-review standard keeps getting tighter.&rdquo;
              </h3>
              <p className="body">
                Aurore surfaces compliance gaps and litigation readiness scores
                before any attorney signs off — so review is meaningful by
                default, not aspirational.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* § 02 Modules */}
      <section className="section bg-paper-2">
        <div className="container">
          <div className="section-mark" style={{ marginBottom: "40px" }}>
            <span className="num">§ 02</span>
            <span className="label">Eight modules that matter</span>
          </div>
          <ul className="product-list">
            <li>
              <span className="pn">03 / 17</span>
              <span className="pname">Case Intake Automation</span>
              <span className="pdesc">
                Ingest, normalize, and load new accounts from any forwarder
                format — flat file, API, or YGC — without manual re-keying.
              </span>
            </li>
            <li>
              <span className="pn">04 / 17</span>
              <span className="pname">Data Analysis &amp; Augmentation</span>
              <span className="pdesc">
                Append skip-trace results, asset searches, and litigability
                scores at intake so attorneys see pre-scored queues.
              </span>
            </li>
            <li>
              <span className="pn">06 / 17</span>
              <span className="pname">Case Routing &amp; Decisioning</span>
              <span className="pdesc">
                Sort incoming matters by litigability score, balance band, and
                state-specific filing cost before assignment.
              </span>
            </li>
            <li>
              <span className="pn">10 / 17</span>
              <span className="pname">Resource Allocation</span>
              <span className="pdesc">
                Match collector and paralegal capacity to matter priority.
                Close the 4 PM coverage gap with data, not headcount.
              </span>
            </li>
            <li>
              <span className="pn">11 / 17</span>
              <span className="pname">Compliance Document Management</span>
              <span className="pdesc">
                Surface chain-of-title gaps, state-specific notice requirements,
                and HIPAA authorizations before any filing is initiated.
              </span>
            </li>
            <li>
              <span className="pn">13 / 17</span>
              <span className="pname">Civil Case Preparation</span>
              <span className="pdesc">
                Automate complaint drafting, summons packaging, and court-fee
                calculation. Reduce paralegal prep time per case by 70–90%.
              </span>
            </li>
            <li>
              <span className="pn">14 / 17</span>
              <span className="pname">Small Claims Preparation</span>
              <span className="pdesc">
                Package and file small-claims matters in bulk, including Tyler
                Odyssey and OECI integrations, without manual data entry.
              </span>
            </li>
            <li>
              <span className="pn">15 / 17</span>
              <span className="pname">Garnishment Preparation Automation</span>
              <span className="pdesc">
                Generate garnishment writs, calculate exempt amounts by state,
                and track response deadlines from judgment through satisfaction.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* § 03 Integrations */}
      <section className="section">
        <div className="container">
          <div className="section-mark" style={{ marginBottom: "40px" }}>
            <span className="num">§ 03</span>
            <span className="label">Integrations</span>
          </div>
          <div className="grid-2">
            <div>
              <p className="body-lg" style={{ maxWidth: "42ch" }}>
                Aurore integrates with the court filing systems, forwarder
                formats, and SORs your firm already runs — including Tyler
                Odyssey, YGC, and SmartData. No rip-and-replace.
              </p>
            </div>
            <div className="card card-pad">
              <p className="eyebrow" style={{ marginBottom: "18px" }}>
                Supported platforms
              </p>
              <ul
                style={{
                  listStyle: "none",
                  margin: 0,
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                {[
                  { name: "JST CollectMax", badge: "Native" },
                  { name: "SmartData", badge: "SQL Read · write" },
                  { name: "MaxUpdater", badge: "Native" },
                  { name: "YGC", badge: "Native" },
                  { name: "Tyler Odyssey / OECI", badge: "Connector" },
                  { name: "Custom forwarder / SOR", badge: "On request" },
                ].map(({ name, badge }) => (
                  <li
                    key={name}
                    style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      paddingBottom: "12px",
                      borderBottom: "1px solid var(--line-soft)",
                      fontSize: "14.5px",
                      color: "var(--ink-2)",
                    }}
                  >
                    <span>{name}</span>
                    <span
                      className="mono"
                      style={{
                        fontSize: "11px",
                        letterSpacing: "0.1em",
                        color: "var(--teal)",
                        textTransform: "uppercase",
                      }}
                    >
                      {badge}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
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
            Tell us about your matters. We&apos;ll come back with a number.
          </h2>
          <p
            className="lede"
            style={{ marginBottom: "36px", color: "rgba(245,241,233,0.78)" }}
          >
            Share your monthly volume and current paralegal headcount. We&apos;ll
            model the capacity unlock in one conversation.
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
