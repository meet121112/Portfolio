'use client';

import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Sparkles, Briefcase, Award, ArrowRight, BookOpen, GraduationCap, Code2, Search, Lightbulb, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export default function AboutPage() {
  const experiences = [
    {
      company: 'Technology Solution',
      role: 'Marketing & Developer',
      period: '1 Year & Continue',
      description: 'Encompassing Web Design, Graphics, and Strategic Marketing Development in a high-growth environment.'
    },
    {
      company: 'Toshal Infotech',
      role: 'Web Designer',
      period: '1 Year',
      description: 'Junior role advancing UI/UX expertise and building high-performance responsive interfaces for various digital platforms.'
    },
    {
      company: 'Wapzzo',
      role: 'Web Designer',
      period: '6 Months',
      description: 'Trainee role focused on foundational design principles and initial technical implementations while mastering industry standards.'
    }
  ];

  const educationMilestones = [
    {
      id: 1,
      period: '2016 — 2018',
      title: 'Higher Secondary Science',
      institution: 'AB Higher Secondary School',
      description: 'Rigorous academic training in Physics, Chemistry, and Mathematics, forming the analytical core of my technical logic and problem-solving framework.',
      icon: <BookOpen className="w-5 h-5" />,
      stats: [
        { label: '85th', value: 'Percentile' },
        { label: 'Science', value: 'Core Stream' }
      ]
    },
    {
      id: 2,
      period: '2018 — 2022',
      title: 'Information Technology Engineering',
      institution: 'SVIT, Gujarat University',
      description: 'A comprehensive engineering degree focused on software development, database management, and complex algorithms that serve as the backbone of my full-stack expertise.',
      icon: <GraduationCap className="w-5 h-5" />,
      stats: [
        { label: '7.5', value: 'CGPA' },
        { label: 'B.E.', value: 'Degree' }
      ]
    },
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
      <section className="pt-40 pb-20 px-6 max-w-5xl w-full">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider mb-8 slide-up">
          <Sparkles className="w-3 h-3 fill-primary" />
          MY STORY
        </div>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-8 slide-up">
          Blending <span className="text-primary italic">Code</span> with <span className="text-primary">Strategy</span>.
        </h1>
        <p className="text-lg md:text-xl text-white/60 max-w-3xl leading-relaxed slide-up text-left" style={{ animationDelay: '0.1s' }}>
          I am Meetkumar Patel, a multi-disciplinary professional specializing in the intersection of technology and design. My academic journey began with a Bachelor’s in Information Technology in Gujarat, India, followed by advanced post-graduate studies in Web Development at Conestoga College in Waterloo, Canada. I don't just focus on the code; I look at the complete digital experience—ensuring it is technically sound, visually engaging, and strategically marketed.
        </p>
      </section>

      {/* Experience Section */}
      <section className="py-20 px-6 max-w-5xl w-full">
        <div className="flex items-center gap-4 mb-12">
          <Briefcase className="text-primary w-6 h-6" />
          <h2 className="text-3xl font-bold uppercase tracking-tight">Professional Journey</h2>
        </div>
        <div className="space-y-12">
          {experiences.map((exp, i) => (
            <div key={i} className="relative pl-8 border-l border-white/10 group">
              <div className="absolute left-[-5px] top-2 w-2 h-2 rounded-full bg-primary transition-transform group-hover:scale-150" />
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">{exp.role}</h3>
                <span className="text-sm font-mono text-white/40 uppercase">{exp.period}</span>
              </div>
              <h4 className="text-white/70 font-medium mb-4">{exp.company}</h4>
              <p className="text-white/50 leading-relaxed max-w-2xl">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Methodology Section */}
      <section className="py-24 px-6 max-w-5xl w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {methodology.map((item, idx) => (
            <div key={idx} className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all group">
              <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{item.label}</h3>
              <p className="text-sm text-white/40 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* RE-IMAGINED EDUCATION SECTION: Structural Timeline */}
      <section className="py-32 px-6 max-w-5xl w-full mx-auto">
        <div className="mb-24 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/20 bg-primary/5 text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
            <GraduationCap className="w-3 h-3" />
            ACADEMIC FOUNDATION
          </div>
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white leading-none">
            Built For <span className="text-primary italic">Evolution.</span>
          </h2>
        </div>

        <div className="space-y-32 relative">
          {/* Vertical Track Line */}
          <div className="absolute left-6 md:left-[22px] top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-white/10 to-transparent hidden md:block" />

          {educationMilestones.map((milestone) => (
            <div key={milestone.id} className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-16 relative">
              {/* Year & Icon (Left Rail) */}
              <div className="md:col-span-1">
                <div className="md:sticky md:top-40 flex md:flex-col items-center md:items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-primary relative z-10 shrink-0 shadow-2xl backdrop-blur-sm">
                    {milestone.icon}
                  </div>
                  <div className="space-y-1">
                    <span className="text-primary font-mono text-xs font-bold tracking-widest uppercase block">
                      {milestone.period}
                    </span>
                    <span className="text-[10px] text-white/30 font-bold uppercase tracking-widest block md:hidden">
                      {milestone.institution}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content (Right Side) */}
              <div className="md:col-span-3 space-y-6">
                <div className="space-y-2">
                  <h3 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight text-white group-hover:text-primary transition-colors">
                    {milestone.title}
                  </h3>
                  <p className="text-white/40 text-lg font-medium hidden md:block">
                    {milestone.institution}
                  </p>
                </div>
                
                <p className="text-white/50 text-lg leading-relaxed max-w-2xl">
                  {milestone.description}
                </p>

                {/* Stats Row */}
                <div className="flex flex-wrap gap-4 pt-4">
                  {milestone.stats.map((stat, sIdx) => (
                    <div key={sIdx} className="px-5 py-3 rounded-2xl bg-white/[0.02] border border-white/5 flex flex-col items-start gap-0.5 min-w-[120px]">
                      <span className="text-primary font-bold text-lg leading-none">{stat.label}</span>
                      <span className="text-[10px] text-white/30 uppercase tracking-[0.2em] font-bold">{stat.value}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <Button variant="ghost" className="p-0 text-white/40 hover:text-primary hover:bg-transparent flex gap-3 group/btn">
                    <span className="font-bold uppercase tracking-widest text-[10px]">Curriculum Detail</span>
                    <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}
