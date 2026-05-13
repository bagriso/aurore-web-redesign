import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Trust & security — Aurore Labs",
  description:
    "Security posture, regulatory compliance, and operational reliability — written for the person who has to sign off.",
};

type PillTone = "accent" | "amber" | "default";

function StatusPill({ tone, children }: { tone: PillTone; children: React.ReactNode }) {
  const cls =
    tone === "accent"
      ? "pill pill-accent"
      : tone === "amber"
      ? "pill pill-amber"
      : "pill";
  return <span className={cls}>{children}</span>;
}

function TrustRow({
  label,
  pill,
  pillTone,
  note,
}: {
  label: string;
  pill: string;
  pillTone: PillTone;
  note: string;
}) {
  return (
    <div
      style={{
        paddingBottom: 18,
        borderBottom: "1px solid var(--line-soft)",
        display: "flex",
        flexDirection: "column",
        gap: 6,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          gap: 12,
          flexWrap: "wrap",
        }}
      >
        <span className="body" style={{ fontWeight: 600 }}>{label}</span>
        <StatusPill tone={pillTone}>{pill}</StatusPill>
      </div>
      <p className="body-sm muted">{note}</p>
    </div>
  );
}

export default function TrustPage() {
  return (
    <>
      {/* HERO */}
      <section className="section bg-paper-2" style={{ position: "relative", overflow: "hidden" }}>
        <div className="bg-dots" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
        <div className="container" style={{ position: "relative" }}>
          <p className="eyebrow" style={{ marginBottom: 20 }}>Trust &amp; security</p>
          <h1 className="display h-xl" style={{ maxWidth: "22ch", marginBottom: 28 }}>
            Written for the person who has to sign off.
          </h1>
          <p className="lede" style={{ maxWidth: "62ch" }}>
            We work inside operations that handle sensitive consumer financial data.
            The compliance officer, the IT security lead, and the managing partner all
            need to be comfortable before we touch production. This page is for them.
            If you need the full security package, we&apos;ll send it under NDA.
          </p>
        </div>
      </section>

      {/* TWO COLUMNS */}
      <section className="section">
        <div className="container">
          <div className="grid-2" style={{ gap: 28, alignItems: "start" }}>

            {/* § 01 Security posture */}
            <div className="card card-pad-lg flow-lg">
              <div>
                <div className="section-mark" style={{ marginBottom: 14 }}>
                  <span className="num">01</span>
                  <span className="label">Security posture</span>
                </div>
              </div>
              <div className="flow-lg">
                <TrustRow
                  label="Hosting"
                  pill="Active"
                  pillTone="accent"
                  note="US-only AWS regions. No data processed or stored outside the United States."
                />
                <TrustRow
                  label="Encryption"
                  pill="Active"
                  pillTone="accent"
                  note="AES-256 at rest, TLS 1.3 in transit, customer-managed KMS keys available."
                />
                <TrustRow
                  label="BAA (HIPAA)"
                  pill="Available"
                  pillTone="accent"
                  note="Business Associate Agreement available for medical-debt engagements."
                />
                <TrustRow
                  label="PII handling"
                  pill="Enforced"
                  pillTone="accent"
                  note="Field-level access controls. PII never written to logs. Tokenization available."
                />
              </div>
            </div>

            {/* § 02 Operational posture */}
            <div className="card card-pad-lg flow-lg">
              <div>
                <div className="section-mark" style={{ marginBottom: 14 }}>
                  <span className="num">02</span>
                  <span className="label">Operational posture</span>
                </div>
              </div>
              <div className="flow-lg">
                <TrustRow
                  label="Uptime"
                  pill="99.9%"
                  pillTone="accent"
                  note="On production environments. Measured monthly across all customer deployments."
                />
                <TrustRow
                  label="Response SLA"
                  pill="Platinum"
                  pillTone="accent"
                  note="For Platinum-tier clients and critical P1 incidents: acknowledged within 30 minutes, 24/7."
                />
                <TrustRow
                  label="Backups"
                  pill="Active"
                  pillTone="accent"
                  note="Daily encrypted backups, cross-region replication, restoration tested quarterly."
                />
                <TrustRow
                  label="Change log"
                  pill="Active"
                  pillTone="accent"
                  note="All production changes logged. Monthly release notes distributed to clients."
                />
                <TrustRow
                  label="Audit evidence export"
                  pill="Built-in"
                  pillTone="accent"
                  note="One-click examiner-ready evidence bundle. Covers CFPB, state AG, and client audits."
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* WIDE CARD CTA */}
      <section className="section-tight">
        <div className="container">
          <div className="card bg-paper-2 card-pad-lg" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 28, border: "1px solid var(--line)" }}>
            <div style={{ maxWidth: "52ch" }}>
              <h2 className="display h-sm" style={{ marginBottom: 12 }}>
                Need the long version?
              </h2>
              <p className="body-lg">
                We&apos;ll send the full security package under NDA — GLBA controls documentation,
                BAA, and detailed incident response procedures. Most security reviews are
                completed within 5 business days.
              </p>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 10, flexShrink: 0 }}>
              <Link href="/contact" className="btn btn-primary btn-lg">Request the package</Link>
              <Link href="/contact" className="btn btn-ghost btn-lg">Book a walkthrough instead</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
