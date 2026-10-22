import { SiteShell } from '../components/layout/SiteShell';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { FrameworkAnnotation } from '../components/FrameworkAnnotation';
import { TutorialHero } from '../components/tutorial/TutorialHero';
import { PathCard } from '../components/overview/PathCard';
import { PathComparison } from '../components/overview/PathComparison';
import { TutorialCatalog } from '../components/overview/TutorialCatalog';
import { overviewFacts, overviewHero, pathCards } from '../data/branchRegistrationOverview';
import { tutorials } from '../data/tutorials';
import { useTutorialProgress } from '../hooks/useTutorialProgress';
import { tutorialPath } from '../utils/routes';

export function TutorialOverview() {
  const progress = useTutorialProgress();

  return (
    <SiteShell>
      <FrameworkAnnotation name="Breadcrumbs">
        <Breadcrumbs
          items={[{ label: 'Home' }, { label: 'Tutorials' }, { label: 'Netherlands' }, { label: 'Branch Registration' }]} />
        
      </FrameworkAnnotation>

      <FrameworkAnnotation name="TutorialHero">
        <TutorialHero
          eyebrow={overviewHero.eyebrow}
          tone="neutral"
          title={overviewHero.title}
          description={overviewHero.description}
          chips={overviewHero.chips}
          aside={
          <dl className="hidden rounded-2xl border border-line bg-ink-800 p-5 lg:block">
              {overviewFacts.map((fact, i) =>
            <div key={fact.label} className={`flex justify-between gap-4 py-2.5 text-sm ${i > 0 ? 'border-t border-line' : ''}`}>
                  <dt className="text-fg-subtle">{fact.label}</dt>
                  <dd className="font-medium text-white">{fact.value}</dd>
                </div>
            )}
            </dl>
          } />
        
      </FrameworkAnnotation>

      <section aria-labelledby="choose-path" className="mt-4">
        <h2 id="choose-path" className="text-2xl font-semibold tracking-tight text-white">
          Choose your learning path
        </h2>
        <p className="mt-2 max-w-2xl text-[15px] text-fg-muted">
          Both paths cover the same registration journey from a different perspective. You can switch at any step.
        </p>
        <div className="mt-7 grid gap-5 md:grid-cols-2">
          {pathCards.map((card) => {
            const tutorial = tutorials[card.experience];
            return (
              <FrameworkAnnotation key={card.experience} name="TutorialPathCard" className="h-full">
                <PathCard
                  content={card}
                  to={tutorialPath(card.experience, tutorial.steps[0].id)}
                  stepCount={tutorial.steps.length}
                  completedCount={progress.getCompleted(tutorial.tutorialId).length} />
                
              </FrameworkAnnotation>);

          })}
        </div>
      </section>

      <PathComparison />
      <TutorialCatalog />
    </SiteShell>);

}