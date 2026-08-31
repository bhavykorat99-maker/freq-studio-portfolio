import { Project, Service, Testimonial, PricingPlan, FAQItem, StatItem, ProcessStep, BeforeAfterPreset } from '../types';

export const CLIENT_LOGOS = [
  { name: 'YouTube', icon: 'Youtube', label: '100M+ Views Partner' },
  { name: 'Instagram', icon: 'Instagram', label: 'Meta Verified Agency' },
  { name: 'Meta', icon: 'Share2', label: 'Ad Tech Specialist' },
  { name: 'Adobe', icon: 'Layers', label: 'Certified Enterprise' },
  { name: 'CapCut Pro', icon: 'Zap', label: 'Pro Effects & AI Ramping' },
  { name: 'Netflix', icon: 'Tv', label: 'Documentary Grade' },
  { name: 'Google', icon: 'Globe', label: 'Creator Accelerator' },
  { name: 'Apple', icon: 'Smartphone', label: 'Pro Editorial' }
];

export const AGENCY_STATS: StatItem[] = [
  { value: 300, suffix: '+', label: 'Projects Completed', sublabel: 'High-Converting Video Assets' },
  { value: 120, suffix: '+', label: 'Happy Clients', sublabel: 'Global Founders & Creators' },
  { value: 10, suffix: 'M+', label: 'Views Generated', sublabel: 'Across YouTube, TikTok & Meta' },
  { value: 4, suffix: '+', label: 'Years Experience', sublabel: 'Relentless Creative Excellence' }
];

