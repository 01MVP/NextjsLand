"use client";

import { HomeLayout } from 'fumadocs-ui/layouts/home';
import type { ReactNode } from 'react';
import { useBaseOptions } from '@/app/[locale]/layout.config';

export function HomeLayoutWithI18n({ children }: { children: ReactNode }) {
  const baseOptions = useBaseOptions();
  
  return <HomeLayout {...baseOptions} i18n>{children}</HomeLayout>;
}