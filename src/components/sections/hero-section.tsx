
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function HeroSection() {
  return (
    <section id="home" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold text-primary leading-tight">
            Welcome to The Himalayan Sweets & Bakes
          </h1>
          <p className="text-lg text-muted-foreground">
            Experience the authentic taste of the Himalayas. We offer a delightful range of traditional sweets, freshly baked goods, and savory treats, all made with love and the finest ingredients.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button asChild size="lg" className="font-semibold">
              <Link href="/menu">View Our Menu</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="font-semibold">
              <Link href="/#contact">Contact Us</Link>
            </Button>
          </div>
        </div>
        <div className="relative h-64 md:h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://placehold.co/800x600.png"
            alt="Delicious Himalayan sweets and bakes"
            fill
            style={{ objectFit: 'cover' }}
            className="transform transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 100vw, 50vw"
            data-ai-hint="himalayan food variety"
          />
        </div>
      </div>
    </section>
  );
}
