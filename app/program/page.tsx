"use client";
import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/lib/LanguageContext";
import { t } from "@/locales/translations";

export default function ProgramPage() {
  const { lang } = useLanguage();
  const T = t[lang].program;
  const C = t[lang].common;

  const [active, setActive] = useState(0);
  const day = T.days[active];

  return (
    <>
      <div style={{ background: "linear-gradient(135deg, var(--navy2) 0%, var(--navy) 100%)", padding: "120px 24px 60px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", fontWeight: 700, marginBottom: 12 }}>{T.eyebrow}</p>
          <h1 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "var(--white)", lineHeight: 1.2, maxWidth: 700 }}>
            {T.title}
          </h1>
          <p style={{ color: "rgba(255,255,255,.7)", marginTop: 16, fontSize: 15, maxWidth: 600 }}>
            {T.subtitle}
          </p>
        </div>
      </div>

      {/* Forum overview card */}
      <div style={{ background: "var(--light)", borderBottom: "1px solid var(--border)", padding: "32px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "var(--border)" }} className="forum-meta-grid">
            {[
              { label: T.location, value: T.locationValue },
              { label: T.dates, value: T.datesValue },
              { label: T.objective, value: T.objectiveValue },
            ].map((item) => (
              <div key={item.label} style={{ background: "var(--white)", padding: "20px 24px" }}>
                <div style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 1.5, textTransform: "uppercase", color: "var(--gold)", marginBottom: 6 }}>{item.label}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: "var(--navy)", lineHeight: 1.5 }}>{item.value}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section style={{ padding: "60px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          {/* Tabs */}
          <div style={{ display: "flex", gap: 4, marginBottom: 32, flexWrap: "wrap" }}>
            {T.days.map((d, idx) => (
              <button
                key={idx}
                onClick={() => setActive(idx)}
                style={{
                  fontFamily: "var(--font-poppins),sans-serif", fontSize: 12, fontWeight: 700,
                  letterSpacing: 1, textTransform: "uppercase", padding: "11px 28px",
                  border: "2px solid", cursor: "pointer", transition: "all .2s",
                  borderColor: active === idx ? "var(--navy)" : "var(--border)",
                  background: active === idx ? "var(--navy)" : "none",
                  color: active === idx ? "var(--white)" : "var(--muted)",
                }}
              >
                {d.label} — {d.date.split(",")[0]}
              </button>
            ))}
          </div>

          {/* Day header */}
          <div style={{ background: "var(--navy)", color: "var(--white)", padding: "18px 28px", marginBottom: 2 }}>
            <h3 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 18, fontWeight: 700 }}>
              {active === 0 ? T.avantPremiere.toUpperCase() : `${T.day.toUpperCase()} ${active}`} — {day.date}
            </h3>
            <p style={{ color: "var(--gold)", fontSize: 13, fontStyle: "italic", marginTop: 4 }}>{day.theme}</p>
          </div>

          {/* Sessions */}
          <div style={{ border: "1px solid var(--border)", borderTop: "none" }}>
            {day.sessions.map((s, i) => (
              <div
                key={i}
                style={{
                  display: "flex", gap: 0, borderBottom: "1px solid var(--border)",
                  background: s.isBreak ? "#fdf8ed" : "var(--white)",
                }}
              >
                <div style={{
                  minWidth: 130, padding: "16px 20px",
                  fontFamily: "var(--font-poppins),sans-serif", fontSize: 12, fontWeight: 700,
                  color: s.isBreak ? "var(--gold)" : "var(--navy)",
                  borderRight: "1px solid var(--border)", flexShrink: 0,
                }}>
                  {s.time}
                </div>
                <div style={{ padding: "14px 20px", flex: 1 }}>
                  <h4 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 14, fontWeight: 700, color: s.isBreak ? "var(--gold)" : "var(--navy)", marginBottom: 3, fontStyle: s.isBreak ? "italic" : "normal" }}>
                    {s.title}
                  </h4>
                  {s.org && <div style={{ fontSize: 12, color: "var(--gold)", fontStyle: "italic", marginBottom: 6 }}>{s.org}</div>}
                  {s.bullets && !s.isBreak && (
                    <ul style={{ listStyle: "none", padding: 0 }}>
                      {s.bullets.map((b) => (
                        <li key={b} style={{ fontSize: 13, color: "var(--muted)", padding: "1px 0" }}>
                          <span style={{ color: "var(--gold)" }}>— </span>{b}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: 48, textAlign: "center" }}>
            <Link href="/register" style={{ display: "inline-block", padding: "13px 32px", fontFamily: "var(--font-poppins),sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", borderRadius: 2, background: "var(--gold)", color: "var(--white)", textDecoration: "none" }}>
              {C.registerToAttend}
            </Link>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .forum-meta-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  );
}
