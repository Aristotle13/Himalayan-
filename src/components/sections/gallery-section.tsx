import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';

const galleryItems = [
  { src: "https://placehold.co/400x300.png", alt: "Delicious momos", dataAiHint: "himalayan food" },
  { src: "https://placehold.co/400x300.png", alt: "Colorful sweets platter", dataAiHint: "indian sweets" },
  { src: "https://placehold.co/400x300.png", alt: "Warm and cozy restaurant interior", dataAiHint: "restaurant interior" },
  { src: "https://placehold.co/400x300.png", alt: "Freshly baked bread", dataAiHint: "artisan bread" },
  { src: "https://placehold.co/400x300.png", alt: "Happy customers enjoying their meal", dataAiHint: "happy customers" },
  { src: "https://placehold.co/400x300.png", alt: "Traditional Himalayan thali", dataAiHint: "himalayan thali" },
];

export default function GallerySection() {
  return (
    <section id="gallery" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">Our Gallery</h2>
          <p className="text-lg text-muted-foreground mt-2">A Glimpse of Himalayan Delights</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <Card key={index} className="overflow-hidden shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
              <CardContent className="p-0">
                <div className="relative aspect-video">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    layout="fill"
                    objectFit="cover"
                    className="transition-opacity duration-300 hover:opacity-90"
                    data-ai-hint={item.dataAiHint}
                  />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
