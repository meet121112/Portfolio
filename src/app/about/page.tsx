'use client';

import React, { useEffect, useRef, useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Sparkles, Briefcase, GraduationCap, Code2, ArrowRight, Search, Lightbulb, Rocket, PlayCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function AboutPage() {
  const [isJourneyVisible, setIsJourneyVisible] = useState(false);
  const journeyRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsJourneyVisible(true);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );

    if (journeyRef.current) {
      observer.observe(journeyRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      company: 'Technology Solution',
      role: 'Marketing & Developer',
      period: '1 Year & Continue',
      description: 'Encompassing Web Design, Graphics, Strategic Marketing Development, and enterprise IT infrastructure support including Windows Server, Entra ID, and SharePoint management.'
    },
    {
      company: 'Toshal Infotech',
      role: 'Web Designer',
      period: '11 MONTHS',
      description: 'Junior role advancing UI/UX expertise and building high-performance responsive interfaces for various digital platforms.'
    },
    {
      company: 'Wapzzo',
      role: 'Web Designer',
      period: '1 YEAR',
      description: 'Trainee role focused on foundational design principles and initial technical implementations while mastering industry standards.'
    }
  ];

  const educationMilestones = [
    {
      id: 3,
      period: '2023 — 2024',
      title: 'Advanced Web Development',
      institution: 'Conestoga College, Waterloo',
      description: 'Post-graduate specialization in Canada’s tech hub, dived deep into modern full-stack ecosystems, cloud-native architecture, and strategic digital orchestration.',
      icon: <Code2 className="w-5 h-5" />,
      stats: [
        { label: '3.4', value: 'GPA' },
        { label: 'Post-Grad', value: 'Specialization' }
      ]
    },
    {
      id: 2,
      period: '2016 — 2020',
      title: 'Information Technology Engineering',
      institution: 'SVIT, Gujarat University',
      description: 'A comprehensive engineering degree focused on software development, database management, and complex algorithms that serve as the backbone of my full-stack expertise.',
      icon: <GraduationCap className="w-5 h-5" />,
      stats: [
        { label: '7.5', value: 'CGPA' },
        { label: 'B.E.', value: 'Degree' }
      ]
    }
  ];

  const methodology = [
    { label: 'Discovery', icon: <Search className="w-5 h-5" />, desc: 'Deep diving into business goals and technical constraints.' },
    { label: 'Strategy', icon: <Lightbulb className="w-5 h-5" />, desc: 'Architecting a roadmap that bridges marketing and tech.' },
    { label: 'Execution', icon: <Code2 className="w-5 h-5" />, desc: 'Building high-performance assets with precision code.' },
    { label: 'Optimization', icon: <Rocket className="w-5 h-5" />, desc: 'Iterating based on real-world data and user feedback.' }
  ];

  return (
    <main className="flex flex-col items-center min-h-screen bg-[#0a0a0a] text-white selection:bg-primary/30 scroll-smooth">
      <Navbar />
      
      {/* Hero Header */}
      <section className="pt-32 sm:pt-40 md:pt-48 pb-12 px-6 max-w-7xl w-full text-center md:text-left">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8 slide-up">
          <Sparkles className="w-3 h-3 fill-primary" />
          MY STORY
        </div>
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight mb-8 slide-up leading-[1.1]">
          Scaling <span className="text-primary italic">Creativity</span> with <span className="text-primary">Technical Ops</span>.
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-white/60 max-w-4xl leading-relaxed slide-up mx-auto md:mx-0" style={{ animationDelay: '0.1s' }}>
          I am Meetkumar Patel, a multi-disciplinary professional specializing in strategic digital orchestration and IT operations. My expertise spans high-performance visual asset design and end-to-end social media management, paired with enterprise-level technical infrastructure support. As a seasoned IT technician, I manage Windows Server environments, Microsoft Entra ID (Azure AD), SharePoint architecture, and terminal security. Beyond digital strategy, I handle hardware procurement, network infrastructure including VLAN/VPN management, 3-2-1 backup strategies, and VoIP maintenance to ensure maximum uptime for critical business environments.
        </p>
      </section>

      {/* Experience Section */}
      <section ref={journeyRef} className="py-16 md:py-24 px-6 max-w-5xl w-full">
        <div className={cn(
          "flex items-center gap-4 mb-12 transition-all duration-1000",
          isJourneyVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        )}>
          <Briefcase className="text-primary w-6 h-6" />
          <h2 className="text-2xl sm:text-3xl font-bold uppercase tracking-[0.1em]">Professional Journey</h2>
        </div>
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div 
              key={i} 
              className={cn(
                "relative pl-8 sm:pl-10 border-l border-white/10 group transition-all duration-1000",
                isJourneyVisible 
                  ? "opacity-100 translate-x-0" 
                  : "opacity-0 -translate-x-12"
              )}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-primary transition-transform group-hover:scale-150" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest">{exp.period}</span>
              </div>
              <h4 className="text-white/70 font-medium mb-3 text-lg">{exp.company}</h4>
              <p className="text-white/50 leading-relaxed max-w-3xl text-base">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Motion Narrative Showcase Section */}
      <section className="py-16 md:py-24 px-6 w-full flex flex-col items-center bg-zinc-900/20 border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl w-full flex flex-col items-center">
          <div className="flex flex-col items-center text-center mb-12 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
              <PlayCircle className="w-4 h-4" />
              Motion Narrative
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-bold tracking-tight">Visual <span className="text-primary italic">Storytelling</span></h2>
            <p className="text-white/40 max-w-xl text-sm sm:text-lg">A cinematic exploration of strategic digital orchestration and motion design.</p>
          </div>
          
          <div className="w-full max-w-6xl">
            <div className="group relative rounded-[32px] md:rounded-[56px] overflow-hidden border border-white/10 bg-black aspect-video shadow-2xl transition-all duration-700 hover:border-primary/50">
               <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover opacity-100 transition-opacity duration-700">
                 <source src="/Main.mp4" type="video/mp4" />
               </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-10 right-6 sm:left-10 space-y-2 sm:space-y-4 pointer-events-none">
                 <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full bg-primary/20 border border-primary/30 text-[9px] sm:text-[10px] font-bold text-primary uppercase tracking-widest backdrop-blur-md">
                    <PlayCircle className="w-3 h-3" />
                    Creative Orchestration
                 </div>
                 <p className="text-xs sm:text-sm text-white/50 leading-relaxed font-medium hidden sm:block">
                    Showcasing the synergy between high-performance code and strategic visual storytelling.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
