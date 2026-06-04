// Contact.jsx — closing statement (left) + contact details (right), then footer line.
function Contact() {
  return (
    <footer id="contact" style={{ padding: "96px var(--gutter) 36px", borderTop: "1px solid var(--hair)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div className="contact-grid" style={{ display: "grid", gridTemplateColumns: "1fr 0.7fr", gap: 56, alignItems: "start" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(44px, 6vw, 92px)", lineHeight: 1.0,
            letterSpacing: "-0.02em", color: "var(--cream)", margin: 0, textWrap: "balance" }}>
            Let's make something <em style={{ fontStyle: "italic", fontWeight: 500, color: "var(--gold)" }}>real.</em>
          </h2>
          <div style={{ paddingTop: 8 }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase",
              color: "var(--gold)", margin: "0 0 24px", fontWeight: 500 }}>Contact</p>
            <a href="mailto:seydoulevi1@gmail.com" style={{ display: "block", fontFamily: "var(--font-body)",
              fontSize: "clamp(18px, 1.6vw, 24px)", color: "var(--cream)", textDecoration: "none", marginBottom: 16 }}>
              seydoulevi1@gmail.com
            </a>
            <a href="tel:+18162169235" style={{ display: "block", fontFamily: "var(--font-body)",
              fontSize: "clamp(18px, 1.6vw, 24px)", color: "var(--cream)", textDecoration: "none", marginBottom: 16 }}>
              (816) 216-9235
            </a>
            <p style={{ fontFamily: "var(--font-body)", fontSize: 17, color: "var(--muted)", margin: 0 }}>
              Oklahoma · Available to travel
            </p>
          </div>
        </div>
        <div style={{ marginTop: 80, paddingTop: 28, borderTop: "1px solid var(--hair)" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, color: "var(--muted)", letterSpacing: "0.02em", margin: 0 }}>
            © 2026 Levi Seydou — Photography &amp; Film. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
Object.assign(window, { Contact });
