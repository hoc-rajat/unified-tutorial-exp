import { Link } from 'react-router-dom';
import { ArrowLeftIcon, RotateCcwIcon } from 'lucide-react';
import { TutorialProgress } from './TutorialProgress';
import { TutorialStepList } from './TutorialStepList';
import { FrameworkAnnotation } from '../FrameworkAnnotation';
import type { ExperienceType, TutorialStep } from '../../types/tutorial';
import { OVERVIEW_PATH } from '../../utils/routes';

export interface TutorialNavProps {
  steps: TutorialStep[];
  activeStepId: string;
  completedIds: string[];
  experience: ExperienceType;
  onSelect: (stepId: string) => void;
  onReset: () => void;
}

export function TutorialSidebar({ steps, activeStepId, completedIds, experience, onSelect, onReset }: TutorialNavProps) {
  return (
    <div className="sticky top-24 max-h-[calc(100dvh-7rem)] overflow-y-auto">
      <FrameworkAnnotation name="TutorialSidebar">
        <nav aria-label="Tutorial contents" className="rounded-2xl border border-line bg-ink-800 p-4">
          <h2 className="px-2.5 text-sm font-semibold text-white">Tutorial contents</h2>
          <div className="mt-3 px-2.5">
            <FrameworkAnnotation name="TutorialProgress">
              <TutorialProgress completed={completedIds.length} total={steps.length} experience={experience} />
            </FrameworkAnnotation>
          </div>
          <div className="mt-4 border-t border-line pt-3">
            <TutorialStepList
              steps={steps}
              activeStepId={activeStepId}
              completedIds={completedIds}
              experience={experience}
              onSelect={onSelect} />
            
          </div>
        </nav>
      </FrameworkAnnotation>
      <div className="mt-4 flex items-center justify-between px-2">
        <Link
          to={OVERVIEW_PATH}
          className="inline-flex items-center gap-1.5 text-[13px] font-medium text-fg-subtle transition-colors duration-150 hover:text-white">
          
          <ArrowLeftIcon className="h-3.5 w-3.5" aria-hidden="true" />
          Back to overview
        </Link>
        {completedIds.length > 0 &&
        <button
          type="button"
          onClick={onReset}
          className="inline-flex items-center gap-1.5 text-[13px] text-fg-subtle transition-colors duration-150 hover:text-white">
          
            <RotateCcwIcon className="h-3.5 w-3.5" aria-hidden="true" />
            Reset
          </button>
        }
      </div>
    </div>);

}
