import React, { useEffect, useId, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { XIcon } from 'lucide-react';

interface PreviewDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
}

export function PreviewDialog({ open, onClose, title, eyebrow = 'Prototype preview', children }: PreviewDialogProps) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const titleId = useId();

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    closeRef.current?.focus();
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  return createPortal(
    <AnimatePresence>
      {open &&
      <motion.div
        className="fixed inset-0 z-50 flex items-end justify-center p-4 sm:items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.18, ease: 'easeOut' }}>
        
          <div className="absolute inset-0 bg-black/60" onClick={onClose} aria-hidden="true" />
          <motion.div
          role="dialog"
          aria-modal="true"
          aria-labelledby={titleId}
          initial={{ opacity: 0, scale: 0.96, y: 8 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 8 }}
          transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
          className="relative w-full max-w-md rounded-2xl border border-line-strong bg-ink-800 p-6 text-white shadow-card">
          
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium text-lavender">{eyebrow}</p>
                <h2 id={titleId} className="mt-1 text-lg font-semibold">
                  {title}
                </h2>
              </div>
              <button
              ref={closeRef}
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="-mr-2 -mt-1 rounded-md p-2 text-fg-subtle transition-colors duration-150 hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender">
              
                <XIcon className="h-4 w-4" />
              </button>
            </div>
            <div className="mt-4 text-sm leading-relaxed text-fg-muted">{children}</div>
          </motion.div>
        </motion.div>
      }
    </AnimatePresence>,
    document.body
  );
}