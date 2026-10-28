import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ListChecks } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { useSeo } from '@/hooks/useSeo';
import { siteConfig } from '@/data/siteConfig';

gsap.registerPlugin(ScrollTrigger);

export default function HowItWorksPage() {
  useSeo({
    title: 'How It Works',
    description:
      'Four calm steps to begin with The Diets—share an enquiry, confirm a video slot, meet 1-on-1 by video, and receive a tailored plan with follow-up support.',
  });

  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.hiw-step',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'cubic-bezier(0.22,1,0.36,1)',
          stagger: 0.15,
          scrollTrigger: { trigger: root.current, start: 'top 65%' },
        },
      );
      gsap.fromTo(
        '.hiw-line-vert',
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          transformOrigin: 'top center',
          scrollTrigger: {
            trigger: root.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: 1,
          },
        },
      );
      gsap.fromTo(
        '.hiw-card',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'cubic-bezier(0.22,1,0.36,1)',
          scrollTrigger: { trigger: '.hiw-card', start: 'top 80%' },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  const steps = siteConfig.howItWorksSteps;

  return (
    <>
      <PageHero
        eyebrow="How It Works"
        title="Four quiet steps. No noise."
        intro="From the first message to your tailored plan, every step is calm, private, and built around your real schedule."
      />

      <section ref={root} className="relative w-full bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-12">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
            {/* Steps column */}
            <div className="relative pl-16 md:pl-20">
              <span className="hiw-line-vert absolute left-8 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-gold via-gold/70 to-green-deep md:left-10" />
              <div className="space-y-16 md:space-y-20">
                {steps.map((s) => (
                  <div key={s.n} className="hiw-step relative">
                    <span className="absolute -left-16 top-0 flex h-10 w-10 items-center justify-center rounded-full border border-gold/50 bg-cream font-display text-xs text-gold md:-left-20">
                      {s.n}
                    </span>
                    <h2 className="display-lg mb-3 font-light text-green-deep">{s.title}</h2>
                    <p className="max-w-md text-sm leading-relaxed text-green-deep/80 text-pretty md:text-base">
                      {s.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Good to have ready card */}
            <aside className="hiw-card md:sticky md:top-28 md:self-start">
              <div className="rounded-[2rem] border border-green-deep/15 bg-sage/50 p-8 md:p-10">
                <div className="mb-6 flex items-center gap-3">
                  <ListChecks className="text-gold" size={22} strokeWidth={1.5} />
                  <p className="eyebrow text-green-deep/55">Good to have ready</p>
                </div>
                <h3 className="display-lg mb-6 font-light text-green-deep">
                  No preparation stress—just a few quiet things.
                </h3>
                <ul className="space-y-4">
                  {siteConfig.goodToHaveReady.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm leading-relaxed text-green-deep/85 md:text-base"
                    >
                      <Check className="mt-1 shrink-0 text-gold" size={16} strokeWidth={2} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link to="/book" className="btn-solid">
                    Begin your enquiry
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
