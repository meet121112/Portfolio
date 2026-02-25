'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';

export function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-6 md:px-8 flex items-center w-full fade-in",
        isScrolled 
          ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-3 md:py-4 shadow-2xl" 
          : "bg-transparent py-4 md:py-6"
      )}
    >
      <div className="max-w-[1400px] mx-auto w-full flex justify-between items-center">
        {/* Left: Branding */}
        <Link href="/" className="flex items-center group cursor-pointer relative z-10">
          <span className="text-xl md:text-2xl font-bold tracking-tight text-white hover:opacity-80 transition-opacity">
            Meet
          </span>
        </Link>

        {/* Center: Desktop Navigation Pill */}
        <nav className={cn(
          "hidden md:flex items-center gap-6 px-8 py-3 transition-all duration-300 rounded-2xl",
          isScrolled 
            ? "bg-white/[0.04] border border-white/[0.08]" 
            : "bg-white/[0.08] backdrop-blur-2xl border border-white/[0.15]"
        )}>
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="group relative h-6 overflow-hidden flex flex-col justify-start"
              >
                <div className={cn(
                  "transition-transform duration-500 [transition-timing-function:cubic-bezier(0.76,0,0.24,1)]",
                  isActive ? "-translate-y-1/2" : "group-hover:-translate-y-1/2"
                )}>
                  <span className={cn(
                    "block h-6 text-sm font-medium transition-colors",
                    isActive ? "text-primary" : "text-white/70"
                  )}>
                    {item.name}
                  </span>
                  <span className="block h-6 text-sm font-medium text-primary">
                    {item.name}
                  </span>
                </div>
              </Link>
            );
          })}
        </nav>

        {/* Right: Actions & Hamburger */}
        <div className="flex items-center gap-4 relative z-10">
          <div className="hidden sm:flex items-center">
            <button className="text-sm font-semibold text-white/70 hover:text-white transition-opacity px-4 py-2">
              Sign In
            </button>
          </div>

          {/* Mobile Hamburger Menu */}
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:bg-white/10 rounded-xl h-10 w-10 border border-white/10"
                >
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-[#0a0a0a]/95 backdrop-blur-2xl border-white/10 text-white w-[85%] max-w-[320px] p-8">
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-8 mt-12">
                  <div className="text-[10px] font-bold tracking-[0.2em] text-primary uppercase opacity-60 mb-2">Navigation</div>
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        className={cn(
                          "text-3xl font-bold transition-all duration-300 hover:text-primary",
                          isActive ? "text-primary translate-x-2" : "text-white/70"
                        )}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                  <div className="h-px bg-white/10 my-4" />
                  <Button className="w-full h-14 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-[0_0_30px_rgba(37,99,235,0.2)]">
                    Sign In
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
