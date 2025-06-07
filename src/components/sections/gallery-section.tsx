
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import momoImage from './images/momo.jpg';
import naanImage from './images/naan.jpg';
import thukpaImage from './images/thukpa.jpg';
import gulabImage from './images/gulab jamun.jpg';
import dhalbhatImage from './images/dhalbhat.jpg';
import ladduImage from './images/laddu.png';


const galleryItems = [
  { src: momoImage, alt: "Delicious momos", dataAiHint: "himalayan food" },
  { src: naanImage, alt: "Colorful sweets platter", dataAiHint: "indian sweets" },
  { src: thukpaImage, alt: "Warm and cozy restaurant interior", dataAiHint: "restaurant interior" },
  { src: gulabImage, alt: "Freshly baked bread", dataAiHint: "artisan bread" },
  { src: dhalbhatImage, alt: "Happy customers enjoying their meal", dataAiHint: "happy customers" },
  { src: ladduImage, alt: "Traditional Himalayan thali", dataAiHint: "himalayan thali" },
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
                    fill
                    style={{ objectFit: 'cover' }}
                    className="transition-opacity duration-300 hover:opacity-90"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
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
