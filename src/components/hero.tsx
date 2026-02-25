'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Hero() {
  return (
    <section id="home" className="relative z-10 max-w-5xl w-full flex flex-col items-center justify-center gap-8 px-6 min-h-[75vh] pt-16">
      <div className="space-y-6 text-center">
        {/* Animated Pill */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-[10px] font-bold uppercase tracking-[0.2em] text-primary mb-2 slide-up opacity-0" style={{ animationFillMode: 'forwards' }}>
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          introducing myself
        </div>

        {/* Animated Heading */}
        <div className="space-y-3">
          <h1 
            className="text-6xl md:text-9xl font-bold tracking-tight leading-[1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 slide-up opacity-0" 
            style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}
          >
            Meet Patel
          </h1>
          <p 
            className="text-3xl md:text-5xl font-light tracking-normal text-white/40 italic slide-up opacity-0" 
            style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}
          >
            Web Designer & Developer
          </p>
        </div>

        {/* Animated Description */}
        <p 
          className="text-lg md:text-xl text-white/50 font-body max-w-2xl mx-auto leading-relaxed slide-up opacity-0" 
          style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}
        >
          A multi-disciplinary developer and strategist dedicated to mastering the craft of digital creation. I explore the synergy between technical precision and creative vision.
        </p>
      </div>

      {/* Animated Actions */}
      <div 
        className="flex flex-col sm:flex-row items-center gap-6 slide-up opacity-0" 
        style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}
      >
        <Link href="/work">
          <Button size="lg" className="h-16 px-10 rounded-2xl text-md font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_rgba(37,99,235,0.3)] transition-all flex gap-3 group border-none">
            Explore My Work
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
        <Link href="/contact">
          <Button variant="ghost" size="lg" className="h-16 px-10 rounded-2xl text-md font-bold text-white/60 hover:text-white hover:bg-white/5 transition-all">
            Let&apos;s Connect
          </Button>
        </Link>
      </div>

      {/* Decorative Background Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
      </div>
    </section>
  );
}
