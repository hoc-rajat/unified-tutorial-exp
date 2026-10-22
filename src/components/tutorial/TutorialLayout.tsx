import React from 'react';

interface TutorialLayoutProps {
  sidebar: React.ReactNode;
  mobileNav: React.ReactNode;
  children: React.ReactNode;
}

/** Shared two-column frame used by every learning path. */
export function TutorialLayout({ sidebar, mobileNav, children }: TutorialLayoutProps) {
  return (
    <div className="mt-6 sm:mt-8">
      {mobileNav}
      <div className="mt-6 grid gap-10 lg:mt-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,3fr)] lg:gap-12">
        <aside className="hidden lg:block">{sidebar}</aside>
        <div className="min-w-0">{children}</div>
      </div>
    </div>);

}