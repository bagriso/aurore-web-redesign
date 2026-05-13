import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Customer Story — Aurore Labs",
  description:
    "How a mid-size Pacific Northwest collection agency eliminated 11,500 hours of manual work per year and absorbed 40–50% more caseload without hiring.",
};

export default function CustomersPage() {
  return (
    <>
      {/* HERO */}
      <section className="section bg-paper-2" style={{ position: "relative", overflow: "hidden" }}>
        <div className="bg-dots" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
        <div className="container" style={{ position: "relative" }}>
          <p className="eyebrow" style={{ marginBottom: 20 }}>Customer story</p>
          <h1 className="display h-xl" style={{ maxWidth: "24ch", marginBottom: 28 }}>
            11,500 hours eliminated. Headcount stopped capping growth.
          </h1>
          <p className="lede" style={{ maxWidth: "62ch" }}>
            A mid-size Pacific Northwest collection agency. Ten months on Aurore.
            The math is no longer linear.
          </p>
        </div>
      </section>

      {/* CASE 02 */}
      <section id="case-pnw" className="section bg-paper-2">
        <div className="container">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
            <span className="pill pill-accent">Case study</span>
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
