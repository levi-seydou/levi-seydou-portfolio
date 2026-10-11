# Zumfi — one-page site

A single-page site for **Zumfi**, the fixed wireless home internet service being established in
Niamey, Niger. No build step, no framework, no dependencies: `index.html` is self-contained
(inline CSS, inline SVG, ~30 lines of JS) and the only external request is the Google Fonts
stylesheet.

```
index.html                    the whole site
assets/zumfi-logo.png         primary lockup — supplied, cropped and keyed to transparency
assets/zumfi-icon.png         app icon, 512×512, rounded corners baked into the alpha
assets/zumfi-icon-180.png     apple-touch-icon
assets/favicon.png            32×32 favicon
assets/hero-village.jpg       hero artwork — supplied
assets/mission-arches.jpg     mission artwork — supplied, cropped to the art
assets/niamey-aerial.jpg      launch-panel artwork — supplied
```

## Illustrations

All three illustrations are the real artwork, supplied as images — there are no drawn stand-ins
left in the page.

| File | Where | Treatment |
|---|---|---|
| `hero-village.jpg` | hero | Isometric village with receivers on the rooftops. Full-bleed source, scaled to 1240px |
| `mission-arches.jpg` | `#mission` | Paper-cut arches — a desk, a family at a table, a shop. Paper margin trimmed, scaled to 1000px |
| `niamey-aerial.jpg` | `#niamey` | Paper-cut aerial of Niamey along the river with ribbons of connection. Scaled to 1240px |

All saved as progressive JPEG. `.art` frames the two column images (rounded corners, soft shadow);
the launch panel's banner sits in `.panel-media` at a fixed 16:9 with `object-fit: cover`, so the
dark block below it keeps its position whatever the source aspect, and the location chip anchors to
the bottom-left of the image rather than a fixed offset.

> `mission-arches.jpg` comes from a 439px-wide source and is upscaled, so it is a little soft at
> full width. Dropping a larger export over the same filename needs no markup change.

## Built to match the live site

This page follows the design language of `zumfi.netlify.app` as captured in screenshots — palette,
type hierarchy, section rhythm and copy. The live site itself could not be reached from the
environment this was built in (outbound network is blocked), so everything here was matched from
those screenshots rather than from source.

| Section | Anchor | Content |
|---|---|---|
| Hero | `#top` | Village hotspots first, home internet next |
| Our mission | `#mission` | Why the gap exists — weak signal, bundles that run out |
| Where we start | `#offer` | The two phases: village hotspots now, home internet later |
| How it works | `#how` | Find a hotspot, buy access from a vendor, connect your phone — plus the licensing statement |
| Why connectivity matters | `#why` | Education, work, communication, opportunity |
| Launching in Niamey | `#niamey` | Starting locally |
| Contact | `#contact` | Form and the "Contact Zumfi" row |

`#niamey` is not linked from the nav or footer, matching the live site — it's a section you scroll past.

### Built from the Launch Roadmap and the Village Hotspot Kit

The page follows those two documents, which changed the story in one important way: **village
hotspots come first and home internet follows**, not the other way round. The site used to lead
with home WiFi.

- **Phase one — village hotspots.** A satellite dish, a router and an antenna on a pole bring WiFi
  to a village centre. A local vendor sells access; people pay by the hour, day, week or month. No
  tower needed, and it works where the cell signal doesn't.
- **Phase two — home internet.** A tower in Niamey links homes through rooftop receivers for one
  flat monthly fee, once the village sites are growing.

