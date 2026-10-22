import { Building2Icon, UserIcon } from 'lucide-react';
import type { ResponsibilityColumn } from '../../types/tutorial';

interface TutorialResponsibilityProps {
  heading: string;
  customer: ResponsibilityColumn;
  hoc: ResponsibilityColumn;
}

export function TutorialResponsibility({ heading, customer, hoc }: TutorialResponsibilityProps) {
  const columns = [
  { ...customer, icon: UserIcon, box: 'border-line bg-ink-800', iconBox: 'bg-lavender/10 text-lavender', bullet: 'bg-lavender' },
  { ...hoc, icon: Building2Icon, box: 'border-pink/25 bg-pink/[0.04]', iconBox: 'bg-pink/10 text-pink-soft', bullet: 'bg-pink' }];

  return (
    <section>
      <h3 className="text-lg font-semibold text-white">{heading}</h3>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {columns.map(({ title, items, icon: Icon, box, iconBox, bullet }) =>
        <div key={title} className={`rounded-xl border p-5 ${box}`}>
            <div className="flex items-center gap-3">
              <span className={`flex h-9 w-9 items-center justify-center rounded-lg ${iconBox}`}>
                <Icon className="h-[18px] w-[18px]" aria-hidden="true" />
              </span>
              <h4 className="text-[15px] font-semibold text-white">{title}</h4>
            </div>
            <ul className="mt-4 space-y-2.5">
              {items.map((item) =>
            <li key={item} className="flex gap-3 text-[15px] leading-snug text-fg-muted">
                  <span className={`mt-[9px] h-1 w-1 shrink-0 rounded-full ${bullet}`} aria-hidden="true" />
                  {item}
                </li>
            )}
            </ul>
          </div>
        )}
      </div>
      <p className="mt-3 text-[13px] text-fg-subtle">
        Illustrative division of roles. Actual responsibilities are confirmed per engagement.
      </p>
    </section>);

}