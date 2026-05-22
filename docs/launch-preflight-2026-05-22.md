# AI Replacing Jobs Launch Preflight

Date: 2026-05-22

Target domain: `https://aireplacingjobs.org`

## Current Status

Status: ready for preview deployment with external launch blockers.

The v1 site builds locally through the Vercel-style webpack path, and the local production server returns 200 for all public v1 routes. Template demo, auth, settings, admin, and API routes are blocked from the public v1 surface.

Final production launch still needs external access: GitHub remote, Vercel project connection, domain DNS/HTTPS, and search console accounts.

Current domain probe:

- `aireplacingjobs.org` currently returns `NXDOMAIN` from DNS lookup.
- `https://aireplacingjobs.org` cannot be verified until the domain exists and DNS is configured.

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

## Non-Blocking Caveats

- The template still contains unused admin/auth/chat/settings page files, but v1 navigation, sitemap, robots, and proxy block public access to those surfaces.
- The production build logs a local SQLite config warning from template services: `Unable to open connection to local database data/local.db`. The deterministic v1 public site does not depend on DB-backed runtime config.
- `baseline-browser-mapping` emits an age warning during build. This is not a v1 launch blocker.
- `AUTH_SECRET` is intentionally blank in source env samples. Set a real secret only inside Vercel if auth routes are ever enabled.

## Launch Blockers

No local code blocker remains for a preview deploy.

Before final production cutover:

- Push this workspace to the production GitHub repository.
- Connect the GitHub repository to Vercel.
- Register or configure `aireplacingjobs.org`; current DNS lookup returns `NXDOMAIN`.
- Confirm Vercel build command is `pnpm exec next build --webpack`.
- Set production `NEXT_PUBLIC_APP_URL` to `https://aireplacingjobs.org`.
- Add a real `AUTH_SECRET` in Vercel only if auth is enabled later.
- Configure `aireplacingjobs.org` DNS and HTTPS.
- Re-check live HTML, robots, sitemap, canonical URLs, favicon, touch icon, and preview image from the custom domain.
- Submit sitemap to IndexNow, Google Search Console, and Bing Webmaster after deploy.
