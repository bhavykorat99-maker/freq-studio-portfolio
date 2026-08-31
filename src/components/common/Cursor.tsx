import React, { useEffect, useState } from 'react';

export const Cursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.classList.contains('interactive-hover')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <>
      {/* Outer Glow Ring */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] transition-transform duration-100 ease-out hidden lg:block"
        style={{
          transform: `translate3d(${position.x - (isHovered ? 30 : 20)}px, ${position.y - (isHovered ? 30 : 20)}px, 0)`,
          width: isHovered ? '60px' : '40px',
          height: isHovered ? '60px' : '40px',
        }}
      >
        <div className={`w-full h-full rounded-full border border-[#FFD400]/60 transition-all duration-300 ${isHovered ? 'bg-[#FFD400]/15 scale-110 shadow-[0_0_20px_rgba(255,212,0,0.5)]' : 'bg-transparent'}`} />
      </div>

      {/* Inner Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[10000] transition-transform duration-75 ease-out hidden lg:block"
        style={{
          transform: `translate3d(${position.x - 4}px, ${position.y - 4}px, 0)`,
        }}
      >
        <div className={`w-2 h-2 rounded-full bg-[#FFD400] shadow-[0_0_10px_#FFD400] transition-transform duration-200 ${isHovered ? 'scale-150' : 'scale-100'}`} />
      </div>
    </>
  );
};
