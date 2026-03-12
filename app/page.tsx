import Link from "next/link";
import Image from "next/image";
import CountdownTimer from "@/components/CountdownTimer";
import { MapPin, Calendar, Users, Globe, Layers, Briefcase, Mail } from "lucide-react";

const capabilities = [
  { title: "✓ Trusted Enterprise Certification", desc: "Digital economic identities that reduce information asymmetry for banks and investors." },
  { title: "✓ Structured Access to Capital", desc: "A deal-driven financial marketplace connecting SMEs with banks and development finance institutions." },
  { title: "✓ AI-driven Global Market Access", desc: "Advanced trade intelligence to identify export opportunities and match SMEs with international buyers." },
  { title: "✓ Physical Gateways to International Buyers", desc: "A Made In... By Africa Concept Store in Brussels serving as an economic diplomacy platform." },
];

const stats = [
  { num: "~30 SMEs", desc: "High-potential enterprises prepared per pilot cohort / year" },
  { num: "$30–80M", desc: "Financing mobilized annually through CBFF platform" },
  { num: "$250–500M", desc: "Projected financing for 150+ SMEs over five years" },
];

const consortium = [
  { logo: "/net-kigali.webp",   initials: null,  name: "NET Kigali",           desc: "Rwanda-based hub driving financial infrastructure and SME development" },
  { logo: "/rebird_logo.png",   initials: null,  name: "Re-bird Belgium",       desc: "European bridge connecting African SMEs to EU markets and investors" },
  { logo: null,                 initials: "SBPME-UEMOA",  name: "SBPME-UEMOA",  desc: "West African regional SME finance and banking innovation platform" },
  { logo: null,                 initials: "CC",  name: "Congruence Consulting", desc: "Strategic advisory and programme management expertise" },
];

const exploreCards = [
  { href: "/about",        Icon: Globe,     title: "About & Background",    desc: "Origins, vision, objectives and why Rwanda was chosen as the pilot launch city." },
  { href: "/architecture", Icon: Layers,    title: "Project Architecture",  desc: "The five integrated pillars powering the CBFF-SME ecosystem." },
  { href: "/program",      Icon: Calendar,  title: "Forum Program",         desc: "Full three-day agenda covering policy, deal rooms, and site visits." },
  { href: "/partners",     Icon: Users,     title: "Strategic Partners",    desc: "The institutional ecosystem of banks, governments and innovation partners." },
  { href: "/sponsorship",  Icon: Briefcase, title: "Sponsorship",           desc: "Partnership tiers and sponsorship opportunities from Title to Silver." },
  { href: "/register",     Icon: Mail,      title: "Register",              desc: "Express interest as an SME, investor, bank, or institutional partner." },
];

const heroInfo = [
  { Icon: MapPin,   strong: "Kigali, Rwanda",         sub: "Host City" },
  { Icon: Calendar, strong: "August 9 – 11, 2026",    sub: "Three Days Forum" },
  { Icon: Users,    strong: "Deal Room & Networking", sub: "Investment Matchmaking" },
];

