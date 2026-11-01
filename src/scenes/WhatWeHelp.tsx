import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

gsap.registerPlugin(ScrollTrigger);

export default function WhatWeHelp() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.wwh-head',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'cubic-bezier(0.22,1,0.36,1)',
          scrollTrigger: { trigger: root.current, start: 'top 75%' },
        },
      );
      gsap.fromTo(
        '.wwh-card',
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'cubic-bezier(0.22,1,0.36,1)',
          stagger: 0.1,
          scrollTrigger: { trigger: root.current, start: 'top 65%' },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative w-full bg-cream py-24 md:py-36">
      <div className="mx-auto max-w-content px-6 md:px-12">
        <div className="wwh-head mb-14 md:mb-16 max-w-2xl">
          <p className="eyebrow mb-5 text-green-deep/60">What We Help With</p>
          <h2 className="display-xl font-light text-green-deep text-balance">
            Areas we ease, gently and practically.
          </h2>
        </div>

        {/* ── Desktop: Balanced 12-Column Bento Layout (Top 2 at col-6, Bottom 3 at col-4) ── */}
        <div className="hidden md:grid grid-cols-12 gap-6">
          {siteConfig.focusAreas.map((area, i) => (
            <a
              key={area.title}
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className={`wwh-card group relative flex flex-col justify-between overflow-hidden rounded-[2rem] border border-green-deep/15 bg-sage/35 p-8 transition-all duration-500 ease-smooth hover:border-green-deep/35 hover:bg-sage/75 hover:shadow-xl ${
                i < 2 ? 'col-span-6 min-h-[300px]' : 'col-span-4 min-h-[320px]'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-semibold text-green-deep/45">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {area.tag && (
                    <span className="rounded-full border border-green-deep/15 bg-cream/75 px-3 py-1 text-[11px] font-medium text-green-deep/75">
                      {area.tag}
                    </span>
                  )}
                </div>
                <h3 className="display-lg font-light text-green-deep transition-colors duration-300 group-hover:text-[#0B221A]">
                  {area.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-green-deep/75 text-pretty">
                  {area.description}
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between pt-4 border-t border-green-deep/10 text-xs font-medium text-green-deep/60 transition-colors duration-300 group-hover:text-green-deep">
                <span>Chat on WhatsApp</span>
                <ArrowUpRight
                  className="shrink-0 transition-transform duration-500 ease-smooth group-hover:translate-x-1 group-hover:-translate-y-1"
                  size={18}
                />
              </div>
            </a>
          ))}
        </div>

        {/* ── Mobile: Smooth Horizontal Snap-Scroll Carousel ── */}
        <div className="block md:hidden">
          <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {siteConfig.focusAreas.map((area, i) => (
              <a
                key={area.title}
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="wwh-card snap-center shrink-0 w-[84vw] max-w-[340px] rounded-[1.75rem] border border-green-deep/15 bg-sage/40 p-6 flex flex-col justify-between shadow-sm active:scale-[0.99] transition-transform"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs font-semibold text-green-deep/45">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {area.tag && (
                      <span className="rounded-full border border-green-deep/15 bg-cream/70 px-2.5 py-0.5 text-[10px] font-medium text-green-deep/75">
                        {area.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="display-lg text-2xl font-light text-green-deep">
                    {area.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-green-deep/75 text-pretty">
                    {area.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center justify-between pt-4 border-t border-green-deep/10 text-xs font-medium text-green-deep/60">
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight size={16} />
                </div>
              </a>
            ))}
          </div>
          <p className="mt-3 text-center text-xs tracking-wider text-green-deep/40">
            ← Swipe to view specialisations →
          </p>
        </div>
      </div>
    </section>
  );
}
