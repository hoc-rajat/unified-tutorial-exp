import React from 'react';
import { SiteHeader } from './SiteHeader';
import { SiteFooter } from './SiteFooter';

export function SiteShell({ children }: {children: React.ReactNode;}) {
  return (
    <div className="flex min-h-screen w-full flex-col bg-ink text-white">
      <SiteHeader />
      <main className="flex-1">
        <div className="mx-auto max-w-site px-5 sm:px-8">{children}</div>
      </main>
      <SiteFooter />
    </div>);

}