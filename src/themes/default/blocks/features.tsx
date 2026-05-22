'use client';

import { SmartIcon } from '@/shared/blocks/common/smart-icon';
import { ScrollAnimation } from '@/shared/components/ui/scroll-animation';
import { cn } from '@/shared/lib/utils';
import { Section } from '@/shared/types/blocks/landing';

export function Features({
  section,
  className,
}: {
  section: Section;
  className?: string;
}) {
  return (
    <section
      id={section.id}
      className={cn('py-16 md:py-24', section.className, className)}
    >
      <div className={`container space-y-8 md:space-y-16`}>
        <ScrollAnimation>
          <div className="mx-auto max-w-4xl text-center text-balance">
            <h2 className="text-foreground mb-4 text-3xl font-semibold tracking-tight md:text-4xl">
              {section.title}
            </h2>
            <p className="text-muted-foreground mb-6 md:mb-12 lg:mb-16">
              {section.description}
            </p>
          </div>
        </ScrollAnimation>

        <ScrollAnimation delay={0.2}>
          <div className="relative mx-auto grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {section.items?.map((item, idx) => (
              <div
                className="min-w-0 space-y-3 rounded-lg border bg-card p-5 shadow-sm sm:p-6"
                key={idx}
              >
                <div className="flex min-w-0 items-center gap-2">
                  <SmartIcon name={item.icon as string} size={24} />
                  <h3 className="min-w-0 text-sm font-medium break-words">{item.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm leading-6 break-words">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollAnimation>
      </div>
    </section>
  );
}
