import SectionHeader from "@/components/SectionHeader";
import LogoTicker from "@/components/LogoTicker";
import { Landmark, Building2, Globe } from "lucide-react";

const partners = [
  { name: "RDB",                   interest: "Position Rwanda as investment hub",                 role: "Institutional anchor",          contribution: "Facilitate coordination, SME pipeline, international promotion" },
  { name: "National Bank of Rwanda", interest: "Strengthen SME finance ecosystem",                role: "Financial sector alignment",    contribution: "Regulatory guidance, encourage financial sector participation" },
  { name: "Bank of Kigali",        interest: "Expand SME lending and trade finance",             role: "Lead banking partner",          contribution: "CBFF deal platform, financing solutions" },
  { name: "I&M Bank",              interest: "Regional trade finance expansion",                 role: "Cross-border banking partner",  contribution: "Trade finance and SME financing solutions" },
  { name: "Bank of Africa",        interest: "Pan-African banking opportunities",                role: "Regional banking partner",      contribution: "Cross-border SME banking and financing" },
  { name: "Smart Africa",          interest: "Promote digital transformation",                   role: "Digital ecosystem partner",     contribution: "Support Digital Trust Lab visibility and standards" },
  { name: "Ministry of Finance",   interest: "Mobilize investment, strengthen financial sector", role: "Policy & investment alignment",  contribution: "Policy dialogue, investor mobilization" },
  { name: "Ministry of Trade",     interest: "Expand exports and global market access",          role: "Trade policy partner",          contribution: "Support export-oriented SMEs and trade promotion" },
  { name: "FAGACE",                interest: "Facilitate SME financing through guarantees",      role: "Risk mitigation partner",       contribution: "Guarantee mechanisms for SME lending" },
  { name: "BRD Rwanda",            interest: "Finance SME development and investment",           role: "Development finance partner",   contribution: "Long-term financing and investment support for high-potential SMEs" },
  { name: "World Trade IA",        interest: "AI-driven trade intelligence",                     role: "Market access platform",        contribution: "Identify export opportunities, connect SMEs with buyers" },
  { name: "Brussels Concept Store", interest: "European market gateway",                        role: "Commercial diplomacy platform", contribution: "Showcase African products, facilitate buyer engagement" },
];

const acknowledgements = [
  { Icon: Landmark,  title: "Public Institutions",  desc: "Rwanda Development Board, Ministry of Finance (MINECOFIN), Ministry of Trade (MINICOM) and the National Bank of Rwanda — for their institutional leadership and commitment to private sector development." },
  { Icon: Building2, title: "Banking Partners",      desc: "Bank of Kigali, I&M Bank, Bank of Africa and FAGACE — for their pioneering role in African SME financing and their active participation in the Deal Room." },
  { Icon: Globe,     title: "Strategic Partners",   desc: "Smart Africa, World Trade IA, BRD Rwanda and Brussels Concept Store — for their technological expertise, market intelligence and pan-African vision." },
];

export default function PartnersPage() {
  return (
    <>
      <div style={{ background: "linear-gradient(135deg, var(--navy2) 0%, var(--navy) 100%)", padding: "120px 24px 60px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", fontWeight: 700, marginBottom: 12 }}>Strategic Partners</p>
          <h1 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "var(--white)", lineHeight: 1.2, maxWidth: 700 }}>
            Partners &amp; Institutional Ecosystem
          </h1>
        </div>
      </div>

      {/* Partnership matrix */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <SectionHeader
            eyebrow="Strategic Partnership Matrix"
            title="Our Partners & Stakeholders"
            lead="A leading public-private ecosystem bringing together states, regional institutions, banks and technical partners across Africa and beyond."
          />
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5 }}>
              <thead>
                <tr style={{ background: "var(--navy)", color: "var(--white)" }}>
                  {["Partner", "Strategic Interest", "Role", "Expected Contribution"].map((h) => (
                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontFamily: "var(--font-poppins),sans-serif", fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {partners.map((p, i) => (
                  <tr key={p.name} style={{ borderBottom: "1px solid var(--border)", background: i % 2 === 0 ? "var(--white)" : "var(--light)" }}>
                    <td style={{ padding: "12px 16px", fontWeight: 600, color: "var(--navy)" }}>{p.name}</td>
                    <td style={{ padding: "12px 16px" }}>{p.interest}</td>
                    <td style={{ padding: "12px 16px", color: "var(--blue)" }}>{p.role}</td>
                    <td style={{ padding: "12px 16px", color: "var(--muted)" }}>{p.contribution}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Logo ticker */}
      <section style={{ padding: "60px 0", background: "var(--light)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <SectionHeader eyebrow="Partner Logos" title="Institutional Recognition" />
        </div>
        <LogoTicker />
      </section>

      {/* Acknowledgements */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <SectionHeader eyebrow="Acknowledgements" title="Our Sincere Thanks" />
          <div style={{ background: "var(--navy)", color: "var(--white)", padding: "24px 28px", marginBottom: 40, textAlign: "center" }}>
            <h3 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 20, fontWeight: 700, color: "var(--gold)", marginBottom: 8 }}>ACKNOWLEDGEMENTS</h3>
            <p style={{ fontStyle: "italic", color: "rgba(255,255,255,.8)" }}>Our sincere thanks to all our strategic partners whose commitment and trust make this initiative possible.</p>
          </div>
          <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, marginBottom: 40, maxWidth: 800 }}>
            The CBFF-SME consortium extends its warmest thanks to all institutions and partners who have contributed their support, expertise and commitment to this initiative.
            Their contribution is essential to building a sustainable infrastructure for financing and market access for African SMEs.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="grid-3">
            {acknowledgements.map((a) => (
              <div key={a.title} style={{ border: "1px solid var(--border)", padding: "28px 24px", textAlign: "center" }}>
                <div style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--light)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                  <a.Icon size={24} color="var(--gold)" />
                </div>
                <h4 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 15, fontWeight: 700, color: "var(--navy)", marginBottom: 10 }}>{a.title}</h4>
                <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.7 }}>{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .grid-3 { grid-template-columns: 1fr !important; } }
        @media (min-width: 641px) and (max-width: 900px) { .grid-3 { grid-template-columns: repeat(2,1fr) !important; } }
      `}</style>
    </>
  );
}
