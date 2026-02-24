'use client';

import React, { use, useState } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { 
  ArrowLeft, 
  Sparkles, 
  ExternalLink, 
  Instagram,
  Palette,
  Type,
  Layers,
  Component,
  Framer,
  Layout,
  Code2,
  AppWindow,
  Cpu,
  Monitor,
  Globe,
  Share2,
  Server,
  ShieldCheck
} from 'lucide-react';
import LinkComponent from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

// Tech Icon components (SVG)
const TechIcons = {
  React: (
    <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full fill-[#61DAFB]">
      <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
      <g stroke="#61DAFB" strokeWidth="1" fill="none">
        <ellipse rx="11" ry="4.2"/>
        <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
        <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
      </g>
    </svg>
  ),
  Nextjs: (
    <svg viewBox="0 0 128 128" className="w-full h-full fill-white">
      <path d="M64 0C28.7 0 0 28.7 0 64s28.7 64 64 64c11.2 0 21.7-2.9 30.8-7.9L48.4 55.6v34.4h-8.8V38h8.8l45.4 61.1c5.2-9.4 8.1-20.1 8.1-31.1C101.9 28.7 73.2 0 64 0zM83.2 38v27.2L73.6 52V38h9.6z" />
    </svg>
  ),
  Nodejs: (
    <svg viewBox="0 0 256 256" className="w-full h-full">
      <path d="M128 0L31.1 55.9v111.8L128 223.7l96.9-55.9V55.9L128 0zm79.1 160.2l-79.1 45.7-79.1-45.7V68.9l79.1-45.7 79.1 45.7v91.3z" fill="#339933"/>
      <path d="M128 45.7l-63.3 36.5v73.1l63.3 36.5 63.3-36.5v-73.1L128 45.7z" fill="#339933" opacity=".2"/>
    </svg>
  ),
  MongoDB: (
    <svg viewBox="0 0 256 256" className="w-full h-full">
      <path d="M185.3 128c0 31.6-25.7 57.3-57.3 57.3s-57.3-25.7-57.3-57.3 25.7-57.3 57.3-57.3 57.3 25.7 57.3 57.3z" fill="#47A248" opacity=".2"/>
      <path d="M136.2 256a8.7 8.7 0 01-1.7-.2c-3.7-.8-24.3-5.2-40.4-23.4-14.7-16.5-22.3-38.3-22.3-64.7 0-35.8 14-87.1 52.6-149.6a4.8 4.8 0 018.4 0c38.6 62.5 52.6 113.8 52.6 149.6 0 26.4-7.6 48.2-22.3 64.7-16.1 18.2-36.7 22.6-40.4 23.4l-1.7.2h-4.8zM128 14.6c-31.4 53.6-43.1 98.7-43.1 131.6 0 21.6 5.8 39.5 17.1 52.9 8.9 10.5 19.8 15.6 28 17.7 8.2-2.1 19.1-7.2 28-17.7 11.3-13.4 17.1-31.3 17.1-52.9 0-32.9-11.7-78-43.1-131.6h-4z" fill="#47A248"/>
    </svg>
  ),
  Canva: (
    <svg viewBox="0 0 256 256" className="w-full h-full">
      <circle cx="128" cy="128" r="128" fill="#00C4CC"/>
      <path d="M152.4 102.7c-4.8-1.4-9.8-2.1-14.8-2.1-11.8 0-21.4 4.1-28.7 12.3-7.3 8.2-11 19.2-11 33.1s3.7 24.9 11 33.1c7.3 8.2 16.9 12.3 28.7 12.3 5 0 10-.7 14.8-2.1v10.3z" fill="white"/>
    </svg>
  ),
  Illustrator: (
    <svg viewBox="0 0 256 256" className="w-full h-full">
      <rect width="256" height="256" rx="40" fill="#330000"/>
      <path d="M84.2 186.2l-10.4-28.1H38.5l-10.4 28.1H0L53.7 45.4h22.9l53.7 140.8h-46.1zm-41-47h32.1L58.5 90.9l-15.3 48.3zM167.3 186.2V45.4h26.2v140.8h-26.2z" fill="#FF9A00"/>
    </svg>
  ),
  Figma: (
    <svg viewBox="0 0 128 192" className="w-full h-full">
      <path d="M32 0h32v64H32a32 32 0 1 1 0-64z" fill="#F24E1E"/>
      <path d="M96 0h32v64H96a32 32 0 1 1 0-64z" fill="#FF7262"/>
      <path d="M32 64h32v64H32a32 32 0 1 1 0-64z" fill="#A259FF"/>
      <path d="M64 64h32v64H64V64z" fill="#1ABCFE"/>
      <path d="M32 128h32v32a32 32 0 1 1-32-32z" fill="#0ACF83"/>
    </svg>
  ),
  DotNet: (
    <svg viewBox="0 0 256 256" className="w-full h-full">
      <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm64 128h-32v32h32v-32z" fill="#512BD4"/>
    </svg>
  ),
  WordPress: (
    <svg viewBox="0 0 256 256" className="w-full h-full">
      <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm0 244.1c-18.1 0-35.1-4.6-49.9-12.7l33.8-92.6 24.1 72.3c.3.9.6 1.8.9 2.7-2.8.8-5.8 1.3-8.8 1.3-1.4 0-2.8-.1-4.2-.3l-.3-.1zm-73.4-22.1c-18.1-18.3-29.2-43.5-29.2-71.3 0-11.4 1.9-22.2 5.3-32.3l48.1 131.1c-9.1-8.3-17.3-17.5-24.2-27.5zM128 11.9c18.1 0 35.1 4.6 49.9 12.7l-33.8 92.6-24.1-72.3c-.3-.9-.6-1.8-.9-2.7 2.8-.8 5.8-1.3 8.8-1.3 1.4 0-2.8.1 4.2.3l.3.1zm104.5 116.1c0 11.4-1.9 22.2-5.3 32.3l-48.1-131.1c9.1 8.3 17.3 17.5 24.2 27.5 18.1 18.3 29.2 43.5 29.2 71.3z" fill="#21759b"/>
      <path d="M168.1 128.1c0-13.4-4.8-22.6-8.9-31.1-5.5-8.2-10.6-15.1-10.6-23.3 0-9.6 7.2-18.5 17.5-18.5 1.1 0 2.1.1 3.1.3-12.8-10.4-29.2-16.6-47.1-16.6-21.2 0-40.1 8.7-53.8 22.7 1.4.1 2.7.1 3.8.1 10.3 0 26.2-1.2 26.2-1.2 5.1-.3 5.8 7.2.7 7.9 0 0-5.2.6-11 1l35 104.3 21-63.1-14.9-41.2c-5.1-.4-9.9-1-9.9-1-5.1-.3-4.5-7.9.7-7.9 0 0 16.3 1.2 26.2 1.2 10.3 0 26.2-1.2 26.2-1.2 5.1-.3 5.8 7.2.7 7.9 0 0-5.2.6-11 1l34.7 103.2 9.6-31.9c3.8-11.1 6.7-19.2 6.7-26.1z" fill="#fff"/>
    </svg>
  )
};

const projectDetails: Record<string, any> = {
  'specialty-01': {
    title: 'Brand Identity & Social Pulse',
    category: 'Specialty',
    icon: <Palette className="w-12 h-12 text-primary" />,
    description: 'Developing high-impact visual systems and orchestrating strategic social media growth for global brands.',
    challenge: 'Businesses often lack visual consistency and a cohesive social strategy, resulting in fragmented brand perception across digital touchpoints.',
    solution: 'A dual-track framework that builds robust visual foundations (Logos) while maintaining high-engagement social channels.',
    tags: ['Brand Strategy', 'Visual Design', 'Social Media Management', 'Logo Design', 'Typography'],
    techStack: [
      { name: 'Illustrator', icon: TechIcons.Illustrator },
      { name: 'Canva', icon: TechIcons.Canva },
      { name: 'Figma', icon: TechIcons.Figma }
    ],
    metrics: [
      { label: 'Brand Consistency', value: '98%' },
      { label: 'Social Engagement', value: '+150%' },
      { label: 'Asset Recognition', value: 'High' }
    ],
    visualIdentity: [
      { name: 'ECC Education Group', handle: 'eccedugroup.com', url: 'https://eccedugroup.com', logo: 'https://eccedugroup.com/logo.png' },
      { name: 'RJ Global Hiring', handle: 'rjglobalhiring.ca', url: 'https://rjglobalhiring.ca', logo: 'https://rjglobalhiring.ca/logo.png' },
      { name: 'Royal Kitchen Countertop', handle: 'royalkitchencountertop.ca', url: 'https://royalkitchencountertop.ca', logo: 'https://royalkitchencountertop.ca/logo.png' },
      { name: 'TNASS', handle: 'tnass.ca', url: 'https://tnass.ca', logo: 'https://tnass.ca/logo.png' },
      { name: 'Technology Solution', handle: 'technologysolution.ca', url: 'https://technologysolution.ca', logo: 'https://technologysolution.ca/logo.png' }
    ],
    socialManagement: [
      { name: 'Technology Solution', handle: '@technologysolution.ca', url: 'https://instagram.com/technologysolution.ca' },
      { name: 'ECC Education Group', handle: '@eccedugroup', url: 'https://instagram.com/eccedugroup' }
    ],
    features: [
      { title: 'Logo Design', icon: <Palette className="w-6 h-6" />, desc: 'Memorable, scalable brand marks.' },
      { title: 'Typography', icon: <Type className="w-6 h-6" />, desc: 'Custom font systems for readability.' },
      { title: 'Asset Systems', icon: <Layers className="w-6 h-6" />, desc: 'Layered components for all media.' },
      { title: 'Social Strategy', icon: <Share2 className="w-6 h-6" />, desc: 'Engagement-focused content planning.' }
    ]
  },
  'specialty-02': {
    title: 'UX/UI Interface Strategy',
    category: 'Specialty',
    icon: <Layout className="w-12 h-12 text-primary" />,
    description: 'Architecting user journeys that are both psychologically intuitive and strategically aligned with business goals.',
    challenge: 'Complex technical requirements often lead to cluttered interfaces that confuse users and decrease conversion rates.',
    solution: 'Friction-less design patterns based on user behavior data and cognitive psychology.',
    tags: ['UI Design', 'UX Research', 'Prototyping', 'User Psychology'],
    techStack: [
      { name: 'Figma', icon: TechIcons.Figma },
      { name: 'React', icon: TechIcons.React }
    ],
    metrics: [
      { label: 'User Friction', value: '-45%' },
      { label: 'Task Success', value: '92%' },
      { label: 'Design Velocity', value: 'High' }
    ],
    designProjects: [
      { name: 'Career Compass', handle: 'Figma Design', url: 'https://www.figma.com/design/IAFPf5jW6EpRclaHdFCX77/Career-Compass?node-id=0-1&t=Dw5ZBybyqEGACHIi-1' }
    ],
    features: [
      { title: 'Wireframing', icon: <Layout className="w-6 h-6" />, desc: 'Low-fidelity structural blueprints.' },
      { title: 'Prototyping', icon: <Framer className="w-6 h-6" />, desc: 'High-fidelity interactive simulations.' },
      { title: 'User Research', icon: <Cpu className="w-6 h-6" />, desc: 'Data-driven behavioral analysis.' }
    ]
  },
  'specialty-03': {
    title: 'Full-Stack Web Development',
    category: 'Specialty',
    icon: <Code2 className="w-12 h-12 text-primary" />,
    description: 'Building high-performance, scalable web applications that serve as the technical backbone of marketing success.',
    challenge: 'Modern web environments require a balance of speed, SEO optimization, and rich interactivity.',
    solution: 'Next-generation tech stacks like Next.js and React, integrated with robust backend services.',
    tags: ['Next.js', 'React', 'TypeScript', 'WordPress', 'Cloud Architecture'],
    techStack: [
      { name: 'Next.js', icon: TechIcons.Nextjs },
      { name: 'React', icon: TechIcons.React },
      { name: 'WordPress', icon: TechIcons.WordPress },
      { name: 'Node.js', icon: TechIcons.Nodejs },
      { name: 'MongoDB', icon: TechIcons.MongoDB }
    ],
    metrics: [
      { label: 'Page Speed', value: 'Sub-1s' },
      { label: 'SEO Score', value: '95+' },
      { label: 'Uptime', value: '99.9%' }
    ],
    webDevelopment: [
      { name: 'Technology Solution', handle: 'technologysolution.ca', url: 'https://technologysolution.ca' },
      { name: 'RJ Global Hiring', handle: 'rjglobalhiring.ca', url: 'https://rjglobalhiring.ca' },
      { name: 'Royal Kitchen Countertop', handle: 'royalkitchencountertop.ca', url: 'https://royalkitchencountertop.ca' },
      { name: 'ECC Education Group', handle: 'eccedugroup.com', url: 'https://eccedugroup.com' }
    ],
    features: [
      { title: 'Frontend', icon: <Layout className="w-6 h-6" />, desc: 'Responsive and fast React interfaces.' },
      { title: 'Backend', icon: <Cpu className="w-6 h-6" />, desc: 'Scalable Node.js API architecture.' },
      { title: 'WordPress', icon: TechIcons.WordPress, desc: 'Custom CMS and plugin development.' },
      { title: 'Database', icon: <Layers className="w-6 h-6" />, desc: 'Robust data management with MongoDB.' }
    ]
  },
  'specialty-04': {
    title: 'Native Windows Architecture',
    category: 'Specialty',
    icon: <AppWindow className="w-12 h-12 text-primary" />,
    description: 'Creating high-performance desktop tools for specialized marketing and orchestration workflows.',
    challenge: 'Web apps can sometimes lack the deep OS integration needed for intensive automation tasks.',
    solution: 'Native desktop environments built with .NET and C# for maximum performance and stability.',
    tags: ['.NET', 'C#', 'Native UI', 'System Orchestration'],
    techStack: [
      { name: '.NET', icon: TechIcons.DotNet }
    ],
    metrics: [
      { label: 'Execution Speed', value: 'Native' },
      { label: 'OS Integration', value: '100%' },
      { label: 'Resource Usage', value: 'Optimized' }
    ],
    features: [
      { title: 'Native UI', icon: <AppWindow className="w-6 h-6" />, desc: 'Desktop-grade interface performance.' },
      { title: 'Automation', icon: <Cpu className="w-6 h-6" />, desc: 'Direct OS-level system hooks.' }
    ]
  },
  'specialty-05': {
    title: 'Cloud & Infrastructure Orchestration',
    category: 'Specialty',
    icon: <Server className="w-12 h-12 text-primary" />,
    description: 'Designing and managing secure, scalable cloud environments with a focus on high availability and automated security.',
    challenge: 'Standard hosting solutions often lack the fine-grained control and security automation required for enterprise-grade performance.',
    solution: 'Leveraging AWS EC2 for compute, Nginx for sophisticated request routing, and Win-ACME for hands-free SSL lifecycle management.',
    tags: ['AWS EC2', 'Nginx', 'Win-ACME', 'SSL/TLS', 'DevOps', 'Infrastructure'],
    metrics: [
      { label: 'Security Score', value: 'A+' },
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'SSL Automation', value: '100%' }
    ],
    features: [
      { title: 'Server Provisioning', icon: <Cpu className="w-6 h-6" />, desc: 'Custom EC2 instance optimization.' },
      { title: 'Reverse Proxy', icon: <Layers className="w-6 h-6" />, desc: 'High-speed routing with Nginx.' },
      { title: 'Automated SSL', icon: <ShieldCheck className="w-6 h-6" />, desc: 'Cert management via Win-ACME.' }
    ]
  },
};

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);

  const project = projectDetails[id] || {
    title: 'Project Details',
    category: 'Featured Work',
    description: 'Details for this project are currently being compiled.',
    challenge: 'Identifying and solving the core technical and strategic hurdles.',
    solution: 'Applying specialized marketing technology frameworks to achieve measurable growth.',
    tags: ['Innovation', 'Marketing Tech', 'Strategy'],
    techStack: [],
    metrics: [
      { label: 'Strategic Alignment', value: '100%' },
      { label: 'Efficiency Gain', value: '+40%' },
      { label: 'Impact', value: 'High' }
    ],
    features: []
  };

  const SidebarContent = (
    <div className="space-y-10">
      <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 space-y-8">
        <h3 className="text-sm font-bold uppercase tracking-widest text-white/30">Skills & Focus</h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary" className="bg-white/5 border-white/10 text-white/70 px-4 py-1.5 rounded-lg text-xs font-bold">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="p-8 rounded-[32px] border border-primary/20 bg-primary/5 space-y-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-primary">Key Metrics</h3>
        <div className="space-y-4">
          {project.metrics.map((metric: any, idx: number) => (
            <div key={idx} className="flex items-center justify-between">
              <span className="text-white/40 text-sm">{metric.label}</span>
              <span className="text-primary font-bold">{metric.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  let stepCounter = 1;
  const getNextNum = () => {
    const num = stepCounter.toString().padStart(2, '0');
    stepCounter++;
    return num;
  };

  return (
    <main className="flex flex-col items-center min-h-screen bg-[#0a0a0a] text-white selection:bg-primary/30 scroll-smooth">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-8 px-6 max-w-7xl w-full">
        <div className="flex flex-col gap-8">
          <LinkComponent href="/work" className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors text-xs font-bold uppercase tracking-[0.2em] group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to all work
          </LinkComponent>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase">
                <Sparkles className="w-3 h-3 fill-primary" />
                {project.category}
              </div>
              <h1 className="text-5xl md:text-8xl font-bold tracking-tight leading-tight">
                {project.title}
              </h1>
              <p className="text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed">
                {project.description}
              </p>
            </div>
            {project.icon && (
              <div className="w-24 h-24 rounded-3xl bg-primary/5 border border-primary/20 flex items-center justify-center animate-pulse">
                {project.icon}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Grid: Content + Sidebar */}
      <section className="px-6 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-20 pb-32">
        
        {/* Left Column: Flowing Content */}
        <div className="lg:col-span-2 space-y-12">
          
          {/* Specialty Features (Intro Cards) */}
          {project.features && project.features.length > 0 && (
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              {project.features.map((feature: any, idx: number) => (
                <div key={idx} className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all group flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2">{feature.title}</h4>
                  <p className="text-xs text-white/40 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          )}

          {/* Point 01: The Challenge */}
          <div className="space-y-6 pt-12 border-t border-white/5">
            <h2 className="text-3xl font-bold flex items-center gap-4">
              <span className="text-primary italic">{getNextNum()}</span> The Challenge
            </h2>
            <p className="text-lg text-white/50 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Point 02: The Solution */}
          <div className="space-y-6 pt-12 border-t border-white/5">
            <h2 className="text-3xl font-bold flex items-center gap-4">
              <span className="text-primary italic">{getNextNum()}</span> The Solution
            </h2>
            <p className="text-lg text-white/50 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Real-World Execution Lists (Dynamic Steps) */}
          <div className="space-y-12">
            {project.designProjects && (
              <div className="space-y-8 pt-12 border-t border-white/5">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold flex items-center gap-4">
                    <span className="text-primary italic">{getNextNum()}</span> UI/UX Design Projects
                  </h2>
                  <p className="text-white/40 text-sm italic">Strategic interface architectures and design systems.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.designProjects.map((link: any, idx: number) => (
                    <a 
                      key={`design-${link.name}-${idx}`}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-primary/50 transition-all flex flex-col gap-4"
                    >
                      <div className="flex justify-between items-center">
                        <div className="relative w-12 h-12 bg-white/5 rounded-xl overflow-hidden flex items-center justify-center">
                          <Framer className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                        <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white truncate">{link.name}</h4>
                        <p className="text-xs font-mono text-white/30 truncate">{link.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {project.webDevelopment && (
              <div className="space-y-8 pt-12 border-t border-white/5">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold flex items-center gap-4">
                    <span className="text-primary italic">{getNextNum()}</span> Web Development Projects
                  </h2>
                  <p className="text-white/40 text-sm italic">High-performance digital platforms engineered for scale and speed.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.webDevelopment.map((link: any, idx: number) => (
                    <a 
                      key={`webdev-${link.handle}-${idx}`}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-primary/50 transition-all flex flex-col gap-4"
                    >
                      <div className="flex justify-between items-center">
                        <div className="relative w-12 h-12 bg-white/5 rounded-xl overflow-hidden flex items-center justify-center">
                          <Globe className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
                        </div>
                        <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white truncate">{link.name}</h4>
                        <p className="text-xs font-mono text-white/30 truncate">{link.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {project.visualIdentity && (
              <div className="space-y-8 pt-12 border-t border-white/5">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold flex items-center gap-4">
                    <span className="text-primary italic">{getNextNum()}</span> Logo & Visual Identity
                  </h2>
                  <p className="text-white/40 text-sm italic">Engineered brand foundations currently in use by active enterprises.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.visualIdentity.map((link: any, idx: number) => (
                    <a 
                      key={`identity-${link.handle}-${idx}`}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-primary/50 transition-all flex flex-col gap-4"
                    >
                      <div className="flex justify-between items-center">
                        <div className="relative w-12 h-12 bg-white/5 rounded-xl overflow-hidden flex items-center justify-center">
                          <Image 
                            src={link.logo || `https://picsum.photos/seed/${link.handle}/100/100`} 
                            alt={`${link.name} Logo`}
                            fill
                            className="object-contain p-2 grayscale group-hover:grayscale-0 transition-all"
                            onError={(e) => {
                              const target = e.target as any;
                              target.src = `https://picsum.photos/seed/${link.handle}/100/100`;
                            }}
                          />
                        </div>
                        <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-primary" />
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-white truncate">{link.name}</h4>
                        <p className="text-xs font-mono text-white/30 truncate">{link.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}

            {project.socialManagement && (
              <div className="space-y-8 pt-12 border-t border-white/5">
                <div className="space-y-3">
                  <h2 className="text-3xl font-bold flex items-center gap-4">
                    <span className="text-primary italic">{getNextNum()}</span> Social Media Management
                  </h2>
                  <p className="text-white/40 text-sm italic">Strategic community growth and digital pulse management.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.socialManagement.map((link: any, idx: number) => (
                    <a 
                      key={`social-${link.handle}-${idx}`}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-pink-500/50 transition-all flex flex-col gap-4"
                    >
                      <div className="flex justify-between items-center">
                        <Instagram className="w-8 h-8 text-pink-500 group-hover:scale-110 transition-transform" />
                        <ExternalLink className="w-4 h-4 text-white/20 group-hover:text-pink-500" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white truncate">{link.name}</h4>
                        <p className="text-sm font-mono text-white/30 truncate">{link.handle}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Right Column: Sticky Sidebar (Desktop Only) */}
        <aside className="hidden lg:block relative">
          <div className="sticky top-32 space-y-10">
            {SidebarContent}
          </div>
        </aside>
      </section>

      {/* Mobile Sidebar (Appears after content) */}
      <div className="block lg:hidden px-6 max-w-7xl w-full mb-20">
        {SidebarContent}
      </div>

      {/* Technology Ecosystem Section (Final) */}
      {project.techStack && project.techStack.length > 0 && (
        <section className="px-6 max-w-7xl w-full mb-32 overflow-hidden py-10 border-t border-white/5">
          <div className="space-y-16">
            <div className="flex flex-col items-center gap-4 text-center mt-16">
              <h3 className="text-[10px] font-black uppercase tracking-[0.4em] text-primary/60">Technology Ecosystem</h3>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 relative z-10">
              {project.techStack.map((tech: any, idx: number) => (
                <div 
                  key={tech.name}
                  onMouseEnter={() => setHoveredTech(tech.name)}
                  onMouseLeave={() => setHoveredTech(null)}
                  className={cn(
                    "relative group p-10 rounded-[40px] border border-white/5 bg-white/[0.01] backdrop-blur-3xl flex flex-col items-center gap-6 transition-all duration-500 ease-out animate-float",
                    hoveredTech !== null && hoveredTech !== tech.name ? "blur-sm opacity-20 scale-90" : "blur-0 opacity-100 scale-100",
                    hoveredTech === tech.name ? "border-primary/50 bg-white/[0.03] shadow-[0_0_50px_rgba(37,99,235,0.25)]" : ""
                  )}
                  style={{ animationDelay: `${idx * 0.2}s` }}
                >
                  <div className="w-20 h-20 flex items-center justify-center grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-500">
                    {tech.icon}
                  </div>
                  <span className="text-[11px] font-bold uppercase tracking-[0.2em] text-white/20 group-hover:text-primary transition-colors">
                    {tech.name}
                  </span>

                  {/* Hover Glow */}
                  {hoveredTech === tech.name && (
                    <div className="absolute inset-0 -z-10 bg-primary/5 rounded-[40px] blur-2xl animate-pulse" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-24 px-6 max-w-5xl w-full text-center">
        <div className="p-16 rounded-[60px] bg-gradient-to-b from-white/[0.02] to-transparent border border-white/10">
          <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to evolve your project?</h2>
          <p className="text-white/50 text-xl mb-12 max-w-2xl mx-auto">
            Let&apos;s apply these frameworks to your unique business challenges.
          </p>
          <LinkComponent href="/contact">
            <Button size="lg" className="h-16 px-12 rounded-3xl bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-[0_0_40px_rgba(37,99,235,0.25)]">
              Work with me
            </Button>
          </LinkComponent>
        </div>
      </section>

      <Footer />
    </main>
  );
}
