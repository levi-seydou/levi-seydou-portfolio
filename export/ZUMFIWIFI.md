# zumfiwifi.com

The live Zumfi site. `export/zumfiwifi-site/` is published as-is by Netlify
(see `/netlify.toml`); pushing to the branch the Netlify project watches deploys it.

## What this folder is

Finished build output, not source. The site was generated with Astro by Codex
(Netlify agent runs) and downloaded from Netlify deploy `6af69cd4d2457c3b07215f78`
(published 12 Nov 2026). The Astro source was never in this repo, so edits are made
to the built files directly:

| File | What's in it |
|---|---|
| `index.html`, `learn/`, `merci/`, `404.html` | pages, minified onto one line |
| `_astro/Layout.*.css` | shared styles |
| `_astro/index.*.css` | page styles (the larger one is the home page) |
| `_astro/Layout.astro_astro_type_script_index_0_lang.*.js` | menu, FR/EN switch, contact form, animation start-up |
| `_astro/motion.*.js` | GSAP + ScrollTrigger and every scroll animation (site code is the last ~13 KB) |
| `_headers` | security headers and long caching for `/_astro/*` |

Translations live inline: each element carries `data-i18n='{"fr":…,"en":…}'`
(also `data-i18n-aria-label`, `-placeholder`, `-alt`, `-content`). French is the default.

**After editing anything in `_astro/`, run `python3 export/zumfiwifi-rehash.py`.**
`_headers` serves `/_astro/*` with a one-year `immutable` cache, so a browser that has
seen a file never fetches it again. The script renames each file to
`<stem>.<sha256 prefix>.<ext>` and rewrites every reference, so changed files get new
names and returning visitors pick them up. `--check` exits 1 if a name is stale.

**File-name case matters.** Netlify's "Download deploy" lowercases file names, which
breaks the mixed-case references on a case-sensitive server. Work from this folder,
not from a fresh download.

## Changes made after Codex (Nov 2026)

1. **Pinned "From the sky to your everyday" section cut off on phones.** ScrollTrigger
   froze the section's height and Codex's resize handler ignored height changes under
   120px on touch devices, i.e. the browser toolbar showing/hiding. Content then re-laid
   out taller than the frozen box: heading sliced, blank cream band below.
   Fix: debounced `ScrollTrigger.refresh()` when `innerHeight` settles on a new value
   (`motion.*.js`, right after `$.config({ignoreMobileResize:!0})`), and
   `.pin-spacer{background:var(--ink)}` so space under the pinned scene is navy.
2. **Animation always on.** Removed the Pause / "Animer la page" button and the
   heuristics that switched animation off for ≤4 CPU cores, Save-Data or slow
   connections (`v` is now fixed to `full`). OS "Reduce Motion" is still honoured.
3. **Asset names.** Every file in `_astro/` was renamed to a content hash
   (`zumfiwifi-rehash.py`), so visitors who cached Codex's files get the fixed ones.
4. **Smoother scrolling.** The motion set-up (`initMotion`, ~400ms on a 4x-throttled
   phone) used to run on the first scroll, freezing the page as the visitor started
   moving. It now runs at idle time after load (`requestIdleCallback`, 2.5s timeout;
   the scroll trigger stays as a fallback). All 10 ScrollTrigger `scrub` values went
   from 0.35–0.65 (one was `true`) to 0.8–1; reveal fade-ins are .95s `power3.out`
   starting at `top 96%`; pinned-scene step text fades in over .45s and the outgoing
   step reverses at 2.4x. Measured on a 4x-throttled phone: worst frame 533ms -> 33ms.
5. **Snaps while scrolling slowly.** `ScrollTrigger.refresh()` reverts scroll-linked
   animations to measure, and timelines that had not started yet came back in their
   final state. In "What moves us" each number sat at full brightness until its row hit
   the trigger, then snapped 12px down and dim before easing back. A `refresh` listener
   (next to the resize code in `motion.*.js`) re-draws every not-yet-started (or
   finished) animation in its start (or end) state, with events suppressed.
   The early lock of the pinned section is `anticipatePin:1`, kept on purpose: it
   offsets iOS's threaded scrolling, even though a desktop test reads it as a small jump.
6. **Header blur removed.** `.site-header` had `backdrop-filter:blur(16px)` over a 93%
   opaque background; iOS re-blurs it every frame while scrolling. Now solid `#fafaf6`.

## Known, left as built

- Contact form opens the visitor's email app addressed to `info@zumfinet.com` (a
  different domain from zumfiwifi.com). Nothing posts to Netlify; `/merci/` is unused.
- The pinned scene only runs when it fits the screen (roughly ≥730px tall on laptops);
  shorter windows get a static, scrolling version.

## Testing locally

Serve the folder (`python3 -m http.server --directory export/zumfiwifi-site`) and drive
it with Playwright at phone, tablet and laptop sizes in both languages. For the pinned
section, also change the viewport height mid-scroll to mimic a phone toolbar.
