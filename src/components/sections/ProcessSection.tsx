import React from 'react';
import { PROCESS_STEPS } from '../../data/agencyData';
import { PhoneCall, FolderUp, Wand2, Eye, CheckCircle2, GitCommit } from 'lucide-react';
import { motion } from 'framer-motion';

const iconMap: Record<string, React.FC<{ className?: string }>> = {
  PhoneCall,
  FolderUp,
  Wand2,
  Eye,
  CheckCircle2,
};

export const ProcessSection: React.FC = () => {
  return (
    <section id="process" className="py-28 bg-[#0B0B0B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#FFD400]/30 text-xs font-mono uppercase tracking-widest text-[#FFD400]">
            <GitCommit className="w-3.5 h-3.5 text-[#FFD400]" />
            <span>SEAMLESS WORKFLOW</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Our 5-Step <span className="text-[#FFD400]">Editing Process</span>
          </h2>

          <p className="text-[#CFCFCF] text-base leading-relaxed">
            From raw camera files to viral 4K master delivery. Standardized, reliable, and frictionless.
          </p>
        </div>

        {/* Steps Grid / Timeline */}
        <div className="relative">
          {/* Connecting Glow Line Desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#FFD400]/40 to-transparent -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const Icon = iconMap[step.iconName] || PhoneCall;
              return (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="glass-card p-6 rounded-3xl relative flex flex-col justify-between group hover:border-[#FFD400]"
                >
                  <div className="space-y-4">
                    {/* Top Row: Number + Icon */}
                    <div className="flex items-center justify-between">
                      <span className="font-heading font-black text-2xl text-[#FFD400] font-mono">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#111111] border border-white/10 text-[#FFD400] flex items-center justify-center group-hover:bg-[#FFD400] group-hover:text-black transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="space-y-1">
                      <h3 className="font-heading font-extrabold text-lg text-white group-hover:text-[#FFD400] transition-colors">
                        {step.title}
                      </h3>
                      <div className="text-[10px] font-mono text-[#8F8F8F] uppercase tracking-wider">
                        {step.subtitle}
                      </div>
                    </div>

                    <p className="text-[#CFCFCF] text-xs leading-relaxed">
                      {step.description}
                    </p>
                  </div>

                  {/* Details List */}
                  <div className="pt-4 mt-4 border-t border-white/5 space-y-1.5">
                    {step.details.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-1.5 text-[11px] text-[#8F8F8F]">
                        <span className="w-1 h-1 rounded-full bg-[#FFD400]" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
