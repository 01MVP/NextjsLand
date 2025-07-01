"use client";

import { Link } from '@/app/i18n/navigation';
import { useTranslations } from 'next-intl';
import { SocialIcon } from './SocialIcons';

export function SocialLinks() {
  const socialData = useTranslations('Footer').raw('social') as Array<{
    name: string;
    url: string;
  }>;
  
  return (
    <div className="grid grid-flow-col grid-cols-3 gap-3">
      {socialData.map(link => (
        <Link
          key={link.name}
          href={link.url as any}
          className="flex items-center justify-center"
        >
          <SocialIcon name={link.name} />
        </Link>
      ))}
    </div>
  );
} 