import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How we deploy — Aurore Labs",
  description:
    "Three phases. No migration, no retraining, no big-bang launch. Aurore connects to your SOR and begins delivering value from day one.",
};

export default function ApproachPage() {
  return (
    <>
      {/* HERO */}
      <section className="section bg-paper-2" style={{ position: "relative", overflow: "hidden" }}>
        <div className="bg-dots" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
        <div className="container" style={{ position: "relative" }}>
          <p className="eyebrow" style={{ marginBottom: 20 }}>How we deploy</p>
          <h1 className="display h-xl" style={{ maxWidth: "22ch", marginBottom: 28 }}>
            No migration. No retraining. No big-bang launch.
          </h1>
          <p className="lede" style={{ maxWidth: "62ch" }}>
            Aurore is a layer over your existing system of record — not a replacement for it.
            We connect, we read, we surface intelligence, and we only automate when you&apos;ve
            seen the output and decided it&apos;s right. Every phase is reversible. Every phase
            delivers before the next one starts.
          </p>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="section">
        <div className="container">
          <div className="grid-3" style={{ gap: 24, alignItems: "start" }}>

            {/* Phase 01 */}
            <div className="card card-pad-lg flow-lg" style={{ height: "100%" }}>
              <div>
                <p className="eyebrow" style={{ marginBottom: 6 }}>Phase 01</p>
                <p className="eyebrow" style={{ color: "var(--ink-dim)" }}>Days 0&ndash;30</p>
              </div>
              <h2 className="display h-sm" style={{ lineHeight: 1.1 }}>
                Read alongside.
              </h2>
              <p className="body">
                We connect to your SOR via read-only API or scheduled export — no write
                access in phase one. Aurore ingests your historical case, call, payment, and
                collector data. We build your baseline: what&apos;s actually happening vs. what
                your reports say is happening. No workflow changes. No collector retraining.
                Your team operates exactly as before.
              </p>
              <div>
                <p className="eyebrow" style={{ marginBottom: 12 }}>Deliverables</p>
                <ul className="flow" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    "SOR connector live and validated",
                    "Baseline intelligence dashboard",
                    "Collector-level performance breakdown",
                    "Call coverage gap analysis",
                    "Inbound/outbound answer rate audit",
                    "Priority automation candidates identified",
                  ].map((item) => (
                    <li key={item} className="body-sm" style={{ display: "flex", gap: 10 }}>
                      <span style={{ color: "var(--teal)", flexShrink: 0 }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow" style={{ marginBottom: 8 }}>Risk profile</p>
                <span className="pill">Zero — read-only, no workflow changes</span>
              </div>
            </div>

            {/* Phase 02 */}
            <div className="card card-teal card-pad-lg flow-lg" style={{ height: "100%" }}>
              <div>
                <p className="eyebrow accent" style={{ marginBottom: 6 }}>Phase 02</p>
                <p className="eyebrow" style={{ color: "var(--teal-deep)", opacity: 0.7 }}>Days 30&ndash;90</p>
              </div>
              <h2 className="display h-sm" style={{ lineHeight: 1.1 }}>
                Write alongside.
              </h2>
              <p className="body">
                We establish two-way sync with your SOR. Aurore begins writing intelligence
                back as notes, flags, and recommended next actions — visible to collectors in
                their existing interface. First production automations go live: typically case
                intake normalization, first-notice generation, or skip-trace dispatch. Live
                compliance monitoring starts. Every automation runs in parallel with your
                existing process before replacing it.
              </p>
              <div>
                <p className="eyebrow accent" style={{ marginBottom: 12 }}>Deliverables</p>
                <ul className="flow" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    "Bidirectional SOR sync active",
                    "First production automation live",
                    "Live compliance monitoring dashboard",
                    "Collector-facing intelligence layer",
                    "Omnichannel routing rules applied",
                    "First ROI measurement checkpoint",
                  ].map((item) => (
                    <li key={item} className="body-sm" style={{ display: "flex", gap: 10 }}>
                      <span style={{ color: "var(--teal-deep)", flexShrink: 0 }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow accent" style={{ marginBottom: 8 }}>Risk profile</p>
                <span className="pill pill-accent">Low — parallel run before cutover</span>
              </div>
            </div>

            {/* Phase 03 */}
            <div className="card card-pad-lg flow-lg" style={{ height: "100%" }}>
              <div>
                <p className="eyebrow" style={{ marginBottom: 6 }}>Phase 03</p>
                <p className="eyebrow" style={{ color: "var(--ink-dim)" }}>Days 90+</p>
              </div>
              <h2 className="display h-sm" style={{ lineHeight: 1.1 }}>
                Run on the layer.
              </h2>
              <p className="body">
                Full workflow automation runs on Aurore. Creditor and debtor portals go live.
                Cross-portfolio learning begins — patterns from one client portfolio improve
                decisions on others. Your collectors spend time on conversations that require
                judgment; everything that doesn&apos;t require judgment is handled automatically.
                You add new products as you need them.
              </p>
              <div>
                <p className="eyebrow" style={{ marginBottom: 12 }}>Deliverables</p>
                <ul className="flow" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                  {[
                    "Full workflow automation active",
                    "Creditor portal live",
                    "Debtor self-serve portal live",
                    "Cross-portfolio intelligence active",
                    "Monthly release notes & changelog",
                    "Quarterly ROI review",
                  ].map((item) => (
                    <li key={item} className="body-sm" style={{ display: "flex", gap: 10 }}>
                      <span style={{ color: "var(--teal)", flexShrink: 0 }}>&#10003;</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="eyebrow" style={{ marginBottom: 8 }}>Risk profile</p>
                <span className="pill pill-accent">Stable — full rollback available on any automation</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* § 02 SERVICE LINES */}
      <section className="section bg-paper-2">
        <div className="container">
          <div style={{ marginBottom: 48 }}>
            <div className="section-mark" style={{ marginBottom: 20 }}>
              <span className="num">02</span>
              <span className="label">Service lines</span>
            </div>
            <h2 className="display h-lg" style={{ maxWidth: "22ch", marginBottom: 20 }}>
              Four service lines. One delivery model.
            </h2>
            <p className="lede" style={{ maxWidth: "58ch" }}>
              All four are delivered by forward-deployed engineers who sit inside your operation —
              not by a support queue. We don&apos;t hand off to an account manager after the sale.
              The people who scoped the work are the people who build it.
            </p>
          </div>

          <div className="grid-2" style={{ gap: 24 }}>

            <div className="card card-pad-lg flow-lg">
              <div>
                <p className="eyebrow" style={{ marginBottom: 8 }}>Strategy</p>
                <p className="eyebrow" style={{ color: "var(--ink-dim)" }}>2&ndash;6 weeks</p>
              </div>
              <h3 className="display h-sm">Diagnostic &amp; roadmap.</h3>
              <p className="body">
                We connect to your SOR, run the baseline analysis, and deliver a prioritized
                automation roadmap with ROI estimates for each item. No commitment to build
                required. The deliverable stands alone as a decision-making tool.
              </p>
              <ul className="flow" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["SOR audit", "Gap analysis", "Automation roadmap", "ROI model", "Risk assessment"].map((i) => (
                  <li key={i} className="body-sm" style={{ display: "flex", gap: 10 }}>
                    <span style={{ color: "var(--teal)", flexShrink: 0 }}>—</span>{i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card card-pad-lg flow-lg">
              <div>
                <p className="eyebrow" style={{ marginBottom: 8 }}>Solution Build</p>
                <p className="eyebrow" style={{ color: "var(--ink-dim)" }}>4&ndash;8 weeks</p>
              </div>
              <h3 className="display h-sm">From roadmap to production.</h3>
              <p className="body">
                Forward-deployed engineers scope, build, test, and deploy one or more Aurore
                products into your environment. Delivery is iterative — you see working software
                in weeks, not months. Each product is tested in parallel before it replaces
                any existing process.
              </p>
              <ul className="flow" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["Scoped SOW", "Weekly milestones", "Parallel-run testing", "Change log", "Handover documentation"].map((i) => (
                  <li key={i} className="body-sm" style={{ display: "flex", gap: 10 }}>
                    <span style={{ color: "var(--teal)", flexShrink: 0 }}>—</span>{i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card card-pad-lg flow-lg">
              <div>
                <p className="eyebrow" style={{ marginBottom: 8 }}>Solution Support</p>
                <p className="eyebrow" style={{ color: "var(--ink-dim)" }}>Tiered support</p>
              </div>
              <h3 className="display h-sm">We stay on it after it goes live.</h3>
              <p className="body">
                Three support tiers: Standard (99.9% uptime SLA, P1 &lt; 30 min response),
                Enhanced (dedicated engineer, weekly syncs), and Enterprise (named engineer,
                24/7 on-call). Compliance updates and regulatory changes are covered under
                all tiers.
              </p>
              <ul className="flow" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["99.9% SLA", "P1 < 30 min", "Compliance update coverage", "Monthly release notes", "Audit evidence export"].map((i) => (
                  <li key={i} className="body-sm" style={{ display: "flex", gap: 10 }}>
                    <span style={{ color: "var(--teal)", flexShrink: 0 }}>—</span>{i}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card card-pad-lg flow-lg">
              <div>
                <p className="eyebrow" style={{ marginBottom: 8 }}>Managed Services</p>
                <p className="eyebrow" style={{ color: "var(--ink-dim)" }}>Outcome-based</p>
              </div>
              <h3 className="display h-sm">We run it. You measure results.</h3>
              <p className="body">
                For operations that want Aurore as a fully managed function: we own the
                intelligence layer end-to-end, priced on outcomes rather than hours. Typically
                structured around cost-per-account-resolved or percentage-of-recovered-dollars.
                Requires a minimum 6-month engagement.
              </p>
              <ul className="flow" style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["Outcome-based pricing", "Full Aurore stack", "Dedicated team", "Monthly performance review", "6-month minimum"].map((i) => (
                  <li key={i} className="body-sm" style={{ display: "flex", gap: 10 }}>
                    <span style={{ color: "var(--teal)", flexShrink: 0 }}>—</span>{i}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-ink">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="display h-lg" style={{ marginBottom: 20 }}>
            Start with one product.
          </h2>
          <p className="lede" style={{ maxWidth: "48ch", margin: "0 auto 36px" }}>
            Add the rest when value is proven.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 12 }}>
            <Link href="/contact" className="btn btn-rev-primary btn-lg">Book a walkthrough</Link>
            <Link href="/solutions" className="btn btn-rev-ghost btn-lg">See all products &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
}
