import './global.css';
import { RootProvider } from 'fumadocs-ui/provider';
import { Inter } from 'next/font/google';
import type { ReactNode } from 'react';
import { baseUrl, createMetadata } from "@/utils/metadata";


const inter = Inter({
  subsets: ['latin'],
});


export const metadata = createMetadata({
  title: {
    template: '%s | Nextify',
    default: 'Nextify',
  },
  description: 'Nextify is a prebuilt template for building documentation sites using Next.js and Fumadocs.',
  metadataBase: baseUrl,
});


export default function Layout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
