# Zumfi — one-page site

A single-page website for **Zumfi**, the fixed wireless home internet service being established
in Niamey, Niger. No build step, no framework, no dependencies: `index.html` is self-contained
(inline CSS, inline SVG, ~30 lines of JS) and the only external request is the Google Fonts
stylesheet.

```
index.html                 the whole site
assets/zumfi-logo.png      primary lockup — arcs + wordmark, transparent ground
assets/zumfi-icon.png      app icon, 512×512, rounded corners baked into the alpha
assets/zumfi-icon-180.png  apple-touch-icon
assets/favicon.png         32×32 favicon
```

## The page

| Section | Anchor | Content |
|---|---|---|
| Hero | `#top` | "Home internet, out of thin air" — the offer in two sentences, both CTAs, and an SVG of the model: tower → rooftop receiver → WiFi indoors |
| Three points | — | Flat fee · WiFi for everyone · Nothing to dig |
| Vision | — | The mission statement, alone on a sky gradient |
| How it works | `#how` | Three steps, plus one line on licensing |
| Contact | `#contact` | Short form and contact details |

Deliberately airy and short: five sections, one idea each. The detail from the overview document
(the full technical breakdown, the economic and social contribution, the compliance paragraph) is
compressed into the steps and the licensing line rather than given sections of its own — it can
be expanded back out if the page ever needs to do more work.

## The cloudy look

- Sky gradients (`--sky-pale → --sky-tint → white`) on the hero and vision bands, white in between.
- Soft SVG clouds, one shape (`<g id="cloud">`) reused at several scales and opacities, drifting
  behind the content — never behind body copy, so nothing loses contrast.
- A gentle wave divider where the hero's sky meets the white below it.
- Big radii, hairline borders, wide-spread soft shadows, generous whitespace.

## Brand

Colors sampled from the supplied logo artwork, declared as tokens at the top of the file:

| Token | Value | Where it comes from |
|---|---|---|
| `--teal` | `#2888a0` | the `zumfi` wordmark |
| `--sky` | `#63c4f2` | middle WiFi arc |
| `--green` | `#58c2a4` | outer WiFi arc |
| `--sun` | `#f2d183` | arc highlight |

Type is **Nunito** (display — rounded terminals, matching the wordmark) over **Nunito Sans**
(body), with a system sans fallback if Google Fonts is unavailable. The hero's broadcast arcs use
the same green → sky → sun sweep as the logo.

## The form

Wired for **Netlify Forms** — the deploy target is Netlify, and this needs no backend:

- `name="contact"`, `data-netlify="true"`, plus the hidden `form-name` input.
- `netlify-honeypot="bot-field"` with an off-screen decoy field for spam.
- Submissions appear under **Forms → contact** in the Netlify dashboard; add an email
  notification there (Site settings → Forms → Form notifications) to have them forwarded.

JavaScript posts it in place and swaps in a thank-you. Without JS it submits normally and Netlify
shows its own success page. If the POST fails, an inline message falls back to email and phone.

Fields: `name`, `email`, `phone` (optional), `area` (quartier — worth having, since it maps demand
against future tower coverage), `message`.

**Not deploying to Netlify?** Give the `<form>` an `action="https://…"` pointing at your endpoint
(Formspree, Basin, a function) — the fetch handler reads `action` and needs no other change.

## Deploying

Drag this folder onto https://app.netlify.com/drop, or connect the repo and set the publish
directory to `export/zumfi-site` with no build command.

## Content source

Copy is drawn from the *Company & Service Overview — Zumfi* document (Niamey, June 2026). The
vision band is its §3 — dependable home connectivity at a price ordinary households can afford,
closing the digital gap for communities today's networks don't reach.

Nothing on the page claims the service is live: it says Zumfi is securing the licences and
authorizations required to operate in Niger, which is what the document states.

> Note: the page uses `sey182833@oru.edu` from the document, not the `seydoulevi1@gmail.com` on
> the Levi Seydou photography site in this repo. It appears in four places if it needs changing.

## Still open

The live site at `zumfi.netlify.app` could not be reached from the environment this was built in
(outbound network is blocked), so this is a fresh one-pager in the Zumfi brand rather than a match
to whatever is deployed there today.
