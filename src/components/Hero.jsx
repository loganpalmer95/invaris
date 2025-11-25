import React from 'react';
import { Section } from './Section';
import { palette } from '../theme/palette';

export const Hero = () => {
  return (
    <Section className="py-12 md:py-16">
      <div className="flex flex-col gap-6 md:gap-8 max-w-full">
        <div>
          <p className="uppercase tracking-[0.35em] text-xs mb-4" style={{ color: palette.gold }}>Build • Launch • Scale</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05]">
            Full‑stack consulting for teams that want results.
          </h1>
          <p className="mt-5 text-base md:text-base lg:text-lg text-white/80 max-w-xl">
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
              href="#process"
              className="inline-flex items-center rounded-2xl px-5 py-3 font-medium border"
              style={{ borderColor: "rgba(243,242,237,0.25)" }}
            >
              View our process
            </a>
          </div>
          <div className="mt-8 flex items-center gap-6 text-sm text-white/70">
            <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full" style={{ background: palette.gold }}></span> Design–to–Dev handoff</div>
            <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full" style={{ background: palette.gold }}></span> Cloud & DevOps</div>
            <div className="flex items-center gap-2"><span className="w-2.5 h-2.5 rounded-full" style={{ background: palette.gold }}></span> SEO & growth</div>
          </div>
        </div>

        <div className="relative mt-8 w-full">
          <div className="min-h-[320px] md:min-h-[380px] xl:h-auto xl:aspect-[4/3] rounded-3xl border overflow-hidden shadow-2xl w-full max-w-full"
               style={{ background: palette.navySoft, borderColor: "rgba(243,242,237,0.08)" }}>
            {/* Mock product frame */}
            <div className="h-10 w-full flex items-center gap-2 px-4 border-b" style={{ borderColor: "rgba(243,242,237,0.08)" }}>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#ED6A5A" }}></span>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#F4BF50" }}></span>
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#61C454" }}></span>
              <span className="ml-3 text-xs text-white/60">invaris.io — Landing</span>
            </div>
            <div className="p-6 md:p-6 lg:p-8 pb-8 md:pb-10 grid md:grid-cols-2 gap-4 md:gap-6">
              <div className="rounded-xl p-4 border bg-white/5 overflow-hidden" style={{ borderColor: "rgba(243,242,237,0.08)" }}>
                <p className="text-xs uppercase tracking-widest" style={{ color: palette.gold }}>Metrics</p>
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-2 leading-tight whitespace-nowrap">+34% Conversion</h3>
                <p className="text-white/70 mt-2 text-xs md:text-sm break-words">After a design refresh and performance tuning.</p>
              </div>
              <div className="rounded-xl p-4 border bg-white/5 overflow-hidden" style={{ borderColor: "rgba(243,242,237,0.08)" }}>
                <p className="text-xs uppercase tracking-widest" style={{ color: palette.gold }}>Performance</p>
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-2 leading-tight whitespace-nowrap">98 Lighthouse</h3>
                <p className="text-white/70 mt-2 text-xs md:text-sm break-words">Core Web Vitals optimized across SPA routes.</p>
              </div>
              <div className="rounded-xl p-4 border bg-white/5 overflow-hidden" style={{ borderColor: "rgba(243,242,237,0.08)" }}>
                <p className="text-xs uppercase tracking-widest" style={{ color: palette.gold }}>Delivery</p>
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-2 leading-tight whitespace-nowrap">4‑Week MVP</h3>
                <p className="text-white/70 mt-2 text-xs md:text-sm break-words">From Figma to production with CI/CD.</p>
              </div>
              <div className="rounded-xl p-4 border bg-white/5 overflow-hidden" style={{ borderColor: "rgba(243,242,237,0.08)" }}>
                <p className="text-xs uppercase tracking-widest" style={{ color: palette.gold }}>Scale</p>
                <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mt-2 leading-tight whitespace-nowrap">Serverless+</h3>
                <p className="text-white/70 mt-2 text-xs md:text-sm break-words">Auto‑scaling infra & observability baked in.</p>
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
