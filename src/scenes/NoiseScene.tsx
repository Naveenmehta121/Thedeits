import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowDown, Sparkles } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

// Curated conflicting diet noise phrases with structured positional clusters
const NOISE_TAGS = [
  { text: 'Cut all carbs', pos: 'top-[14%] left-[6%] md:left-[12%]', drift: { x: -60, y: -30 }, rot: -6 },
  { text: 'Keto only', pos: 'top-[18%] right-[8%] md:right-[14%]', drift: { x: 60, y: -25 }, rot: 5 },
  { text: '1200 kcal limit', pos: 'top-[28%] left-[4%] md:left-[8%]', drift: { x: -80, y: -10 }, rot: -8 },
  { text: 'Fast 16 hours', pos: 'top-[30%] right-[5%] md:right-[10%]', drift: { x: 75, y: -15 }, rot: 7 },
  { text: 'Detox cleanse', pos: 'bottom-[34%] left-[5%] md:left-[10%]', drift: { x: -70, y: 30 }, rot: 6 },
  { text: 'No fruit after 6 PM', pos: 'bottom-[32%] right-[6%] md:right-[12%]', drift: { x: 70, y: 25 }, rot: -5 },
  { text: 'Skip dinner', pos: 'bottom-[18%] left-[8%] md:left-[16%]', drift: { x: -50, y: 50 }, rot: -4 },
  { text: 'Track every single gram', pos: 'bottom-[16%] right-[8%] md:right-[15%]', drift: { x: 60, y: 45 }, rot: 4 },
];

