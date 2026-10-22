import React from 'react';
import type { ExperienceType } from '../../types/tutorial';

interface TutorialHeroProps {
  eyebrow: string;
  tone: 'neutral' | ExperienceType;
  title: string;
  description: string;
  chips?: string[];
  aside?: React.ReactNode;
}

const toneClasses: Record<TutorialHeroProps['tone'], {badge: string;dot: string;}> = {
  neutral: { badge: 'border-line-strong text-fg-muted', dot: 'bg-pink' },
  'self-service': { badge: 'border-lavender/30 bg-lavender/10 text-lavender', dot: 'bg-lavender' },
  'hoc-assisted': { badge: 'border-pink/30 bg-pink/10 text-pink-soft', dot: 'bg-pink' }
};

export function TutorialHero({ eyebrow, tone, title, description, chips, aside }: TutorialHeroProps) {
  const t = toneClasses[tone];
  return (
    <section className="grid gap-8 pb-8 pt-6 sm:pb-10 sm:pt-8 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-end lg:gap-12">
      <div>
        <span
          className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${t.badge}`}>
          
          <span className={`h-1.5 w-1.5 rounded-full ${t.dot}`} aria-hidden="true" />
          {eyebrow}
        </span>
        <h1 className="mt-5 max-w-3xl text-[2rem] font-semibold leading-[1.15] tracking-tight sm:text-[2.75rem] sm:leading-[1.1]">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-fg-muted sm:text-lg">{description}</p>
        {chips && chips.length > 0 &&
        <ul className="mt-6 flex flex-wrap gap-2">
            {chips.map((chip) =>
          <li key={chip} className="rounded-full border border-line bg-ink-800 px-3 py-1.5 text-[13px] text-fg-muted">
                {chip}
              </li>
          )}
          </ul>
        }
      </div>
      {aside}
    </section>);

}