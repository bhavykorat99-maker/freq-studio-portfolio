import React, { useState } from 'react';
import { PROJECTS_DATA } from '../../data/agencyData';
import { Category, Project } from '../../types';
import { Play, Eye, Sparkles, Film } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getYouTubeId } from '../../utils/videoUtils';

interface FeaturedPortfolioProps {
  onSelectProject: (project: Project) => void;
}

export const FeaturedPortfolio: React.FC<FeaturedPortfolioProps> = ({ onSelectProject }) => {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const categories: Category[] = ['All', 'Commercial', 'Reels', 'Influencer', 'Festival', 'Dubai', 'Ads'];

  const filteredProjects = activeCategory === 'All'
    ? PROJECTS_DATA
    : PROJECTS_DATA.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-28 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#FFD400]/30 text-xs font-mono uppercase tracking-widest text-[#FFD400]">
              <Film className="w-3.5 h-3.5 text-[#FFD400]" />
              <span>SELECTED WORK & CASE STUDIES</span>
            </div>

            <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
              Crafted To Demand <span className="text-[#FFD400]">Attention</span>
            </h2>

            <p className="text-[#CFCFCF] text-base leading-relaxed">
              Explore our portfolio of high-retention video edits, 3D motion graphics, and direct-response commercial campaigns.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-[#111111] border border-white/10">
            {categories.map((cat) => {
              const isActive = activeCategory === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-xl text-xs font-heading font-bold uppercase tracking-wider transition-all ${
                    isActive
                      ? 'bg-[#FFD400] text-black shadow-[0_0_15px_rgba(255,212,0,0.4)] scale-105'
                      : 'text-[#8F8F8F] hover:text-white hover:bg-white/5'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                onClick={() => onSelectProject(project)}
                className="group relative rounded-3xl overflow-hidden bg-[#111111] border border-white/10 hover:border-[#FFD400]/60 transition-all duration-500 cursor-pointer shadow-2xl hover:shadow-[0_10px_40px_-10px_rgba(255,212,0,0.25)] flex flex-col"
              >
                {/* Video / Thumbnail Container */}
                <div className={`relative overflow-hidden ${project.aspectRatio === '9:16' ? 'aspect-[9/14]' : 'aspect-video'}`}>
                  {getYouTubeId(project.videoUrl) ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${getYouTubeId(project.videoUrl)}?autoplay=1&mute=1&loop=1&playlist=${getYouTubeId(project.videoUrl)}&controls=0&showinfo=0&rel=0&modestbranding=1`}
                      title={project.title}
                      className="w-full h-full border-0 pointer-events-none scale-105"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    />
                  ) : project.videoUrl ? (
                    <video
                      src={project.videoUrl}
                      poster={project.thumbnail}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <img
                      src={project.thumbnail}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}

                  {/* Dark Glass Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300 flex flex-col justify-between p-6">
                    
                    {/* Top Badges */}
                    <div className="flex justify-between items-start">
                      <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-black/70 backdrop-blur-md border border-white/10 text-white font-bold">
                        {project.category}
                      </span>

                      <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-[#FFD400]/20 text-[#FFD400] backdrop-blur-md border border-[#FFD400]/30 font-bold flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        <span>{project.views}</span>
                      </span>
                    </div>

                    {/* Play Button Icon Center Hover */}
                    <div className="mx-auto w-16 h-16 rounded-full bg-[#FFD400] text-black flex items-center justify-center shadow-[0_0_30px_rgba(255,212,0,0.6)] transform scale-75 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <Play className="w-7 h-7 fill-black ml-1" />
                    </div>

                    {/* Bottom Info */}
                    <div className="space-y-1">
                      <span className="text-xs font-mono text-[#FFD400] uppercase font-bold">
                        {project.client}
                      </span>
                      <h3 className="font-heading font-extrabold text-xl text-white group-hover:text-[#FFD400] transition-colors leading-tight">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Footer Tag Ribbon */}
                <div className="p-5 bg-[#0B0B0B] border-t border-white/5 flex items-center justify-between text-xs text-[#8F8F8F]">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-3.5 h-3.5 text-[#FFD400]" />
                    <span>Retention: <strong className="text-white">{project.retention}</strong></span>
                  </div>
                  <span className="font-mono text-[#FFD400] font-bold group-hover:underline">
                    Watch Case Study →
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};
