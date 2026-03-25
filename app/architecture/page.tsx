"use client";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/locales/translations";

const pipelineColors = ["var(--navy)", "#2E6DAD", "var(--gold)", "#C9972B", "#1B3A5C"];

export default function ArchitecturePage() {
  const { lang } = useLanguage();
  const T = t[lang].architecture;
  const C = t[lang].common;

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

      {/* Pillars */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <SectionHeader eyebrow={T.sectionEyebrow} title={T.sectionTitle} lead={T.sectionLead} />
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {T.pillars.map((p, i) => (
              <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 20, background: "var(--white)", border: "1px solid var(--border)", padding: "22px 24px" }}>
                <div style={{ minWidth: 44, height: 44, background: "var(--navy)", color: "var(--white)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--font-poppins),sans-serif", fontSize: 20, fontWeight: 800, flexShrink: 0 }}>{i + 1}</div>
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
          <p style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 11, letterSpacing: 2, textTransform: "uppercase", color: "rgba(255,255,255,.5)", marginBottom: 16 }}>{T.transactionPipeline}</p>
          <div style={{ display: "flex", gap: 0, flexWrap: "wrap" }}>
            {T.pipeline.map((label, i) => (
              <div key={label} style={{ display: "flex", alignItems: "center" }}>
                <div style={{ background: pipelineColors[i], padding: "10px 20px", fontFamily: "var(--font-poppins),sans-serif", fontSize: 12, fontWeight: 700, color: "var(--white)", letterSpacing: 1, textTransform: "uppercase" }}>
                  {label}
                </div>
                {i < T.pipeline.length - 1 && <div style={{ width: 0, height: 0, borderTop: "20px solid transparent", borderBottom: "20px solid transparent", borderLeft: `14px solid ${pipelineColors[i]}` }} />}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deal Room */}
      <section style={{ padding: "80px 0", background: "var(--light)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <SectionHeader eyebrow={T.dealRoomEyebrow} title={T.dealRoomTitle} />
          <div style={{ background: "var(--navy)", color: "var(--white)", padding: "24px 28px", marginBottom: 32 }}>
            <p style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{T.dealRoomHighlight}</p>
            <p style={{ color: "rgba(255,255,255,.75)", fontSize: 14 }}>{T.dealRoomPurpose}</p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24 }} className="grid-2">
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-poppins),sans-serif", color: "var(--gold)", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>{T.functionsLabel}</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {T.dealFunctions.map((f) => (
                  <li key={f} style={{ padding: "6px 0", fontSize: 13.5, color: "var(--text)", borderBottom: "1px solid var(--border)" }}>
                    <span style={{ color: "var(--gold)", marginRight: 8 }}>•</span>{f}
                  </li>
                ))}
              </ul>
            </div>
            <div style={{ background: "var(--white)", border: "1px solid var(--border)", padding: "24px" }}>
              <h4 style={{ fontFamily: "var(--font-poppins),sans-serif", color: "var(--gold)", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", marginBottom: 16 }}>{T.sixPillarsLabel}</h4>
              <ul style={{ listStyle: "none", padding: 0 }}>
                {T.dealPillars.map((p) => (
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
          <p style={{ fontSize: 16, color: "var(--muted)", marginBottom: 24 }}>{T.ctaText}</p>
          <Link href="/program" style={{ display: "inline-block", padding: "13px 32px", fontFamily: "var(--font-poppins),sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", borderRadius: 2, background: "var(--gold)", color: "var(--white)", textDecoration: "none" }}>
            {C.viewForumProgram}
          </Link>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .grid-2 { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