export const SERVICES_DATA: Service[] = [
  {
    id: 'video-editing',
    iconName: 'Film',
    title: 'Professional Video Editing',
    shortDesc: 'Pacing, seamless cuts, sound design, and storytelling tuned to maximize viewer retention.',
    fullDesc: 'We craft high-octane narrative arcs from your raw footage. Utilizing kinetic typography, L-cuts, sound layering, and visual hooks, we turn viewers into loyal followers.',
    features: ['Retention-Driven Pacing', 'Audio Mastering', 'Dynamic Sound Effects', 'Subtitles & Kinetic Captions'],
    deliverables: ['Master 4K File', 'Social Cutdowns (9:16)', 'Thumbnail Graphic', 'Project Timelines'],
    software: ['Adobe Premiere Pro', 'CapCut Pro', 'After Effects'],
    turnaround: '3-4 Days',
    badge: 'Most Popular'
  },
  {
    id: 'motion-graphics',
    iconName: 'Sparkles',
    title: 'Motion Graphics',
    shortDesc: 'Custom 2D/3D visual animations, lower thirds, UI callouts, and kinetic title graphics.',
    fullDesc: 'Elevate your content beyond simple cuts. We engineer custom 3D element renders, procedural graphic transitions, and branded overlays that give your channel a $10M network vibe.',
    features: ['3D Element Rendering', 'Custom Compositing', 'Animated Lower Thirds', 'Interactive Graphic Callouts'],
    deliverables: ['Custom MOGRT Templates', 'ProRes 4444 Alpha Files', 'Sound Effect Layering'],
    software: ['After Effects', 'Canva'],
    turnaround: '3 - 5 Days'
  },
  {
    id: 'ad-videos',
    iconName: 'TrendingUp',
    title: 'Advertisement Videos',
    shortDesc: 'Direct-response video ads for Meta, TikTok, and YouTube engineered for high ROAS and conversions.',
    fullDesc: 'Hook-driven ads optimized for modern attention spans. We combine psychology-backed visual hooks, clear CTA framing, and rapid A/B testing variations to lower CAC and multiply sales.',
    features: ['Psychology-Backed Hooks', 'Multi-Hook Variation Testing', 'Native UGC & Scripting', 'High-Converting CTA Design'],
    deliverables: ['5 Hook Variations', 'Primary Ad Master', '1x1, 9:16, 16:9 Ratios'],
    software: ['Premiere Pro', 'After Effects', 'CapCut Pro'],
    turnaround: '48 Hours',
    badge: 'High ROAS'
  },
  {
    id: 'reels-shorts',
    iconName: 'Smartphone',
    title: 'Instagram Reels & Shorts',
    shortDesc: 'Ultra-engaging vertical short-form content designed to go viral with CapCut Pro effects and speed ramps.',
    fullDesc: 'Short-form content requires split-second retention triggers. We leverage CapCut Pro Effects, speed ramping, kinetic captions, sound effects, meme inserts, and 3D transitions that hold attention from second 1 to 30.',
    features: ['CapCut Pro Keyframe Effects', 'Kinetic Auto-Captions', 'Pattern Interrupt SFX', 'Speed Ramping & Transitions'],
    deliverables: ['1080x1920 60FPS Video', 'Custom Cover Art', 'CapCut Pro Preset File'],
    software: ['CapCut Pro', 'Premiere Pro', 'Descript', 'After Effects'],
    turnaround: '24 Hours',
    badge: 'Trending Viral'
  },
  {
    id: 'youtube-longform',
    iconName: 'PlaySquare',
    title: 'YouTube Long-Form Videos',
    shortDesc: 'End-to-end editing for high-profile YouTubers with custom pacing, graphics, and CTR thumbnails.',
    fullDesc: 'Transform hour-long footage into high-retention cinematic masterpieces. We organize multi-cam angles, integrate relevant B-roll, write custom motion soundscapes, and keep average view duration high.',
    features: ['Multi-Cam Synchronization', 'Custom B-Roll Sourcing', 'Retention Curve Optimization', 'Chapter Marker & Metadata'],
    deliverables: ['4K Ultra HD Export', 'High CTR Thumbnail', 'Custom SFX Track'],
    software: ['Premiere Pro', 'DaVinci Resolve', 'Photoshop'],
    turnaround: '3 - 4 Days',
    badge: 'Creator Top Choice'
  },
  {
    id: 'color-grading',
    iconName: 'Palette',
    title: 'Cinematic Color Grading',
    shortDesc: 'Hollywood-level color matching, skin tone correction, LUT creation, and mood enhancement.',
    fullDesc: 'Color gives videos their soul. We perform node-based color correction in DaVinci Resolve, balancing skin tones, matching disparate camera sensors, and sculpting cinematic contrast.',
    features: ['Node-Based Color Correction', 'Custom LUT Development', 'Skin Tone Perfection', 'Camera Sensor Matching'],
    deliverables: ['Color Graded Master', 'Custom Brand LUTs (.cube)', 'Color Breakdown Video'],
    software: ['CapCut Pro', 'Adobe After Effects'],
    turnaround: '24 - 48 Hours'
  },
  {
    id: 'brand-commercials',
    iconName: 'Award',
    title: 'Brand Commercials',
    shortDesc: 'Cinematic brand films and product showcases crafted for TV, web, and billboard placements.',
    fullDesc: 'Tell your company story with cinematic majesty. From script visualization and sound design to 4K color mastering, we craft brand films that establish authority and inspire trust.',
    features: ['Cinematic Storyboarding', 'Broadcast Audio Mix (-24 LUFS)', '3D Product Rendering', 'High-End Compositing'],
    deliverables: ['Full Broadcast Master', 'ProRes 422 HQ', 'Social Teaser Trailer'],
    software: ['After Effects', 'CapCut Pro'],
    turnaround: '5 - 7 Days'
  },
  {
    id: 'podcast-editing',
    iconName: 'Mic',
    title: 'Podcast Editing & SFX',
    shortDesc: 'Multi-camera podcast cuts, audio noise cleanup, speaker switching, and social snippet creation.',
    fullDesc: 'Polished audio and active speaker camera switches. We clean up room noise, eliminate filler words, add animated guest titles, and extract 3-5 viral short clips from every episode.',
    features: ['Auto-Speaker Switching', 'AI Noise Isolation', 'Audio EQ & Compression', 'Viral Clip Extraction'],
    deliverables: ['Full Length Episode', '3x Vertical Short Clips', 'Isolated Audio Stems'],
    software: ['iZotope RX 10', 'Premiere Pro', 'Adobe Audition'],
    turnaround: '72 Hours - 96 Hours'
  },
  {
    id: 'video-shoot',
    iconName: 'Video',
    title: 'Creative Video Shoot',
    shortDesc: 'On-location or in-studio creative direction, multi-cam 4K capture, and lighting setups.',
    fullDesc: 'Need hands-on filming? Our global network of directors and DP specialists provide full 4K cinema camera production, lighting rigs, audio capture, and live client feedback monitoring.',
    features: ['4K Cinema Camera Rigging', 'Aputure Pro Lighting Setup', 'Sennheiser Wireless Audio', 'On-Set Director & Crew'],
    deliverables: ['Raw Uncompressed LOG Footage', 'On-Set proxies', 'Full Production Log'],
    software: ['RED Digital Cinema', 'I-Phone 14 Pro', 'Oppo Reno 14 Pro'],
    turnaround: 'Scheduled Shoots'
  },
  {
    id: 'social-management',
    iconName: 'Share2',
    title: 'Social Media Strategy',
    shortDesc: 'Full content calendar, publishing strategy, thumbnail design, and organic growth engineering.',
    fullDesc: 'We don\'t just edit — we engineer content distribution strategies. We analyze audience analytics, spot trending soundscapes, optimize upload schedules, and scale your reach exponentially.',
    features: ['Monthly Content Calendar', 'CTR-Optimized Thumbnail Design', 'A/B Title Testing', 'Algorithm Optimization'],
    deliverables: ['Monthly Strategy Deck', 'Custom Thumbnail Pack', 'Performance Analytics Report'],
    software: ['CapCut Pro', 'Photoshop', 'Instagram Analytics', 'YouTube Analytics'],
    turnaround: 'Monthly Retainer'
  }
];

