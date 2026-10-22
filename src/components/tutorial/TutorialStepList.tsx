import { CheckIcon } from 'lucide-react';
import type { ExperienceType, TutorialStep } from '../../types/tutorial';
import { pathTheme } from '../../utils/pathTheme';

interface TutorialStepListProps {
  steps: TutorialStep[];
  activeStepId: string;
  completedIds: string[];
  experience: ExperienceType;
  onSelect: (stepId: string) => void;
}

export function TutorialStepList({ steps, activeStepId, completedIds, experience, onSelect }: TutorialStepListProps) {
  const t = pathTheme[experience];
  return (
    <ol className="space-y-0.5">
      {steps.map((step, i) => {
        const active = step.id === activeStepId;
        const done = completedIds.includes(step.id);
        return (
          <li key={step.id}>
            <button
              type="button"
              onClick={() => onSelect(step.id)}
              aria-current={active ? 'step' : undefined}
              className={`group flex w-full items-start gap-3 rounded-lg px-2.5 py-2.5 text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender ${
              active ? 'bg-white/[0.06]' : 'hover:bg-white/[0.03]'}`
              }>
              
              <span
                className={`mt-px flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-semibold transition-colors duration-150 ${
                done ?
                `${t.solidBg} ${t.solidText}` :
                active ?
                `border-2 ${t.activeBorder} ${t.text}` :
                'border border-line-strong text-fg-subtle'}`
                }>
                
                {done ? <CheckIcon className="h-3.5 w-3.5" strokeWidth={3} aria-label="Completed" /> : i + 1}
              </span>
              <span
                className={`text-sm leading-snug ${
                active ? 'font-semibold text-white' : 'text-fg-muted group-hover:text-white'}`
                }>
                
                {step.title}
              </span>
            </button>
          </li>);

      })}
    </ol>);

}