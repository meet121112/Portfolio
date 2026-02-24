
'use client';

import React from 'react';
import { Navbar } from '@/components/navbar';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Approach } from '@/components/approach';
import { Tools } from '@/components/tools';
import { Work } from '@/components/work';
import { Footer } from '@/components/footer';
import { Education } from '@/components/education';
// import { LiveProjects } from '@/components/live-projects';

export default function Home() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-[#0a0a0a] text-white selection:bg-primary/30 scroll-smooth">
      {/* Background Decorative Elements */}
      <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-accent/5 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <Navbar />
      
      <Hero />
      
      <About />

      <Education />

      <Tools />

      <Approach />

      {/* <LiveProjects /> */}

      <Work />

      <Footer />
    </main>
  );
}
