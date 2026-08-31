import React, { useEffect, useState, useRef } from 'react';
import { AGENCY_STATS } from '../../data/agencyData';
import { TrendingUp, Film, Users, Trophy } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

const iconList = [Film, Users, TrendingUp, Trophy];

const Counter: React.FC<{ target: number; suffix: string }> = ({ target, suffix }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const duration = 2000;
      const stepTime = 30;
      const steps = duration / stepTime;
      const increment = target / steps;

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [isInView, target]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

export const AgencyStats: React.FC = () => {
  return (
    <section className="py-20 bg-[#0B0B0B] border-y border-white/5 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#FFD400]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {AGENCY_STATS.map((stat, idx) => {
            const Icon = iconList[idx] || Film;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl text-center space-y-3 group hover:border-[#FFD400]/50"
              >
                <div className="w-12 h-12 mx-auto rounded-2xl bg-[#111111] border border-white/10 text-[#FFD400] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Icon className="w-6 h-6" />
                </div>

                <div className="font-heading font-black text-4xl sm:text-5xl text-white tracking-tight group-hover:text-[#FFD400] transition-colors">
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>

                <div className="space-y-1">
                  <div className="font-heading font-bold text-sm text-white">
                    {stat.label}
                  </div>
                  <div className="text-xs text-[#8F8F8F] font-mono">
                    {stat.sublabel}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