export const PROJECTS_DATA: Project[] = [
  {
    id: 'p1',
    title: 'Traveling Reel',
    client: 'Instagram User',
    category: 'Travel',
    thumbnail: 'https://img.youtube.com/vi/7f5q4Hqul3U/maxresdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/7f5q4Hqul3U?si=Qd2Z9_V7MsyVWbFp',
    aspectRatio: '9:16',
    views: '124.5K+',
    retention: '88%',
    duration: '00:35',
    description: 'A breathtaking cinematic travel reel capturing scenic landscapes, vibrant cultural moments, dynamic speed ramping, and seamless color-graded transitions.',
    software: ['Premiere Pro', 'DaVinci Resolve', 'CapCut Pro'],
    tags: ['Travel', 'Wanderlust', 'Reel', 'Explore'],
    featured: true
  },
  {
    id: 'p2',
    title: 'Real Estate Video Editing',
    client: 'Instagram User',
    category: 'Commercial',
    thumbnail: 'https://img.youtube.com/vi/SRDWqcBlW-Q/maxresdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/SRDWqcBlW-Q?si=-SFvzxizc85rJHi4',
    aspectRatio: '9:16',
    views: '54.9K+',
    retention: '72%',
    duration: '00:29',
    description: 'Sleek luxury real estate walkthrough reel featuring smooth speed ramps, sky replacements, interior ambient lighting enhancements, and immersive property tour transitions.',
    software: ['Premiere Pro', 'Photoshop', 'After Effects', 'CapCut Pro'],
    tags: ['Real Estate', 'Commercial', 'Property Tour', 'Luxury Living', 'Reel'],
    featured: true
  },
  {
    id: 'p3',
    title: 'Dubai Life',
    client: 'Instagram User',
    category: 'Dubai',
    thumbnail: 'https://img.youtube.com/vi/lq8IysnlHlY/maxresdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/lq8IysnlHlY?si=M81YZ74tG92_dMDN',
    aspectRatio: '9:16',
    views: '1M+',
    retention: '89%',
    duration: '00:09',
    description: 'High-energy cinematic Dubai luxury lifestyle reel featuring ultra-smooth speed ramping, custom color grading, immersive sound design, and viral short-form pacing.',
    software: ['Premiere Pro', 'After Effects', 'CapCut Pro', 'DaVinci Resolve'],
    tags: ['Dubai Life', 'Luxury Reel', 'Cinematic Edit', 'Reel'],
    featured: true
  },
  {
    id: 'p4',
    title: 'MFZ Gym Reel 1',
    client: 'MFZ Gym',
    category: 'Ads',
    thumbnail: 'https://img.youtube.com/vi/pXk1xDYIxaI/maxresdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/pXk1xDYIxaI?si=haPGILpH7HeWlGlU',
    aspectRatio: '9:16',
    views: '54.3K+',
    retention: '94%',
    duration: '00:19',
    description: 'High-intensity cinematic gym edit featuring MFZ Gym state-of-the-art workout facilities, heavy dumbbell sets, cable rows, and bodybuilder physique posing with dynamic sound design.',
    software: ['CapCut Pro', 'Premiere Pro'],
    tags: ['MFZ Gym', 'Fitness Reel', 'Speed Ramps']
  },
  {
    id: 'p5',
    title: 'Cinematic Car Reel',
    client: 'Car',
    category: 'Reels',
    thumbnail: 'https://img.youtube.com/vi/HAMYO9vZKp0/maxresdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/HAMYO9vZKp0?si=EuiAD7blANEps1aS',
    aspectRatio: '9:16',
    views: '78.9K+',
    retention: '84%',
    duration: '00:26',
    description: 'High-octane cinematic supercar edit featuring dynamic automotive transitions, roaring engine sound design, and sleek speed ramps.',
    software: ['CapCut Pro', 'Premiere Pro', 'After Effects'],
    tags: ['Car', 'Automotive', 'Indiancar', 'Speed Ramps']
  },
  {
    id: 'p6',
    title: 'Commercial reel for clothing website',
    client: 'ANCHORPOOAJODI',
    category: 'Commercial',
    thumbnail: 'https://img.youtube.com/vi/gkJk3OP_7bc/maxresdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/gkJk3OP_7bc?si=y8Y_k7UhV8YuElJT',
    aspectRatio: '9:16',
    views: '54.3K+',
    retention: '96%',
    duration: '00:19',
    description: 'High-energy commercial reel for ANCHORPOOAJODI clothing website featuring trendsetting fashion, stylish outfits, and dynamic visual transitions.',
    software: ['CapCut Pro', 'Premiere Pro'],
    tags: ['ANCHORPOOAJODI', 'Commercial', 'Fashion Reel', 'Clothing Website']
  },
  {
    id: 'p7',
    title: 'Turning Machinery Into Cinematic Content!',
    client: 'Industrial & Machinery',
    category: 'Commercial',
    thumbnail: 'https://img.youtube.com/vi/pKdB-Ck5xWQ/maxresdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/pKdB-Ck5xWQ?si=fitWH8456bDJTHdd',
    aspectRatio: '9:16',
    views: '88.4K+',
    retention: '81%',
    duration: '00:33',
    description: 'Cinematic machinery edit bringing industrial equipment to life with high-impact cuts, sound design, and speed ramps.',
    software: ['DaVinci Resolve Studio', 'Premiere Pro', 'CapCut Pro'],
    tags: ['Machinery', 'Industrial', 'Cinematic', 'Reel']
  },
  {
    id: 'p8',
    title: 'Festival Reel',
    client: 'Instagram User',
    category: 'Festival',
    thumbnail: 'https://img.youtube.com/vi/iSctdZJ0cKM/maxresdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/iSctdZJ0cKM?si=4bXpa6k2gSfEUL0r',
    aspectRatio: '9:16',
    views: '54.6K+',
    retention: '86%',
    duration: '00:31',
    description: 'Vibrant festival reel celebrating Navarati culture with energetic cuts, traditional aesthetics, and dynamic visual transitions.',
    software: ['After Effects', 'Illustrator', 'CapCut Pro'],
    tags: ['Festival', 'Culture', 'Navarati', 'Reel']
  },
  {
    id: 'p9',
    title: 'Influencer',
    client: 'Content Creator',
    category: 'Influencer',
    thumbnail: 'https://img.youtube.com/vi/K1BEvGh9NnA/maxresdefault.jpg',
    videoUrl: 'https://youtube.com/shorts/K1BEvGh9NnA?si=d5pS2uIA4NZ-bQnf',
    aspectRatio: '9:16',
    views: '95.2K+',
    retention: '91%',
    duration: '01:01',
    description: 'High-engagement viral influencer reel featuring dynamic speed ramping, stylized kinetic typography, seamless sound design, and trend-focused pacing.',
    software: ['CapCut Pro', 'Premiere Pro', 'After Effects'],
    tags: ['Influencer', 'Viral Reel', 'Shorts', 'Creator Edit', 'Trending'],
    featured: true
  }
];

