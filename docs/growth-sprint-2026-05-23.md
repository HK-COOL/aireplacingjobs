# AI Replacing Jobs Growth Sprint 1

Started: 2026-05-23

## Stage

Newly launched. IndexNow has accepted the sitemap URLs. Google Search Console and Bing Webmaster sitemap submissions are complete, and the first Search Console query impressions appeared on 2026-05-25.

## Money Hypothesis

If people searching "will AI take my job", "jobs AI will replace", and specific occupation-risk queries click from resource pages into the checker, then the site can later monetize with high-intent career planning assets, resume/workflow templates, or ads on occupation pages.

## Measurable Signal

Primary signal:

- `longtail_cta_click` from homepage, SEO pages, and occupation pages into the checker.

Secondary signals:

- `tool_check_risk`
- `tool_apply_preset`
- `tool_copy_result`
- top landing page before checker use
- indexed URLs and impressions in GSC/Bing

## Action Taken

- Added reusable tracked CTA links.
- Added `longtail_cta_click` measurement to homepage hero buttons, CTA blocks, resource-page buttons, occupation-page checker buttons, and related occupation links.
- Kept event payload low-risk: source, label, destination, and risk level where useful. No raw job titles or custom task text are sent.

## Query-Led SEO Update

Updated: 2026-05-25

First visible Google Search Console queries clustered around:

- `anthropic ai job loss forecast`
- `ai replacing jobs statistics`
- `ai job displacement statistics`
- `how many jobs have been replaced by ai`
- `what jobs are safe from ai`
- `safest jobs from ai`
- `what jobs will ai not replace`
- `jobs that are safe from ai`

Action taken:

- Strengthened `/ai-replacing-jobs-statistics/` for job loss, displacement, exposure, and the "how many jobs have been replaced by AI" query.
- Strengthened `/jobs-safe-from-ai/` for "what jobs are safe from AI", "safest jobs from AI", and "what jobs will AI not replace" variants.
- Strengthened `/anthropic-ai-job-loss-forecast/` for the exact Anthropic forecast query.
- Added related-guide internal links between the statistics, safe-jobs, Anthropic forecast, checker, and will-AI-take-my-job pages.
- Added homepage links into the safe-jobs and Anthropic forecast pages.

No new pages were added because the data is still early. The next page candidate is `/how-many-jobs-have-been-replaced-by-ai/`, but only if that query keeps appearing after the next data window.

## Follow-Up Decision

Re-check after search providers start showing impressions and Vercel Analytics has enough events.

Decision rule:

- If occupation pages drive checker clicks, expand the top 2-4 occupation clusters.
- If resource pages drive clicks but occupation pages do not, improve occupation-page copy and internal links before adding more jobs.
- If clicks are low across all pages, improve first-screen CTA clarity before adding monetization.
- If `how many jobs have been replaced by ai` continues to show impressions, create one focused page for that exact intent and link it from the statistics guide.
