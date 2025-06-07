import type { MenuCategoryData } from '@/types';
import MenuItemCard from './menu-item-card';

interface MenuCategoryProps {
  category: MenuCategoryData;
}

export default function MenuCategory({ category }: MenuCategoryProps) {
  const IconComponent = category.icon;
  return (
    <div className="mb-12">
      <div className="flex items-center gap-3 mb-6">
        <IconComponent className="h-8 w-8 text-primary" />
        <h3 className="font-headline text-2xl md:text-3xl font-bold text-primary">{category.title}</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.items.map((item) => (
          <MenuItemCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}
