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
  Server, 
  ShieldCheck, 
  Video, 
  BarChart3, 
  CalendarDays, 
  Users,
  Printer,
  Terminal,
  Share2,
  HardDrive,
  PhoneCall,
  Network,
  Cloud,
  Database,
  Zap,
  Search,
  CheckCircle2,
  AlertCircle,
  Wrench,
  Monitor
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
  Windows: (
    <svg viewBox="0 0 24 24" className="w-full h-full fill-white">
      <path d="M0 3.449L9.75 2.1v9.451H0m10.949-9.602L24 0v11.401h-13.051zM0 12.6h9.75v9.451L0 20.701m10.949-8.101H24V24l-13.051-1.899z" />
    </svg>
  ),
  macOS: (
    <svg viewBox="0 0 256 256" className="w-full h-full fill-white">
      <path d="M193.3 147.1c-.3-21 16.5-31.1 17.3-31.6-9.8-14.3-25.1-16.2-30.4-16.4-12.8-1.3-25 7.5-31.5 7.5-6.5 0-16.4-7.4-27.1-7.2-14.1.2-27.1 8.2-34.3 20.8-14.6 25.3-3.7 62.7 10.5 83.2 7 10.1 15.3 21.4 26.2 21 10.5-.4 14.5-6.8 27.2-6.8 12.7 0 16.3 6.8 27.4 6.6 11.3-.2 18.5-10.2 25.4-20.3 8-11.7 11.3-23.1 11.5-23.7-.2-.1-22.1-8.5-22.2-33.1zm-32.9-78.7c5.8-7 9.6-16.7 8.5-26.4-8.4.3-18.6 5.6-24.6 12.6-5.4 6.2-10.1 16.1-8.9 25.5 9.4.7 19.3-4.7 25-11.7z" />
    </svg>
  ),
  Office365: (
    <svg viewBox="0 0 256 256" className="w-full h-full">
      <path d="M121.6 44.8l-83.2 28.8v108.8l83.2 28.8V44.8z" fill="#D83B01"/>
      <path d="M121.6 112L214.4 80v96l-92.8 32V112z" fill="#EB4C13"/>
      <path d="M121.6 44.8l92.8 35.2v32L121.6 112V44.8z" fill="#F15B26"/>
    </svg>
  ),
  Python: (
    <svg viewBox="0 0 128 128" className="w-full h-full">
      <path d="M64 0C32 0 32 14 32 14v10h34v4H22s-22 0-22 28c0 28 18 28 18 28h10v-14s0-18 18-18h32s18 0 18-18V14S96 0 64 0z" fill="#3776AB"/>
      <path d="M64 128c32 0 32-14 32-14v-10H62v-4h44s22 0 22-28c0-28-18-28-18-28h-10v14s0 18-18 18H50s-18 0-18 18v28s0 14 32 14z" fill="#FFD43B"/>
      <circle cx="48" cy="8" r="3" fill="white"/>
      <circle cx="80" cy="120" r="3" fill="white"/>
    </svg>
  ),
  WordPress: (
    <svg viewBox="0 0 256 256" className="w-full h-full">
      <path d="M128 0C57.3 0 0 57.3 0 128s57.3 128 128 128 128-57.3 128-128S198.7 0 128 0zm0 244.1c-18.1 0-35.1-4.6-49.9-12.7l33.8-92.6 24.1 72.3c.3.9.6 1.8.9 2.7-2.8.8-5.8 1.3-8.8 1.3-1.4 0-2.8-.1-4.2-.3l-.3-.1zm-73.4-22.1c-18.1-18.3-29.2-43.5-29.2-71.3 0-11.4 1.9-22.2 5.3-32.3l48.1 131.1c-9.1-8.3-17.3-17.5-24.2-27.5zM128 11.9c18.1 0 35.1 4.6 49.9 12.7l-33.8 92.6-24.1-72.3c-.3-.9-.6-1.8-.9-2.7 2.8-.8 5.8-1.3 8.8-1.3 1.4 0-2.8.1 4.2.3l.3.1zm104.5 116.1c0 11.4-1.9 22.2-5.3 32.3l-48.1-131.1c9.1 8.3 17.3 17.5 24.2 27.5 18.1 18.3 29.2 43.5 29.2 71.3z" fill="#21759b"/>
    </svg>
  ),
};

