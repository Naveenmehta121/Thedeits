import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  {
    n: '01',
    title: 'Send an enquiry',
    body: 'Reach out via the booking form or WhatsApp. Tell us a little about your routine and what you are hoping to ease.',
  },
  {
    n: '02',
    title: 'Meet by video',
    body: 'A private, unhurried video consultation where we understand your schedule, your kitchen, and your everyday reality.',
  },
  {
    n: '03',
    title: 'Receive your plan',
    body: 'A flexible, home-cooked framework paced around your life—with follow-ups and WhatsApp check-ins to keep it steady.',
  },
];

export default function HowItWorks() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const line = root.current!.querySelector('.hiw-line') as HTMLElement;
      gsap.set(line, { scaleY: 0, transformOrigin: 'top center' });

      const steps = gsap.utils.toArray<HTMLElement>('.hiw-step');

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current!,
          start: 'top 60%',
          end: 'bottom 75%',
          scrub: 1,
        },
      });

      tl.to(line, { scaleY: 1, ease: 'none', duration: 1 }, 0);

      steps.forEach((s, i) => {
        const at = (i + 0.5) / steps.length;
        tl.to(
          s,
          { opacity: 1, y: 0, duration: 0.18, ease: 'power2.out' },
          at,
        );
        tl.to(
          s.querySelector('.hiw-node') as HTMLElement,
          { scale: 1, duration: 0.1, ease: 'back.out(2)' },
          at + 0.02,
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="how-it-works" ref={root} className="relative w-full bg-green-obsidian py-28 md:py-40">
      <div className="mx-auto max-w-content px-6 md:px-12">
        <div className="mb-20 max-w-2xl">
          <p className="eyebrow mb-5 text-cream/60">How It Works</p>
          <h2 className="display-xl font-light text-cream text-balance">
            Three quiet steps. No noise.
          </h2>
        </div>

        <div className="relative mx-auto max-w-2xl pl-16 md:pl-20">
          {/* vertical drawn line */}
          <span className="hiw-line absolute left-8 top-2 h-[calc(100%-1rem)] w-px bg-gradient-to-b from-gold via-gold/70 to-green-deep md:left-10" />

          <div className="space-y-16 md:space-y-24">
            {STEPS.map((s) => (
              <div
                key={s.n}
                className="hiw-step relative opacity-0"
                style={{ transform: 'translateY(24px)' }}
              >
                <span className="hiw-node absolute -left-16 top-0 flex h-10 w-10 scale-0 items-center justify-center rounded-full border border-gold/50 bg-green-obsidian font-display text-xs text-gold md:-left-20">
                  {s.n}
                </span>
                <h3 className="display-lg mb-3 font-light text-cream">{s.title}</h3>
                <p className="max-w-md text-sm leading-relaxed text-cream/70 text-pretty">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
