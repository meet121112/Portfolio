'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, GraduationCap, Code2 } from 'lucide-react';
import { cn } from '@/lib/utils';

const education = [
  {
    id: '3',
    course: 'Web Development',
    institution: 'Conestoga College, Waterloo',
    label: 'Post Graduation',
    description: 'Post Graduate specialization in modern full-stack development and cloud architecture in the Canadian tech hub, focusing on high-performance strategy.',
    icon: <Code2 className="w-6 h-6 text-primary" />,
  },
  {
    id: '2',
    course: 'Information Technology',
    institution: 'SVIT, Gujarat University',
    label: 'Bachelors Degree',
    description: 'A comprehensive B.E. degree focused on software engineering, data structures, and algorithms, providing a deep environment of technical innovation.',
    icon: <GraduationCap className="w-6 h-6 text-primary" />,
  },
];

export function Education() {
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
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="education" 
      ref={sectionRef}
      className="relative z-10 py-16 md:py-24 px-6 max-w-7xl w-full flex flex-col items-center gap-10 overflow-hidden"
    >
      <div className={cn(
        "flex flex-col items-center gap-4 text-center mb-2 transition-all duration-1000 ease-out",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      )}>
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          Think Big
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white leading-tight">
          Academic <span className="italic text-primary/80">Foundation</span>
        </h2>
        <p className="text-white/40 max-w-2xl text-sm md:text-lg leading-relaxed px-4">
          A global educational journey spanning two continents, fusing rigorous scientific training with advanced technical specialization.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 w-full max-w-5xl">
        {education.map((item, index) => (
          <Link 
            key={item.id}
            href={`/about#education-${item.id}`}
            className={cn(
              "group relative p-6 md:p-10 rounded-[32px] md:rounded-[40px] border border-white/10 border-dashed bg-white/[0.01] flex flex-col justify-between min-h-[340px] md:min-h-[380px] h-full cursor-pointer transition-all duration-1000 ease-out",
              isVisible 
                ? "opacity-100 translate-x-0" 
                : "opacity-0 -translate-x-20",
              "hover:border-primary/40 hover:bg-white/[0.03]"
            )}
            style={{ 
              transitionDelay: `${isVisible ? (200 * (index + 1)) : 0}ms` 
            }}
          >
            <div className="space-y-6">
              <div className="flex justify-between items-start">
                <h3 className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight max-w-[220px] group-hover:text-primary transition-colors">
                  {item.course}
                </h3>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-2xl bg-primary/5 flex items-center justify-center border border-white/5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {item.icon}
                </div>
              </div>
              
              <p className="text-white/50 text-xs md:text-base leading-relaxed">
                {item.description}
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/5 flex justify-between items-center">
              <div className="space-y-1">
                <span className="text-[9px] md:text-[10px] font-bold text-primary tracking-[0.2em] uppercase">
                  {item.label}
                </span>
                <h4 className="text-lg md:text-xl font-bold text-white tracking-tight">
                  {item.institution}
                </h4>
              </div>
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/10 flex items-center justify-center transition-all duration-500 group-hover:bg-primary group-hover:border-primary group-hover:text-white shrink-0 ml-4">
                <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-rotate-45" />
              </div>
            </div>

            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </Link>
        ))}
      </div>
    </section>
  );
}
