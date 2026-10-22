import { CheckIcon, CircleIcon, FileTextIcon, SearchIcon } from 'lucide-react';
import type { InstructionalVisualBlock } from '../../types/tutorial';
import { TutorialVisualFrame } from './TutorialVisualFrame';

export function TutorialInstructionalVisual({ block }: { block: InstructionalVisualBlock }) {
  const routes = block.variant === 'routes';
  const completion = block.variant === 'completion';
  const fields = block.variant === 'fields';

  return (
    <TutorialVisualFrame title={block.title} caption={block.caption} schematic={fields}>
      {completion && (
        <div className="mb-5 flex flex-col items-center gap-2 text-center">
          <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-lavender/30 bg-lavender/10 text-lavender">
            <FileTextIcon className="h-6 w-6" aria-hidden="true" />
          </span>
          <p className="text-sm font-semibold text-lavender">Example record · not your registration status</p>
        </div>
      )}

      <div className={`grid min-w-0 gap-4 ${routes ? 'sm:grid-cols-2' : ''}`}>
        {block.sections.map((section) => (
          <section key={section.heading} className="min-w-0 overflow-hidden rounded-xl border border-line-strong bg-ink-800">
            <div className="flex items-start gap-2.5 border-b border-line px-4 py-3">
              <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded bg-lavender/10 text-xs font-semibold text-lavender" aria-hidden="true">
                <FileTextIcon className="h-3.5 w-3.5" />
              </span>
              <h4 className="text-sm font-semibold leading-relaxed text-white">{section.heading}</h4>
            </div>
            <dl className={fields ? 'grid gap-3 p-4 sm:grid-cols-2' : 'divide-y divide-line'}>
              {section.rows.map((row) => (
                <div key={row.label} className={fields
                  ? `min-w-0 rounded-lg border p-3 ${row.emphasis ? 'border-lavender/50 bg-lavender/10 sm:col-span-2' : 'border-line bg-ink/50'}`
                  : `min-w-0 px-4 py-3 ${row.emphasis ? 'border-l-2 border-l-lavender bg-lavender/5' : ''}`}>
                  <dt className="flex items-start gap-2 text-xs font-medium leading-relaxed text-fg-muted">
                    {row.status && (row.status === 'included'
                      ? <CheckIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lavender" aria-hidden="true" />
                      : <CircleIcon className="mt-0.5 h-3.5 w-3.5 shrink-0 text-fg-muted" aria-hidden="true" />)}
                    {row.label}
                    {row.status && <span className="ml-auto shrink-0 text-[11px] text-lavender">{row.status === 'included' ? 'In example' : 'To check'}</span>}
                  </dt>
                  <dd className="mt-1 break-words text-sm leading-relaxed text-white">{row.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        ))}
      </div>

      <p className="mt-4 flex items-start gap-2 rounded-lg border border-lavender/20 bg-ink/40 p-3.5 text-sm leading-relaxed text-fg-muted">
        {completion && <SearchIcon className="mt-0.5 h-4 w-4 shrink-0 text-lavender" aria-hidden="true" />}
        <span>{block.note}</span>
      </p>
    </TutorialVisualFrame>
  );
}
