'use client';

import React, { use, useState, useEffect, useRef } from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { 
  ArrowLeft, 
  Sparkles, 
  ExternalLink, 
  Palette,
  Layers,
  Framer,
  Layout,
  Code2,
  AppWindow,
  Cpu,
  Globe,
  Share2,
  Server,
  ShieldCheck,
  Video,
  Type,
  FileText,
  BarChart3,
  CalendarDays,
  Users
} from 'lucide-react';
import LinkComponent from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from '@/components/ui/carousel';
import { cn } from '@/lib/utils';

// Declare global for Instagram script
declare global {
  interface Window {
    instgrm: any;
  }
}

/**
 * Component to embed a single Instagram post via its URL.
 */
function InstagramPost({ url }: { url: string }) {
  useEffect(() => {
    // Rely on global script in layout.tsx to reduce re-injection noise
    if (typeof window !== 'undefined' && window.instgrm && window.instgrm.Embeds) {
      window.instgrm.Embeds.process();
    }
  }, [url]);

  return (
    <div className="flex justify-center w-full py-2">
      <blockquote
        key={url}
        className="instagram-media w-full"
        data-instgrm-permalink={url}
        data-instgrm-version="14"
        style={{
          background: 'transparent',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '24px',
          margin: '1px',
          maxWidth: '540px',
          minWidth: '326px',
          padding: '0',
          width: '100%',
        }}
      >
        <div style={{ padding: '16px' }}>
          <a
            href={url}
            className="text-primary hover:underline text-[10px] font-bold uppercase tracking-widest opacity-40 hover:opacity-100 transition-opacity"
            target="_blank"
            rel="noopener noreferrer"
          >
            Loading Media...
          </a>
        </div>
      </blockquote>
    </div>
  );
}

/**
 * Component to play a Google Drive video reel in 9:16 aspect ratio.
 * Fixed size to maintain phone-like appearance on all screens.
 */
function ReelPlayer({ id }: { id: string }) {
  return (
    <div className="relative aspect-[9/16] w-full max-w-[300px] mx-auto rounded-[32px] overflow-hidden bg-black border border-white/10 shadow-2xl group/reel">
      <iframe
        src={`https://drive.google.com/file/d/${id}/preview`}
        className="absolute inset-0 w-full h-full border-none opacity-90 group-hover/reel:opacity-100 transition-opacity duration-500"
        allow="autoplay; fullscreen"
        loading="lazy"
        title="Specialized Reel"
      />
      <div className="absolute inset-0 pointer-events-none border border-white/5 rounded-[32px] inset-px" />
    </div>
  );
}

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
  ),
  Python: (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      <path d="M64 0C32 0 32 14 32 14v10h34v4H22s-22 0-22 28c0 28 18 28 18 28h10v-14s0-18 18-18h32s18 0 18-18V14S96 0 64 0z" fill="#3776AB"/>
      <path d="M64 128c32 0 32-14 32-14v-10H62v-4h44s22 0 22-28c0-28-18-28-18-28h-10v14s0 18-18 18H50s-18 0-18 18v28s0 14 32 14z" fill="#FFD43B"/>
      <circle cx="48" cy="8" r="3" fill="white"/>
      <circle cx="80" cy="120" r="3" fill="white"/>
    </svg>
  )
};

