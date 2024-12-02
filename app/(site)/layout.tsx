import type { ReactNode } from 'react';
import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/app/layout.config';
import { Banner } from 'fumadocs-ui/components/banner';
import { Footer } from "@/components/Footer/Footer";

export default function Layout({ children }: { children: ReactNode; }): React.ReactElement {
  return (<>
    <Banner id="banner-1">
      I failed my way to success - Thomas Edison
    </Banner>
    <HomeLayout  {...baseOptions}>{children}</HomeLayout>
    <Footer />
  </>);
}
