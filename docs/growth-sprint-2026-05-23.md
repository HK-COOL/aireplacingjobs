# AI Replacing Jobs Growth Sprint 1

Started: 2026-05-23

## Stage

Newly launched. IndexNow has accepted the sitemap URLs. Google Search Console and Bing Webmaster still need provider-console sitemap submission.

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

## Follow-Up Decision

Re-check after search providers start showing impressions and Vercel Analytics has enough events.

Decision rule:

- If occupation pages drive checker clicks, expand the top 2-4 occupation clusters.
- If resource pages drive clicks but occupation pages do not, improve occupation-page copy and internal links before adding more jobs.
- If clicks are low across all pages, improve first-screen CTA clarity before adding monetization.
