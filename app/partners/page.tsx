"use client";
import SectionHeader from "@/components/SectionHeader";
import LogoTicker from "@/components/LogoTicker";
import { Landmark, Building2, Globe } from "lucide-react";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/locales/translations";

const ackIcons = [Landmark, Building2, Globe];

export default function PartnersPage() {
  const { lang } = useLanguage();
  const T = t[lang].partners;

  return (
    <>
      <div style={{ background: "linear-gradient(135deg, var(--navy2) 0%, var(--navy) 100%)", padding: "120px 24px 60px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", fontWeight: 700, marginBottom: 12 }}>{T.eyebrow}</p>
          <h1 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "var(--white)", lineHeight: 1.2, maxWidth: 700 }}>
            {T.title}
          </h1>
        </div>
      </div>

      {/* Partnership matrix */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <SectionHeader eyebrow={T.matrixEyebrow} title={T.matrixTitle} lead={T.matrixLead} />
          <div style={{ overflowX: "auto" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontSize: 13.5 }}>
              <thead>
                <tr style={{ background: "var(--navy)", color: "var(--white)" }}>
                  {T.tableHeaders.map((h) => (
                    <th key={h} style={{ padding: "14px 16px", textAlign: "left", fontFamily: "var(--font-poppins),sans-serif", fontSize: 11, letterSpacing: 1.5, textTransform: "uppercase" }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {T.partners.map((p, i) => (
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
          <SectionHeader eyebrow={T.logosEyebrow} title={T.logosTitle} />
        </div>
        <LogoTicker />
      </section>

      {/* Acknowledgements */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <SectionHeader eyebrow={T.acknowledgementsEyebrow} title={T.acknowledgementsTitle} />
          <div style={{ background: "var(--navy)", color: "var(--white)", padding: "24px 28px", marginBottom: 40, textAlign: "center" }}>
            <h3 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 20, fontWeight: 700, color: "var(--gold)", marginBottom: 8 }}>{T.acknowledgementsHighlight}</h3>
            <p style={{ fontStyle: "italic", color: "rgba(255,255,255,.8)" }}>{T.acknowledgementsQuote}</p>
          </div>
          <p style={{ fontSize: 15, color: "var(--muted)", lineHeight: 1.8, marginBottom: 40, maxWidth: 800 }}>{T.acknowledgementsBody}</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 24 }} className="grid-3">
            {T.acknowledgements.map((a, i) => {
              const Icon = ackIcons[i];
              return (
                <div key={a.title} style={{ border: "1px solid var(--border)", padding: "28px 24px", textAlign: "center" }}>
                  <div style={{ width: 52, height: 52, borderRadius: "50%", background: "var(--light)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                    <Icon size={24} color="var(--gold)" />
                  </div>
                  <h4 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 15, fontWeight: 700, color: "var(--navy)", marginBottom: 10 }}>{a.title}</h4>
                  <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.7 }}>{a.desc}</p>
                </div>
              );
            })}
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
