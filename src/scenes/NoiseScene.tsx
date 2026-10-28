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
    if (reduce) return;

    const ctx = gsap.context(() => {
      const frags = gsap.utils.toArray<HTMLElement>('.noise-frag');
      const bg = root.current!.querySelector('.noise-bg') as HTMLElement;
      const headlineWords = gsap.utils.toArray<HTMLElement>('.noise-head-word');
      const finalLine = root.current!.querySelector('.noise-final') as HTMLElement;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root.current!,
          start: 'top top',
          end: '+=220%',
          pin: true,
          scrub: 1,
        },
      });

      // background shift obsidian -> cream
      tl.fromTo(
        bg,
        { backgroundColor: '#12261F' },
        { backgroundColor: '#F6F3EC', duration: 1, ease: 'none' },
        0,
      );

      // fragments drift + blur + fade
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
            duration: 0.55,
            ease: 'power2.in',
          },
          0.05 + (1 - z) * 0.2,
        );
      });

      // headline fades out with fragments
      tl.to(
        '.noise-headline',
        { opacity: 0, y: -20, duration: 0.25, ease: 'power2.in' },
        0.45,
      );

      // final sharp line appears
      tl.fromTo(
        finalLine,
        { opacity: 0, y: 30, filter: 'blur(8px)' },
        { opacity: 1, y: 0, filter: 'blur(0px)', duration: 0.4, ease: 'power3.out' },
        0.7,
      );

      tl.to(
        '.noise-eyebrow',
        { opacity: 0, duration: 0.2 },
        0,
      );
    }, root);
    return () => ctx.revert();
  }, []);

  const count = isMobile.current ? 6 : 12;
  const frags = buildFrags(count);

  return (
    <section ref={root} className="relative h-[100dvh] w-full overflow-hidden">
      <div className="noise-bg absolute inset-0" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="noise-eyebrow eyebrow mb-8 text-cream/55">The Noise</p>

        <h2 className="noise-headline display-xxl max-w-[14ch] text-cream text-balance">
          Too much advice.
          <br />
          Not enough clarity.
        </h2>

        <p className="noise-final display-xl mt-12 max-w-[18ch] font-light text-green-deep opacity-0 text-balance">
          What you need is a plan made for you.
        </p>
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
