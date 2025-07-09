import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

// 静态布局配置，不包含需要国际化的动态数据
export const layoutConfig = {
  githubUrl: 'https://github.com/01MVP/NextjsLand',
  i18n: true,
  nav: {
    transparentMode: 'top' as const
  }
} satisfies Partial<BaseLayoutProps>;

// 外部链接配置
export const externalLinks = {
  twitter: 'https://twitter.com/Official_R_deep',
  github: 'https://github.com/01MVP/NextjsLand'
} as const; 