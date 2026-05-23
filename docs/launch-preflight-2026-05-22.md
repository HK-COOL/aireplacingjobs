# AI Replacing Jobs Launch Preflight

Updated: 2026-05-23

Target domain: `https://aireplacingjobs.org`

## Current Status

Status: launched with post-launch indexing and measurement follow-up in progress.

The v1 site builds locally through the Vercel-style webpack path, the GitHub repo is connected to Vercel, and the custom Cloudflare/Vercel DNS setup is verified by Vercel. Template demo, auth, settings, admin, and API routes are blocked from the public v1 surface.

Final public launch now needs provider-console follow-up: Google Search Console, Bing Webmaster, IndexNow, and the first analytics re-check.

Current live surface:

- GitHub: `https://github.com/HK-COOL/aireplacingjobs`
- Vercel production alias: `https://aireplacingjobs.vercel.app/`
- Primary custom URL: `https://www.aireplacingjobs.org`
- Apex: `https://aireplacingjobs.org`, configured to redirect to `www` after DNS propagation.

## Verified Locally

Commands:

```powershell
pnpm exec tsx scripts/verify-ai-job-risk.ts
pnpm exec tsx scripts/verify-site-quality.ts
pnpm exec tsx scripts/verify-launch-readiness.ts
pnpm exec tsc --noEmit
$env:VERCEL='1'; $env:CI='1'; $env:NEXT_TELEMETRY_DISABLED='1'; pnpm exec next build --webpack
```

Local production server:

```text
http://localhost:3000
```

Checked routes:

- 17 public v1 pages returned `200`.
- `/sitemap.xml` and `/robots.txt` returned `200`.
- `/pricing`, `/blog`, `/docs`, `/chat`, `/ai-image-generator`, `/settings`, `/admin`, `/api/ai/generate`, `/sign-in`, and `/sign-up` returned `404`.

## QA Fixes Completed

- Resource tables no longer require horizontal scrolling on desktop.
- Resource tables render as mobile cards on narrow screens.
- Mobile checker title and description no longer clip.
- Homepage and public HTML no longer serialize ShipAny template messages.
- Navigation labels and CTAs were shortened for readability.
- Canonical URLs and sitemap use the lowercase production domain.
- `vercel.json` no longer contains stale API function config.
- Vercel Analytics auto-loads on Vercel unless explicitly disabled.
- Core tool events are instrumented without sending raw job titles or custom task text.

## Non-Blocking Caveats

- The template still contains unused admin/auth/chat/settings page files, but v1 navigation, sitemap, robots, and proxy block public access to those surfaces.
- The production build logs a local SQLite config warning from template services: `Unable to open connection to local database data/local.db`. The deterministic v1 public site does not depend on DB-backed runtime config.
- `baseline-browser-mapping` emits an age warning during build. This is not a v1 launch blocker.
- `AUTH_SECRET` is intentionally blank in source env samples. Set a real secret only inside Vercel if auth routes are ever enabled.

## Launch Blockers

No local code blocker remains for launch.

Remaining SOP tasks:

- Re-check live HTML, robots, sitemap, canonical URLs, favicon, touch icon, and preview image from the custom domain after the latest deploy.
- Submit sitemap to IndexNow, Google Search Console, and Bing Webmaster.
- Confirm Vercel Analytics receives `tool_check_risk`, `tool_apply_preset`, and `tool_copy_result` events.
- Submit the 17 public sitemap URLs through IndexNow after the key file is live.
- Record the first re-check date and Stage 2 growth hypothesis before adding more pages or monetization.