`#how` is written for a customer, not a partner: find the hotspot, buy access from a vendor,
connect your phone. The mission section opens on the real problem ("the cell signal is weak or
gone, and where it works, data bundles run out in days").

### What is deliberately not on the public page

The Launch Roadmap is marked *for partners and supporters*, and some of what it contains has no
business on a page anyone can read. Kept off:

- **The launch timeline** — groundwork, company registration, the application filing, kit arrival,
  first village ready. Milestone tracking is for the people funding and partnering, not visitors.
- **Team structure** — who reports to whom, the field supervisor, profit splits.
- **Kit internals** — what the dish, the router and the antenna each do, and that the router holds
  the logins and time limits. A customer needs to know where to find WiFi and how to buy it.
- **Site-selection criteria** — clear view of the sky, steady power, a trusted vendor. That is how
  Zumfi picks a site; it tells a visitor nothing.
- **The technical partner relationship.**

What stayed is the one piece of that material the public *should* see: the licensing commitment,
now a band at the end of `#how`. It reassures customers and regulators alike, and it is the thing
that distinguishes Zumfi from an unlicensed operator.

**No figures anywhere**, by request: no prices, no kit costs, no adoption statistics, no dates, no
hardware model numbers or frequencies. Phases are described in words — "starting now", "once the
villages are growing", "later". Equipment is generic — "a satellite dish", "a router", "an antenna
on a pole" — rather than naming the brands in the kit document, which suits a public page and
leaves the partner documents to carry the specifics.

### The old two service lines

The site covers both offerings:

- **Home WiFi** — a rooftop receiver, WiFi through the house, one flat monthly fee.
- **Public Village WiFi** — a public access point at the centre of village life (market, school,
  clinic), pay-as-you-go, reaching places a home connection can't serve yet.

`#offer` carries them as two colour-coded cards — blue for the household, green for the village,
each with the arc watermark in its own accent. Four other places were widened to match: the hero
lead, the "Launching in Niamey" strapline, the `#building` section lead ("more homes **and
villages**"), and the page description and social card text.

Copy is hedged the way the live site hedges — "being built to", "designed for" — since the service
isn't live and the licences are still being secured.

> Left alone: the four `#building` cards are still your live-site wording, and two of them
> ("Reliable Home Internet", "Simple Home WiFi") name only the home product. They read fine as
> detail about that product now that `#offer` sits above them, but say the word and I'll rewrite
> one to carry the village hotspot instead.

### The one addition

The live contact section is an email link only. This page keeps that row exactly as it appears
there, and adds a short form underneath it (name, email, optional phone, optional quartier,
message). A form catches people who won't open a mail client, and the quartier field maps demand
against future coverage. If you'd rather match the live site exactly, delete the `<form>` and its
`<script>` — the "Contact Zumfi" row stands on its own.

## Design tokens

Taken from the logo artwork itself, so the page and the mark are the same palette. Deeper and
lighter shades (`#2aa26c` for green text, `#a9780a` for the gold eyebrow, `#8ee1bb` for the mint
eyebrow on navy) are derived from those three by moving lightness only, so the hues stay true:

| Token | Value | Used for |
|---|---|---|
| `--blue` | `#55b1f0` | the logo's blue — primary buttons, "Within Reach.", eyebrows, icon tints |
| `--green` | `#5ed59f` | the logo's green — village accents, ticks, the launch pin |
| `--yellow` | `#fccb55` | the logo's yellow — tag dots, the pull-quote rule, the third arc |
| `--blue-deep` | `#1282ce` | link text and button hover — darkened from the logo blue to stay readable (4.1:1 on white) |
| `--ink` | `#18243c` | headings and the footer ground |
| `--pale` | `#f0f7fc` | section wash |

Recurring devices from the live site: gradient-dash eyebrows (blue → green → yellow), pill buttons
with a corner arrow, the tri-colour rule between sections, and the logo's three arcs used as a
watermark in the corner of each numbered card.

The `zumfi` lockup in `assets/zumfi-logo.png` is the supplied logo — blue wordmark, green `fi`,
and the arcs sitting over the `fi` so the mark reads as a signal coming off "…fi". It is cropped to
the artwork and the white paper is keyed to transparency with a soft alpha ramp, so it sits on any
light ground; the footer still places it on a white tile against the navy.

The site's tokens are taken from this artwork, so the logo and the page are one palette.

> **One contrast note.** White text on the logo blue measures 2.35:1 — below the 4.5:1 WCAG wants
> for text this size. The previous, deeper blue was 2.99:1, so matching the logo costs a little
> legibility on the two CTAs. Two ways to fix it if you want: set the primary button's text to
> `--ink` navy (6.6:1, and the button still reads as the logo blue), or deepen just the button
> background to `--blue-deep`. Links and the gold eyebrow already use darkened shades for this
> reason.

**Fonts are still a guess.** The live site's faces weren't identifiable from screenshots, so this uses
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
