import React, { useState } from 'react';
import { Mail, MapPin, Phone, Instagram, Linkedin, Youtube, Twitter, Sparkles, Check, Copy, MessageCircle, Clock, ShieldCheck, Zap } from 'lucide-react';
import officialLogoImg from '../../assets/images/freq_studio_brand_logo.jpg';

interface ContactSectionProps {
  preselectedPlan?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ preselectedPlan }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const emailAddress = 'freqstudio007@gmail.com';
  const primaryPhone = '+91 95741 87934';
  const secondaryPhone = '+91 99240 49540';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(primaryPhone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  const whatsappUrl = `https://wa.me/919574187934?text=${encodeURIComponent(`Hi Freq Studio, I am interested in discussing a video project ${preselectedPlan ? `(${preselectedPlan})` : ''}!`)}`;

  return (
    <section id="contact" className="py-28 bg-[#0B0B0B] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#FFD400]/5 blur-[180px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#FFD400]/30 text-xs font-mono uppercase tracking-widest text-[#FFD400]">
            <Sparkles className="w-3.5 h-3.5 text-[#FFD400]" />
            <span>DIRECT PRODUCTION ACCESS</span>
          </div>

          <h2 className="font-heading font-extrabold text-4xl sm:text-6xl text-white tracking-tight">
            Ready To Make Your Brand <span className="text-[#FFD400]">Impossible To Ignore?</span>
          </h2>

          <p className="text-[#CFCFCF] text-base leading-relaxed max-w-2xl mx-auto">
            Skip the generic queues. Reach our senior creative leads directly via Email, WhatsApp, or Direct Line for immediate project kickoff.
          </p>

          {preselectedPlan && (
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFD400]/10 border border-[#FFD400]/40 text-xs font-heading font-bold text-[#FFD400] animate-fadeIn">
              <Zap className="w-3.5 h-3.5" />
              <span>Selected Package: {preselectedPlan}</span>
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Main Direct Contact Hub (7 cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-6">
            
            {/* Direct Email Card */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative group hover:border-[#FFD400]/50 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-2xl bg-[#111111] text-[#FFD400] border border-[#FFD400]/20 shadow-[0_0_20px_rgba(255,212,0,0.15)]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-[#8F8F8F] tracking-wider">
                      Official Agency Inbox
                    </div>
                    <div className="font-heading font-bold text-lg sm:text-xl text-white">
                      {emailAddress}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyEmail}
                    className="px-3.5 py-2 rounded-xl bg-[#111111] hover:bg-[#1a1a1a] border border-white/10 hover:border-[#FFD400]/40 text-xs font-mono text-white hover:text-[#FFD400] transition-all flex items-center gap-1.5"
                    title="Copy Email"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#FFD400]" />
                        <span className="text-[#FFD400]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <p className="text-sm text-[#8F8F8F] leading-relaxed">
                Send your brief, footage links, or creative deck directly to our executive team. Guaranteed response in under 2 hours during business hours.
              </p>
            </div>

            {/* Direct Phone & WhatsApp Card */}
            <div className="glass-panel p-8 rounded-3xl border border-white/10 relative group hover:border-[#FFD400]/50 transition-all duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-2xl bg-[#111111] text-[#FFD400] border border-[#FFD400]/20 shadow-[0_0_20px_rgba(255,212,0,0.15)]">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-mono uppercase text-[#8F8F8F] tracking-wider">
                      Hotline & WhatsApp Desk
                    </div>
                    <div className="font-heading font-bold text-lg sm:text-xl text-white">
                      {primaryPhone}
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={handleCopyPhone}
                    className="px-3.5 py-2 rounded-xl bg-[#111111] hover:bg-[#1a1a1a] border border-white/10 hover:border-[#FFD400]/40 text-xs font-mono text-white hover:text-[#FFD400] transition-all flex items-center gap-1.5"
                    title="Copy Phone"
                  >
                    {copiedPhone ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-[#FFD400]" />
                        <span className="text-[#FFD400]">Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                <div className="p-3 rounded-xl bg-[#111111]/80 border border-white/5">
                  <div className="text-[11px] text-[#8F8F8F] font-mono uppercase">Primary Line</div>
                  <div className="text-sm font-bold text-white mt-0.5">{primaryPhone}</div>
                </div>
                <div className="p-3 rounded-xl bg-[#111111]/80 border border-white/5">
                  <div className="text-[11px] text-[#8F8F8F] font-mono uppercase">Production Support</div>
                  <div className="text-sm font-bold text-white mt-0.5">{secondaryPhone}</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <a
                  href={`tel:${primaryPhone.replace(/\s+/g, '')}`}
                  className="py-3.5 px-4 rounded-xl bg-[#111111] hover:bg-white/10 border border-white/15 text-white font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 hover:border-[#FFD400]"
                >
                  <Phone className="w-4 h-4 text-[#FFD400]" />
                  <span>Call Direct Line</span>
                </a>
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3.5 px-4 rounded-xl bg-[#25D366]/15 hover:bg-[#25D366]/25 border border-[#25D366]/40 text-[#25D366] font-heading font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Quick Commitments Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl bg-[#111111]/60 border border-white/5 flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#FFD400] shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">&lt; 2 Hour Reply</div>
                  <div className="text-[#8F8F8F] text-[11px]">Rapid triage</div>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-[#111111]/60 border border-white/5 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-[#FFD400] shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">NDA Protected</div>
                  <div className="text-[#8F8F8F] text-[11px]">100% confidential</div>
                </div>
              </div>
              <div className="p-4 rounded-2xl bg-[#111111]/60 border border-white/5 flex items-center gap-3">
                <Zap className="w-5 h-5 text-[#FFD400] shrink-0" />
                <div className="text-xs">
                  <div className="font-bold text-white">Fast Turnaround</div>
                  <div className="text-[#8F8F8F] text-[11px]">24-48h first cuts</div>
                </div>
              </div>
            </div>

          </div>

          {/* Location & Social Hub (5 cols) */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-start">
            
            <div className="glass-panel p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="font-heading font-extrabold text-xl text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FFD400]" />
                Creative Studio Headquarters
              </h3>

              <div className="space-y-4 text-sm text-[#CFCFCF]">
                <div className="flex items-start gap-3.5">
                  <div className="p-3 rounded-xl bg-[#111111] text-[#FFD400] border border-white/10 shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs text-[#8F8F8F] font-mono uppercase">Studio Base</div>
                    <div className="font-bold text-white text-base">Surat, Gujarat, India</div>
                    <div className="text-xs text-[#8F8F8F] mt-0.5">Global Post-Production & Editing Infrastructure</div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="pt-4 border-t border-white/10">
                <span className="block text-xs font-mono uppercase text-[#8F8F8F] mb-3">
                  Follow Our Daily Edits & Creative Reels:
                </span>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {[
                    { icon: Instagram, label: 'Instagram', href: 'https://www.instagram.com/freqstudio.in?igsh=MTRldHJxZHk2YmpzZQ==', isExternal: true },
                    { icon: Youtube, label: 'YouTube', href: 'https://youtube.com/@freqstudio_in?si=yVJddOM8Yq8soOIJ', isExternal: true },
                    { icon: Mail, label: 'Email', href: 'mailto:freqstudio007@gmail.com', isExternal: false },
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
                        className="p-3 rounded-xl bg-[#111111] border border-white/10 text-white hover:text-[#FFD400] hover:border-[#FFD400]/40 transition-all flex flex-col items-center justify-center gap-1.5 group"
                      >
                        <Icon className="w-4 h-4 group-hover:scale-110 transition-transform" />
                        <span className="text-[10px] text-[#8F8F8F] group-hover:text-white font-mono">{s.label}</span>
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Freq Studio Logo & Image Showcase - Plain Rectangle without yellow shadows */}
            <div className="bg-[#0A0A0A] p-3 border border-white/10 relative group hover:border-white/20 transition-colors">
              <div className="relative h-56 sm:h-64 bg-[#050505] border border-white/10 flex flex-col items-center justify-center p-6 pb-12">
                <img
                  src={officialLogoImg}
                  alt="FREQ STUDIO Official Creative Studio Logo"
                  referrerPolicy="no-referrer"
                  className="w-auto h-auto max-w-[85%] max-h-[75%] object-contain select-none pointer-events-none transition-transform duration-500 group-hover:scale-105"
                />
                
                <div className="absolute bottom-3.5 left-4 right-4 flex items-center justify-between pointer-events-none z-10">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
                    <span className="text-xs font-heading font-bold text-white uppercase tracking-wider">
                      Official Creative Studio
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-black/90 border border-white/20 text-[10px] font-mono text-zinc-300">
                    Surat, India
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
