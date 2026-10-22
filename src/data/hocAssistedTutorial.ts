import type { Tutorial } from '../types/tutorial';

export const hocAssistedTutorial: Tutorial = {
  tutorialId: 'nl-branch-registration-hoc-assisted',
  topic: 'Branch Registration',
  country: 'Netherlands',
  experienceType: 'hoc-assisted',
  badge: 'HOC-Assisted Learning Path',
  title: 'Register a Dutch Branch with House of Companies',
  description:
  'Understand how the House of Companies platform and support workflow help you move through the branch registration process.',
  breadcrumbLabel: 'HOC-Assisted',
  resourcesHeading: 'Helpful Resources',
  contextualSwitch: {
    title: 'Want to understand the official process?',
    description: 'Explore how this stage works when completing the registration independently.',
    ctaLabel: 'View Self-Service Instructions'
  },
  relatedSteps: {
    'understand-hoc-process': 'decide-branch-fit',
    'review-needs': 'confirm-dutch-address',
    onboarding: null,
    'submit-documents': 'create-document-folder',
    'follow-progress': 'sign-submit-kvk',
    'next-steps': 'verify-registration-next-actions'
  },
  finalCta: {
    title: 'Ready to explore your Dutch branch setup?',
    description: 'Get a tailored starting point for your company’s registration needs.',
    buttonLabel: 'Get Your Branch Plan',
    preview: {
      title: 'Your branch plan',
      body: 'In the live experience, this would start a short intake to create a tailored starting point for your company.',
      points: [
      'A few questions about your parent company',
      'Your planned activities in the Netherlands',
      'A suggested outline of the next stages']

    }
  },
  steps: [
  {
    id: 'understand-hoc-process',
    title: 'Understand the HOC Process',
    readTime: '3 min read',
    intro:
    'Get an overview of how the assisted journey is structured, from the first conversation to following your registration progress.',
    blocks: [
    {
      type: 'procedure',
      heading: 'How the assisted journey is structured',
      items: [
      { title: 'Share your registration needs', body: 'Describe your company and what you plan to do in the Netherlands.' },
      { title: 'Complete onboarding', body: 'Set up your portal access and confirm your company details.' },
      { title: 'Prepare and submit documents', body: 'Provide requested information and documents through the portal.' },
      { title: 'Follow your progress', body: 'See which stage your registration is in and what is still outstanding.' }]

    },
    {
      type: 'info',
      tone: 'verify',
      title: 'Content subject to verification',
      body: 'The exact scope of House of Companies support is confirmed for each company individually.'
    }],

    resources: [
    { id: 'hoc-services', label: 'View House of Companies services', source: 'House of Companies' }]

  },
  {
    id: 'review-needs',
    title: 'Review Your Registration Needs',
    readTime: '4 min read',
    intro:
    'The assisted journey starts by understanding your situation, so that the following stages reflect what your company actually needs.',
    blocks: [
    {
      type: 'checklist',
      heading: 'Information that helps at this stage',
      description: 'Having these answers ready makes the first conversation more productive.',
      items: [
      { id: 'parent', label: 'Where your parent company is registered' },
      { id: 'activities', label: 'What the branch will do in the Netherlands' },
      { id: 'staff', label: 'Whether you plan to hire local staff' },
      { id: 'timing', label: 'Your intended starting date' }]

    },
    {
      type: 'info',
      tone: 'info',
      title: 'Not sure yet?',
      body: 'You do not need every answer before starting. Open questions can be clarified as part of the process.'
    }]

  },
  {
    id: 'onboarding',
    title: 'Start Your Onboarding',
    readTime: '3 min read',
    intro: 'Onboarding sets up your access to the portal and confirms the basic details of your company.',
    blocks: [
    {
      type: 'procedure',
      heading: 'What onboarding involves',
      items: [
      { title: 'Create your portal access', body: 'You receive access to a personal workspace for your registration.' },
      { title: 'Confirm company details', body: 'Review the parent-company information you shared earlier.' },
      { title: 'Complete identity and compliance checks', body: 'Where required, representatives are asked to verify their identity.' }]

    },
    {
      type: 'info',
      tone: 'verify',
      title: 'Content subject to verification',
      body: 'Onboarding steps shown here are illustrative and may differ from the live process.'
    }]

  },
  {
    id: 'submit-documents',
    title: 'Prepare and Submit Documents',
    readTime: '6 min read',
    intro:
    'Understand how company information and supporting documents are collected during the assisted process.',
    blocks: [
    {
      type: 'accordion',
      heading: 'What to expect at this stage',
      items: [
      { id: 'prepare', title: 'What you prepare', body: 'Parent-company details, information about the representative(s) and a description of the branch’s planned activities. The exact set depends on your situation.' },
      { id: 'requested', title: 'What information may be requested', body: 'You may be asked for an extract from the parent company’s registry, constitutional documents, identification for representatives and, where applicable, translated or legalised versions.' },
      { id: 'organise', title: 'How documents can be organised', body: 'Documents are grouped per request, so you can see what has been received, what is under review and what is still outstanding.' },
      { id: 'after', title: 'What happens after submission', body: 'Submitted documents are reviewed for completeness. If something is missing or unclear, an outstanding request appears for you to respond to.' },
      { id: 'next', title: 'What you should expect next', body: 'Once the document stage is complete, the journey moves to progress tracking, where you can follow the remaining stages.' }]

    },
    {
      type: 'portal',
      heading: 'How this looks in the portal',
      description: 'Select an area to see what it is for.'
    },
    {
      type: 'responsibility',
      heading: 'Who does what',
      customer: {
        title: 'Your Role',
        items: [
        'Provide relevant company information',
        'Prepare requested documentation',
        'Review submission details',
        'Respond to outstanding requests']

      },
      hoc: {
        title: 'HOC-Supported Workflow',
        items: [
        'Guide users through relevant stages',
        'Explain document submission requirements',
        'Provide visibility into supported tasks',
        'Help users understand the next steps']

      }
    }],

    resources: [
    { id: 'portal-help', label: 'View portal help articles', source: 'House of Companies' }]

  },
  {
    id: 'follow-progress',
    title: 'Follow Your Registration Progress',
    readTime: '3 min read',
    intro: 'After submission, the portal shows where your registration stands and whether anything needs your attention.',
    blocks: [
    {
      type: 'procedure',
      heading: 'Example progress stages',
      items: [
      { title: 'Information received', body: 'Your company details and documents are in the portal.' },
      { title: 'Under review', body: 'Documents are checked for completeness.' },
      { title: 'Registration in progress', body: 'The registration stage is underway.' },
      { title: 'Registration confirmed', body: 'Confirmation details become available in your workspace.' }]

    },
    {
      type: 'info',
      tone: 'verify',
      title: 'Content subject to verification',
      body: 'Status labels are illustrative. No processing times are implied.'
    }]

  },
  {
    id: 'next-steps',
    title: 'Understand Next Steps',
    readTime: '3 min read',
    intro: 'Once the branch is registered, review what comes next and which topics may be relevant for your company.',
    blocks: [
    {
      type: 'checklist',
      heading: 'Topics to review after registration',
      items: [
      { id: 'confirmation', label: 'Review your registration confirmation' },
      { id: 'tax', label: 'Discuss tax registrations that may apply' },
      { id: 'bookkeeping', label: 'Consider bookkeeping and filing support' },
      { id: 'changes', label: 'Keep company details up to date' }]

    }]

  }]

};