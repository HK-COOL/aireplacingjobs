# AI Replacing Jobs Deployment Runbook

Date: 2026-05-22

## Target

- Host: Vercel
- Domain: `https://aireplacingjobs.org`
- Build command: `pnpm exec next build --webpack`
- Install command: `pnpm install --frozen-lockfile`

Current note: `aireplacingjobs.org` returned `NXDOMAIN` during local preflight, so the domain must be registered or configured before production cutover.

## Required Vercel Environment Variables

Use production scope unless a preview-specific value is needed.

```text
NEXT_PUBLIC_APP_URL=https://aireplacingjobs.org
NEXT_PUBLIC_APP_NAME=AI Replacing Jobs
NEXT_PUBLIC_APP_DESCRIPTION=Estimate AI exposure for your job title and daily tasks.
NEXT_PUBLIC_APP_LOGO=/logo.png
NEXT_PUBLIC_APP_FAVICON=/favicon.ico
NEXT_PUBLIC_APP_PREVIEW_IMAGE=/preview.png
NEXT_PUBLIC_DEFAULT_LOCALE=en
NEXT_PUBLIC_THEME=default
NEXT_PUBLIC_APPEARANCE=light
DATABASE_PROVIDER=sqlite
DATABASE_URL=file:data/local.db
DB_SCHEMA_FILE=./src/config/db/schema.sqlite.ts
DB_MIGRATIONS_OUT=./src/config/db/migrations_sqlite
DB_SINGLETON_ENABLED=true
DB_MAX_CONNECTIONS=1
AUTH_SECRET=<set in Vercel only if auth is enabled later>
```

Do not commit real secrets to source files.

## Pre-Deploy

Run locally:

```powershell
pnpm exec tsx scripts/verify-ai-job-risk.ts
pnpm exec tsx scripts/verify-site-quality.ts
pnpm exec tsx scripts/verify-launch-readiness.ts
pnpm exec tsc --noEmit
$env:VERCEL='1'; $env:NEXT_TELEMETRY_DISABLED='1'; pnpm exec next build --webpack
```

## Preview Deploy Checks

- Homepage renders current copy.
- `/ai-job-risk-checker` renders the actual checker.
- `/jobs-ai-will-replace`, `/jobs-safe-from-ai`, and `/ai-replacing-jobs-statistics` have readable tables/cards.
- `/sitemap.xml` returns only public indexable URLs.
- `/robots.txt` blocks private/template routes and points to the sitemap.
- `/pricing`, `/blog`, `/docs`, `/chat`, `/settings`, `/admin`, `/api/ai/generate`, `/sign-in`, and `/sign-up` return `404`.
- Browser tab icon, touch icon, and preview image are product-branded.

## Production Cutover Checks

- DNS resolves for `aireplacingjobs.org`.
- `https://aireplacingjobs.org` returns current live HTML.
- Canonical URLs use `https://aireplacingjobs.org`.
- Sitemap URLs use `https://aireplacingjobs.org`.
- HTTPS is active.
- Preview image is reachable at `/preview.png`.
- Favicon is reachable at `/favicon.ico`.

## Indexing

After production cutover:

- Submit `https://aireplacingjobs.org/sitemap.xml` to Google Search Console.
- Submit `https://aireplacingjobs.org/sitemap.xml` to Bing Webmaster.
- Submit changed URLs through IndexNow if credentials are available.
- Record provider lag as status, not failure.
