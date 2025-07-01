"use client";

import { createContext, useContext, type ReactNode } from 'react';
import { useTranslations } from 'next-intl';
import { Twitter } from 'lucide-react';
import { Logo } from '@/components/Logo/Logo';
import { layoutConfig, externalLinks } from '@/lib/layout-config';
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

// 只包含导航相关的配置
interface NavigationConfig extends BaseLayoutProps {
  blog_nav?: Array<{ name: string; url: string }>;
}

const NavigationContext = createContext<NavigationConfig | null>(null);

export function NavigationProvider({ children }: { children: ReactNode }) {
  const nav = useTranslations('Navigation');
  const blogNav = useTranslations('BlogNav');
  
  const navigationConfig: NavigationConfig = {
    ...layoutConfig,
    nav: {
      title: <Logo />,
      ...layoutConfig.nav
    },
    links: [
      { url: "/", text: nav('home') },
      { url: "/docs", text: nav('documentation') },
      { url: "/blog", text: nav('blog') },
      { url: "/page/about", text: nav('about') },
      { url: "/page/changelog", text: nav('changelog') },
      { 
        url: externalLinks.twitter, 
        text: "Twitter", 
        type: 'icon' as const, 
        icon: <Twitter /> 
      }
    ],
    blog_nav: [
      { name: blogNav('computerScience'), url: "/blog/tag/computer-science" },
      { name: blogNav('photography'), url: "/blog/tag/photography" },
      { name: blogNav('programming'), url: "/blog/tag/programming" }
    ]
  };
  
  return (
    <NavigationContext.Provider value={navigationConfig}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigation() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
} 