import React, { useState } from 'react';
import { X, Calculator, Check, Mail, MessageCircle, Copy, ExternalLink, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ProjectCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onBookCall: (data: any) => void;
}

export const ProjectCalculatorModal: React.FC<ProjectCalculatorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [videoType, setVideoType] = useState('youtube');
  const [quantity, setQuantity] = useState(4);
  const [speed, setSpeed] = useState('standard');
  const [addons, setAddons] = useState<string[]>(['thumbnail', 'script']);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  // Pricing calculation logic
  const typeBasePrices: Record<string, number> = {
    youtube: 30,
    reels: 30,
    commercial: 1200,
    motion3d: 950,
    ads: 450,
  };

  const typeLabels: Record<string, string> = {
    youtube: 'YouTube Long-Form (16:9)',
    reels: 'Reels / TikTok Shorts (9:16)',
    commercial: 'Brand Commercial & Film (4K)',
    motion3d: '3D Motion Graphics & VFX',
    ads: 'Direct Response Video Ads',
  };

  const speedMultiplier: Record<string, number> = {
    standard: 1,
    express: 1.25,
    rush: 1.5,
  };

  const addonPrices: Record<string, number> = {
    thumbnail: 5,
    script: 8,
    colorPass: 200,
    sourceFiles: 100,
  };

  const addonLabels: Record<string, string> = {
    thumbnail: 'Custom High-CTR Thumbnail',
    script: 'Hook Scripting & Outline',
  };

  const baseUnitPrice = typeBasePrices[videoType] || 300;
  const multiplier = speedMultiplier[speed] || 1;
  const addonsTotal = addons.reduce((sum, key) => sum + (addonPrices[key] || 0), 0);
  const estimatedTotal = Math.round((baseUnitPrice * quantity * multiplier) + addonsTotal);

  const toggleAddon = (key: string) => {
    if (addons.includes(key)) {
      setAddons(addons.filter((a) => a !== key));
    } else {
      setAddons([...addons, key]);
    }
  };

  const emailSubject = `Project Estimate: ${typeLabels[videoType]} - $${estimatedTotal.toLocaleString()}`;
  const selectedAddonsText = addons.length > 0 ? addons.map((a) => addonLabels[a] || a).join(', ') : 'None';
  
  const estimateSummaryText = `Hi Freq Studio,

Here is my video project scope from the online estimator:

- Video Type: ${typeLabels[videoType]}
- Quantity: ${quantity} Video(s)
- Delivery SLA: ${speed.toUpperCase()} Turnaround
- Add-ons: ${selectedAddonsText}
- Calculated Estimate: $${estimatedTotal.toLocaleString()}

Please get back to me to discuss kickoff!`;

  const mailtoUrl = `mailto:freqstudio007@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(estimateSummaryText)}`;
  const whatsappUrl = `https://wa.me/919574187934?text=${encodeURIComponent(`Hi Freq Studio! I configured a video project estimate:\n\nType: ${typeLabels[videoType]}\nQuantity: ${quantity}\nAdd-ons: ${selectedAddonsText}\nEstimate: $${estimatedTotal.toLocaleString()}`)}`;

  const handleCopySummary = () => {
    navigator.clipboard.writeText(estimateSummaryText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

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
          className="relative z-10 w-full max-w-3xl bg-[#0B0B0B] border border-white/10 rounded-3xl overflow-hidden shadow-2xl shadow-black/90 flex flex-col"
        >
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 bg-[#111111]">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-[#FFD400]/10 text-[#FFD400]">
                <Calculator className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-heading font-extrabold text-xl text-white">
                  Interactive Scope & Budget Calculator
                </h3>
                <p className="text-xs text-[#8F8F8F]">
                  Configure your video specifications for real-time investment calculation
                </p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-[#FFD400] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="p-6 sm:p-8 space-y-6 overflow-y-auto max-h-[80vh]">
            {/* 1. Video Type Selection */}
            <div>
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#CFCFCF] mb-3">
                1. Select Video Content Format
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {[
                  { id: 'youtube', label: 'YouTube Long-Form', sub: '16:9 • Retention Edit' },
                  { id: 'reels', label: 'Reels / Shorts', sub: '9:16 • Viral Short' },
                  { id: 'commercial', label: 'Brand Commercial', sub: '4K • Broadcast Grade' },
                  { id: 'motion3d', label: '3D Motion Graphics', sub: 'Blender & C4D' },
                  { id: 'ads', label: 'Direct Response Ads', sub: 'High ROAS Campaign' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setVideoType(item.id)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      videoType === item.id
                        ? 'bg-[#FFD400]/10 border-[#FFD400] shadow-[0_0_15px_rgba(255,212,0,0.2)]'
                        : 'bg-[#111111] border-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className={`font-heading font-bold text-xs ${videoType === item.id ? 'text-[#FFD400]' : 'text-white'}`}>
                      {item.label}
                    </div>
                    <div className="text-[10px] text-[#8F8F8F] mt-0.5">{item.sub}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Quantity Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-heading font-bold uppercase tracking-wider text-[#CFCFCF]">
                  2. Quantity of Videos
                </label>
                <span className="font-heading font-extrabold text-lg text-[#FFD400]">
                  {quantity} {quantity === 1 ? 'Video' : 'Videos'}
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="20"
                value={quantity}
                onChange={(e) => setQuantity(parseInt(e.target.value))}
                className="w-full accent-[#FFD400] bg-[#111111] h-2 rounded-lg cursor-pointer"
              />
            </div>

            {/* 3. Turnaround Speed */}
            <div>
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#CFCFCF] mb-3">
                3. Delivery Turnaround SLA
              </label>
              <div className="grid grid-cols-3 gap-3">
                {[
                  { id: 'standard', title: 'Standard SLA', time: '48-72 Hours' },
                  { id: 'express', title: 'Express SLA', time: '24-48 Hours' },
                  { id: 'rush', title: 'Super Rush', time: '12-24 Hours' },
                ].map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSpeed(s.id)}
                    className={`p-3 rounded-xl border text-center transition-all ${
                      speed === s.id
                        ? 'bg-[#FFD400]/10 border-[#FFD400] text-white'
                        : 'bg-[#111111] border-white/5 text-[#8F8F8F] hover:border-white/20'
                    }`}
                  >
                    <div className="font-heading font-bold text-xs">{s.title}</div>
                    <div className="text-[10px] text-[#FFD400] mt-0.5">{s.time}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* 4. Addons */}
            <div>
              <label className="block text-xs font-heading font-bold uppercase tracking-wider text-[#CFCFCF] mb-3">
                4. Optional Value Add-ons
              </label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { id: 'thumbnail', label: 'High-CTR Custom Thumbnail', price: '+$5/ea' },
                  { id: 'script', label: 'Hook Scripting & Outline', price: '+$8' },
                ].map((addon) => {
                  const isChecked = addons.includes(addon.id);
                  return (
                    <button
                      key={addon.id}
                      type="button"
                      onClick={() => toggleAddon(addon.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-left transition-all ${
                        isChecked
                          ? 'bg-[#FFD400]/15 border-[#FFD400] text-white'
                          : 'bg-[#111111] border-white/5 text-[#8F8F8F]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        <div className={`w-4 h-4 rounded flex items-center justify-center border ${isChecked ? 'bg-[#FFD400] border-[#FFD400] text-black' : 'border-white/20'}`}>
                          {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                        </div>
                        <span className="text-xs font-medium text-white">{addon.label}</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#FFD400]">{addon.price}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Estimate Summary Banner */}
            <div className="p-6 rounded-2xl bg-[#111111] border border-[#FFD400]/40 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-[0_0_30px_rgba(255,212,0,0.1)]">
              <div>
                <div className="text-xs text-[#8F8F8F] uppercase tracking-wider font-mono flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-[#FFD400]" />
                  <span>Estimated Total Budget</span>
                </div>
                <div className="text-4xl font-heading font-black text-[#FFD400] mt-1">
                  ${estimatedTotal.toLocaleString()}
                </div>
                <div className="text-xs text-[#CFCFCF] mt-1">
                  Includes full sound design, motion graphics, DaVinci grade & unlimited revisions.
                </div>
              </div>

              <button
                onClick={handleCopySummary}
                className="px-4 py-2.5 rounded-xl bg-[#181818] border border-white/10 hover:border-[#FFD400]/40 text-xs font-mono text-[#CFCFCF] hover:text-[#FFD400] transition-colors flex items-center gap-2 self-stretch sm:self-auto justify-center"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#FFD400]" />
                    <span className="text-[#FFD400]">Scope Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Copy Breakdown</span>
                  </>
                )}
              </button>
            </div>

            {/* Direct Action Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a
                href={mailtoUrl}
                className="py-4 px-6 rounded-xl bg-[#FFD400] hover:bg-[#FFE54D] text-black font-heading font-extrabold text-xs uppercase tracking-wider transition-all shadow-[0_0_25px_rgba(255,212,0,0.3)] flex items-center justify-center gap-2 hover:scale-[1.01]"
              >
                <Mail className="w-4 h-4" />
                <span>Email Scope (freqstudio007@gmail.com)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>

              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-4 px-6 rounded-xl bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/50 text-[#25D366] font-heading font-extrabold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp (+91 95741 87934)</span>
              </a>
            </div>

            <div className="text-center pt-2">
              <button
                onClick={onClose}
                className="text-xs text-[#8F8F8F] hover:text-white transition-colors uppercase font-mono"
              >
                Close Calculator
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
