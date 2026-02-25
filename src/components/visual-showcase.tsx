'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { 
  Sparkles, 
  ExternalLink, 
  Globe, 
  Palette, 
  Instagram,
  ArrowRight,
  Video,
  PlayCircle,
  Layout
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';
import Link from 'next/link';
import { cn } from '@/lib/utils';

declare global {
  interface Window {
    instgrm: any;
  }
}

function InstagramEmbed({ url }: { url: string }) {
  useEffect(() => {
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
          <a href={url} target="_blank" rel="noopener noreferrer" className="text-[10px] font-bold uppercase tracking-widest opacity-20 hover:opacity-100 transition-opacity text-white">
            Loading Media...
          </a>
        </div>
      </blockquote>
    </div>
  );
}

function ReelPlayer({ id }: { id: string }) {
  return (
    <div className="relative aspect-[9/16] w-full max-w-[340px] mx-auto rounded-[32px] overflow-hidden bg-black border border-white/10 shadow-2xl group/reel">
      <iframe
        src={`https://drive.google.com/file/d/${id}/preview`}
        className="absolute inset-0 w-full h-full border-none opacity-90 group-hover/reel:opacity-100 transition-opacity duration-500"
        allow="autoplay; fullscreen"
        loading="lazy"
        title="Specialized Reel"
      />
      <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-[32px] inset-px" />
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

const socialPosts = [
  'https://www.instagram.com/p/DG1tdotPcPo/',
  'https://www.instagram.com/p/DGem_y6MQu4/',
  'https://www.instagram.com/p/DGUBd79vMuQ/',
  'https://www.instagram.com/p/DGPB68Bv4wn/',
  'https://www.instagram.com/p/DFZVnlpMH83/',
  'https://www.instagram.com/p/DFqk_SaP_1H/',
  'https://www.instagram.com/p/DF62RmGsNIg/',
  'https://www.instagram.com/p/DF65h2AsAPl/',
  'https://www.instagram.com/p/DGCH2Lov9CD/',
  'https://www.instagram.com/p/DTTfzUCEXle/',
  'https://www.instagram.com/p/DSa_OQ0kaeA/',
  'https://www.instagram.com/p/DSa_j3VkeQH/',
  'https://www.instagram.com/p/DSGSNdIkfnT/'
];

const reelDriveIds = [
  '1lBmk4zuyFWxExIb_U8UrQPZpa5YKWSp7',
  '1pxl3yx7GD7535ByccxQAImbyfhW7s2wG',
  '13nTaWB_XBGXRqoZk2APgGaW7WvwRw_zc',
  '1kbZih9I9h3yC-r4Ft1VSwziykB0fF2je',
  '1M1BqBoP3OqD53_K6AJn2W8LfZac6TDMe'
];

export function VisualShowcase() {
  return (
    <section className="relative z-10 py-20 px-6 max-w-7xl w-full flex flex-col items-center gap-10 md:gap-16">
      <div className="flex flex-col items-center gap-4 text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
          <Sparkles className="w-3 h-3 fill-primary" />
          VISUAL EXECUTION
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          Crafted <span className="text-primary italic">Excellence</span>.
        </h2>
        <p className="text-white/40 max-w-2xl text-sm md:text-lg">
          Explore the synergy between high-performance strategy and premium visual storytelling across four core pillars.
        </p>
      </div>

      <Tabs defaultValue="motion" className="w-full">
        <div className="w-full overflow-x-auto pb-4 mb-8 flex md:justify-center scrollbar-hide">
          <TabsList className="bg-white/5 border border-white/10 p-1 h-12 md:h-14 rounded-2xl gap-1 md:gap-2 backdrop-blur-md flex-nowrap inline-flex min-w-max mx-auto md:mx-0">
            <TabsTrigger value="motion" className="rounded-xl px-4 md:px-6 data-[state=active]:bg-primary data-[state=active]:text-white transition-all gap-2 text-[10px] md:text-sm">
              <PlayCircle className="w-4 h-4" />
              <span className="hidden md:inline">Motion Narrative</span>
              <span className="hidden min-[425px]:inline md:hidden">Motion</span>
            </TabsTrigger>
            <TabsTrigger value="social" className="rounded-xl px-4 md:px-6 data-[state=active]:bg-primary data-[state=active]:text-white transition-all gap-2 text-[10px] md:text-sm">
              <Instagram className="w-4 h-4" />
              <span className="hidden md:inline">Social Strategy</span>
              <span className="hidden min-[425px]:inline md:hidden">Social</span>
            </TabsTrigger>
            <TabsTrigger value="platforms" className="rounded-xl px-4 md:px-6 data-[state=active]:bg-primary data-[state=active]:text-white transition-all gap-2 text-[10px] md:text-sm">
              <Globe className="w-4 h-4" />
              <span className="hidden md:inline">Live Platforms</span>
              <span className="hidden min-[425px]:inline md:hidden">Web</span>
            </TabsTrigger>
            <TabsTrigger value="identity" className="rounded-xl px-4 md:px-6 data-[state=active]:bg-primary data-[state=active]:text-white transition-all gap-2 text-[10px] md:text-sm">
              <Palette className="w-4 h-4" />
              <span className="hidden md:inline">Brand Identity</span>
              <span className="hidden min-[425px]:inline md:hidden">Brand</span>
            </TabsTrigger>
          </TabsList>
        </div>

        <TabsContent value="motion" className="space-y-12 slide-up focus-visible:outline-none">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3 px-2 mb-2">
                <Video className="w-5 h-5 text-primary" />
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Featured Production</h3>
              </div>
              <div className="group relative rounded-[24px] md:rounded-[48px] overflow-hidden border border-white/10 bg-black aspect-video shadow-2xl transition-all duration-700 hover:border-primary/50">
                 <iframe 
                   src="https://drive.google.com/file/d/18B9giS1QRI2aVwnKxAJvQWCusJhODW47/preview" 
                   className="absolute inset-0 w-full h-full border-none opacity-80 group-hover:opacity-100 transition-opacity duration-700"
                   allow="autoplay; fullscreen"
                   loading="lazy"
                   title="Motion Narrative Video"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none opacity-60" />
              </div>
            </div>

            <div className="lg:col-span-4 space-y-6">
              <div className="flex items-center gap-3 px-2 mb-2">
                <PlayCircle className="w-5 h-5 text-primary" />
                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Specialized Reels</h3>
              </div>
              <Carousel opts={{ align: "start", loop: true }} className="w-full relative px-10">
                <CarouselContent>
                  {reelDriveIds.map((id, idx) => (
                    <CarouselItem key={`reel-${idx}`}>
                      <div className="px-1">
                        <ReelPlayer id={id} />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="-left-4 h-10 w-10 bg-black/60 backdrop-blur-xl border-white/10 hover:border-primary/50 text-white transition-all rounded-full" />
                <CarouselNext className="-right-4 h-10 w-10 bg-black/60 backdrop-blur-xl border-white/10 hover:border-primary/50 text-white transition-all rounded-full" />
              </Carousel>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="social" className="slide-up focus-visible:outline-none">
          <div className="space-y-8">
            <div className="flex items-center gap-3 px-2">
              <Instagram className="w-5 h-5 text-primary" />
              <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/30">Campaign Showcase</h3>
            </div>
            <Carousel opts={{ align: "start", loop: true }} className="w-full relative px-6 md:px-12">
              <CarouselContent className="-ml-4">
                {socialPosts.map((url, idx) => (
                  <CarouselItem key={idx} className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3">
                    <div className="relative rounded-[24px] md:rounded-[32px] overflow-hidden border border-white/5 bg-white/[0.01] p-1 h-full">
                      <InstagramEmbed url={url} />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="left-2 md:left-4 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 bg-black/60 backdrop-blur-xl border-white/10 hover:border-primary/50 text-white transition-all rounded-full" />
              <CarouselNext className="right-2 md:right-4 top-1/2 -translate-y-1/2 h-10 w-10 md:h-12 md:w-12 bg-black/60 backdrop-blur-xl border-white/10 hover:border-primary/50 text-white transition-all rounded-full" />
            </Carousel>
          </div>
        </TabsContent>

        <TabsContent value="platforms" className="slide-up focus-visible:outline-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {websites.map((site) => (
              <a 
                key={site.url} 
                href={site.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group p-6 md:p-8 rounded-[24px] md:rounded-[40px] bg-white/[0.02] border border-white/5 hover:border-primary/50 transition-all flex flex-col justify-between min-h-[160px] md:min-h-[200px]"
              >
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                    <Globe className="w-5 h-5 md:w-6" />
                  </div>
                  <ExternalLink className="w-5 h-5 text-white/20 group-hover:text-primary transition-all" />
                </div>
                <div className="mt-6">
                  <h4 className="text-xl md:text-2xl font-bold text-white group-hover:text-primary transition-colors">{site.name}</h4>
                  <p className="text-[9px] md:text-[10px] font-mono text-white/30 uppercase mt-2 tracking-widest">{site.handle}</p>
                </div>
              </a>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="identity" className="slide-up focus-visible:outline-none">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {featuredLogos.map((logo) => (
              <div 
                key={logo.name}
                className={cn(
                  "relative h-40 md:h-56 rounded-[24px] md:rounded-[56px] border border-white/10 flex items-center justify-center p-8 md:p-10 group hover:opacity-95 transition-all overflow-hidden shadow-2xl",
                  logo.bgColor
                )}
              >
                <div className="relative w-full h-full">
                  <Image 
                    src={logo.logo} 
                    alt={logo.name} 
                    fill 
                    className="object-contain transition-all duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as any;
                      target.src = `https://picsum.photos/seed/${logo.handle}/400/200`;
                    }}
                  />
                </div>
                <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
              </div>
            ))}
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-8">
        <Link href="/work">
          <Button variant="ghost" className="h-10 md:h-12 px-6 md:px-8 rounded-2xl text-white/40 hover:text-primary hover:bg-transparent flex gap-3 group">
            <span className="font-bold uppercase tracking-widest text-[9px] md:text-[10px]">Explore Specialized Portfolio</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
