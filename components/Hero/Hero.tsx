'use client';

import { Link } from '@/app/i18n/navigation';
import { useTranslations } from 'next-intl';
import { ExternalLink } from '@/components/Links/ExternalLink';

export function Hero() {
  const t = useTranslations('Hero');
  
  return (
    <header className="relative mt-16">
      
      <div className="relative mx-auto max-w-6xl px-5 py-16 md:px-10 md:py-20">
        {/* 标题区域 */}
        <div className="text-center">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800">
            {t('badge')}
          </div>
          
          <h1 className="mb-6 text-4xl font-bold md:mb-10 md:text-6xl lg:mb-12 text-slate-900 dark:text-slate-100">
            {t('title')}
          </h1>
          
          <p className="mb-8 text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            {t('description')}
          </p>
        </div>
        
        {/* 按钮区域 */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-8">
          <Link
            href="/docs"
            className="group relative inline-flex items-center justify-center px-6 py-2.5 text-white bg-black dark:bg-white dark:text-black rounded-md font-medium transition-all duration-200 hover:bg-slate-800 dark:hover:bg-slate-100"
          >
            <span className="mr-2">🚀</span>
            {t('getStarted')}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
          
          <ExternalLink
            href="https://github.com/01MVP/NextjsLand"
            className="group inline-flex items-center justify-center px-6 py-2.5 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 rounded-md font-medium transition-all duration-200 hover:bg-slate-50 dark:hover:bg-slate-900 hover:text-slate-900 dark:hover:text-slate-100"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            {t('github')}
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </ExternalLink>
        </div>
        
        {/* 特性标签 */}
        <div className="flex flex-wrap items-center justify-center gap-2 mt-12">
          <span className="px-2 py-1 text-xs text-slate-500 dark:text-slate-500">
            {t('features.multilingual')}
          </span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="px-2 py-1 text-xs text-slate-500 dark:text-slate-500">
            {t('features.responsive')}
          </span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="px-2 py-1 text-xs text-slate-500 dark:text-slate-500">
            {t('features.darkMode')}
          </span>
          <span className="text-slate-300 dark:text-slate-700">•</span>
          <span className="px-2 py-1 text-xs text-slate-500 dark:text-slate-500">
            {t('features.seo')}
          </span>
        </div>
      </div>
    </header>
  )
}
