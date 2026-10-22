import { Link } from 'react-router-dom';
import { ArrowLeftIcon, ArrowRightIcon, CheckIcon } from 'lucide-react';
import type { TutorialStep } from '../../types/tutorial';
import { buttonClasses } from '../../utils/buttonStyles';
import { OVERVIEW_PATH } from '../../utils/routes';

interface TutorialStepNavigationProps {
  stepIndex: number;
  totalSteps: number;
  prevStep: TutorialStep | null;
  nextStep: TutorialStep | null;
  isLastCompleted: boolean;
  onPrev: () => void;
  onNext: () => void;
}

export function TutorialStepNavigation({
  stepIndex,
  totalSteps,
  prevStep,
  nextStep,
  isLastCompleted,
  onPrev,
  onNext
}: TutorialStepNavigationProps) {
  return (
    <nav aria-label="Step navigation" className="grid grid-cols-2 items-center gap-3 border-t border-line pt-6 sm:grid-cols-[1fr_auto_1fr]">
      <div>
        {prevStep &&
        <button type="button" onClick={onPrev} className={`${buttonClasses('secondary', 'lg')} w-full sm:w-auto`}>
            <ArrowLeftIcon className="h-4 w-4" aria-hidden="true" />
            Previous
            <span className="sr-only">: {prevStep.title}</span>
          </button>
        }
      </div>
      <p className="hidden text-[13px] tabular-nums text-fg-subtle sm:block">
        Step {stepIndex + 1} of {totalSteps}
      </p>
      <div className="flex justify-end">
        {nextStep ?
        <button type="button" onClick={onNext} className={`${buttonClasses('primary', 'lg')} w-full sm:w-auto`}>
            Next step
            <span className="sr-only">: {nextStep.title}</span>
            <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
          </button> :
        isLastCompleted ?
        <Link to={OVERVIEW_PATH} className={`${buttonClasses('secondary', 'lg')} w-full sm:w-auto`}>
            Back to overview
          </Link> :

        <button type="button" onClick={onNext} className={`${buttonClasses('primary', 'lg')} w-full sm:w-auto`}>
            <CheckIcon className="h-4 w-4" aria-hidden="true" />
            Complete tutorial
          </button>
        }
      </div>
    </nav>);

}