import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import officialLogoImg from '../../assets/images/freq_studio_brand_logo.jpg';

export const Preloader: React.FC<{ onComplete: () => void }> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onComplete, 400);
          return 100;
        }
        const diff = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + diff, 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed inset-0 z-[10000] bg-[#030303] flex flex-col items-center justify-center overflow-hidden bg-noise select-none"
      >
        {/* Clean Background Canvas without yellow glow */}

        {/* Logo Visual Presentation */}
        <div className="relative z-10 flex flex-col items-center px-4 max-w-lg w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative flex flex-col items-center mb-6"
          >
            {/* High-res cinematic Logo */}
            <div className="relative h-24 sm:h-32 w-72 sm:w-96 flex items-center justify-center">
              <img
                src={officialLogoImg}
                alt="FREQ STUDIO"
                referrerPolicy="no-referrer"
                className="w-full h-full object-contain pointer-events-none"
              />
            </div>
            
            <div className="flex items-center gap-2 mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFD400] animate-ping" />
              <span className="text-[11px] font-heading uppercase tracking-[0.25em] text-[#A0A0A0] font-semibold">
                Creative Production Studio
              </span>
            </div>
          </motion.div>

          {/* Audio Wave Visualizer Bars */}
          <div className="flex items-end justify-center gap-1.5 h-10 mb-8">
            {[40, 70, 30, 90, 50, 80, 45, 100, 60, 85, 35, 75, 50].map((height, i) => (
              <motion.div
                key={i}
                animate={{ height: ['20%', `${height}%`, '30%'] }}
                transition={{
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: i * 0.05,
                }}
                className="w-1.5 bg-[#FFD400] rounded-full shadow-[0_0_10px_rgba(255,212,0,0.6)]"
              />
            ))}
          </div>

          {/* Counter Progress */}
          <div className="text-center">
            <div className="font-heading text-5xl sm:text-6xl font-black tracking-tight text-white mb-2">
              {progress}<span className="text-[#FFD400]">%</span>
            </div>
            <p className="text-[#8F8F8F] text-[11px] font-mono uppercase tracking-widest">
              INITIALIZING CINEMATIC ENGINE
            </p>
          </div>

          {/* Progress Bar Line */}
          <div className="w-64 sm:w-72 h-1 bg-white/10 rounded-full mt-6 overflow-hidden border border-white/10">
            <div
              className="h-full bg-gradient-to-r from-[#FFD400] via-[#FFE566] to-[#FFB400] shadow-[0_0_15px_#FFD400] transition-all duration-150 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
