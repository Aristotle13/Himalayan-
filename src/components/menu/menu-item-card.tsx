import Image from 'next/image';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import type { MenuItem } from '@/types';

interface MenuItemCardProps {
  item: MenuItem;
}

export default function MenuItemCard({ item }: MenuItemCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col bg-background shadow-md hover:shadow-xl transition-shadow duration-300">
      {item.imageSrc && (
        <div className="relative w-full h-48">
          <Image
            src={item.imageSrc}
            alt={item.name}
            layout="fill"
            objectFit="cover"
            data-ai-hint={item.dataAiHint || "food item"}
          />
        </div>
      )}
      <CardHeader>
        <CardTitle className="font-headline text-xl text-primary">{item.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <CardDescription className="text-foreground">{item.description}</CardDescription>
      </CardContent>
      <CardFooter>
        <p className="text-lg font-semibold text-accent">{item.price}</p>
      </CardFooter>
    </Card>
  );
}
