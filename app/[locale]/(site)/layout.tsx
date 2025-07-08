"use client";

import type { ReactNode } from 'react';
import { Banner } from 'fumadocs-ui/components/banner';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { Footer } from "@/components/Footer/Footer";
import { useBaseOptions } from '@/app/[locale]/layout.config';

function HomeLayoutWithI18n({ children }: { children: ReactNode }) {
  const baseOptions = useBaseOptions();
  
  return <HomeLayout {...baseOptions} i18n>{children}</HomeLayout>;
}

export default function Layout({ children }: { children: ReactNode; }): React.ReactElement {
  return (
    <>
      <Banner id="banner-1">
        I failed my way to success - Thomas Edison
      </Banner>
      <HomeLayoutWithI18n>
        {children}
      </HomeLayoutWithI18n>
      <Footer />
    </>
  );
}
