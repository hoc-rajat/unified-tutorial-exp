import { useId, type ReactNode } from 'react';

interface TutorialVisualFrameProps {
  title: string;
  caption: string;
  children: ReactNode;
  schematic?: boolean;
}

/** Keeps the illustration replaceable while retaining its label and caption. */
export function TutorialVisualFrame({ title, caption, children, schematic = false }: TutorialVisualFrameProps) {
  const titleId = useId();
  return (
    <figure aria-labelledby={titleId} className="mx-auto w-full min-w-0 max-w-[700px]">
      <div className="overflow-hidden rounded-2xl border border-lavender/30 bg-ink-700/40 shadow-card">
        <header className="border-b border-lavender/15 bg-ink-700/50 px-5 py-4 sm:px-7">
          <p className="text-xs font-semibold leading-relaxed text-lavender">
            {schematic ? 'Schematic form close-up' : 'Illustrative walkthrough'}
          </p>
          <h3 id={titleId} className="mt-1.5 text-lg font-semibold leading-snug text-white">{title}</h3>
          <p className="mt-2 text-xs leading-relaxed text-fg-muted">Illustrative example — check current official requirements.</p>
        </header>
        <div className="min-w-0 p-4 sm:p-7">{children}</div>
      </div>
      <figcaption className="px-2 pt-3 text-center text-sm leading-relaxed text-fg-muted sm:px-6">{caption}</figcaption>
    </figure>
  );
}
