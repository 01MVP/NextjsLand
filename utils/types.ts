import type { ReactNode } from "react";
import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export interface TypeFAQ {
  question: string; 
  answer: string; 
  key: number;
}

export interface TypeSocial {
  icon: ReactNode; 
  name: string; 
  url: string;
}

export interface TypeBlogNav {
  name: string; 
  url: string;
}

// 简化的HomeLayout类型，不再包含FAQ和Social
export interface HomeLayout extends BaseLayoutProps {
  blog_nav?: TypeBlogNav[];
}
