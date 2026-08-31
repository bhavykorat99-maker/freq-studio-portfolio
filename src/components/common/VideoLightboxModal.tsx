import React from 'react';
import { X, Play, Eye, Clock, CheckCircle2, Award, Sparkles, ExternalLink } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Project } from '../../types';
import { getYouTubeId } from '../../utils/videoUtils';

interface VideoLightboxModalProps {
  project: Project | null;
  onClose: () => void;
  onStartProject: () => void;
}

export const VideoLightboxModal: React.FC<VideoLightboxModalProps> = ({
  project,
  onClose,
  onStartProject,
}) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 lg:p-10 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/90 backdrop-blur-xl z-0"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative z-10 w-full max-w-5xl bg-[#0B0B0B] border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/90 max-h-[90vh] flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#111111]/80 backdrop-blur-md">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full text-[10px] font-mono uppercase tracking-widest bg-[#FFD400]/20 text-[#FFD400] border border-[#FFD400]/30 font-bold">
                {project.category}
              </span>
              <h3 className="font-heading font-bold text-lg sm:text-xl text-white truncate max-w-md">
                {project.title}
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-[#FFD400] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
            {/* Video Player Box */}
            <div className={`relative rounded-2xl overflow-hidden bg-black border border-white/10 shadow-2xl group ${project.aspectRatio === '9:16' ? 'aspect-[9/16] max-w-sm mx-auto' : 'aspect-video'}`}>
              {getYouTubeId(project.videoUrl) ? (
                <iframe
                  src={`https://www.youtube.com/embed/${getYouTubeId(project.videoUrl)}?autoplay=1&rel=0&modestbranding=1`}
                  title={project.title}
                  className="w-full h-full border-0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              ) : (
                <video
                  src={project.videoUrl}
                  poster={project.thumbnail}
                  controls
                  autoPlay
                  className="w-full h-full object-cover"
                />
              )}
            </div>

            {/* Metrics Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-[#111111] border border-white/5">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#FFD400]/10 text-[#FFD400]">
                  <Eye className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-heading font-extrabold text-white">{project.views}</div>
                  <div className="text-xs text-[#8F8F8F]">Total Views</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#FFD400]/10 text-[#FFD400]">
                  <Award className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-heading font-extrabold text-white">{project.retention}</div>
                  <div className="text-xs text-[#8F8F8F]">Retention Rate</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#FFD400]/10 text-[#FFD400]">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-heading font-extrabold text-white">{project.duration}</div>
                  <div className="text-xs text-[#8F8F8F]">Final Length</div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#FFD400]/10 text-[#FFD400]">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-lg font-heading font-extrabold text-white">{project.client}</div>
                  <div className="text-xs text-[#8F8F8F]">Customer</div>
                </div>
              </div>
            </div>

            {/* Description & Tools */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 space-y-4">
                <h4 className="font-heading font-bold text-lg text-white flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FFD400]" />
                  Project Strategy & Creative Execution
                </h4>
                <p className="text-[#CFCFCF] text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="pt-2 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-mono bg-white/5 border border-white/10 text-[#CFCFCF]"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Software Stack */}
              <div className="space-y-4 p-5 rounded-2xl bg-[#111111]/60 border border-white/5">
                <h4 className="font-heading font-bold text-sm text-[#FFD400] uppercase tracking-wider">
                  Software Stack
                </h4>
                <ul className="space-y-2">
                  {project.software.map((sw) => (
                    <li key={sw} className="flex items-center gap-2 text-xs text-[#CFCFCF]">
                      <CheckCircle2 className="w-4 h-4 text-[#FFD400]" />
                      <span>{sw}</span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => {
                    onClose();
                    onStartProject();
                  }}
                  className="w-full mt-4 py-3 rounded-xl bg-[#FFD400] hover:bg-[#FFE54D] text-black font-heading font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,212,0,0.3)]"
                >
                  <span>Request Similar Video</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
