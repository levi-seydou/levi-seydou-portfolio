# Zumfi — one-page site

A single-page website for **Zumfi**, the fixed wireless home internet service being established
in Niamey, Niger. No build step, no framework, no dependencies: `index.html` is self-contained
(inline CSS, one inline SVG illustration, ~30 lines of JS) and the only external request is the
Google Fonts stylesheet.

```
index.html                 the whole site
assets/zumfi-logo.png      primary lockup — arcs + wordmark, transparent ground
assets/zumfi-icon.png      app icon, 512×512, rounded corners baked into the alpha
assets/zumfi-icon-180.png  apple-touch-icon
assets/favicon.png         32×32 favicon
```

## The page, top to bottom

| Section | Anchor | Content |
|---|---|---|
| Hero | `#top` | Headline, the service in three sentences, both CTAs, licensing status, and an SVG diagram of the model: tower → rooftop receiver → WiFi indoors |
| The need | `#why` | Why home internet in Niger is unavailable or unaffordable, and the four things Zumfi changes |
| How it works | `#how` | The three parts of the service, why shared tower capacity keeps it affordable, and the technical overview (backbone / distribution / customer equipment) |
| Trust | `#trust` | Licensing & compliance, and the contribution to Niger |
| Contact | `#contact` | Message form, contact details, what happens next |

## Brand

Colors were sampled from the supplied logo artwork and declared as tokens at the top of the file:

| Token | Value | Where it comes from |
|---|---|---|
| `--teal` | `#2888a0` | the `zumfi` wordmark |
| `--sky` | `#63c4f2` | middle WiFi arc |
| `--green` | `#58c2a4` | outer WiFi arc |
| `--sun` | `#f2d183` | arc highlight |
| `--icon-blue` | `#4384b4` | app icon ground |

Type is **Nunito** (display — rounded terminals, matching the wordmark) over **Nunito Sans**
(body), with a system sans fallback if Google Fonts is unavailable. The hero illustration uses
the same green → sky → sun sweep as the logo's arcs.

## The form

Wired for **Netlify Forms** — the deploy target is Netlify, and this needs no backend:

- `name="contact"`, `data-netlify="true"`, plus the hidden `form-name` input.
- `netlify-honeypot="bot-field"` with an off-screen decoy field for spam.
- Submissions appear under **Forms → contact** in the Netlify dashboard; add an email
  notification there (Site settings → Forms → Form notifications) to have them forwarded.

JavaScript posts the form in place and swaps in a success panel, so the visitor keeps their place
on the page. With JS disabled the form submits normally and Netlify shows its own success page.
If the POST fails, an inline message falls back to the email address and phone number.

Fields captured: `name`, `email`, `phone` (optional), `reason` (household / partner / stakeholder /
press / other), `area` (neighbourhood or quartier — useful for mapping demand against tower
coverage), `message`.

**Not deploying to Netlify?** Give the `<form>` an `action="https://…"` pointing at your endpoint
(Formspree, Basin, a function) — the fetch handler reads `action` and needs no other change.

## Deploying

Drag this folder onto https://app.netlify.com/drop, or connect the repo and set the publish
directory to `export/zumfi-site` with no build command.

## Content source

Copy is drawn from the *Company & Service Overview — Zumfi* document (Niamey, June 2026) —
the service description, the need it addresses, the technical overview, the licensing commitment,
the economic and social contribution, and the closing contact block
(Levi Seydou · sey182833@oru.edu · +1 816 216 9235 · Niamey, Niger).

Nothing on the page claims the service is live: it says Zumfi is securing the licences and
authorizations required to operate in Niger, which is what the document states.

> Note: that email differs from the `seydoulevi1@gmail.com` used on the Levi Seydou photography
> site in this repo. The page uses the one from the Zumfi document — it appears in five places
> (form footer, details card, footer nav, and the JS error fallback) if it needs changing.

## Still open

The live site at `zumfi.netlify.app` could not be reached from the environment this was built in
(outbound network is blocked), so this is a fresh one-pager in the Zumfi brand rather than a
match to whatever is deployed there today.
