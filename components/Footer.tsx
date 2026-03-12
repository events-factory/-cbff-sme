import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { href: "/about",        label: "About CBFF-SME" },
  { href: "/architecture", label: "Architecture" },
  { href: "/program",      label: "Forum Program" },
  { href: "/partners",     label: "Partners" },
  { href: "/sponsorship",  label: "Sponsorship" },
  { href: "/register",     label: "Register" },
];

export default function Footer() {
  return (
    <footer style={{ background: "var(--navy2)", borderTop: "2px solid var(--gold)", color: "rgba(255,255,255,.6)", padding: "40px 0 24px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr",
            gap: 48,
            marginBottom: 32,
          }}
          className="footer-grid"
        >
          <div>
            <Image src="/CBFF_logo_original_transparent.png" alt="CBFF-SME" width={120} height={60} style={{ objectFit: "contain", marginBottom: 14, filter: "brightness(0) invert(1)" }} />
            <p style={{ fontSize: 13, lineHeight: 1.7, maxWidth: 280 }}>
              Building Africa's Trust, Finance and Market Access Infrastructure for SMEs.
              Kigali, Rwanda — August 9–11, 2026.
            </p>
          </div>
          <div>
            <h4 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--gold)", marginBottom: 14 }}>
              Navigation
            </h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {navLinks.map((l) => (
                <li key={l.href} style={{ padding: "4px 0", fontSize: 13 }}>
                  <Link href={l.href} style={{ color: "rgba(255,255,255,.6)", textDecoration: "none" }}>
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--gold)", marginBottom: 14 }}>
              Contact
            </h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {["info@netkigali.com", "+250 788 991 551 (Kigali)", "+32 487 568 199 (Brussels)"].map((t) => (
                <li key={t} style={{ padding: "4px 0", fontSize: 13 }}>{t}</li>
              ))}
            </ul>
            <h4 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 11, fontWeight: 700, letterSpacing: 2, textTransform: "uppercase", color: "var(--gold)", marginBottom: 14, marginTop: 20 }}>
              Consortium
            </h4>
            <ul style={{ listStyle: "none", padding: 0 }}>
              {["NET Kigali", "Re-bird Belgium", "SBPME-UEMOA", "Congruence Consulting"].map((t) => (
                <li key={t} style={{ padding: "4px 0", fontSize: 13 }}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
        <div style={{ borderTop: "1px solid rgba(255,255,255,.1)", paddingTop: 18, textAlign: "center", fontSize: 12 }}>
          <p>© 2026 CBFF-SME — Cross-Border Finance Forum for SMEs. All rights reserved.</p>
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
      `}</style>
    </footer>
  );
}
