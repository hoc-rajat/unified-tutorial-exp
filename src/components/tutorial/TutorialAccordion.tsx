import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
import type { AccordionItem } from '../../types/tutorial';

interface TutorialAccordionProps {
  heading: string;
  items: AccordionItem[];
}

export function TutorialAccordion({ heading, items }: TutorialAccordionProps) {
  const [openId, setOpenId] = useState<string | null>(items[0]?.id ?? null);

  return (
    <section>
      <h3 className="text-lg font-semibold text-white">{heading}</h3>
      <div className="mt-4 divide-y divide-line overflow-hidden rounded-xl border border-line bg-ink-800">
        {items.map((item) => {
          const open = openId === item.id;
          const panelId = `accordion-${item.id}`;
          return (
            <div key={item.id}>
              <button
                type="button"
                onClick={() => setOpenId(open ? null : item.id)}
                aria-expanded={open}
                aria-controls={panelId}
                className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left transition-colors duration-150 hover:bg-white/[0.03] focus-visible:bg-white/[0.04] focus-visible:outline-none sm:px-5">
                
                <span className="text-[15px] font-medium text-white">{item.title}</span>
                <ChevronDownIcon
                  className={`h-4 w-4 shrink-0 text-fg-subtle transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
                  aria-hidden="true" />
                
              </button>
              <AnimatePresence initial={false}>
                {open &&
                <motion.div
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
                  className="overflow-hidden">
                  
                    <p className="max-w-[68ch] px-4 pb-4 text-[15px] leading-relaxed text-fg-muted sm:px-5">{item.body}</p>
                  </motion.div>
                }
              </AnimatePresence>
            </div>);

        })}
      </div>
    </section>);

}