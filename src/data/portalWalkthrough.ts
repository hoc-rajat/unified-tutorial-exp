export type PortalRegion = 'progress' | 'upload' | 'company' | 'status' | 'actions';

export const portalWalkthrough: {id: PortalRegion;title: string;description: string;}[] = [
{ id: 'progress', title: 'Progress indicator', description: 'Shows which stage of the registration journey your case is in.' },
{ id: 'upload', title: 'Document upload', description: 'Upload requested files and see the review status of each document.' },
{ id: 'company', title: 'Company information', description: 'Review the parent-company and branch details you have provided.' },
{ id: 'status', title: 'Submission status', description: 'Follow what has happened so far and what is being prepared next.' },
{ id: 'actions', title: 'Required actions', description: 'Outstanding requests that need your input to keep things moving.' }];


export const portalDocuments = [
{ name: 'Registry extract — parent company', status: 'Accepted' },
{ name: 'Articles of association', status: 'In review' },
{ name: 'Representative identification', status: 'Requested' }];


export const portalCompanyInfo = [
{ label: 'Parent company', value: 'Example Trading GmbH' },
{ label: 'Country', value: 'Germany' },
{ label: 'Branch activity', value: 'Wholesale (example)' },
{ label: 'Representative', value: 'J. Weber' }];


export const portalTimeline = [
{ label: 'Information received', state: 'done' },
{ label: 'Documents in review', state: 'current' },
{ label: 'Submission prepared', state: 'upcoming' },
{ label: 'Registration confirmed', state: 'upcoming' }] as
const;

export const portalActions = [
'Upload representative identification',
'Confirm branch activity description'];