export const BEFORE_AFTER_PRESETS: BeforeAfterPreset[] = [
  {
    id: 'preset-1',
    name: 'Tech Commercial Grade',
    description: 'Flat LOG Camera Raw vs Freq Studio DaVinci Resolve Node Color, Sound Design & Motion VFX.',
    beforeImg: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80&sat=-80&con=-30',
    afterImg: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80',
    rawStats: 'Flat Sony S-Log3 • Dull Audio • No Graphics',
    freqStats: 'Rec.709 Hollywood LUT • 3D SFX • Kinetic HUD'
  },
  {
    id: 'preset-2',
    name: 'YouTube Retention Vlog',
    description: 'Static uncut webcam capture vs High-retention dynamic edit with zoom ramps, B-roll, and SFX.',
    beforeImg: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80&sat=-90',
    afterImg: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    rawStats: '15% Average View Duration • Uncut Silence',
    freqStats: '78% Average View Duration • Pattern Interrupts'
  },
  {
    id: 'preset-3',
    name: 'High-ROAS Social Ad',
    description: 'Boring phone video vs Ultra-engaging ad with dynamic hooks, kinetic subtitles, and glowing callouts.',
    beforeImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80&sat=-100',
    afterImg: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1200&q=80',
    rawStats: '1.1x ROAS • High Drop-Off at Sec 2',
    freqStats: '4.8x ROAS • 92% Hook Retention Rate'
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    name: 'David Vance',
    role: 'Founder & CEO',
    company: 'Vance Tech Labs',
    country: 'United States',
    flagEmoji: '🇺🇸',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: '"Freq Studio transformed our video strategy completely. Their editing pacing and motion graphics boosted our YouTube retention from 35% to over 72%. They operate like a top-tier Hollywood post-production house."',
    projectType: 'YouTube Long-Form & Commercial Ads'
  },
  {
    id: 't2',
    name: 'Elena Rostova',
    role: 'Head of Marketing',
    company: 'Aura Luxury Apparel',
    country: 'United Kingdom',
    flagEmoji: '🇬🇧',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: '"The color grading and sound design on our brand commercial were breathtaking. Freq Studio delivered 2 days ahead of deadline with zero revisions needed. Unmatched quality and professionalism."',
    projectType: 'Brand Commercial & Color Pass'
  },
  {
    id: 't3',
    name: 'Marcus Chen',
    role: 'Creator (2.4M Subs)',
    company: 'Tech Unboxed',
    country: 'Canada',
    flagEmoji: '🇨🇦',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: '"I went through 5 different video editors before finding Freq Studio. Their attention to sound design, pattern interrupts, and 3D graphics is why my videos consistently cross 1M+ views now."',
    projectType: 'YouTube Content & Short-Form'
  },
  {
    id: 't4',
    name: 'Sofia Martinez',
    role: 'CMO',
    company: 'FinPulse App',
    country: 'Spain',
    flagEmoji: '🇪🇸',
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80',
    rating: 5,
    quote: '"Our TikTok ad CAC dropped by 54% in the first week after deploying Freq Studio’s short-form edits. Their hooks are ridiculously effective. Absolute game changers!"',
    projectType: 'High-ROAS Direct Response Ads'
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'starter',
    name: 'Starter Creator',
    price: '$320',
    period: '/ month',
    description: 'Perfect for ambitious creators and startups looking for consistent, high-converting video content.',
    features: [
      '4x Long-Form YouTube Videos / Month',
      '8x Vertical Short-Form Cuts (Reels/TikTok)',
      'Professional Color Grading & Sound Mix',
      'Motion Graphics & Subtitle Overlay',
      '48-Hour Standard Turnaround',
      '2 Rounds of Revisions per Project',
      'Dedicated Slack Channel'
    ],
    ctaText: 'Start Project'
  },
  {
    id: 'pro',
    name: 'Professional Agency',
    price: '$460',
    period: '/ month',
    popular: true,
    description: 'For scaling brands and top-tier creators requiring top-shelf 3D motion graphics, commercials, and rapid delivery.',
    features: [
      '8x Long-Form YouTube Videos / Month',
      '20x Vertical Short-Form Cuts',
      '2x High-ROAS Commercial Video Ads',
      'Advanced 3D Motion Graphics & VFX',
      'Hollywood Grade DaVinci Color Pass',
      '24-Hour Express Turnaround',
      'Unlimited Revisions',
      'Dedicated Post-Production Lead'
    ],
    ctaText: 'Claim Pro Retainer'
  },
  {
    id: 'enterprise',
    name: 'Custom Enterprise',
    price: '$649',
    period: '/ project or monthly',
    description: 'Bespolke 360° post-production, full commercial filming, multi-cam podcasts, and global brand campaigns.',
    features: [
      'Dedicated Post-Production Team (3 Editors)',
      'On-Location 4K Cinema Camera Filming',
      '3D Product CAD Animations & VFX',
      'Custom Soundtrack Scoring & -24 LUFS Mix',
      'Daily Delivery & Real-Time Sync',
      'Full Source Files (.prproj, .aep, .cube)',
      'Executive Account Manager & NDA'
    ],
    ctaText: 'Schedule Strategy Call'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    category: 'Turnaround',
    question: 'How long does video editing take?',
    answer: 'Standard turnaround for YouTube long-form videos and short-form cuts is 24 to 48 hours. Complex motion graphics or multi-cam commercials take 3 to 5 business days. Express 24-hour turnaround is included in our Professional and Enterprise plans.'
  },
  {
    id: 'faq-2',
    category: 'Software',
    question: 'What professional software do you use?',
    answer: 'We utilize industry-standard software: Adobe Premiere Pro for editing, After Effects & Cinema 4D/Blender for motion graphics and 3D compositing, DaVinci Resolve Studio for node color grading, and iZotope RX 10 for cinema audio mastering.'
  },
  {
    id: 'faq-3',
    category: 'Revisions',
    question: 'Can I request revisions on edits?',
    answer: 'Yes! Starter plans include 2 dedicated rounds of revisions per asset. Professional and Enterprise plans include Unlimited Revisions until you are 100% satisfied with the final cut.'
  },
  {
    id: 'faq-4',
    category: 'Source Files',
    question: 'Do you provide full project source files?',
    answer: 'Absolutely. Upon request or project completion, we can deliver cleaned Premiere Pro (.prproj) files, After Effects project packages (.aep), custom LUTs (.cube), and stems with all assets linked.'
  },
  {
    id: 'faq-5',
    category: 'Payments',
    question: 'How do payments and billing work?',
    answer: 'We accept credit card payments, Stripe, wire transfers, and cryptocurrency. For monthly retainers, billing is upfront on a 30-day cycle with no long-term lock-in. For individual projects, we require a 50% deposit and 50% upon final master approval.'
  },
  {
    id: 'faq-6',
    category: 'Process',
    question: 'How do I transfer large raw video files to Freq Studio?',
    answer: 'We provide dedicated high-speed Frame.io and Google Drive / Dropbox shared folders. You simply drag and drop raw camera footage, brand guides, and assets into your folder, and our system immediately alerts your editor.'
  }
];

