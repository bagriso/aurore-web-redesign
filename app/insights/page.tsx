import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Insights — Aurore Labs",
  description:
    "Working notes on the debt-collections industry from the team at Aurore Labs.",
};

const articles = [
  {
    pill: "Benchmark",
    title: "RPC benchmark 2026: what good looks like, by portfolio class.",
    teaser:
      "Right-party contact rates vary by 22 percentage points across portfolio types — and most agencies are benchmarking against the wrong peer group.",
  },
  {
    pill: "Compliance",
    title: "Reg F enforcement: five errors auditors keep finding.",
    teaser:
      "CFPB examiners have identified a consistent set of Regulation F violations across examinations. Here is what they are and how to close them.",
  },
  {
    pill: "Operations",
    title: "CollectMax to Aurore: how to read your own data without migrating.",
    teaser:
      "Your SOR has more signal than you&apos;re reading. A practical guide to extracting performance intelligence from CollectMax without changing a single workflow.",
  },
  {
    pill: "Litigation",
    title: "Tyler Odyssey eFile rejects: a taxonomy.",
    teaser:
      "A breakdown of the most common reject reasons across 14 state filing systems, and the automation rules that eliminate each one.",
  },
  {
    pill: "Strategy",
    title: "Net back math: the lever most agency CEOs leave on the table.",
    teaser:
      "Net back — what you actually keep after SOR costs, labor, compliance overhead, and bad debt — is the only number that matters. Most agencies aren&apos;t tracking it right.",
  },
  {
    pill: "Portfolio",
    title: "The valuation gap: why two brokers price the same paper 18% apart.",
    teaser:
      "Portfolio valuation divergence is real and consistent. The inputs that drive the gap are mostly within the seller&apos;s control — if they know what they are.",
  },
];

export default function InsightsPage() {
  return (
    <>
      {/* HERO */}
      <section className="section bg-paper-2" style={{ position: "relative", overflow: "hidden" }}>
        <div className="bg-dots" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
        <div className="container" style={{ position: "relative" }}>
          <p className="eyebrow" style={{ marginBottom: 20 }}>Insights</p>
          <h1 className="display h-xl" style={{ maxWidth: "20ch", marginBottom: 28 }}>
            Notes from the operating floor.
          </h1>
          <p className="lede" style={{ maxWidth: "62ch" }}>
            Working notes on the debt-collections industry — benchmarks, compliance
            analysis, operational research, and strategy from the team at Aurore Labs.
            Written for operators, not analysts.
          </p>
        </div>
      </section>

      {/* ARTICLES */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 36, flexWrap: "wrap", gap: 16 }}>
            <h2 className="display h-sm">Coming soon</h2>
            <span className="pill pill-amber">Publishing Q3 2026</span>
          </div>

          <div className="grid-2" style={{ gap: 24 }}>
            {articles.map(({ pill, title, teaser }) => (
              <div key={title} className="card card-pad-lg flow-lg lift" style={{ cursor: "default" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span className="pill pill-amber">{pill}</span>
                </div>
                <h3 className="display h-sm" style={{ lineHeight: 1.15 }}>
                  {title}
                </h3>
                <p
                  className="body"
                  dangerouslySetInnerHTML={{ __html: teaser }}
                />
                <div style={{ paddingTop: 8 }}>
                  <span className="eyebrow">Coming soon</span>
                </div>
              </div>
            ))}
          </div>

          <div className="card card-pad" style={{ marginTop: 48, background: "var(--paper-2)", textAlign: "center" }}>
            <p className="body muted">
              Replace these cards with real article content and add dynamic routing
              (e.g., <code>/insights/[slug]</code>) before launch.
              Notify subscribers via the contact form when the first article goes live.
            </p>
          </div>
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="section bg-ink">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="display h-lg" style={{ marginBottom: 20 }}>
            Get notified when we publish.
          </h2>
          <p className="lede" style={{ maxWidth: "48ch", margin: "0 auto 36px" }}>
            No cadence commitment. We publish when we have something worth reading.
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 12 }}>
            <Link href="/contact" className="btn btn-rev-primary btn-lg">Get updates</Link>
            <Link href="/customers" className="btn btn-rev-ghost btn-lg">Read customer stories &rarr;</Link>
          </div>
        </div>
      </section>
    </>
  );
}
