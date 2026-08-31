export type Category = string;

export interface Project {
  id: string;
  title: string;
  client: string;
  category: Category;
  thumbnail: string;
  videoUrl: string;
  aspectRatio: '16:9' | '9:16' | '4:3';
  views: string;
  retention: string;
  duration: string;
  description: string;
  software: string[];
  tags: string[];
  featured?: boolean;
}

export interface Service {
  id: string;
  iconName: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  deliverables: string[];
  software: string[];
  turnaround: string;
  badge?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  country: string;
  flagEmoji: string;
  avatar: string;
  rating: number;
  quote: string;
  projectType: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  description: string;
  popular?: boolean;
  features: string[];
  ctaText: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

export interface StatItem {
  value: number;
  suffix: string;
  label: string;
  sublabel: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  details: string[];
}

export interface BeforeAfterPreset {
  id: string;
  name: string;
  description: string;
  beforeImg: string;
  afterImg: string;
  rawStats: string;
  freqStats: string;
}
