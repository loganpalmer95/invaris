import React from 'react';
import { Logo } from './Logo';
import { Section } from './Section';

export const Footer = () => {
  return (
    <footer id="contact" className="border-t border-white/10">
      <Section className="py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="md:flex-1">
            <Logo size={70} />
          </div>
          <div className="text-sm text-white/80 text-center md:flex-1">
            <p>Email: hello@invaris.io</p>
            <p className="mt-1">Metro Atlanta • Remote‑first</p>
          </div>
          <div className="text-sm text-white/70 flex gap-6 md:flex-1 md:justify-end">
            <a className="hover:opacity-90" href="#services">Services</a>
            <a className="hover:opacity-90" href="#process">Process</a>
            <a className="hover:opacity-90" href="#work">Work</a>
          </div>
        </div>
      </Section>
      <Section className="pb-8">
        <p className="text-xs text-white/50">© {new Date().getFullYear()} Invaris. All rights reserved.</p>
      </Section>
    </footer>
  );
};
