// Work.jsx — "Selected work": clean 3-col uniform grid of the West Africa 2024 series + lightbox.
// Top half leans into the school + clinic frames, bottom half into
// construction + agriculture. Within each half, visually similar frames
// never sit adjacent in the 3-column grid — horizontally or vertically.
const WORKS = [
  // — people & care —
  { src: "assets/work/07-medical-portrait.jpg", t: "Medical Portrait" },
  { src: "assets/work/01-classroom-visit.jpg", t: "Classroom Visit" },
  { src: "assets/work/08-operating-room.jpg", t: "Operating Room" },
  { src: "assets/work/02-waiting-their-turn.jpg", t: "Waiting Their Turn" },
  { src: "assets/work/03-school-of-smiles.jpg", t: "School of Smiles" },
  { src: "assets/work/04-hard-hat.jpg", t: "Hard Hat" },
  { src: "assets/work/05-foundation.jpg", t: "Foundation" },
  { src: "assets/work/24-clinic.jpg", t: "Clinic" },
  // — labor & land —
  { src: "assets/work/17-golden-hour.jpg", t: "Golden Hour" },
  { src: "assets/work/10-site-briefing.jpg", t: "Site Briefing" },
  { src: "assets/work/16-the-lookout.jpg", t: "The Lookout" },
  { src: "assets/work/13-plowmen.jpg", t: "Plowmen" },
  { src: "assets/work/09-medical-team.jpg", t: "Medical Team" },
  { src: "assets/work/14-traditional-farming.jpg", t: "Traditional Farming" },
  { src: "assets/work/11-oversight.jpg", t: "Oversight" },
  { src: "assets/work/12-construction-site.jpg", t: "Construction Site" },
  { src: "assets/work/06-afterglow.jpg", t: "Afterglow" },
  { src: "assets/work/15-yoked-together.jpg", t: "Yoked Together" },
  { src: "assets/work/19-rooftop-work.jpg", t: "Rooftop Work" },
];

function Work() {
  const [active, setActive] = React.useState(null);
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") setActive(null); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);
  return (
    <section id="work" style={{ padding: "120px var(--gutter)" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 24, flexWrap: "wrap" }}>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: "clamp(36px, 4.5vw, 60px)", lineHeight: 1,
            letterSpacing: "-0.01em", color: "var(--cream)", margin: 0 }}>
            Selected <em style={{ fontStyle: "italic", fontWeight: 500 }}>work</em>
          </h2>
          <p style={{ fontFamily: "var(--font-body)", fontSize: 13, letterSpacing: "0.18em", textTransform: "uppercase",
            color: "var(--gold)", margin: "0 0 8px" }}>West Africa · 2024</p>
        </div>
        <div style={{ height: 1, background: "var(--hair)", margin: "28px 0 44px" }} />
        <div className="work-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          {WORKS.map((w, i) => (
            <Photo key={i} src={w.src} alt={w.t} aspect="3 / 2" radius={8} onClick={() => setActive(i)} />
          ))}
        </div>
      </div>
      {active !== null && (
        <div onClick={() => setActive(null)}
          style={{ position: "fixed", inset: 0, zIndex: 100, background: "rgba(12,9,7,0.94)",
            display: "flex", alignItems: "center", justifyContent: "center", padding: "5vw", flexDirection: "column" }}>
          <div style={{ width: "min(960px, 92vw)" }} onClick={(e) => e.stopPropagation()}>
            <img src={WORKS[active].src} alt={WORKS[active].t}
              style={{ width: "100%", maxHeight: "80vh", objectFit: "contain", borderRadius: 8, display: "block" }} />
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 16 }}>
              <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontSize: 20, color: "var(--cream)" }}>{WORKS[active].t}</span>
              <span style={{ fontFamily: "var(--font-body)", fontSize: 13, letterSpacing: "0.06em", color: "var(--muted)" }}>
                {active + 1} / {WORKS.length}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
Object.assign(window, { Work });
