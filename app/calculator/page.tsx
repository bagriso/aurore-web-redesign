"use client";

import { useState, useCallback } from "react";
import Link from "next/link";

const PRESETS = {
  agency: { seats: 40, seatCost: 65000, casesPerYear: 6000, manualMinPerCase: 45, liquidationRate: 14, portfolioVolume: 12000000, label: "collection agency" },
  law:    { seats: 22, seatCost: 75000, casesPerYear: 3500, manualMinPerCase: 90, liquidationRate: 22, portfolioVolume: 18000000, label: "collection law firm" },
  buyer:  { seats: 12, seatCost: 95000, casesPerYear: 25000, manualMinPerCase: 18, liquidationRate: 11, portfolioVolume: 40000000, label: "debt buyer" },
  seller: { seats: 8,  seatCost: 110000, casesPerYear: 1200, manualMinPerCase: 25, liquidationRate: 0, portfolioVolume: 70000000, label: "debt seller / creditor" },
} as const;

type SegKey = keyof typeof PRESETS;

function fmtUSD(n: number) {
  if (n >= 1_000_000) return "$" + (n / 1_000_000).toFixed(n >= 10_000_000 ? 1 : 2) + "M";
  if (n >= 1_000) return "$" + Math.round(n / 1_000).toLocaleString() + "K";
  return "$" + Math.round(n).toLocaleString();
}
function fmtHrs(n: number) { return Math.round(n).toLocaleString() + " hrs"; }
function fmtRange(lo: number, hi: number, fn: (n: number) => string) { return `${fn(lo)} – ${fn(hi)}`; }

interface State { seats: number; seatCost: number; casesPerYear: number; manualMinPerCase: number; liquidationRate: number; portfolioVolume: number; }

function compute(s: State) {
  const manualHrsTotal = (s.manualMinPerCase * s.casesPerYear) / 60;
  const hrsSavedLow  = manualHrsTotal * 0.70;
  const hrsSavedHigh = manualHrsTotal * 0.90;
  const hourly = s.seatCost / 2000;
  const costSavedLow  = hrsSavedLow  * hourly;
  const costSavedHigh = hrsSavedHigh * hourly;
  const fteLow  = hrsSavedLow  / 2000;
  const fteHigh = hrsSavedHigh / 2000;
  const headroomLow  = (fteLow  / s.seats) * 100;
  const headroomHigh = (fteHigh / s.seats) * 100;
  const liqLiftLow  = s.portfolioVolume * (s.liquidationRate / 100) * 0.08;
  const liqLiftHigh = s.portfolioVolume * (s.liquidationRate / 100) * 0.18;
  const totalLow  = costSavedLow  + (s.liquidationRate > 0 ? liqLiftLow  : 0);
  const totalHigh = costSavedHigh + (s.liquidationRate > 0 ? liqLiftHigh : 0);
  return { hrsSavedLow, hrsSavedHigh, costSavedLow, costSavedHigh, fteLow, fteHigh, headroomLow, headroomHigh, liqLiftLow, liqLiftHigh, totalLow, totalHigh, manualHrsTotal };
}

