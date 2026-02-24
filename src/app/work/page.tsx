'use client';

import React from 'react';
import Link from 'next/link';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Sparkles, ArrowRight, ExternalLink, Palette, Layout, Code2, AppWindow, Server } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export default function WorkPage() {
  const projects = [
    {
      id: 'specialty-01',
      title: 'BRAND IDENTITY DESIGNER',
      icon: <Palette className="w-8 h-8 text-primary" />,
      tags: ['Branding', 'Logo Design', 'Social Media'],
      description: 'A creative visual engine that translates brand values into high-impact assets, focusing on scalable vector systems, color theory, and cohesive typography.'
    },
    {
      id: 'specialty-02',
      title: 'UX/UI INTERFACE STRATEGIST',
      icon: <Layout className="w-8 h-8 text-primary" />,
      tags: ['UI Design', 'UX Research', 'Figma'],
      description: 'A user-centric framework that transforms complex requirements into intuitive wireframes and interactive prototypes, prioritizing friction-less navigation.'
    },
    {
      id: 'specialty-03',
      title: 'FULL-STACK WEB DEVELOPER',
      icon: <Code2 className="w-8 h-8 text-primary" />,
      tags: ['Next.js', 'React', 'TypeScript'],
      description: 'An end-to-end digital architect specializing in responsive frontend frameworks and robust backend logic to create scalable, SEO-friendly user experiences.'
    },
    {
      id: 'specialty-04',
      title: 'NATIVE WINDOWS ARCHITECT',
      icon: <AppWindow className="w-8 h-8 text-primary" />,
      tags: ['.NET', 'C#', 'Automation'],
      description: 'A high-performance desktop environment built using C# and .NET to deliver seamless OS integration, offline functionality, and hardware-accelerated UI.'
    },
    {
      id: 'specialty-05',
      title: 'CLOUD INFRASTRUCTURE ARCHITECT',
      icon: <Server className="w-8 h-8 text-primary" />,
      tags: ['AWS EC2', 'Nginx', 'Win-ACME'],
      description: 'A secure orchestration framework for high-performance hosting, leveraging AWS EC2, Nginx reverse proxies, and automated SSL management for production-grade stability.'
    }
  ];

  return (
    <main className="flex flex-col items-center min-h-screen bg-[#0a0a0a] text-white selection:bg-primary/30 scroll-smooth">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-16 px-6 max-w-7xl w-full text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider mb-8 slide-up">
          <Sparkles className="w-3 h-3 fill-primary" />
          FEATURED WORK
        </div>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 slide-up">
          Selected <span className="text-primary">Specialties</span>.
        </h1>
        <p className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed slide-up" style={{ animationDelay: '0.1s' }}>
          A collection of strategic frameworks and technical innovations designed to drive measurable growth across the digital landscape.
        </p>
      </section>

      {/* Projects Grid */}
      <section className="py-16 px-6 max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
        {projects.map((project, i) => (
          <Link 
            key={project.id} 
            href={`/work/${project.id}`}
            className="group relative p-10 rounded-[40px] border border-white/10 bg-white/[0.02] overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-primary/50 slide-up"
            style={{ animationDelay: `${0.1 * (i + 1)}s` }}
          >
            {/* Background Decoration */}
            <div className="absolute inset-0 opacity-[0.02] group-hover:opacity-[0.05] transition-opacity pointer-events-none" 
              style={{ 
                backgroundImage: `radial-gradient(circle at top right, rgba(37,99,235,0.4), transparent 70%)`,
              }} 
            />
            
            <div className="space-y-8">
              <div className="flex justify-between items-start">
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
                  {project.icon}
                </div>
                <div className="flex flex-wrap gap-2 justify-end">
                  {project.tags.map(tag => (
                    <Badge key={tag} variant="secondary" className="bg-white/5 text-[10px] font-bold border-white/10 uppercase tracking-widest px-3 py-1 text-white">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
              
              <div className="space-y-4">
                <h3 className="text-3xl md:text-4xl font-bold leading-tight text-white group-hover:text-primary transition-colors uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-white/50 text-lg leading-relaxed">
                  {project.description}
                </p>
              </div>
            </div>

            <div className="pt-10 mt-10 border-t border-white/5 flex justify-between items-center">
              <span className="text-white/40 group-hover:text-white transition-all gap-3 text-sm font-bold uppercase tracking-[0.2em] group-hover:text-primary flex items-center">
                Explore Framework <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </span>
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                <ExternalLink className="w-5 h-5 text-primary" />
              </div>
            </div>

            {/* Hover Glow */}
            <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-primary/5 rounded-full blur-[80px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </Link>
        ))}
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 max-w-4xl w-full text-center">
        <div className="p-16 rounded-[60px] bg-gradient-to-br from-primary/10 via-transparent to-accent/5 border border-white/10 relative overflow-hidden">
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold mb-6">Have a vision?</h2>
            <p className="text-white/60 mb-10 text-xl max-w-lg mx-auto">Let's build something technically superior and strategically sound.</p>
            <Link href="/contact">
              <Button size="lg" className="h-16 px-12 rounded-3xl bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-2xl transition-all group">
                Start a Conversation
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>
          {/* Decorative blur */}
          <div className="absolute top-[-50%] left-[-20%] w-[100%] h-[100%] bg-primary/20 rounded-full blur-[120px] -z-10 animate-pulse" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
