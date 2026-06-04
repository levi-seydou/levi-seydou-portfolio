// Nav.jsx — transparent sticky nav. "Levi Seydou" wordmark + outlined pill CTA.
function Nav() {
  return (
    <header style={{ position: "sticky", top: 0, zIndex: 50, background: "rgba(18,13,9,0.55)",
      backdropFilter: "blur(14px)" }}>
      <nav style={{ maxWidth: 1320, margin: "0 auto", padding: "0 var(--gutter)", height: 84,
        display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <a href="#top" style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 24, color: "var(--cream)",
          textDecoration: "none", letterSpacing: "-0.01em" }}>
          Levi <em style={{ fontStyle: "italic", fontWeight: 500, color: "var(--gold)" }}>Seydou</em>
        </a>
        <Button href="#contact" variant="pill-gold" size="sm">Get in touch</Button>
      </nav>
    </header>
  );
}
Object.assign(window, { Nav });
