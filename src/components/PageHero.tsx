import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PageHeroProps {
  eyebrow: string;
  title: string;
  intro?: string;
}

/** Shared editorial page header used by all secondary routes. */
export default function PageHero({ eyebrow, title, intro }: PageHeroProps) {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.ph-eyebrow',
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' },
      );
      gsap.fromTo(
        '.ph-title',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 0.1 },
      );
      if (intro) {
        gsap.fromTo(
          '.ph-intro',
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out', delay: 0.25 },
        );
      }
    }, root);
    return () => ctx.revert();
  }, [intro]);

  return (
    <section ref={root} className="relative w-full bg-green-obsidian pt-36 pb-20 md:pt-44 md:pb-28">
      <div className="mx-auto max-w-content px-6 md:px-12">
        <p className="ph-eyebrow eyebrow mb-6 text-cream/55">{eyebrow}</p>
        <h1 className="ph-title display-xxl max-w-[15ch] font-light text-cream text-balance">
          {title}
        </h1>
        {intro && (
          <p className="ph-intro mt-8 max-w-2xl text-base leading-relaxed text-cream/75 text-pretty md:text-lg">
            {intro}
          </p>
        )}
      </div>
    </section>
  );
}
