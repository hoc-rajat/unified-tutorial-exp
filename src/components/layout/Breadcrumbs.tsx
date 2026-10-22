import { Link } from 'react-router-dom';
import { ChevronRightIcon } from 'lucide-react';

export interface BreadcrumbItem {
  label: string;
  to?: string;
}

export function Breadcrumbs({ items }: {items: BreadcrumbItem[];}) {
  return (
    <nav aria-label="Breadcrumb" className="pt-6">
      <ol className="flex flex-wrap items-center gap-x-1.5 gap-y-1 text-[13px]">
        {items.map((item, i) => {
          const isLast = i === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {isLast ?
              <span aria-current="page" className="font-medium text-white">
                  {item.label}
                </span> :
              item.to ?
              <Link
                to={item.to}
                className="text-fg-subtle transition-colors duration-150 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender">
                
                  {item.label}
                </Link> :

              <span className="text-fg-subtle">{item.label}</span>
              }
              {!isLast && <ChevronRightIcon className="h-3.5 w-3.5 text-fg-subtle/60" aria-hidden="true" />}
            </li>);

        })}
      </ol>
    </nav>);

}