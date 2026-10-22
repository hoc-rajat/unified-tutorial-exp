export type ExperienceType = 'self-service' | 'hoc-assisted';

export interface ChecklistItem {
  id: string;
  label: string;
  detail?: string;
}

export interface AccordionItem {
  id: string;
  title: string;
  body: string;
}

export interface ProcedureItem {
  title: string;
  body: string;
}

export interface ResponsibilityColumn {
  title: string;
  items: string[];
}

export type InfoTone = 'info' | 'verify';

export interface DecisionOutcome {
  label: string;
  action: string;
}

export interface DecisionCardBlock {
  type: 'decision';
  question: string;
  why: string;
  evidence: string;
  outcomes: [DecisionOutcome] | [DecisionOutcome, DecisionOutcome] | [DecisionOutcome, DecisionOutcome, DecisionOutcome];
  confirmation?: string;
  commonMistake?: string;
  qaPrompt?: string;
}

export interface InstructionalVisualBlock {
  type: 'visual';
  variant: 'documents' | 'evidence' | 'fields' | 'routes' | 'completion';
  title: string;
  sections: {
    heading: string;
    rows: { label: string; value: string; emphasis?: boolean; status?: 'included' | 'to-check' }[];
  }[];
  note: string;
  caption: string;
}

export type ContentBlock =
InstructionalVisualBlock |
DecisionCardBlock |
{type: 'text';heading?: string;body: string[];} |
{type: 'checklist';heading: string;description?: string;items: ChecklistItem[];} |
{type: 'info';tone: InfoTone;title: string;body: string;} |
{type: 'accordion';heading: string;items: AccordionItem[];} |
{type: 'procedure';heading: string;items: ProcedureItem[];} |
{type: 'portal';heading: string;description: string;} |
{
  type: 'responsibility';
  heading: string;
  customer: ResponsibilityColumn;
  hoc: ResponsibilityColumn;
};

export interface TutorialResource {
  id: string;
  label: string;
  source: string;
}

export interface TutorialStep {
  id: string;
  /** Short title used in the sidebar */
  title: string;
  /** Optional longer heading used in the content area */
  heading?: string;
  readTime: string;
  intro: string;
  blocks: ContentBlock[];
  resources?: TutorialResource[];
}

export interface ContextualSwitchConfig {
  title: string;
  description: string;
  ctaLabel: string;
}

export interface FinalCtaConfig {
  title: string;
  description: string;
  buttonLabel: string;
  preview: {
    title: string;
    body: string;
    points: string[];
  };
}

export interface Tutorial {
  tutorialId: string;
  topic: string;
  country: string;
  experienceType: ExperienceType;
  badge: string;
  title: string;
  description: string;
  breadcrumbLabel: string;
  resourcesHeading: string;
  /** Optional unnumbered preparation content shown before the first chapter. */
  introduction?: ContentBlock[];
  steps: TutorialStep[];
  /** Explicit mapping: this tutorial's step id → related step id in the other path (null = no counterpart) */
  relatedSteps: Record<string, string | null>;
  contextualSwitch: ContextualSwitchConfig;
  finalCta?: FinalCtaConfig;
}
