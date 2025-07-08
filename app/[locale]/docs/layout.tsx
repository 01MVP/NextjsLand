import type { ReactNode } from 'react';
import { source } from '@/lib/source';
import { DocsLayoutWithI18n } from '@/components/Layouts/DocsLayoutWithI18n';

export default async function Layout({
  params,
  children,
}: {
  params: Promise<{ locale: string }>;
  children: ReactNode;
}) {
  const locale = (await params).locale;

  return (
    <DocsLayoutWithI18n tree={source.pageTree[locale]}>
      {children}
    </DocsLayoutWithI18n>
  );
}

