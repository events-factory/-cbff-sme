import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

const lessons = [
  { num: "1", title: "Dialogue alone is insufficient", desc: "SMEs require structured financing mechanisms, not just discussion." },
  { num: "2", title: "Trust & information asymmetry", desc: "Banks and investors lack reliable SME performance data." },
  { num: "3", title: "Regional integration opens markets", desc: "AfCFTA is creating new cross-border opportunities." },
  { num: "4", title: "Matchmaking platforms are essential", desc: "Structured environments connecting SMEs to capital are critical." },
];

const objectives = [
  { num: "1", title: "Mobilize Capital",               desc: "Connect SMEs with banks, investors, and development finance institutions across Africa." },
  { num: "2", title: "Reduce Investment Risk",          desc: "Through certification, digital trust infrastructure, and alternative data sources." },
  { num: "3", title: "Promote Economic Integration",   desc: "Support cross-border trade under the AfCFTA framework across the continent." },
  { num: "4", title: "Accelerate Market Access",       desc: "Connect African producers with international buyers and markets globally." },
];

const rwandaReasons = [
  { title: "Pro-Business Regulatory Framework", desc: "Highly efficient environment supporting private sector growth with transparent governance structures." },
  { title: "Digital Infrastructure",            desc: "Advanced mobile money ecosystem and digital connectivity enabling seamless financial transactions." },
  { title: "KIFC Hub",                          desc: "Kigali International Financial Centre positions Rwanda as a premier regional financial platform." },
  { title: "Government Commitment",             desc: "Strong public sector support for private sector development and international investment attraction." },
];

