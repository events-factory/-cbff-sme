import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

const pillars = [
  {
    num: 1,
    title: "Digital Trust Lab",
    tag: "Trust & Certification Infrastructure",
    desc: "Provides the trust infrastructure for SME financing by creating reliable digital economic identities. Functions include governance certification, export readiness scoring, and standardized financial documentation — significantly reducing information asymmetry for banks and investors.",
  },
  {
    num: 2,
    title: "CBFF-SME Deal Platform",
    tag: "Financial Marketplace",
    desc: "Operates as a deal-driven financial marketplace where prepared SMEs meet banks, investors, and development finance institutions in a structured Deal Room environment designed to generate financing transactions.",
  },
  {
    num: 3,
    title: "World Trade IA",
    tag: "Global Market Intelligence",
    desc: "Through a strategic partnership with World Trade IA, the initiative integrates advanced trade intelligence using AI and global trade data to identify export opportunities, match SMEs with international buyers, and provide strategic market insights.",
  },
  {
    num: 4,
    title: "Brussels Concept Store",
    tag: "European Market Gateway",
    desc: "A Made In... By Africa Concept Store in Brussels serving as an Economic Diplomacy Platform, Market Access Gateway, Demonstration Space, and Trade Promotion Hub — providing African SMEs with permanent commercial presence in Europe.",
  },
  {
    num: 5,
    title: "The Financing Engine",
    tag: "Blended Finance Structure",
    desc: "Mobilizes multiple sources of capital: African Banks, Impact Funds, Development Institutions, Diaspora Investors — through debt financing, equity investment, guarantees, and co-investment structures from both public and private sources.",
  },
];

const dealFunctions = [
  "Presentation of investment-ready SMEs",
  "Bilateral meetings with investors and financial institutions",
  "Structuring of financing solutions (debt, equity, blended finance)",
  "Signature of MoUs, LOIs, and financing commitments",
];

const dealPillars = [
  "Made In... By Africa — reputational foundation",
  "Digital Trust Lab — risk reduction",
  "Mobile Network Operators — data backbone",
  "CBFF Kigali — financial activation hub",
  "World Trade AI — market intelligence",
  "Brussels Concept Store — post-investment gateway",
];

const pipeline = [
  { label: "Trust",       color: "var(--navy)" },
  { label: "Data",        color: "#2E6DAD" },
  { label: "Certification", color: "var(--gold)" },
  { label: "Financing",   color: "#C9972B" },
  { label: "Market Access", color: "#1B3A5C" },
];

export default function ArchitecturePage() {
  return (
    <>
      <div style={{ background: "linear-gradient(135deg, var(--navy2) 0%, var(--navy) 100%)", padding: "120px 24px 60px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", fontWeight: 700, marginBottom: 12 }}>Project Architecture</p>
          <h1 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "var(--white)", lineHeight: 1.2, maxWidth: 700 }}>
            Five Integrated Pillars
          </h1>
        </div>
      </div>

      {/* Pillars */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <SectionHeader
            eyebrow="Project Architecture"
            title="The Complete CBFF-SME System"
            lead="The CBFF-SME is built around five integrated pillars that create a complete system: preparing SMEs, financing them, connecting them to buyers, and showcasing their products in global markets."
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {pillars.map((p) => (
              <div key={p.num} style={{ display: "flex", alignItems: "flex-start", gap: 20, background: "var(--white)", border: "1px solid var(--border)", padding: "22px 24px" }}>
                <div style={{ minWidth: 44, height: 44, background: "var(--navy)", color: "var(--white)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-poppins),sans-serif", fontSize: 20, fontWeight: 800, flexShrink: 0 }}>{p.num}</div>
                <div>
                  <h4 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 15, fontWeight: 700, color: "var(--navy)", marginBottom: 2 }}>{p.title}</h4>
                  <span style={{ fontSize: 11, color: "var(--gold)", fontWeight: 600, letterSpacing: 1, textTransform: "uppercase", marginBottom: 8, display: "block" }}>— {p.tag}</span>
                  <p style={{ fontSize: 13.5, color: "var(--muted)" }}>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pipeline flow */}
      <div style={{ background: "var(--navy2)", padding: "32px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: 16 }}>Transaction Pipeline</p>
          <div style={{ display: "flex", gap: 0, flexWrap: "wrap" }}>
            {pipeline.map((p, i) => (
              <div key={p.label} style={{ display: "flex", alignItems: "center" }}>
                <div style={{ background: p.color, padding: "10px 20px", fontFamily: "var(--font-poppins),sans-serif", fontSize: 12, fontWeight: 700, color: "var(--white)", letterSpacing: 1, textTransform: "uppercase" }}>
                  {p.label}
                </div>
                {i < pipeline.length - 1 && <div style={{ width: 0, height: 0, borderTop: "20px solid transparent", borderBottom: "20px solid transparent", borderLeft: `14px solid ${p.color}` }} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deal Room */}
      <section style={{ padding: "80px 0", background: "var(--light)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <SectionHeader eyebrow="CBFF Deal Room" title="The Core Engine" />
          <div style={{ background: "var(--navy)", color: "var(--white)", padding: "24px 28px", marginBottom: 32 }}>
            <p style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>The Deal Room is the operational center of the initiative — a transaction engine, not just an event.</p>
            <p style={{ color: "rgba(255,255,255,.75)", fontSize: 14 }}>
              Purpose: Structure financing opportunities for African SMEs; connect entrepreneurs with banks, funds, and institutional investors;
              accelerate cross-border SME financing under the AfCFTA framework.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="grid-2">
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-poppins),sans-serif", color: "var(--gold)", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>Functions</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {dealFunctions.map((f) => (
                  <li key={f} style={{ padding: "6px 0", fontSize: 13.5, color: "var(--text)", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ color: "var(--gold)", marginRight: 8 }}>•</span>{f}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-poppins),sans-serif", color: "var(--gold)", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>Six Supporting Pillars</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {dealPillars.map((p) => (
                  <li key={p} style={{ padding: "6px 0", fontSize: 13.5, color: "var(--text)", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ color: "var(--gold)", marginRight: 8 }}>•</span>{p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 0", textAlign: "center" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontSize: 16, color: "var(--muted)", marginBottom: 24 }}>Ready to see the full three-day program?</p>
          <Link href="/program" style={{ display: "inline-block", padding: "13px 32px", fontFamily: "var(--font-poppins),sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", borderRadius: 2, background: "var(--gold)", color: "var(--white)", textDecoration: "none" }}>
            View Forum Program →
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .grid-2 { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
