import React, { useState } from 'react';
import { SERVICES_DATA } from '../../data/agencyData';
import { Service } from '../../types';
import {
  Film,
  Sparkles,
  TrendingUp,
  Smartphone,
  PlaySquare,
  Palette,
  Award,
  Mic,
  Video,
  Share2,
  ArrowUpRight,
  X,
  CheckCircle2,
  Clock,
  Layers,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Film,
  Sparkles,
  TrendingUp,
  Smartphone,
  PlaySquare,
  Palette,
  Award,
  Mic,
  Video,
  Share2,
};

interface ServicesSectionProps {
  onStartProject: () => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onStartProject }) => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  return (
    <section id="services" className="py-28 bg-[#050505] relative bg-noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#FFD400]/30 text-xs font-mono uppercase tracking-widest text-[#FFD400]">
            <Layers className="w-3.5 h-3.5 text-[#FFD400]" />
            <span>EXPERT POST-PRODUCTION CAPABILITIES</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Comprehensive Services For{' '}
            <span className="text-[#FFD400]">Market Leaders</span>
          </h2>

          <p className="text-[#CFCFCF] text-base leading-relaxed">
            Every service is engineered to elevate your visual identity, hold viewer attention, and turn video assets into powerful growth engines.
          </p>
        </div>

        {/* Services Grid (10 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.map((service, index) => {
            const IconComponent = iconMap[service.iconName] || Film;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="glass-card p-8 rounded-3xl relative flex flex-col justify-between group"
              >
                {/* Badge if present */}
                {service.badge && (
                  <div className="absolute top-6 right-6 px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-[#FFD400] text-black font-extrabold shadow-[0_0_12px_rgba(255,212,0,0.5)]">
                    {service.badge}
                  </div>
                )}

                <div className="space-y-6">
                  {/* Icon Box */}
                  <div className="w-14 h-14 rounded-2xl bg-[#111111] border border-white/10 group-hover:border-[#FFD400] text-[#FFD400] flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-lg">
                    <IconComponent className="w-7 h-7 transition-transform group-hover:rotate-6" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading font-extrabold text-xl text-white group-hover:text-[#FFD400] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[#CFCFCF] text-xs sm:text-sm leading-relaxed">
                      {service.shortDesc}
                    </p>
                  </div>

                  {/* Bullet Highlights */}
                  <ul className="space-y-2 pt-2 border-t border-white/5">
                    {service.features.slice(0, 3).map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-xs text-[#8F8F8F]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#FFD400] shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer Action */}
                <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#8F8F8F]">
                    <Clock className="w-3.5 h-3.5 text-[#FFD400]" />
                    <span>Turnaround: {service.turnaround}</span>
                  </div>

                  <button
                    onClick={() => setSelectedService(service)}
                    className="inline-flex items-center gap-1.5 text-xs font-heading font-bold text-white group-hover:text-[#FFD400] transition-colors"
                  >
                    <span>Read More</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Detail Drawer / Modal */}
      <AnimatePresence>
        {selectedService && (
          <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedService(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl z-0"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative z-10 w-full max-w-2xl bg-[#0B0B0B] border border-white/10 rounded-3xl p-8 shadow-2xl space-y-6"
            >
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-xl bg-[#FFD400]/10 text-[#FFD400]">
                    {React.createElement(iconMap[selectedService.iconName] || Film, { className: 'w-6 h-6' })}
                  </div>
                  <div>
                    <h3 className="font-heading font-extrabold text-2xl text-white">
                      {selectedService.title}
                    </h3>
                    <span className="text-xs font-mono text-[#FFD400]">
                      Turnaround: {selectedService.turnaround}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedService(null)}
                  className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <p className="text-[#CFCFCF] text-sm leading-relaxed">
                {selectedService.fullDesc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-3 p-4 rounded-2xl bg-[#111111] border border-white/5">
                  <h4 className="font-heading font-bold text-xs uppercase text-[#FFD400] tracking-wider">
                    Core Capabilities
                  </h4>
                  <ul className="space-y-2">
                    {selectedService.features.map((f, i) => (
                      <li key={i} className="flex items-center gap-2 text-xs text-white">
                        <CheckCircle2 className="w-4 h-4 text-[#FFD400]" />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3 p-4 rounded-2xl bg-[#111111] border border-white/5">
                  <h4 className="font-heading font-bold text-xs uppercase text-[#FFD400] tracking-wider">
                    Software Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedService.software.map((sw) => (
                      <span key={sw} className="px-2.5 py-1 rounded-lg text-xs bg-white/5 border border-white/10 text-[#CFCFCF]">
                        {sw}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 flex gap-4">
                <button
                  onClick={() => {
                    setSelectedService(null);
                    onStartProject();
                  }}
                  className="w-full py-3.5 rounded-xl bg-[#FFD400] hover:bg-[#FFE54D] text-black font-heading font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_0_20px_rgba(255,212,0,0.4)] flex items-center justify-center gap-2"
                >
                  <span>Book {selectedService.title}</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};
