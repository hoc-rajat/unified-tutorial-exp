import type { ExperienceType } from '../types/tutorial';

export const OVERVIEW_PATH = '/';
export const TUTORIAL_BASE_PATH = '/tutorials/netherlands/branch-registration';

export function tutorialPath(experience: ExperienceType, stepId?: string): string {
  return stepId ? `${TUTORIAL_BASE_PATH}/${experience}/${stepId}` : `${TUTORIAL_BASE_PATH}/${experience}`;
}