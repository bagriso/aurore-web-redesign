import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Aurore Labs",
  description:
    "Aurore Labs is built by operators who spent years inside the debt-collections industry before deciding to rebuild the infrastructure layer.",
};

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="section bg-paper-2" style={{ position: "relative", overflow: "hidden" }}>
        <div className="bg-dots" style={{ position: "absolute", inset: 0, opacity: 0.5 }} />
        <div className="container" style={{ position: "relative" }}>
          <p className="eyebrow" style={{ marginBottom: 20 }}>About Aurore Labs</p>
          <h1 className="display h-xl" style={{ maxWidth: "20ch", marginBottom: 28 }}>
            Built by operators. For operators.
          </h1>
          <p className="lede" style={{ maxWidth: "62ch" }}>
            We spent years inside collection agencies, creditors-rights firms, and debt
            portfolios before we started Aurore. We know what a collector&apos;s desk looks like
            at 9 AM on a Tuesday. We know what compliance feels like when the auditor calls.
            We built what we wished existed.
          </p>
        </div>
      </section>

      {/* § 01 WHY AURORE EXISTS */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 80, alignItems: "start" }}>
            <div>
              <div className="section-mark" style={{ marginBottom: 24 }}>
                <span className="num">01</span>
                <span className="label">Why Aurore exists</span>
              </div>
              <h2 className="display h-md" style={{ lineHeight: 1.1 }}>
                A category running on infrastructure built to track, not to think.
              </h2>
            </div>
            <div className="flow-lg">
              <p className="body-lg">
                The debt-collections industry has been running on the same system-of-record
                architecture for thirty years. CollectMax, IPACS, CUBS — these are powerful
                systems of record. They know where every dollar is. They do not know what to
                do about it. That is not a criticism. It was never their job.
              </p>
              <p className="body-lg">
                The intelligence layer that should sit above these systems — the one that
                decides which collector should call which debtor at which time through which
                channel, that generates the compliance document and routes it, that surfaces
                the filing deadline before it passes — that layer has largely been human.
                Experienced humans, doing rules-based work, at enormous cost and with unavoidable
                inconsistency.
              </p>
              <p className="body-lg">
                Aurore is that layer. Purpose-built for collections, designed to integrate
                alongside the SOR rather than replace it, and delivered by engineers who
                understand the regulatory environment as fluently as the technical one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* § 02 PRINCIPLES */}
      <section className="section bg-paper-2">
        <div className="container">
          <div className="section-mark" style={{ marginBottom: 20 }}>
            <span className="num">02</span>
            <span className="label">Principles</span>
          </div>
          <h2 className="display h-lg" style={{ maxWidth: "22ch", marginBottom: 48 }}>
            How we think about the work.
          </h2>
          <div className="grid-2" style={{ gap: 24 }}>

            <div className="card card-pad-lg flow-lg">
              <p className="eyebrow" style={{ marginBottom: 4 }}>01</p>
              <h3 className="display h-sm">Compliance by architecture.</h3>
              <p className="body">
                FDCPA, Regulation F, TCPA, GLBA — these aren&apos;t checklists we apply on top
                of a generic product. They are structural constraints baked into how our
                routing, communication, and documentation engines work. A collector using Aurore
                cannot accidentally send a message at a prohibited hour, because the system
                won&apos;t route it. Compliance isn&apos;t a feature. It&apos;s the foundation.
              </p>
            </div>

            <div className="card card-pad-lg flow-lg">
              <p className="eyebrow" style={{ marginBottom: 4 }}>02</p>
              <h3 className="display h-sm">Compound intelligence.</h3>
              <p className="body">
                Every account that runs through Aurore makes the next decision slightly better.
                Every call outcome, every payment arrangement, every skip-trace result is a data
                point that improves the next recommendation. This is not a promise about AI — it
                is a description of how systems that learn from their own history eventually
                outperform ones that don&apos;t, regardless of the methodology.
              </p>
            </div>

            <div className="card card-pad-lg flow-lg">
              <p className="eyebrow" style={{ marginBottom: 4 }}>03</p>
              <h3 className="display h-sm">Built alongside, not on top of.</h3>
              <p className="body">
                We do not ask you to migrate your SOR. We do not ask you to retrain your
                collectors on a new interface. We connect to what you have, surface intelligence
                into the tools your team already uses, and automate the parts of the workflow
                that are rules-based. You can add Aurore products one at a time and remove them
                without losing your data.
              </p>
            </div>

            <div className="card card-pad-lg flow-lg">
              <p className="eyebrow" style={{ marginBottom: 4 }}>04</p>
              <h3 className="display h-sm">Operator-grade.</h3>
              <p className="body">
                We are not a software company that sells into collections. We are a collections
                company that builds software. The distinction matters when a regulatory change
                hits on a Friday afternoon, when a client audit request comes in with a 48-hour
                turnaround, when a collector needs to understand why the system recommended a
                specific action. We have been in those situations. We build for them.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* § 03 TEAM */}
      <section className="section">
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 80, alignItems: "start" }}>
            <div>
              <div className="section-mark" style={{ marginBottom: 20 }}>
                <span className="num">03</span>
                <span className="label">Team</span>
              </div>
              <h2 className="display h-md" style={{ marginBottom: 20 }}>
                Small team. Deep domain.
              </h2>
              <p className="body-lg">
                We are a small company by design. Every person on the team has worked inside
                a collections operation, a creditors-rights firm, or a debt portfolio — not
                just adjacent to one. We stay small because it lets us stay close to the
                problem.
              </p>
            </div>

            <div>
              {/* 3x2 grid of team placeholders */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
                {[
                  { role: "Founder / CEO", name: "Name placeholder" },
                  { role: "Founder / CTO", name: "Name placeholder" },
                  { role: "Head of Engineering", name: "Name placeholder" },
                  { role: "Head of Domain", name: "Name placeholder" },
                  { role: "Compliance Lead", name: "Name placeholder" },
                  { role: "Forward-deployed eng", name: "Name placeholder" },
                ].map(({ role, name }) => (
                  <div key={role} className="card card-pad flow" style={{ padding: 20 }}>
                    {/* Square placeholder image */}
                    <div
                      style={{
                        width: "100%",
                        aspectRatio: "1",
                        background: "var(--paper-2)",
                        borderRadius: "var(--radius)",
                        border: "1px solid var(--line-soft)",
                        marginBottom: 12,
                      }}
                    />
                    <p className="body" style={{ fontWeight: 600, marginBottom: 2 }}>{name}</p>
                    <p className="body-sm muted">{role}</p>
                    <p className="body-sm" style={{ color: "var(--ink-dim)", fontStyle: "italic" }}>
                      Background placeholder
                    </p>
                  </div>
                ))}
              </div>
              <p className="body-sm muted" style={{ marginTop: 16 }}>
                Replace placeholders with real bios and headshots before launch.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* § 04 WHERE WE WORK */}
      <section className="section bg-paper-2">
        <div className="container">
          <div className="section-mark" style={{ marginBottom: 20 }}>
            <span className="num">04</span>
            <span className="label">Where we work</span>
          </div>
          <h2 className="display h-lg" style={{ maxWidth: "22ch", marginBottom: 48 }}>
            Two cities. One focus.
          </h2>
          <div className="grid-2" style={{ gap: 24 }}>

            <div className="card card-pad-lg flow-lg">
              <div>
                <p className="eyebrow" style={{ marginBottom: 8 }}>Boston, MA</p>
                <h3 className="display h-sm">North American HQ</h3>
              </div>
              <p className="body">
                Our commercial, client-facing, and forward-deployed engineering teams are
                based in Boston. Client engagements in the Eastern US are typically run
                from here, with on-site presence as needed.
              </p>
              <span className="pill">North American HQ</span>
            </div>

            <div className="card card-pad-lg flow-lg">
              <div>
                <p className="eyebrow" style={{ marginBottom: 8 }}>Santiago, Chile</p>
                <h3 className="display h-sm">Engineering hub</h3>
              </div>
              <p className="body">
                Our core engineering team is based in Santiago. Platform development,
                SOR integrations, and product infrastructure are built here. The timezone
                overlap with US Eastern gives us morning coverage on both ends.
              </p>
              <span className="pill">Engineering hub</span>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-ink">
        <div className="container" style={{ textAlign: "center" }}>
          <h2 className="display h-lg" style={{ marginBottom: 20 }}>
            Want to be part of it?
          </h2>
          <p className="lede" style={{ maxWidth: "48ch", margin: "0 auto 36px" }}>
            Or want us to be part of yours?
          </p>
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: 12 }}>
            <Link href="/contact" className="btn btn-rev-primary btn-lg">Talk to us</Link>
            <a href="mailto:careers@aurorelabs.ai" className="btn btn-rev-ghost btn-lg">
              careers@aurorelabs.ai
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
