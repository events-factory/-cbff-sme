"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown } from "lucide-react";

const links = [
  { href: "/about",        label: "About" },
  { href: "/architecture", label: "Architecture" },
  { href: "/program",      label: "Program" },
  { href: "/partners",     label: "Partners" },
  { href: "/sponsorship",  label: "Sponsor" },
];

const eventLinks = [
  { href: "/program",      label: "Forum Program",        desc: "Full 3-day agenda" },
  { href: "/architecture", label: "Deal Room",            desc: "Investment marketplace" },
  { href: "/partners",     label: "Strategic Partners",   desc: "Institutional ecosystem" },
  { href: "/sponsorship",  label: "Sponsorship",          desc: "Partnership opportunities" },
  { href: "/register",     label: "Register to Attend",   desc: "Express your interest" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [eventsOpen, setEventsOpen] = useState(false);
  const [mobileEventsOpen, setMobileEventsOpen] = useState(false);
  const eventsRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (eventsRef.current && !eventsRef.current.contains(e.target as Node)) {
        setEventsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: "rgba(15,37,64,.96)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(201,151,43,.2)",
        boxShadow: scrolled ? "0 4px 24px rgba(0,0,0,.4)" : "none",
        transition: "box-shadow .3s",
      }}
    >
      <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>
          {/* Brand */}
          <Link href="/" style={{ display: "flex", alignItems: "center", textDecoration: "none" }}>
            <Image src="/CBFF_logo_gold.png" alt="CBFF-SME" width={120} height={60} style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }} />
          </Link>

          {/* Desktop links */}
          <div className="nav-desktop" style={{ display: "flex", alignItems: "center", gap: 4 }}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                style={{
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: 11.5, fontWeight: 600, letterSpacing: 1,
                  textTransform: "uppercase",
                  color: pathname === l.href ? "var(--gold2)" : "rgba(255,255,255,.8)",
                  padding: "8px 12px", borderRadius: 2,
                  transition: "color .2s", textDecoration: "none",
                  borderBottom: pathname === l.href ? "2px solid var(--gold)" : "2px solid transparent",
                }}
              >
                {l.label}
              </Link>
            ))}

            {/* Events dropdown */}
            <div ref={eventsRef} style={{ position: "relative" }}>
              <button
                onClick={() => setEventsOpen(!eventsOpen)}
                style={{
                  display: "flex", alignItems: "center", gap: 4,
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: 11.5, fontWeight: 600, letterSpacing: 1,
                  textTransform: "uppercase",
                  color: eventsOpen ? "var(--gold2)" : "rgba(255,255,255,.8)",
                  padding: "8px 12px", borderRadius: 2,
                  background: "none", border: "none", cursor: "pointer",
                  borderBottom: eventsOpen ? "2px solid var(--gold)" : "2px solid transparent",
                  transition: "color .2s",
                }}
              >
                Events
                <ChevronDown size={13} style={{ transition: "transform .2s", transform: eventsOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
              </button>

              {eventsOpen && (
                <div style={{
                  position: "absolute", top: "calc(100% + 8px)", right: 0,
                  background: "var(--navy2)", border: "1px solid rgba(201,151,43,.3)",
                  borderTop: "2px solid var(--gold)",
                  minWidth: 240, zIndex: 100,
                  boxShadow: "0 8px 32px rgba(0,0,0,.4)",
                }}>
                  {eventLinks.map((e, i) => (
                    <Link
                      key={e.href}
                      href={e.href}
                      onClick={() => setEventsOpen(false)}
                      style={{
                        display: "block", padding: "12px 18px",
                        textDecoration: "none",
                        borderBottom: i < eventLinks.length - 1 ? "1px solid rgba(255,255,255,.07)" : "none",
                        background: pathname === e.href ? "rgba(201,151,43,.1)" : "transparent",
                        transition: "background .15s",
                      }}
                      onMouseEnter={ev => (ev.currentTarget.style.background = "rgba(201,151,43,.12)")}
                      onMouseLeave={ev => (ev.currentTarget.style.background = pathname === e.href ? "rgba(201,151,43,.1)" : "transparent")}
                    >
                      <div style={{ fontFamily: "var(--font-poppins), sans-serif", fontSize: 12, fontWeight: 700, color: pathname === e.href ? "var(--gold)" : "var(--white)", letterSpacing: .5, marginBottom: 2 }}>{e.label}</div>
                      <div style={{ fontSize: 11, color: "rgba(255,255,255,.45)" }}>{e.desc}</div>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/register"
              style={{
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: 11.5, fontWeight: 700, letterSpacing: 1,
                textTransform: "uppercase",
                background: "var(--gold)", color: "var(--white)",
                padding: "9px 20px", borderRadius: 2,
                textDecoration: "none", marginLeft: 8,
                transition: "background .2s",
              }}
            >
              Register
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            style={{
              display: "none", flexDirection: "column", gap: 5,
              background: "none", border: "none", cursor: "pointer", padding: 4,
            }}
            className="nav-toggle"
            aria-label="Toggle menu"
          >
            {[0,1,2].map((i) => (
              <span key={i} style={{ display: "block", width: 24, height: 2, background: "var(--white)" }} />
            ))}
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div style={{
            background: "var(--navy2)", borderBottom: "2px solid var(--gold)",
            padding: "16px 0",
          }}>
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block", padding: "12px 24px",
                  fontFamily: "var(--font-poppins), sans-serif",
                  fontSize: 12, fontWeight: 600, letterSpacing: 1,
                  textTransform: "uppercase",
                  color: pathname === l.href ? "var(--gold2)" : "rgba(255,255,255,.8)",
                  textDecoration: "none",
                }}
              >
                {l.label}
              </Link>
            ))}

            {/* Mobile Events accordion */}
            <button
              onClick={() => setMobileEventsOpen(!mobileEventsOpen)}
              style={{
                display: "flex", alignItems: "center", justifyContent: "space-between",
                width: "100%", padding: "12px 24px",
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: 12, fontWeight: 600, letterSpacing: 1,
                textTransform: "uppercase",
                color: "rgba(255,255,255,.8)",
                background: "none", border: "none", cursor: "pointer",
              }}
            >
              Events
              <ChevronDown size={13} style={{ transition: "transform .2s", transform: mobileEventsOpen ? "rotate(180deg)" : "rotate(0deg)" }} />
            </button>
            {mobileEventsOpen && (
              <div style={{ borderTop: "1px solid rgba(255,255,255,.08)", borderBottom: "1px solid rgba(255,255,255,.08)" }}>
                {eventLinks.map((e) => (
                  <Link
                    key={e.href}
                    href={e.href}
                    onClick={() => { setOpen(false); setMobileEventsOpen(false); }}
                    style={{
                      display: "block", padding: "10px 36px",
                      fontFamily: "var(--font-poppins), sans-serif",
                      fontSize: 12, fontWeight: 600,
                      color: pathname === e.href ? "var(--gold)" : "rgba(255,255,255,.7)",
                      textDecoration: "none",
                    }}
                  >
                    {e.label}
                  </Link>
                ))}
              </div>
            )}

            <Link
              href="/register"
              onClick={() => setOpen(false)}
              style={{
                display: "block", padding: "12px 24px",
                fontFamily: "var(--font-poppins), sans-serif",
                fontSize: 12, fontWeight: 600, letterSpacing: 1,
                textTransform: "uppercase",
                color: "var(--gold)", textDecoration: "none",
              }}
            >
              Register
            </Link>
          </div>
        )}
      </div>

      <style>{`
        @media (max-width: 900px) {
          .nav-desktop { display: none !important; }
          .nav-toggle  { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
