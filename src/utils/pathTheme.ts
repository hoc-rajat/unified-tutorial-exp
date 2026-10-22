import { ClipboardListIcon, WorkflowIcon, type LucideIcon } from 'lucide-react';
import type { ExperienceType } from '../types/tutorial';

export interface PathTheme {
  label: string;
  shortLabel: string;
  text: string;
  softBg: string;
  border: string;
  activeBorder: string;
  hoverBorder: string;
  solidBg: string;
  solidText: string;
  ring: string;
  icon: LucideIcon;
}

/** The ONLY place the two paths differ visually: an accent treatment. */
export const pathTheme: Record<ExperienceType, PathTheme> = {
  'self-service': {
    label: 'Do It Yourself',
    shortLabel: 'Do It Yourself',
    text: 'text-lavender',
    softBg: 'bg-lavender/10',
    border: 'border-lavender/30',
    activeBorder: 'border-lavender',
    hoverBorder: 'hover:border-lavender/60',
    solidBg: 'bg-lavender',
    solidText: 'text-ink',
    ring: 'ring-lavender/70',
    icon: ClipboardListIcon
  },
  'hoc-assisted': {
    label: 'With House of Companies',
    shortLabel: 'With HOC',
    text: 'text-pink-soft',
    softBg: 'bg-pink/10',
    border: 'border-pink/30',
    activeBorder: 'border-pink',
    hoverBorder: 'hover:border-pink/60',
    solidBg: 'bg-pink',
    solidText: 'text-white',
    ring: 'ring-pink/70',
    icon: WorkflowIcon
  }
};