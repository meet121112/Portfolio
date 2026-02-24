'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function About() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const aboutText = "I am Meetkumar Patel, a multi-disciplinary professional specializing in the intersection of technology and design. My academic journey began with a Bachelor’s in Information Technology in Gujarat, India, followed by advanced post-graduate studies in Web Development at Conestoga College in Waterloo, Canada. With hands-on experience across two continents, I’ve developed a versatile skillset that spans Web Development, Graphic Design, and Digital Marketing. I don't just focus on the code; I look at the complete digital experience-ensuring it is technically sound, visually engaging, and strategically marketed. I am a firm believer in continuous growth and make it a priority to learn something new every day, staying adaptable in an industry that is constantly evolving. My goal is to build high-performance digital solutions that help brands scale and succeed.";
  const aboutWords = aboutText.split(' ');

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { 
        threshold: 0.2,
        rootMargin: "0px 0px -100px 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" ref={sectionRef} className="relative z-10 py-16 px-6 max-w-6xl w-full flex flex-col items-start gap-12">
      {/* Decorative Pill */}
      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider">
        <Sparkles className="w-3 h-3 fill-primary" />
        ABOUT MEET
      </div>

      {/* Animated Text Paragraph */}
      <div className="text-left w-full">
        <h2 className="text-lg md:text-xl font-medium tracking-tight leading-[1.8] flex flex-wrap justify-start gap-x-2 gap-y-1 text-white">
          {aboutWords.map((word, i) => (
            <span 
              key={i} 
              className={cn(
                "transition-all duration-700 ease-out translate-y-4 opacity-0",
                isVisible && "opacity-100 translate-y-0"
              )}
              style={{ 
                transitionDelay: `${isVisible ? (0.05 * i) : 0}s`,
                color: isVisible ? 'white' : 'rgba(255, 255, 255, 0.1)'
              }}
            >
              {word}
            </span>
          ))}
        </h2>
      </div>

      {/* Action Button - Linked to Journey */}
      <div className="pt-4">
        <Link href="/about">
          <Button className="h-14 px-10 rounded-2xl text-md font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-[0_0_40px_rgba(37,99,235,0.25)] transition-all flex gap-3 group">
            Explore My Journey
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </Link>
      </div>
    </section>
  );
}
