import React from 'react';
import { palette } from '../theme/palette';

export const Logo = ({ size = 28 }) => (
  <div className="flex items-center gap-3">
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      className="shrink-0"
    >
      {/* Gold stylized "I" with subtle star */}
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={palette.gold} />
          <stop offset="100%" stopColor="#b08b2d" />
        </linearGradient>
      </defs>
      <rect x="26" y="10" width="12" height="44" rx="2" fill="url(#g)" />
      <path
        d="M30 12 C18 20, 18 44, 30 52"
        fill="none"
        stroke="url(#g)"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M34 12 C46 20, 46 44, 34 52"
        fill="none"
        stroke="url(#g)"
        strokeWidth="3.5"
        strokeLinecap="round"
      />
      <path d="M44 10 l3 6 l6 3 l-6 3 l-3 6 l-3-6 l-6-3 l6-3 z" fill="url(#g)" />
    </svg>
    <span className="text-xl tracking-[0.14em] font-semibold" style={{ color: palette.offWhite }}>NVARIS</span>
  </div>
);
