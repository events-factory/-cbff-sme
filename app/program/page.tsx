"use client";
import { useState } from "react";
import Link from "next/link";

type Session = { time: string; title: string; org?: string; bullets?: string[]; isBreak?: boolean };
type Day = { id: string; label: string; date: string; theme: string; sessions: Session[] };

const days: Day[] = [
  {
    id: "day1", label: "Day 1", date: "Sunday, August 9, 2026",
    theme: "Policy Leadership, SME Growth & Market Access",
    sessions: [
      { time: "08:30–09:00", title: "Registration & Networking Breakfast", bullets: ["SMEs, banks, investors, trade institutions, development partners"] },
      { time: "09:00–09:30", title: "Opening Ceremony — Rwanda as Gateway for SME Investment in Africa", org: "RDB · Ministry of Finance · Ministry of Trade", bullets: ["Rwanda's investment strategy", "Strengthening the SME ecosystem", "Positioning Kigali as a continental finance hub"] },
      { time: "09:30–10:15", title: "Policy Dialogue — Financing the Next Generation of African SMEs", org: "Ministry of Finance and Economic Planning", bullets: ["Closing the SME financing gap", "Mobilizing domestic and international capital"] },
      { time: "10:15–11:00", title: "Financial Stability — Creating a Trusted SME Financial Ecosystem", org: "National Bank of Rwanda", bullets: ["Financial sector regulation & SME credit frameworks", "Strengthening confidence in SME lending"] },
      { time: "11:00–11:30", title: "Coffee Break", isBreak: true },
      { time: "11:30–12:30", title: "Banking Leaders Panel — Unlocking Bank Financing for African SMEs", org: "Bank of Kigali · I&M Bank · Bank of Africa", bullets: ["SME lending strategies", "Trade finance opportunities", "Cross-border banking solutions"] },
      { time: "12:30–14:00", title: "Networking Lunch", isBreak: true },
      { time: "14:00–15:00", title: "Risk & Financing Solutions — Reducing Risk to Unlock SME Financing", org: "FAGACE", bullets: ["Credit guarantees for SMEs", "Risk mitigation for banks", "Improving SME bankability"] },
      { time: "15:00–16:00", title: "Digital Economy — Digital Infrastructure for SME Growth", org: "Smart Africa", bullets: ["Digital trust infrastructure", "Digital identity for SMEs", "Scaling African digital platforms"] },
      { time: "16:00–17:00", title: "Global Market Intelligence — Finding International Buyers for African Products", org: "World Trade IA", bullets: ["Export market analysis", "Identifying global demand", "Connecting SMEs with buyers"] },
      { time: "17:00–18:00", title: "SME Investment Pitch Session — The CBFF Investment Pipeline", org: "Selected SMEs", bullets: ["Growth strategy & financing needs", "Export potential", "Audience: banks, investors, trade institutions"] },
      { time: "19:00–21:00", title: "Official Networking Reception", isBreak: true },
    ],
  },
  {
    id: "day2", label: "Day 2", date: "Monday, August 10, 2026",
    theme: "CBFF Deal Room — Africa's SME Investment Marketplace",
    sessions: [
      { time: "09:00–09:30", title: "Deal Room Opening — From Dialogue to Investment", org: "Rwanda Development Board", bullets: ["Presentation of SME investment pipeline", "Financing opportunities & Deal Room structure"] },
      { time: "09:30–12:30", title: "Deal Room Meetings — Round 1", org: "Bank of Kigali · I&M Bank · Bank of Africa · FAGACE", bullets: ["Bilateral meetings: SMEs, banks, investors, guarantee institutions", "Focus: financing structure, trade finance, guarantees"] },
      { time: "12:30–14:00", title: "Investor & SME Networking Lunch", isBreak: true },
      { time: "14:00–16:30", title: "Deal Room Meetings — Round 2", bullets: ["Advanced negotiations: financing commitments, partnerships, due diligence"] },
      { time: "16:30–17:30", title: "Closing Session — Financing African SMEs: The Road Ahead", org: "Ministry of Trade · Rwanda Development Board", bullets: ["Strengthening Africa's SME ecosystem through financing, trade and digital transformation"] },
      { time: "Evening", title: "Optional Networking Reception", isBreak: true, bullets: ["Informal meetings between investors and entrepreneurs"] },
    ],
  },
  {
    id: "day3", label: "Day 3", date: "Tuesday, August 11, 2026",
    theme: "Site Visits, Bilateral Meetings & Follow-ups",
    sessions: [
      { time: "09:00–12:00", title: "Bilateral Follow-up Meetings", org: "SMEs & Financial Institutions", bullets: ["Continued deal room negotiations", "Documentation review & term sheet discussions"] },
      { time: "09:00–12:00", title: "Site Visits — Kigali Innovation & Business District", bullets: ["Visits to key Rwandan enterprises and innovation hubs", "Showcasing Rwanda's business environment"] },
      { time: "12:30–14:00", title: "Farewell Lunch & Networking", isBreak: true },
      { time: "14:00–16:00", title: "Debriefing Session — Next Steps", org: "CBFF Consortium", bullets: ["Summary of deals and commitments signed", "Roadmap for post-forum follow-up", "Announcement of next CBFF edition"] },
    ],
  },
];

export default function ProgramPage() {
  const [active, setActive] = useState("day1");
  const day = days.find((d) => d.id === active)!;

  return (
    <>
      <div style={{ background: "linear-gradient(135deg, var(--navy2) 0%, var(--navy) 100%)", padding: "120px 24px 60px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", fontWeight: 700, marginBottom: 12 }}>Forum Program</p>
          <h1 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "var(--white)", lineHeight: 1.2, maxWidth: 700 }}>
            Kigali CBFF — August 9–11, 2026
          </h1>
          <p style={{ color: "rgba(255,255,255,.7)", marginTop: 16, fontSize: 15, maxWidth: 600 }}>
            Three intensive days combining high-level policy dialogue, deal room matchmaking, bilateral negotiations, and site visits.
          </p>
        </div>
      </div>

      {/* Forum overview card */}
      <div style={{ background: "var(--light)", borderBottom: "1px solid var(--border)", padding: "32px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "var(--border)" }} className="forum-meta-grid">
            {[
              { label: "Location", value: "Kigali, Rwanda" },
              { label: "Dates", value: "August 9 – 11, 2026" },
              { label: "Core Objective", value: "Mobilize financing, trade opportunities and international partnerships for African SMEs" },
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
            {days.map((d) => (
              <button
                key={d.id}
                onClick={() => setActive(d.id)}
                style={{
                  fontFamily: "var(--font-poppins),sans-serif", fontSize: 12, fontWeight: 700,
                  letterSpacing: 1, textTransform: "uppercase", padding: "11px 28px",
                  border: "2px solid", cursor: "pointer", transition: "all .2s",
                  borderColor: active === d.id ? "var(--navy)" : "var(--border)",
                  background: active === d.id ? "var(--navy)" : "none",
                  color: active === d.id ? "var(--white)" : "var(--muted)",
                }}
              >
                {d.label} — {d.date.split(",")[0]}
              </button>
            ))}
          </div>

          {/* Day header */}
          <div style={{ background: "var(--navy)", color: "var(--white)", padding: "18px 28px", marginBottom: 2 }}>
            <h3 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 18, fontWeight: 700 }}>DAY {days.indexOf(day) + 1} — {day.date}</h3>
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
              Register to Attend →
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
