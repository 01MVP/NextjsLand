"use client";

import { HomeLayout } from 'fumadocs-ui/layouts/home';
import type { ReactNode } from 'react';
import { useNavigation } from '../Providers/NavigationProvider';

export function HomeLayoutWithI18n({ children }: { children: ReactNode }) {
  const navigationConfig = useNavigation();
  
  return <HomeLayout {...navigationConfig}>{children}</HomeLayout>;
} 