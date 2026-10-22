import { useState } from 'react';
import {
  CheckIcon,
  CircleDotIcon,
  FileTextIcon,
  FolderIcon,
  LayoutGridIcon,
  MessageSquareIcon,
  UploadCloudIcon,
  BuildingIcon } from
'lucide-react';
import {
  portalActions,
  portalCompanyInfo,
  portalDocuments,
  portalTimeline,
  portalWalkthrough,
  type PortalRegion } from
'../../data/portalWalkthrough';

interface TutorialPortalPreviewProps {
  heading: string;
  description: string;
}

const docStatusClass: Record<string, string> = {
  Accepted: 'bg-lavender/15 text-lavender',
  'In review': 'bg-white/10 text-fg-muted',
  Requested: 'bg-pink/15 text-pink-soft'
};

const portalNav = [
{ label: 'Overview', icon: LayoutGridIcon },
{ label: 'Company', icon: BuildingIcon },
{ label: 'Documents', icon: FolderIcon, active: true },
{ label: 'Messages', icon: MessageSquareIcon }];


export function TutorialPortalPreview({ heading, description }: TutorialPortalPreviewProps) {
  const [focus, setFocus] = useState<PortalRegion>('upload');

  const region = (id: PortalRegion) =>
  `rounded-xl border bg-ink-800 p-4 transition-[opacity,box-shadow,border-color] duration-200 ease-out ${
  focus === id ? 'border-pink/60 opacity-100 ring-2 ring-pink/40' : 'border-line opacity-50'}`;


  return (
    <section>
      <div className="flex flex-wrap items-end justify-between gap-2">
        <div>
          <h3 className="text-lg font-semibold text-white">{heading}</h3>
          <p className="mt-1 text-sm text-fg-subtle">{description}</p>
        </div>
      </div>

      <div className="mt-4 grid gap-5 xl:grid-cols-[minmax(0,1fr)_240px]">
        {/* Conceptual portal frame */}
        <figure className="overflow-hidden rounded-2xl border border-line-strong bg-ink" aria-label="Illustrative portal experience">
          <div className="flex h-11 items-center justify-between border-b border-line px-4">
            <div className="flex items-center gap-2">
              <span className="grid h-5 w-5 grid-cols-2 gap-[2px] rounded bg-ink-700 p-[4px]" aria-hidden="true">
                <span className="rounded-[1px] bg-pink" />
                <span className="rounded-[1px] bg-lavender" />
                <span className="rounded-[1px] bg-lavender" />
                <span className="rounded-[1px] bg-white" />
              </span>
              <span className="text-xs font-semibold text-white">Client portal</span>
            </div>
            <span className="text-[11px] text-fg-subtle">Illustrative portal experience</span>
          </div>

          <div className="grid md:grid-cols-[150px_minmax(0,1fr)]">
            <nav aria-hidden="true" className="hidden border-r border-line p-3 md:block">
              {portalNav.map(({ label, icon: Icon, active }) =>
              <div
                key={label}
                className={`flex items-center gap-2 rounded-md px-2.5 py-2 text-xs ${
                active ? 'bg-white/[0.06] font-medium text-white' : 'text-fg-subtle'}`
                }>
                
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </div>
              )}
            </nav>

            <div className="space-y-3 p-3 sm:p-4">
              <div className={region('progress')}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="text-sm font-semibold text-white">Dutch branch registration</p>
                  <p className="text-[11px] text-fg-subtle">Stage 3 of 5 · Documents</p>
                </div>
                <div className="mt-3 grid grid-cols-5 gap-1.5" aria-hidden="true">
                  {[0, 1, 2, 3, 4].map((i) =>
                  <span key={i} className={`h-1.5 rounded-full ${i < 2 ? 'bg-lavender' : i === 2 ? 'bg-pink' : 'bg-ink-700'}`} />
                  )}
                </div>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                <div className={region('upload')}>
                  <p className="text-xs font-semibold text-white">Document upload</p>
                  <ul className="mt-3 space-y-2">
                    {portalDocuments.map((doc) =>
                    <li key={doc.name} className="flex items-center justify-between gap-2">
                        <span className="flex min-w-0 items-center gap-2 text-[11px] text-fg-muted">
                          <FileTextIcon className="h-3.5 w-3.5 shrink-0 text-fg-subtle" aria-hidden="true" />
                          <span className="truncate">{doc.name}</span>
                        </span>
                        <span className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-medium ${docStatusClass[doc.status]}`}>
                          {doc.status}
                        </span>
                      </li>
                    )}
                  </ul>
                  <div className="mt-3 flex items-center justify-center gap-2 rounded-lg border border-dashed border-line-strong py-2.5 text-[11px] text-fg-subtle">
                    <UploadCloudIcon className="h-3.5 w-3.5" aria-hidden="true" />
                    Drop files to upload
                  </div>
                </div>

                <div className={region('company')}>
                  <p className="text-xs font-semibold text-white">Company information</p>
                  <dl className="mt-3 space-y-2">
                    {portalCompanyInfo.map((row) =>
                    <div key={row.label} className="flex justify-between gap-3 text-[11px]">
                        <dt className="text-fg-subtle">{row.label}</dt>
                        <dd className="truncate text-right text-fg-muted">{row.value}</dd>
                      </div>
                    )}
                  </dl>
                </div>

                <div className={region('status')}>
                  <p className="text-xs font-semibold text-white">Submission status</p>
                  <ul className="mt-3 space-y-2">
                    {portalTimeline.map((item) =>
                    <li key={item.label} className="flex items-center gap-2 text-[11px]">
                        {item.state === 'done' ?
                      <span className="flex h-4 w-4 items-center justify-center rounded-full bg-lavender text-ink">
                            <CheckIcon className="h-2.5 w-2.5" strokeWidth={3} aria-hidden="true" />
                          </span> :
                      item.state === 'current' ?
                      <CircleDotIcon className="h-4 w-4 text-pink-soft" aria-hidden="true" /> :

                      <span className="h-4 w-4 rounded-full border border-line-strong" aria-hidden="true" />
                      }
                        <span className={item.state === 'upcoming' ? 'text-fg-subtle' : 'text-fg-muted'}>{item.label}</span>
                      </li>
                    )}
                  </ul>
                </div>

                <div className={region('actions')}>
                  <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-white">Required actions</p>
                    <span className="rounded-full bg-pink px-1.5 text-[10px] font-semibold text-white">{portalActions.length}</span>
                  </div>
                  <ul className="mt-3 space-y-2">
                    {portalActions.map((action) =>
                    <li key={action} className="flex items-center justify-between gap-2 rounded-md bg-ink px-2.5 py-2 text-[11px] text-fg-muted">
                        <span className="truncate">{action}</span>
                        <span className="shrink-0 font-semibold text-pink-soft">Respond</span>
                      </li>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </figure>

        {/* Walkthrough */}
        <ol className="grid gap-1 sm:grid-cols-2 xl:grid-cols-1 xl:content-start">
          {portalWalkthrough.map((item, i) => {
            const active = focus === item.id;
            return (
              <li key={item.id}>
                <button
                  type="button"
                  onClick={() => setFocus(item.id)}
                  aria-pressed={active}
                  className={`flex w-full gap-3 rounded-lg px-3 py-2.5 text-left transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lavender ${
                  active ? 'bg-white/[0.06]' : 'hover:bg-white/[0.03]'}`
                  }>
                  
                  <span
                    className={`mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[11px] font-semibold ${
                    active ? 'bg-pink text-white' : 'border border-line-strong text-fg-subtle'}`
                    }>
                    
                    {i + 1}
                  </span>
                  <span>
                    <span className={`block text-sm font-medium ${active ? 'text-white' : 'text-fg-muted'}`}>{item.title}</span>
                    {active && <span className="mt-1 block text-[13px] leading-relaxed text-fg-subtle">{item.description}</span>}
                  </span>
                </button>
              </li>);

          })}
        </ol>
      </div>
    </section>);

}