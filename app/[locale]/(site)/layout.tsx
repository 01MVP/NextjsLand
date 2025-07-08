import type { ReactNode } from 'react';
import { Banner } from 'fumadocs-ui/components/banner';
import { Footer } from "@/components/Footer/Footer";
import { HomeLayoutWithI18n } from '@/components/Layouts/HomeLayoutWithI18n';

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