export default function CalculatorPage() {
  const [seg, setSeg] = useState<SegKey>("agency");
  const [state, setState] = useState<State>({ ...PRESETS.agency });

  const applyPreset = useCallback((key: SegKey) => {
    setSeg(key);
    setState({ ...PRESETS[key] });
  }, []);

  const update = (field: keyof State, val: number) => setState(prev => ({ ...prev, [field]: val }));

  const r = compute(state);

  const sliders: { id: keyof State; label: string; sub: string; min: number; max: number; step: number; fmt: (n: number) => string }[] = [
    { id: "seats",            label: "Operations seats / collectors",  sub: "Front-line FTEs in the workflow",           min: 3, max: 500, step: 1,      fmt: n => n.toLocaleString() },
    { id: "seatCost",         label: "Fully-loaded cost per seat / yr", sub: "Salary + benefits + overhead",             min: 35000, max: 160000, step: 2500, fmt: fmtUSD },
    { id: "casesPerYear",     label: "Cases / accounts per year",      sub: "Volume across the workflow",               min: 500, max: 100000, step: 500,  fmt: n => n.toLocaleString() },
    { id: "manualMinPerCase", label: "Manual minutes per case (today)", sub: "Intake + documents + admin overhead",      min: 5, max: 180, step: 1,        fmt: n => n + " min" },
    { id: "liquidationRate",  label: "Liquidation / net-back rate (%)", sub: "Recovery as % of face value",             min: 0, max: 40, step: 1,          fmt: n => n + "%" },
    { id: "portfolioVolume",  label: "Annual portfolio volume placed",  sub: "Total face value run through the workflow", min: 500000, max: 500000000, step: 500000, fmt: fmtUSD },
  ];

  return (
    <>
      {/* Hero */}
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div className="bg-dots" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
        <div className="container" style={{ position: "relative", paddingTop: 72, paddingBottom: 48 }}>
          <p className="eyebrow accent">Self-serve ROI</p>
          <h1 className="display h-xl" style={{ marginTop: 14, maxWidth: "18ch" }}>
            Plug in your operation.{" "}
            <em style={{ fontStyle: "italic", color: "var(--teal)" }}>See what we&apos;d save you.</em>
          </h1>
          <p className="lede" style={{ maxWidth: "62ch", marginTop: 20 }}>
            Pick your segment, set six sliders, and we&apos;ll model annualized savings,
            headcount-equivalent capacity, and (where it applies) liquidation upside.
            Numbers are ranges grounded in real engagements. No email required.
          </p>
        </div>
      </section>

      <section>
        <div className="container">
          {/* Segment selector */}
          <p className="eyebrow" style={{ marginBottom: 10 }}>Step 01 · Pick your segment</p>
          <div className="seg-switch" style={{ marginBottom: 36 }}>
            {(Object.keys(PRESETS) as SegKey[]).map((key) => (
              <button
                key={key}
                onClick={() => applyPreset(key)}
                className={`btn${seg === key ? " is-active" : ""}`}
                style={{
                  padding: "7px 14px",
                  borderRadius: 999,
                  fontSize: 13,
                  border: "none",
                  background: seg === key ? "var(--ink)" : "transparent",
                  color: seg === key ? "var(--ink-rev)" : "var(--ink-2)",
                  cursor: "pointer",
                  fontFamily: "var(--font-sans)",
                }}
              >
                {key === "agency" ? "Collection agency" : key === "law" ? "Collection law firm" : key === "buyer" ? "Debt buyer" : "Debt seller / creditor"}
              </button>
            ))}
          </div>

          {/* Calc grid */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.05fr", gap: 28, alignItems: "start" }}>
            {/* Inputs */}
            <div className="card card-pad-lg">
              <p className="eyebrow accent">Step 02 · Tell us about your operation</p>
              <p className="body-sm" style={{ marginTop: 8, color: "var(--ink-muted)" }}>
                All defaults are sensible starting points for a typical {PRESETS[seg].label}. Override anything that&apos;s off.
              </p>

              <div style={{ marginTop: 18 }}>
                {sliders.map((sl) => {
                  if (sl.id === "liquidationRate" && seg === "seller") return null;
                  return (
                    <div key={sl.id} style={{ display: "grid", gridTemplateColumns: "1fr 110px", gap: 14, alignItems: "center", padding: "16px 0", borderBottom: "1px solid var(--line-soft)" }}>
                      <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
                        <span style={{ fontSize: 14, fontWeight: 500, color: "var(--ink)" }}>{sl.label}</span>
                        <span style={{ fontSize: 12, color: "var(--ink-muted)" }}>{sl.sub}</span>
                      </div>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 13, textAlign: "right", color: "var(--ink)", background: "var(--paper)", border: "1px solid var(--line)", padding: "6px 10px", borderRadius: "var(--radius-sm)", whiteSpace: "nowrap" }}>
                        {sl.fmt(state[sl.id] as number)}
                      </span>
                      <input
                        type="range"
                        min={sl.min}
                        max={sl.max}
                        step={sl.step}
                        value={state[sl.id] as number}
                        onChange={(e) => update(sl.id, parseInt(e.target.value))}
                        style={{ gridColumn: "1/-1" }}
                      />
                    </div>
                  );
                })}
              </div>

              <p className="body-sm" style={{ marginTop: 20, color: "var(--ink-muted)", lineHeight: 1.6 }}>
                <strong style={{ color: "var(--ink-2)" }}>Assumptions ·</strong>{" "}
                Manual minutes-per-case reduction: 70–90%. Liquidation lift: 8–18% relative to baseline net-back.
              </p>
            </div>

            {/* Outputs */}
            <div>
              <div style={{ background: "var(--rev-bg)", color: "var(--ink-rev)", borderRadius: "var(--radius-xl)", padding: "36px 32px" }}>
                <p className="eyebrow" style={{ color: "rgba(245,241,233,0.55)" }}>Step 03 · Estimated annual value</p>
                <p style={{ fontFamily: "var(--font-display)", fontSize: "clamp(40px,5vw,64px)", lineHeight: 0.98, letterSpacing: "-0.02em", color: "#a4d7c5", fontWeight: 400, marginTop: 12 }}>
                  {fmtRange(r.totalLow, r.totalHigh, fmtUSD)}
                </p>
                <p style={{ color: "rgba(245,241,233,0.72)", maxWidth: "48ch", marginTop: 14, fontSize: 17, lineHeight: 1.65 }}>
                  Range across cost savings and (where applicable) liquidation lift. Conservative low uses minimum documented assumptions.
                </p>

                <div style={{ marginTop: 24 }}>
                  {[
                    { k: "Manual hours eliminated / yr", v: fmtRange(r.hrsSavedLow, r.hrsSavedHigh, fmtHrs) },
                    { k: "Operating cost saved / yr",    v: fmtRange(r.costSavedLow, r.costSavedHigh, fmtUSD) },
                    { k: "FTE-equivalent capacity returned", v: `${r.fteLow.toFixed(1)} – ${r.fteHigh.toFixed(1)}` },
                    { k: "Volume headroom unlocked",    v: `${Math.round(r.headroomLow)}–${Math.round(r.headroomHigh)}%` },
                    ...(state.liquidationRate > 0 ? [{ k: "Liquidation upside / yr", v: fmtRange(r.liqLiftLow, r.liqLiftHigh, fmtUSD) }] : []),
                    { k: "Manual baseline (for reference)", v: fmtHrs(r.manualHrsTotal) + " / yr" },
                  ].map((row, i, arr) => (
                    <div key={row.k} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "14px 0", borderBottom: i < arr.length - 1 ? "1px solid rgba(245,241,233,0.12)" : "none" }}>
                      <span style={{ fontSize: 14, color: "rgba(245,241,233,0.72)" }}>{row.k}</span>
                      <span style={{ fontFamily: "var(--font-mono)", fontSize: 14, color: "var(--ink-rev)" }}>{row.v}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 28, display: "flex", gap: 10, flexWrap: "wrap" }}>
                  <Link href="/contact" className="btn btn-rev-primary">Book a tailored walkthrough</Link>
                  <Link href="/customers" className="btn btn-rev-ghost">See the real engagements →</Link>
                </div>
              </div>

              <div className="card card-pad" style={{ marginTop: 16 }}>
                <p className="eyebrow accent">What this calculator does not model</p>
                <ul className="body" style={{ paddingLeft: 18, lineHeight: 1.7, marginTop: 10, color: "var(--ink-2)" }}>
                  <li>One-time implementation effort (typically 2–6 weeks for first product live)</li>
                  <li>Compliance-incident avoided cost — by definition counter-factual</li>
                  <li>Strategic upside from cross-portfolio learning over 2–3 years</li>
                  <li>Client-retention lift from sharper reporting</li>
                </ul>
                <p className="body-sm" style={{ marginTop: 14, color: "var(--ink-muted)" }}>
                  Bring a recent operational extract to your walkthrough and we&apos;ll replace assumption ranges with numbers from your data.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="section bg-paper-2">
        <div className="container">
          <div className="section-mark"><span className="num">§ AX</span><span className="label">Methodology · how we calibrated this</span></div>
          <h2 className="display h-md" style={{ marginTop: 14, maxWidth: "30ch" }}>A short, honest note about where these numbers came from.</h2>

          <div className="grid-3" style={{ marginTop: 32, gap: 14 }}>
            {[
              { label: "Time savings", body: "The 70–90% reduction range is bounded below by the most conservative documented case-stage automation, and above by the PNW agency's per-case workflow (1.5–2.5 hours → 5–9 minutes, which is ~95%)." },
              { label: "Cost savings", body: "Hourly rate is your fully-loaded seat cost divided by 2,000 working hours/year. Multiplied by eliminated hours. No multiplier for opportunity cost — we keep this conservative on purpose." },
              { label: "Liquidation lift", body: "8–18% lift on net-back % is grounded in scoring + routing + behavioral-segmentation engagements in adjacent verticals. Highly portfolio-dependent. Not applied to debt sellers." },
            ].map((m) => (
              <div key={m.label} className="card card-pad">
                <span className="eyebrow accent">{m.label}</span>
                <p className="body" style={{ marginTop: 10 }}>{m.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
