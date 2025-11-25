import React from 'react';
import { Section } from './Section';
import { palette } from '../theme/palette';

export const CTA = () => {
  return (
    <Section className="py-12 md:py-16">
      <div className="rounded-3xl p-8 md:p-12 border text-center" style={{ borderColor: "rgba(243,242,237,0.08)", background: palette.navySoft }}>
        <h2 className="text-3xl md:text-3xl lg:text-4xl font-semibold">Ready to build what's next?</h2>
        <p className="text-white/80 mt-3 max-w-2xl mx-auto">Let's turn your roadmap into shipped software—on time, on budget, and built to scale.</p>
        <a href="mailto:hello@invaris.com?subject=Book a Consult" className="mt-6 inline-flex rounded-2xl px-6 py-3 font-medium shadow-md" style={{ background: palette.gold, color: palette.navy }}>Book a consult</a>
      </div>
    </Section>
  );
};