export default function Home() {
  return (
    <>
      {/* ── Hero ───────────────────────────────────── */}
      <section style={{
        minHeight: "100vh",
        backgroundImage: "url('/hero-bg.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex", flexDirection: "column",
        justifyContent: "center", alignItems: "center",
        textAlign: "center", position: "relative", overflow: "hidden",
        padding: "100px 24px 80px",
      }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,25,47,.92) 0%, rgba(10,25,47,.82) 45%, rgba(30,77,123,.85) 100%)", pointerEvents: "none" }} />

        <div style={{ border: "1px solid var(--gold)", color: "var(--white)", fontFamily: "var(--font-poppins),sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 3, textTransform: "uppercase", padding: "7px 20px", marginBottom: 28, position: "relative" }}>
          Kigali, Rwanda &nbsp;·&nbsp; August 9–11, 2026
        </div>

        <h1 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: "clamp(28px,5vw,58px)", fontWeight: 800, color: "var(--white)", lineHeight: 1.15, marginBottom: 16, position: "relative" }}>
          Cross-Border Finance<br /><span style={{ color: "var(--gold)" }}>Forum for SMEs</span>
        </h1>
        <p style={{ fontSize: "clamp(14px,2vw,18px)", color: "rgba(255,255,255,.8)", fontStyle: "italic", maxWidth: 680, margin: "0 auto 36px", position: "relative" }}>
          Building Africa&apos;s Trust, Finance and Market Access Infrastructure for SMEs
        </p>

        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 32, flexWrap: "wrap", marginBottom: 48, position: "relative" }}>
          {heroInfo.map((m) => (
            <div key={m.strong} style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(201,151,43,.2)", border: "1px solid var(--gold)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <m.Icon size={16} color="var(--gold)" />
              </div>
              <div style={{ textAlign: "left" }}>
                <strong style={{ display: "block", color: "var(--white)", fontFamily: "var(--font-poppins),sans-serif", fontSize: 15, fontWeight: 700 }}>{m.strong}</strong>
                <span style={{ color: "rgba(255,255,255,.6)", fontSize: 12 }}>{m.sub}</span>
              </div>
            </div>
          ))}
        </div>

        <div style={{ display: "flex", gap: 16, flexWrap: "wrap", justifyContent: "center", position: "relative" }}>
          <Link href="/register" style={{ display: "inline-block", padding: "13px 32px", fontFamily: "var(--font-poppins),sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", borderRadius: 2, background: "var(--gold)", color: "var(--white)", textDecoration: "none" }}>
            Register Now
          </Link>
          <Link href="/program" style={{ display: "inline-block", padding: "13px 32px", fontFamily: "var(--font-poppins),sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", borderRadius: 2, border: "2px solid var(--white)", color: "var(--white)", textDecoration: "none" }}>
            View Program
          </Link>
        </div>

        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0 }}>
          <CountdownTimer />
        </div>
      </section>

      {/* ── Consortium bar ─────────────────────────── */}
      <div style={{ background: "var(--navy2)", borderBottom: "2px solid var(--gold)", padding: "14px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
          <span style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 10, letterSpacing: 2, textTransform: "uppercase", color: "var(--gold)", marginRight: 12 }}>Consortium</span>
          {["NET Kigali", "Re-bird Belgium", "SBPME-UEMOA", "Congruence Consulting"].map((m, i, arr) => (
            <span key={m} style={{ display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 12, fontWeight: 600, color: "rgba(255,255,255,.85)", padding: "4px 14px", border: "1px solid rgba(255,255,255,.15)" }}>{m}</span>
              {i < arr.length - 1 && <span style={{ color: "var(--gold)", fontSize: 18 }}>·</span>}
            </span>
          ))}
        </div>
      </div>

      {/* ── Executive Message ──────────────────────── */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 13, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", fontWeight: 700, marginBottom: 10 }}>Executive Message</p>
          <h2 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: "clamp(22px,3vw,32px)", fontWeight: 700, color: "var(--navy)", marginBottom: 18 }}>Africa Lacks Trusted Pipelines</h2>
          <div style={{ width: 60, height: 3, background: "var(--gold)", marginBottom: 28 }} />
          <div style={{ borderLeft: "4px solid var(--gold)", padding: "20px 28px", background: "var(--light)", marginBottom: 40 }}>
            <p style={{ fontStyle: "italic", fontSize: 16, lineHeight: 1.8, color: "var(--navy)" }}>
              Africa does not lack entrepreneurs.<br />
              Africa does not lack capital.<br />
              <strong style={{ fontStyle: "normal", fontWeight: 700 }}>Africa lacks trusted pipelines connecting its enterprises to finance and global markets.</strong>
            </p>
          </div>
          <p style={{ fontSize: 15, color: "var(--muted)", maxWidth: 780, lineHeight: 1.8, marginBottom: 36 }}>
            The CBFF-SME initiative proposes to build this missing infrastructure by combining four essential capabilities
            in one integrated platform — creating a permanent ecosystem that connects SMEs with capital, markets, and strategic partners.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 20 }} className="grid-2">
            {capabilities.map((c) => (
              <div key={c.title} style={{ background: "var(--white)", border: "1px solid var(--border)", borderTop: "3px solid var(--gold)", padding: "22px 24px" }}>
                <h4 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 14, fontWeight: 700, color: "var(--navy)", marginBottom: 6 }}>{c.title}</h4>
                <p style={{ fontSize: 13.5, color: "var(--muted)" }}>{c.desc}</p>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 40, textAlign: "center" }}>
            <Link href="/about" style={{ display: "inline-block", padding: "13px 32px", fontFamily: "var(--font-poppins),sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", borderRadius: 2, background: "var(--navy)", color: "var(--white)", textDecoration: "none" }}>
              Learn More
            </Link>
          </div>
        </div>
      </section>

      {/* ── Stats bar ──────────────────────────────── */}
      <div style={{ background: "var(--gold)", padding: "44px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px", display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 1, background: "rgba(255,255,255,.3)" }} className="stats-grid">
          {stats.map((s) => (
            <div key={s.num} style={{ textAlign: "center", padding: "28px 20px", background: "var(--gold)" }}>
              <div style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: "clamp(26px,3.5vw,42px)", fontWeight: 800, color: "var(--white)", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontSize: 12, color: "rgba(255,255,255,.85)", marginTop: 8 }}>{s.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Consortium cards ───────────────────────── */}
      <section style={{ padding: "80px 0", background: "var(--light)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 13, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", fontWeight: 700, marginBottom: 10 }}>Consortium</p>
          <h2 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: "clamp(22px,3vw,32px)", fontWeight: 700, color: "var(--navy)", marginBottom: 18 }}>Our Organising Consortium</h2>
          <div style={{ width: 60, height: 3, background: "var(--gold)", marginBottom: 40 }} />
        </div>
        <div style={{ background: "var(--navy)", padding: "48px 24px" }}>
          <div style={{ maxWidth: 1160, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16 }} className="consortium-cards">
            {consortium.map((c) => (
              <div key={c.name} style={{ border: "1px solid rgba(255,255,255,.15)", padding: "22px 16px", textAlign: "center" }}>
                <div style={{ width: 96, height: 56, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", overflow: "hidden" }}>
                  {c.logo ? (
                    <Image src={c.logo} alt={c.name} width={80} height={44} style={{ objectFit: "contain", maxWidth: "100%", maxHeight: "100%", filter: "brightness(0) invert(1)" }} />
                  ) : (
                    <span style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 13, fontWeight: 800, color: "var(--gold)", letterSpacing: 1, textAlign: "center", lineHeight: 1.3 }}>{c.initials}</span>
                  )}
                </div>
                <h4 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 14, color: "var(--white)", fontWeight: 700, marginBottom: 4 }}>{c.name}</h4>
                <p style={{ fontSize: 12, color: "rgba(255,255,255,.55)" }}>{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Explore cards ──────────────────────────── */}
      <section style={{ padding: "80px 0" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <p style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 13, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", fontWeight: 700, marginBottom: 10 }}>Explore</p>
          <h2 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: "clamp(22px,3vw,32px)", fontWeight: 700, color: "var(--navy)", marginBottom: 18 }}>What&apos;s Inside</h2>
          <div style={{ width: 60, height: 3, background: "var(--gold)", marginBottom: 40 }} />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="explore-grid">
            {exploreCards.map((c) => (
              <Link key={c.href} href={c.href} style={{ display: "block", border: "1px solid var(--border)", borderTop: "3px solid var(--gold)", padding: "28px 24px", textDecoration: "none" }}>
                <div style={{ width: 44, height: 44, borderRadius: 6, background: "var(--light)", border: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 14 }}>
                  <c.Icon size={20} color="var(--gold)" />
                </div>
                <h3 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 15, fontWeight: 700, color: "var(--navy)", marginBottom: 8 }}>{c.title}</h3>
                <p style={{ fontSize: 13.5, color: "var(--muted)", lineHeight: 1.6 }}>{c.desc}</p>
                <div style={{ marginTop: 16, fontSize: 12, color: "var(--gold)", fontWeight: 700, fontFamily: "var(--font-poppins),sans-serif", letterSpacing: 1, textTransform: "uppercase" }}>
                  Explore →
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .grid-2 { grid-template-columns: 1fr !important; }
          .stats-grid { grid-template-columns: 1fr !important; }
          .consortium-cards { grid-template-columns: 1fr !important; }
          .explore-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 641px) and (max-width: 900px) {
          .consortium-cards { grid-template-columns: repeat(2,1fr) !important; }
          .explore-grid { grid-template-columns: repeat(2,1fr) !important; }
        }
      `}</style>
    </>
  );
}
