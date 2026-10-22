import React, { createContext, useContext } from 'react';

const AnnotationContext = createContext(false);

export function AnnotationProvider({ enabled, children }: {enabled: boolean;children: React.ReactNode;}) {
  return <AnnotationContext.Provider value={enabled}>{children}</AnnotationContext.Provider>;
}

export function useAnnotations(): boolean {
  return useContext(AnnotationContext);
}