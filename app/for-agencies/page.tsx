import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "For Collection Agencies — Aurore Labs",
  description:
    "Lift liquidation, cut cost per seat, and stay audit-ready. Intelligence and automation built for collection agencies.",
};

export default function ForAgenciesPage() {
  return (
    <>
      {/* Hero */}
      <section className="section bg-dots">
        <div className="container">
          <div style={{ marginBottom: "24px" }}>
            <div className="seg-switch">
              <Link href="/for-agencies" className="is-active">
                Collection agency
              </Link>
              <Link href="/for-law-firms">Collection law firm</Link>
              <Link href="/for-buyers">Debt buyer</Link>
              <Link href="/for-sellers">Debt seller / creditor</Link>
            </div>
          </div>
          <p className="eyebrow" style={{ marginBottom: "18px" }}>
            For collection agencies
          </p>
          <h1
            className="display h-lg"
            style={{ marginBottom: "22px", maxWidth: "18ch" }}
          >
            Lift liquidation. Cut $/seat. Stay audit-ready.
          </h1>
          <p className="lede" style={{ maxWidth: "54ch", marginBottom: "36px" }}>
            Aurore plugs into your existing system of record and turns raw
            account data into prioritized queues, optimized outreach, and
            real-time compliance guardrails — without ripping and replacing
            anything.
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
              Illustrative impact across a mid-size agency (250–500 seats)
            </p>
            <div className="statband">
              <div className="stat">
                <div className="unit">Manual work eliminated</div>
                <div className="num">11,500</div>
                <div className="label">hrs / yr removed from intake &amp; reporting workflows</div>
              </div>
              <div className="stat">
                <div className="unit">Operating cost out</div>
                <div className="num">$300K</div>
                <div className="label">/ yr in staff-hour savings at fully-loaded rates</div>
              </div>
              <div className="stat">
                <div className="unit">Per-case effort</div>
                <div className="num">5–9</div>
                <div className="label">min of collector time per resolved account</div>
              </div>
              <div className="stat">
                <div className="unit">Volume headroom</div>
                <div className="num">40–50%</div>
                <div className="label">more cases workable on current headcount</div>
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
                &ldquo;My liquidation isn&apos;t moving and I don&apos;t know which accounts are worth working.&rdquo;
              </h3>
              <p className="body" style={{ marginBottom: "14px" }}>
                Without behavioral scoring, collectors default to balance-first
                dialing and miss the accounts most likely to pay.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                <span className="pill pill-accent">Yield Intelligence</span>
                <span className="pill pill-accent">Behavioral Segmentation</span>
                <span className="pill pill-accent">Historical Yield</span>
              </div>
            </article>

            {/* Pain 02 */}
            <article className="card card-pad">
              <span className="pill pill-rose" style={{ marginBottom: "14px", display: "inline-flex" }}>
                Pain 02
              </span>
              <h3 className="h-sm display" style={{ marginBottom: "12px" }}>
                &ldquo;My collectors are guessing at next steps instead of following a proven playbook.&rdquo;
              </h3>
              <p className="body" style={{ marginBottom: "14px" }}>
                Inconsistent collector judgment creates variance in outcomes —
                and exposes you to compliance risk when the wrong message goes
                to the wrong consumer.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                <span className="pill pill-accent">Yield (Next Action) Intelligence</span>
                <span className="pill pill-accent">Resource Allocation</span>
              </div>
            </article>

            {/* Pain 03 */}
            <article className="card card-pad">
              <span className="pill pill-rose" style={{ marginBottom: "14px", display: "inline-flex" }}>
                Pain 03
              </span>
              <h3 className="h-sm display" style={{ marginBottom: "12px" }}>
                &ldquo;Onboarding a new client takes three weeks of spreadsheet wrangling.&rdquo;
              </h3>
              <p className="body" style={{ marginBottom: "14px" }}>
                Every forwarder sends a different file format. Manual normalization
                is slow, error-prone, and blocks your team from working the
                accounts sooner.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                <span className="pill pill-accent">Case Intake Automation</span>
                <span className="pill pill-accent">Data Analysis &amp; Augmentation</span>
              </div>
            </article>

            {/* Pain 04 */}
            <article className="card card-pad">
              <span className="pill pill-rose" style={{ marginBottom: "14px", display: "inline-flex" }}>
                Pain 04
              </span>
              <h3 className="h-sm display" style={{ marginBottom: "12px" }}>
                &ldquo;Every call is a compliance question I can&apos;t see in advance.&rdquo;
              </h3>
              <p className="body" style={{ marginBottom: "14px" }}>
                State-specific rules, TCPA exposure, and missing chain-of-title
                documents create legal risk that supervisors can&apos;t monitor in
                real time.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                <span className="pill pill-accent">Compliance Document Management</span>
                <span className="pill pill-accent">Nudges &amp; A/B</span>
              </div>
            </article>

            {/* Pain 05 */}
            <article className="card card-pad">
              <span className="pill pill-rose" style={{ marginBottom: "14px", display: "inline-flex" }}>
                Pain 05
              </span>
              <h3 className="h-sm display" style={{ marginBottom: "12px" }}>
                &ldquo;My EOM reconciliation runs three days and still has errors.&rdquo;
              </h3>
              <p className="body" style={{ marginBottom: "14px" }}>
                Manual remittance and report generation burns analyst time and
                delays client payments — damaging relationships that took years
                to build.
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginTop: "auto" }}>
                <span className="pill pill-accent">Case Intake</span>
                <span className="pill pill-accent">Client Reporting Portal</span>
              </div>
            </article>

            {/* Card 06 — bonus card-teal */}
            <article className="card card-pad card-teal">
              <span className="pill pill-accent" style={{ marginBottom: "14px", display: "inline-flex" }}>
                +
              </span>
              <h3 className="h-sm display" style={{ marginBottom: "12px" }}>
                &ldquo;And I can&apos;t grow without hiring more collectors.&rdquo;
              </h3>
              <p className="body">
                Aurore increases per-collector throughput by surfacing only the
                accounts most likely to pay next — so your existing team works
                smarter before you add a single seat.
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
            <span className="label">The modules that matter for an agency</span>
          </div>
          <ul className="product-list">
            <li>
              <span className="pn">03 / 17</span>
              <span className="pname">Case Intake Automation</span>
              <span className="pdesc">
                Ingest, normalize, and load new accounts from any forwarder
                format — flat file, API, or legacy EDI — without manual
                re-keying.
              </span>
            </li>
            <li>
              <span className="pn">04 / 17</span>
              <span className="pname">Data Analysis &amp; Augmentation</span>
              <span className="pdesc">
                Append skip-trace, credit bureau refreshes, litigability scores,
                and asset searches at intake.
              </span>
            </li>
            <li>
              <span className="pn">05 / 17</span>
              <span className="pname">Historical Yield Intelligence</span>
              <span className="pdesc">
                Benchmark actual vs. expected recovery across every collector,
                product type, and vintage.
              </span>
            </li>
            <li>
              <span className="pn">06 / 17</span>
              <span className="pname">Case Routing &amp; Decisioning</span>
              <span className="pdesc">
                Score and sort incoming accounts by collectibility, regulatory
                risk, and collector fit on day one.
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
                responsiveness, and dispute probability.
              </span>
            </li>
            <li>
              <span className="pn">09 / 17</span>
              <span className="pname">Yield (Next Action) Intelligence</span>
              <span className="pdesc">
                Surface the single best next action for each account, scored
                by expected recovery lift.
              </span>
            </li>
            <li>
              <span className="pn">10 / 17</span>
              <span className="pname">Resource Allocation</span>
              <span className="pdesc">
                Match collector capacity to account priority in real time.
                Reduce idle time and over-dialing.
              </span>
            </li>
            <li>
              <span className="pn">11 / 17</span>
              <span className="pname">Compliance Document Management</span>
              <span className="pdesc">
                Centralize chain-of-title docs, HIPAA authorizations, and
                state-specific notice templates. Surface gaps before a
                collector dials.
              </span>
            </li>
            <li>
              <span className="pn">12 / 17</span>
              <span className="pname">Nudges &amp; A/B Learning Automation</span>
              <span className="pdesc">
                Run controlled experiments on message copy, offer structure, and
                outreach cadence. Auto-promote winning variants.
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
                Aurore is built to work alongside your existing system of record
                — not replace it. Native integrations mean zero re-keying and
                live data sync from day one.
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
                  { name: "IPACS", badge: "Native" },
                  { name: "CUBS / Columbia / Collect!", badge: "Connector" },
                  { name: "EPIC / QuickBooks / Azure", badge: "Connector" },
                  { name: "Predictive dialers", badge: "Native" },
                  { name: "Bespoke portals", badge: "On request" },
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
            Tell us about your book. We&apos;ll come back with where the lift is.
          </h2>
          <p
            className="lede"
            style={{ marginBottom: "36px", color: "rgba(245,241,233,0.78)" }}
          >
            A 30-minute conversation is enough to model the impact on your
            current portfolio mix.
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
