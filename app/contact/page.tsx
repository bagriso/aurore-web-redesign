"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", company: "", role: "", segment: "", sor: "", size: "", notes: "",
  });

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const subject = `Walkthrough request — ${formData.company}`;
    const body = [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Firm: ${formData.company}`,
      `Role: ${formData.role}`,
      `Segment: ${formData.segment}`,
      `SOR: ${formData.sor}`,
      `Size: ${formData.size}`,
      "",
      "Notes:",
      formData.notes,
    ].join("\n");
    window.location.href = `mailto:info@aurorelabs.ai?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  }

  return (
    <>
      <section style={{ position: "relative", overflow: "hidden" }}>
        <div className="bg-dots" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
        <div className="container" style={{ position: "relative", paddingTop: 72, paddingBottom: 48 }}>
          <div className="grid-2" style={{ gap: 64, gridTemplateColumns: "1.1fr 1fr", alignItems: "start" }}>

            {/* Left — info */}
            <div>
              <p className="eyebrow accent">Book a walkthrough</p>
              <h1 className="display h-xl" style={{ marginTop: 14, maxWidth: "14ch" }}>
                Thirty minutes.{" "}
                <em style={{ fontStyle: "italic", color: "var(--teal)" }}>A number, not a brochure.</em>
              </h1>
              <p className="lede" style={{ maxWidth: "54ch", marginTop: 24 }}>
                Tell us briefly about your operation. We&apos;ll come back within one business day
                with a tailored walkthrough — built around the SOR you run, the workflow
                step that costs you most, and a concrete read on the lift we&apos;d produce in
                your first 30 days.
              </p>

              <div style={{ marginTop: 36 }}>
                <p className="eyebrow accent">What happens after you submit</p>
                <ol style={{ margin: "14px 0 0", paddingLeft: 18, lineHeight: 1.85 }} className="body">
                  <li>You&apos;ll get a reply within one business day with two–three meeting times.</li>
                  <li>Before the call, we share a one-page brief tailored to your segment.</li>
                  <li>Thirty-minute walkthrough — your screen, your questions, our examples.</li>
                  <li>If there&apos;s fit, we propose a 30-day diagnosis engagement. If not, you walk away with the brief.</li>
                </ol>
              </div>

              <div className="card card-pad" style={{ marginTop: 36 }}>
                <p className="eyebrow accent">Prefer email?</p>
                <p className="body" style={{ marginTop: 8 }}>
                  <a href="mailto:info@aurorelabs.ai" style={{ color: "var(--teal)", fontWeight: 500 }}>info@aurorelabs.ai</a>
                  {" "}· Monday–Friday · 9 AM–6 PM EST
                </p>
              </div>
            </div>

            {/* Right — form */}
            <div className="card card-pad-lg">
              {submitted ? (
                <div style={{ textAlign: "center", padding: "16px 0" }}>
                  <p className="eyebrow accent">Got it.</p>
                  <h2 className="display h-md" style={{ marginTop: 10 }}>Thank you — we&apos;ll reply within one business day.</h2>
                  <p className="body" style={{ marginTop: 14, maxWidth: "42ch", marginLeft: "auto", marginRight: "auto" }}>
                    We&apos;ve captured your details. Your email client should have opened with a pre-filled message — send it and we&apos;ll take it from there.
                  </p>
                  <Link href="/" className="btn btn-primary btn-lg" style={{ marginTop: 24 }}>Back to home →</Link>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  <p className="eyebrow accent">Tell us about your operation</p>

                  <label className="field">
                    <span>Your name</span>
                    <input type="text" name="name" placeholder="Jane Smith" required value={formData.name} onChange={e => setFormData(p => ({ ...p, name: e.target.value }))} />
                  </label>

                  <label className="field">
                    <span>Work email</span>
                    <input type="email" name="email" placeholder="jane@firm.com" required value={formData.email} onChange={e => setFormData(p => ({ ...p, email: e.target.value }))} />
                  </label>

                  <label className="field">
                    <span>Firm / organization</span>
                    <input type="text" name="company" placeholder="Acme Collections, LLC" required value={formData.company} onChange={e => setFormData(p => ({ ...p, company: e.target.value }))} />
                  </label>

                  <label className="field">
                    <span>Your role</span>
                    <select name="role" required value={formData.role} onChange={e => setFormData(p => ({ ...p, role: e.target.value }))}>
                      <option value="">Select…</option>
                      <option>Owner / CEO / Principal</option>
                      <option>Managing Partner / Attorney</option>
                      <option>COO / VP Operations</option>
                      <option>Compliance Officer</option>
                      <option>CTO / IT Director</option>
                      <option>Portfolio Manager</option>
                      <option>Other</option>
                    </select>
                  </label>

                  <label className="field">
                    <span>Your operation</span>
                    <select name="segment" required value={formData.segment} onChange={e => setFormData(p => ({ ...p, segment: e.target.value }))}>
                      <option value="">Select…</option>
                      <option>Collection agency (3rd-party)</option>
                      <option>Collection law firm</option>
                      <option>Debt buyer</option>
                      <option>Debt seller / creditor</option>
                      <option>Marketplace / broker</option>
                      <option>Other</option>
                    </select>
                  </label>

                  <label className="field">
                    <span>Current system of record</span>
                    <select name="sor" value={formData.sor} onChange={e => setFormData(p => ({ ...p, sor: e.target.value }))}>
                      <option value="">Select if applicable…</option>
                      <option>JST CollectMax</option>
                      <option>IPACS</option>
                      <option>Latitude (Finvi)</option>
                      <option>Artiva (Finvi)</option>
                      <option>CUBS</option>
                      <option>Quantrax RMEx</option>
                      <option>Columbia Ultimate</option>
                      <option>Collect!</option>
                      <option>Simplicity</option>
                      <option>In-house / custom</option>
                      <option>Other</option>
                    </select>
                  </label>

                  <label className="field">
                    <span>Approximate size</span>
                    <select name="size" value={formData.size} onChange={e => setFormData(p => ({ ...p, size: e.target.value }))}>
                      <option value="">Select…</option>
                      <option>Under 10 seats / attorneys</option>
                      <option>10–30</option>
                      <option>30–100</option>
                      <option>100–300</option>
                      <option>300+</option>
                    </select>
                  </label>

                  <label className="field">
                    <span>What&apos;s on your mind? <span style={{ textTransform: "none", letterSpacing: 0, color: "var(--ink-dim)" }}>(optional)</span></span>
                    <textarea name="notes" rows={3} placeholder="e.g., we're burning 3 paralegals on civil case prep, or our inbound answer rate is in the teens…" value={formData.notes} onChange={e => setFormData(p => ({ ...p, notes: e.target.value }))} />
                  </label>

                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: "100%", marginTop: 6 }}>
                    Send &amp; schedule →
                  </button>

                  <p className="body-sm" style={{ color: "var(--ink-muted)", textAlign: "center" }}>
                    We respond within one business day. No newsletter, no drip campaign.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* § 02 Other ways to engage */}
      <section className="section bg-paper-2">
        <div className="container">
          <div className="section-mark"><span className="num">§ 02</span><span className="label">Other ways to engage</span></div>
          <h2 className="display h-lg" style={{ marginTop: 14, maxWidth: "24ch" }}>
            Not ready for a walkthrough?{" "}
            <em style={{ fontStyle: "italic", color: "var(--teal)" }}>Pick the shorter path.</em>
          </h2>

          <div className="grid-3" style={{ marginTop: 42, gap: 14 }}>
            <article className="card card-pad-lg">
              <p className="eyebrow accent">Read first</p>
              <h3 className="display h-sm" style={{ marginTop: 10 }}>See the real engagements.</h3>
              <p className="body" style={{ marginTop: 10 }}>Three documented case studies. Real numbers. Real environments.</p>
              <Link href="/customers" className="btn btn-secondary btn-sm" style={{ marginTop: 18 }}>Customer cases →</Link>
            </article>
            <article className="card card-pad-lg">
              <p className="eyebrow accent">Try first</p>
              <h3 className="display h-sm" style={{ marginTop: 10 }}>Run the ROI calculator.</h3>
              <p className="body" style={{ marginTop: 10 }}>Plug in your numbers. See the range we&apos;d model. No email required.</p>
              <Link href="/calculator" className="btn btn-secondary btn-sm" style={{ marginTop: 18 }}>Calculator →</Link>
            </article>
            <article className="card card-pad-lg">
              <p className="eyebrow accent">Vet first</p>
              <h3 className="display h-sm" style={{ marginTop: 10 }}>Review our trust posture.</h3>
              <p className="body" style={{ marginTop: 10 }}>Security, regulatory and operational posture — written for your Compliance Officer.</p>
              <Link href="/trust" className="btn btn-secondary btn-sm" style={{ marginTop: 18 }}>Trust &amp; security →</Link>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
