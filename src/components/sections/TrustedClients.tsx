import React from 'react';
import { CLIENT_LOGOS } from '../../data/agencyData';

export const TrustedClients: React.FC = () => {
  // Duplicate array for seamless infinite loop
  const marqueeItems = [...CLIENT_LOGOS, ...CLIENT_LOGOS, ...CLIENT_LOGOS];

  return (
    <section className="py-16 bg-[#0B0B0B] border-y border-white/5 relative overflow-hidden">
      {/* Side Blur Overlays for Smooth Edge Fading */}
      <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-[#0B0B0B] to-transparent z-10 pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-[#0B0B0B] to-transparent z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 mb-8 text-center">
        <p className="text-xs font-mono uppercase tracking-widest text-[#8F8F8F]">
          TRUSTED BY WORLD-CLASS CREATORS & GLOBAL ENTERPRISES
        </p>
      </div>

      {/* Infinite Marquee Track */}
      <div className="flex overflow-hidden select-none">
        <div className="animate-marquee flex items-center gap-12 sm:gap-16">
          {marqueeItems.map((client, idx) => (
            <div
              key={`${client.name}-${idx}`}
              className="flex items-center gap-3 px-6 py-3 rounded-2xl bg-[#111111]/60 border border-white/5 hover:border-[#FFD400]/40 transition-all group shrink-0"
            >
              <div className="w-8 h-8 rounded-xl bg-white/5 group-hover:bg-[#FFD400]/10 flex items-center justify-center text-[#CFCFCF] group-hover:text-[#FFD400] transition-colors">
                <span className="font-heading font-extrabold text-sm">{client.name[0]}</span>
              </div>
              <div className="flex flex-col text-left">
                <span className="font-heading font-bold text-sm text-white group-hover:text-[#FFD400] transition-colors">
                  {client.name}
                </span>
                <span className="text-[10px] text-[#8F8F8F] font-mono">
                  {client.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
