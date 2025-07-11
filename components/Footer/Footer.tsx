'use client';

import { Logo } from '@/components/Logo/Logo';
import { Newsletter } from "@/components/Newsletter/Newsletter"
import { useTranslations } from 'next-intl';
import { ExternalLink } from '@/components/Links/ExternalLink';
import { SocialIcon } from '@/components/Social/SocialIcons';

export function Footer() {
  const t = useTranslations('Footer');
  const socialData = t.raw('social') as Array<{
    name: string;
    url: string;
  }>;

  return (
    <footer className="relative bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 overflow-hidden">
      
      <div className="relative mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-20">

        <div className="grid grid-cols-[auto] justify-between gap-6 max-[991px]:grid-flow-col max-[991px]:[grid-template:'.'_auto_'.'_auto_/_0.75fr_0.75fr_0.75fr] max-[767px]:gap-y-8 max-[479px]:auto-cols-auto max-[479px]:grid-flow-dense sm:grid-cols-2 sm:gap-4 md:grid-cols-[max-content_auto_auto_auto_auto] lg:gap-10">
          <div className="flex max-w-sm grid-cols-1 flex-col items-start justify-start gap-8 max-[991px]:[grid-area:span_1/span_4/span_1/span_4] max-[767px]:flex-col max-[767px]:[grid-area:span_1/span_2/span_1/span_2] lg:mr-10 mb-10 xl:mb-0">
            <div className="flex flex-col items-start gap-6">
              <div className="transform hover:scale-105 transition-transform duration-300">
                <Logo />
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                {t('description')}
              </p>
            </div>
            <div className="mt-12 grid w-full max-w-52 grid-flow-col grid-cols-3 mx-auto gap-3 mb-8 md:mb-0">
              {
                socialData?.map((link) => (
                  <ExternalLink
                    key={link.name}
                    href={link.url}
                    className={`mx-auto flex max-w-6 flex-col items-center justify-center text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors duration-200`}
                  >
                    <SocialIcon name={link.name} />
                  </ExternalLink>
                ))
              }
            </div>
          </div>

          <div className="flex flex-col items-start font-semibold">
            <div className="mb-6">
              <p className="font-semibold text-slate-900 dark:text-white">{t('solution.title')}</p>
            </div>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-100 text-slate-600 dark:text-slate-400"
            >
              {t('solution.marketing')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-100 text-slate-600 dark:text-slate-400"
            >
              {t('solution.analytics')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-100 text-slate-600 dark:text-slate-400"
            >
              {t('solution.commerce')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-100 text-slate-600 dark:text-slate-400"
            >
              {t('solution.insights')}
            </ExternalLink>
          </div>
          <div className="flex flex-col items-start font-semibold">
            <div className="mb-6">
              <p className="font-semibold text-slate-900 dark:text-white">{t('support.title')}</p>
            </div>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-100 text-slate-600 dark:text-slate-400"
            >
              {t('support.pricing')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-100 text-slate-600 dark:text-slate-400"
            >
              {t('support.documentation')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-100 text-slate-600 dark:text-slate-400"
            >
              {t('support.guides')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-100 text-slate-600 dark:text-slate-400"
            >
              {t('support.apiStatus')}
            </ExternalLink>
          </div>
          <div className="flex flex-col items-start font-semibold">
            <div className="mb-6">
              <p className="font-semibold text-slate-900 dark:text-white">{t('docs.title')}</p>
            </div>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-100 text-slate-600 dark:text-slate-400"
            >
              {t('docs.pricing')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-100 text-slate-600 dark:text-slate-400"
            >
              {t('docs.apiGuide')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-100 text-slate-600 dark:text-slate-400"
            >
              {t('docs.apiStatus')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-100 text-slate-600 dark:text-slate-400"
            >
              {t('docs.devGuide')}
            </ExternalLink>
          </div>
          <div className="flex flex-col items-start font-semibold">
            <div className="mb-6">
              <p className="font-semibold text-slate-900 dark:text-white">{t('company.title')}</p>
            </div>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-100 text-slate-600 dark:text-slate-400"
            >
              {t('company.about')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-100 text-slate-600 dark:text-slate-400"
            >
              {t('company.blog')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-100 text-slate-600 dark:text-slate-400"
            >
              {t('company.jobs')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-100 text-slate-600 dark:text-slate-400"
            >
              {t('company.press')}
            </ExternalLink>
            <ExternalLink
              href="#"
              className="py-2 text-sm font-normal transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-100 text-slate-600 dark:text-slate-400"
            >
              {t('company.partners')}
            </ExternalLink>
          </div>
        </div>
        {/* Divider */}
        <div className="mb-14 mt-16 w-full h-px bg-slate-200 dark:bg-slate-800" />
        <div>
          <Newsletter />
        </div>
        {/* Divider */}
        <div className="mb-14 mt-16 w-full h-px bg-slate-200 dark:bg-slate-800" />
        <div className="flex gap-12 justify-between flex-col md:flex-row md:items-center">
          <p className="text-sm text-center sm:text-base text-slate-600 dark:text-slate-300">
            {t('copyright')}
          </p>
          <div className="text-center font-semibold flex flex-wrap justify-center gap-1">
            <ExternalLink
              href="#"
              className="py-2 font-normal transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-100 px-2.5 text-slate-600 dark:text-slate-400"
            >
              {t('terms')}
            </ExternalLink>
            <span className="text-slate-400 dark:text-slate-500">•</span>
            <ExternalLink
              href="#"
              className="py-2 font-normal transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-100 px-2.5 text-slate-600 dark:text-slate-400"
            >
              {t('license')}
            </ExternalLink>
            <span className="text-slate-400 dark:text-slate-500">•</span>
            <ExternalLink
              href="#"
              className="py-2 font-normal transition-colors duration-200 hover:text-slate-900 dark:hover:text-slate-100 px-2.5 text-slate-600 dark:text-slate-400"
            >
              {t('privacy')}
            </ExternalLink>
          </div>
        </div>
      </div>
    </footer>
  )
}

