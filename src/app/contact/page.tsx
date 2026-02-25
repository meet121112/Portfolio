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
      <section className="pt-24 pb-8 px-6 max-w-5xl w-full">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-semibold tracking-wider mb-8 slide-up">
          <Sparkles className="w-3 h-3 fill-primary" />
          GET IN TOUCH
        </div>
        <h1 className="text-5xl md:text-8xl font-bold tracking-tight mb-6 slide-up">
          Let&apos;s Start a <br />
          <span className="text-primary italic">Conversation</span>.
        </h1>
        <p className="text-xl text-white/60 max-w-2xl leading-relaxed slide-up" style={{ animationDelay: '0.1s' }}>
          Whether you have a technical question, a collaborative idea, or just want to connect, I&apos;m always happy to hear from you.
        </p>
      </section>

      {/* Contact Content */}
      <section className="py-8 px-6 max-w-4xl w-full flex flex-col items-center">
        {/* Contact Info */}
        <div className="space-y-10 slide-up w-full" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Connections</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a 
                href="https://www.linkedin.com/in/patelmeetk/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/50 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Linkedin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">LinkedIn</p>
                  <p className="text-lg font-medium text-white/80 group-hover:text-white">patelmeetk</p>
                </div>
              </a>

              <a 
                href="mailto:meet121112@gmail.com"
                className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/50 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-lg font-medium text-white/80 group-hover:text-white">meet121112@gmail.com</p>
                </div>
              </a>

              <a 
                href="tel:+13653562299"
                className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/50 transition-all group cursor-pointer"
              >
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">Phone</p>
                  <p className="text-lg font-medium text-white/80 group-hover:text-white">+1 (365) 356-2299</p>
                </div>
              </a>

              <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-medium text-white/80 group-hover:text-white">Hamilton, ON, Canada</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 rounded-[40px] bg-primary/5 border border-primary/10 max-w-2xl">
            <h4 className="text-xl font-bold mb-4 text-primary">Let&apos;s Build</h4>
            <p className="text-white/50 text-sm leading-relaxed">
              I am always eager to discuss new technologies, open-source projects, or architectural patterns. For the fastest response, reach out via LinkedIn, Email, or Phone.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
