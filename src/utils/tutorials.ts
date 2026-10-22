import { tutorials } from '../data/tutorials';
import type { ExperienceType, Tutorial, TutorialStep } from '../types/tutorial';

export function isExperienceType(value: string | undefined): value is ExperienceType {
  return value === 'self-service' || value === 'hoc-assisted';
}

export function getOtherExperience(experience: ExperienceType): ExperienceType {
  return experience === 'self-service' ? 'hoc-assisted' : 'self-service';
}

export interface RelatedTarget {
  experience: ExperienceType;
  step: TutorialStep | null;
  stepNumber: number | null;
}

/** Resolves the explicitly mapped counterpart step in the other learning path. */
export function resolveRelatedTarget(tutorial: Tutorial, stepId: string): RelatedTarget {
  const experience = getOtherExperience(tutorial.experienceType);
  const other = tutorials[experience];
  const relatedId = tutorial.relatedSteps[stepId] ?? null;
  const index = relatedId ? other.steps.findIndex((s) => s.id === relatedId) : -1;
  return {
    experience,
    step: index >= 0 ? other.steps[index] : null,
    stepNumber: index >= 0 ? index + 1 : null
  };
}