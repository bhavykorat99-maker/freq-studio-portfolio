import React, { useState, useEffect } from 'react';
import { TESTIMONIALS_DATA } from '../../data/agencyData';
import { Star, ChevronLeft, ChevronRight, Quote, MessageSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlay]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + TESTIMONIALS_DATA.length) % TESTIMONIALS_DATA.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % TESTIMONIALS_DATA.length);
  };

  return (
    <section className="py-28 bg-[#050505] relative bg-noise">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] border border-[#FFD400]/30 text-xs font-mono uppercase tracking-widest text-[#FFD400]">
            <MessageSquare className="w-3.5 h-3.5 text-[#FFD400]" />
            <span>CLIENT ENDORSEMENTS</span>
          </div>

          <h2 className="font-heading font-extrabold text-3xl sm:text-5xl text-white tracking-tight">
            Trusted By <span className="text-[#FFD400]">Top Creators & Founders</span>
          </h2>

          <p className="text-[#CFCFCF] text-base leading-relaxed">
            Read what channel owners, marketing heads, and tech founders say about working with Freq Studio.
          </p>
        </div>

        {/* Carousel Main Showcase */}
        <div
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
          className="max-w-4xl mx-auto relative"
        >
          <AnimatePresence mode="wait">
            {TESTIMONIALS_DATA.map((testimonial, idx) => {
              if (idx !== currentIndex) return null;
              return (
                <motion.div
                  key={testimonial.id}
                  initial={{ opacity: 0, scale: 0.95, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="glass-card p-8 sm:p-12 rounded-3xl relative overflow-hidden border border-[#FFD400]/30 shadow-2xl space-y-6"
                >
                  <Quote className="absolute top-6 right-8 w-20 h-20 text-[#FFD400]/10 pointer-events-none" />

                  {/* Stars Rating */}
                  <div className="flex items-center gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-[#FFD400] fill-[#FFD400]" />
                    ))}
                  </div>

                  {/* Quote Body */}
                  <p className="font-heading text-lg sm:text-2xl text-white leading-relaxed font-semibold italic">
                    {testimonial.quote}
                  </p>

                  {/* Client Info Bar */}
                  <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex items-center gap-4">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        referrerPolicy="no-referrer"
                        className="w-14 h-14 rounded-full object-cover border-2 border-[#FFD400] shadow-[0_0_15px_rgba(255,212,0,0.4)]"
                      />
                      <div>
                        <div className="font-heading font-extrabold text-lg text-white flex items-center gap-2">
                          <span>{testimonial.name}</span>
                          <span className="text-base">{testimonial.flagEmoji}</span>
                        </div>
                        <div className="text-xs text-[#8F8F8F]">
                          {testimonial.role} at <span className="text-[#FFD400] font-bold">{testimonial.company}</span>
                        </div>
                      </div>
                    </div>

                    <div className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-[#CFCFCF] font-mono">
                      Scope: {testimonial.projectType}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>

          {/* Carousel Controls */}
          <div className="flex items-center justify-between mt-8">
            <div className="flex items-center gap-2">
              {TESTIMONIALS_DATA.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === currentIndex ? 'w-8 bg-[#FFD400]' : 'w-2 bg-white/20 hover:bg-white/40'
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                className="p-3 rounded-full bg-[#111111] border border-white/10 text-white hover:text-[#FFD400] hover:border-[#FFD400]/40 transition-all"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-full bg-[#111111] border border-white/10 text-white hover:text-[#FFD400] hover:border-[#FFD400]/40 transition-all"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
