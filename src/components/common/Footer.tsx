import React from 'react';
import { Instagram, Youtube, Mail, MessageCircle } from 'lucide-react';
import { FreqStudioLogo } from './FreqStudioLogo';

export const Footer: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] border-t border-white/10 relative overflow-hidden pt-20 pb-12 bg-noise">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#FFD400]/5 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Col 1: Brand Info */}
          <div className="lg:col-span-2 space-y-6">
            <a
              href="#home"
              onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
              className="inline-flex items-center gap-3 group transition-transform hover:scale-105"
            >
              <FreqStudioLogo height={46} rounded={true} className="border border-white/20 group-hover:border-[#FFD400] transition-colors shadow-none" />
              <div className="flex flex-col">
                <span className="font-heading font-extrabold text-lg sm:text-xl tracking-wider text-white flex items-center gap-1 group-hover:text-[#FFD400] transition-colors leading-tight">
                  FREQ <span className="text-[#FFD400]">STUDIO</span>
                </span>
                <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase">
                  Official Studio
                </span>
              </div>
            </a>

            <p className="text-[#8F8F8F] text-sm leading-relaxed max-w-md">
              We Transform Ideas Into Cinematic Stories. High-end video editing, 3D motion graphics, brand commercials, and social content for $100M+ brands & top creators worldwide.
            </p>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs text-[#CFCFCF]">
              {[
                { label: 'Home', id: 'home' },
                { label: 'Agency Services', id: 'services' },
                { label: 'Featured Portfolio', id: 'portfolio' },
                { label: 'Before & After', id: 'before-after' },
                { label: 'Our Editing Process', id: 'process' },
                { label: 'Contact Details', id: 'contact' },
              ].map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(link.id); }}
                    className="hover:text-[#FFD400] transition-colors flex items-center gap-1"
                  >
                    <span>{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Services */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Core Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-[#8F8F8F]">
              <li>Professional Video Editing</li>
              <li>3D Motion Graphics & VFX</li>
              <li>DaVinci Resolve Color Grading</li>
              <li>High-ROAS Direct Response Ads</li>
              <li>YouTube Long-Form Retention</li>
              <li>Podcast Multi-Cam Cuts</li>
            </ul>
          </div>

          {/* Col 4: Connect & HQ */}
          <div className="space-y-4">
            <h4 className="font-heading font-bold text-sm text-white uppercase tracking-wider">
              Connect With Us
            </h4>
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/freqstudio.in?igsh=MTRldHJxZHk2YmpzZQ==', isExternal: true },
                { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@freqstudio_in?si=yVJddOM8Yq8soOIJ', isExternal: true },
                { icon: Mail, label: 'Email FREQ Studio', href: 'mailto:freqstudio007@gmail.com', isExternal: false },
                { icon: MessageCircle, label: 'WhatsApp', href: 'https://wa.me/919574187934', isExternal: true },
              ].map((s, idx) => {
                const Icon = s.icon;
                return (
                  <a
                    key={idx}
                    href={s.href}
                    {...(s.isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    onClick={(e) => {
                      if (!s.isExternal) {
                        window.location.href = s.href;
                      }
                    }}
                    className="p-2.5 rounded-xl bg-[#111111] border border-white/10 text-[#CFCFCF] hover:text-[#FFD400] hover:border-[#FFD400]/50 transition-all hover:scale-110"
                    aria-label={s.label}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>

            <div className="p-4 rounded-xl bg-[#111111]/80 border border-white/5 space-y-1">
              <div className="text-[10px] font-mono uppercase text-[#FFD400] font-bold">
                GLOBAL CREATIVE HEADQUARTERS
              </div>
              <div className="text-xs text-white">Surat, Gujarat, India</div>
              <a href="mailto:freqstudio007@gmail.com" className="text-[11px] text-[#8F8F8F] hover:text-[#FFD400] transition-colors block">freqstudio007@gmail.com</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8F8F8F]">
          <div>
            © {new Date().getFullYear()} FREQ STUDIO INC. All rights reserved. Built with precision.
          </div>
          <div className="flex items-center gap-6">
            <a href="#home" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#home" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#home" className="hover:text-white transition-colors">Client Portal</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
