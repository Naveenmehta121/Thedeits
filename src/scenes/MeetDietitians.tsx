import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import VideoBackground from '@/components/VideoBackground';
import EditorialPortrait from '@/components/EditorialPortrait';
import { siteConfig } from '@/data/siteConfig';

gsap.registerPlugin(ScrollTrigger);

const PORTRAIT_SRCS: Record<string, string> = {
  radha: '/images/radha-mishra.webp',
  surbhi: '/images/surbhi-kumari.webp',
};

export default function MeetDietitians() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.diet-card',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'cubic-bezier(0.22,1,0.36,1)',
          stagger: 0.18,
          scrollTrigger: {
            trigger: root.current,
            start: 'top 70%',
          },
        },
      );

      // Parallax offset on the portrait columns
      gsap.to('.diet-portrait-0', {
        yPercent: -4,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
      });
      gsap.to('.diet-portrait-1', {
        yPercent: -6,
        ease: 'none',
        scrollTrigger: { trigger: root.current, start: 'top bottom', end: 'bottom top', scrub: 1 },
      });

      gsap.fromTo(
        '.diet-head',
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
    <section
      id="meet"
      ref={root}
      className="relative w-full overflow-hidden py-28 md:py-36"
    >
      <VideoBackground variant="sage" src={siteConfig.videos.sage} overlayOpacity={0.12} />

      <div className="relative z-10 mx-auto max-w-content px-6 md:px-12">
        <div className="diet-head mb-16 max-w-2xl">
          <p className="eyebrow mb-5 text-green-deep/60">Meet the Dietitians</p>
          <h2 className="display-xl font-light text-green-deep text-balance">
            Two calm voices behind every plan.
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {siteConfig.dietitians.map((d, i) => (
            <div
              key={d.slug}
              className={`diet-card group relative flex flex-col overflow-hidden rounded-[2.5rem] border border-green-deep/15 bg-cream/75 shadow-xl backdrop-blur-md transition-all duration-500 ease-smooth hover:shadow-2xl hover:border-green-deep/30 ${
                i === 0 ? 'mt-0 md:mt-12' : 'mt-0'
              }`}
            >
              {/* Portrait with real photo cleanly framed with headroom for hair & forehead */}
              <div
                className={`diet-portrait-${i} relative w-full aspect-[4/3] overflow-hidden bg-[#0B221A]`}
              >
                <EditorialPortrait
                  src={PORTRAIT_SRCS[d.slug]}
                  alt={d.name}
                  className="h-full w-full"
                  objectPosition={d.slug === 'radha' ? 'center 58%' : 'center 62%'}
                  showVignette={false}
                />
              </div>

              {/* Text content */}
              <div className="flex flex-1 flex-col p-7 md:p-9">
                <h3 className="display-lg font-light text-green-deep">{d.name}</h3>
                
                {/* Highlighted credentials & role in high-contrast dark green */}
                <p className="mt-2 text-xs md:text-sm font-semibold text-[#0B221A] leading-snug">
                  {d.title} • {d.credentials} • {d.experience} Exp
                </p>

                <p className="mt-4 flex-1 max-w-md text-sm leading-relaxed text-green-deep/80 text-pretty">
                  {d.shortFocus}
                </p>

                {/* Specialisation tags neatly placed inside cream card body */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {d.focusTags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-[#0B221A]/15 bg-[#0B221A]/[0.06] px-3 py-1 text-xs font-medium text-[#0B221A]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-7 flex flex-col items-start gap-3 sm:flex-row sm:items-center">
                  <Link
                    to={`/book?dietitian=${d.slug}`}
                    className="btn-solid text-sm"
                  >
                    Book with {d.name.replace(/^Dt\.\s*/i, '').split(' ')[0]} →
                  </Link>
                  <Link
                    to="/dietitians"
                    className="text-sm font-medium text-green-deep/65 transition-colors duration-300 hover:text-green-deep"
                  >
                    View full profile →
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