const projectDetails: Record<string, any> = {
  'specialty-01': {
    title: 'Visual Asset Design & Strategic Content',
    category: 'Specialty',
    icon: <Palette className="w-12 h-12 text-primary" />,
    description: 'Designing high-quality visual assets for digital campaigns and managing multi-channel social media calendars to drive year-over-year engagement growth.',
    challenge: 'Enterprises often struggle with maintaining visual consistency, social media relevance, and data-driven content adaptation across diverse marketing channels.',
    solution: 'A holistic framework for brand evolution that pairs robust visual identity with end-to-end social media management, including trend monitoring, metric reporting, and cross-functional creative reviews.',
    tags: ['Brand Strategy', 'Visual Design', 'Social Calendar', 'Metric Reporting', 'Vendor Coordination', 'Motion Snippets'],
    techStack: [
      { name: 'Illustrator', icon: TechIcons.Illustrator, top: '25%', left: '15%', delay: '0s' },
      { name: 'Canva', icon: TechIcons.Canva, top: '45%', left: '35%', delay: '1.2s' },
      { name: 'Figma', icon: TechIcons.Figma, top: '15%', left: '60%', delay: '0.5s' }
    ],
    metrics: [
      { label: 'Asset Consistency', value: '100%' },
      { label: 'Engagement Growth', value: 'YoY Focus' },
      { label: 'Metric Reporting', value: 'Weekly' }
    ],
    visualIdentity: [
      { name: 'ECC Education Group', handle: 'eccedugroup.com', url: 'https://eccedugroup.com', logo: 'https://eccedugroup.com/logo.png', bgColor: 'bg-white' },
      { name: 'RJ Global Hiring', handle: 'rjglobalhiring.ca', url: 'https://rjglobalhiring.ca', logo: 'https://rjglobalhiring.ca/logo.png', bgColor: 'bg-white' },
      { name: 'Royal Kitchen Countertop', handle: 'royalkitchencountertop.ca', url: 'https://royalkitchencountertop.ca', logo: 'https://royalkitchencountertop.ca/wp-content/uploads/2025/08/cropped-RKC_logo-1.png', bgColor: 'bg-zinc-950' },
      { name: 'TNASS', handle: 'tnass.com', url: 'https://tnass.com', logo: 'https://tnass.com/logo.png', bgColor: 'bg-white' },
      { name: 'Technology Solution', handle: 'technologysolution.ca', url: 'https://technologysolution.ca', logo: 'https://technologysolution.ca/logo.png', bgColor: 'bg-white' }
    ],
    instagramPosts: [
      'https://www.instagram.com/p/DG1tdotPcPo/',
      'https://www.instagram.com/p/DGem_y6MQu4/',
      'https://www.instagram.com/p/DGUBd79vMuQ/',
      'https://www.instagram.com/p/DGPB68Bv4wn/',
      'https://www.instagram.com/p/DFZVnlpMH83/',
      'https://www.instagram.com/p/DFqk_SaP_1H/',
      'https://www.instagram.com/p/DF62RmGsNIg/',
      'https://www.instagram.com/p/DF65h2AsAPl/',
      'https://www.instagram.com/p/DGCH2Lov9CD/',
      'https://www.instagram.com/p/DTTfzUCEXle/',
      'https://www.instagram.com/p/DSa_OQ0kaeA/',
      'https://www.instagram.com/p/DSa_j3VkeQH/',
      'https://www.instagram.com/p/DSGSNdIkfnT/'
    ],
    motionGraphics: [
      '1lBmk4zuyFWxExIb_U8UrQPZpa5YKWSp7',
      '1pxl3yx7GD7535ByccxQAImbyfhW7s2wG',
      '13nTaWB_XBGXRqoZk2APgGaW7WvwRw_zc',
      '1kbZih9I9h3yC-r4Ft1VSwziykB0fF2je',
      '1M1BqBoP3OqD53_K6AJn2W8LfZac6TDMe'
    ],
    features: [
      { title: 'Campaign Assets', icon: <Palette className="w-6 h-6" />, desc: 'High-quality visual production for social, print, and advertisements.' },
      { title: 'Social Calendar', icon: <CalendarDays className="w-6 h-6" />, desc: 'Managing and organizing end-to-end multi-channel social strategy.' },
      { title: 'Metric Reporting', icon: <BarChart3 className="w-6 h-6" />, desc: 'Reporting on engagement data to ensure year-over-year growth.' },
      { title: 'Vendor Coordination', icon: <Users className="w-6 h-6" />, desc: 'Seamlessly managing external vendors and procurement processes.' }
    ]
  },
  'specialty-02': {
    title: 'UX/UI Interface Strategy',
    category: 'Specialty',
    icon: <Layout className="w-12 h-12 text-primary" />,
    description: 'Architecting digital-first user journeys aligned with performance data and business growth metrics.',
    challenge: 'Translating complex performance data into intuitive interfaces that support marketing goals and project deliverables.',
    solution: 'Friction-less design patterns and digital-first content (graphics, motion snippets) created in collaboration with leadership and performance teams.',
    tags: ['UI Design', 'UX Research', 'Performance Data', 'Digital-First Strategy'],
    techStack: [
      { name: 'Figma', icon: TechIcons.Figma, top: '25%', left: '20%', delay: '0s' },
      { name: 'React', icon: TechIcons.React, top: '45%', left: '50%', delay: '1.2s' }
    ],
    metrics: [
      { label: 'Data Alignment', value: '100%' },
      { label: 'Performance Gain', value: '+45%' },
      { label: 'Design Velocity', value: 'High' }
    ],
    designProjects: [
      { name: 'Career Compass', handle: 'Figma Design', url: 'https://www.figma.com/design/IAFPf5jW6EpRclaHdFCX77/Career-Compass?node-id=0-1&t=Dw5ZBybyqEGACHIi-1' }
    ],
    features: [
      { title: 'Digital-First Content', icon: <Video className="w-6 h-6" />, desc: 'Motion snippets and social graphics created for high impact.' },
      { title: 'Data Collaboration', icon: <BarChart3 className="w-6 h-6" />, desc: 'Reviewing creative based on rigorous performance data analysis.' },
      { title: 'Brand Adherence', icon: <ShieldCheck className="w-6 h-6" />, desc: 'Maintaining consistency across all digital-first creative assets.' }
    ]
  },
  'specialty-03': {
    title: 'Full-Stack Web Development',
    category: 'Specialty',
    icon: <Code2 className="w-12 h-12 text-primary" />,
    description: 'Building high-performance digital platforms that support marketing procurement and enterprise-level scale.',
    challenge: 'Modern web environments require a balance of speed, technical precision, and operational management.',
    solution: 'Next-generation tech stacks integrated with workflow tools for invoice processing, purchase orders, and special project support.',
    tags: ['Next.js', 'React', 'Operational Ops', 'Cloud Architecture'],
    techStack: [
      { name: 'Next.js', icon: TechIcons.Nextjs, top: '20%', left: '15%', delay: '0s' },
      { name: 'React', icon: TechIcons.React, top: '45%', left: '35%', delay: '1.2s' },
      { name: 'WordPress', icon: TechIcons.WordPress, top: '15%', left: '60%', delay: '0.5s' },
      { name: 'Node.js', icon: TechIcons.Nodejs, top: '60%', left: '20%', delay: '2.1s' },
      { name: 'MongoDB', icon: TechIcons.MongoDB, top: '55%', left: '75%', delay: '0.8s' }
    ],
    metrics: [
      { label: 'Deployment Speed', value: 'Rapid' },
      { label: 'System Uptime', value: '99.99%' },
      { label: 'Ops Efficiency', value: 'High' }
    ],
    webDevelopment: [
      { name: 'Technology Solution', handle: 'technologysolution.ca', url: 'https://technologysolution.ca' },
      { name: 'RJ Global Hiring', handle: 'rjglobalhiring.ca', url: 'https://rjglobalhiring.ca' },
      { name: 'Royal Kitchen Countertop', handle: 'royalkitchencountertop.ca', url: 'https://royalkitchencountertop.ca' },
      { name: 'ECC Education Group', handle: 'eccedugroup.com', url: 'https://eccedugroup.com' },
      { name: 'TNASS', handle: 'tnass.com', url: 'https://tnass.com' }
    ],
    features: [
      { title: 'Strategic Ops', icon: <Layers className="w-6 h-6" />, desc: 'Supporting procurement and invoicing workflows within digital platforms.' },
      { title: 'Metric Integration', icon: <BarChart3 className="w-6 h-6" />, desc: 'Direct reporting of engagement and performance data via web UI.' }
    ]
  },
  'specialty-04': {
    title: 'Native Windows Architecture',
    category: 'Specialty',
    icon: <AppWindow className="w-12 h-12 text-primary" />,
    description: 'Creating high-performance desktop tools for specialized orchestration and digital screen management.',
    challenge: 'Scheduling and uploading content for digital screens across a network requires direct system hooks.',
    solution: 'Native desktop environments built with Python to handle automation, content scheduling, and hardware UI.',
    tags: ['Python', 'Automation', 'Digital Screens', 'System Orchestration'],
    techStack: [
      { name: 'Python', icon: TechIcons.Python, top: '40%', left: '40%', delay: '0s' }
    ],
    metrics: [
      { label: 'Execution Speed', value: 'Native' },
      { label: 'Uptime', value: '100%' },
      { label: 'Automation', value: '100%' }
    ],
    features: [
      { title: 'Digital Screens', icon: <Layout className="w-6 h-6" />, desc: 'Scheduling and uploading visual content for native displays.' },
      { title: 'Process Automation', icon: <Cpu className="w-6 h-6" />, desc: 'Direct OS-level system hooks for marketing automation.' }
    ]
  },
  'specialty-05': {
    title: 'Cloud & Infrastructure Orchestration',
    category: 'Specialty',
    icon: <Server className="w-12 h-12 text-primary" />,
    description: 'Designing and managing secure, scalable cloud environments with a focus on marketing deliverable execution.',
    challenge: 'High-traffic marketing campaigns require robust infrastructure and automated security to maintain brand integrity.',
    solution: 'Leveraging AWS EC2 and sophisticated proxies to ensure zero downtime for critical social and web assets.',
    tags: ['AWS EC2', 'Nginx', 'Infrastructure', 'Marketing Deliverables'],
    techStack: [
      { name: 'AWS EC2', icon: <Cpu className="w-full h-full text-white" />, top: '25%', left: '15%', delay: '0s' },
      { name: 'Nginx', icon: <Layers className="w-full h-full text-white" />, top: '45%', left: '35%', delay: '1.2s' },
      { name: 'Win-ACME', icon: <ShieldCheck className="w-full h-full text-white" />, top: '15%', left: '60%', delay: '0.5s' }
    ],
    metrics: [
      { label: 'Security Score', value: 'A+' },
      { label: 'Uptime SLA', value: '99.99%' },
      { label: 'SLA Fulfillment', value: '100%' }
    ],
    features: [
      { title: 'SLA Management', icon: <ShieldCheck className="w-6 h-6" />, desc: 'Ensuring 99.9% uptime for all high-value marketing assets.' },
      { title: 'Infrastructure', icon: <Server className="w-6 h-6" />, desc: 'High-performance orchestration for enterprise scale.' }
    ]
  },
};

