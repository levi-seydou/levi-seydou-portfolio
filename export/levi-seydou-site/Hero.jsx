// Hero.jsx — portrait left, oversized name right. Warm dark with a soft top glow.
function Hero() {
  return (
    <section id="top" style={{ padding: "0 var(--gutter)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", minHeight: "calc(100vh - 84px)",
        display: "grid", gridTemplateColumns: "minmax(0, 0.82fr) 1fr", gap: 72, alignItems: "center" }} className="hero-grid">
        {/* Portrait */}
        <div className="hero-portrait" style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "100%", maxWidth: 460 }}>
            <Photo src="assets/portrait.jpg" alt="Levi Seydou" aspect="4 / 5" radius={10} shadow={true} />
          </div>
        </div>
        {/* Name + meta */}
        <div className="hero-text">
          <p style={{ fontFamily: "var(--font-body)", fontSize: 14, letterSpacing: "0.22em", textTransform: "uppercase",
            color: "var(--gold)", margin: "0 0 30px", fontWeight: 500 }}>
            Freelance Photographer &amp; Videographer
          </p>
          <h1 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(72px, 10vw, 150px)", lineHeight: 0.92,
            letterSpacing: "-0.02em", color: "var(--cream)", margin: "0 0 32px" }}>
            Levi<br /><em style={{ fontStyle: "italic", fontWeight: 500, color: "var(--gold)" }}>Seydou</em>
          </h1>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(20px, 2vw, 28px)", color: "var(--cream)", margin: "0 0 18px" }}>
            Portrait · Documentary · Commercial
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 15, color: "var(--muted)", letterSpacing: "0.02em", margin: 0 }}>
            Sony α6400 · DJI Mini 2 · Manfrotto
          </p>
        </div>
      </div>
      {/* Scroll cue */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 8, paddingBottom: 40 }}>
        <a href="#work" style={{ fontFamily: "var(--font-body)", fontSize: 12, letterSpacing: "0.24em", textTransform: "uppercase",
          color: "var(--muted)", textDecoration: "none" }}>Scroll</a>
        <ChevronDown size={18} stroke="var(--gold)" />
      </div>
    </section>
  );
}
Object.assign(window, { Hero });
