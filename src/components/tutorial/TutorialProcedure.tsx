import type { ExperienceType, ProcedureItem } from '../../types/tutorial';
import { pathTheme } from '../../utils/pathTheme';

interface TutorialProcedureProps {
  heading: string;
  items: ProcedureItem[];
  experience: ExperienceType;
}

export function TutorialProcedure({ heading, items, experience }: TutorialProcedureProps) {
  const t = pathTheme[experience];
  return (
    <section>
      <h3 className="text-lg font-semibold text-white">{heading}</h3>
      <ol className="mt-5">
        {items.map((item, i) =>
        <li key={item.title} className="relative flex gap-4 pb-6 last:pb-0">
            {i < items.length - 1 &&
          <span className="absolute left-[13px] top-8 h-[calc(100%-2rem)] w-px bg-line-strong" aria-hidden="true" />
          }
            <span
            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border text-xs font-semibold ${t.border} ${t.softBg} ${t.text}`}>
            
              {i + 1}
            </span>
            <div className="pt-0.5">
              <p className="text-[15px] font-medium text-white">{item.title}</p>
              <p className="mt-1 max-w-[64ch] text-[15px] leading-relaxed text-fg-muted">{item.body}</p>
            </div>
          </li>
        )}
      </ol>
    </section>);

}