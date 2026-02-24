'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';

const tools = [
  { 
    id: 1, 
    name: 'React', 
    icon: (
      <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-8 h-8 fill-[#61DAFB]">
        <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
        <g stroke="#61DAFB" strokeWidth="1" fill="none">
          <ellipse rx="11" ry="4.2"/>
          <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
          <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
        </g>
      </svg>
    ), 
    top: '20%', left: '15%', delay: '0s' 
  },
  { 
    id: 2, 
    name: 'Next.js', 
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8 fill-white">
        <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.6v34.4h-8.8V38h8.8l45.4 61.1c5.2-9.4 8.1-20.1 8.1-31.1C101.9 28.7 73.2 0 64 0zM83.2 38v27.2L73.6 52V38h9.6z" />
      </svg>
    ), 
    top: '45%', left: '10%', delay: '1.2s' 
  },
  { 
    id: 3, 
    name: 'Node.js', 
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8">
        <path d="M128 0L31.1 55.9v111.8L128 223.7l96.9-55.9V55.9L128 0zm79.1 160.2l-79.1 45.7-79.1-45.7V68.9l79.1-45.7 79.1 45.7v91.3z" fill="#339933"/>
        <path d="M128 45.7l-63.3 36.5v73.1l63.3 36.5 63.3-36.5v-73.1L128 45.7z" fill="#339933" opacity=".2"/>
      </svg>
    ), 
    top: '15%', left: '40%', delay: '0.5s' 
  },
  { 
    id: 4, 
    name: 'MongoDB', 
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8">
        <path d="M185.3 128c0 31.6-25.7 57.3-57.3 57.3s-57.3-25.7-57.3-57.3 25.7-57.3 57.3-57.3 57.3 25.7 57.3 57.3z" fill="#47A248" opacity=".2"/>
        <path d="M136.2 256a8.7 8.7 0 01-1.7-.2c-3.7-.8-24.3-5.2-40.4-23.4-14.7-16.5-22.3-38.3-22.3-64.7 0-35.8 14-87.1 52.6-149.6a4.8 4.8 0 018.4 0c38.6 62.5 52.6 113.8 52.6 149.6 0 26.4-7.6 48.2-22.3 64.7-16.1 18.2-36.7 22.6-40.4 23.4l-1.7.2h-4.8zM128 14.6c-31.4 53.6-43.1 98.7-43.1 131.6 0 21.6 5.8 39.5 17.1 52.9 8.9 10.5 19.8 15.6 28 17.7 8.2-2.1 19.1-7.2 28-17.7 11.3-13.4 17.1-31.3 17.1-52.9 0-32.9-11.7-78-43.1-131.6h-4z" fill="#47A248"/>
        <path d="M128 214.2c-15.6 0-35.8-9.8-35.8-68 0-48.4 26.9-111.8 35.8-131.3 8.9 19.5 35.8 82.9 35.8 131.3 0 58.2-20.2 68-35.8 68z" fill="#47A248"/>
        <path d="M132.8 163.6l-4.8-139a1354.3 1354.3 0 014.8 139z" fill="#47A248" opacity=".2"/>
      </svg>
    ), 
    top: '55%', left: '35%', delay: '2.1s' 
  },
  { 
    id: 5, 
    name: 'Canva', 
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8">
        <circle cx="128" cy="128" r="128" fill="#00C4CC"/>
        <path d="M152.4 102.7c-4.8-1.4-9.8-2.1-14.8-2.1-11.8 0-21.4 4.1-28.7 12.3-7.3 8.2-11 19.2-11 33.1s3.7 24.9 11 33.1c7.3 8.2 16.9 12.3 28.7 12.3 5 0 10-.7 14.8-2.1v10.3c-4.8 1.4-9.8 2.1-14.8 2.1-14.5 0-26.3-5-35.3-15.1s-13.5-23.5-13.5-40.6c0-17.1 4.5-30.5 13.5-40.6s20.8-15.1 35.3-15.1c5 0 10 .7 14.8 2.1v10.3z" fill="white"/>
      </svg>
    ), 
    top: '35%', left: '55%', delay: '0.8s' 
  },
  { 
    id: 6, 
    name: 'Illustrator', 
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8">
        <rect width="256" height="256" rx="40" fill="#330000"/>
        <path d="M84.2 186.2l-10.4-28.1H38.5l-10.4 28.1H0L53.7 45.4h22.9l53.7 140.8h-46.1zm-41-47h32.1L58.5 90.9l-15.3 48.3zM167.3 186.2V45.4h26.2v140.8h-26.2z" fill="#FF9A00"/>
      </svg>
    ), 
    top: '65%', left: '65%', delay: '1.7s' 
  },
  { 
    id: 7, 
    name: 'Python', 
    icon: (
      <svg viewBox="0 0 128 128" className="w-8 h-8">
        <path d="M64 0C32 0 32 14 32 14v10h34v4H22s-22 0-22 28c0 28 18 28 18 28h10v-14s0-18 18-18h32s18 0 18-18V14S96 0 64 0z" fill="#3776AB"/>
        <path d="M64 128c32 0 32-14 32-14v-10H62v-4h44s22 0 22-28c0-28-18-28-18-28h-10v14s0 18-18 18H50s-18 0-18 18v28s0 14 32 14z" fill="#FFD43B"/>
        <circle cx="48" cy="8" r="3" fill="white"/>
        <circle cx="80" cy="120" r="3" fill="white"/>
      </svg>
    ), 
    top: '25%', left: '80%', delay: '0.3s' 
  },
  { 
    id: 8, 
    name: 'Angular', 
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8">
        <path d="M128 0L24.8 36.8l15.8 136.5L128 256l87.4-82.7 15.8-136.5L128 0z" fill="#DD0031"/>
        <path d="M128 0v256l87.4-82.7 15.8-136.5L128 0z" fill="#C3002F"/>
        <path d="M128 31.7L67.7 167.3h22.6l11.6-28.9h52.3l11.6 28.9h22.6L128 31.7zm20.8 88.6h-41.6L128 66.8l20.8 53.5z" fill="white"/>
      </svg>
    ), 
    top: '10%', left: '65%', delay: '2.5s' 
  },
  { 
    id: 9, 
    name: 'HTML5', 
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8">
        <path d="M26.8 0h202.4l-18.4 205.9L128 233.1 45.2 205.9 26.8 0z" fill="#E34F26"/>
        <path d="M128 214.3l65.8-18.2L209.4 18H128v196.3z" fill="#EF652A"/>
        <path d="M128 103.1h35.8l-2.5 28.2-33.3 9V171l46.2-12.8 4.3-48.4H128v-31.4h78.3L208 61H128v42.1z" fill="#EBEBEB"/>
        <path d="M128 103.1v30.7l-33.3-9-2.3-21.7H128V103.1zM128 140.4l-46.2 12.8 3.1-34.8H53.5l-7.4 83.2 81.9 22.7V140.4z" fill="white"/>
      </svg>
    ), 
    top: '75%', left: '15%', delay: '1.9s' 
  },
  { 
    id: 10, 
    name: 'CSS3', 
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8">
        <path d="M26.8 0h202.4l-18.4 205.9L128 233.1 45.2 205.9 26.8 0z" fill="#1572B6"/>
        <path d="M128 214.3l65.8-18.2L209.4 18H128v196.3z" fill="#33A9DC"/>
        <path d="M128 103.1h35.8l-2.5 28.2-33.3 9V171l46.2-12.8 4.3-48.4H128v-31.4h78.3L208 61H128v42.1z" fill="#EBEBEB"/>
        <path d="M128 103.1v30.7l-33.3-9-2.3-21.7H128V103.1zM128 140.4l-46.2 12.8 3.1-34.8H53.5l-7.4 83.2 81.9 22.7V140.4z" fill="white"/>
      </svg>
    ), 
    top: '80%', left: '45%', delay: '0.9s' 
  },
  { 
    id: 11, 
    name: 'JavaScript', 
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8">
        <path d="M0 0h256v256H0z" fill="#F7DF1E"/>
        <path d="M121.7 186.2c0 24.3-13.6 37.1-35.1 37.1-20 0-32.3-9.5-38.3-21.5l25.3-14.7c3.1 5.8 7.5 9.8 13 9.8 8.1 0 11.8-3.9 11.8-11.8v-72.2h33.3v73.3zm105.7-1.1c0 26.7-18.4 38.3-43.2 38.3-22.3 0-38.6-11.1-46.3-26.4l26.4-15.3c3.6 6.9 8.9 11.7 19.1 11.7 10.3 0 16.4-4.2 16.4-11.1 0-7.8-6.1-10.8-21.7-17.5-22-9.5-36.7-15.6-36.7-39.2 0-21.4 15.6-35 38.1-35 20.6 0 32.3 8.3 39.5 22.3L218.4 128c-4.2-7.5-8.6-11.1-17-11.1-8.3 0-12.8 4.2-12.8 9.5 0 6.9 4.4 9.8 17.5 15.3 22.5 9.7 37.1 16.7 37.1 43.4z" fill="black"/>
      </svg>
    ), 
    top: '50%', left: '85%', delay: '1.4s' 
  },
  { 
    id: 12, 
    name: 'WordPress', 
    icon: (
      <svg viewBox="0 0 256 256" className="w-8 h-8">
        <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm0 244.1c-18.1 0-35.1-4.6-49.9-12.7l33.8-92.6 24.1 72.3c.3.9.6 1.8.9 2.7-2.8.8-5.8 1.3-8.8 1.3-1.4 0-2.8-.1-4.2-.3l-.3-.1zm-73.4-22.1c-18.1-18.3-29.2-43.5-29.2-71.3 0-11.4 1.9-22.2 5.3-32.3l48.1 131.1c-9.1-8.3-17.3-17.5-24.2-27.5zM128 11.9c18.1 0 35.1 4.6 49.9 12.7l-33.8 92.6-24.1-72.3c-.3-.9-.6-1.8-.9-2.7 2.8-.8 5.8-1.3 8.8-1.3 1.4 0 2.8.1 4.2.3l.3.1zm104.5 116.1c0 11.4-1.9 22.2-5.3 32.3l-48.1-131.1c9.1 8.3 17.3 17.5 24.2 27.5 18.1 18.3 29.2 43.5 29.2 71.3z" fill="#21759b"/>
        <path d="M168.1 128.1c0-13.4-4.8-22.6-8.9-31.1-5.5-8.2-10.6-15.1-10.6-23.3 0-9.6 7.2-18.5 17.5-18.5 1.1 0 2.1.1 3.1.3-12.8-10.4-29.2-16.6-47.1-16.6-21.2 0-40.1 8.7-53.8 22.7 1.4.1 2.7.1 3.8.1 10.3 0 26.2-1.2 26.2-1.2 5.1-.3 5.8 7.2.7 7.9 0 0-5.2.6-11 1l35 104.3 21-63.1-14.9-41.2c-5.1-.4-9.9-1-9.9-1-5.1-.3-4.5-7.9.7-7.9 0 0 16.3 1.2 26.2 1.2 10.3 0 26.2-1.2 26.2-1.2 5.1-.3 5.8 7.2.7 7.9 0 0-5.2.6-11 1l34.7 103.2 9.6-31.9c3.8-11.1 6.7-19.2 6.7-26.1z" fill="#fff"/>
      </svg>
    ), 
    top: '10%', left: '30%', delay: '2.0s' 
  },
];

