import { useState } from 'react';
import { CheckIcon } from 'lucide-react';
import { PreviewDialog } from '../PreviewDialog';
import type { FinalCtaConfig } from '../../types/tutorial';
import { buttonClasses } from '../../utils/buttonStyles';

export function TutorialFinalCTA({ config }: {config: FinalCtaConfig;}) {
  const [open, setOpen] = useState(false);

  return (
    <section className="flex flex-col gap-5 rounded-2xl bg-ink-700 p-6 sm:p-8 md:flex-row md:items-center md:justify-between">
      <div>
        <h3 className="text-xl font-semibold text-white">{config.title}</h3>
        <p className="mt-1.5 text-[15px] text-fg-muted">{config.description}</p>
      </div>
      <button type="button" onClick={() => setOpen(true)} className={`${buttonClasses('primary', 'lg')} shrink-0`}>
        {config.buttonLabel}
      </button>

      <PreviewDialog open={open} onClose={() => setOpen(false)} title={config.preview.title}>
        <p>{config.preview.body}</p>
        <ul className="mt-4 space-y-2.5">
          {config.preview.points.map((point) =>
          <li key={point} className="flex gap-2.5 text-white">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-lavender" aria-hidden="true" />
              {point}
            </li>
          )}
        </ul>
        <p className="mt-5 rounded-lg border border-dashed border-line-strong px-3 py-2.5 text-[13px] text-fg-subtle">
          Prototype only — no order, payment or account is created.
        </p>
        <button type="button" onClick={() => setOpen(false)} className={`${buttonClasses('secondary', 'md')} mt-5 w-full`}>
          Back to tutorial
        </button>
      </PreviewDialog>
    </section>);

}