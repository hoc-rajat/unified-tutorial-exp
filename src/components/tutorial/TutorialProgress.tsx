import { motion } from 'framer-motion';
import type { ExperienceType } from '../../types/tutorial';
import { pathTheme } from '../../utils/pathTheme';

interface TutorialProgressProps {
  completed: number;
  total: number;
  experience: ExperienceType;
}

export function TutorialProgress({ completed, total, experience }: TutorialProgressProps) {
  const pct = total === 0 ? 0 : Math.round(completed / total * 100);
  return (
    <div>
      <div className="flex items-baseline justify-between text-[13px]">
        <span className="text-fg-muted">
          <span className="font-semibold text-white">{completed}</span> of {total} completed
        </span>
        <span className="tabular-nums text-fg-subtle">{pct}%</span>
      </div>
      <div
        className="mt-2 h-1.5 overflow-hidden rounded-full bg-ink-700"
        role="progressbar"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={pct}
        aria-label="Tutorial progress">
        
        <motion.div
          className={`h-full rounded-full ${pathTheme[experience].solidBg}`}
          initial={false}
          animate={{ width: `${pct}%` }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }} />
        
      </div>
    </div>);

}