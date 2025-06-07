
import Image from 'next/image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import aboutImage from "./images/chefs.png"

export default function AboutSection() {
  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary">About Us</h2>
          <p className="text-lg text-muted-foreground mt-2">Discover Our Story and Passion</p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative w-full h-[768px] rounded-lg overflow-hidden shadow-lg">
            <Image
              src={aboutImage}
              alt="Himalayan restaurant interior or founders"
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 768px) 100vw, 50vw"
              data-ai-hint="himalayan culture kitchen"
            />
          </div>
          <div className="space-y-6">
            <Card className="bg-background shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Our History</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground">
                <p>
                  Founded with a passion for sharing the rich culinary heritage of the Himalayas, The Himalayan Sweets & Bakes started as a small family venture. Our dream was to bring the authentic flavors of our homeland to our new community, crafting each dish with traditional recipes passed down through generations.
                  <br></br> What began as a humble kitchen serving friends and neighbors has grown into a beloved destination for those seeking an authentic Himalayan experience. Over the years, we've remained rooted in our values — family, tradition, and quality — and continue to evolve while honoring the recipes and techniques that define our culture.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-background shadow-lg">
              <CardHeader>
                <CardTitle className="font-headline text-2xl text-primary">Our Values & Mission</CardTitle>
              </CardHeader>
              <CardContent className="text-foreground">
                <p>
                  We are committed to using only the freshest, highest-quality ingredients, ensuring every bite is a true delight. Our mission is to provide a warm, welcoming atmosphere where guests can enjoy delicious food, create lasting memories, and experience the genuine hospitality of the Himalayan culture.
                  <br></br>At The Himalayan Sweets & Bakes, we believe food is a bridge between cultures and generations. That’s why we prioritize sustainability, local partnerships, and community engagement in everything we do. Whether it’s your first visit or your hundredth, our goal is to make you feel at home with heartfelt service and the rich, comforting taste of home-cooked Himalayan meals.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
