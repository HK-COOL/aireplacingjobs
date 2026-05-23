# AI Replacing Jobs Retrospective

Updated: 2026-05-23

## Outcome

AI Replacing Jobs v1 reached Stage 1 closeout:

- Live custom domain on Vercel and Cloudflare.
- Deterministic checker shipped with route, sitemap, launch, and quality verifiers.
- Homepage, tool page, SEO resource pages, occupation pages, legal pages, robots, sitemap, and branded assets are in place.
- IndexNow, Google Search Console, and Bing Webmaster submissions are complete.
- Stage 2 should wait for search and analytics signals before adding AI features or more content.

## What Worked

- A narrow deterministic v1 kept the launch manageable and avoided early AI/provider complexity.
- Verifiers caught sitemap, route registration, brand asset, and analytics coverage issues before launch.
- Visual QA across resource and occupation pages exposed table clipping that automated checks would not have caught.
- IndexNow gave an immediate submission signal while GSC/Bing were still processing.
- Event tracking for tool actions and long-tail CTAs gives Stage 2 a measurable baseline.

## Lessons To Carry Forward

- Start each toolsite in a fresh conversation, clean workspace, separate repo, and separate domain/provider state.
- Do not treat a brand-new site with no data as a product problem. Wait for early Search Console, Bing, and analytics signals before expanding.
- AI features should be added only when query or event data identifies a specific workflow that needs AI, such as personalized reports, resume rewrites, or job-description analysis.
- Search Console failures can be account/property issues even when verification files and meta tags are live.
- Provider-console work completed manually by the owner must be reflected in README, handoff, and postlaunch docs immediately.
- On Windows, read Markdown with UTF-8-aware tooling when checking Chinese paths. Default terminal output can look garbled even when the file is correct.
- Tables and comparison grids need explicit desktop and mobile review; horizontal scrolling alone is not enough if users cannot read the content comfortably.

## SOP Updates Made

- Added toolsite isolation rules to the reusable SOP and `toolsite-sop` skill.
- Added a required visual/content QA pass before launch.
- Added provider account/property checks for Google Search Console and Bing Webmaster.
- Added observation-sprint guidance for brand-new sites with no data.
- Added guidance to defer AI expansion until data reveals the right workflow.
- Added UTF-8/path hygiene and stale provider-TODO cleanup to closeout expectations.

## Current Next Decision

Do not expand the site yet. Re-check after the first provider processing window:

- GSC/Bing sitemap discovery, indexed URLs, crawl errors, and first impressions.
- Vercel Analytics custom events: `tool_check_risk`, `tool_copy_result`, and `longtail_cta_click`.
- Top landing pages and tool-action path.

Use that data to choose the first Stage 2 sprint.
