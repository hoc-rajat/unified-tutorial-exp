import { motion } from 'framer-motion';
import type { ExperienceType } from '../../types/tutorial';
import { pathTheme } from '../../utils/pathTheme';

interface TutorialPathSelectorProps {
  active: ExperienceType;
  onSelect: (experience: ExperienceType) => void;
}

const options: ExperienceType[] = ['self-service', 'hoc-assisted'];

export function TutorialPathSelector({ active, onSelect }: TutorialPathSelectorProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-line bg-ink-800 p-3 sm:flex-row sm:items-center sm:justify-between sm:pl-5">
      <div>
        <p className="text-sm font-medium text-white">Your learning path</p>
        <p className="mt-0.5 hidden text-[13px] text-fg-subtle sm:block">
          Switch anytime — you’ll land on the matching stage.
        </p>
      </div>
      <div role="group" aria-label="Learning path" className="grid grid-cols-2 gap-1 rounded-xl bg-ink p-1">
        {options.map((opt) => {
          const t = pathTheme[opt];
          const Icon = t.icon;
          const selected = opt === active;
          return (
            <button
              key={opt}
              type="button"
              aria-pressed={selected}
              onClick={() => !selected && onSelect(opt)}
              className={`relative inline-flex h-10 items-center justify-center gap-2 whitespace-nowrap rounded-lg px-4 text-sm font-semibold transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender ${
              selected ? t.solidText : 'text-fg-muted hover:text-white'}`
              }>
              
              {selected &&
              <motion.span
                layoutId="path-selector-pill"
                className={`absolute inset-0 rounded-lg ${t.solidBg}`}
                transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }} />

              }
              <Icon className="relative h-4 w-4" aria-hidden="true" />
              <span className="relative sm:hidden">{t.shortLabel}</span>
              <span className="relative hidden sm:inline">{t.label}</span>
            </button>);

        })}
      </div>
    </div>);

}