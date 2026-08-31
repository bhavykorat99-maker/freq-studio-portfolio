import React from 'react';
import { WHY_CHOOSE_ITEMS } from '../../data/agencyData';
import { Zap, Repeat, Sparkles, Film, MessageSquare, Globe, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  Zap,
  Repeat,
  Sparkles,
  Film,
  MessageSquare,
  Globe,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section id="why-us" className="py-28 bg-[#050505] relative bg-noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#FFD400]/30 text-xs font-mono uppercase tracking-widest text-[#FFD400]">
            <ShieldCheck className="w-3.5 h-3.5 text-[#FFD400]" />
            <span>THE FREQ STUDIO ADVANTAGE</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Why Top Creators & Brands <span className="text-[#FFD400]">Choose Us</span>
          </h2>

          <p className="text-[#CFCFCF] text-base leading-relaxed">
            We operate as your dedicated internal post-production house. Zero friction, zero missed deadlines, maximum retention.
          </p>
        </div>

        {/* 6 Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_ITEMS.map((item, idx) => {
            const Icon = iconMap[item.icon] || Sparkles;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="glass-card p-8 rounded-3xl space-y-4 relative group"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#111111] border border-white/10 text-[#FFD400] flex items-center justify-center group-hover:scale-110 group-hover:bg-[#FFD400] group-hover:text-black transition-all shadow-lg">
                  <Icon className="w-6 h-6" />
                </div>

                <h3 className="font-heading font-extrabold text-xl text-white group-hover:text-[#FFD400] transition-colors">
                  {item.title}
                </h3>

                <p className="text-[#CFCFCF] text-sm leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
