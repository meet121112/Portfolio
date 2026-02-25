'use client';

import React, { useEffect } from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  ExternalLink, 
  Globe, 
  Palette, 
  Instagram,
  ArrowRight,
  Video
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import Link from 'next/link';
import { cn } from '@/lib/utils';

// Declare global for Instagram script to prevent TypeScript errors
declare global {
  interface Window {
    instgrm: any;
  }
}

// Instagram Embed Component
function InstagramEmbed({ url }: { url: string }) {
  useEffect(() => {
    // Rely on global script in layout.tsx to reduce re-injection noise
    if (typeof window !== 'undefined' && window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div className="flex justify-center w-full">
      <blockquote
        className="instagram-media w-full"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: 'transparent',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '24px',
          margin: '0',
          padding: '0',
          width: '100%',
        }}
      >
        <div style={{ padding: '16px' }}>
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest opacity-20 hover:opacity-100 transition-opacity">
            Loading Media...
          </a>
        </div>
      </blockquote>
    </div>
  );
}

const websites = [
  { name: 'Technology Solution', url: 'https://technologysolution.ca', handle: 'technologysolution.ca' },
  { name: 'RJ Global Hiring', url: 'https://rjglobalhiring.ca', handle: 'rjglobalhiring.ca' },
  { name: 'Royal Kitchen Countertop', url: 'https://royalkitchencountertop.ca', handle: 'royalkitchencountertop.ca' },
  { name: 'ECC Education Group', url: 'https://eccedugroup.com', handle: 'eccedugroup.com' },
  { name: 'TNASS', url: 'https://tnass.com', handle: 'tnass.com' },
];

const featuredLogos = [
  { 
    name: 'ECC Education Group', 
    handle: 'ecc-logo', 
    logo: 'https://eccedugroup.com/logo.png',
    bgColor: 'bg-white'
  },
  { 
    name: 'RJ Global Hiring', 
    handle: 'rj-logo', 
    logo: 'https://rjglobalhiring.ca/logo.png',
    bgColor: 'bg-white'
  },
  { 
    name: 'Royal Kitchen Countertop', 
    handle: 'rkc-logo', 
    logo: 'https://royalkitchencountertop.ca/wp-content/uploads/2025/08/cropped-RKC_logo-1.png',
    bgColor: 'bg-zinc-950'
  },
];

const posts = [
  'https://www.instagram.com/p/DG1tdotPcPo/',
  'https://www.instagram.com/reel/DKSzjFmxI96/',
  'https://www.instagram.com/p/DGem_y6MQu4/',
  'https://www.instagram.com/reel/DJpijScRwQ5/',
  'https://www.instagram.com/p/DGUBd79vMuQ/',
  'https://www.instagram.com/p/DSr63YDEVPX/',
  'https://www.instagram.com/p/DGPB68Bv4wn/',
  'https://www.instagram.com/reel/DSdGiQFEWJq/',
  'https://www.instagram.com/p/DFZVnlpMH83/',
  'https://www.instagram.com/reel/DKNwA0JRqlW/',
  'https://www.instagram.com/p/DFqk_SaP_1H/',
  'https://www.instagram.com/p/DF62RmGsNIg/',
  'https://www.instagram.com/p/DF65h2AsAPl/',
  'https://www.instagram.com/p/DGCH2Lov9CD/',
  'https://www.instagram.com/p/DTTfzUCEXle/',
  'https://www.instagram.com/p/DSa_OQ0kaeA/',
  'https://www.instagram.com/p/DSa_j3VkeQH/',
  'https://www.instagram.com/p/DSGSNdIkfnT/'
];

export function VisualShowcase() {
  return (
    <section className="relative z-10 py-12 px-6 max-w-7xl w-full flex flex-col items-center gap-10">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider">
          <Sparkles className="w-3 h-3 fill-primary" />
          PORTFOLIO HIGHLIGHTS
        </div>
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          Visual <span className="text-primary italic">Execution</span>.
        </h2>
        <p className="text-white/40 max-w-2xl text-lg">
          A curated selection of live platforms, brand identities, and strategic motion content engineered for enterprise growth.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full items-start">
        {/* Websites Column */}
        <div className="space-y-6 lg:col-span-3 lg:sticky lg:top-32 order-2 lg:order-1">
          <div className="flex items-center gap-3 px-2">
            <Globe className="w-5 h-5 text-primary" />
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/30">Live Platforms</h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {websites.map((site) => (
              <a 
                key={site.url} 
                href={site.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-6 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-primary/50 transition-all flex items-center justify-between"
              >
                <div>
                  <h4 className="font-bold text-white group-hover:text-primary transition-colors text-sm">{site.name}</h4>
                  <p className="text-[9px] font-mono text-white/30 uppercase mt-1">{site.handle}</p>
                </div>
                <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-primary transition-all" />
              </a>
            ))}
          </div>
        </div>

        {/* Strategic Content Carousel Column */}
        <div className="space-y-6 lg:col-span-6 order-1 lg:order-2">
          <div className="flex items-center gap-3 px-2">
            <Instagram className="w-5 h-5 text-primary" />
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/30">Mixed Strategy Feed</h3>
          </div>
          <div className="relative w-full">
            <Carousel opts={{ align: "start", loop: true }} className="w-full relative px-12">
              <CarouselContent>
                {posts.map((url, idx) => (
                  <CarouselItem key={idx}>
                    <div className="relative rounded-[32px] overflow-hidden border border-white/5 hover:border-primary/30 transition-all bg-white/[0.01] p-1">
                      {url.includes('/reel/') && (
                        <div className="absolute top-6 left-6 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/30 text-white pointer-events-none">
                          <Video className="w-3 h-3" />
                          <span className="text-[8px] font-bold uppercase tracking-widest">Reel</span>
                        </div>
                      )}
                      <InstagramEmbed url={url} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-black/60 backdrop-blur-xl border-white/10 hover:border-primary/50 text-white transition-all" />
              <CarouselNext className="right-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-black/60 backdrop-blur-xl border-white/10 hover:border-primary/50 text-white transition-all" />
            </Carousel>
          </div>
        </div>

        {/* Logos Column */}
        <div className="space-y-6 lg:col-span-3 lg:sticky lg:top-32 order-3">
          <div className="flex items-center gap-3 px-2">
            <Palette className="w-5 h-5 text-primary" />
            <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-white/30">Brand Identities</h3>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {featuredLogos.map((logo) => (
              <div 
                key={logo.name}
                className={cn(
                  "relative h-40 rounded-[40px] border border-white/10 flex items-center justify-center p-8 group hover:opacity-90 transition-all overflow-hidden shadow-2xl",
                  logo.bgColor
                )}
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={logo.logo} 
                    alt={logo.name} 
                    fill 
                    className="object-contain transition-all duration-500 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as any;
                      target.src = `https://picsum.photos/seed/${logo.handle}/400/200`;
                    }}
                  />
                </div>
                <div className="absolute bottom-4 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 text-right">
                   <p className="text-[10px] font-bold text-primary tracking-[0.2em] uppercase">{logo.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-2">
        <Link href="/work">
          <Button variant="ghost" className="h-12 px-8 rounded-2xl text-white/40 hover:text-primary hover:bg-transparent flex gap-3 group">
            <span className="font-bold uppercase tracking-widest text-xs">Explore Full Specialized Portfolio</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
