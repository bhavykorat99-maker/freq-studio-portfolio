import React, { useState } from 'react';
import { Preloader } from './components/common/Preloader';
import { ScrollProgress } from './components/common/ScrollProgress';
import { Cursor } from './components/common/Cursor';
import { Navbar } from './components/common/Navbar';
import { Footer } from './components/common/Footer';
import { ScrollToTop } from './components/common/ScrollToTop';
import { VideoLightboxModal } from './components/common/VideoLightboxModal';
import { ProjectCalculatorModal } from './components/common/ProjectCalculatorModal';

import { HeroSection } from './components/sections/HeroSection';
import { TrustedClients } from './components/sections/TrustedClients';
import { ServicesSection } from './components/sections/ServicesSection';
import { FeaturedPortfolio } from './components/sections/FeaturedPortfolio';
import { BeforeAfterSection } from './components/sections/BeforeAfterSection';
import { AgencyStats } from './components/sections/AgencyStats';
import { WhyChooseUs } from './components/sections/WhyChooseUs';
import { ProcessSection } from './components/sections/ProcessSection';
import { TestimonialsSection } from './components/sections/TestimonialsSection';
import { FAQSection } from './components/sections/FAQSection';
import { ContactSection } from './components/sections/ContactSection';

import { Project } from './types';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [preselectedPlan, setPreselectedPlan] = useState<string | undefined>(undefined);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStartProject = () => {
    scrollToSection('contact');
  };

  const handleSelectPlan = (planName: string) => {
    setPreselectedPlan(planName);
    scrollToSection('contact');
  };

  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-[#FFD400] selection:text-black antialiased relative overflow-x-hidden font-sans">
      {/* Loading Screen */}
      {loading && <Preloader onComplete={() => setLoading(false)} />}

      {/* Custom Cursor & Scroll Progress */}
      <Cursor />
      <ScrollProgress />

      {/* Sticky Navigation */}
      <Navbar />

      {/* Main Page Layout Flow */}
      <main>
        {/* Hero Section */}
        <HeroSection
          onStartProject={handleStartProject}
          onViewWork={() => scrollToSection('portfolio')}
        />

        {/* Trusted Clients Marquee */}
        <TrustedClients />

        {/* Agency Services */}
        <ServicesSection onStartProject={handleStartProject} />

        {/* Featured Portfolio */}
        <FeaturedPortfolio onSelectProject={(project) => setSelectedProject(project)} />

        {/* Before & After Interactive Slider */}
        <BeforeAfterSection />

        {/* Agency Statistics */}
        <AgencyStats />

        {/* Why Choose Us */}
        <WhyChooseUs />

        {/* Our 5-Step Process */}
        <ProcessSection />

        {/* Testimonials */}
        <TestimonialsSection />

        {/* FAQ */}
        <FAQSection />

        {/* Contact Information & Channels */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Scroll To Top */}
      <ScrollToTop />

      {/* Video Lightbox Modal */}
      <VideoLightboxModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProject={() => {
          setSelectedProject(null);
          handleStartProject();
        }}
      />

      {/* Interactive Project Estimator Modal */}
      <ProjectCalculatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onBookCall={(data) => {
          setIsEstimatorOpen(false);
          setPreselectedPlan(`Custom Estimate ($${data.estimatedTotal})`);
          scrollToSection('contact');
        }}
      />
    </div>
  );
}
