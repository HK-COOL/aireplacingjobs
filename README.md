# AI Replacing Jobs

AI Replacing Jobs is a public toolsite for estimating AI job exposure from a job title and daily tasks.

Live domain: `https://aireplacingjobs.org`

Primary live URL: `https://www.aireplacingjobs.org`

Local project path: `C:\Users\xuner\Documents\工具站\sites\aireplacingjobs`

## V1 Scope

- Deterministic AI Job Risk Checker.
- No login, payment, credits, database-backed history, PDF export, email capture, or AI provider call.
- Public pages for the homepage, checker, AI job lists, statistics, Anthropic explainer, and 10 occupation profiles.
- Legal pages, sitemap, robots, favicon, logo, touch icon, browser icon, preview image, Google verification file, and IndexNow key.

## Key Files

- Tool logic: `src/shared/lib/ai-job-risk.ts`
- Tool UI block: `src/themes/default/blocks/ai-job-risk-checker.tsx`
- Resource content: `src/shared/lib/ai-site-content.ts`
- Resource page block: `src/themes/default/blocks/ai-resource-page.tsx`
- Occupation page block: `src/themes/default/blocks/ai-job-profile-page.tsx`
- Tracked CTA links: `src/shared/components/analytics/tracked-link.tsx`
- Locale page registration: `src/config/locale/index.ts`
- Homepage and SEO pages: `src/config/locale/messages/en/pages/**/*.json`
- Sitemap: `public/sitemap.xml`
- Robots: `src/app/robots.ts`
- V1 API/demo route blocking: `src/proxy.ts`

## Local Commands

Use the workspace pnpm runner:

```powershell
C:\Users\xuner\Documents\工具站\.tools\pnpm-win-x64-10.33.4\pnpm.exe exec tsx scripts/verify-ai-job-risk.ts
C:\Users\xuner\Documents\工具站\.tools\pnpm-win-x64-10.33.4\pnpm.exe exec tsx scripts/verify-site-quality.ts
C:\Users\xuner\Documents\工具站\.tools\pnpm-win-x64-10.33.4\pnpm.exe exec tsx scripts/verify-launch-readiness.ts
C:\Users\xuner\Documents\工具站\.tools\pnpm-win-x64-10.33.4\pnpm.exe exec tsc --noEmit
```

Production-style build on Windows:

```powershell
$env:VERCEL='1'
$env:CI='1'
$env:NEXT_TELEMETRY_DISABLED='1'
C:\Users\xuner\Documents\工具站\.tools\pnpm-win-x64-10.33.4\pnpm.exe exec next build --webpack
```

Run locally after build:

```powershell
C:\Users\xuner\Documents\工具站\.tools\pnpm-win-x64-10.33.4\pnpm.exe exec next start -p 3000
```

Submit IndexNow after sitemap changes:

```powershell
C:\Users\xuner\Documents\工具站\.tools\pnpm-win-x64-10.33.4\pnpm.exe exec tsx scripts/submit-indexnow.ts
```

## Public V1 Routes

- `/`
- `/ai-job-risk-checker`
- `/jobs-ai-will-replace`
- `/jobs-safe-from-ai`
- `/will-ai-take-my-job`
- `/ai-replacing-jobs-statistics`
- `/anthropic-ai-job-loss-forecast`
- `/jobs/software-engineer`
- `/jobs/accountant`
- `/jobs/customer-service-representative`
- `/jobs/data-analyst`
- `/jobs/copywriter`
- `/jobs/graphic-designer`
- `/jobs/teacher`
- `/jobs/lawyer`
- `/jobs/financial-analyst`
- `/jobs/translator`
- `/privacy-policy`
- `/terms-of-service`

Template demo routes and all API routes are blocked or absent in v1.

## Launch And Indexing Status

- GitHub repo: `https://github.com/HK-COOL/aireplacingjobs`
- Host: Vercel.
- DNS: Cloudflare; apex and `www` both resolve to Vercel.
- IndexNow accepted the 17 public sitemap URLs on 2026-05-23.
- Google Search Console verification and sitemap submission were completed manually on 2026-05-23.
- Bing Webmaster site add/import and sitemap submission were completed manually on 2026-05-23.
- Search provider crawl, discovery, and indexed URL counts may lag after submission.
