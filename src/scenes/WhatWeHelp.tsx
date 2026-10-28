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
        '.wwh-row',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'cubic-bezier(0.22,1,0.36,1)',
          stagger: 0.1,
          scrollTrigger: { trigger: root.current, start: 'top 60%' },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative w-full bg-cream py-28 md:py-40">
      <div className="mx-auto max-w-content px-6 md:px-12">
        <div className="wwh-head mb-16 max-w-2xl">
          <p className="eyebrow mb-5 text-green-deep/60">What We Help With</p>
          <h2 className="display-xl font-light text-green-deep text-balance">
            Areas we ease, gently and practically.
          </h2>
        </div>

        <div className="divide-y divide-green-deep/15 border-y border-green-deep/15">
          {siteConfig.focusAreas.map((area, i) => (
            <a
              key={area.title}
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="wwh-row group relative block overflow-hidden"
            >
              {/* sage wipe */}
              <span className="pointer-events-none absolute inset-0 z-0 origin-left scale-x-0 bg-sage transition-transform duration-700 ease-smooth group-hover:scale-x-100" />
              <div className="relative z-10 flex items-center justify-between gap-6 py-8 md:py-12">
                <div className="flex items-baseline gap-6 md:gap-12">
                  <span className="font-display text-sm text-green-deep/40">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <div className="max-w-xl">
                    <h3 className="display-lg font-light text-green-deep transition-colors duration-500">
                      {area.title}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-green-deep/70 text-pretty">
                      {area.description}
                    </p>
                  </div>
                </div>
                <ArrowUpRight
                  className="shrink-0 text-green-deep transition-transform duration-500 ease-smooth group-hover:translate-x-1.5 group-hover:-translate-y-1.5"
                  size={28}
                  strokeWidth={1.25}
                />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
