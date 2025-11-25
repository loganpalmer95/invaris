import React from 'react';
import { palette } from '../theme/palette';

export const Logo = ({ size = 70 }) => {
  const scrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <a 
      href="#" 
      onClick={scrollToTop}
      className="flex items-center shrink-0 cursor-pointer hover:opacity-90 transition-opacity" 
      style={{ marginLeft: 0, paddingLeft: 0, lineHeight: 0, textDecoration: 'none' }}
    >
      <img
        src="/logo.png"
        alt="Invaris logo"
        className="shrink-0 w-14 h-14 md:w-[70px] md:h-[70px] -mr-[22px] -ml-[22px] -mt-[22px] -mb-[22px] md:-mr-[28px] md:-ml-[28px] md:-mt-[28px] md:-mb-[28px]"
        style={{ 
          padding: 0, 
          display: 'block',
          verticalAlign: 'top'
        }}
      />
      <span className="text-base md:text-xl tracking-[0.14em] font-semibold" style={{ color: palette.offWhite }}>NVARIS</span>
    </a>
  );
};
