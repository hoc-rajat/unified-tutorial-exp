import { Link } from 'react-router-dom';
import { ArrowRightIcon, CheckIcon } from 'lucide-react';
import type { PathCardContent } from '../../data/branchRegistrationOverview';
import { pathTheme } from '../../utils/pathTheme';
import { buttonClasses } from '../../utils/buttonStyles';

interface PathCardProps {
  content: PathCardContent;
  to: string;
  stepCount: number;
  completedCount: number;
}

export function PathCard({ content, to, stepCount, completedCount }: PathCardProps) {
  const t = pathTheme[content.experience];
  const Icon = t.icon;
  const ctaVariant = content.experience === 'self-service' ? 'lavender' : 'primary';

  return (
    <Link
      to={to}
      className={`group flex h-full flex-col rounded-2xl border border-line bg-ink-800 p-6 shadow-card transition-[border-color,transform] duration-200 ease-out hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender focus-visible:ring-offset-2 focus-visible:ring-offset-ink sm:p-8 ${t.hoverBorder}`}>
      
      <div className="flex items-start justify-between gap-4">
        <span className={`flex h-12 w-12 items-center justify-center rounded-xl ${t.softBg} ${t.text}`}>
          <Icon className="h-6 w-6" aria-hidden="true" />
        </span>
        <span className="text-[13px] text-fg-subtle">
          {completedCount > 0 ? `${completedCount} of ${stepCount} steps completed` : `${stepCount} steps`}
        </span>
      </div>

      <h3 className="mt-6 text-2xl font-semibold tracking-tight text-white">{content.title}</h3>
      <p className={`mt-1 text-[15px] font-medium ${t.text}`}>{content.subtitle}</p>
      <p className="mt-4 text-[15px] leading-relaxed text-fg-muted">{content.description}</p>

      <ul className="mt-6 space-y-3 border-t border-line pt-6">
        {content.highlights.map((h) =>
        <li key={h} className="flex items-start gap-3 text-[15px] text-white/90">
            <CheckIcon className={`mt-0.5 h-4 w-4 shrink-0 ${t.text}`} aria-hidden="true" />
            {h}
          </li>
        )}
      </ul>

      <div className="mt-auto pt-8">
        <span className={`${buttonClasses(ctaVariant, 'lg')} w-full sm:w-auto`}>
          {content.ctaLabel}
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-150 group-hover:translate-x-0.5" aria-hidden="true" />
        </span>
      </div>
    </Link>);

}