'use client';

import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Sparkles, Mail, MapPin, Linkedin, Phone } from 'lucide-react';

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-[#0a0a0a] text-white selection:bg-primary/30 scroll-smooth">
      <Navbar />
      
      {/* Header */}
      <section className="pt-32 sm:pt-40 md:pt-48 pb-12 px-6 max-w-7xl w-full">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold tracking-[0.2em] uppercase mb-8 slide-up">
          <Sparkles className="w-3 h-3 fill-primary" />
          GET IN TOUCH
        </div>
        <h1 className="text-5xl sm:text-7xl md:text-9xl font-bold tracking-tight mb-8 slide-up leading-[1.1]">
          Let&apos;s Start a <br className="hidden sm:block" />
          <span className="text-primary italic">Conversation</span>.
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl text-white/60 max-w-3xl leading-relaxed slide-up" style={{ animationDelay: '0.1s' }}>
          Whether you have a technical question, a collaborative idea, or just want to connect, I&apos;m always happy to hear from you.
        </p>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-24 px-6 max-w-7xl w-full">
        <div className="flex flex-col gap-12 slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-12">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight uppercase">Connections</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <a 
                href="https://www.linkedin.com/in/patelmeetk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 sm:p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-primary/50 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <Linkedin className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">LinkedIn</p>
                  <p className="text-lg sm:text-xl font-medium text-white/80 group-hover:text-white truncate">patelmeetk</p>
                </div>
              </a>

              <a 
                href="mailto:meet121112@gmail.com"
                className="flex items-center gap-6 p-6 sm:p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-primary/50 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <Mail className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">Email</p>
                  <p className="text-lg sm:text-xl font-medium text-white/80 group-hover:text-white truncate">meet121112@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+13653562299"
                className="flex items-center gap-6 p-6 sm:p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-primary/50 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <Phone className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">Phone</p>
                  <p className="text-lg sm:text-xl font-medium text-white/80 group-hover:text-white truncate">+1 (365) 356-2299</p>
                </div>
              </a>

              <div className="flex items-center gap-6 p-6 sm:p-8 rounded-[32px] bg-white/[0.02] border border-white/5 hover:border-primary/50 transition-all group lg:col-span-1">
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors shrink-0">
                  <MapPin className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                </div>
                <div>
                  <p className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em] mb-1">Location</p>
                  <p className="text-lg sm:text-xl font-medium text-white/80 group-hover:text-white truncate">Hamilton, ON, Canada</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 sm:p-12 rounded-[40px] md:rounded-[56px] bg-primary/5 border border-primary/10 max-w-3xl">
            <h4 className="text-2xl font-bold mb-6 text-primary">Let&apos;s Build</h4>
            <p className="text-white/50 text-base sm:text-lg leading-relaxed">
              I am always eager to discuss new technologies, open-source projects, or architectural patterns. For the fastest response, reach out via LinkedIn, Email, or Phone. I typically respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
