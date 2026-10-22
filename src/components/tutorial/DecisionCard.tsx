import { useId, useState } from 'react';
import { PreviewDialog } from '../PreviewDialog';
import type { DecisionCardBlock } from '../../types/tutorial';
import { buttonClasses } from '../../utils/buttonStyles';

export function DecisionCard({ block }: { block: DecisionCardBlock }) {
  const headingId = useId();
  const [open, setOpen] = useState(false);

  return (
    <section aria-labelledby={headingId} className="min-w-0 overflow-hidden rounded-2xl border border-lavender/30 bg-ink-800">
      <div className="space-y-5 p-5 sm:p-6">
        <header>
          <p className="text-xs font-semibold uppercase tracking-wider text-lavender">Decision check</p>
          <h3 id={headingId} className="mt-2 text-xl font-semibold leading-snug text-white">{block.question}</h3>
        </header>

        <dl className="grid gap-4 text-sm leading-relaxed sm:grid-cols-2">
          <div>
            <dt className="font-semibold text-white">Why this matters</dt>
            <dd className="mt-1 text-fg-muted">{block.why}</dd>
          </div>
          <div>
            <dt className="font-semibold text-white">Where to check</dt>
            <dd className="mt-1 text-fg-muted">{block.evidence}</dd>
          </div>
        </dl>

        {block.confirmation && (
          <p className="rounded-lg border border-lavender/20 bg-lavender/5 px-4 py-3 text-sm leading-relaxed text-fg-muted">
            <span className="font-semibold text-lavender">Needs owner confirmation: </span>
            {block.confirmation}
          </p>
        )}

        <ul className="divide-y divide-line rounded-xl border border-line bg-ink/40">
          {block.outcomes.map((outcome) => (
            <li key={outcome.label} className="px-4 py-3.5">
              <h4 className="text-sm font-semibold text-lavender">{outcome.label}</h4>
              <p className="mt-1 text-sm leading-relaxed text-fg-muted">{outcome.action}</p>
            </li>
          ))}
        </ul>

        {block.qaPrompt && (
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <button type="button" onClick={() => setOpen(true)} className={buttonClasses('secondary', 'sm')}>
              Preview Q&A Request
            </button>
            <span className="text-xs text-fg-subtle">Prototype only — no request is sent.</span>
          </div>
        )}
      </div>

      {block.commonMistake && (
        <p className="border-t border-amber-300/20 bg-amber-300/5 px-5 py-3 text-sm leading-relaxed text-fg-muted sm:px-6">
          <span className="font-semibold text-amber-200">Common mistake: </span>
          {block.commonMistake}
        </p>
      )}

      {block.qaPrompt && (
        <PreviewDialog open={open} onClose={() => setOpen(false)} title="Q&A Request — prototype preview">
          <p className="font-medium text-white">{block.question}</p>
          <p className="mt-3">{block.qaPrompt}</p>
          <p className="mt-4">No request is sent and no session is booked. The Q&A destination and availability require owner confirmation.</p>
          <button type="button" onClick={() => setOpen(false)} className={`${buttonClasses('secondary', 'sm')} mt-5`}>
            Back to tutorial
          </button>
        </PreviewDialog>
      )}
    </section>
  );
}
