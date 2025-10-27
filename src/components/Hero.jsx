import React from 'react';
import { Section } from './Section';
import { palette } from '../theme/palette';

export const Hero = () => {
  return (
    <Section className="pt-16 md:pt-24 pb-16">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="uppercase tracking-[0.35em] text-xs mb-4" style={{ color: palette.gold }}>Build • Launch • Scale</p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-[1.05]">
            Full‑stack consulting for teams that want results.
          </h1>
          <p className="mt-5 text-base md:text-lg text-white/80 max-w-xl">
            Invaris helps modern businesses ship faster—from strategy & design to code, DevOps, and SEO. One partner. End‑to‑end delivery.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#contact"
              className="inline-flex items-center rounded-2xl px-5 py-3 font-medium shadow-md"
              style={{ background: palette.gold, color: palette.navy }}
            >
              Start a project
            </a>
            <a
              href="#work"
              className="inline-flex items-center rounded-2xl px-5 py-3 font-medium border"
              style={{ borderColor: "rgba(243,242,237,0.25)" }}
            >
              View case studies
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full" style={{ background: palette.gold }}></span> Design–to–Dev handoff</div>
            <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full" style={{ background: palette.gold }}></span> Cloud & DevOps</div>
            <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full" style={{ background: palette.gold }}></span> SEO & growth</div>
          </div>
        </div>

        <div className="relative">
          <div className="aspect-[4/3] rounded-3xl border overflow-hidden shadow-2xl"
               style={{ background: palette.navySoft, borderColor: "rgba(243,242,237,0.08)" }}>
            {/* Mock product frame */}
            <div className="h-10 w-full flex items-center gap-2 px-4 border-b" style={{ borderColor: "rgba(243,242,237,0.08)" }}>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ED6A5A" }}></span>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#F4BF50" }}></span>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#61C454" }}></span>
              <span className="ml-3 text-xs text-white/60">invaris.io — Landing</span>
            </div>
            <div className="p-6 md:p-8 grid md:grid-cols-2 gap-6">
              <div className="rounded-xl p-4 border bg-white/5" style={{ borderColor: "rgba(243,242,237,0.08)" }}>
                <p className="text-xs uppercase tracking-widest" style={{ color: palette.gold }}>Metrics</p>
                <h3 className="text-2xl font-semibold mt-2">+34% Conversion</h3>
                <p className="text-white/70 mt-2 text-sm">After a design refresh and performance tuning.</p>
              </div>
              <div className="rounded-xl p-4 border bg-white/5" style={{ borderColor: "rgba(243,242,237,0.08)" }}>
                <p className="text-xs uppercase tracking-widest" style={{ color: palette.gold }}>Performance</p>
                <h3 className="text-2xl font-semibold mt-2">98 Lighthouse</h3>
                <p className="text-white/70 mt-2 text-sm">Core Web Vitals optimized across SPA routes.</p>
              </div>
              <div className="rounded-xl p-4 border bg-white/5" style={{ borderColor: "rgba(243,242,237,0.08)" }}>
                <p className="text-xs uppercase tracking-widest" style={{ color: palette.gold }}>Delivery</p>
                <h3 className="text-2xl font-semibold mt-2">4‑Week MVP</h3>
                <p className="text-white/70 mt-2 text-sm">From Figma to production with CI/CD.</p>
              </div>
              <div className="rounded-xl p-4 border bg-white/5" style={{ borderColor: "rgba(243,242,237,0.08)" }}>
                <p className="text-xs uppercase tracking-widest" style={{ color: palette.gold }}>Scale</p>
                <h3 className="text-2xl font-semibold mt-2">Serverless+</h3>
                <p className="text-white/70 mt-2 text-sm">Auto‑scaling infra & observability baked in.</p>
              </div>
            </div>
          </div>
          {/* Accent glow */}
          <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full blur-3xl opacity-30" style={{ background: palette.gold }} />
        </div>
      </div>
    </Section>
  );
};
