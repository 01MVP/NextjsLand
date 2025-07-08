"use client";

import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import type { ReactNode } from 'react';
import { useBaseOptions } from '@/app/[locale]/layout.config';

export function DocsLayoutWithI18n({ 
  children, 
  tree 
}: { 
  children: ReactNode;
  tree: any;  // eslint-disable-next-line @typescript-eslint/no-explicit-any
}) {
  const baseOptions = useBaseOptions();
  
  return (
    <DocsLayout tree={tree} {...baseOptions} i18n>
      {children}
    </DocsLayout>
  );
}