# Website UI Kit — Levi Seydou Photography & Film

A high-fidelity, interactive recreation of Levi's **live portfolio** (`grand-scone-276aa8.netlify.app`): a minimal, **warm-dark, gold-accented** editorial single-page site that leads with the photography.

## Run
Open `index.html`. It loads `../../colors_and_type.css` for the brand fonts, then mounts the React app from the JSX files (in-browser Babel). Local palette + accent vars (`--gold`, `--cream`, `--hair`, warm-dark `radial-gradient` ground) are defined in `index.html`.

## Layout (top → bottom)
| File | Section | Notes |
|------|---------|-------|
| `Icons.jsx` | — | Lucide-style inline line icons. **Flagged substitute** for relume-icons. |
| `Primitives.jsx` | — | `Button` (gold / ghost uppercase pills) + `Photo` (real image, cover-crop, hover zoom) |
| `Nav.jsx` | Sticky nav | "Levi *Seydou*" wordmark + "Get in touch" gold pill |
| `Hero.jsx` | Hero | Portrait left, eyebrow + oversized "Levi *Seydou*" (gold italic) right, disciplines, gear, Scroll cue |
| `Work.jsx` | Selected work | "WEST AFRICA · 2024" — 3-col uniform grid (no captions) + **click/Esc lightbox** |
| `About.jsx` | Behind the *lens.* | Contained rounded card: bio + service **pills** + "Start a project" |
| `Contact.jsx` | Let's make something *real.* | Email + phone + location, then footer copyright |

## Signature treatment
- **Warm-dark ground** (`#100b08` + a top radial brown glow), never pure black.
- **Bright gold** accent (`#e3a44e`): wordmark italic, eyebrows, the italic accent word in every heading, pills, links.
- **Italic accent word** in display headings (Fraunces italic): *Seydou*, *work*, *lens.*, *real.*
- Flat surfaces, hairline borders (`--hair`), generous space; the photos carry the color.

## Photography
Real photos live in `assets/` (`portrait.jpg`) and `assets/work/` (`01…24`). The first **16** match the live "Selected work / West Africa · 2024" series in order; **17–24** are additional frames the client supplied, titled here (Golden Hour, The Crew, Rooftop Work, Setting the Forms, The Build, Riverside, Through the Doorway, Clinic). To change the set, edit the `WORKS` array in `Work.jsx`.
