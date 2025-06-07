import HeroSection from '@/components/sections/hero-section';
import AboutSection from '@/components/sections/about-section';
import ContactSection from '@/components/sections/contact-section';
import GallerySection from '@/components/sections/gallery-section';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <GallerySection />
      <ContactSection />
    </>
  );
}
