'use client';

import React, { useEffect, useState } from 'react';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export function Footer() {
  const [year, setYear] = useState<number | null>(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  const socialLinks = [
    { name: 'LinkedIn', icon: <Linkedin className="w-4 h-4" />, href: 'https://www.linkedin.com/in/patelmeetk/' },
    { name: 'Email', icon: <Mail className="w-4 h-4" />, href: 'mailto:meet121112@gmail.com' },
  ];

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Work', href: '/work' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <footer className="relative w-full border-t border-white/5 bg-[#0a0a0a] pt-24 pb-12 px-6 overflow-hidden">
      {/* Background Grid Decoration */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
          backgroundSize: '80px 80px'
        }} 
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
          {/* Column 1: Brand & CTA */}
          <div className="lg:col-span-2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-white">
                STAY <span className="text-primary italic">CONNECTED</span>.
              </h2>
              <p className="text-white/50 text-lg max-w-md">
                Always open to interesting conversations, technical discussions, or just sharing thoughts on the future of technology.
              </p>
            </div>
            <Link href="/contact">
              <Button className="h-14 px-8 rounded-2xl bg-white text-black hover:bg-white/90 transition-all font-semibold flex gap-2 group">
                Get In Touch
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Button>
            </Link>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.2em] text-white/30 uppercase">Navigation</h4>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="text-white/60 hover:text-primary transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    {link.name}
                    <span className="w-0 h-px bg-primary transition-all duration-300 group-hover:w-4" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Socials */}
          <div className="space-y-6">
            <h4 className="text-xs font-bold tracking-[0.2em] text-white/30 uppercase">Profiles</h4>
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.03] border border-white/5 text-white/60 hover:text-white hover:border-primary/50 hover:bg-white/[0.05] transition-all text-sm group"
                >
                  <span className="group-hover:text-primary transition-colors">
                    {social.icon}
                  </span>
                  {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[10px] font-bold tracking-widest text-white/30 uppercase">
            &copy; {year ?? '...'} Meet Patel — Personal Portfolio
          </p>
          <div className="flex items-center gap-8">
            <span className="text-[10px] font-bold tracking-widest text-white/20 uppercase">
              Curiosity-driven development
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
