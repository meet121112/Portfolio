'use client';

import React from 'react';
import Image from 'next/image';
import { Instagram, Globe, Layout, Sparkles, ExternalLink } from 'lucide-react';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const projects = [
  { 
    id: 'ig-1', 
    type: 'Instagram', 
    name: 'Technology Solution', 
    handle: '@technologysolution.ca',
    link: 'https://instagram.com/technologysolution.ca',
    icon: <Instagram className="w-4 h-4" />, 
    stat: 'Brand Hub' 
  },
  { 
    id: 'ig-2', 
    type: 'Instagram', 
    name: 'ECC Education Group', 
    handle: '@eccedugroup',
    link: 'https://instagram.com/eccedugroup',
    icon: <Instagram className="w-4 h-4" />, 
    stat: 'Community' 
  },
  { 
    id: 'web-1', 
    type: 'Website', 
    name: 'technologysolution.ca', 
    link: 'https://technologysolution.ca',
    icon: <Globe className="w-4 h-4" />, 
    stat: 'Live Platform' 
  },
  { 
    id: 'web-2', 
    type: 'Website', 
    name: 'rjglobalhiring.ca', 
    link: 'https://rjglobalhiring.ca',
    icon: <Globe className="w-4 h-4" />, 
    stat: 'Global Reach' 
  },
  { 
    id: 'web-3', 
    type: 'Website', 
    name: 'royalkitchencountertop.ca', 
    link: 'https://royalkitchencountertop.ca',
    icon: <Globe className="w-4 h-4" />, 
    stat: 'E-commerce' 
  },
  { 
    id: 'web-4', 
    type: 'Website', 
    name: 'tnass.ca', 
    link: 'https://tnass.ca',
    icon: <Globe className="w-4 h-4" />, 
    stat: 'Enterprise' 
  },
  { 
    id: 'win-1', 
    type: 'Windows App', 
    name: 'Desktop Orchestrator', 
    link: '#',
    icon: <Layout className="w-4 h-4" />, 
    stat: 'Native Tool' 
  },
];

export function LiveProjects() {
  // Duplicate projects for seamless infinite scrolling
  const marqueeItems = [...projects, ...projects, ...projects];

  return (
    <section id="live-projects" className="relative z-10 py-24 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 mb-16 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider mb-6">
          <Sparkles className="w-3 h-3 fill-primary" />
          LIVE ECOSYSTEM
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
          Real-World <span className="text-primary italic">Platforms</span>.
        </h2>
        <p className="text-white/50 max-w-2xl text-lg leading-relaxed">
          Active channels and web environments currently operating at scale, showcasing technical versatility across web, social, and desktop.
        </p>
      </div>

      <div className="relative flex overflow-x-hidden group">
        <div className="flex py-8 animate-marquee whitespace-nowrap pause-on-hover">
          {marqueeItems.map((project, idx) => {
            const imageData = PlaceHolderImages.find(img => img.id === project.id) || PlaceHolderImages[0];
            return (
              <a 
                key={`${project.id}-${idx}`} 
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mx-6 w-[320px] md:w-[420px] flex-shrink-0 cursor-pointer"
              >
                <div className="relative group/card h-[380px] md:h-[480px] rounded-[40px] border border-white/10 bg-white/[0.02] backdrop-blur-md overflow-hidden transition-all duration-700 hover:border-primary/50 hover:bg-white/[0.04] p-6 flex flex-col gap-6">
                  {/* Preview Container */}
                  <div className="relative flex-1 rounded-[32px] overflow-hidden border border-white/5 bg-black/40">
                    <Image 
                      src={imageData.imageUrl} 
                      alt={project.name}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover/card:scale-110"
                      data-ai-hint={imageData.imageHint}
                    />
                    
                    {/* Glass Overlay on Image */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 opacity-60 transition-opacity group-hover/card:opacity-40" />
                    
                    {/* Live Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-xl border border-white/10">
                      <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]" />
                      <span className="text-[9px] font-black text-white/90 uppercase tracking-[0.2em]">LIVE</span>
                    </div>

                    {/* Stat Badge */}
                    <div className="absolute bottom-4 left-4">
                       <span className="px-4 py-2 rounded-2xl bg-primary/20 backdrop-blur-md border border-primary/20 text-[10px] font-bold text-primary uppercase tracking-widest">
                        {project.stat}
                       </span>
                    </div>

                    {/* Link Indicator */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover/card:opacity-100 transition-opacity duration-500">
                      <div className="w-16 h-16 rounded-full bg-primary/20 backdrop-blur-xl border border-primary/40 flex items-center justify-center text-white">
                        <ExternalLink className="w-6 h-6" />
                      </div>
                    </div>
                  </div>

                  {/* Info Container */}
                  <div className="flex justify-between items-center px-2">
                    <div className="flex flex-col gap-1 overflow-hidden">
                      <span className="text-[11px] font-bold tracking-[0.3em] text-white/30 uppercase">
                        {project.type} {project.handle && `• ${project.handle}`}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight truncate">
                        {project.name}
                      </h3>
                    </div>
                    <div className="w-14 h-14 rounded-2xl bg-white/[0.03] flex items-center justify-center border border-white/10 text-white/20 group-hover/card:text-primary group-hover/card:border-primary/30 group-hover/card:bg-primary/5 transition-all duration-700">
                      {project.icon}
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
      
      {/* Background Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-primary/5 rounded-full blur-[160px] -z-10" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
    </section>
  );
}
