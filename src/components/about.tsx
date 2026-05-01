'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const aboutText = "I am Meetkumar Patel, a multi-disciplinary professional specializing in strategic digital orchestration and IT operations. My expertise spans high-performance visual asset design, end-to-end social media management, and the coordination of complex digital deliverables. Beyond the creative sphere, I am a seasoned IT technician, managing hardware procurement, network infrastructure including VLAN/VPN management, Windows Server environments, and Microsoft Entra ID (Azure AD). I specialize in 3-2-1 backup strategies, SharePoint permission architecture, network printer configuration, terminal security, and VoIP phone system support. My approach bridges creative vision with technical precision, leveraging automation and data-driven strategy to ensure maximum uptime and absolute brand consistency for critical business environments.";
  const aboutWords = aboutText.split(' ');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.15,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative z-10 py-16 md:py-24 px-6 max-w-7xl w-full flex flex-col items-start gap-8">
      {/* Decorative Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
        <Sparkles className="w-3 h-3 fill-primary" />
        ABOUT MEET
      </div>

      {/* Animated Text Paragraph */}
      <div className="text-left w-full max-w-5xl">
        <h2 className="text-base sm:text-lg md:text-xl font-medium tracking-tight leading-[1.8] flex flex-wrap justify-start gap-x-1.5 sm:gap-x-2 gap-y-1 text-white">
          {aboutWords.map((word, i) => (
            <span 
              key={i} 
              className={cn(
                "transition-all duration-700 ease-out translate-y-4 opacity-0",
                isVisible && "opacity-100 translate-y-0"
              )}
              style={{ 
                transitionDelay: `${isVisible ? (0.01 * i) : 0}s`,
                color: isVisible ? 'white' : 'rgba(255, 255, 255, 0.1)'
              }}
            >
              {word}
            </span>
          ))}
        </h2>
      </div>

      {/* Action Button */}
      <div className="pt-4 w-full sm:w-auto">
        <Link href="/about" className="w-full sm:w-auto">
          <Button className="w-full sm:w-auto h-14 px-10 rounded-2xl text-md font-bold bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_40px_rgba(37,99,235,0.25)] transition-all flex gap-3 group">
            Explore My Journey
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