export default function NoiseScene() {
  const root = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const stage1Ref = useRef<HTMLDivElement>(null);
  const stage2Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      if (stage1Ref.current) stage1Ref.current.style.display = 'none';
      if (stage2Ref.current) stage2Ref.current.style.opacity = '1';
      if (bgRef.current) bgRef.current.style.backgroundColor = '#F6F3EC';
      return;
    }

    const ctx = gsap.context(() => {
      const frags = gsap.utils.toArray<HTMLElement>('.noise-tag');
      const stage1 = stage1Ref.current;
      const stage2 = stage2Ref.current;
      const bg = bgRef.current;

      if (!root.current || !stage1 || !stage2 || !bg) return;

      // Initial states
      gsap.set(stage1, { opacity: 1, y: 0, scale: 1 });
      gsap.set(stage2, { opacity: 0, y: 35, scale: 0.96 });
      gsap.set(bg, { backgroundColor: '#0B221A' });

      // Responsive scrub length: 90% viewport scroll on desktop, 75% on mobile
      const isMobile = window.innerWidth < 768;
      const scrollDistance = isMobile ? '+=75%' : '+=95%';

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current,
          start: 'top top',
          end: scrollDistance,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // ── Step 1 (0.00 -> 0.40): Noise tags drift away and fade ──
      frags.forEach((f, i) => {
        const dx = parseFloat(f.dataset.dx || '0');
        const dy = parseFloat(f.dataset.dy || '0');
        tl.to(
          f,
          {
            x: dx,
            y: dy,
            opacity: 0,
            scale: 0.85,
            filter: 'blur(10px)',
            duration: 0.35,
            ease: 'power2.in',
          },
          0.02 + (i % 3) * 0.04,
        );
      });

      // ── Step 2 (0.10 -> 0.45): Stage 1 headline dissolves ──
      tl.to(
        stage1,
        {
          opacity: 0,
          y: -30,
          scale: 0.95,
          filter: 'blur(8px)',
          duration: 0.35,
          ease: 'power2.in',
        },
        0.12,
      );

      // ── Step 3 (0.25 -> 0.70): Background morphs from dark obsidian green to warm cream ──
      tl.to(
        bg,
        {
          backgroundColor: '#F6F3EC',
          duration: 0.45,
          ease: 'power1.inOut',
        },
        0.25,
      );

      // ── Step 4 (0.42 -> 0.85): Stage 2 ("What you need is a plan made for you") blooms at center ──
      tl.to(
        stage2,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: 'blur(0px)',
          duration: 0.45,
          ease: 'power2.out',
        },
        0.42,
      );

      // ── Step 5 (0.85 -> 1.00): Rest pause in full clarity before scrolling into The Plan ──
      tl.to({}, { duration: 0.15 });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={root}
      className="relative min-h-[100dvh] w-full overflow-hidden flex flex-col items-center justify-center"
      style={{ backgroundColor: '#0B221A' }}
    >
      {/* Dynamic Background Transition Layer */}
      <div ref={bgRef} className="absolute inset-0 z-0 transition-colors pointer-events-none" />

      {/* Subtle organic vignette */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.18)_100%)]"
        aria-hidden="true"
      />

      {/* Floating Conflicting Diet Noise Badges */}
      <div className="pointer-events-none absolute inset-0 z-[2] overflow-hidden">
        {NOISE_TAGS.map((tag, i) => (
          <div
            key={i}
            className={`noise-tag absolute select-none ${tag.pos} will-change-transform`}
            data-dx={tag.drift.x}
            data-dy={tag.drift.y}
            style={{
              transform: `rotate(${tag.rot}deg)`,
            }}
          >
            <div className="flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.07] px-3.5 py-1.5 backdrop-blur-md shadow-sm transition-transform">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B88A4A]/80" />
              <span className="font-body text-xs sm:text-sm font-medium tracking-wide text-[#EAEBE5]/85">
                {tag.text}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Centered Content Container with CSS Grid Overlay (Both stages share exact vertical center) */}
      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 py-16 sm:px-8">
        <div className="grid grid-cols-1 items-center justify-center">

          {/* ── STAGE 1: THE NOISE ───────────────────────────────────────────── */}
          <div
            ref={stage1Ref}
            className="col-start-1 row-start-1 flex flex-col items-center text-center will-change-transform"
          >
            {/* Pill Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.22em] text-[#EAEBE5]/80 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#B88A4A] animate-pulse" />
              <span>The Noise</span>
            </div>

            {/* Display Headline */}
            <h2
              className="text-white text-balance max-w-[15ch]"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontWeight: 300,
                lineHeight: 1.08,
                letterSpacing: '-0.03em',
                fontSize: 'clamp(2.4rem, 5.2vw, 4.25rem)',
              }}
            >
              Too much advice.
              <br />
              <span className="italic font-normal text-[#E7ECE4]">Not enough clarity.</span>
            </h2>

            <p className="mt-6 max-w-md text-sm sm:text-base text-[#EAEBE5]/70 leading-relaxed font-body">
              Every feed serves a new rule. Fasting, detoxes, calorie apps, and contradictory claims that ignore your actual life.
            </p>
          </div>

          {/* ── STAGE 2: THE CLARITY ("What you need is a plan made for you") ─ */}
          <div
            ref={stage2Ref}
            className="col-start-1 row-start-1 flex flex-col items-center text-center will-change-transform opacity-0 pointer-events-auto"
          >
            {/* Pill Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#1F3D33]/20 bg-[#1F3D33]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.22em] text-[#1F3D33] backdrop-blur-md">
              <Sparkles size={13} className="text-[#B88A4A]" />
              <span>The Shift to Clarity</span>
            </div>

            {/* Hero Reveal Headline */}
            <h2
              className="text-[#1F3D33] text-balance max-w-[16ch]"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontWeight: 300,
                lineHeight: 1.06,
                letterSpacing: '-0.03em',
                fontSize: 'clamp(2.5rem, 5.4vw, 4.5rem)',
              }}
            >
              What you need is a plan{' '}
              <span className="italic font-normal text-[#B88A4A]">made for you.</span>
            </h2>

            {/* Supporting Copy */}
            <p className="mt-6 max-w-xl text-base sm:text-lg text-[#1F3D33]/80 leading-relaxed font-body font-normal">
              Not another generic internet template. Nutrition paced around your circadian rhythm, home kitchen, and real routine.
            </p>

            {/* Flow to The Plan */}
            <div className="mt-8 flex items-center gap-2 rounded-full bg-[#1F3D33]/5 border border-[#1F3D33]/10 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#1F3D33]/70 font-medium">
              <span>Scroll to explore the framework</span>
              <ArrowDown size={14} className="text-[#B88A4A] animate-bounce" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
