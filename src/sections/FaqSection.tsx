import { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Plus } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

gsap.registerPlugin(ScrollTrigger);

export default function FaqSection() {
  const root = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<number | null>(0);

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.faq-head',
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'cubic-bezier(0.22,1,0.36,1)',
          scrollTrigger: { trigger: root.current, start: 'top 75%' },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section id="faq" ref={root} className="relative w-full bg-sage py-28 md:py-40">
      <div className="mx-auto max-w-content px-6 md:px-12">
        <div className="faq-head mb-16 max-w-2xl">
          <p className="eyebrow mb-5 text-green-deep/60">FAQ</p>
          <h2 className="display-xl font-light text-green-deep text-balance">
            Quiet answers to common questions.
          </h2>
        </div>

        <div className="mx-auto max-w-3xl divide-y divide-green-deep/15 border-y border-green-deep/15">
          {siteConfig.faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-6 py-6 text-left"
                  aria-expanded={isOpen}
                >
                  <span className="display-lg font-light text-green-deep">{f.q}</span>
                  <Plus
                    className={`shrink-0 text-green-deep transition-transform duration-500 ease-smooth ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                    size={22}
                    strokeWidth={1.5}
                  />
                </button>
                <div
                  className="grid transition-all duration-500 ease-smooth"
                  style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl pb-7 pr-10 text-sm leading-relaxed text-green-deep/80 text-pretty">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
