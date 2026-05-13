import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customers — Aurore Labs",
  description:
    "Three honest stories from collection agencies and law firms running Aurore in production.",
};

export default function CustomersPage() {
  return (
    <>
      {/* HERO */}
      <section className="section bg-paper-2" style={{ position: "relative", overflow: "hidden" }}>
        <div className="bg-dots" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
        <div className="container" style={{ position: "relative" }}>
          <p className="eyebrow" style={{ marginBottom: 20 }}>Customers</p>
          <h1 className="display h-xl" style={{ maxWidth: "20ch", marginBottom: 28 }}>
            Three operations. Three honest stories.
          </h1>
          <p className="lede" style={{ maxWidth: "62ch", marginBottom: 36 }}>
            Aurore is a young company in a conservative industry. We don&apos;t have
            a hundred case studies. We have three engagements we can speak to
            precisely, and we&apos;d rather say that clearly than fill pages with
            vague claims.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            <Link href="#case-law" className="pill">Case 01 — Creditors-rights law firm</Link>
            <Link href="#case-pnw" className="pill">Case 02 — Collection agency</Link>
            <Link href="#case-specialty" className="pill">Case 03 — Specialty agency</Link>
          </div>
        </div>
      </section>

      {/* CASE 01 */}
      <section id="case-law" className="section">
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
            <span className="pill pill-accent">Case 01</span>
            <span className="pill">Creditors-rights law firm</span>
            <span className="pill">Pacific Northwest &middot; 7 collectors &middot; ~4,000 calls/Q</span>
            <span className="pill">Q4 2025</span>
          </div>
          <h2 className="display h-lg" style={{ maxWidth: "28ch", marginBottom: 48 }}>
            &ldquo;83% of inbound calls were going unanswered. We found out which 83.&rdquo;
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 48, alignItems: "start" }}>
            {/* Left column */}
            <div className="flow-lg">
              <p className="body-lg">
                A Pacific Northwest creditors-rights firm engaged Aurore after noticing their inbound
                answer rate felt low — but had no data to quantify it. We connected to their
                CollectMax instance and began reading call activity, collector presence, and queue
                data in Q4 2025. Within six weeks we had a complete picture of where calls were
                going and why.
              </p>
              <p className="body-lg">
                The finding was structural: the firm was measuring the wrong thing. They knew
                how many outbound calls their collectors made. They did not know that 83% of
                inbound calls — from debtors ready to pay, dispute, or settle — were ringing
                unanswered.
              </p>

              <div className="card card-pad">
                <p className="eyebrow" style={{ marginBottom: 16 }}>The structural finding</p>
                <ul className="flow" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li className="body">
                    <strong>4,170</strong> inbound calls received in Q4 2025
                  </li>
                  <li className="body">
                    <strong>16.6%</strong> overall answer rate — 3,477 calls went unanswered
                  </li>
                  <li className="body">
                    Peak volume concentrated at <strong>12 PM (7%)</strong> and <strong>4 PM (2%)</strong> of daily traffic — both underserved windows
                  </li>
                  <li className="body">
                    Top collector answered <strong>59.2%</strong> of their inbound calls; lowest answered <strong>0.2%</strong>
                  </li>
                  <li className="body">
                    Trend line: <strong>16.8% → 16.5% → 14.8%</strong> — the problem was getting worse
                  </li>
                </ul>
              </div>

              <div className="card card-amber card-pad">
                <p className="eyebrow amber" style={{ marginBottom: 16 }}>What the firm did with it</p>
                <p className="body">
                  Armed with collector-level and hour-level breakdowns, the firm restructured
                  coverage windows, paired high-answer collectors with peak slots, and instituted
                  a daily read of the inbound answer dashboard. Their stated target: 30%+ answer
                  rate within two quarters.
                </p>
              </div>

              <div className="card card-pad">
                <p className="eyebrow" style={{ marginBottom: 16 }}>What this engagement says about Aurore</p>
                <ul className="flow" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  <li className="body" style={{ display: "flex", gap: 10 }}>
                    <span style={{ color: "var(--teal)", fontWeight: 600, flexShrink: 0 }}>—</span>
                    We found a $X problem the client didn&apos;t know they had. The data was in
                    their SOR — it just wasn&apos;t surfaced.
                  </li>
                  <li className="body" style={{ display: "flex", gap: 10 }}>
                    <span style={{ color: "var(--teal)", fontWeight: 600, flexShrink: 0 }}>—</span>
                    No migration. No retraining. We read CollectMax, wrote back intelligence,
                    and the firm operated exactly as before — with better information.
                  </li>
                  <li className="body" style={{ display: "flex", gap: 10 }}>
                    <span style={{ color: "var(--teal)", fontWeight: 600, flexShrink: 0 }}>—</span>
                    The engagement started as a diagnostic. It has since expanded to include
                    omnichannel routing and behavioral segmentation.
                  </li>
                </ul>
              </div>
            </div>

            {/* Right column */}
            <div className="flow-lg">
              <div className="card card-pad">
                <p className="eyebrow" style={{ marginBottom: 20 }}>By the numbers</p>
                <div className="flow" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    { label: "Inbound calls received", value: "4,170", tone: "" },
                    { label: "Answer rate", value: "16.6%", tone: "rose" },
                    { label: "Calls unanswered", value: "3,477", tone: "rose" },
                    { label: "Top collector answer rate", value: "59.2%", tone: "teal" },
                    { label: "Lowest collector answer rate", value: "0.2%", tone: "rose" },
                    { label: "Peak hour share (noon)", value: "7%", tone: "rose" },
                    { label: "Peak hour share (4 PM)", value: "2%", tone: "rose" },
                  ].map(({ label, value, tone }) => (
                    <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 12, borderBottom: "1px solid var(--line-soft)" }}>
                      <span className="body-sm muted">{label}</span>
                      <span
                        className="mono"
                        style={{
                          fontSize: 18,
                          fontWeight: 600,
                          color: tone === "rose" ? "var(--rose)" : tone === "teal" ? "var(--teal)" : "var(--ink)",
                        }}
                      >
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card card-teal card-pad">
                <p className="eyebrow accent" style={{ marginBottom: 16 }}>Aurore engines involved</p>
                <ul className="flow" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {["Resource Allocation", "Omnichannel Routing", "Behavioral Segmentation", "Yield Intelligence"].map((e) => (
                    <li key={e} className="body" style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--teal)", flexShrink: 0, display: "inline-block" }} />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>

              <details className="card card-pad" style={{ cursor: "pointer" }}>
                <summary className="eyebrow" style={{ cursor: "pointer", userSelect: "none" }}>
                  How we measured this &rarr;
                </summary>
                <div className="flow" style={{ marginTop: 16 }}>
                  <p className="body-sm">
                    Call data was read directly from the CollectMax call log via our read-only
                    SOR connector. Answer rate is defined as inbound calls where a collector
                    picked up within the ring window, divided by total inbound calls received.
                    Collector-level breakdowns exclude administrative and voicemail-only lines.
                    The trend line covers three consecutive months of Q4 2025 activity.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CASE 02 */}
      <section id="case-pnw" className="section bg-paper-2">
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
            <span className="pill pill-accent">Case 02</span>
            <span className="pill">Mid-size collection agency</span>
            <span className="pill">Pacific Northwest</span>
            <span className="pill">10 months in</span>
          </div>
          <h2 className="display h-lg" style={{ maxWidth: "30ch", marginBottom: 48 }}>
            11,500 hours of manual work eliminated. Headcount stopped capping caseload.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 48, alignItems: "start" }}>
            {/* Left column */}
            <div className="flow-lg">
              <p className="body-lg">
                A mid-size Pacific Northwest collection agency came to Aurore with a ceiling problem:
                every time they won a new client or took on more paper, they had to hire. The math
                was linear — more cases meant more people to process them. After ten months on Aurore,
                the math is no longer linear.
              </p>
              <p className="body-lg">
                We mapped every manual touchpoint in their case lifecycle and automated the ones that
                were rules-based. The result was 11,500 hours per year of eliminated manual work —
                and a team that can absorb 40&ndash;50% more caseload without adding headcount.
              </p>

              <div className="card card-pad" style={{ overflowX: "auto" }}>
                <p className="eyebrow" style={{ marginBottom: 16 }}>Before/after per-case workflow</p>
                <table className="aud">
                  <thead>
                    <tr>
                      <th>Step</th>
                      <th>Before (min)</th>
                      <th>After (min)</th>
                      <th>Saved</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Case intake &amp; data entry</td>
                      <td>18</td>
                      <td>2</td>
                      <td style={{ color: "var(--teal)", fontWeight: 600 }}>16 min</td>
                    </tr>
                    <tr>
                      <td>Skip trace &amp; data augmentation</td>
                      <td>12</td>
                      <td>1</td>
                      <td style={{ color: "var(--teal)", fontWeight: 600 }}>11 min</td>
                    </tr>
                    <tr>
                      <td>Compliance document generation</td>
                      <td>9</td>
                      <td>0</td>
                      <td style={{ color: "var(--teal)", fontWeight: 600 }}>9 min</td>
                    </tr>
                    <tr>
                      <td>Client reporting &amp; status updates</td>
                      <td>14</td>
                      <td>1</td>
                      <td style={{ color: "var(--teal)", fontWeight: 600 }}>13 min</td>
                    </tr>
                    <tr style={{ background: "var(--paper-2)", fontWeight: 600 }}>
                      <td>Total per case</td>
                      <td>53 min</td>
                      <td>4 min</td>
                      <td style={{ color: "var(--teal)" }}>49 min (~92%)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="card card-pad">
                <p className="eyebrow" style={{ marginBottom: 16 }}>Annualized hours saved by track</p>
                <div className="grid-2" style={{ gap: 20 }}>
                  <div>
                    <p className="body-sm muted" style={{ marginBottom: 12 }}>Small claims track</p>
                    <ul className="flow" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {[
                        "Case intake automation",
                        "Skip trace automation",
                        "First notice generation",
                        "Small claims filing prep",
                        "Judgment tracking",
                        "Garnishment initiation",
                        "Client status reporting",
                      ].map((item) => (
                        <li key={item} className="body-sm" style={{ display: "flex", gap: 8 }}>
                          <span style={{ color: "var(--teal)", flexShrink: 0 }}>—</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="mono" style={{ fontSize: 24, color: "var(--teal)", marginTop: 14 }}>~5,500 hrs/yr</p>
                  </div>
                  <div>
                    <p className="body-sm muted" style={{ marginBottom: 12 }}>Intake / exec / DMS track</p>
                    <ul className="flow" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                      {[
                        "Data intake &amp; normalization",
                        "Executive reporting",
                        "DMS document routing",
                        "Compliance audit prep",
                        "Client portal updates",
                      ].map((item) => (
                        <li key={item} className="body-sm" style={{ display: "flex", gap: 8 }}>
                          <span style={{ color: "var(--teal)", flexShrink: 0 }}>—</span>
                          <span dangerouslySetInnerHTML={{ __html: item }} />
                        </li>
                      ))}
                    </ul>
                    <p className="mono" style={{ fontSize: 24, color: "var(--teal)", marginTop: 14 }}>~6,000 hrs/yr</p>
                  </div>
                </div>
              </div>

              <div className="card card-amber card-pad">
                <p className="eyebrow amber" style={{ marginBottom: 16 }}>What the firm did with it</p>
                <p className="body">
                  Rather than reduce headcount, the agency redirected their team toward higher-value
                  collector activity and took on 40&ndash;50% additional caseload. The equivalent of
                  approximately 6 FTE worth of processing capacity is now handled by Aurore — without
                  a single new hire in the processing function.
                </p>
              </div>
            </div>

            {/* Right column */}
            <div className="flow-lg">
              <div className="card card-pad">
                <p className="eyebrow" style={{ marginBottom: 20 }}>By the numbers</p>
                <div className="flow">
                  {[
                    { label: "Hours eliminated per year", value: "11,500 hrs/yr" },
                    { label: "Estimated annual cost savings", value: "$300K/yr" },
                    { label: "FTE equivalent absorbed", value: "~6.0 FTE" },
                    { label: "Per-case manual work eliminated", value: "~95%" },
                    { label: "Caseload growth absorbed", value: "40–50%" },
                  ].map(({ label, value }) => (
                    <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 12, borderBottom: "1px solid var(--line-soft)" }}>
                      <span className="body-sm muted">{label}</span>
                      <span className="mono" style={{ fontSize: 17, fontWeight: 600, color: "var(--teal)" }}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card card-teal card-pad">
                <p className="eyebrow accent" style={{ marginBottom: 16 }}>Aurore engines involved</p>
                <ul className="flow" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {["Case Intake", "Data Analysis & Augmentation", "Small Claims", "Civil Case", "Garnishment", "Compliance Doc Mgmt"].map((e) => (
                    <li key={e} className="body" style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--teal)", flexShrink: 0, display: "inline-block" }} />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>

              <details className="card card-pad" style={{ cursor: "pointer" }}>
                <summary className="eyebrow" style={{ cursor: "pointer", userSelect: "none" }}>
                  How we measured this &rarr;
                </summary>
                <div className="flow" style={{ marginTop: 16 }}>
                  <p className="body-sm">
                    Hours savings are based on time-motion studies conducted before and after
                    automation deployment, validated against actual SOR task logs. FTE equivalent
                    is calculated at 1,920 hours/year per FTE. Cost savings use the agency&apos;s
                    loaded labor rate for processing staff. Caseload growth is measured against
                    the prior 12-month average before Aurore deployment.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </section>

      {/* CASE 03 */}
      <section id="case-specialty" className="section">
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
            <span className="pill pill-accent">Case 03</span>
            <span className="pill">Specialty collection agency</span>
            <span className="pill">Student-loan &amp; commercial</span>
            <span className="pill">SOR migration in progress</span>
          </div>
          <h2 className="display h-lg" style={{ maxWidth: "30ch", marginBottom: 48 }}>
            A specialty agency mid-migration. Aurore as the connective tissue.
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "1.3fr 1fr", gap: 48, alignItems: "start" }}>
            {/* Left column */}
            <div className="flow-lg">
              <p className="body-lg">
                A specialty agency handling student-loan and commercial collections was mid-migration
                from IPACS to EPIC when they engaged Aurore. The challenge wasn&apos;t the migration
                itself — it was everything that had to keep running during the transition.
              </p>
              <p className="body-lg">
                Aurore stepped in as the connective tissue: bridging IPACS and EPIC, maintaining
                client reporting continuity, and building net-new automation that neither system
                offered natively. Rather than wait for the migration to complete before improving
                operations, the agency is improving operations as the migration happens.
              </p>

              <div className="card card-pad">
                <p className="eyebrow" style={{ marginBottom: 16 }}>Functional requirements shipped</p>
                <ul className="flow" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    { id: "FR 10", name: "EOM Excel-to-Excel", desc: "End-of-month client reporting automated from IPACS export to formatted Excel delivery." },
                    { id: "FR 11", name: "Check Register to QuickBooks", desc: "Payment reconciliation bridged from IPACS check register into QuickBooks automatically." },
                    { id: "FR 12", name: "Skip tracing", desc: "Automated skip-trace dispatch and result ingestion on new and stale accounts." },
                    { id: "FR 17A", name: "First notices", desc: "FDCPA-compliant first notice generation and delivery on case open." },
                    { id: "FR 21", name: "DMS", desc: "Document management system integration — inbound and outbound routing." },
                    { id: "FR 22/23", name: "EPIC onboarding", desc: "Automated case onboarding workflow into EPIC from IPACS and new client feeds." },
                    { id: "FR 24", name: "EPIC validation", desc: "Data validation layer ensuring field integrity on EPIC case records." },
                  ].map(({ id, name, desc }) => (
                    <li key={id} style={{ display: "flex", gap: 14, paddingBottom: 12, borderBottom: "1px solid var(--line-soft)" }}>
                      <span className="mono" style={{ color: "var(--teal)", flexShrink: 0, fontSize: 11, paddingTop: 2 }}>{id}</span>
                      <div>
                        <p className="body" style={{ fontWeight: 600, marginBottom: 2 }}>{name}</p>
                        <p className="body-sm muted">{desc}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card card-amber card-pad">
                <p className="eyebrow amber" style={{ marginBottom: 16 }}>Why this matters for similar operators</p>
                <p className="body">
                  Most SOR migrations stall operations for 6&ndash;18 months while the team waits for
                  the new system to be fully configured. Aurore lets you build the automation layer
                  independently of which SOR is underneath — so migrations become a background event,
                  not a halt. If you&apos;re mid-migration or planning one, this is exactly the engagement
                  to read.
                </p>
              </div>
            </div>

            {/* Right column */}
            <div className="flow-lg">
              <div className="card card-pad">
                <p className="eyebrow" style={{ marginBottom: 16 }}>Environment</p>
                <ul className="flow" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    { label: "SOR (legacy)", value: "IPACS (migrating out)" },
                    { label: "SOR (target)", value: "EPIC" },
                    { label: "Cloud", value: "Azure" },
                    { label: "Accounting", value: "QuickBooks" },
                    { label: "Portals", value: "Custom client portals" },
                  ].map(({ label, value }) => (
                    <div key={label} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", paddingBottom: 12, borderBottom: "1px solid var(--line-soft)" }}>
                      <span className="body-sm muted">{label}</span>
                      <span className="body-sm" style={{ fontWeight: 600 }}>{value}</span>
                    </div>
                  ))}
                </ul>
              </div>

              <div className="card card-teal card-pad">
                <p className="eyebrow accent" style={{ marginBottom: 16 }}>Aurore engines involved</p>
                <ul className="flow" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {["Case Intake", "Data Analysis", "Compliance Doc Mgmt", "Client Reporting Portal (custom)"].map((e) => (
                    <li key={e} className="body" style={{ display: "flex", gap: 8, alignItems: "center" }}>
                      <span style={{ width: 6, height: 6, borderRadius: 999, background: "var(--teal)", flexShrink: 0, display: "inline-block" }} />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="card card-pad" style={{ background: "var(--paper-2)" }}>
                <p className="eyebrow" style={{ marginBottom: 10 }}>Status</p>
                <p className="body" style={{ fontWeight: 600 }}>FR 10&ndash;17A live</p>
                <p className="body-sm muted">FR 21&ndash;24 in active build</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-ink">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="display h-lg" style={{ marginBottom: 20 }}>
            Tell us about your operation.
          </h2>
          <p className="lede" style={{ marginBottom: 36, maxWidth: "52ch", margin: "0 auto 36px" }}>
            We&apos;ll show you what we&apos;d surface.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 12 }}>
            <Link href="/contact" className="btn btn-rev-primary btn-lg">Book a walkthrough</Link>
            <Link href="/calculator" className="btn btn-rev-ghost btn-lg">Run the ROI calculator</Link>
          </div>
        </div>
      </section>
    </>
  );
}
