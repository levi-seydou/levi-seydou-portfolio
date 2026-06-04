// About.jsx — "Behind the lens." inside a large rounded card, bio + service pills + CTA.
function About() {
  const services = ["Portraits", "Documentary", "Commercial", "Events", "Aerial / Drone", "Video"];
  return (
    <section id="about" style={{ padding: "40px var(--gutter) 80px" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div style={{
          borderRadius: 28, border: "1px solid var(--hair)", padding: "clamp(36px, 6vw, 88px)",
          background: "linear-gradient(180deg, rgba(40,29,18,0.55) 0%, rgba(22,16,11,0.4) 100%)",
        }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, letterSpacing: "0.22em", textTransform: "uppercase",
            color: "var(--gold)", margin: "0 0 24px", fontWeight: 500 }}>About</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(40px, 5.5vw, 76px)", lineHeight: 1,
            letterSpacing: "-0.01em", color: "var(--cream)", margin: "0 0 36px" }}>
            Behind the <em style={{ fontStyle: "italic", fontWeight: 500, color: "var(--gold)" }}>lens.</em>
          </h2>
          <div style={{ maxWidth: 760 }}>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(17px, 1.4vw, 21px)", lineHeight: 1.65, color: "var(--cream-dim)", margin: "0 0 24px" }}>
              I'm Levi Seydou — a photographer and videographer based in Oklahoma, working across portrait, documentary,
              and commercial photography. In 2024, I photographed a nonprofit project in West Africa, capturing its people,
              clinics, schools, and construction sites, then edited and delivered the final photos for the organization's website.
            </p>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(17px, 1.4vw, 21px)", lineHeight: 1.65, color: "var(--cream-dim)", margin: 0 }}>
              I shoot on a Sony α6400 with a DJI Mini 2 for aerial work, and I edit in Adobe Lightroom. I learn fast, I show up,
              and I care about doing the job right — and I'm easy to work with while I do it.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, margin: "44px 0 40px" }}>
            {services.map((s) => (
              <span key={s} style={{ fontFamily: "var(--font-body)", fontSize: 12, letterSpacing: "0.14em", textTransform: "uppercase",
                color: "var(--cream-dim)", border: "1px solid var(--hair)", borderRadius: 999, padding: "11px 20px" }}>{s}</span>
            ))}
          </div>
          <Button href="mailto:seydoulevi1@gmail.com?subject=New%20project%20inquiry" variant="pill-gold">Start a project</Button>
        </div>
      </div>
    </section>
  );
}
Object.assign(window, { About });
