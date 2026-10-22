import type { ExperienceType } from '../types/tutorial';

export const overviewHero = {
  eyebrow: 'Netherlands · Branch Registration',
  title: 'How to Register a Branch in the Netherlands',
  description:
  'Understand the steps, documents and decisions involved in registering a Dutch branch. Choose the learning path that best fits how you want to proceed.',
  chips: ['Netherlands', 'Step-by-step guidance', 'For foreign companies']
};

export const overviewFacts = [
{ label: 'Learning paths', value: '2' },
{ label: 'Steps per path', value: '6' },
{ label: 'Audience', value: 'Foreign companies' },
{ label: 'Content status', value: 'Illustrative' }];


export interface PathCardContent {
  experience: ExperienceType;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  ctaLabel: string;
}

export const pathCards: PathCardContent[] = [
{
  experience: 'self-service',
  title: 'Do It Yourself',
  subtitle: 'Follow the official registration process',
  description:
  'Learn what you need to prepare, which official procedures to follow, and how to complete each stage independently.',
  highlights: [
  'Understand official requirements',
  'Prepare the necessary documents',
  'Follow the registration procedure',
  'Review next steps after registration'],

  ctaLabel: 'Start Self-Service Tutorial'
},
{
  experience: 'hoc-assisted',
  title: 'With House of Companies',
  subtitle: 'Understand the HOC-assisted workflow',
  description:
  'See how the House of Companies service and portal support the registration journey, including onboarding, document preparation and progress tracking.',
  highlights: [
  'Understand the assisted process',
  'Learn how onboarding works',
  'See how documents are managed',
  'Understand the next steps'],

  ctaLabel: 'Explore HOC-Assisted Tutorial'
}];


export const pathComparison = [
{
  label: 'Focus',
  selfService: 'The official registration procedure',
  hocAssisted: 'The HOC-supported workflow'
},
{
  label: 'You’ll learn',
  selfService: 'Requirements, documents and procedures for each stage',
  hocAssisted: 'How onboarding, document collection and progress tracking work'
},
{
  label: 'Suited to',
  selfService: 'Teams comfortable handling official procedures directly',
  hocAssisted: 'Teams who want to understand what an assisted setup involves'
},
{
  label: 'Includes',
  selfService: 'Checklists and official resources',
  hocAssisted: 'Portal walkthrough and a role overview'
}];


export const tutorialCatalog = [
{ id: 'company-formation', title: 'Company Formation', country: 'Netherlands', status: 'Planned' },
{ id: 'vat-registration', title: 'VAT Registration', country: 'Netherlands', status: 'Planned' },
{ id: 'bookkeeping', title: 'Bookkeeping Setup', country: 'Netherlands', status: 'Planned' }];