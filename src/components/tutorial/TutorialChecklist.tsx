import { useState } from 'react';
import { CheckIcon } from 'lucide-react';
import type { ChecklistItem, ExperienceType } from '../../types/tutorial';
import { pathTheme } from '../../utils/pathTheme';

interface TutorialChecklistProps {
  heading: string;
  description?: string;
  items: ChecklistItem[];
  experience: ExperienceType;
}

export function TutorialChecklist({ heading, description, items, experience }: TutorialChecklistProps) {
  const [checked, setChecked] = useState<string[]>([]);
  const t = pathTheme[experience];

  const toggle = (id: string) =>
  setChecked((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  return (
    <section>
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-white">{heading}</h3>
          {description && <p className="mt-1 text-sm text-fg-subtle">{description}</p>}
        </div>
        <span className="text-[13px] tabular-nums text-fg-subtle">
          {checked.length} of {items.length} reviewed
        </span>
      </div>
      <ul className="mt-4 divide-y divide-line overflow-hidden rounded-xl border border-line bg-ink-800">
        {items.map((item) => {
          const isChecked = checked.includes(item.id);
          return (
            <li key={item.id}>
              <button
                type="button"
                role="checkbox"
                aria-checked={isChecked}
                onClick={() => toggle(item.id)}
                className="flex w-full items-start gap-3.5 px-4 py-3.5 text-left transition-colors duration-150 hover:bg-white/[0.03] focus-visible:bg-white/[0.04] focus-visible:outline-none sm:px-5">
                
                <span
                  className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md border transition-colors duration-150 ${
                  isChecked ? `${t.solidBg} ${t.activeBorder} ${t.solidText}` : 'border-line-strong'}`
                  }>
                  
                  {isChecked && <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />}
                </span>
                <span>
                  <span className={`block text-[15px] leading-snug ${isChecked ? 'text-fg-muted' : 'text-white'}`}>
                    {item.label}
                  </span>
                  {item.detail && <span className="mt-1 block text-sm leading-relaxed text-fg-subtle">{item.detail}</span>}
                </span>
              </button>
            </li>);

        })}
      </ul>
    </section>);

}