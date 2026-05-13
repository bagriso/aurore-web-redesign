import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aurore Labs — Better collections, on the systems you already run",
  description:
    "Seventeen purpose-built intelligence and automation products for debt sellers, buyers, and collection agencies.",
};

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="bg-ink" style={{ position: "relative", overflow: "hidden" }}>
        <div className="bg-grid-ink" style={{ position: "absolute", inset: 0, opacity: 0.7 }} />
        <div className="container" style={{ position: "relative", paddingTop: 80, paddingBottom: 64 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 36 }}>
            <span className="pill pill-rev">
              <span className="dot" style={{ background: "#5dcaa5" }} />
              Aurore · Collections intelligence + automation
            </span>
          </div>

          <h1 className="display h-xl" style={{ color: "var(--ink-rev)", maxWidth: "18ch" }}>
            Better collections —{" "}
            <em style={{ fontStyle: "italic", color: "#a4d7c5" }}>
              on the systems you already run.
            </em>
          </h1>

          <p className="lede" style={{ color: "rgba(245,241,233,0.78)", maxWidth: "62ch", marginTop: 28, fontSize: 19 }}>
            Seventeen purpose-built intelligence and automation products for debt sellers,
            buyers, and collection agencies. We integrate alongside the systems you already operate — and quietly turn every account into one
            that gets a better next action, a cleaner audit trail, and an answer the first time.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 36 }}>
            <Link href="/contact" className="btn btn-rev-primary btn-lg">Book a 30-minute walkthrough</Link>
            <Link href="/calculator" className="btn btn-rev-ghost btn-lg">See what we&apos;d save you →</Link>
          </div>

          <div style={{ marginTop: 48 }}>
            <p className="eyebrow" style={{ color: "rgba(245,241,233,0.55)", marginBottom: 14 }}>Tell us who you are</p>
            <div className="seg-switch" style={{ background: "rgba(255,255,255,0.04)", borderColor: "var(--rev-line)" }}>
              <Link href="/for-agencies" style={{ color: "rgba(245,241,233,0.82)" }}>Collection agency</Link>
              <Link href="/for-buyers" style={{ color: "rgba(245,241,233,0.82)" }}>Debt buyer</Link>
              <Link href="/for-sellers" style={{ color: "rgba(245,241,233,0.82)" }}>Debt seller / creditor</Link>
            </div>
          </div>
        </div>

        {/* Floating stat band */}
        <div className="container" style={{ position: "relative", paddingBottom: 0 }}>
          <div className="statband" style={{ marginBottom: -64, boxShadow: "var(--shadow-lg)" }}>
            <div className="stat">
              <div className="unit">Per-case manual work</div>
              <div className="num">~95%</div>
              <div className="label">Eliminated — from 53 minutes to 4 minutes per account. Small to mid-size PNW collection agency.</div>
            </div>
            <div className="stat">
              <div className="unit">Manual work eliminated</div>
              <div className="num">11,500<span style={{ fontSize: "0.45em", color: "var(--ink-muted)", marginLeft: 6 }}>hrs/yr</span></div>
              <div className="label">Small to mid-size Pacific Northwest collections firm · ten months of automation.</div>
            </div>
            <div className="stat">
              <div className="unit">Operating cost out</div>
              <div className="num">$300K<span style={{ fontSize: "0.45em", color: "var(--ink-muted)", marginLeft: 6 }}>/yr</span></div>
              <div className="label">Headcount-equivalent capacity returned to high-judgment work.</div>
            </div>
            <div className="stat">
              <div className="unit">Volume growth headroom</div>
              <div className="num">40–50%</div>
              <div className="label">Additional caseload absorbed without a single new hire.</div>
            </div>
          </div>
        </div>
      </section>

      <div style={{ height: 80 }} />

      {/* § 01 — What Aurore does */}
      <section className="section">
        <div className="container">
          <div className="section-mark"><span className="num">§ 01</span><span className="label">What Aurore does</span></div>
          <h2 className="display h-lg" style={{ maxWidth: "22ch", marginTop: 18 }}>
            Three things every operator wants —{" "}
            <em style={{ fontStyle: "italic", color: "var(--teal)" }}>and the systems they bought never delivered.</em>
          </h2>

          <div className="grid-3" style={{ marginTop: 48, gap: 18 }}>
            <article className="card card-pad lift">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                <span className="pill pill-accent">Recover more</span>
                <span className="mono dim" style={{ fontSize: 11 }}>01</span>
              </div>
              <h3 className="display h-sm">Lift the dollars you&apos;re already chasing.</h3>
              <p className="body" style={{ marginTop: 14 }}>
                Score every account before a collector opens it. Route every referral to the
                right channel. Surface the next-best action at the moment of contact. Most
                firms leave 10–18% of recoverable value on the table because the data layer
                underneath their SOR was never designed to ask the question.
              </p>
              <p className="mono" style={{ marginTop: 18, fontSize: 12, color: "var(--ink-muted)", letterSpacing: "0.06em" }}>
                → Yield Intelligence · Behavioral Segmentation · Omnichannel Routing
              </p>
            </article>

            <article className="card card-pad lift">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                <span className="pill pill-amber">Spend less</span>
                <span className="mono dim" style={{ fontSize: 11 }}>02</span>
              </div>
              <h3 className="display h-sm">Stop paying people to move information between systems.</h3>
              <p className="body" style={{ marginTop: 14 }}>
                Intake, court filings, garnishment writs, EOM payment merges, document
                retrieval — automation that eliminates the manual middle of the operation.
                Real engagement: <strong style={{ color: "var(--ink)" }}>11,500 hours per year</strong> moved off humans without
                replacing the case management system underneath.
              </p>
              <p className="mono" style={{ marginTop: 18, fontSize: 12, color: "var(--ink-muted)", letterSpacing: "0.06em" }}>
                → Case Intake · Small Claims · Civil Case · Garnishment Automation
              </p>
            </article>

            <article className="card card-pad lift">
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 18 }}>
                <span className="pill pill-rose">Sleep better</span>
                <span className="mono dim" style={{ fontSize: 11 }}>03</span>
              </div>
              <h3 className="display h-sm">Compliance as evidence, not a binder.</h3>
              <p className="body" style={{ marginTop: 14 }}>
                Every notice produced and stored under FDCPA &amp; Reg F controls. Every
                call scored against the standards your Compliance Officer set. Every
                state-specific obligation enforced at the workflow boundary —
                and the audit package generated automatically.
              </p>
              <p className="mono" style={{ marginTop: 18, fontSize: 12, color: "var(--ink-muted)", letterSpacing: "0.06em" }}>
                → Compliance Document Management · Nudges A/B Learning
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* § 02 — Ecosystem */}
      <section className="bg-paper-2 section">
        <div className="container">
          <div className="section-mark"><span className="num">§ 02</span><span className="label">One platform · five segments</span></div>
          <h2 className="display h-lg" style={{ marginTop: 18, maxWidth: "22ch" }}>
            The whole ecosystem,{" "}
            <em style={{ fontStyle: "italic", color: "var(--teal)" }}>not just one box on a stack chart.</em>
          </h2>
          <p className="lede" style={{ maxWidth: "64ch", marginTop: 18 }}>
            Other platforms pick a corner. Aurore covers the full path of a portfolio —
            from the moment a creditor decides to sell, through the buyer&apos;s bid, through
            collection and enforcement, all the way to the last garnishment cleared.
            One data model. Seventeen products.
          </p>

          <div style={{ marginTop: 48 }}>
            <div className="ecosystem">
              {[
                { n: "01", name: "Debt sellers", sub: "Banks · medical · auto · telecom · landlords", count: 2 },
                { n: "02", name: "Debt buyers", sub: "National · regional · specialty", count: 3 },
                { n: "03", name: "Collection agencies", sub: "Phone · mail · digital channels", count: 12 },
              ].map((node) => (
                <div key={node.n} className="eco-node">
                  <span className="sub">{node.n}</span>
                  <span className="name">{node.name}</span>
                  <span className="dim" style={{ fontSize: 12 }}>{node.sub}</span>
                  <span className="count">{node.count}</span>
                  <span className="dim" style={{ fontSize: 11, fontFamily: "var(--font-mono)" }}>products</span>
                </div>
              ))}
            </div>
            <div className="eco-arrows">
              <span>↓ sells</span><span>↓ buys</span><span>↓ collects &amp; enforces</span>
            </div>
          </div>

          <div style={{ marginTop: 36, display: "flex", gap: 10, flexWrap: "wrap" }}>
            <Link href="/solutions" className="btn btn-secondary btn-sm">See all 17 solutions →</Link>
            <Link href="/for-agencies" className="btn btn-ghost btn-sm">Agency operators →</Link>
          </div>
        </div>
      </section>

      {/* § 03 — Customer story */}
      <section className="section">
        <div className="container">
          <div className="section-mark"><span className="num">§ 03</span><span className="label">A customer story</span></div>
          <h2 className="display h-lg" style={{ marginTop: 18, maxWidth: "26ch" }}>
            11,500 manual hours eliminated.{" "}
            <em style={{ fontStyle: "italic", color: "var(--teal)" }}>Headcount stopped capping growth.</em>
          </h2>

          <div style={{ marginTop: 48, display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 32, alignItems: "start" }}>
            <div className="card card-pad-lg">
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                <span className="pill pill-accent">Active engagement</span>
                <span className="pill">Small to mid-size collection agency</span>
                <span className="pill">Pacific Northwest · 10 months in</span>
              </div>

              <p className="quote">
                <span className="quote-mark">&ldquo;</span>Every time they won a new client or took on more paper, they had to hire.
                The math was linear — more cases meant more people to process them.
                After ten months on Aurore, the math is no longer linear.
              </p>

              <div style={{ marginTop: 36, display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 1, background: "var(--line)", borderRadius: "var(--radius)", overflow: "hidden", border: "1px solid var(--line)" }}>
                {[
                  { label: "Hours eliminated", val: "11,500", sub: "per year", color: "var(--teal)" },
                  { label: "Cost savings", val: "$300K", sub: "per year", color: "var(--teal)" },
                  { label: "FTE equivalent", val: "~6.0", sub: "absorbed by Aurore", color: "var(--ink)" },
                  { label: "Caseload growth", val: "40–50%", sub: "no new hires", color: "var(--teal)" },
                ].map((s) => (
                  <div key={s.label} style={{ background: "var(--paper)", padding: 18 }}>
                    <div className="mono" style={{ fontSize: 11, color: "var(--ink-muted)", letterSpacing: "0.14em", textTransform: "uppercase" }}>{s.label}</div>
                    <div className="display" style={{ fontSize: 32, color: s.color, marginTop: 6 }}>{s.val}</div>
                    <div className="body-sm" style={{ marginTop: 4 }}>{s.sub}</div>
                  </div>
                ))}
              </div>

              <p className="body" style={{ marginTop: 24 }}>
                We mapped every manual touchpoint in their case lifecycle and automated
                the rules-based ones. The team can now absorb 40–50% more caseload
                without adding headcount.
              </p>

              <div style={{ marginTop: 28 }}>
                <Link href="/customers" className="btn btn-primary btn-sm">Read the full case →</Link>
              </div>
            </div>

            <div className="flow">
              <div className="card card-pad">
                <p className="eyebrow accent">Before / after per case</p>
                <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { step: "Case intake & data entry", before: "18 min", after: "2 min" },
                    { step: "Skip trace & augmentation", before: "12 min", after: "1 min" },
                    { step: "Compliance doc generation", before: "9 min", after: "0 min" },
                    { step: "Client reporting", before: "14 min", after: "1 min" },
                  ].map((r) => (
                    <div key={r.step} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", borderBottom: "1px solid var(--line-soft)", paddingBottom: 8 }}>
                      <span className="body-sm" style={{ color: "var(--ink-2)" }}>{r.step}</span>
                      <span className="mono" style={{ fontSize: 12, color: "var(--teal)", flexShrink: 0, marginLeft: 12 }}>{r.before} → {r.after}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="card card-pad card-teal">
                <p className="eyebrow accent">Aurore engines involved</p>
                <ul className="body" style={{ marginTop: 14, paddingLeft: 18, lineHeight: 1.8 }}>
                  <li>Case Intake Automation</li>
                  <li>Data Analysis &amp; Augmentation</li>
                  <li>Small Claims &amp; Civil Case Prep</li>
                  <li>Compliance Document Management</li>
                  <li>Client Reporting Portal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* § 04 — 17 solutions overview */}
      <section className="bg-paper-2 section">
        <div className="container">
          <div className="section-mark"><span className="num">§ 04</span><span className="label">The 17 solutions</span></div>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "end", flexWrap: "wrap", gap: 18, marginTop: 18 }}>
            <h2 className="display h-lg" style={{ maxWidth: "18ch" }}>
              Seventeen products.{" "}
              <em style={{ fontStyle: "italic", color: "var(--teal)" }}>Five operating stages.</em>
            </h2>
            <Link href="/solutions" className="btn btn-secondary btn-sm">See all 17 in detail →</Link>
          </div>

          {[
            {
              stage: "Stage 01 · Portfolio decisions",
              sub: "For sellers and buyers",
              cols: "repeat(2,1fr)",
              products: [
                { n: "01 · For sellers", name: "Seller Portfolio Intelligence", desc: "Analyzes and scores portfolios prior to sale. Expected recovery, account characteristics, optimal pricing strategy." },
                { n: "02 · For buyers", name: "Buyer Bid Intelligence", desc: "Predictive analytics on acquisition opportunities. Risk-adjusted bids grounded in historical performance and account-level scoring." },
              ],
            },
            {
              stage: "Stage 02 · Intake & enrichment",
              sub: "For agencies",
              cols: "repeat(3,1fr)",
              products: [
                { n: "03", name: "Case Intake Automation", desc: "Ingests, validates and enriches incoming case data from clients. Faster time-to-work, fewer entry errors." },
                { n: "04", name: "Case Data Analysis & Augmentation", desc: "Cross-references internal and third-party data to fill gaps, verify debtor information, surface actionable insights." },
                { n: "05", name: "Historical Yield Intelligence", desc: "Mines past collection activity for patterns across account types, demographics, and strategies. Sharper forecasting." },
              ],
            },
            {
              stage: "Stage 03 · Routing & decisioning",
              sub: "The intelligence layer your collectors actually feel",
              cols: "repeat(3,1fr)",
              products: [
                { n: "06", name: "Case Routing Intelligence", desc: "Assigns incoming accounts to the right workflow, team, or legal strategy. Balance, debtor profile, predicted collectability." },
                { n: "07", name: "Omnichannel Routing Intelligence", desc: "Optimal channel per debtor per stage — phone, email, SMS, mail, legal action. Maximizes contact & engagement." },
                { n: "08", name: "Behavioral Segmentation", desc: "Clusters debtors by payment history, responsiveness, demographics. Outreach tailored to behavior, not generic." },
                { n: "09", name: "Yield (Next Action) Intelligence", desc: "Highest-probability next action for any account at any point in the cycle. Decision support, not a black box." },
                { n: "10", name: "Resource Allocation Intelligence", desc: "Workload, account priority, staff capacity. Recommends optimal distribution — high-value accounts get attention." },
              ],
            },
            {
              stage: "Stage 04 · Compliance & learning",
              sub: "Audit-ready by design",
              cols: "repeat(2,1fr)",
              stageColor: "var(--amber-deep)",
              products: [
                { n: "11", name: "Compliance Document Management", desc: "Creation, storage, versioning, and audit of all legally required notices. FDCPA, Reg F, state regulations, client-specific." },
                { n: "12", name: "Nudges & A/B Learning", desc: "Continuous testing of messaging, timing, channel. The system learns from debtor responses and reallocates spend." },
              ],
            },
            {
              stage: "Stage 05 · Litigation & recovery",
              sub: "Litigation & recovery",
              cols: "repeat(3,1fr)",
              products: [
                { n: "13", name: "Small Claims Preparation", desc: "Court filings, exhibits, supporting documentation for small claims proceedings. Less attorney time per matter." },
                { n: "14", name: "Civil Case Preparation", desc: "End-to-end civil litigation files. Complaint drafting, service coordination, deadline tracking. Court-ready." },
                { n: "15", name: "Garnishment Preparation", desc: "Post-judgment garnishment workflow. Employer/bank identification, writ preparation, filing logistics." },
              ],
            },
            {
              stage: "Stage 06 · Stakeholder interfaces",
              sub: "Where debtors and creditor-clients touch your operation",
              cols: "repeat(2,1fr)",
              products: [
                { n: "16", name: "Customer Interaction (Payment) Portal", desc: "Debtor self-service: review account, set up payment plan, submit payment. Reduces inbound call volume." },
                { n: "17", name: "Client Information (Reporting) Portal", desc: "Creditor-client real-time visibility: portfolio activity, legal status, financial performance. Custom dashboards." },
              ],
            },
          ].map((stage) => (
            <div key={stage.stage} style={{ marginTop: 36 }}>
              <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 14 }}>
                <span className="mono" style={{ fontSize: 11, letterSpacing: "0.18em", textTransform: "uppercase", color: stage.stageColor ?? "var(--teal)" }}>
                  {stage.stage}
                </span>
                <span className="body-sm">{stage.sub}</span>
              </div>
              <ul className="product-list" style={{ gridTemplateColumns: stage.cols }}>
                {stage.products.map((p) => (
                  <li key={p.n}>
                    <span className="pn">{p.n}</span>
                    <span className="pname">{p.name}</span>
                    <span className="pdesc">{p.desc}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* § 05 — How we deploy */}
      <section className="section">
        <div className="container">
          <div className="section-mark"><span className="num">§ 05</span><span className="label">How we deploy</span></div>
          <h2 className="display h-lg" style={{ marginTop: 18, maxWidth: "24ch" }}>
            No migration. No retraining.{" "}
            <em style={{ fontStyle: "italic", color: "var(--teal)" }}>No big-bang launch.</em>
          </h2>

          <div className="grid-3" style={{ marginTop: 48, gap: 18 }}>
            {[
              { phase: "Phase 01 · Days 0–30", n: "01", title: "Read alongside.", body: "We connect to your existing system of record (JST CollectMax, IPACS, or whatever you run) and start writing back intelligence — scores, routing decisions, compliance flags — as enrichments. Your collectors see the same screens. The first wins happen this month, not next quarter." },
              { phase: "Phase 02 · Days 30–90", n: "02", title: "Write alongside.", body: "As trust builds, Aurore starts writing alongside your SOR in real time — unlocking live scoring, dynamic routing, call-by-call compliance evidence, and the audit-ready paper trail your Compliance Officer wishes the SOR had shipped with." },
              { phase: "Phase 03 · Days 90+", n: "03", title: "Run on the layer.", body: "Workflows, reporting, and new-hire training move onto Aurore. The SOR is still there — but the operation is now running on the intelligence layer. Clients never make an explicit migration decision; they just realize, over time, that Aurore knows more than the SOR ever did." },
            ].map((p) => (
              <article key={p.n} className="card card-pad">
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 18 }}>
                  <span className="mono" style={{ fontSize: 11, letterSpacing: "0.14em", textTransform: "uppercase", color: "var(--teal)" }}>{p.phase}</span>
                  <span className="display" style={{ fontSize: 48, color: "var(--paper-3)", lineHeight: 1 }}>{p.n}</span>
                </div>
                <h3 className="h-sm display">{p.title}</h3>
                <p className="body" style={{ marginTop: 10 }}>{p.body}</p>
              </article>
            ))}
          </div>

          <p className="body" style={{ marginTop: 28, maxWidth: "60ch", color: "var(--ink-muted)" }}>
            Walk this with us in a 30-minute session — we&apos;ll show you exactly what we&apos;d
            surface in your portfolio in the first week.
          </p>
          <div style={{ marginTop: 18, display: "flex", gap: 10 }}>
            <Link href="/approach" className="btn btn-ghost btn-sm">See the full approach →</Link>
            <Link href="/contact" className="btn btn-primary btn-sm">Book a walkthrough</Link>
          </div>
        </div>
      </section>

      {/* § 06 — Trust */}
      <section className="bg-paper-2 section">
        <div className="container">
          <div className="grid-2" style={{ gap: 48, alignItems: "start" }}>
            <div>
              <div className="section-mark"><span className="num">§ 06</span><span className="label">Trust</span></div>
              <h2 className="display h-md" style={{ marginTop: 18, maxWidth: "18ch" }}>
                Compliance is the first risk.{" "}
                <em style={{ fontStyle: "italic", color: "var(--teal)" }}>We treat it that way.</em>
              </h2>
              <p className="body-lg" style={{ marginTop: 18 }}>
                A CFPB action or a TCPA class doesn&apos;t get refinanced. Aurore enforces Reg F
                time-of-day, mini-Miranda language, dispute-window timing, and cease-and-desist
                propagation at the workflow boundary — and produces the evidence package an
                auditor will accept on the first request.
              </p>
              <Link href="/trust" className="btn btn-secondary btn-sm" style={{ marginTop: 24 }}>See our trust posture →</Link>
            </div>

            <div className="card card-pad">
              <p className="eyebrow accent">Posture · public</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "18px 0 0", display: "flex", flexDirection: "column", gap: 14 }}>
                {[
                  { label: "SOC 2 Type II", badge: "In progress · audit Q3 2026", cls: "pill-amber" },
                  { label: "FCRA permissible use posture", badge: "Documented", cls: "pill-accent" },
                  { label: "FDCPA · Reg F controls", badge: "Enforced at workflow boundary", cls: "pill-accent" },
                  { label: "Hosting", badge: "US-only · encrypted at rest", cls: "" },
                  { label: "BAA available under NDA", badge: "Yes", cls: "pill-accent" },
                ].map((item, i, arr) => (
                  <li key={item.label} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: i < arr.length - 1 ? "1px solid var(--line-soft)" : "none", paddingBottom: i < arr.length - 1 ? 12 : 0 }}>
                    <span className="body">{item.label}</span>
                    <span className={`pill ${item.cls}`}>{item.badge}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-ink section" style={{ position: "relative", overflow: "hidden" }}>
        <div className="bg-dots-ink" style={{ position: "absolute", inset: 0, opacity: 0.7 }} />
        <div className="container" style={{ position: "relative" }}>
          <div className="grid-2" style={{ gap: 48, alignItems: "center" }}>
            <div>
              <p className="eyebrow" style={{ color: "rgba(245,241,233,0.55)" }}>Next step</p>
              <h2 className="display h-lg" style={{ color: "var(--ink-rev)", marginTop: 14, maxWidth: "18ch" }}>
                Show us your operation.{" "}
                <em style={{ fontStyle: "italic", color: "#a4d7c5" }}>We&apos;ll show you what we&apos;d surface.</em>
              </h2>
              <p className="body-lg" style={{ color: "rgba(245,241,233,0.78)", maxWidth: "50ch", marginTop: 18 }}>
                Thirty minutes. Tell us the SOR you run, the volume you carry, the
                step that costs you the most. We&apos;ll come back with a tailored
                walkthrough — and a number, not a brochure.
              </p>
              <div style={{ marginTop: 28, display: "flex", gap: 10, flexWrap: "wrap" }}>
                <Link href="/contact" className="btn btn-rev-primary btn-lg">Book a 30-min walkthrough</Link>
                <Link href="/calculator" className="btn btn-rev-ghost btn-lg">Run the ROI calculator</Link>
              </div>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 14 }}>
              {[
                { seg: "For agencies", tagline: "Lift liquidation. Cut $/seat.", href: "/for-agencies" },
                { seg: "For buyers", tagline: "Price portfolios with conviction.", href: "/for-buyers" },
                { seg: "For sellers", tagline: "Sell at the price your data deserves.", href: "/for-sellers" },
              ].map((s) => (
                <div key={s.seg} className="card card-ink card-pad">
                  <p className="eyebrow" style={{ color: "rgba(245,241,233,0.55)" }}>{s.seg}</p>
                  <p className="h-sm display" style={{ color: "var(--ink-rev)", marginTop: 8, fontSize: 22 }}>{s.tagline}</p>
                  <Link href={s.href} className="mono" style={{ display: "inline-block", marginTop: 14, fontSize: 12, color: "#a4d7c5", letterSpacing: "0.05em" }}>{s.seg} →</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
