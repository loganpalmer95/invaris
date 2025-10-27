import React from 'react';
import { Section } from './Section';
import { palette } from '../theme/palette';

export const Process = () => {
  const steps = [
    { n: "01", t: "Discover", d: "Goals, constraints, users—fast alignment on what matters." },
    { n: "02", t: "Design", d: "Wireframes to polished UI, accessibility & systems thinking." },
    { n: "03", t: "Build", d: "Clean, testable code, CI/CD, and observability from day one." },
    { n: "04", t: "Grow", d: "SEO, performance, and iteration loops tied to KPIs." },
  ];

  return (
    <Section id="process" className="py-12 md:py-16">
      <div className="rounded-3xl p-8 md:p-10 border bg-white/5" style={{ borderColor: "rgba(243,242,237,0.08)" }}>
        <h2 className="text-2xl md:text-3xl font-semibold">A clear path to outcomes</h2>
        <div className="grid md:grid-cols-4 gap-6 mt-6">
          {steps.map((s) => (
            <div key={s.n} className="rounded-2xl p-5 border" style={{ borderColor: "rgba(243,242,237,0.08)" }}>
              <span className="text-xs tracking-[0.28em]" style={{ color: palette.gold }}>{s.n}</span>
              <h3 className="text-xl font-semibold mt-2">{s.t}</h3>
              <p className="text-sm text-white/70 mt-1">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};
