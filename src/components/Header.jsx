import React from 'react';
import { Logo } from './Logo';
import { Section } from './Section';
import { palette } from '../theme/palette';

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/5 bg-white/0 border-b border-white/10">
      <Section className="flex items-center justify-between py-4">
        <Logo />
        <nav className="hidden md:flex items-center gap-8 text-sm">
          <a className="hover:opacity-90" href="#services">Services</a>
          <a className="hover:opacity-90" href="#process">Process</a>
          <a className="hover:opacity-90" href="#work">Work</a>
          <a className="hover:opacity-90" href="#contact">Contact</a>
        </nav>
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-2 rounded-2xl px-4 py-2 font-medium shadow-sm"
          style={{ background: palette.gold, color: palette.navy }}
        >
          Book a consult
        </a>
      </Section>
    </header>
  );
};
