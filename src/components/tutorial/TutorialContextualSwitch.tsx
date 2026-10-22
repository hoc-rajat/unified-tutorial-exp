import { Link } from 'react-router-dom';
import { ArrowLeftRightIcon, ArrowRightIcon } from 'lucide-react';
import type { ContextualSwitchConfig } from '../../types/tutorial';
import type { RelatedTarget } from '../../utils/tutorials';
import { pathTheme } from '../../utils/pathTheme';
import { tutorialPath } from '../../utils/routes';
import { buttonClasses } from '../../utils/buttonStyles';

interface TutorialContextualSwitchProps {
  config: ContextualSwitchConfig;
  target: RelatedTarget;
}

export function TutorialContextualSwitch({ config, target }: TutorialContextualSwitchProps) {
  const t = pathTheme[target.experience];
  const to = tutorialPath(target.experience, target.step?.id);

  return (
    <aside className="flex flex-col gap-5 rounded-2xl border border-line bg-ink-800 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
      <div className="flex gap-4">
        <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${t.softBg} ${t.text}`}>
          <ArrowLeftRightIcon className="h-5 w-5" aria-hidden="true" />
        </span>
        <div>
          <p className="text-[15px] font-semibold text-white">{config.title}</p>
          <p className="mt-1 text-sm leading-relaxed text-fg-muted">{config.description}</p>
          <p className="mt-2 text-[13px] text-fg-subtle">
            {target.step ?
            <>
                Opens <span className={t.text}>Step {target.stepNumber}</span> · {target.step.title}
              </> :

            <>No directly matching stage — opens the {t.label} path from the start.</>
            }
          </p>
        </div>
      </div>
      <Link to={to} className={`${buttonClasses('secondary', 'md')} shrink-0`}>
        {config.ctaLabel}
        <ArrowRightIcon className="h-4 w-4" aria-hidden="true" />
      </Link>
    </aside>);

}