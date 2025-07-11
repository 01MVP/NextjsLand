'use client';

import React from 'react'
import { WorkCard } from "./work-card";
import { useTranslations } from 'next-intl';

export function Work() {
  const t = useTranslations('Work');
  
  const lists = [
    {
      step: 1,
      title: t('step1.title'),
      description: t('step1.description'),
      icon: '📥'
    },
    {
      step: 2,
      title: t('step2.title'),
      description: t('step2.description'),
      icon: '🗑️'
    },
    {
      step: 3,
      title: t('step3.title'), 
      description: t('step3.description'),
      icon: '✨',
      hide: false
    }
  ];

  return (
    <section className="relative py-12 bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      {/* 背景装饰 */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-400/10 to-purple-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-pink-400/10 to-yellow-400/10 rounded-full blur-2xl" />
      
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 py-16 md:px-10 md:py-20">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 mb-4 text-sm font-medium bg-gradient-to-r from-orange-100 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 text-orange-800 dark:text-orange-300 rounded-full border border-orange-200 dark:border-orange-800">
            <span className="mr-2">⚡</span>
            {t('steps')}
          </div>
          
          <h2 className="text-center text-4xl font-bold lg:text-6xl mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-gray-100 dark:to-gray-400 bg-clip-text text-transparent">
            {t('title')}
          </h2>
          
          <p className="font-inter mx-auto max-w-2xl text-center text-lg text-gray-600 dark:text-gray-300">
            {t('description')}
          </p>
        </div>
        
        {/* 步骤卡片 */}
        <div className="mt-12 flex flex-col items-start justify-center lg:flex-row gap-8 lg:gap-4">
          {
            lists.map(li => (
              <WorkCard 
                key={li.step} 
                step={li.step} 
                hide={li.hide} 
                title={li.title} 
                description={li.description}
                icon={li.icon}
              />
            ))
          }
        </div>
        
        {/* 底部提示 */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30 rounded-lg border border-green-200 dark:border-green-800">
            <span className="text-sm font-medium text-green-800 dark:text-green-300">
              {t('successMessage')}
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

