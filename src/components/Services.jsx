import React from 'react';
import { Section } from './Section';
import { palette } from '../theme/palette';

export const Services = () => {
  const services = [
    { title: "Product & UI/UX", desc: "Figma to dev-ready systems, design tokens, and component libraries." },
    { title: "Web & App Engineering", desc: "React/Next.js, Node, .NET, and API-first architectures built to last." },
    { title: "Cloud & DevOps", desc: "CI/CD, IaC, observability, and cost-aware scaling on AWS/Azure/GCP." },
    { title: "SEO & Performance", desc: "Core Web Vitals, content, and technical SEO aligned to growth." },
    { title: "Project Acceleration", desc: "Stuck near the finish line? We unblock, ship, and stabilize." },
    { title: "Advisory & Training", desc: "Architecture reviews, workshops, and embedded mentorship." },
  ];

  return (
    <Section id="services" className="py-10 md:py-16">
      <div className="grid md:grid-cols-3 gap-6">
        {services.map((card, i) => (
          <div key={i} className="rounded-2xl p-6 border bg-white/5 hover:bg-white/10 transition-colors"
               style={{ borderColor: "rgba(243,242,237,0.08)" }}>
            <h3 className="text-lg font-semibold">{card.title}</h3>
            <p className="text-sm text-white/75 mt-2">{card.desc}</p>
            <div className="mt-4 h-1.5 w-16 rounded-full" style={{ background: palette.gold }} />
          </div>
        ))}
      </div>
    </Section>
  );
};
