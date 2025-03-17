"use client";

import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { useNavigation } from '../Providers/NavigationProvider';
import type { PageTree } from 'fumadocs-core/source';

export function DocsLayoutWithI18n({ 
  children, 
  tree 
}: { 
  children: ReactNode;
  tree: PageTree; 
}) {
  const layoutOptions = useNavigation();
  
  return (
    <DocsLayout tree={tree} {...layoutOptions}>
      {children}
    </DocsLayout>
  );
} 