export const WHY_CHOOSE_ITEMS = [
  {
    title: 'Lightning Fast Delivery',
    description: 'Never miss an upload schedule. We deliver polished masters within 24 to 48 hours with express turnaround options.',
    icon: 'Zap'
  },
  {
    title: 'Unlimited Revisions',
    description: 'Your vision is paramount. We refine cuts, adjust color grades, and polish motion graphics until you are 100% thrilled.',
    icon: 'Repeat'
  },
  {
    title: 'Professional Color & SFX',
    description: 'Hollywood DaVinci Resolve node color grading combined with broadcast-grade sound design (-24 LUFS).',
    icon: 'Sparkles'
  },
  {
    title: 'Creative Storytelling',
    description: 'We don\'t just cut video — we analyze viewer psychology, retention drop-offs, and hook triggers to keep audiences glued.',
    icon: 'Film'
  },
  {
    title: 'Dedicated Support',
    description: 'A private Slack channel with your assigned senior editor and creative director for instant communication.',
    icon: 'MessageSquare'
  },
  {
    title: 'Global Creator Network',
    description: 'Trusted by 120+ founders, top creators, and tech brands across North America, Europe, Asia, and Australia.',
    icon: 'Globe'
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Book a Call',
    subtitle: 'Discovery & Creative Scope',
    description: 'We hop on a quick 15-minute alignment call or receive your project brief to discuss goals, target audience, style references, and deadline.',
    iconName: 'PhoneCall',
    details: ['Style & Reference Match', 'Tone & Pacing Selection', 'Brand Asset Setup']
  },
  {
    number: '02',
    title: 'Discuss Requirements',
    subtitle: 'Asset Handoff & Brief',
    description: 'Upload your raw camera footage, audio tracks, and brand guides to your private Frame.io workspace. We review scripts and create storyboards.',
    iconName: 'FolderUp',
    details: ['Frame.io High-Speed Sync', 'Footage Audit & Logging', 'Script & Hook Review']
  },
  {
    number: '03',
    title: 'Editing Begins',
    subtitle: 'Post-Production & Magic',
    description: 'Our senior editor cuts the narrative, adds pattern interrupt sound effects, crafts 3D motion graphics, and applies DaVinci color grading.',
    iconName: 'Wand2',
    details: ['Rough Cut Assembly', 'Motion Graphics Injection', 'DaVinci Resolve Grade', 'Audio Mastering']
  },
  {
    number: '04',
    title: 'Review & Polish',
    subtitle: 'Timestamped Revisions',
    description: 'You review the draft directly on Frame.io with frame-accurate timestamped notes. We execute all tweaks promptly.',
    iconName: 'Eye',
    details: ['Timestamp Frame Comments', 'A/B Hook Variations', 'Fine-Tuning SFX']
  },
  {
    number: '05',
    title: 'Final Delivery',
    subtitle: '4K Export & Launch',
    description: 'Receive your master 4K 60FPS video files in multi-aspect ratios, thumbnail graphics, caption files, and ready-to-publish assets.',
    iconName: 'CheckCircle2',
    details: ['Master 4K/60fps Files', 'Social Cutdowns (9:16)', 'CTR Thumbnail Pack']
  }
];
