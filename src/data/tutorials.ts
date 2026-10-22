import type { ExperienceType, Tutorial } from '../types/tutorial';
import { selfServiceTutorial } from './selfServiceTutorial';
import { hocAssistedTutorial } from './hocAssistedTutorial';

/** One topic, two content configurations — rendered by the same tutorial system. */
export const tutorials: Record<ExperienceType, Tutorial> = {
  'self-service': selfServiceTutorial,
  'hoc-assisted': hocAssistedTutorial
};