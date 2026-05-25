import { ArrowRight, ExternalLink } from 'lucide-react';

import { TrackedLink } from '@/shared/components/analytics/tracked-link';
import { Button } from '@/shared/components/ui/button';
import { resourcePages } from '@/shared/lib/ai-site-content';
import type { Section } from '@/shared/types/blocks/landing';

export function AiResourcePage({ section }: { section: Section }) {
  const content = resourcePages[section.pageKey as string];

  if (!content) {
    return null;
  }

  return (
    <section id={section.id} className="overflow-x-hidden py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <p className="text-primary text-sm font-medium tracking-normal uppercase">
            {content.eyebrow}
          </p>
          <h1 className="text-foreground mt-3 text-3xl leading-tight font-semibold break-words sm:text-balance md:text-5xl">
            {content.title}
          </h1>
          <p className="text-muted-foreground mt-5 text-base leading-7 md:text-lg md:leading-8">
            {content.intro}
          </p>
          <div className="bg-card mt-8 rounded-lg border p-5 shadow-sm">
            <h2 className="text-xl font-semibold">Short answer</h2>
            <p className="text-muted-foreground mt-3 leading-7">
              {content.shortAnswer}
            </p>
          </div>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl gap-6 xl:grid-cols-[0.78fr_1.22fr]">
          <div className="bg-card rounded-lg border p-5 shadow-sm">
            <h2 className="text-xl font-semibold">What to know</h2>
            <ul className="text-muted-foreground mt-4 space-y-3 text-sm">
              {content.bullets.map((item) => (
                <li key={item} className="flex gap-3 leading-6">
                  <span className="bg-primary mt-2 size-1.5 flex-none rounded-full" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <TrackedLink
                  href="/ai-job-risk-checker/"
                  eventContext={{
                    source: section.pageKey as string,
                    label: 'Check my job risk',
                    destination: '/ai-job-risk-checker/',
                  }}
                >
                  Check my job risk
                  <ArrowRight className="size-4" />
                </TrackedLink>
              </Button>
              <Button asChild variant="outline">
                <TrackedLink
                  href="/jobs-safe-from-ai/"
                  eventContext={{
                    source: section.pageKey as string,
                    label: 'See safer jobs',
                    destination: '/jobs-safe-from-ai/',
                  }}
                >
                  See safer jobs
                </TrackedLink>
              </Button>
            </div>
          </div>

          {content.rows?.length ? (
            <div className="bg-card min-w-0 overflow-hidden rounded-lg border shadow-sm">
              <div className="border-b p-5">
                <h2 className="text-xl font-semibold">{content.tableTitle}</h2>
              </div>
              <div className="hidden md:block">
                <table className="w-full table-fixed text-left text-sm">
                  <colgroup>
                    {(content.tableHeaders || []).map((header, index) => (
                      <col
                        key={header}
                        style={{
                          width:
                            index === 0
                              ? '25%'
                              : index ===
                                  (content.tableHeaders?.length || 0) - 1
                                ? '31%'
                                : '22%',
                        }}
                      />
                    ))}
                  </colgroup>
                  <thead className="bg-muted text-foreground">
                    <tr>
                      {content.tableHeaders?.map((header) => (
                        <th
                          key={header}
                          className="px-4 py-3 text-xs leading-5 font-semibold break-words whitespace-normal"
                        >
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {content.rows.map((row) => (
                      <tr key={row.join('-')} className="border-t">
                        {row.map((cell) => (
                          <td
                            key={cell}
                            className="text-muted-foreground px-4 py-4 align-top leading-6 break-words whitespace-normal"
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="grid gap-3 p-4 md:hidden">
                {content.rows.map((row) => (
                  <div
                    key={row.join('-')}
                    className="bg-background rounded-md border p-4"
                  >
                    {row.map((cell, index) => (
                      <div key={`${cell}-${index}`} className="not-last:mb-3">
                        <p className="text-foreground text-xs font-semibold tracking-normal uppercase">
                          {content.tableHeaders?.[index]}
                        </p>
                        <p className="text-muted-foreground mt-1 text-sm leading-6 break-words">
                          {cell}
                        </p>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        {content.citations?.length ? (
          <div className="bg-muted/40 mx-auto mt-10 max-w-5xl rounded-lg border p-5">
            <h2 className="font-semibold">Sources used for this page</h2>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              {content.citations.map((citation) => (
                <a
                  key={citation.url}
                  href={citation.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-muted-foreground hover:text-primary flex items-center gap-2 text-sm"
                >
                  <ExternalLink className="size-4" />
                  {citation.label}
                </a>
              ))}
            </div>
          </div>
        ) : null}

        {content.relatedLinks?.length ? (
          <div className="mx-auto mt-10 max-w-5xl">
            <h2 className="text-2xl font-semibold">Related guides</h2>
            <div className="mt-5 grid gap-4 md:grid-cols-3">
              {content.relatedLinks.map((link) => (
                <TrackedLink
                  key={link.url}
                  href={link.url}
                  className="group bg-card hover:border-primary/50 rounded-lg border p-5 shadow-sm transition-colors"
                  eventContext={{
                    source: section.pageKey as string,
                    label: link.label,
                    destination: link.url,
                  }}
                >
                  <h3 className="flex items-center gap-2 font-semibold">
                    {link.label}
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </h3>
                  <p className="text-muted-foreground mt-3 text-sm leading-6">
                    {link.description}
                  </p>
                </TrackedLink>
              ))}
            </div>
          </div>
        ) : null}

        <div className="mx-auto mt-12 max-w-5xl">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {content.faq.map((item) => (
              <div
                key={item.question}
                className="bg-card rounded-lg border p-5 shadow-sm"
              >
                <h3 className="font-semibold">{item.question}</h3>
                <p className="text-muted-foreground mt-3 text-sm leading-6">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-primary text-primary-foreground mx-auto mt-12 max-w-5xl rounded-lg p-6">
          <div className="grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <h2 className="text-2xl font-semibold">
                Check your own AI exposure
              </h2>
              <p className="mt-2 text-sm opacity-90">
                Generic job lists are useful, but your daily tasks matter more.
              </p>
            </div>
            <Button asChild variant="secondary">
              <TrackedLink
                href="/ai-job-risk-checker/"
                eventContext={{
                  source: section.pageKey as string,
                  label: 'Start the checker',
                  destination: '/ai-job-risk-checker/',
                }}
              >
                Start the checker
              </TrackedLink>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
