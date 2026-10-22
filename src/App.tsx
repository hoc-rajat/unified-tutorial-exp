import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AnnotationProvider } from './contexts/AnnotationContext';
import { TutorialOverview } from './pages/TutorialOverview';
import { TutorialPage } from './pages/TutorialPage';
import { OVERVIEW_PATH, TUTORIAL_BASE_PATH } from './utils/routes';

interface AppProps {
  /** Outlines and labels the shared framework components — useful when presenting the architecture. */
  showFrameworkAnnotations?: boolean;
}

export function App({ showFrameworkAnnotations = false }: AppProps) {
  return (
    <AnnotationProvider enabled={showFrameworkAnnotations}>
      <BrowserRouter>
        <Routes>
          <Route path={OVERVIEW_PATH} element={<TutorialOverview />} />
          <Route path={`${TUTORIAL_BASE_PATH}/:experience`} element={<TutorialPage />} />
          <Route path={`${TUTORIAL_BASE_PATH}/:experience/:stepId`} element={<TutorialPage />} />
          <Route path="*" element={<Navigate to={OVERVIEW_PATH} replace />} />
        </Routes>
      </BrowserRouter>
    </AnnotationProvider>);

}