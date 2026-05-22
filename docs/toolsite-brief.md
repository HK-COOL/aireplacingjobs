# Toolsite Brief

Date: 2026-05-22

## 1. One-line Positioning

`AI Replacing Jobs` helps workers, job seekers, students, and career switchers estimate AI exposure from a job title and daily tasks, then turn the result into a practical career survival plan.

## 2. Target Users

- Primary user: ordinary workers worried about AI changing or replacing their job.
- Urgent pain: they see headlines about AI job loss but do not know which parts of their own role are exposed.
- Existing workaround: generic article lists, old automation-risk databases, or title-only calculators.
- Why they would search: "AI replacing jobs", "will AI take my job", "jobs AI will replace", and "jobs safe from AI".

## 3. Search Intent and Keywords

| Type | Keywords | Intent |
| --- | --- | --- |
| Primary | AI replacing jobs, what jobs will AI replace | Understand whether AI is affecting work |
| Secondary | will AI take my job, AI job risk checker | Personal self-assessment |
| Long-tail pages | will AI replace software engineers, accountants, teachers | Occupation-specific risk |
| Statistics | AI replacing jobs statistics, AI job loss statistics | Evidence and context |

## 4. Reference Sites

| Site | What to learn | What to avoid |
| --- | --- | --- |
| Will Robots Take My Job | Searchable occupation-risk framing | Old robotics-heavy framing |
| TripleTen calculator | Calculator demand validation | Title-only output without enough task detail |
| SNHU article | Broad "what jobs will AI replace" intent | Passive article with no tool |

## 5. Core Workflow

- Input: job title, industry, experience level, work type, daily task checkboxes, optional custom tasks, AI usage level.
- Processing: deterministic score from job baseline, task exposure, work type, experience, and AI usage.
- Output: AI Exposure Score, Replacement Risk, summary, exposed tasks, protected tasks, skills, career plan, safer moves, disclaimer.
- Empty/error states: empty result panel, missing job title error, fewer than 3 tasks error.
- Success state: copy-ready exposure report.
- Example input: Junior Software Developer, Technology, Entry level, Mostly digital, coding/debugging, writing, research, spreadsheet analysis.
- Example output: High or Very High risk with coding boilerplate and routine digital tasks as exposed areas.

## 6. V1 Scope

Must build:

- Homepage and AI Job Risk Checker.
- Tool page and five SEO resource pages.
- Ten occupation pages.
- Legal pages, sitemap, metadata, favicon/logo/touch icon/preview image.
- Verification script for deterministic scoring.

Explicitly defer:

- Real AI provider calls.
- Login, credits, payments, database-backed history.
- PDF reports, email capture, shareable saved results.
- Large occupation database beyond the first ten pages.

## 7. ShipAny Feature Decisions

| Capability | V1 decision | Notes |
| --- | --- | --- |
| Login | No | Header sign-in disabled |
| Payment | No | No pricing CTA |
| Credits | No | No AI provider usage |
| Database | No runtime dependency | Template SQLite defaults retained only for compatibility |
| AI provider | None | Deterministic rules only |
| File storage | No | No uploads |
| Admin settings | No | Admin routes excluded from sitemap |
| Email | No | Contact email only |
| Analytics/ads | Deferred | Event names can be added after launch |

## 8. First-page Content Plan

- Hero promise: check whether AI is replacing jobs and which careers are at risk.
- Primary CTA: Check My Job Risk.
- Sections: hero, checker, exposed jobs, safer jobs, statistics context, methodology, FAQ, CTA.
- FAQ topics: AI replacing jobs, safest jobs, job-loss prediction boundary, score calculation.
- Metadata title: AI Replacing Jobs: Check Which Careers Are at Risk.
- Metadata description: enter job title and tasks to estimate AI exposure and get a plan.
- OpenGraph preview idea: clean labor-market risk checker graphic, not fear-based.

## 9. Risks and Assumptions

- Assumptions: English-only v1 is acceptable for the target search market.
- Product risks: users may overread score as a layoff prediction, so disclaimers must stay visible.
- Technical risks: template includes unused auth/admin/payment routes; sitemap and navigation must avoid them.
- SEO risks: occupation pages must be useful and internally linked, not thin pages.

## 10. Recommended Next Skill

Use `shipany-quick-start` next because the brief is build-ready and the site shell needs brand, metadata, navigation, assets, legal pages, and sitemap before tool implementation is considered complete.