export default function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [hoveredTech, setHoveredTech] = useState<string | null>(null);
  const [isTechVisible, setIsTechVisible] = useState(false);
  const techSectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsTechVisible(true);
      },
      { threshold: 0.1 }
    );
    if (techSectionRef.current) observer.observe(techSectionRef.current);
    return () => observer.disconnect();
  }, []);

  const project = projectDetails[id] || {
    title: 'Project Details',
    category: 'Featured Work',
    description: 'Details for this project are currently being compiled.',
    challenge: 'Identifying and solving the core technical and strategic hurdles.',
    solution: 'Applying specialized marketing technology frameworks to achieve measurable growth.',
    tags: ['Innovation', 'Marketing Tech', 'Strategy'],
    techStack: [],
    metrics: [],
    features: []
  };

  const SidebarContent = (
    <div className="space-y-8">
      <div className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 space-y-6">
        <h3 className="text-sm font-bold uppercase tracking-widest text-white/30">Skills & Focus</h3>
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag: string) => (
            <Badge key={tag} variant="secondary" className="bg-white/5 border-white/10 text-white/70 px-4 py-1.5 rounded-lg text-xs font-bold">
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      {project.metrics && project.metrics.length > 0 && (
        <div className="p-8 rounded-[32px] border border-primary/20 bg-primary/5 space-y-5">
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
      )}
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
      <section className="pt-32 pb-4 px-6 max-w-7xl w-full">
        <div className="flex flex-col gap-6">
          <LinkComponent href="/work" className="inline-flex items-center gap-2 text-white/40 hover:text-primary transition-colors text-xs font-bold uppercase tracking-[0.2em] group">
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            Back to all work
          </LinkComponent>
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-4">
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
              <div className="w-20 h-20 rounded-3xl bg-primary/5 border border-primary/20 flex items-center justify-center animate-pulse shrink-0">
                {project.icon}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Main Grid: Content + Sidebar */}
      <section className="px-6 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 pb-16">
        
        {/* Left Column: Flowing Content */}
        <div className="lg:col-span-2 space-y-10">
          
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
          <div className="space-y-4 pt-10 border-t border-white/5">
            <h2 className="text-3xl font-bold flex items-center gap-4">
              <span className="text-primary italic">{getNextNum()}</span> The Challenge
            </h2>
            <p className="text-lg text-white/50 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          {/* Point 02: The Solution */}
          <div className="space-y-4 pt-10 border-t border-white/5">
            <h2 className="text-3xl font-bold flex items-center gap-4">
              <span className="text-primary italic">{getNextNum()}</span> The Solution
            </h2>
            <p className="text-lg text-white/50 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Instagram Carousels Showcase */}
          {project.instagramPosts && (
            <div className="space-y-12 pt-10 border-t border-white/5">
              <div className="space-y-4">
                <h2 className="text-3xl font-bold flex items-center gap-4">
                  <span className="text-primary italic">{getNextNum()}</span> Brand Identity & Content
                </h2>
                <p className="text-white/40 text-sm italic">Strategic visual storytelling and strategic content evolution for websites, LinkedIn, and Instagram.</p>
                
                <Carousel opts={{ align: "start", loop: true }} className="w-full relative px-12">
                  <CarouselContent className="-ml-4">
                    {project.instagramPosts.map((url: string, idx: number) => (
                      <CarouselItem key={`post-${idx}`} className="pl-4 basis-full sm:basis-1/2">
                        <InstagramPost url={url} />
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-black/60 backdrop-blur-xl border-white/10 hover:border-primary/50 text-white transition-all" />
                  <CarouselNext className="right-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-black/60 backdrop-blur-xl border-white/10 hover:border-primary/50 text-white transition-all" />
                </Carousel>
              </div>

              {project.motionGraphics && (
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold flex items-center gap-4">
                    <span className="text-primary italic">{getNextNum()}</span> Motion Graphics & Dynamic Content
                  </h2>
                  <p className="text-white/40 text-sm">High-impact dynamic media and motion sequences.</p>
                  
                  <Carousel opts={{ align: "start", loop: true }} className="w-full relative px-12">
                    <CarouselContent className="-ml-4">
                      {project.motionGraphics.map((id: string, idx: number) => (
                        <CarouselItem key={`motion-${idx}`} className="pl-4 basis-full sm:basis-1/2">
                          <div className="px-1">
                            <ReelPlayer id={id} />
                          </div>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                    <CarouselPrevious className="left-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-black/60 backdrop-blur-xl border-white/10 hover:border-primary/50 text-white transition-all" />
                    <CarouselNext className="right-4 top-1/2 -translate-y-1/2 h-12 w-12 bg-black/60 backdrop-blur-xl border-white/10 hover:border-primary/50 text-white transition-all" />
                  </Carousel>
                </div>
              )}
            </div>
          )}

          {/* Real-World Execution Lists (Dynamic Steps) */}
          <div className="space-y-10">
            {project.designProjects && (
              <div className="space-y-6 pt-10 border-t border-white/5">
                <div className="space-y-2">
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
              <div className="space-y-6 pt-10 border-t border-white/5">
                <div className="space-y-2">
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
              <div className="space-y-6 pt-10 border-t border-white/5">
                <div className="space-y-2">
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
                      className="group p-10 rounded-[48px] bg-white/[0.02] border border-white/5 hover:border-primary/50 transition-all flex flex-col gap-6"
                    >
                      <div className="flex flex-col gap-6">
                        <div className={cn(
                          "relative w-full h-[300px] md:h-[400px] rounded-[48px] overflow-hidden flex items-center justify-center border border-white/10 group-hover:opacity-90 transition-all",
                          link.bgColor || "bg-zinc-950"
                        )}>
                          <Image 
                            src={link.logo || `https://picsum.photos/seed/${link.handle}/800/800`} 
                            alt={`${link.name} Logo`}
                            fill
                            className="object-contain p-20 transition-all duration-500 group-hover:scale-105"
                            onError={(e) => {
                              const target = e.target as any;
                              target.src = `https://picsum.photos/seed/${link.handle}/800/800`;
                            }}
                          />
                        </div>
                        <div className="flex justify-between items-center px-4">
                           <div>
                            <h4 className="text-3xl font-bold text-white truncate group-hover:text-primary transition-colors">{link.name}</h4>
                            <p className="text-sm font-mono text-white/30 truncate">{link.handle}</p>
                          </div>
                          <ExternalLink className="w-6 h-6 text-white/20 group-hover:text-primary transition-colors" />
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Point 03: Tech Stack */}
          <section ref={techSectionRef} className="relative z-10 py-12 flex flex-col items-center gap-10 overflow-hidden border-t border-white/5">
            <div className="flex flex-col items-center gap-4 text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider">
                <Sparkles className="w-3 h-3 fill-primary" />
                ECOSYSTEM
              </div>
              <h2 className="text-3xl font-bold tracking-tight text-white leading-tight text-center">
                Specialized <span className="text-primary">Tech Stack</span>
              </h2>
            </div>

            <div className="relative w-full h-[350px] md:h-[450px]">
              {/* Mobile Layout: Grid */}
              <div className="grid grid-cols-3 gap-6 md:hidden px-4">
                {project.techStack.map((tech: any, idx: number) => (
                  <div key={`mob-${idx}`} className={cn("flex flex-col items-center gap-2 transition-all duration-700", isTechVisible ? "opacity-100 scale-100" : "opacity-0 scale-0")} style={{ transitionDelay: `${idx * 100}ms` }}>
                    <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl flex items-center justify-center p-3">
                      {tech.icon}
                    </div>
                    <span className="text-[8px] font-bold tracking-widest uppercase text-white/40">{tech.name}</span>
                  </div>
                ))}
              </div>

              {/* Desktop Layout: Absolute Bubbles */}
              <div className="hidden md:block">
                {project.techStack.map((tech: any, idx: number) => (
                  <div
                    key={`desk-${idx}`}
                    className={cn(
                      "absolute transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer",
                      isTechVisible ? "opacity-100 scale-100" : "opacity-0 scale-0",
                      hoveredTech !== null && hoveredTech !== tech.name ? "blur-sm opacity-20 scale-90" : "blur-0 opacity-100"
                    )}
                    style={{ 
                      top: tech.top, 
                      left: tech.left,
                      transitionDelay: isTechVisible ? `${idx * 200}ms` : '0ms',
                      zIndex: hoveredTech === tech.name ? 20 : 10
                    }}
                    onMouseEnter={() => setHoveredTech(tech.name)}
                    onMouseLeave={() => setHoveredTech(null)}
                  >
                    <div className={cn("animate-float transition-transform duration-300", hoveredTech === tech.name && "scale-125")} style={{ animationDelay: tech.delay }}>
                      <div className="relative group">
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl flex items-center justify-center p-6 transition-all duration-300 group-hover:bg-white/[0.07] group-hover:border-primary/50 group-hover:shadow-[0_0_40px_rgba(37,99,235,0.25)]">
                          {tech.icon}
                        </div>
                        <div className={cn("absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap text-[11px] font-bold tracking-[0.2em] uppercase text-white/60 transition-all duration-300", hoveredTech === tech.name ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2")}>
                          {tech.name}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="absolute inset-0 -z-10 opacity-[0.02] pointer-events-none" style={{ backgroundImage: `radial-gradient(circle at center, rgba(37,99,235,0.15) 0%, transparent 70%)` }} />
            </div>
          </section>
        </div>

        {/* Right Column: Sticky Sidebar (Desktop Only) */}
        <aside className="hidden lg:block relative">
          <div className="sticky top-32 space-y-8">
            {SidebarContent}
          </div>
        </aside>
      </section>

      {/* Mobile Sidebar (Appears after content) */}
      <div className="block lg:hidden px-6 max-w-7xl w-full mb-16">
        {SidebarContent}
      </div>

      {/* CTA Section */}
      <section className="py-16 px-6 max-w-5xl w-full text-center">
        <div className="p-12 rounded-[60px] bg-gradient-to-b from-white/[0.02] to-transparent border border-white/10">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">Ready to evolve your project?</h2>
          <p className="text-white/50 text-xl mb-10 max-w-2xl mx-auto">
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
