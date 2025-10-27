import React from 'react';
import { Logo } from './Logo';
import { Section } from './Section';

export const Footer = () => {
  return (
    <footer id="contact" className="border-t border-white/10">
      <Section className="py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <Logo size={22} />
        <div className="text-sm text-white/80">
          <p>Email: hello@invaris.io</p>
          <p className="mt-1">Metro Atlanta • Remote‑first</p>
        </div>
        <div className="text-sm text-white/70 flex gap-6">
          <a className="hover:opacity-90" href="#services">Services</a>
          <a className="hover:opacity-90" href="#process">Process</a>
          <a className="hover:opacity-90" href="#work">Work</a>
        </div>
      </Section>
      <Section className="pb-8">
        <p className="text-xs text-white/50">© {new Date().getFullYear()} Invaris. All rights reserved.</p>
      </Section>
    </footer>
  );
};
