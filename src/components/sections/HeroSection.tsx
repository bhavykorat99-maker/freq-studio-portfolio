import React, { useState, useEffect } from 'react';
import { Play, ArrowUpRight, Sparkles, Film, Layers, Volume2, Cpu, Scissors, Sliders, Pause } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroSectionProps {
  onStartProject: () => void;
  onViewWork: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onStartProject,
  onViewWork,
}) => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [scrubPosition, setScrubPosition] = useState(45);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    let animationFrameId: number;
    let start = Date.now();

    const animateTimeline = () => {
      if (isPlaying) {
        const elapsed = (Date.now() - start) / 1000;
        setScrubPosition((elapsed * 12) % 100);
      }
      animationFrameId = requestAnimationFrame(animateTimeline);
    };

    animationFrameId = requestAnimationFrame(animateTimeline);
    return () => cancelAnimationFrame(animationFrameId);
  }, [isPlaying]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setMousePos({ x, y });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden bg-[#050505] bg-noise"
    >
      {/* 1. Animated Gradient Mesh & Ambient Yellow Glow Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <div
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-[#FFD400]/10 blur-[160px] animate-pulse-glow"
          style={{ transform: `translate(${mousePos.x * 2}px, ${mousePos.y * 2}px)` }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-[#FFB400]/8 blur-[140px] animate-pulse-glow"
          style={{ animationDelay: '3s', transform: `translate(${-mousePos.x * 1.5}px, ${-mousePos.y * 1.5}px)` }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#050505_80%)]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left / Main Text Column (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">
            {/* Tagline Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[#111111] border border-[#FFD400]/30 shadow-[0_0_20px_rgba(255,212,0,0.15)]"
            >
              <span className="w-2 h-2 rounded-full bg-[#FFD400] animate-ping" />
              <span className="text-xs font-mono uppercase tracking-widest text-[#FFD400] font-bold">
                WE TRANSFORM IDEAS INTO CINEMATIC STORIES
              </span>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-heading font-extrabold text-4xl sm:text-6xl lg:text-7xl tracking-tight text-white leading-[1.05]"
            >
              We Create Videos That Make Brands{' '}
              <span className="bg-gradient-to-r from-[#FFD400] via-[#FFE54D] to-[#FFB400] bg-clip-text text-transparent underline decoration-[#FFD400]/40 underline-offset-8">
                Impossible To Ignore.
              </span>
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-[#CFCFCF] text-base sm:text-lg lg:text-xl font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              Helping creators, startups, and global businesses scale with premium video editing, 3D motion graphics, brand films, and high-retention storytelling.
            </motion.p>

            {/* Action CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2"
            >
              <button
                onClick={onStartProject}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#FFD400] hover:bg-[#FFE54D] text-black font-heading font-extrabold text-sm uppercase tracking-wider transition-all duration-300 shadow-[0_0_30px_rgba(255,212,0,0.4)] hover:shadow-[0_0_50px_rgba(255,212,0,0.7)] hover:scale-105 flex items-center justify-center gap-2 group"
              >
                <span>Start Your Project</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <button
                onClick={onViewWork}
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#111111] hover:bg-[#1A1A1A] text-white hover:text-[#FFD400] border border-white/10 hover:border-[#FFD400]/50 font-heading font-bold text-sm uppercase tracking-wider transition-all duration-300 flex items-center justify-center gap-2"
              >
                <Play className="w-4 h-4 fill-current text-[#FFD400]" />
                <span>View Our Work</span>
              </button>
            </motion.div>

            {/* Micro Metrics Pill */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="pt-6 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-[#8F8F8F]"
            >
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
                <span>24-48h SLA Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
                <span>Hollywood DaVinci Grade</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
                <span>100% Unlimited Revisions</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Video Timeline & Software Mockup (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-5 relative"
            style={{
              transform: `perspective(1000px) rotateY(${mousePos.x}deg) rotateX(${-mousePos.y}deg)`,
              transition: 'transform 0.1s ease-out',
            }}
          >
            {/* Outer Glow Outline Frame */}
            <div className="relative rounded-3xl bg-[#0B0B0B]/90 border border-white/10 p-5 shadow-2xl shadow-black backdrop-blur-xl group hover:border-[#FFD400]/50 transition-colors duration-500">
              
              {/* Top Studio Bar */}
              <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="text-[10px] font-mono text-[#8F8F8F] ml-2">
                    FREQ_MASTER_FINAL_4K_HDR.prproj
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-[#FFD400]/20 text-[#FFD400] font-bold border border-[#FFD400]/30">
                    60 FPS
                  </span>
                  <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-white/10 text-white font-bold">
                    4K PRORES
                  </span>
                </div>
              </div>

              {/* Video Monitor Frame */}
              <div className="relative rounded-xl overflow-hidden aspect-video bg-black border border-white/10 mb-4 group/vid">
                <img
                  src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1000&q=80"
                  alt="Video Editing Canvas Studio"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover/vid:scale-105 transition-transform duration-700"
                />

                {/* Live Canvas HUD Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 p-3 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div className="p-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-[#FFD400] text-[10px] font-mono">
                      REC 🔴 00:01:42:18
                    </div>
                    <div className="p-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 text-white text-[10px] font-mono flex items-center gap-1">
                      <Sliders className="w-3 h-3 text-[#FFD400]" />
                      <span>LUT: FREQ_HOLLYWOOD_GOLD</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="p-2 rounded-full bg-[#FFD400] text-black font-bold shadow-lg hover:scale-110 transition-transform"
                    >
                      {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current ml-0.5" />}
                    </button>

                    {/* Audio Peak Meter Visualizer */}
                    <div className="flex items-end gap-1 h-6 px-3 py-1 bg-black/70 rounded-lg border border-white/10">
                      {[60, 80, 45, 95, 70, 85, 30, 90, 65].map((h, i) => (
                        <div
                          key={i}
                          className="w-1 bg-[#FFD400] rounded-sm transition-all duration-100"
                          style={{ height: isPlaying ? `${Math.random() * h + 15}%` : '20%' }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Timeline Tracks Box */}
              <div className="space-y-1.5 bg-[#050505] p-3 rounded-xl border border-white/5 relative">
                {/* Playhead Scrubbing Line */}
                <div
                  className="absolute top-0 bottom-0 w-0.5 bg-[#FFD400] z-20 shadow-[0_0_10px_#FFD400]"
                  style={{ left: `${scrubPosition}%` }}
                >
                  <div className="w-3 h-3 bg-[#FFD400] rotate-45 -translate-x-[5px] -translate-y-1.5" />
                </div>

                {/* Track V1 (Video Cuts) */}
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono text-[#8F8F8F] w-6">V1</span>
                  <div className="flex-1 h-6 bg-[#111111] rounded overflow-hidden flex gap-0.5 p-0.5">
                    <div className="w-[30%] h-full bg-[#FFD400]/30 rounded border border-[#FFD400]/50 text-[8px] text-[#FFD400] font-mono p-1 truncate">
                      Hook_A1.mp4
                    </div>
                    <div className="w-[45%] h-full bg-[#FFB400]/40 rounded border border-[#FFB400]/50 text-[8px] text-white font-mono p-1 truncate">
                      Cinema_B-Roll_4K.mov
                    </div>
                    <div className="w-[25%] h-full bg-[#FFD400]/30 rounded border border-[#FFD400]/50 text-[8px] text-[#FFD400] font-mono p-1 truncate">
                      CTA_Outro.mov
                    </div>
                  </div>
                </div>

                {/* Track V2 (3D Motion Graphics) */}
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono text-[#8F8F8F] w-6">V2</span>
                  <div className="flex-1 h-5 bg-[#111111] rounded overflow-hidden flex gap-0.5 p-0.5">
                    <div className="w-[20%] ml-[25%] h-full bg-purple-500/30 rounded border border-purple-400/50 text-[8px] text-purple-200 font-mono p-0.5 truncate">
                      3D_Hud_LowerThird.aep
                    </div>
                    <div className="w-[30%] h-full bg-blue-500/30 rounded border border-blue-400/50 text-[8px] text-blue-200 font-mono p-0.5 truncate">
                      Kinetic_Subtitles.mogrt
                    </div>
                  </div>
                </div>

                {/* Track A1 (Master SFX + Music) */}
                <div className="flex items-center gap-2">
                  <span className="text-[9px] font-mono text-[#8F8F8F] w-6">A1</span>
                  <div className="flex-1 h-5 bg-[#111111] rounded overflow-hidden flex gap-0.5 p-0.5">
                    <div className="w-full h-full bg-emerald-500/20 rounded border border-emerald-400/40 text-[8px] text-emerald-300 font-mono p-0.5 truncate">
                      Impact_Riser_Mastered_SFX.wav (-24 LUFS)
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Adobe Premiere Badges */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-6 -left-6 px-3.5 py-2 rounded-2xl bg-[#111111] border border-[#FFD400]/40 text-white shadow-xl flex items-center gap-2"
              >
                <div className="w-7 h-7 rounded-lg bg-[#00005B] text-[#9999FF] font-extrabold flex items-center justify-center text-xs">
                  Pr
                </div>
                <div>
                  <div className="text-xs font-bold text-white">Adobe Premiere</div>
                  <div className="text-[9px] text-[#FFD400]">Dynamic Cut Engine</div>
                </div>
              </motion.div>

              {/* Floating After Effects Badge */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -bottom-6 -right-6 px-3.5 py-2 rounded-2xl bg-[#111111] border border-[#FFB400]/40 text-white shadow-xl flex items-center gap-2"
              >
                <div className="w-7 h-7 rounded-lg bg-[#00005B] text-[#D671FF] font-extrabold flex items-center justify-center text-xs">
                  Ae
                </div>
                <div>
                  <div className="text-xs font-bold text-white">After Effects</div>
                  <div className="text-[9px] text-[#FFB400]">3D VFX Compositing</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[#8F8F8F]">
        <span className="text-[10px] font-mono uppercase tracking-widest text-[#CFCFCF]">SCROLL TO EXPLORE</span>
        <div className="w-5 h-8 rounded-full border-2 border-white/20 p-1 flex justify-center">
          <div className="w-1 h-2 bg-[#FFD400] rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};
