import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { DocsLayoutClient } from './docs-layout-client';

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: ReactNode;
}) {
  const locale = (await params).locale;

  return (
    <DocsLayoutClient tree={source.pageTree[locale]}>
      {children}
    </DocsLayoutClient>
  );
}

