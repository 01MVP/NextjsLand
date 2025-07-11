'use client';

import FAQItem from "./FAQItem.client";
import { useTranslations } from 'next-intl';
import { ExternalLink } from '@/components/Links/ExternalLink';

export function FAQ() {
  const t = useTranslations('FAQ');
  const faqQuestions = t.raw('questions') as Array<{
    key: number;
    question: string;
    answer: string;
  }>;
  
  return (
    <section className="relative py-16">
      
      <div className="relative mx-auto flex w-full max-w-7xl flex-col items-center justify-center px-5 py-16 md:px-10 md:py-20">
        {/* 标题区域 */}
        <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-6 text-center lg:max-w-3xl lg:px-10 mb-16">
          <div className="inline-flex items-center px-3 py-1 mb-6 text-sm font-medium text-slate-600 dark:text-slate-400 bg-slate-50 dark:bg-slate-900 rounded-full border border-slate-200 dark:border-slate-800">
            {t('badge')}
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-slate-900 dark:text-slate-100">
            {t('title')}
          </h2>
          
          <p className="font-inter max-w-2xl text-lg text-slate-600 dark:text-slate-400">
            {t('description')}
          </p>
        </div>
        
        {/* FAQ 列表 */}
        <div className="mt-10 flex w-full max-w-4xl flex-col space-y-2">
          {faqQuestions?.map((faq, index) => (
            <div key={faq.key}>
              <FAQItem 
                id={faq.key} 
                answer={faq.answer} 
                question={faq.question} 
              />
            </div>
          ))}
        </div>
        
        {/* 底部支持信息 */}
        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center p-6 border border-slate-200 dark:border-slate-800 rounded-lg">
            <span className="text-lg font-medium text-slate-900 dark:text-slate-100 mb-2">
              {t('moreQuestions')}
            </span>
            <p className="font-inter text-base text-slate-600 dark:text-slate-400 mb-4">
              {t('support')}
            </p>
            <ExternalLink 
              href="#" 
              className="inline-flex items-center px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-md font-medium transition-all duration-200 hover:bg-slate-800 dark:hover:bg-slate-100"
            >
              {t('supportLink')}
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </ExternalLink>
          </div>
        </div>
      </div>
    </section>
  )
}

