import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

const tiers = [
  { label: "Title Partner",    bg: "var(--navy2)", slots: 2,  amount: "USD 50,000" },
  { label: "Platinum Partner", bg: "#4a4a6a",      slots: 3,  amount: "USD 25,000" },
  { label: "Gold Partner",     bg: "var(--gold)",  slots: 5,  amount: "USD 10,000" },
  { label: "Silver Partner",   bg: "var(--muted)", slots: 5,  amount: "USD 5,000" },
];

const opportunities = [
  {
    num: "1", title: "Strategic Anchor Partner", tag: "Institutional Leadership",
    target: "Rwanda Development Board",
    rationale: "RDB's mandate is to position Rwanda as a regional investment and innovation hub. Acting as Anchor Partner places RDB at the center of a platform that directly attracts investors and strengthens Rwanda's financial ecosystem.",
    positioning: "Official Institutional Anchor of CBFF — Opening ceremony leadership — Strategic visibility across all CBFF communications",
    advantages: ["Reinforces Rwanda's positioning as an African investment hub", "Direct engagement with investors and financial institutions", "International visibility for Rwanda's innovation and SME ecosystem"],
    roi: "Increased investor pipeline for Rwanda; Strengthened positioning of Kigali as a continental finance platform",
  },
  {
    num: "2", title: "Policy Leadership Partner", tag: "Public Policy & Investment Dialogue",
    target: "Ministry of Finance and Economic Planning · Ministry of Trade and Industry Rwanda",
    rationale: "These institutions shape economic policy, trade policy, and investment frameworks that directly influence SME development across Rwanda and the region.",
    positioning: "Leadership of the Policy Dialogue Session — Participation in Opening and Closing Sessions",
    advantages: ["Platform to communicate Rwanda's economic vision", "Direct engagement with international investors and development institutions", "Opportunity to highlight policy reforms supporting SME growth"],
    roi: "Increased investor confidence; Stronger alignment between government policy and private capital",
  },
  {
    num: "3", title: "Financial Ecosystem Partner", tag: "Regulation & Financial Stability",
    target: "National Bank of Rwanda",
    rationale: "BNR's role in regulating the financial sector makes it essential to building trust in the SME financing ecosystem.",
    positioning: "Lead session: \"Creating a Trusted Financial Environment for SMEs\"",
    advantages: ["Showcase Rwanda's financial stability and regulatory strength", "Build investor confidence in the banking system"],
    roi: "Reinforced credibility of Rwanda's financial sector; Increased participation from international financial institutions",
  },
  {
    num: "4", title: "Lead Banking Partner", tag: "SME Financing Champion",
    target: "Bank of Kigali",
    rationale: "As Rwanda's leading commercial bank, Bank of Kigali is ideally positioned to lead SME financing and trade finance discussions at the highest level.",
    positioning: "Lead partner of the Banking Leaders Panel — Premium access to Deal Room negotiations",
    advantages: ["Direct access to high-quality SME deal flow", "Positioning as Rwanda's leading SME bank", "Opportunity to originate new loans and financing deals"],
    roi: "SME loan portfolio growth; New trade finance opportunities",
  },
  {
    num: "5", title: "Regional Banking Partners", tag: "Cross-Border Finance Enablers",
    target: "I&M Bank · Bank of Africa",
    rationale: "Both institutions operate regionally and benefit from cross-border SME financing opportunities across multiple African markets.",
    positioning: "Participation in the Banking Leaders Panel — Priority access to Deal Room meetings",
    advantages: ["Access to SMEs expanding across African markets", "Opportunity to structure cross-border trade finance"],
    roi: "Increased SME client acquisition; New regional financing transactions",
  },
  {
    num: "6", title: "Risk Mitigation Partner", tag: "Unlocking SME Lending",
    target: "FAGACE",
    rationale: "Guarantee institutions reduce lending risk and enable banks to expand SME financing to underserved enterprises.",
    positioning: "Lead session: \"Guarantees and Risk Mitigation for SME Lending\"",
    advantages: ["Position FAGACE as a key enabler of SME finance", "Strengthen partnerships with African banks"],
    roi: "Increased use of guarantee instruments; Stronger collaboration with financial institutions",
  },
  {
    num: "7", title: "Digital Transformation Partner", tag: "Africa's Digital Economy",
    target: "Smart Africa",
    rationale: "Smart Africa promotes digital transformation across the continent, making it an ideal partner for the Digital Trust Lab ecosystem.",
    positioning: "Lead session: \"Digital Infrastructure for SME Growth\"",
    advantages: ["Showcase digital solutions supporting SMEs", "Promote digital identity and trust frameworks"],
    roi: "Increased adoption of digital platforms; Stronger visibility across African innovation ecosystems",
  },
];

