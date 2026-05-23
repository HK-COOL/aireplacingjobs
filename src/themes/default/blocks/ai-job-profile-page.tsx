import { ArrowRight } from 'lucide-react';

import { getOccupationBySlug } from '@/shared/lib/ai-site-content';
import { getRiskLevel } from '@/shared/lib/ai-job-risk';
import { TrackedLink } from '@/shared/components/analytics/tracked-link';
import { Button } from '@/shared/components/ui/button';
import type { Section } from '@/shared/types/blocks/landing';

export function AiJobProfilePage({ section }: { section: Section }) {
  const profile = getOccupationBySlug(section.jobSlug as string);

  if (!profile) {
    return null;
  }

  const riskLevel = getRiskLevel(profile.baseRisk);
  const related = profile.relatedSlugs
    ?.map((slug) => getOccupationBySlug(slug))
    .filter(Boolean);

  return (
    <section id={section.id} className="overflow-x-hidden py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl">
          <p className="text-primary text-sm font-medium uppercase tracking-normal">
            Occupation risk profile
          </p>
          <h1 className="text-foreground mt-3 text-3xl leading-tight font-semibold break-words sm:text-balance md:text-5xl">
            Will AI Replace {profile.title}?
          </h1>
          <p className="text-muted-foreground mt-5 text-base leading-7 md:text-lg md:leading-8">
            {profile.shortAnswer}
          </p>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-lg border bg-card p-5 shadow-sm">
            <p className="text-muted-foreground text-sm">Baseline AI exposure score</p>
            <p className="mt-2 text-5xl font-semibold tracking-normal">
              {profile.baseRisk}/100
            </p>
            <p className="mt-3 inline-flex rounded-full bg-muted px-3 py-1 text-sm font-medium">
              {riskLevel} exposure
            </p>
            <p className="text-muted-foreground mt-5 text-sm leading-6">
              This is a baseline for the job title. Your personal risk can change
              based on your daily tasks, seniority, and how much of your work is
              digital or in-person.
            </p>
            <Button asChild className="mt-5 w-full">
              <TrackedLink
                href="/ai-job-risk-checker/"
                eventContext={{
                  source: `job:${profile.slug}`,
                  label: 'Check my job risk',
                  destination: '/ai-job-risk-checker/',
                  risk_level: riskLevel,
                }}
              >
                Check my job risk
                <ArrowRight className="size-4" />
              </TrackedLink>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <InfoCard title="Tasks most exposed to AI" items={profile.whyAtRisk} />
            <InfoCard title="Tasks less exposed to AI" items={profile.saferTasks} />
            <InfoCard title="Skills to learn" items={profile.skillsToLearn} />
            <InfoCard title="Safer career moves" items={profile.saferMoves} />
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-5xl rounded-lg border bg-card p-6 shadow-sm">
          <h2 className="text-2xl font-semibold">
            Is {profile.title} a good career in the age of AI?
          </h2>
          <p className="text-muted-foreground mt-4 leading-7">
            The best answer depends on whether the role grows beyond routine
            production. {profile.title} work becomes more resilient when it
            includes domain judgment, accountability, communication, and the
            ability to use AI tools without blindly trusting them.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-5xl">
          <h2 className="text-2xl font-semibold">FAQ</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <InfoText
              title={`Can AI fully replace ${profile.title}?`}
              text="It can replace or compress some tasks, but full replacement depends on the role, employer, workflow, regulation, and how much human trust or accountability is required."
            />
            <InfoText
              title={`Which parts of ${profile.title} are most exposed?`}
              text={profile.whyAtRisk.join(', ')}
            />
            <InfoText
              title={`What skills can help ${profile.title} stay relevant?`}
              text={profile.skillsToLearn.join(', ')}
            />
            <InfoText
              title={`What should I do next?`}
              text="Run the personal checker with your own daily tasks, then build a 90-day plan around the most exposed parts of your work."
            />
          </div>
        </div>

        {related?.length ? (
          <div className="mx-auto mt-10 max-w-5xl">
          <h2 className="text-2xl font-semibold">Compare related career profiles</h2>
            <div className="mt-4 flex flex-wrap gap-3">
              {related.map((item) =>
                item ? (
                  <Button key={item.slug} asChild variant="outline">
                    <TrackedLink
                      href={`/jobs/${item.slug}/`}
                      eventContext={{
                        source: `job:${profile.slug}`,
                        label: item.title,
                        destination: `/jobs/${item.slug}/`,
                      }}
                    >
                      {item.title}
                    </TrackedLink>
                  </Button>
                ) : null
              )}
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-lg border bg-card p-5 shadow-sm">
      <h2 className="font-semibold">{title}</h2>
      <ul className="text-muted-foreground mt-3 space-y-2 text-sm">
        {items.map((item) => (
          <li key={item} className="flex gap-2 leading-6">
            <span className="mt-2 size-1.5 flex-none rounded-full bg-primary" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function InfoText({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-lg border bg-card p-5 shadow-sm">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-muted-foreground mt-3 text-sm leading-6">{text}</p>
    </div>
  );
}
