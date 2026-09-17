# Zumfi — contact page

A standalone contact page for **Zumfi**, the fixed wireless home internet service being
established in Niamey, Niger. No build step, no dependencies: `contact.html` is self-contained
(inline CSS + ~30 lines of JS) and the only external request is the Google Fonts stylesheet.

```
contact.html          the page
assets/zumfi-logo.png     primary lockup — arcs + wordmark, transparent ground
assets/zumfi-icon.png     app icon, 512×512, rounded corners baked into the alpha
assets/zumfi-icon-180.png apple-touch-icon
assets/favicon.png        32×32 favicon
```

## Brand tokens

Sampled from the supplied logo artwork and declared at the top of `contact.html`:

| Token | Value | Where it comes from |
|---|---|---|
| `--teal` | `#2888a0` | the `zumfi` wordmark |
| `--sky` | `#63c4f2` | middle WiFi arc |
| `--green` | `#58c2a4` | outer WiFi arc |
| `--sun` | `#f2d183` | arc highlight |
| `--icon-blue` | `#4384b4` | app icon ground |

Type is **Nunito** (display — rounded terminals, matching the wordmark) over **Nunito Sans** (body),
with a system sans fallback if Google Fonts is unavailable.

## The form

Wired for **Netlify Forms** — the deploy target is Netlify, and this needs no backend:

- `name="contact"`, `data-netlify="true"`, plus the hidden `form-name` input.
- `netlify-honeypot="bot-field"` with an off-screen decoy field for spam.
- Submissions appear under **Forms → contact** in the Netlify dashboard; add an email
  notification there (Site settings → Forms → Form notifications) to have them forwarded.

JavaScript posts the form in place and swaps in a success panel, so the visitor never leaves
the page. With JS disabled the form submits normally and Netlify shows its own success page.
If the POST fails, an inline message falls back to the email address and phone number.

**Not deploying to Netlify?** Give the `<form>` an `action="https://…"` pointing at your
endpoint (Formspree, Basin, a function) — the fetch handler reads `action` and needs no other
change.

## Fields captured

`name`, `email`, `phone` (optional), `reason` (household / partner / stakeholder / press / other),
`area` (neighbourhood or quartier — useful for mapping demand against tower coverage), `message`.

## Folding it into the existing site

The page is written so the markup can be lifted wholesale: the form section carries `id="contact"`,
so an existing `#contact` anchor keeps working. Copy `<section class="hero">` through
`<section class="band">`, the `:root` tokens and the `<script>` block into the host page, or link
to `contact.html` directly.

## Content source

Copy is drawn from the *Company & Service Overview — Zumfi* document (Niamey, June 2026):
the service description, the fixed-wireless model, and the closing contact block
(Levi Seydou · sey182833@oru.edu · +1 816 216 9235 · Niamey, Niger).

> Note: that address differs from the `seydoulevi1@gmail.com` used on the Levi Seydou
> photography site in this repo. The page uses the one from the Zumfi document — it appears in
> four places (`mailto:` links in the form footer, the details card, the page footer, and the
> JS error fallback) if it needs changing.
