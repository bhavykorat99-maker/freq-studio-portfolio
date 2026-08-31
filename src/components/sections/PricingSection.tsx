import React from 'react';
import { PRICING_PLANS } from '../../data/agencyData';
import { Check, ArrowUpRight, Zap, Flame } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingSectionProps {
  onSelectPlan: (planName: string) => void;
}

export const PricingSection: React.FC<PricingSectionProps> = ({ onSelectPlan }) => {
  return (
    <section id="pricing" className="py-28 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#FFD400]/30 text-xs font-mono uppercase tracking-widest text-[#FFD400]">
            <Zap className="w-3.5 h-3.5 text-[#FFD400]" />
            <span>TRANSPARENT VALUE PACKAGES</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Flexible Retainer <span className="text-[#FFD400]">Plans</span>
          </h2>

          <p className="text-[#CFCFCF] text-base leading-relaxed">
            No hidden fees. Pause or cancel anytime. Choose the plan that fits your output volume.
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {PRICING_PLANS.map((plan, idx) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`rounded-3xl p-8 relative flex flex-col justify-between transition-all duration-300 ${
                plan.popular
                  ? 'bg-gradient-to-b from-[#181818] to-[#0D0D0D] border-2 border-[#FFD400] shadow-[0_0_50px_rgba(255,212,0,0.25)] lg:-translate-y-4'
                  : 'glass-card border border-white/10 hover:border-[#FFD400]/40'
              }`}
            >
              {/* Most Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#FFD400] text-black font-heading font-black text-xs uppercase tracking-widest flex items-center gap-1 shadow-[0_0_15px_#FFD400]">
                  <Flame className="w-3.5 h-3.5 fill-black" />
                  <span>MOST POPULAR CHOICE</span>
                </div>
              )}

              <div className="space-y-6">
                <div>
                  <h3 className="font-heading font-extrabold text-2xl text-white">
                    {plan.name}
                  </h3>
                  <p className="text-[#8F8F8F] text-xs mt-1 leading-relaxed">
                    {plan.description}
                  </p>
                </div>

                <div className="pt-2 border-t border-white/10 flex items-baseline gap-2">
                  <span className="font-heading font-black text-4xl sm:text-5xl text-[#FFD400]">
                    {plan.price}
                  </span>
                  <span className="text-xs font-mono text-[#8F8F8F]">
                    {plan.period}
                  </span>
                </div>

                {/* Feature List */}
                <div className="space-y-3 pt-4 border-t border-white/5">
                  <div className="text-xs font-mono uppercase tracking-wider text-white font-bold">
                    Included Capabilities:
                  </div>
                  <ul className="space-y-2.5">
                    {plan.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2.5 text-xs text-[#CFCFCF]">
                        <div className="p-0.5 rounded-full bg-[#FFD400] text-black mt-0.5 shrink-0">
                          <Check className="w-3 h-3 stroke-[3]" />
                        </div>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => onSelectPlan(plan.name)}
                className={`w-full mt-8 py-4 rounded-xl font-heading font-extrabold text-xs uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2 ${
                  plan.popular
                    ? 'bg-[#FFD400] hover:bg-[#FFE54D] text-black shadow-[0_0_25px_rgba(255,212,0,0.5)] hover:scale-105'
                    : 'bg-[#111111] hover:bg-white/10 text-white border border-white/10 hover:border-[#FFD400]'
                }`}
              >
                <span>{plan.ctaText}</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
