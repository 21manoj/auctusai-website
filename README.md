# AuctusAI / CS Pulse — Marketing Site

A static, no-build marketing site rewrite for auctusai.ai. Plain HTML/CSS/JS —
no framework, no build step — so it deploys to Cloudflare Pages (or any static
host) with zero configuration.

## What's in here

```
index.html      → the marketing homepage
styles.css       → all styling / design tokens (shared by every page)
script.js        → auto-detects dropped-in demo videos, scroll reveal, etc.
assets/img/      → static images / placeholder graphics
assets/videos/   → put your demo clips here (see below)
blog/            → blog index + individual post pages (see below)
```

## The blog

`blog/index.html` is the post listing page. Each post is its own static HTML
file in `blog/` (e.g. `blog/the-health-score-that-lied.html`) — there's no
build step or templating engine, so a "new post" is just a copy of an
existing post file with the header/footer chrome left alone and the
`<article class="post-body">` content swapped out.

Ships seeded with four placeholder posts so the section looks complete
before real content exists:

| Post | Topic |
|---|---|
| `the-health-score-that-lied.html` | Why single-number health scores miss compounding churn risk |
| `gpu-utilization-early-signal.html` | Utilization metrics as an early renewal signal, by vertical |
| `expansion-window-land-and-expand.html` | Reading adoption velocity as an expansion signal |
| `partner-channel-health-signal.html` | Channel/partner engagement as a churn signal |

To add a post: copy one of the files above, update the `<title>`/meta tags
and the `.post-hero` header, replace the `.post-body` content, then add a
matching `.post-card` link to `blog/index.html` and to the "From the Blog"
teaser section in the homepage `index.html`.

## Deploy to Cloudflare Pages

1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial marketing site"
   git branch -M main
   git remote add origin https://github.com/<your-org>/auctusai-site.git
   git push -u origin main
   ```
2. In the Cloudflare dashboard: **Workers & Pages → Create → Pages → Connect to Git**.
3. Select the repo. Build settings:
   - **Framework preset:** None
   - **Build command:** *(leave blank)*
   - **Build output directory:** `/`
4. Deploy. Cloudflare will give you a `*.pages.dev` URL immediately.
5. To use `auctusai.ai`: **Custom domains** tab in the Pages project → add the
   domain → follow the DNS prompts (Cloudflare handles this automatically if
   the domain's nameservers are already on Cloudflare).

That's it — no environment variables, no build pipeline.

## Dropping in the demo video clips

The site ships with styled placeholder boxes instead of real video (four on
the homepage, one on the blog), so it looks intentional and complete even
before you have footage. Each placeholder tells you exactly what to record
and where to put the file.

| # | File to add | Length | What to record |
|---|---|---|---|
| 1 | `assets/videos/01-hero-overview.mp4` | 45–60s | Full platform walkthrough: dashboard → health scores → context graph → CSM daily actions |
| 2 | `assets/videos/02-silent-churn-detection.mp4` | 40–50s | The Silent Churn scenario: healthy score → context graph flags champion drop-off + competitor POC → Renewal Safeguard fires |
| 3 | `assets/videos/03-playbook-trigger.mp4` | 30–40s | A playbook firing end-to-end: trigger condition met → owner assigned → dollar impact shown |
| 4 | `assets/videos/04-cta-teaser.mp4` | 15–20s loop | Silent, muted, looping — dashboard "breathing," a signal pulsing. No narration. |
| 5 | `assets/videos/blog-health-score-explainer.mp4` | 60–90s | Blog-only clip on the "Health Score That Lied" post: a score sitting at 78 while champion drop-off, a skipped QBR, and a competitive POC stack up underneath it. |

**To add a clip:** export an `.mp4`, name it exactly as above, and drop it in
`assets/videos/`. Reload the page — `script.js` checks whether each file
exists and automatically swaps the placeholder for the real, autoplaying,
muted, looping video. No HTML editing required.

Keep each file reasonably light (H.264, ~1080p, under ~15MB) since they
autoplay on load — Cloudflare Pages serves static assets over its CDN so
delivery is fast, but a lighter file still means a faster first paint.

### If you'd rather generate the clips first

See the earlier discussion — good fast options are Arcade, Guidde, or
Screen.studio/Descript for a DIY screen-recorded cut. Script structure that
matches these placeholders:

1. **0–10s** — the problem ("Health score says 78. Healthy. But...")
2. **10–35s** — CS Pulse detecting the pattern (context graph, arc match, playbook trigger)
3. **35–50s** — the outcome (dollar figure, CSM action resolved)
4. **50–60s** — logo + call to action

## Editing copy or design tokens

- All copy lives directly in `index.html` and, for blog content, in the
  individual `blog/*.html` files — it's plain marked-up text, safe to edit
  directly.
- Colors, type, spacing are defined as CSS custom properties at the top of
  `styles.css` under `:root` — change a token there to restyle the whole site
  consistently.

## Browser support

Modern evergreen browsers (Chrome, Safari, Firefox, Edge). Respects
`prefers-reduced-motion`. Responsive down to ~360px mobile widths.
