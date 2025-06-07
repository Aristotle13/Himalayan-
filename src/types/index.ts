import type { LucideProps } from 'lucide-react';
import type React from 'react';

export interface MenuItem {
  name: string;
  description: string;
  price: string;
  imageSrc?: string;
  dataAiHint?: string;
}

export interface MenuCategoryData {
  title: string;
  icon: React.ForwardRefExoticComponent<Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>>;
  items: MenuItem[];
}
