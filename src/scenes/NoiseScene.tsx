import { useLayoutEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NOISE = [
  'cut carbs',
  'eat clean',
  'detox',
  '5 meals a day',
  'no sugar ever',
  'skip dinner',
  '1200 kcal',
  'keto only',
  'fast 16 hours',
  'track every gram',
  'no fruit at night',
  'cheat day guilt',
];

type Frag = {
  text: string;
  x: number; // vw
  y: number; // vh
  z: number; // depth 0..1
  r: number; // rotation deg
};

// deterministic pseudo-random for stable layout
const rand = (seed: number) => {
  const x = Math.sin(seed * 99.13) * 43758.5453;
  return x - Math.floor(x);
};

function buildFrags(count: number): Frag[] {
  const used: Frag[] = [];
  for (let i = 0; i < count; i++) {
    const x = 6 + rand(i + 1) * 88;
    const y = 12 + rand(i + 9) * 72;
    const z = rand(i + 17);
    const r = (rand(i + 23) - 0.5) * 16;
    used.push({ text: NOISE[i % NOISE.length], x, y, z, r });
  }
  return used;
}

export default function NoiseScene() {
  const root = useRef<HTMLDivElement>(null);
  const isMobile = useRef(typeof window !== 'undefined' && window.innerWidth < 768);

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) {
      const p1 = root.current?.querySelector('.noise-phase-1') as HTMLElement;
      const p2 = root.current?.querySelector('.noise-phase-2') as HTMLElement;
      const bg = root.current?.querySelector('.noise-bg') as HTMLElement;
      if (p1) p1.style.display = 'none';
      if (p2) p2.style.opacity = '1';
      if (bg) bg.style.backgroundColor = '#F6F3EC';
      return;
    }

    const ctx = gsap.context(() => {
      const frags = gsap.utils.toArray<HTMLElement>('.noise-frag');
      const bg = root.current!.querySelector('.noise-bg') as HTMLElement;
      const phase1 = root.current!.querySelector('.noise-phase-1') as HTMLElement;
      const finalLine = root.current!.querySelector('.noise-final') as HTMLElement;

      if (!root.current || !phase1 || !finalLine || !bg) return;

      // Initial states
      gsap.set(phase1, { opacity: 1, y: 0 });
      gsap.set(finalLine, { opacity: 0, y: 24, filter: 'blur(8px)' });
      gsap.set(bg, { backgroundColor: '#12261F' });

      // Tight, responsive scroll distance: 100% viewport scroll on desktop, 80% on mobile (no 220% empty void)
      const scrollDistance = isMobile.current ? '+=80%' : '+=100%';

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current!,
          start: 'top top',
          end: scrollDistance,
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      // 1. Background shift obsidian -> cream (0.20 -> 0.60)
      tl.to(
        bg,
        { backgroundColor: '#F6F3EC', duration: 0.4, ease: 'none' },
        0.2,
      );

      // 2. Floating fragments drift + blur + fade (0.00 -> 0.40)
      frags.forEach((f, i) => {
        const z = parseFloat(f.dataset.z || '0.5');
        const driftX = (i % 2 === 0 ? 1 : -1) * (40 + z * 60);
        const driftY = -(30 + z * 50);
        tl.to(
          f,
          {
            x: `+=${driftX}`,
            y: `+=${driftY}`,
            opacity: 0,
            filter: 'blur(12px)',
            duration: 0.38,
            ease: 'power2.in',
          },
          0.02 + (1 - z) * 0.12,
        );
      });

      // 3. Phase 1 ("Too much advice. Not enough clarity.") fades out smoothly (0.12 -> 0.42)
      tl.to(
        phase1,
        { opacity: 0, y: -24, filter: 'blur(6px)', duration: 0.3, ease: 'power2.in' },
        0.12,
      );

      // 4. Final sharp line ("What you need is a plan made for you.") appears centered (0.42 -> 0.68)
      tl.to(
        finalLine,
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.28, ease: 'power2.out' },
        0.42,
      );

      // 5. Hold Phase 2 in full clarity for comfortable reading before transition (0.68 -> 1.00)
      tl.to({}, { duration: 0.32 });
    }, root);

    return () => ctx.revert();
  }, []);

  const count = isMobile.current ? 6 : 12;
  const frags = buildFrags(count);

  return (
    <section ref={root} className="relative h-[100dvh] w-full overflow-hidden">
      <div className="noise-bg absolute inset-0 will-change-transform" />

      {/* Main Content: Both phases overlap in the exact same center grid cell */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <div className="grid grid-cols-1 items-center justify-center w-full max-w-content">
          
          {/* Phase 1: The Noise */}
          <div className="noise-phase-1 col-start-1 row-start-1 flex flex-col items-center justify-center will-change-transform">
            <p className="noise-eyebrow eyebrow mb-8 text-cream/55">The Noise</p>

            <h2 className="noise-headline display-xxl max-w-[14ch] text-cream text-balance">
              Too much advice.
              <br />
              Not enough clarity.
            </h2>
          </div>

          {/* Phase 2: The Plan (Old Theme: display-xl font-light text-green-deep) */}
          <div className="noise-phase-2 col-start-1 row-start-1 flex flex-col items-center justify-center">
            <p className="noise-final display-xl max-w-[18ch] font-light text-green-deep text-balance will-change-transform">
              What you need is a plan made for you.
            </p>
          </div>

        </div>
      </div>

      {/* Floating fragments */}
      <div className="pointer-events-none absolute inset-0 z-0">
        {frags.map((f, i) => (
          <span
            key={i}
            className="noise-frag absolute select-none whitespace-nowrap font-display text-cream/70 will-change-transform"
            data-z={f.z}
            style={{
              left: `${f.x}vw`,
              top: `${f.y}vh`,
              fontSize: `clamp(1.1rem, ${1.4 + f.z * 1.6}vw, ${1.6 + f.z * 2}rem)`,
              transform: `translate(-50%, -50%) rotate(${f.r}deg)`,
              opacity: 0.4 + f.z * 0.45,
              filter: `blur(${(1 - f.z) * 0.6}px)`,
            }}
          >
            {f.text}
          </span>
        ))}
      </div>
    </section>
  );
}
