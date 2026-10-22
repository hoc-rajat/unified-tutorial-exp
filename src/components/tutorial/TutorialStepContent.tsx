import { motion } from 'framer-motion';
import { CheckIcon, ClockIcon } from 'lucide-react';
import { TutorialBlockRenderer } from './TutorialBlockRenderer';
import { TutorialResources } from './TutorialResources';
import { TutorialContextualSwitch } from './TutorialContextualSwitch';
import { TutorialFinalCTA } from './TutorialFinalCTA';
import { TutorialStepNavigation } from './TutorialStepNavigation';
import { FrameworkAnnotation } from '../FrameworkAnnotation';
import type { Tutorial } from '../../types/tutorial';
import type { RelatedTarget } from '../../utils/tutorials';
import { pathTheme } from '../../utils/pathTheme';

interface TutorialStepContentProps {
  tutorial: Tutorial;
  stepIndex: number;
  isCompleted: boolean;
  relatedTarget: RelatedTarget;
  onToggleComplete: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export function TutorialStepContent({
  tutorial,
  stepIndex,
  isCompleted,
  relatedTarget,
  onToggleComplete,
  onPrev,
  onNext
}: TutorialStepContentProps) {
  const step = tutorial.steps[stepIndex];
  const t = pathTheme[tutorial.experienceType];
  const isLast = stepIndex === tutorial.steps.length - 1;

  return (
    <motion.article
      key={`${tutorial.experienceType}-${step.id}`}
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
      aria-labelledby="step-heading">
      
      {stepIndex === 0 && tutorial.introduction && (
        <section aria-label="Before you begin" className="mb-10 space-y-6 border-b border-line pb-10">
          {tutorial.introduction.map((block, i) => (
            <TutorialBlockRenderer key={`introduction-${i}`} block={block} experience={tutorial.experienceType} />
          ))}
        </section>
      )}

      <FrameworkAnnotation name="TutorialStepContent">
        <header className="flex flex-col gap-4 border-b border-line pb-7 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className={`text-sm font-semibold ${t.text}`}>Step {stepIndex + 1}</p>
            <h2 id="step-heading" className="mt-2 text-[1.75rem] font-semibold leading-tight tracking-tight text-white sm:text-[2rem]">
              {step.heading ?? step.title}
            </h2>
            <p className="mt-2 inline-flex items-center gap-1.5 text-[13px] text-fg-subtle">
              <ClockIcon className="h-3.5 w-3.5" aria-hidden="true" />
              {step.readTime}
            </p>
          </div>
          <button
            type="button"
            onClick={onToggleComplete}
            aria-pressed={isCompleted}
            className={`inline-flex h-9 shrink-0 items-center gap-2 self-start whitespace-nowrap rounded-lg border px-3.5 text-sm font-medium transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender ${
            isCompleted ? `${t.border} ${t.softBg} ${t.text}` : 'border-line-strong text-fg-muted hover:border-lavender/50 hover:text-white'}`
            }>
            
            <CheckIcon className="h-4 w-4" aria-hidden="true" />
            {isCompleted ? 'Completed' : 'Mark as complete'}
          </button>
        </header>

        <p className="mt-7 max-w-[68ch] text-lg leading-relaxed text-white/90">{step.intro}</p>

        <div className="mt-10 space-y-10">
          {step.blocks.map((block, i) =>
          <TutorialBlockRenderer key={`${step.id}-${i}`} block={block} experience={tutorial.experienceType} />
          )}

          {step.resources && step.resources.length > 0 &&
          <FrameworkAnnotation name="TutorialResources">
              <TutorialResources heading={tutorial.resourcesHeading} resources={step.resources} />
            </FrameworkAnnotation>
          }
        </div>
      </FrameworkAnnotation>

      <div className="mt-12 space-y-6">
        <FrameworkAnnotation name="TutorialContextualSwitch">
          <TutorialContextualSwitch config={tutorial.contextualSwitch} target={relatedTarget} />
        </FrameworkAnnotation>

        {isLast && tutorial.finalCta &&
        <FrameworkAnnotation name="TutorialFinalCTA">
            <TutorialFinalCTA config={tutorial.finalCta} />
          </FrameworkAnnotation>
        }

        <FrameworkAnnotation name="TutorialStepNavigation">
          <TutorialStepNavigation
            stepIndex={stepIndex}
            totalSteps={tutorial.steps.length}
            prevStep={tutorial.steps[stepIndex - 1] ?? null}
            nextStep={tutorial.steps[stepIndex + 1] ?? null}
            isLastCompleted={isLast && isCompleted}
            onPrev={onPrev}
            onNext={onNext} />
          
        </FrameworkAnnotation>
      </div>
    </motion.article>);

}
