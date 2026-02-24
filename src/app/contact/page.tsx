'use client';

import React from 'react';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Sparkles, Mail, Send, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

export default function ContactPage() {
  return (
    <main className="flex flex-col items-center min-h-screen bg-[#0a0a0a] text-white selection:bg-primary/30 scroll-smooth">
      <Navbar />
      
      {/* Header */}
      <section className="pt-40 pb-16 px-6 max-w-5xl w-full">
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
      <section className="py-16 px-6 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-20">
        {/* Contact Info */}
        <div className="space-y-12 slide-up" style={{ animationDelay: '0.2s' }}>
          <div className="space-y-8">
            <h2 className="text-3xl font-bold">Connections</h2>
            <div className="space-y-6">
              <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">Email</p>
                  <p className="text-lg font-medium text-white/80 group-hover:text-white">hello@meetpatel.com</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">Location</p>
                  <p className="text-lg font-medium text-white/80 group-hover:text-white">Waterloo, ON, Canada</p>
                </div>
              </div>

              <div className="flex items-center gap-6 p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-primary/50 transition-all group">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-1">Contact</p>
                  <p className="text-lg font-medium text-white/80 group-hover:text-white">Available on LinkedIn</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="p-8 rounded-[40px] bg-primary/5 border border-primary/10">
            <h4 className="text-xl font-bold mb-4 text-primary">Let&apos;s Build</h4>
            <p className="text-white/50 text-sm leading-relaxed">
              I am always eager to discuss new technologies, open-source projects, or architectural patterns.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="slide-up" style={{ animationDelay: '0.3s' }}>
          <form className="space-y-8 p-8 md:p-12 rounded-[40px] bg-white/[0.01] border border-white/10 backdrop-blur-sm" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Your Name</Label>
                <Input id="name" placeholder="John Doe" className="h-14 rounded-2xl bg-white/[0.03] border-white/10 focus:border-primary/50 transition-all" />
              </div>
              <div className="space-y-3">
                <Label htmlFor="email" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" className="h-14 rounded-2xl bg-white/[0.03] border-white/10 focus:border-primary/50 transition-all" />
              </div>
            </div>
            
            <div className="space-y-3">
              <Label htmlFor="subject" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Topic</Label>
              <Input id="subject" placeholder="General Inquiry" className="h-14 rounded-2xl bg-white/[0.03] border-white/10 focus:border-primary/50 transition-all" />
            </div>

            <div className="space-y-3">
              <Label htmlFor="message" className="text-xs font-bold uppercase tracking-widest text-white/40 ml-1">Message</Label>
              <Textarea id="message" placeholder="What's on your mind?" className="min-h-[160px] rounded-2xl bg-white/[0.03] border-white/10 focus:border-primary/50 transition-all resize-none" />
            </div>

            <Button className="w-full h-16 rounded-2xl bg-primary hover:bg-primary/90 text-white font-bold text-lg shadow-[0_0_40px_rgba(37,99,235,0.2)] transition-all flex gap-3 group">
              Send Message
              <Send className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </form>
        </div>
      </section>

      <Footer />
    </main>
  );
}
