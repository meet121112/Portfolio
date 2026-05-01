'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Sparkles, ArrowRight, ExternalLink, Palette, Layout, Code2, AppWindow, Server, Cpu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function WorkPage() {
  const projects = [
    {
      id: 'specialty-01',
      title: 'BRAND IDENTITY & STRATEGIC CONTENT',
      icon: <Palette className="w-8 h-8 text-primary" />,
      tags: ['Branding', 'Content', 'Social'],
      description: 'A creative visual engine translating brand values into high-impact assets and conversion-driven content for websites and social marketing.'
    },
    {
      id: 'specialty-06',
      title: 'IT TECHNICIAN & SYSTEM OPERATIONS',
      icon: <Cpu className="w-8 h-8 text-primary" />,
      tags: ['Windows Server', 'Azure AD', 'Security', 'Automation'],
      description: 'Enterprise IT infrastructure management specializing in Windows Server, cloud identity (Entra ID), network security, and automated backup strategies.'
    },
    {
      id: 'specialty-02',
      title: 'UX/UI INTERFACE STRATEGIST',
      icon: <Layout className="w-8 h-8 text-primary" />,
      tags: ['UI Design', 'Figma', 'UX'],
      description: 'A user-centric framework that transforms complex requirements into intuitive wireframes and interactive prototypes, prioritizing friction-less navigation.'
    },
    {
      id: 'specialty-03',
      title: 'FULL-STACK WEB DEVELOPER',
      icon: <Code2 className="w-8 h-8 text-primary" />,
      tags: ['Next.js', 'React', 'TS'],
      description: 'An end-to-end digital architect specializing in responsive frontend frameworks and robust backend logic to create scalable, SEO-friendly experiences.'
    },
    {
      id: 'specialty-04',
      title: 'NATIVE WINDOWS ARCHITECT',
      icon: <AppWindow className="w-8 h-8 text-primary" />,
      tags: ['Python', 'Automation', 'System'],
      description: 'A high-performance desktop environment built to deliver seamless OS integration, offline functionality, and hardware-accelerated UI.'
    },
    {
      id: 'specialty-05',
      title: 'CLOUD INFRASTRUCTURE ARCHITECT',
      icon: <Server className="w-8 h-8 text-primary" />,
      tags: ['AWS EC2', 'Nginx', 'SSL'],
      description: 'A secure orchestration framework for high-performance hosting, leveraging AWS, Nginx reverse proxies, and automated SSL for production-grade stability.'
    }
  ];

  return (
    <main className="flex flex-col items-center min-h-screen bg-[#0a0a0a] text-white selection:bg-primary/30 scroll-smooth">
      <Navbar />
      
      <section className="pt-32 sm:pt-40 md:pt-48 pb-12 px-6 max-w-7xl w-full text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8 slide-up">
          <Sparkles className="w-3 h-3 fill-primary" />
          FEATURED WORK
        </div>
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tight mb-8 slide-up leading-[1.1]">
          Selected <span className="text-primary">Specialties</span>.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl mx-auto leading-relaxed slide-up" style={{ animationDelay: '0.1s' }}>
          A collection of strategic frameworks and technical innovations designed to drive measurable growth across the digital landscape.
        </p>
      </section>

      <section className="py-12 px-6 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {projects.map((project, i) => (
          <Link 
            key={project.id} 
            href={`/work/${project.id}`}
            className="group relative p-8 sm:p-12 rounded-[40px] md:rounded-[56px] border border-white/10 bg-white/[0.02] overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-primary/50 slide-up h-full"
            style={{ animationDelay: `${0.1 * (i + 1)}s` }}
          >
            <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none" 
              style={{ backgroundImage: `radial-gradient(circle at top right, rgba(37,99,235,0.4), transparent 70%)` }} 
            />
            
            <div className="space-y-10">
              <div className="flex justify-between items-start gap-4">
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 shrink-0">
                  {project.icon}
                </div>
                <div className="flex flex-wrap gap-2 justify-end">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-white/5 text-[9px] font-bold border-white/10 uppercase tracking-widest px-3 py-1 text-white whitespace-nowrap">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-tight text-white group-hover:text-primary transition-colors uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-white/50 text-base sm:text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="pt-10 mt-10 border-t border-white/5 flex justify-between items-center">
              <span className="text-white/40 group-hover:text-primary transition-all gap-3 text-xs font-bold uppercase tracking-[0.2em] flex items-center">
                Explore Framework <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </span>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <ExternalLink className="w-5 h-5 text-primary" />
              </div>
            </div>
          </Link>
        ))}
      </section>

      <Footer />
    </main>
  );
}