const projectDetails: Record<string, any> = {
  'specialty-01': {
    title: 'Visual Asset Design & Strategic Content',
    category: 'Specialty',
    icon: <Palette className="w-12 h-12 text-primary" />,
    description: 'Designing high-quality visual assets for digital campaigns and managing multi-channel social media calendars to drive engagement growth.',
    challenge: 'Enterprises struggle with visual consistency and content adaptation across diverse marketing channels.',
    solution: 'A holistic framework pairing robust visual identity with end-to-end social media management and data-driven reviews.',
    tags: ['Brand Strategy', 'Visual Design', 'Social Calendar', 'Metric Reporting', 'Vendor Coordination'],
    techStack: [
      { name: 'Illustrator', icon: TechIcons.Illustrator, top: '25%', left: '15%', delay: '0s' },
      { name: 'Canva', icon: TechIcons.Canva, top: '45%', left: '35%', delay: '1.2s' },
      { name: 'Figma', icon: TechIcons.Figma, top: '15%', left: '60%', delay: '0.5s' }
    ],
    metrics: [
      { label: 'Asset Consistency', value: '100%' },
      { label: 'Engagement Growth', value: 'YoY Focus' }
    ],
    features: [
      { title: 'Campaign Assets', icon: <Palette className="w-6 h-6" />, desc: 'High-quality visual production for social and print.' },
      { title: 'Social Calendar', icon: <CalendarDays className="w-6 h-6" />, desc: 'Managing end-to-end multi-channel social strategy.' }
    ]
  },
  'specialty-06': {
    title: 'IT Technician & System Operations',
    category: 'Specialty',
    icon: <Cpu className="w-12 h-12 text-primary" />,
    description: 'Practical, structured support-focused operations managing complex enterprise IT ecosystems, hardware lifecycle, and automated recovery.',
    challenge: 'Enterprises face constant uptime pressures, security threats, and the complexity of managing fragmented networks and user permissions.',
    solution: 'A robust operational framework prioritizing direct user support, automated backup strategies, and hardened network security.',
    tags: ['Windows Server', 'Office 365 Support', 'Network Security', 'PowerShell', 'RDP', 'VoIP Support'],
    techStack: [
      { name: 'Windows OS', icon: TechIcons.Windows, top: '20%', left: '15%', delay: '0s' },
      { name: 'Office 365', icon: TechIcons.Office365, top: '50%', left: '25%', delay: '1.2s' },
      { name: 'macOS', icon: TechIcons.macOS, top: '15%', left: '70%', delay: '0.5s' },
      { name: 'Python', icon: TechIcons.Python, top: '30%', left: '55%', delay: '2.1s' }
    ],
    metrics: [
      { label: 'Resolution Rate', value: '98%' },
      { label: 'System Uptime', value: '99.9%' },
      { label: 'Ticket Response', value: '< 30m' }
    ],
    features: [
      { title: 'Endpoint Readiness', icon: <Monitor className="w-6 h-6" />, desc: 'Setting up Windows/macOS machines for new users with standard security baselines.' },
      { title: 'M365 Support', icon: <Cloud className="w-6 h-6" />, desc: 'Managing Outlook, Teams, and SharePoint access with Entra ID security.' },
      { title: 'Automation', icon: <Zap className="w-6 h-6" />, desc: 'Executing PowerShell scripts for system health checks and bulk software deployments.' }
    ],
    supportCases: [
      {
        id: 'case-1',
        title: 'Shared Folder Access Troubleshooting',
        issue: 'User could open shared folder but could not save or modify documents.',
        tools: 'File Explorer, Sharing Tab, NTFS Security Permissions',
        action: 'Verified the network path, identified a mismatch between Sharing permissions (Read-only) and Security permissions (Modify).',
        result: 'Access issue isolated, permissions synchronized, and resolved in < 15 minutes.'
      },
      {
        id: 'case-2',
        title: 'Network Diagnostics with CMD',
        issue: 'Critical office station lost connectivity to the internal server.',
        tools: 'ping, ipconfig, nslookup, tracert',
        action: 'Identified DNS resolution failure via nslookup; flushed DNS cache and reset TCP/IP stack via CMD.',
        result: 'Server connectivity restored; verified VLAN routing for the affected subnet.'
      },
      {
        id: 'case-3',
        title: 'Office 365 Workflow Support',
        issue: 'User unable to access shared mailbox in Outlook desktop client.',
        tools: 'Exchange Admin Center, Entra ID, Outlook Settings',
        action: 'Verified group membership in Entra ID; identified sync delay and manually re-added the profile using Quick Assist.',
        result: 'Mailbox accessibility restored; documented the fix for internal knowledge base.'
      },
      {
        id: 'case-4',
        title: 'Printer Queue Stall Recovery',
        issue: 'Marketing department unable to print large campaign documents; queue showing "Printing" but no output.',
        tools: 'services.msc, Spooler folder, Control Panel',
        action: 'Stopped Print Spooler service, cleared cached files in System32/spool/PRINTERS, and restarted service.',
        result: 'Stalled queue cleared; verified hardware connection via test page; production resumed.'
      },
      {
        id: 'case-5',
        title: 'Remote Support with Quick Assist',
        issue: 'Executive user working remotely unable to connect to the corporate VPN.',
        tools: 'Microsoft Quick Assist, Cisco AnyConnect, Event Viewer',
        action: 'Initiated remote session; identified certificate expiration in Event Viewer logs; re-pushed latest VPN profile.',
        result: 'Secure tunnel established; confirmed access to internal resources via RDP.'
      },
      {
        id: 'case-6',
        title: 'Windows Endpoint Readiness',
        issue: 'Need to deploy 15 identical workstations for a new intake within 4 hours.',
        tools: 'Sysprep, ISO Imaging, Drivers database',
        action: 'Created a master image with baseline security apps; deployed via network boot; automated naming convention.',
        result: 'All 15 units ready for user login with 100% configuration consistency.'
      },
      {
        id: 'case-7',
        title: 'Outlook Profile Corruption Fix',
        issue: 'Outlook stuck on "Loading Profile" for a critical user.',
        tools: 'Control Panel Mail App, .ost file management, ScanPST',
        action: 'Ran ScanPST to repair file; issue persisted, so recreated the Outlook profile and synchronized mailbox.',
        result: 'Application launched successfully; no data loss; verified email flow.'
      },
      {
        id: 'case-8',
        title: 'PowerShell Automation',
        issue: 'Requirement to audit all locally attached printers across 50 workstations.',
        tools: 'PowerShell ISE, WMI Objects',
        action: 'Scripted a loop to query Get-Printer on target machines and export the result to CSV.',
        result: 'Manual audit time reduced from 4 hours to 5 minutes; data provided to procurement.'
      },
      {
        id: 'case-9',
        title: 'VoIP Configuration Awareness',
        issue: 'Reception phone showing "No Service" after a network maintenance window.',
        tools: 'Phone Web UI, DHCP Server, PoE Switch',
        action: 'Verified DHCP lease for the phone MAC; identified VLAN mismatch on the switch port; reassigned to Voice VLAN.',
        result: 'SIP registration successful; incoming calls restored.'
      },
      {
        id: 'case-10',
        title: 'Task Manager Performance Audit',
        issue: 'Workstation experiencing extreme lag during video rendering.',
        tools: 'Task Manager, Performance Monitor, HWInfo',
        action: 'Monitored CPU/RAM spikes; identified a background indexing process competing for resources; optimized indexing schedule.',
        result: 'System stability restored; render times improved by 30%.'
      }
    ]
  },
  'specialty-03': {
    title: 'Full-Stack Web Developer',
    category: 'Specialty',
    icon: <Code2 className="w-12 h-12 text-primary" />,
    description: 'Engineering high-performance, responsive web applications using modern JavaScript frameworks and scalable backend architecture.',
    challenge: 'Businesses need fast, SEO-friendly platforms that handle complex interactions and large datasets without performance degradation.',
    solution: 'Leveraging Next.js App Router and React for fluid frontends, paired with robust API logic and database orchestration.',
    tags: ['Next.js', 'React', 'TypeScript', 'Node.js', 'PostgreSQL'],
    techStack: [
      { name: 'Next.js', icon: TechIcons.Nextjs, top: '25%', left: '15%', delay: '0s' },
      { name: 'React', icon: TechIcons.React, top: '55%', left: '30%', delay: '1.2s' },
      { name: 'Node.js', icon: TechIcons.Nodejs, top: '15%', left: '70%', delay: '0.5s' }
    ],
    metrics: [
      { label: 'Page Speed', value: '98+' },
      { label: 'SEO Score', value: '100' }
    ],
    features: [
      { title: 'Server Components', icon: <Server className="w-6 h-6" />, desc: 'Optimizing data fetching and reducing client-side bundle sizes for peak speed.' },
      { title: 'Modern UI/UX', icon: <Layout className="w-6 h-6" />, desc: 'Building friction-less interfaces with Tailwind CSS and Radix UI primitives.' }
    ]
  },
  'specialty-04': {
    title: 'Native Windows Architect',
    category: 'Specialty',
    icon: <AppWindow className="w-12 h-12 text-primary" />,
    description: 'Developing high-performance desktop applications with deep OS integration and hardware-accelerated UI.',
    challenge: 'Native performance and offline capabilities are often sacrificed in web-only application strategies.',
    solution: 'Leveraging Python and native Windows APIs to build robust desktop tools with secure hardware access.',
    tags: ['Python', 'Windows API', 'Automation', 'System Design'],
    techStack: [
      { name: 'Python', icon: TechIcons.Python, top: '30%', left: '20%', delay: '0s' },
      { name: 'Windows OS', icon: TechIcons.Windows, top: '60%', left: '60%', delay: '1.2s' }
    ],
    metrics: [
      { label: 'CPU Usage', value: '< 5%' },
      { label: 'Uptime', value: '99.9%' }
    ],
    features: [
      { title: 'OS Integration', icon: <Terminal className="w-6 h-6" />, desc: 'Directly interfacing with Windows system APIs for hardware control and monitoring.' },
      { title: 'Desktop Performance', icon: <Cpu className="w-6 h-6" />, desc: 'Low-latency native applications optimized for workstation-level tasks.' }
    ]
  },
  'specialty-05': {
    title: 'Cloud Infrastructure Architect',
    category: 'Specialty',
    icon: <Server className="w-12 h-12 text-primary" />,
    description: 'Designing and deploying secure, scalable cloud environments for production-grade applications.',
    challenge: 'Fragmented hosting and poor security configurations lead to downtime and vulnerability.',
    solution: 'Orchestrating AWS infrastructure with Nginx reverse proxies, automated SSL, and hardened firewall policies.',
    tags: ['AWS EC2', 'Nginx', 'SSL', 'Network Security', 'Linux Admin'],
    techStack: [
      { name: 'Node.js', icon: TechIcons.Nodejs, top: '25%', left: '25%', delay: '0s' },
      { name: 'Python', icon: TechIcons.Python, top: '55%', left: '70%', delay: '1.2s' }
    ],
    metrics: [
      { label: 'Load Time', value: '< 2s' },
      { label: 'Security Grade', value: 'A+' }
    ],
    features: [
      { title: 'Reverse Proxy', icon: <Network className="w-6 h-6" />, desc: 'Managing traffic flow and SSL termination with hardened Nginx configurations.' },
      { title: 'Cloud Orchestration', icon: <Cloud className="w-6 h-6" />, desc: 'Scalable AWS deployments using secure networking protocols and VPC logic.' }
    ]
  }
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
    challenge: 'Identifying and solving the core technical hurdles.',
    solution: 'Applying specialized frameworks to achieve growth.',
    tags: ['Innovation', 'Specialty', 'Strategy'],
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

      <section className="px-6 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 pb-16">
        <div className="lg:col-span-2 space-y-10">
          {project.features && project.features.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
              {project.features.map((feature: any, idx: number) => (
                <div key={idx} className="p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-primary/30 transition-all group flex flex-col items-center text-center">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                    {feature.icon}
                  </div>
                  <h4 className="text-lg font-bold mb-2 uppercase tracking-tight">{feature.title}</h4>
                  <p className="text-xs text-white/40 leading-relaxed">{feature.desc}</p>
                </div>
              ))}
            </div>
          )}

          <div className="space-y-4 pt-10 border-t border-white/5">
            <h2 className="text-3xl font-bold flex items-center gap-4">
              <span className="text-primary italic">{getNextNum()}</span> The Challenge
            </h2>
            <p className="text-lg text-white/50 leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div className="space-y-4 pt-10 border-t border-white/5">
            <h2 className="text-3xl font-bold flex items-center gap-4">
              <span className="text-primary italic">{getNextNum()}</span> The Solution
            </h2>
            <p className="text-lg text-white/50 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Practical Support Cases for IT Technician */}
          {project.supportCases && (
            <div className="space-y-8 pt-10 border-t border-white/5">
              <div className="flex flex-col gap-2">
                 <h2 className="text-3xl font-bold flex items-center gap-4">
                  <span className="text-primary italic">{getNextNum()}</span> Troubleshooting Log
                </h2>
                <p className="text-white/30 text-sm">Real-world support scenarios and resolution workflows.</p>
              </div>
              <div className="grid grid-cols-1 gap-6">
                {project.supportCases.map((log: any) => (
                  <div key={log.id} className="p-8 rounded-[32px] bg-white/[0.01] border border-white/5 space-y-6 hover:border-primary/20 transition-all">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                        <Wrench className="w-5 h-5" />
                      </div>
                      <h4 className="text-xl font-bold">{log.title}</h4>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-1" />
                          <div>
                            <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Issue</p>
                            <p className="text-sm text-white/70">{log.issue}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <Search className="w-4 h-4 text-blue-500 shrink-0 mt-1" />
                          <div>
                            <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Tools Used</p>
                            <p className="text-sm text-white/70">{log.tools}</p>
                          </div>
                        </div>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <Zap className="w-4 h-4 text-yellow-500 shrink-0 mt-1" />
                          <div>
                            <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Action Taken</p>
                            <p className="text-sm text-white/70">{log.action}</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-1" />
                          <div>
                            <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest mb-1">Result</p>
                            <p className="text-sm text-white/70">{log.result}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

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

              <div className="hidden md:block">
                {project.techStack.map((tech: any, idx: number) => (
                  <div
                    key={`desk-${idx}`}
                    className={cn(
                      "absolute transition-all duration-700 [transition-timing-function:cubic-bezier(0.34,1.56,0.64,1)] cursor-pointer",
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
            </div>
          </section>
        </div>

        <aside className="hidden lg:block relative">
          <div className="sticky top-32 space-y-8">
            {SidebarContent}
          </div>
        </aside>
      </section>

      <Footer />
    </main>
  );
}
