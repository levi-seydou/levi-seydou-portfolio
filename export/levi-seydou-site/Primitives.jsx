// Primitives.jsx — Button (incl. outlined pill) + Photo frame for the dark portfolio.

function Button({ children, variant = "pill-gold", size = "default", iconRight, onClick, href }) {
  const [hover, setHover] = React.useState(false);
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 8,
    fontFamily: "var(--font-body)", cursor: "pointer", textDecoration: "none", lineHeight: 1,
    transition: "all .22s ease", whiteSpace: "nowrap", border: "1px solid transparent",
  };
  // Uppercase letter-spaced pill (matches nav "Get in touch" + "Start a project")
  const pill = {
    borderRadius: 999, textTransform: "uppercase", letterSpacing: "0.14em",
    fontSize: size === "sm" ? 11 : 12.5, fontWeight: 500,
    padding: size === "sm" ? "9px 18px" : "14px 26px",
  };
  const variants = {
    "pill-gold": { ...pill, background: "transparent", borderColor: "var(--gold-line)", color: "var(--gold)" },
    "pill-ghost": { ...pill, background: "transparent", borderColor: "var(--hair)", color: "var(--cream)" },
  };
  let style = { ...base, ...variants[variant] };
  if (hover && variant === "pill-gold") { style.background = "var(--gold)"; style.color = "#1a130b"; style.borderColor = "var(--gold)"; }
  if (hover && variant === "pill-ghost") { style.borderColor = "var(--gold-line)"; style.color = "var(--gold)"; }
  const Tag = href ? "a" : "button";
  return (
    <Tag style={style} onClick={onClick} href={href}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
      {children}{iconRight}
    </Tag>
  );
}

// Photo frame — real image, cover-cropped, rounded, with a hairline + soft shadow.
function Photo({ src, alt = "", aspect = "3 / 2", radius = 8, shadow = false, onClick }) {
  const [hover, setHover] = React.useState(false);
  return (
    <div onClick={onClick}
      onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}
      style={{
        aspectRatio: aspect, width: "100%", borderRadius: radius, overflow: "hidden",
        background: "#181410", border: "1px solid var(--hair)", cursor: onClick ? "zoom-in" : "default",
        boxShadow: shadow ? "0 30px 80px -20px rgba(0,0,0,0.7)" : "none",
      }}>
      <img src={src} alt={alt} loading="lazy" style={{
        width: "100%", height: "100%", objectFit: "cover", display: "block",
        transition: "transform .6s cubic-bezier(.2,.6,.2,1), filter .4s ease",
        transform: hover && onClick ? "scale(1.04)" : "scale(1)",
        filter: hover && onClick ? "brightness(1.05)" : "brightness(1)",
      }} />
    </div>
  );
}

Object.assign(window, { Button, Photo });
