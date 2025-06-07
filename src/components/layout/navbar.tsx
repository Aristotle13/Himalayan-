
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger, SheetClose } from '@/components/ui/sheet';
import { Menu as MenuIcon, X as CloseIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

import logo from './logo.png';


const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/#about', label: 'About' },
  { href: '/#gallery', label: 'Gallery' },
  { href: '/#contact', label: 'Contact' },
  { href: '/menu', label: 'Menu' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" onClick={handleLinkClick}>
          <Image
            src= {logo}
            alt="Himalayan Delights Logo"
            width={32}
            height={32}
            className="h-8 w-8"
            style={{ objectFit: 'contain' }}
            data-ai-hint="bakery logo"
          />
          <span className="font-headline text-xl font-bold text-foreground">The Himalayan Sweets & Bakes</span>
        </Link>

        <nav className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                (pathname === link.href || (link.href === '/' && pathname.startsWith('/#'))) ? "text-primary" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-xs bg-background p-6">
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center mb-4">
                    <Link href="/" className="flex items-center gap-2" onClick={handleLinkClick}>
                        <Image
                            src="https://placehold.co/40x40.png"
                            alt="Himalayan Delights Logo"
                            width={28}
                            height={28}
                            className="h-7 w-7"
                            style={{ objectFit: 'contain' }}
                            data-ai-hint="bakery logo"
                        />
                        <span className="font-headline text-lg font-bold text-foreground">Himalayan Delights</span>
                    </Link>
                    <SheetClose asChild>
                         <Button variant="ghost" size="icon">
                            <CloseIcon className="h-6 w-6" />
                            <span className="sr-only">Close menu</span>
                        </Button>
                    </SheetClose>
                </div>
                {navLinks.map((link) => (
                  <SheetClose asChild key={link.label}>
                    <Link
                      href={link.href}
                      onClick={handleLinkClick}
                      className={cn(
                        "block rounded-md px-3 py-2 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground",
                        (pathname === link.href || (link.href === '/' && pathname.startsWith('/#'))) ? "bg-accent text-accent-foreground" : "text-foreground"
                      )}
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
