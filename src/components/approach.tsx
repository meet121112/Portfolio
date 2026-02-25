'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const steps = [
  {
    id: '01',
    title: 'Web Designer (Wapzzo)',
    description: 'Trainee role for 1 YEAR focused on foundational design principles and initial technical implementations.',
  },
  {
    id: '02',
    title: 'Web Designer (Toshal Infotech)',
    description: '11 MONTHS role advancing UI/UX expertise and building high-performance responsive interfaces.',
  },
  {
    id: '03',
    title: 'Marketing & Developer',
    description: '1 year and continue at Technology Solution, encompassing Web Design, Graphics, and Strategic Marketing Development.',
  },
];

export function Approach() {
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
        threshold: 0.1,
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
      id="approach" 
      ref={sectionRef}
      className="relative z-10 py-20 px-6 max-w-7xl w-full flex flex-col items-center gap-8 overflow-hidden"
    >
      <div className={cn(
        "flex flex-col items-center gap-4 text-center mb-4 transition-all duration-[2000ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}>
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider">
          <Sparkles className="w-3 h-3 fill-primary" />
          MY EXPERIENCE
        </div>
        <h2 className="text-3xl md:text-6xl font-bold tracking-tight text-white max-w-3xl leading-tight">
          A Journey Defined By <br />
          <span className="text-primary">Continuous Evolution</span>
        </h2>
      </div>

      <div className="relative w-full max-w-2xl flex flex-col items-center">
        {steps.map((step, index) => (
          <div 
            key={step.id}
            className={cn(
              "relative w-full group -mt-8 md:-mt-16 first:mt-0 transition-all duration-[2000ms] [transition-timing-function:cubic-bezier(0.16,1,0.3,1)]",
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-20"
            )}
            style={{ 
              zIndex: steps.length - index,
              transitionDelay: `${isVisible ? (600 + index * 800) : 0}ms`
            }}
          >
            {/* Funnel Shape Container */}
            <div className="relative w-full h-40 md:h-64 flex items-end justify-center pb-8 overflow-hidden">
              {/* The Funnel Border (SVG for precision) */}
              <svg 
                viewBox="0 0 100 100" 
                preserveAspectRatio="none" 
                className="absolute inset-0 w-full h-full pointer-events-none"
              >
                <path 
                  d="M0,0 L100,0 L70,100 L30,100 Z" 
                  className="fill-black/40 stroke-white/10 group-hover:stroke-primary/40 transition-all duration-700"
                  strokeWidth="0.5"
                />
                {/* Glowing Bottom Border */}
                <path 
                  d="M30,100 L70,100" 
                  className="stroke-primary/30 group-hover:stroke-primary transition-all duration-700 shadow-primary"
                  strokeWidth="1.5"
                />
              </svg>

              {/* Backdrop Glow */}
              <div className="absolute inset-x-[30%] bottom-0 h-20 bg-primary/10 blur-[40px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* Content */}
              <div className="relative z-10 text-center px-6 md:px-12 transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-[8px] md:text-[10px] font-bold tracking-[0.3em] text-primary mb-2 block opacity-60">
                  STEP {step.id}
                </span>
                <h3 className="text-lg md:text-4xl font-bold text-white tracking-tight leading-tight">
                  {step.title}
                </h3>
                <p className="mt-2 text-white/40 text-[10px] md:text-sm max-w-xs mx-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {step.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      {/* Background Decorative Line */}
      <div className={cn(
        "absolute left-1/2 -translate-x-1/2 top-[40%] bottom-0 w-px bg-gradient-to-b from-primary/20 to-transparent -z-10 transition-all duration-[2000ms] delay-[2500ms]",
        isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0"
      )} />
    </section>
  );
}
