import React, { useState } from 'react';
import officialLogoImg from '../../assets/images/freq_studio_brand_logo.jpg';

interface FreqStudioLogoProps {
  className?: string;
  variant?: 'full' | 'mark';
  height?: number | string;
  alt?: string;
  rounded?: boolean;
}

export const FreqStudioLogo: React.FC<FreqStudioLogoProps> = ({
  className = '',
  height = 42,
  alt = 'FREQ STUDIO Official Logo',
  rounded = false,
}) => {
  const [imgSrc, setImgSrc] = useState<string>(officialLogoImg);
  const numericHeight = typeof height === 'number' ? height : parseInt(height as string, 10) || 42;

  const handleImgError = () => {
    if (imgSrc !== '/assets/freq_studio_logo.jpg') {
      setImgSrc('/assets/freq_studio_logo.jpg');
    }
  };

  if (rounded) {
    return (
      <div
        className={`inline-flex items-center justify-center select-none overflow-hidden rounded-full aspect-square bg-[#050505] p-0.5 transition-all duration-300 ${className}`}
        style={{ height: numericHeight, width: numericHeight, minWidth: numericHeight }}
      >
        <img
          src={imgSrc}
          alt={alt}
          onError={handleImgError}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover rounded-full select-none pointer-events-none transition-transform duration-300 group-hover:scale-105"
        />
      </div>
    );
  }

  return (
    <div
      className={`inline-flex items-center justify-center select-none ${className}`}
      style={{ height: numericHeight }}
    >
      <img
        src={imgSrc}
        alt={alt}
        onError={handleImgError}
        referrerPolicy="no-referrer"
        style={{ height: numericHeight, width: 'auto' }}
        className="max-h-full w-auto object-contain mix-blend-screen select-none pointer-events-none transition-all duration-300 drop-shadow-[0_0_12px_rgba(255,212,0,0.35)]"
      />
    </div>
  );
};


