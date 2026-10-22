import { useCallback, useState } from 'react';
import { tutorials } from '../data/tutorials';

const STORAGE_KEY = 'hoc-tutorial-progress';

type ProgressStore = Record<string, string[]>;

const validSteps = new Map(
  Object.values(tutorials).map((tutorial) => [tutorial.tutorialId, new Set(tutorial.steps.map((step) => step.id))])
);

function readStore(): ProgressStore {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    const parsed: unknown = raw ? JSON.parse(raw) : {};
    if (!parsed || typeof parsed !== 'object' || Array.isArray(parsed)) return {};
    return Object.fromEntries(
      Object.entries(parsed).map(([id, steps]) => [
        id,
        Array.isArray(steps)
          ? [...new Set(steps.filter((step): step is string => typeof step === 'string' && Boolean(validSteps.get(id)?.has(step))))]
          : []
      ])
    );
  } catch {
    return {};
  }
}

function writeStore(store: ProgressStore) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
  } catch {

    // Storage unavailable — progress stays in memory only.
  }}

export function useTutorialProgress() {
  const [store, setStore] = useState<ProgressStore>(readStore);

  const update = useCallback((tutorialId: string, fn: (ids: string[]) => string[]) => {
    setStore((prev) => {
      const next = { ...prev, [tutorialId]: fn(prev[tutorialId] ?? []) };
      writeStore(next);
      return next;
    });
  }, []);

  const getCompleted = useCallback((tutorialId: string) => store[tutorialId] ?? [], [store]);

  const markComplete = useCallback(
    (tutorialId: string, stepId: string) =>
    update(tutorialId, (ids) => ids.includes(stepId) ? ids : [...ids, stepId]),
    [update]
  );

  const toggleComplete = useCallback(
    (tutorialId: string, stepId: string) =>
    update(tutorialId, (ids) => ids.includes(stepId) ? ids.filter((id) => id !== stepId) : [...ids, stepId]),
    [update]
  );

  const reset = useCallback((tutorialId: string) => update(tutorialId, () => []), [update]);

  return { getCompleted, markComplete, toggleComplete, reset };
}
