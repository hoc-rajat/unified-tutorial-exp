import React from 'react';
import { useAnnotations } from '../contexts/AnnotationContext';

interface FrameworkAnnotationProps {
  name: string;
  children: React.ReactNode;
  className?: string;
}

/** When enabled from the Controls panel, outlines a shared framework component and labels it. */
export function FrameworkAnnotation({ name, children, className = '' }: FrameworkAnnotationProps) {
  const enabled = useAnnotations();
  if (!enabled) return <>{children}</>;
  return (
    <div className={`relative rounded-xl outline-dashed outline-1 outline-offset-4 outline-lavender/60 ${className}`}>
      <span className="pointer-events-none absolute -top-3 left-3 z-20 rounded bg-lavender px-1.5 py-0.5 font-mono text-[10px] font-semibold text-ink">
        {`<${name} />`}
      </span>
      {children}
    </div>);

}