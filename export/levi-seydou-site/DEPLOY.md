# Deploying the Levi Seydou site to Vercel

This is a static site — no build step, no server. Just upload the files.

## Option A — Drag & drop (fastest, no account setup beyond signup)

1. Go to https://vercel.com and sign up / log in (free "Hobby" plan is fine).
2. Install the Vercel CLI is *not* required for drag-and-drop. Instead:
   - Click **Add New… → Project**.
   - Vercel's drag-and-drop deploy lives at https://vercel.com/new — drag this entire folder onto the page.
3. When asked for settings:
   - **Framework Preset:** Other
   - **Build Command:** leave EMPTY
   - **Output Directory:** leave EMPTY (or `.`)
   - **Install Command:** leave EMPTY
4. Click **Deploy**. In ~20 seconds you'll get a live URL like `levi-seydou.vercel.app`.

## Option B — Vercel CLI

1. Install: `npm i -g vercel`
2. From inside this folder, run: `vercel`
3. Accept the defaults (no build command, output = current directory).
4. Run `vercel --prod` to push it to your production URL.

## Custom domain

Once deployed: open the project in the Vercel dashboard → **Settings → Domains** → add your
domain (e.g. `leviseydou.com`) and follow the DNS instructions. SSL is automatic and free.

## Notes

- `index.html` is the entry point. All photos live in `assets/` and `assets/work/`.
- The site transpiles its React/JSX in the browser, so first paint has a small delay.
  If you'd like it pre-compiled for instant loads, ask and I'll prepare a production build.
- `vercel.json` just enables clean URLs — safe to keep or delete.