export default function AboutPage() {
  return (
    <>
      {/* Page hero */}
      <div style={{ background: "linear-gradient(135deg, var(--navy2) 0%, var(--navy) 100%)", padding: "120px 24px 60px", marginBottom: 0 }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", fontWeight: 700, marginBottom: 12 }}>About CBFF-SME</p>
          <h1 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "var(--white)", lineHeight: 1.2, maxWidth: 700 }}>
            Background, Vision &amp; Why Rwanda
          </h1>
        </div>
      </div>

      {/* Background & Origins */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <SectionHeader eyebrow="Background & Origins" title="How CBFF-SME Came to Be" />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="two-col">
            <div>
              <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, marginBottom: 20 }}>
                The Cross-Border Finance Forum for SMEs (CBFF-SME) is a consortium initiative bringing together four
                complementary organisations: NET Kigali, Re-bird Belgium, SBPME-UEMOA, and Congruence Consulting.
              </p>
              <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8 }}>
                The initiative builds on the practical experience of the Salon des Banques et des PME de l&apos;UEMOA
                (SBPME-UEMOA), a recognized regional initiative focused on connecting banks and SMEs in West Africa.
                Over time, this forum became a reference platform for SME financing, banking innovation and economic
                development across the region.
              </p>
            </div>
            <div>
              <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, marginBottom: 20 }}>
                These lessons inspired the creation of a new generation platform designed to move from dialogue to
                transactions — evolving a successful regional forum into a pan-African platform dedicated to financing
                and scaling SMEs.
              </p>
              <div style={{ background: "var(--light)", border: "1px solid var(--border)", borderLeft: "4px solid var(--gold)", padding: "16px 20px" }}>
                <p style={{ fontSize: 14, color: "var(--navy)", fontWeight: 600 }}>
                  &ldquo;From dialogue to transactions — a permanent ecosystem connecting SMEs with capital and global markets.&rdquo;
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Partners of SBPME-UEMOA */}
      <section style={{ padding: "80px 0", background: "var(--light)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <SectionHeader eyebrow="SBPME-UEMOA Heritage" title="Historical Partners" />
          <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, marginBottom: 32, maxWidth: 780 }}>
            The Forum built a leading public-private ecosystem bringing together states, regional institutions, banks and
            technical partners. Over its editions, the SBPME-UEMOA ecosystem gathered:
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginBottom: 64 }} className="grid-3">
            {/* Public & Regional Institutions */}
            <div style={{ border: "1px solid var(--border)", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 13, fontWeight: 700, color: "var(--navy)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 16, borderBottom: "2px solid var(--gold)", paddingBottom: 10 }}>
                Public &amp; Regional Institutions
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {["Member States' Ministries of the UEMOA", "UEMOA Regional Consultative Chamber", "BOAD — West African Development Bank", "BCEAO — Central Bank of West African States", "FAGACE", "FAPSFD UEMOA", "AUF — Agence Universitaire de la Francophonie"].map((item) => (
                  <li key={item} style={{ fontSize: 13, color: "var(--muted)", padding: "5px 0", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ color: "var(--gold)", marginRight: 6 }}>•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Banking & Financial Sector */}
            <div style={{ border: "1px solid var(--border)", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 13, fontWeight: 700, color: "var(--navy)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 16, borderBottom: "2px solid var(--gold)", paddingBottom: 10 }}>
                Banking &amp; Financial Sector
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {["CORIS Banque", "ECOBANK", "ORABANK", "UBA — United Bank for Africa", "VISTA GROUP", "BDNDA — Banque Nationale de Développement Agricole du Mali", "Banque Agricole du Faso"].map((item) => (
                  <li key={item} style={{ fontSize: 13, color: "var(--muted)", padding: "5px 0", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ color: "var(--gold)", marginRight: 6 }}>•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
            {/* Private Sector & Associations */}
            <div style={{ border: "1px solid var(--border)", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 13, fontWeight: 700, color: "var(--navy)", textTransform: "uppercase", letterSpacing: 1, marginBottom: 16, borderBottom: "2px solid var(--gold)", paddingBottom: 10 }}>
                Private Sector &amp; Associations
              </h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {["UEMOA Entrepreneurs' Associations", "ASKY Airlines", "International technical partners", "Regional economic operators"].map((item) => (
                  <li key={item} style={{ fontSize: 13, color: "var(--muted)", padding: "5px 0", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ color: "var(--gold)", marginRight: 6 }}>•</span>{item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Lessons */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <SectionHeader eyebrow="SBPME-UEMOA Heritage" title="Key Lessons Learned" />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }} className="grid-2">
            {lessons.map((l) => (
              <div key={l.num} style={{ background: "var(--white)", border: "1px solid var(--border)", padding: "24px" }}>
                <h4 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 14, fontWeight: 700, color: "var(--navy)", marginBottom: 6 }}>
                  {l.num}. {l.title}
                </h4>
                <p style={{ fontSize: 13.5, color: "var(--muted)" }}>{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Strategic Vision */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <SectionHeader
            eyebrow="Strategic Vision & Objectives"
            title="Long-Term Vision"
            lead="The long-term vision of CBFF-SME is to establish a permanent ecosystem that connects SMEs with capital, markets, and strategic partners. The initiative aims to position Kigali as a continental hub for SME financing structuring and investment matchmaking."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }} className="grid-2">
            {objectives.map((o) => (
              <div key={o.num} style={{ display: "flex", gap: 16, border: "1px solid var(--border)", padding: "24px" }}>
                <div style={{ minWidth: 44, height: 44, background: "var(--gold)", color: "var(--white)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-poppins),sans-serif", fontSize: 18, fontWeight: 800, flexShrink: 0 }}>{o.num}</div>
                <div>
                  <h4 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 14, fontWeight: 700, color: "var(--navy)", marginBottom: 6 }}>{o.title}</h4>
                  <p style={{ fontSize: 13.5, color: "var(--muted)" }}>{o.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Rwanda */}
      <section style={{ padding: "80px 0", background: "var(--navy)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <SectionHeader
            eyebrow="Pilot Launch"
            title="Why Rwanda?"
            dark
            lead="Rwanda offers one of the most favorable environments in Africa to launch this initiative. By anchoring the financial infrastructure in Kigali and creating a commercial gateway in Brussels, the initiative builds a bridge connecting African enterprises with global capital and European markets."
          />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }} className="grid-2">
            {rwandaReasons.map((r) => (
              <div key={r.title} style={{ background: "rgba(255,255,255,.06)", border: "1px solid rgba(255,255,255,.12)", borderTop: "3px solid var(--gold)", padding: "24px" }}>
                <h4 style={{ color: "var(--gold)", fontSize: 14, fontFamily: "var(--font-poppins),sans-serif", fontWeight: 700, marginBottom: 8 }}>{r.title}</h4>
                <p style={{ color: "rgba(255,255,255,.75)", fontSize: 13.5 }}>{r.desc}</p>
              </div>
            ))}
          </div>

          {/* Expected Impact */}
          <div style={{ marginTop: 48 }}>
            <p style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: 16 }}>Expected Impact</p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "rgba(255,255,255,.15)" }} className="impact-grid">
              {[
                { num: "~30 SMEs/year",      desc: "High-potential enterprises prepared per pilot cohort" },
                { num: "$30–80M/year",        desc: "Financing mobilized annually through CBFF platform" },
                { num: "$250–500M / 5 years", desc: "Projected financing for 150+ SMEs over five years" },
              ].map((s) => (
                <div key={s.num} style={{ textAlign: "center", padding: "28px 20px", background: "rgba(255,255,255,.06)" }}>
                  <div style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: "clamp(18px,2.5vw,28px)", fontWeight: 800, color: "var(--gold)", lineHeight: 1, marginBottom: 8 }}>{s.num}</div>
                  <div style={{ fontSize: 12, color: "rgba(255,255,255,.7)" }}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: "60px 0", textAlign: "center", background: "var(--light)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontSize: 16, color: "var(--muted)", marginBottom: 24 }}>Discover the five pillars that power the CBFF-SME ecosystem</p>
          <Link href="/architecture" style={{ display: "inline-block", padding: "13px 32px", fontFamily: "var(--font-poppins),sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", borderRadius: 2, background: "var(--gold)", color: "var(--white)", textDecoration: "none" }}>
            Project Architecture →
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; }
          .grid-2      { grid-template-columns: 1fr !important; }
          .grid-3      { grid-template-columns: 1fr !important; }
          .impact-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .grid-3 { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </>
  );
}
