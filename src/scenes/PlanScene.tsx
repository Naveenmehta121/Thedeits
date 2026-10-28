import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const LABELS = ['Gut & Digestive Comfort', 'Hormonal Rhythm', 'Restoring Daily Energy'];

export default function PlanScene() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      const paths = gsap.utils.toArray<SVGPathElement>('.plan-line');
      const nodes = gsap.utils.toArray<SVGCircleElement>('.plan-node');
      const plate = root.current?.querySelector('.plan-plate') as SVGCircleElement;
      const plateRing = root.current?.querySelector('.plan-plate-ring') as SVGCircleElement;
      const labels = gsap.utils.toArray<HTMLElement>('.plan-label');
      const headline = root.current?.querySelector('.plan-headline') as HTMLElement;
      const eyebrow = root.current?.querySelector('.plan-eyebrow') as HTMLElement;

      if (!root.current || !headline) return;

      // Set up path dash lengths with safe fallback
      paths.forEach((p) => {
        let len = 350;
        try {
          const l = p.getTotalLength();
          if (l && l > 0) len = l;
        } catch {
          len = 350;
        }
        gsap.set(p, {
          strokeDasharray: len + 2,
          strokeDashoffset: len + 2,
        });
      });

      // Set initial states
      gsap.set(nodes, { scale: 0, transformOrigin: 'center center' });
      gsap.set(plate, { scale: 0, opacity: 0, transformOrigin: 'center center' });
      gsap.set(plateRing, { scale: 0, opacity: 0, transformOrigin: 'center center' });
      gsap.set(labels, { opacity: 0, y: 16 });
      gsap.set(headline, { opacity: 0, y: 32 });
      gsap.set(eyebrow, { opacity: 0, y: -10 });

      // Create a smooth, reliable timeline triggered as the section comes into view
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top 70%',
          toggleActions: 'play none none reverse',
          invalidateOnRefresh: true,
        },
      });

      // 1. Eyebrow gently slides down
      tl.to(eyebrow, {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power2.out',
      }, 0);

      // 2. SVG lines draw smoothly from the outer points inward to center plate
      paths.forEach((p, i) => {
        tl.to(
          p,
          {
            strokeDashoffset: 0,
            duration: 1.1,
            ease: 'power2.inOut',
          },
          0.15 + i * 0.12,
        );
      });

      // 3. Endpoint nodes pop in
      nodes.forEach((n, i) => {
        tl.to(
          n,
          {
            scale: 1,
            duration: 0.5,
            ease: 'back.out(2.2)',
          },
          0.35 + i * 0.12,
        );
      });

      // 4. Central plate & ring bloom
      tl.to(
        plateRing,
        {
          scale: 1,
          opacity: 0.5,
          duration: 0.8,
          ease: 'power2.out',
        },
        0.75,
      );
      tl.to(
        plate,
        {
          scale: 1,
          opacity: 0.95,
          duration: 0.7,
          ease: 'back.out(1.8)',
        },
        0.8,
      );

      // 5. Node labels fade in
      labels.forEach((l, i) => {
        tl.to(
          l,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: 'power2.out',
          },
          0.9 + i * 0.1,
        );
      });

      // 6. Main Headline reveals smoothly with graceful upward motion
      tl.to(
        headline,
        {
          opacity: 1,
          y: 0,
          duration: 0.9,
          ease: 'power3.out',
        },
        1.15,
      );
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative min-h-[100dvh] w-full overflow-hidden bg-[#F6F3EC] flex flex-col justify-center pt-20 pb-32 sm:pt-24 sm:pb-36 md:py-28"
    >
      <div className="relative z-10 mx-auto flex w-full max-w-content flex-col items-center justify-center px-6 text-center">
        {/* Eyebrow */}
        <p className="plan-eyebrow eyebrow mb-6 sm:mb-8 text-[#1F3D33]/60 tracking-[0.22em]">
          The Plan
        </p>

        {/* Diagram Wrapper */}
        <div className="relative w-full max-w-2xl px-2 sm:px-6">
          <svg
            viewBox="0 0 600 360"
            className="mx-auto h-auto w-full"
            fill="none"
            aria-hidden="true"
          >
            {/* Bezier lines converging to center plate (300,180) */}
            <path
              className="plan-line"
              d="M 80 80 C 180 100, 220 150, 300 180"
              stroke="#1F3D33"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.85"
            />
            <path
              className="plan-line"
              d="M 520 80 C 420 100, 380 150, 300 180"
              stroke="#1F3D33"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.85"
            />
            <path
              className="plan-line"
              d="M 300 320 C 300 280, 300 240, 300 180"
              stroke="#1F3D33"
              strokeWidth="1.5"
              strokeLinecap="round"
              opacity="0.85"
            />

            {/* Gold endpoint nodes */}
            <circle className="plan-node" cx="80" cy="80" r="6" fill="#B88A4A" />
            <circle className="plan-node" cx="520" cy="80" r="6" fill="#B88A4A" />
            <circle className="plan-node" cx="300" cy="320" r="6" fill="#B88A4A" />

            {/* Central plate ring + fill */}
            <circle
              className="plan-plate-ring"
              cx="300"
              cy="180"
              r="60"
              stroke="#B88A4A"
              strokeWidth="1.2"
              fill="none"
            />
            <circle
              className="plan-plate"
              cx="300"
              cy="180"
              r="38"
              fill="#1F3D33"
            />
          </svg>

          {/* Labels positioned around the diagram */}
          {/* Top Left */}
          <span
            className="plan-label absolute left-1 sm:left-0 -top-5 sm:top-2 max-w-[6.8rem] sm:max-w-[12rem] text-left text-[11px] sm:text-sm font-medium text-[#1F3D33] leading-tight"
          >
            {LABELS[0]}
          </span>

          {/* Top Right */}
          <span
            className="plan-label absolute right-1 sm:right-0 -top-5 sm:top-2 max-w-[6.8rem] sm:max-w-[12rem] text-right text-[11px] sm:text-sm font-medium text-[#1F3D33] leading-tight"
          >
            {LABELS[1]}
          </span>

          {/* Bottom Center */}
          <span
            className="plan-label absolute -bottom-4 sm:bottom-0 left-1/2 -translate-x-1/2 max-w-[10rem] sm:max-w-[14rem] text-center text-[11px] sm:text-sm font-medium text-[#1F3D33] leading-tight"
          >
            {LABELS[2]}
          </span>
        </div>

        {/* Section Headline */}
        <h2 className="plan-headline display-xl mt-12 sm:mt-16 max-w-[22ch] font-light text-[#1F3D33] text-balance">
          Personal, practical, paced around your routine.
        </h2>
      </div>
    </section>
  );
}
