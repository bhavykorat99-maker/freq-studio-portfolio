import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { FreqStudioLogo } from './FreqStudioLogo';

interface NavbarProps {
  onOpenEstimator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'About', href: '#why-us' },
    { name: 'Process', href: '#process' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Active section calculation based on actual DOM position
      const sectionElements = navItems
        .map((item) => {
          const id = item.href.substring(1);
          const el = document.getElementById(id);
          return el ? { id, top: el.offsetTop } : null;
        })
        .filter((x): x is { id: string; top: number } => x !== null)
        .sort((a, b) => a.top - b.top);

      const scrollPosition = window.scrollY + 200;

      for (let i = sectionElements.length - 1; i >= 0; i--) {
        if (sectionElements[i].top <= scrollPosition) {
          setActiveSection(sectionElements[i].id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3.5 shadow-2xl shadow-black/80'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollTo('home');
          }}
          className="flex items-center gap-3 group transition-transform hover:scale-105"
        >
          <FreqStudioLogo height={42} rounded={true} className="border border-[#FFD400]/40 group-hover:border-[#FFD400] group-hover:drop-shadow-[0_0_18px_rgba(255,212,0,0.6)] transition-all" />
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-base sm:text-lg tracking-wider text-white flex items-center gap-1 group-hover:text-[#FFD400] transition-colors leading-tight">
              FREQ <span className="text-[#FFD400]">STUDIO</span>
            </span>
            <span className="text-[10px] font-mono tracking-widest text-zinc-400 uppercase -mt-0.5">
              Production
            </span>
          </div>
        </a>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-1 bg-[#111111]/80 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10 shadow-inner">
          {navItems.map((item) => {
            const sectionId = item.href.substring(1);
            const isActive = activeSection === sectionId;
            return (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(sectionId);
                }}
                className={`relative px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider transition-colors rounded-full ${
                  isActive ? 'text-black font-bold' : 'text-[#CFCFCF] hover:text-white'
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-[#FFD400] rounded-full shadow-[0_0_15px_rgba(255,212,0,0.5)] z-0"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.name}</span>
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollTo('contact');
            }}
            className="relative group inline-flex items-center justify-center gap-1.5 px-5 py-2 rounded-full bg-[#FFD400] hover:bg-[#FFE54D] text-black font-heading font-extrabold text-xs uppercase tracking-wider transition-all duration-300 shadow-[0_0_15px_rgba(255,212,0,0.3)] hover:shadow-[0_0_25px_rgba(255,212,0,0.5)] hover:scale-105"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2.5 rounded-xl bg-[#111111] border border-white/10 text-white hover:text-[#FFD400] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="md:hidden glass-panel border-b border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-4">
              {navItems.map((item) => {
                const sectionId = item.href.substring(1);
                const isActive = activeSection === sectionId;
                return (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollTo(sectionId);
                    }}
                    className={`flex items-center justify-between py-2 text-lg font-heading font-bold uppercase tracking-wide border-b border-white/5 transition-colors ${
                      isActive ? 'text-[#FFD400]' : 'text-[#CFCFCF] hover:text-white'
                    }`}
                  >
                    <span>{item.name}</span>
                    <ArrowUpRight className="w-4 h-4 opacity-50" />
                  </a>
                );
              })}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollTo('contact');
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-[#FFD400] text-black font-heading font-extrabold text-sm uppercase tracking-wider shadow-[0_0_20px_rgba(255,212,0,0.4)]"
                >
                  <span>Start Your Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
