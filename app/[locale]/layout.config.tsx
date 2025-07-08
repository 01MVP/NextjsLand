'use client';

import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Twitter } from 'lucide-react';
import { Logo } from '@/components/Logo/Logo';

/**
 * Shared layout configurations
 * 
 * you can customise layouts individually from:
 * Home Layout: app/[locale]/(site)/layout.tsx
 * Docs Layout: app/[locale]/docs/layout.tsx
 */
export function useBaseOptions(): BaseLayoutProps {
  const t = useTranslations('Navigation');
  
  return {
    githubUrl: 'https://github.com/frontendweb3/Nextify',
    nav: {
      title: <Logo />,
      transparentMode: 'top' as const,
    },
    links: [
      {
        text: t('home'),
        url: '/',
        active: 'nested-url',
      },
      {
        text: t('documentation'),
        url: '/docs',
        active: 'nested-url',
      },
      {
        text: t('blog'),
        url: '/blog',
        active: 'nested-url',
      },
      {
        text: t('about'),
        url: '/page/about',
        active: 'nested-url',
      },
      {
        text: t('changelog'),
        url: '/page/changelog',
        active: 'nested-url',
      },
      {
        text: 'Twitter',
        url: 'https://twitter.com/Official_R_deep',
        external: true,
        icon: <Twitter />,
      },
    ],
  };
}