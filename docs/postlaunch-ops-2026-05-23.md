# AI Replacing Jobs Postlaunch Ops

Updated: 2026-05-23

## Live Surface

- Primary URL: `https://www.aireplacingjobs.org`
- Apex URL: `https://aireplacingjobs.org`
- Sitemap: `https://aireplacingjobs.org/sitemap.xml`
- Robots: `https://aireplacingjobs.org/robots.txt`
- IndexNow key: `https://aireplacingjobs.org/aijobs20260523indexnow35a02c0d.txt`
- Google verification file: `https://aireplacingjobs.org/googlec256dbd7e09b37ee.html`
- Google verification meta tag: `google-site-verification`

## Completed

- Vercel production deploy is live from GitHub `main`.
- Homepage, checker page, robots, sitemap, and IndexNow key return `200` on the custom domain.
- Sitemap contains 17 public indexable URLs and excludes blocked template/private routes.
- Vercel Analytics code is present in the production runtime bundle.
- Tool action events are in the production bundle: `tool_check_risk`, `tool_apply_preset`, and `tool_copy_result`.
- Long-tail CTA clicks are tracked with `longtail_cta_click`.
- IndexNow accepted 17 sitemap URLs on 2026-05-23.
- Google Search Console URL-prefix verification file has been added to the app and should remain in `public/`.
- Google Search Console meta verification tag has been added to the document head and should remain in layout.

## Still Needs Provider Console Work

- Google Search Console: click Verify for `https://www.aireplacingjobs.org/` using the already-live HTML file or meta tag, then submit `https://aireplacingjobs.org/sitemap.xml`.
- Bing Webmaster: sign in with a Microsoft account, add/import the site, and submit or resubmit `https://aireplacingjobs.org/sitemap.xml`.
- Vercel Analytics: after manual tool interactions, confirm the first custom events appear.

## First Growth Hypothesis

If visitors landing on "will AI take my job" and occupation pages use the checker, then task-level interaction and copy-result events should identify which job clusters deserve the next content sprint.

Re-check signal after the first indexing and analytics window:

- impressions and indexed URLs in Search Console/Bing
- `tool_check_risk` count
- `tool_copy_result` count
- `longtail_cta_click` count by source page
- top landing page before tool use
