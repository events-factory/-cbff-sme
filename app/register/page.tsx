"use client";
import { useState } from "react";

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <>
      <div style={{ background: "linear-gradient(135deg, var(--navy2) 0%, var(--navy) 100%)", padding: "120px 24px 60px" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto" }}>
          <p style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 11, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", fontWeight: 700, marginBottom: 12 }}>Get Involved</p>
          <h1 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: "clamp(28px,4vw,48px)", fontWeight: 800, color: "var(--white)", lineHeight: 1.2, maxWidth: 700 }}>
            Register &amp; Contact
          </h1>
        </div>
      </div>

      <section style={{ padding: "80px 0", background: "var(--navy)" }}>
        <div style={{ maxWidth: 1160, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 48, alignItems: "start" }} className="contact-grid">

            {/* Contact info */}
            <div>
              <p style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 13, letterSpacing: 3, textTransform: "uppercase", color: "var(--gold)", fontWeight: 700, marginBottom: 10 }}>Contact Us</p>
              <h3 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 22, fontWeight: 700, color: "var(--white)", marginBottom: 20 }}>
                Register or Partner with CBFF-SME
              </h3>
              <p style={{ color: "rgba(255,255,255,.7)", marginBottom: 32, lineHeight: 1.8 }}>
                Whether you are an SME seeking financing, a bank or investor exploring opportunities,
                or an institution interested in partnership, we welcome your participation.
              </p>

              {[
                { icon: "✉️", label: "Email",           value: "info@netkigali.com" },
                { icon: "📞", label: "Kigali Office",   value: "+250 788 991 551" },
                { icon: "📞", label: "Brussels Office", value: "+32 487 568 199" },
              ].map((c) => (
                <div key={c.label} style={{ display: "flex", alignItems: "flex-start", gap: 14, marginBottom: 18 }}>
                  <div style={{ width: 40, height: 40, background: "rgba(201,151,43,.2)", border: "1px solid var(--gold)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 17, flexShrink: 0 }}>{c.icon}</div>
                  <div>
                    <strong style={{ display: "block", color: "var(--white)", fontSize: 13, marginBottom: 2 }}>{c.label}</strong>
                    <span style={{ color: "rgba(255,255,255,.65)", fontSize: 14 }}>{c.value}</span>
                  </div>
                </div>
              ))}

              <div style={{ marginTop: 32, padding: 20, border: "1px solid rgba(201,151,43,.3)", background: "rgba(201,151,43,.08)" }}>
                <p style={{ fontSize: 13, color: "rgba(255,255,255,.7)", lineHeight: 1.8 }}>
                  <strong style={{ color: "var(--gold)" }}>NETKigali · Re-bird Belgium · SBPME-UEMOA · Congruence Consulting</strong>
                </p>
              </div>
            </div>

            {/* Form */}
            <div style={{ background: "var(--white)", padding: 36 }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "40px 0" }}>
                  <div style={{ fontSize: 48, marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 22, fontWeight: 700, color: "var(--navy)", marginBottom: 12 }}>Registration Received!</h3>
                  <p style={{ color: "var(--muted)", fontSize: 15 }}>Thank you for your interest. We will be in touch shortly.</p>
                </div>
              ) : (
                <>
                  <h3 style={{ fontFamily: "var(--font-poppins),sans-serif", fontSize: 20, fontWeight: 700, color: "var(--navy)", marginBottom: 24 }}>Express Interest</h3>
                  <form onSubmit={handleSubmit}>
                    <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                      {[{ label: "First Name *", type: "text", placeholder: "First name" }, { label: "Last Name *", type: "text", placeholder: "Last name" }].map((f) => (
                        <div key={f.label}>
                          <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--muted)", marginBottom: 6, textTransform: "uppercase", letterSpacing: .5 }}>{f.label}</label>
                          <input required type={f.type} placeholder={f.placeholder} style={{ width: "100%", padding: "11px 14px", border: "1px solid var(--border)", fontFamily: "inherit", fontSize: 14, color: "var(--text)", outline: "none" }} />
                        </div>
                      ))}
                    </div>
                    {[
                      { label: "Email Address *", type: "email", placeholder: "your@email.com", required: true },
                      { label: "Organisation",    type: "text",  placeholder: "Company / Institution", required: false },
                    ].map((f) => (
                      <div key={f.label} style={{ marginBottom: 16 }}>
                        <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--muted)", marginBottom: 6, textTransform: "uppercase", letterSpacing: .5 }}>{f.label}</label>
                        <input required={f.required} type={f.type} placeholder={f.placeholder} style={{ width: "100%", padding: "11px 14px", border: "1px solid var(--border)", fontFamily: "inherit", fontSize: 14, color: "var(--text)", outline: "none" }} />
                      </div>
                    ))}
                    <div style={{ marginBottom: 16 }}>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--muted)", marginBottom: 6, textTransform: "uppercase", letterSpacing: .5 }}>I am interested as</label>
                      <select style={{ width: "100%", padding: "11px 14px", border: "1px solid var(--border)", fontFamily: "inherit", fontSize: 14, color: "var(--text)", outline: "none", background: "var(--white)" }}>
                        <option value="">Select your profile</option>
                        {["SME seeking financing", "Bank / Financial Institution", "Investor / Fund", "Government / Public Institution", "Sponsor / Partner", "Media / Press", "Other"].map((o) => (
                          <option key={o} value={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <label style={{ display: "block", fontSize: 12, fontWeight: 600, color: "var(--muted)", marginBottom: 6, textTransform: "uppercase", letterSpacing: .5 }}>Message</label>
                      <textarea placeholder="Tell us about your interest or questions..." style={{ width: "100%", padding: "11px 14px", border: "1px solid var(--border)", fontFamily: "inherit", fontSize: 14, color: "var(--text)", outline: "none", minHeight: 90, resize: "vertical" }} />
                    </div>
                    <button type="submit" style={{ width: "100%", padding: "13px 32px", fontFamily: "var(--font-poppins),sans-serif", fontSize: 13, fontWeight: 700, letterSpacing: 1, textTransform: "uppercase", background: "var(--gold)", color: "var(--white)", border: "none", cursor: "pointer", borderRadius: 2 }}>
                      Submit Registration
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}
