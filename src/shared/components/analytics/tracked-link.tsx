'use client';

import { forwardRef, type ComponentProps } from 'react';
import { track } from '@vercel/analytics';

import { Link } from '@/core/i18n/navigation';

type TrackedLinkProps = ComponentProps<typeof Link> & {
  eventName?: string;
  eventContext?: Record<string, string | number | boolean | null>;
};

export const TrackedLink = forwardRef<HTMLAnchorElement, TrackedLinkProps>(
  function TrackedLink(
    {
      eventName = 'longtail_cta_click',
      eventContext,
      href,
      onClick,
      ...props
    },
    ref
  ) {
    return (
      <Link
        ref={ref}
        href={href}
        onClick={(event) => {
          track(eventName, {
            href: typeof href === 'string' ? href : String(href),
            ...eventContext,
          });
          onClick?.(event);
        }}
        {...props}
      />
    );
  }
);
