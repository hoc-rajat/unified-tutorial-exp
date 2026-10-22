import { useEffect, useRef } from 'react';
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { SiteShell } from '../components/layout/SiteShell';
import { Breadcrumbs } from '../components/layout/Breadcrumbs';
import { FrameworkAnnotation } from '../components/FrameworkAnnotation';
import { TutorialHero } from '../components/tutorial/TutorialHero';
import { TutorialPathSelector } from '../components/tutorial/TutorialPathSelector';
import { TutorialLayout } from '../components/tutorial/TutorialLayout';
import { TutorialSidebar } from '../components/tutorial/TutorialSidebar';
import { TutorialMobileContents } from '../components/tutorial/TutorialMobileContents';
import { TutorialStepContent } from '../components/tutorial/TutorialStepContent';
import { tutorials } from '../data/tutorials';
import { useTutorialProgress } from '../hooks/useTutorialProgress';
import type { ExperienceType } from '../types/tutorial';
import { isExperienceType, resolveRelatedTarget } from '../utils/tutorials';
import { OVERVIEW_PATH, tutorialPath } from '../utils/routes';

export function TutorialPage() {
  const { experience, stepId } = useParams();
  const navigate = useNavigate();
  const progress = useTutorialProgress();
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = contentRef.current;
    if (!el) return;
    const top = el.getBoundingClientRect().top;
    if (top < 0) {
      window.scrollTo({ top: top + window.scrollY - 140, behavior: 'smooth' });
    }
  }, [experience, stepId]);

  if (!isExperienceType(experience)) return <Navigate to={OVERVIEW_PATH} replace />;

  const tutorial = tutorials[experience];
  const foundIndex = stepId ? tutorial.steps.findIndex((s) => s.id === stepId) : 0;
  if (foundIndex < 0) return <Navigate to={tutorialPath(experience)} replace />;

  const stepIndex = foundIndex;
  const step = tutorial.steps[stepIndex];
  const completedIds = progress.getCompleted(tutorial.tutorialId);
  const relatedTarget = resolveRelatedTarget(tutorial, step.id);

  const goToStep = (id: string) => navigate(tutorialPath(experience, id));

  const handleSwitchPath = (target: ExperienceType) => {
    navigate(tutorialPath(target, relatedTarget.step?.id));
  };

  const handleNext = () => {
    progress.markComplete(tutorial.tutorialId, step.id);
    const next = tutorial.steps[stepIndex + 1];
    if (next) goToStep(next.id);
  };

  const handlePrev = () => {
    const prev = tutorial.steps[stepIndex - 1];
    if (prev) goToStep(prev.id);
  };

  const navProps = {
    steps: tutorial.steps,
    activeStepId: step.id,
    completedIds,
    experience,
    onSelect: goToStep,
    onReset: () => progress.reset(tutorial.tutorialId)
  };

  return (
    <SiteShell>
      <FrameworkAnnotation name="Breadcrumbs">
        <Breadcrumbs
          items={[
          { label: 'Home', to: OVERVIEW_PATH },
          { label: 'Tutorials', to: OVERVIEW_PATH },
          { label: tutorial.topic, to: OVERVIEW_PATH },
          { label: tutorial.breadcrumbLabel }]
          } />
        
      </FrameworkAnnotation>

      <FrameworkAnnotation name="TutorialHero">
        <TutorialHero eyebrow={tutorial.badge} tone={experience} title={tutorial.title} description={tutorial.description} />
      </FrameworkAnnotation>

      <FrameworkAnnotation name="TutorialPathSelector">
        <TutorialPathSelector active={experience} onSelect={handleSwitchPath} />
      </FrameworkAnnotation>

      <div ref={contentRef}>
        <TutorialLayout sidebar={<TutorialSidebar {...navProps} />} mobileNav={<TutorialMobileContents {...navProps} />}>
          <TutorialStepContent
            tutorial={tutorial}
            stepIndex={stepIndex}
            isCompleted={completedIds.includes(step.id)}
            relatedTarget={relatedTarget}
            onToggleComplete={() => progress.toggleComplete(tutorial.tutorialId, step.id)}
            onPrev={handlePrev}
            onNext={handleNext} />
          
        </TutorialLayout>
      </div>
    </SiteShell>);

}