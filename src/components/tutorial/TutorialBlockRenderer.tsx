import { DecisionCard } from './DecisionCard';
import { TutorialInstructionalVisual } from './TutorialInstructionalVisual';
import { TutorialChecklist } from './TutorialChecklist';
import { TutorialInfoCard } from './TutorialInfoCard';
import { TutorialAccordion } from './TutorialAccordion';
import { TutorialProcedure } from './TutorialProcedure';
import { TutorialPortalPreview } from './TutorialPortalPreview';
import { TutorialResponsibility } from './TutorialResponsibility';
import { FrameworkAnnotation } from '../FrameworkAnnotation';
import type { ContentBlock, ExperienceType } from '../../types/tutorial';

interface TutorialBlockRendererProps {
  block: ContentBlock;
  experience: ExperienceType;
}

/** Maps a content block from the data configuration to its shared component. */
export function TutorialBlockRenderer({ block, experience }: TutorialBlockRendererProps) {
  switch (block.type) {
    case 'visual':
      return <TutorialInstructionalVisual block={block} />;
    case 'decision':
      return <DecisionCard block={block} />;
    case 'text':
      return (
        <section>
          {block.heading && <h3 className="text-lg font-semibold text-white">{block.heading}</h3>}
          <div className={`space-y-4 ${block.heading ? 'mt-3' : ''}`}>
            {block.body.map((p) =>
            <p key={p} className="max-w-[68ch] text-base leading-[1.75] text-fg-muted">
                {p}
              </p>
            )}
          </div>
        </section>);

    case 'checklist':
      return (
        <FrameworkAnnotation name="TutorialChecklist">
          <TutorialChecklist heading={block.heading} description={block.description} items={block.items} experience={experience} />
        </FrameworkAnnotation>);

    case 'info':
      return (
        <FrameworkAnnotation name="TutorialInfoCard">
          <TutorialInfoCard tone={block.tone} title={block.title} body={block.body} />
        </FrameworkAnnotation>);

    case 'accordion':
      return <TutorialAccordion heading={block.heading} items={block.items} />;
    case 'procedure':
      return <TutorialProcedure heading={block.heading} items={block.items} experience={experience} />;
    case 'portal':
      return (
        <FrameworkAnnotation name="TutorialPortalPreview">
          <TutorialPortalPreview heading={block.heading} description={block.description} />
        </FrameworkAnnotation>);

    case 'responsibility':
      return <TutorialResponsibility heading={block.heading} customer={block.customer} hoc={block.hoc} />;
  }
}
