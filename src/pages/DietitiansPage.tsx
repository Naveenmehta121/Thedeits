import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check } from 'lucide-react';
import EditorialPortrait from '@/components/EditorialPortrait';
import { useSeo } from '@/hooks/useSeo';
import { siteConfig } from '@/data/siteConfig';

gsap.registerPlugin(ScrollTrigger);

const PORTRAIT_SRCS: Record<string, string> = {
  radha: '/images/radha-mishra.png',
  surbhi: '/images/surbhi-kumari.png',
};

export default function DietitiansPage() {
  useSeo({
    title: 'Dietitians',
    description:
      'Meet Radha Mishra and Surbhi Kumari—100% online video dietitians offering calm, practical nutrition guidance for digestive, hormonal, and everyday wellbeing.',
  });

  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      // Banner elements
      gsap.fromTo(
        '.dt-banner-text',
        { x: -40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'cubic-bezier(0.22,1,0.36,1)',
          delay: 0.2,
        },
      );
      gsap.fromTo(
        '.dt-banner-img',
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: 'cubic-bezier(0.22,1,0.36,1)',
          delay: 0.35,
        },
      );

      // Profile sections
      gsap.utils.toArray<HTMLElement>('.diet-profile').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'cubic-bezier(0.22,1,0.36,1)',
            scrollTrigger: { trigger: el, start: 'top 78%' },
          },
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={root}>
      {/* ── Editorial banner with duo photo ──────────────────────────── */}
      <section className="relative w-full overflow-hidden bg-green-obsidian pt-28 pb-0 md:pt-32">
        <div className="mx-auto max-w-content px-6 md:px-12">
          <div className="grid grid-cols-1 items-end gap-12 md:grid-cols-2 md:gap-16">
            {/* Left: text */}
            <div className="dt-banner-text pb-16 md:pb-24">
              <p className="eyebrow mb-6 text-cream/55">Meet the Dietitians</p>
              <h1 className="display-xl font-light text-cream text-balance">
                Two calm voices,<br />
                <span className="italic text-sage">one steady approach.</span>
              </h1>
              <p className="mt-8 max-w-lg text-base leading-relaxed text-cream/70 text-pretty">
                Radha Mishra and Surbhi Kumari lead every consultation personally—by private
                video, paced around your real life. Their collaboration brings together clinical
                nutrition depth and practical, everyday meal wisdom. No clinic visits, no rigid
                rules, no separate cooking.
              </p>
              <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                <Link to="/book" className="glass-pill glass-pill--solid">
                  Book a Consultation
                </Link>
                <Link to="/programs" className="quiet-link">
                  View programs <span className="arrow">→</span>
                </Link>
              </div>
            </div>

            {/* Right: editorial duo portrait */}
            <div className="dt-banner-img relative self-end">
              <div
                className="relative overflow-hidden border border-white/18 shadow-2xl"
                style={{ borderRadius: '180px 180px 0 0', aspectRatio: '4/5' }}
              >
                <EditorialPortrait
                  src="/images/duo-editorial.png"
                  alt="Radha Mishra and Surbhi Kumari"
                  className="h-full w-full"
                  objectPosition="center 20%"
                />
              </div>
              {/* Gold caption pill */}
              <div
                className="absolute bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-cream"
                style={{ background: 'rgba(18,38,31,0.65)', backdropFilter: 'blur(10px)' }}
              >
                Radha Mishra &amp; Surbhi Kumari · The Diets
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Individual profile showcases ──────────────────────────────── */}
      <section className="relative w-full bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-12">
          <div className="space-y-24 md:space-y-36">
            {siteConfig.dietitians.map((d, i) => (
              <article
                key={d.slug}
                className="diet-profile grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-16"
              >
                {/* Portrait */}
                <div
                  className={`relative overflow-hidden rounded-[2rem] border border-green-deep/12 shadow-xl ${
                    i % 2 === 1 ? 'md:order-2' : ''
                  }`}
                >
                  <div className="aspect-[4/5] w-full">
                    <EditorialPortrait
                      src={PORTRAIT_SRCS[d.slug]}
                      alt={d.name}
                      className="h-full w-full"
                      objectPosition="center 12%"
                    />
                  </div>
                  {/* Focus tag pills over portrait */}
                  <div className="absolute bottom-6 left-5 right-5 flex flex-wrap gap-2">
                    {d.focusTags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/20 px-3 py-1 text-[10px] font-medium text-cream"
                        style={{ background: 'rgba(18,38,31,0.6)', backdropFilter: 'blur(8px)' }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className={`flex flex-col justify-center ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                  <p className="eyebrow mb-4 text-green-deep/55">
                    {String(i + 1).padStart(2, '0')} / {String(siteConfig.dietitians.length).padStart(2, '0')}
                  </p>
                  <h2 className="display-xl font-light text-green-deep">{d.name}</h2>
                  <p className="mt-3 text-sm font-medium text-green-deep/70 md:text-base">{d.title}</p>
                  <p className="mt-6 max-w-md text-sm leading-relaxed text-green-deep/80 text-pretty md:text-base">
                    {d.bio}
                  </p>

                  {/* Qualifications */}
                  <div className="mt-10">
                    <p className="eyebrow mb-4 text-green-deep/50">Qualifications</p>
                    <ul className="space-y-2.5">
                      {d.qualifications.map((q) => (
                        <li key={q} className="flex items-start gap-3 text-sm text-green-deep/85 md:text-base">
                          <Check className="mt-1 shrink-0 text-gold" size={16} strokeWidth={2} />
                          <span>{q}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Focus areas */}
                  <div className="mt-8">
                    <p className="eyebrow mb-4 text-green-deep/50">Focus areas</p>
                    <div className="flex flex-wrap gap-2.5">
                      {d.focusTags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border border-green-deep/20 bg-sage/60 px-4 py-2 text-xs font-medium text-green-deep md:text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Consultation style */}
                  <div className="mt-8 rounded-2xl border border-green-deep/12 bg-sage/50 px-6 py-5">
                    <p className="eyebrow mb-2 text-green-deep/50">Consultation style</p>
                    <p className="text-sm leading-relaxed text-green-deep/80">
                      Unhurried 1-on-1 video sessions built around your schedule, kitchen, and everyday
                      reality. Every plan is practical, flexible, and written in plain language.
                    </p>
                  </div>

                  <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                    <Link to={`/book?dietitian=${d.slug}`} className="btn-solid">
                      Book with {d.name.split(' ')[0]}
                    </Link>
                    <Link to="/programs" className="ink-link text-sm font-medium">
                      View programs →
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
