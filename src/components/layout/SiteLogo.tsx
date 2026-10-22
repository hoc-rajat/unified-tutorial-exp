import { Link } from 'react-router-dom';
import { OVERVIEW_PATH } from '../../utils/routes';

export function SiteLogo() {
  return (
    <Link
      to={OVERVIEW_PATH}
      className="inline-flex items-center gap-2.5 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender"
      aria-label="House of Companies — home">
      
      <span aria-hidden="true" className="grid h-8 w-8 grid-cols-2 gap-[3px] rounded-lg bg-ink-700 p-[7px]">
        <span className="rounded-[2px] bg-pink" />
        <span className="rounded-[2px] bg-lavender" />
        <span className="rounded-[2px] bg-lavender" />
        <span className="rounded-[2px] bg-white" />
      </span>
      <span className="whitespace-nowrap text-[15px] font-semibold tracking-tight text-white">House of Companies</span>
    </Link>);

}