import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon, MenuIcon, XIcon } from 'lucide-react';
import { SiteLogo } from './SiteLogo';
import { PreviewDialog } from '../PreviewDialog';
import { siteNavItems } from '../../data/siteNavigation';
import { buttonClasses } from '../../utils/buttonStyles';

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [blueprintOpen, setBlueprintOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-ink/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-site items-center justify-between gap-6 px-5 sm:px-8">
        <SiteLogo />
        <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
          {siteNavItems.map((item) =>
          <button
            key={item.label}
            type="button"
            className="inline-flex h-9 items-center gap-1 rounded-md px-3 text-sm font-medium text-fg-muted transition-colors duration-150 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender">
            
              {item.label}
              {item.hasMenu && <ChevronDownIcon className="h-3.5 w-3.5 opacity-70" aria-hidden="true" />}
            </button>
          )}
        </nav>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setBlueprintOpen(true)}
            className={`${buttonClasses('outlineAccent', 'sm')} hidden sm:inline-flex`}>
            
            Get Your Blueprint
          </button>
          <button
            type="button"
            onClick={() => setMenuOpen((o) => !o)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            className="rounded-md p-2 text-fg-muted transition-colors duration-150 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender lg:hidden">
            
            {menuOpen ? <XIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence initial={false}>
        {menuOpen &&
        <motion.nav
          aria-label="Mobile"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="overflow-hidden border-t border-line lg:hidden">
          
            <div className="space-y-1 px-5 py-4">
              {siteNavItems.map((item) =>
            <button
              key={item.label}
              type="button"
              className="flex h-11 w-full items-center justify-between rounded-lg px-3 text-[15px] font-medium text-fg-muted hover:bg-white/5 hover:text-white">
              
                  {item.label}
                  {item.hasMenu && <ChevronDownIcon className="h-4 w-4 opacity-70" aria-hidden="true" />}
                </button>
            )}
              <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                setBlueprintOpen(true);
              }}
              className={`${buttonClasses('primary', 'md')} mt-3 w-full sm:hidden`}>
              
                Get Your Blueprint
              </button>
            </div>
          </motion.nav>
        }
      </AnimatePresence>

      <PreviewDialog open={blueprintOpen} onClose={() => setBlueprintOpen(false)} title="Get Your Blueprint">
        <p>
          On the live website, this opens the House of Companies blueprint flow. It is not part of this tutorial
          prototype.
        </p>
        <button type="button" onClick={() => setBlueprintOpen(false)} className={`${buttonClasses('secondary', 'md')} mt-5 w-full`}>
          Back to tutorial
        </button>
      </PreviewDialog>
    </header>);

}