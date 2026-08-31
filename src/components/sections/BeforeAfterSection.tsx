import React, { useState } from 'react';
import { BEFORE_AFTER_PRESETS } from '../../data/agencyData';
import { Sliders, Sparkles, Layers, ArrowLeftRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const BeforeAfterSection: React.FC = () => {
  const [activePresetIndex, setActivePresetIndex] = useState(0);
  const [sliderPos, setSliderPos] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const activePreset = BEFORE_AFTER_PRESETS[activePresetIndex];

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const rect = e.currentTarget.getBoundingClientRect();
      handleMove(e.clientX, rect);
    }
  };

  return (
    <section id="before-after" className="py-28 bg-[#050505] relative bg-noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#FFD400]/30 text-xs font-mono uppercase tracking-widest text-[#FFD400]">
            <Sliders className="w-3.5 h-3.5 text-[#FFD400]" />
            <span>INTERACTIVE POST-PRODUCTION TRANSFORMATION</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Raw Camera Feed vs <span className="text-[#FFD400]">Freq Studio Cut</span>
          </h2>

          <p className="text-[#CFCFCF] text-base leading-relaxed">
            Drag the handle to see how our DaVinci Resolve color grading, 3D motion graphics, and sound mastering elevate flat raw footage into a $100M master.
          </p>
        </div>

        {/* Preset Selector */}
        <div className="flex justify-center mb-10 gap-3 flex-wrap">
          {BEFORE_AFTER_PRESETS.map((preset, idx) => (
            <button
              key={preset.id}
              onClick={() => {
                setActivePresetIndex(idx);
                setSliderPos(50);
              }}
              className={`px-5 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                activePresetIndex === idx
                  ? 'bg-[#FFD400] text-black shadow-[0_0_20px_rgba(255,212,0,0.4)] scale-105'
                  : 'bg-[#111111] text-[#8F8F8F] hover:text-white border border-white/10'
              }`}
            >
              {preset.name}
            </button>
          ))}
        </div>

        {/* Interactive Comparison Stage */}
        <div className="max-w-5xl mx-auto">
          <div
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleMouseMove}
            onTouchMove={handleTouchMove}
            className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl bg-black aspect-[16/9] select-none cursor-ew-resize group"
          >
            {/* After Image (Full width background) */}
            <img
              src={activePreset.afterImg}
              alt="After Freq Studio Edit"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Before Image (Clipped) */}
            <div
              className="absolute inset-0 overflow-hidden pointer-events-none"
              style={{ width: `${sliderPos}%` }}
            >
              <img
                src={activePreset.beforeImg}
                alt="Before Raw Footage"
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover max-w-none"
                style={{ width: '100%', height: '100%' }}
              />
            </div>

            {/* Handle Bar Divider */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-[#FFD400] shadow-[0_0_15px_#FFD400] z-20 pointer-events-none"
              style={{ left: `${sliderPos}%` }}
            >
              <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-[#FFD400] text-black flex items-center justify-center shadow-[0_0_25px_rgba(255,212,0,0.8)] border-2 border-black">
                <ArrowLeftRight className="w-5 h-5 stroke-[3]" />
              </div>
            </div>

            {/* Overlay Side Labels */}
            <div className="absolute top-6 left-6 z-10 px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-white/10 text-white font-mono text-xs uppercase tracking-wider flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-red-500" />
              <span>RAW CAMERA FEED</span>
            </div>

            <div className="absolute top-6 right-6 z-10 px-4 py-2 rounded-xl bg-black/80 backdrop-blur-md border border-[#FFD400]/40 text-[#FFD400] font-mono text-xs uppercase tracking-wider flex items-center gap-2 shadow-[0_0_15px_rgba(255,212,0,0.3)]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FREQ STUDIO FINAL CUT</span>
            </div>

            {/* Bottom Comparison Stats Strip */}
            <div className="absolute bottom-6 left-6 right-6 z-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-white/10 text-xs">
                <div className="text-[#8F8F8F] font-mono uppercase text-[10px]">Unedited Specification</div>
                <div className="text-white font-bold mt-0.5">{activePreset.rawStats}</div>
              </div>

              <div className="p-4 rounded-2xl bg-black/80 backdrop-blur-md border border-[#FFD400]/40 text-xs">
                <div className="text-[#FFD400] font-mono uppercase text-[10px]">Freq Studio Optimized</div>
                <div className="text-white font-bold mt-0.5">{activePreset.freqStats}</div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
