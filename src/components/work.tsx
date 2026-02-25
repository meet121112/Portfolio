'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Palette, Layout, Code2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const projects = [
  {
    id: 'specialty-01',
    title: 'BRAND IDENTITY & STRATEGIC CONTENT',
    icon: <Palette className="w-10 h-10 text-primary" />,
    description: 'A creative visual and verbal engine that translates brand values into high-impact assets and conversion-driven content for websites and social marketing.',
  },
  {
    id: 'specialty-02',
    title: 'UX/UI INTERFACE STRATEGIST',
    icon: <Layout className="w-10 h-10 text-primary" />,
    description: 'A user-centric framework that transforms complex requirements into intuitive wireframes and interactive prototypes, prioritizing friction-less navigation.',
  },
  {
    id: 'specialty-03',
    title: 'FULL-STACK WEB DEVELOPER',
    icon: <Code2 className="w-10 h-10 text-primary" />,
    description: 'An end-to-end digital architect specializing in responsive frontend frameworks and robust backend logic to create scalable, SEO-friendly experiences.',
  },
];

export function Work() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.05,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="work" 
      ref={sectionRef}
      className="relative z-10 py-12 px-6 max-w-7xl w-full flex flex-col items-center gap-10 overflow-hidden"
    >
      {/* Header with momentum entrance */}
      <div className={cn(
        "flex flex-col items-center gap-4 text-center mb-2 transition-all duration-[1200ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-24"
      )}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider">
          <Sparkles className="w-3 h-3 fill-primary" />
          SELECTED HIGHLIGHTS
        </div>
        <h2 className="text-4xl md:text-7xl font-bold tracking-tight text-white max-w-3xl leading-tight">
          Specialty <span className="text-primary italic">Frameworks</span>
        </h2>
        <p className="text-white/40 max-w-xl text-lg mt-2">
          A strategic highlight of core frameworks engineered to solve complex business challenges through technology and design.
        </p>
      </div>

      {/* Highlights Grid */}
      <div className={cn(
        "grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl transition-all duration-[1500ms] delay-300 [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
        isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}>
        {projects.map((project, index) => (
          <Link 
            key={project.id} 
            href={`/work/${project.id}`} 
            className={cn(
              "block group transition-all duration-[1500ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-48"
            )}
            style={{ transitionDelay: `${isVisible ? (400 + index * 100) : 0}ms` }}
          >
            <div className="relative h-[460px] w-full p-8 rounded-[40px] border border-white/10 bg-black overflow-hidden flex flex-col justify-between transition-all duration-500 group-hover:border-primary/50 group-hover:bg-white/[0.02]">
              <div className="absolute inset-0 opacity-[0.03] group-hover:opacity-[0.07] transition-opacity pointer-events-none" 
                style={{ 
                  backgroundImage: `linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)`,
                  backgroundSize: '40px 40px'
                }} 
              />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <span className="text-xs font-bold text-white/30 font-mono tracking-widest uppercase">
                    Framework {index + 1}
                  </span>
                  <div className="transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                    {project.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-bold leading-tight text-white transition-colors group-hover:text-primary uppercase tracking-tight">
                  {project.title}
                </h3>
              </div>

              <div className="relative z-10 space-y-6">
                <p className="text-white/50 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex justify-between items-center pt-6 border-t border-white/5">
                  <span className="text-white/40 group-hover:text-white transition-colors gap-2 text-[10px] font-bold uppercase tracking-widest group-hover:text-primary flex items-center">
                    Explore Strategy <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </div>

              <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </div>
          </Link>
        ))}
      </div>

      <div className={cn(
        "flex justify-center pt-4 transition-all duration-[1000ms] delay-[1200ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      )}>
        <Link href="/work">
          <Button variant="outline" className="h-14 px-12 rounded-2xl border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white hover:border-white/20 transition-all flex gap-3 group">
            View All Specialized Work
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
