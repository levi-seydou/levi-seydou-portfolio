# Zumfi — one-page site

A single-page site for **Zumfi**, the fixed wireless home internet service being established in
Niamey, Niger. No build step, no framework, no dependencies: `index.html` is self-contained
(inline CSS, inline SVG, ~30 lines of JS) and the only external request is the Google Fonts
stylesheet.

```
index.html                 the whole site
assets/zumfi-logo.png      primary lockup — arcs + wordmark, transparent ground
assets/zumfi-icon.png      app icon, 512×512, rounded corners baked into the alpha
assets/zumfi-icon-180.png  apple-touch-icon
assets/favicon.png         32×32 favicon
```

## Built to match the live site

This page follows the design language of `zumfi.netlify.app` as captured in screenshots — palette,
type hierarchy, section rhythm and copy. The live site itself could not be reached from the
environment this was built in (outbound network is blocked), so everything here was matched from
those screenshots rather than from source.

| Section | Anchor | Source of the copy |
|---|---|---|
| Hero | `#top` | Live site: badge, "Reliable Internet. / Within Reach.", lead, both buttons, the "Launching in Niamey, Niger" line and the "Coming soon" chip |
| Our mission | `#mission` | Live site, verbatim: the heading, both paragraphs, "Focused on everyday households", and the At home / For learning / For local work tags |
| What we're building | `#building` | Live site: heading, lead, and card 01. See *Written here* below |
| Get in touch | `#contact` | Written here — the live contact section wasn't in the screenshots |

### Written here, not taken from the live site

- **Card 02 "Affordable Access"** — the live card's body was cut off mid-sentence in the
  screenshot ("Working to make pricing that is…"). The line here is a stand-in written in the same
  voice; replace it with the real one.
- **Card 03 "Licensed & Compliant"** — not visible in the screenshots at all. This one is drawn
  from the overview document's licensing section, so it's factual, but it may not be what the live
  card says.
- **The whole contact section** — form, details and headings, built in the same design language.

## Design tokens

Sampled from the live-site screenshots:

| Token | Value | Used for |
|---|---|---|
| `--blue` | `#489cd8` | primary buttons, links, "Within Reach.", eyebrow labels |
| `--green` | `#54c09c` | accents, the launch pin, second arc |
| `--yellow` | `#e4cc6c` | third arc, tag dots, warm accents |
| `--ink` | `#18243c` | headings and the footer ground |
| `--pale` | `#f0f7fc` | section wash |

Recurring devices from the live site: gradient-dash eyebrows (blue → green → yellow), pill buttons
with a corner arrow, the tri-colour rule between sections, and the logo's three arcs used as a
watermark in the corner of each numbered card.

**Fonts are a guess.** The live site's faces weren't identifiable from screenshots, so this uses
**Figtree** (display — tight, geometric, close to the headings) over **Karla** (body). If you know
what the real ones are, swapping the two names in `--fd` / `--fb` and the Google Fonts link is the
whole change.

## The cloudy treatment

Soft SVG clouds — one shape (`<g id="cloud">`) reused at several scales and opacities — drift
behind the hero, the neighbourhood illustration and the arches. They're kept clear of body copy so
nothing loses contrast. The hero sky is a pale blue gradient that resolves to white at the rule.

## Illustrations

Both are inline SVG, no image files:

- **Hero** — a neighbourhood of flat-roofed homes under a Sahel sky, with blue/green/yellow arcs of
  connection linking the rooftops. Stands in for the live site's 3D village render.
- **Mission** — three arches (a desk, a family at a table, a small shop) echoing the live site's
  paper-cut illustration of everyday life.

## The form

Wired for **Netlify Forms** — the deploy target is Netlify, and this needs no backend:

- `name="contact"`, `data-netlify="true"`, plus the hidden `form-name` input.
- `netlify-honeypot="bot-field"` with an off-screen decoy field for spam.
- Submissions appear under **Forms → contact** in the Netlify dashboard; add an email notification
  there (Site settings → Forms → Form notifications) to have them forwarded.

JavaScript posts it in place and swaps in a thank-you. Without JS it submits normally and Netlify
shows its own success page. If the POST fails, an inline message falls back to email and phone.

Fields: `name`, `email`, `phone` (optional), `area` (quartier — worth having, since it maps demand
against future coverage), `message`.

**Not deploying to Netlify?** Give the `<form>` an `action="https://…"` pointing at your endpoint
(Formspree, Basin, a function) — the fetch handler reads `action` and needs no other change.

## Deploying

Drag this folder onto https://app.netlify.com/drop, or connect the repo and set the publish
directory to `export/zumfi-site` with no build command.

> Note: the page uses `sey182833@oru.edu` from the overview document, not the
> `seydoulevi1@gmail.com` on the Levi Seydou photography site in this repo. It appears in four
> places if it needs changing.