export default function SponsorshipPage() {
  return (
    <>
      <div style={{ background: "linear-gradient(135deg, var(--navy2) 0%, var(--navy) 100%)", padding: "120px 24px 60px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", fontWeight: 700, marginBottom: 12 }}>Sponsorship</p>
          <h1 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "var(--white)", lineHeight: 1.2, maxWidth: 700 }}>
            Sponsorship &amp; Partnership Opportunities
          </h1>
        </div>
      </div>

      {/* Tiers */}
      <section style={{ padding: "80px 0", background: "var(--navy)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <SectionHeader eyebrow="Sponsorship Structure" title="Sponsorship Tiers" dark
            lead="Secure your organisation's visibility and impact at the CBFF-SME forum. Strategic sponsorship packages available at multiple levels." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }} className="grid-2">
            {tiers.map((t) => (
              <div key={t.label} style={{ border: "1px solid var(--border)", overflow: "hidden", background: "var(--white)" }}>
                <div style={{ padding: "16px 24px", background: t.bg, fontFamily: "var(--font-poppins),sans-serif", fontSize: 15, fontWeight: 700, color: "var(--white)" }}>{t.label}</div>
                <div style={{ padding: "18px 24px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <div style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 22, fontWeight: 800, color: "var(--navy)" }}>{t.amount}</div>
                    <div style={{ fontSize: 13, color: "var(--muted)" }}>per partner</div>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <div style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 22, fontWeight: 800, color: "var(--navy)" }}>{t.slots} Partners</div>
                    <div style={{ fontSize: 13, color: "var(--muted)" }}>available slots</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link href="/register" style={{ display: "inline-block", padding: "13px 32px", fontFamily: "var(--font-poppins),sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", borderRadius: 2, background: "var(--gold)", color: "var(--white)", textDecoration: "none" }}>
              Become a Sponsor
            </Link>
          </div>
        </div>
      </section>

      {/* Partnership opportunities */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <SectionHeader
            eyebrow="Partnership Opportunities"
            title="Become a CBFF-SME Partner"
            lead="Join the CBFF-SME as a strategic partner and position your institution at the forefront of African SME financing and market access."
          />
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {opportunities.map((o) => (
              <div key={o.num} style={{ border: "1px solid var(--border)", overflow: "hidden" }}>
                <div style={{ background: "var(--navy)", color: "var(--white)", padding: "16px 24px" }}>
                  <h3 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 16, fontWeight: 700 }}>{o.num}. {o.title}</h3>
                  <p style={{ fontSize: 12, color: "var(--gold)", marginTop: 3, fontStyle: "italic" }}>{o.tag}</p>
                </div>
                <div style={{ padding: "20px 24px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }} className="grid-2">
                    <div>
                      <div style={{ marginBottom: 12 }}>
                        <label style={{ display: "block", fontFamily: "var(--font-poppins),sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "var(--gold)", marginBottom: 4 }}>Target</label>
                        <p style={{ fontSize: 13.5 }}>{o.target}</p>
                      </div>
                      <div style={{ marginBottom: 12 }}>
                        <label style={{ display: "block", fontFamily: "var(--font-poppins),sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "var(--gold)", marginBottom: 4 }}>Strategic Rationale</label>
                        <p style={{ fontSize: 13.5, color: "var(--muted)" }}>{o.rationale}</p>
                      </div>
                      <div>
                        <label style={{ display: "block", fontFamily: "var(--font-poppins),sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "var(--gold)", marginBottom: 4 }}>Positioning</label>
                        <p style={{ fontSize: 13.5, color: "var(--muted)" }}>{o.positioning}</p>
                      </div>
                    </div>
                    <div>
                      <label style={{ display: "block", fontFamily: "var(--font-poppins),sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", color: "var(--gold)", marginBottom: 8 }}>Key Advantages</label>
                      <ul style={{ listStyle: "none", padding: 0 }}>
                        {o.advantages.map((a) => (
                          <li key={a} style={{ fontSize: 13.5, color: "var(--text)", padding: "4px 0" }}>
                            <span style={{ color: "var(--gold)", marginRight: 6 }}>▸</span>{a}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div style={{ background: "var(--light)", borderTop: "1px solid var(--border)", padding: "12px 24px" }}>
                  <p style={{ fontSize: 13 }}><strong style={{ color: "var(--gold)" }}>ROI:</strong> {o.roi}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .grid-2 { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
