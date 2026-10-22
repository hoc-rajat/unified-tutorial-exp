import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import { TutorialProgress } from './TutorialProgress';
import { TutorialStepList } from './TutorialStepList';
import type { TutorialNavProps } from './TutorialSidebar';

export function TutorialMobileContents({ steps, activeStepId, completedIds, experience, onSelect }: TutorialNavProps) {
  const [open, setOpen] = useState(false);
  const activeIndex = steps.findIndex((s) => s.id === activeStepId);
  const active = steps[activeIndex];

  return (
    <div className="sticky top-16 z-30 -mx-5 border-b border-line bg-ink/95 px-5 py-3 backdrop-blur sm:-mx-8 sm:px-8 lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls="mobile-tutorial-contents"
        className="flex w-full items-center justify-between gap-3 rounded-xl border border-line bg-ink-800 px-4 py-3 text-left">
        
        <span className="min-w-0">
          <span className="block text-xs text-fg-subtle">
            Contents · Step {activeIndex + 1} of {steps.length}
          </span>
          <span className="block truncate text-sm font-semibold text-white">{active?.title}</span>
        </span>
        <ChevronDownIcon
          className={`h-5 w-5 shrink-0 text-fg-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          aria-hidden="true" />
        
      </button>
      <AnimatePresence initial={false}>
        {open &&
        <motion.div
          id="mobile-tutorial-contents"
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="overflow-hidden">
          
            <div className="mt-2 max-h-[60vh] overflow-y-auto rounded-xl border border-line bg-ink-800 p-3">
              <div className="px-2.5 pb-3 pt-1">
                <TutorialProgress completed={completedIds.length} total={steps.length} experience={experience} />
              </div>
              <TutorialStepList
              steps={steps}
              activeStepId={activeStepId}
              completedIds={completedIds}
              experience={experience}
              onSelect={(id) => {
                setOpen(false);
                onSelect(id);
              }} />
            
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}