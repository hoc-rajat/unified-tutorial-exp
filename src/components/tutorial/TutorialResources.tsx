import { useState } from 'react';
import { ArrowUpRightIcon } from 'lucide-react';
import { PreviewDialog } from '../PreviewDialog';
import type { TutorialResource } from '../../types/tutorial';
import { buttonClasses } from '../../utils/buttonStyles';

interface TutorialResourcesProps {
  heading: string;
  resources: TutorialResource[];
}

export function TutorialResources({ heading, resources }: TutorialResourcesProps) {
  const [selected, setSelected] = useState<TutorialResource | null>(null);

  return (
    <section>
      <h3 className="text-lg font-semibold text-white">{heading}</h3>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {resources.map((r) =>
        <li key={r.id}>
            <button
            type="button"
            onClick={() => setSelected(r)}
            className="group flex h-full w-full items-start justify-between gap-4 rounded-xl border border-line bg-ink-800 p-4 text-left transition-colors duration-150 hover:border-lavender/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender">
            
              <span>
                <span className="block text-[15px] font-medium text-white">{r.label}</span>
                <span className="mt-1 block text-[13px] text-fg-subtle">{r.source}</span>
              </span>
              <ArrowUpRightIcon
              className="h-4 w-4 shrink-0 text-fg-subtle transition-colors duration-150 group-hover:text-lavender"
              aria-hidden="true" />
            
            </button>
          </li>
        )}
      </ul>

      <PreviewDialog open={selected !== null} onClose={() => setSelected(null)} title={selected?.label ?? ''} eyebrow="Link placeholder">
        <p>
          The verified link to <span className="text-white">{selected?.source}</span> will be added here once the content
          has been reviewed. No official URL is shown in this prototype.
        </p>
        <button type="button" onClick={() => setSelected(null)} className={`${buttonClasses('secondary', 'md')} mt-5 w-full`}>
          Close
        </button>
      </PreviewDialog>
    </section>);

}