export function Tools() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="tools" ref={sectionRef} className="relative z-10 py-16 px-6 max-w-7xl w-full flex flex-col items-center gap-16 overflow-hidden">
      <div className="flex flex-col items-center gap-4 text-center mb-12">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider">
          <Sparkles className="w-3 h-3 fill-primary" />
          TECH STACK
        </div>
        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white max-w-3xl leading-tight">
          Mastering The Modern <br />
          <span className="text-primary">Digital Ecosystem</span>
        </h2>
      </div>

      {/* Responsive Grid for Mobile, Absolute for Desktop */}
      <div className="relative w-full h-auto md:h-[700px]">
        {/* Mobile Layout: Grid */}
        <div className="grid grid-cols-3 sm:grid-cols-4 gap-6 md:hidden">
           {tools.map((tool, idx) => (
             <div 
               key={`mobile-${tool.id}`}
               className={cn(
                 "flex flex-col items-center gap-2 transition-all duration-700",
                 isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
               )}
               style={{ transitionDelay: `${idx * 100}ms` }}
             >
               <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl flex items-center justify-center">
                  <div className="w-8 h-8">{tool.icon}</div>
               </div>
               <span className="text-[8px] font-bold tracking-widest uppercase text-white/40">{tool.name}</span>
             </div>
           ))}
        </div>

        {/* Desktop Layout: Absolute Bubbles */}
        <div className="hidden md:block">
          {tools.map((tool, idx) => (
            <div
              key={tool.id}
              className={cn(
                "absolute transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer",
                isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0",
                hoveredId !== null && hoveredId !== tool.id ? "blur-sm opacity-20 scale-90" : "blur-0 opacity-100"
              )}
              style={{ 
                top: tool.top, 
                left: tool.left,
                transitionDelay: isVisible ? `${idx * 200}ms` : '0ms',
                zIndex: hoveredId === tool.id ? 20 : 10
              }}
              onMouseEnter={() => setHoveredId(tool.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className={cn(
                "animate-float transition-transform duration-300",
                hoveredId === tool.id && "scale-125"
              )} style={{ animationDelay: tool.delay }}>
                <div className="relative group">
                  <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl flex items-center justify-center transition-all duration-300 group-hover:bg-white/[0.07] group-hover:border-primary/50 group-hover:shadow-[0_0_40px_rgba(37,99,235,0.25)]">
                    {tool.icon}
                  </div>
                  
                  <div className={cn(
                    "absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-bold tracking-[0.2em] uppercase text-white/60 transition-all duration-300",
                    hoveredId === tool.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
                  )}>
                    {tool.name}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute inset-0 -z-10 opacity-[0.02] pointer-events-none" 
          style={{ 
            backgroundImage: `radial-gradient(circle at center, rgba(37,99,235,0.15) 0%, transparent 70%)`,
          }} 
        />
      </div>
    </section>
  );
}
