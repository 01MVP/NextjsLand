import { Github, Facebook, Globe, Twitter } from 'lucide-react';

export const socialIconMap = {
  Github: Github,
  Facebook: Facebook,
  Website: Globe,
  Twitter: Twitter
} as const;

export type SocialIconName = keyof typeof socialIconMap;

interface SocialIconProps {
  name: string;
  className?: string;
}

export function SocialIcon({ name, className }: SocialIconProps) {
  const IconComponent = socialIconMap[name as SocialIconName] || Globe;
  return <IconComponent className={className} />;
} 