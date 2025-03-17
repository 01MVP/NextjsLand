import { defineRouting } from 'next-intl/routing';
import { locales, defaultLocale, pathnames } from '@/app/i18n';
import { Locale } from '@/app/i18n';

export const routing = defineRouting({
  // 支持的所有语言列表
  locales,
  
  // 当没有匹配的语言时使用
  defaultLocale,
  
  // 设置 [lang] 作为路由参数
  urlMappingStrategy: 'parameterBased',
  
  // 告诉 next-intl 我们使用的是 [lang]
  getParamFromUrl: ({ pathnames, url }) => {
    // 从 URL /en/... 或 /zh-cn/... 中提取参数
    const segments = url.pathname.split('/');
    const langSegment = segments[1];
    
    if (locales.includes(langSegment as Locale)) {
      return langSegment;
    }
    
    return defaultLocale;
  },
  
  // 转换语言参数到 URL
  getUrlFromParam: ({ language, defaultLanguage, pathnamesByLocale, pathname }) => {
    const segment = language;
    return `/${segment}${pathname}`;
  }
}); 