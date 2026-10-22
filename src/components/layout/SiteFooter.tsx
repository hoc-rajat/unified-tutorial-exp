import { SiteLogo } from './SiteLogo';
import { footerColumns } from '../../data/siteNavigation';

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-line bg-ink-800/40">
      <div className="mx-auto grid max-w-site gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_repeat(3,1fr)]">
        <div className="max-w-xs">
          <SiteLogo />
          <p className="mt-4 text-sm leading-relaxed text-fg-subtle">
            Helping international businesses set up and operate in the Netherlands and across Europe.
          </p>
        </div>
        {footerColumns.map((col) =>
        <div key={col.title}>
            <h2 className="text-sm font-semibold text-white">{col.title}</h2>
            <ul className="mt-3 space-y-2">
              {col.links.map((link) =>
            <li key={link} className="text-sm text-fg-subtle">
                  {link}
                </li>
            )}
            </ul>
          </div>
        )}
      </div>
      <div className="border-t border-line">
        <div className="mx-auto flex max-w-site flex-col gap-2 px-5 py-5 text-xs text-fg-subtle sm:flex-row sm:justify-between sm:px-8">
          <p>© 2026 House of Companies</p>
          <p>UX prototype — illustrative content, not legal, tax or commercial guidance.</p>
        </div>
      </div>
    </footer>);

}