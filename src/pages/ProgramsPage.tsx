import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight, Clock } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { useSeo } from '@/hooks/useSeo';
import { siteConfig } from '@/data/siteConfig';

gsap.registerPlugin(ScrollTrigger);

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '');
}

// Badge for the most popular tier (12-week)
const POPULAR_INDEX = 2;

export default function ProgramsPage() {
  useSeo({
    title: 'Programs',
    description:
      'Three calm nutrition programs from The Diets—First Clarity Session, 4-Week Rhythm Reset, and 12-Week Sustained Care. Private video consultations with flexible, home-cooked guidance.',
  });

  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>('.prog-card').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: 'cubic-bezier(0.22,1,0.36,1)',
            scrollTrigger: { trigger: el, start: 'top 80%' },
          },
        );
      });
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Three unhurried ways to begin."
        intro="From a single clarity session to sustained twelve-week care—each program is private, video-based, and paced around your real routine. No rigid diets, no separate cooking."
      />

      <section ref={root} className="relative w-full bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
            {siteConfig.programs.map((p, i) => {
              const isPopular = i === POPULAR_INDEX;
              return (
                <article
                  key={p.name}
                  className={`prog-card relative flex flex-col rounded-[2rem] border p-8 md:p-10 ${
                    isPopular
                      ? 'border-green-deep/30 bg-green-deep text-cream shadow-xl'
                      : 'border-green-deep/15 bg-sage/40'
                  }`}
                >
                  {/* Most popular badge */}
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full border border-gold/50 bg-gold px-4 py-1 text-[10px] font-semibold uppercase tracking-widest text-green-obsidian whitespace-nowrap">
                      Most Popular
                    </div>
                  )}

                  <p className={`eyebrow mb-5 ${isPopular ? 'text-cream/50' : 'text-green-deep/50'}`}>
                    Program {String(i + 1).padStart(2, '0')}
                  </p>
                  <h2 className={`display-lg font-light ${isPopular ? 'text-cream' : 'text-green-deep'}`}>
                    {p.name}
                  </h2>

                  {/* Duration badge */}
                  {'duration' in p && p.duration && (
                    <div className={`mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium w-fit ${
                      isPopular ? 'bg-white/10 text-cream/80' : 'bg-green-deep/8 text-green-deep/70'
                    }`}>
                      <Clock size={12} />
                      {p.duration}
                    </div>
                  )}

                  <div className="mt-6">
                    <p className={`eyebrow mb-2 ${isPopular ? 'text-cream/45' : 'text-green-deep/45'}`}>Best For</p>
                    <p className={`text-sm leading-relaxed text-pretty ${isPopular ? 'text-cream/80' : 'text-green-deep/80'}`}>
                      {p.forWhom}
                    </p>
                  </div>

                  <div className="mt-8 flex-1">
                    <p className={`eyebrow mb-4 ${isPopular ? 'text-cream/45' : 'text-green-deep/45'}`}>Includes</p>
                    <ul className="space-y-3">
                      {p.includes.map((item) => (
                        <li
                          key={item}
                          className={`flex items-start gap-3 text-sm leading-relaxed ${isPopular ? 'text-cream/85' : 'text-green-deep/85'}`}
                        >
                          <Check className={`mt-1 shrink-0 ${isPopular ? 'text-gold' : 'text-gold'}`} size={15} strokeWidth={2} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className={`mt-8 border-t pt-6 ${isPopular ? 'border-white/15' : 'border-green-deep/15'}`}>
                    <p className={`eyebrow mb-2 ${isPopular ? 'text-cream/45' : 'text-green-deep/45'}`}>Investment</p>
                    <div className="flex items-baseline gap-3">
                      <span className={`font-display text-3xl font-light ${isPopular ? 'text-cream' : 'text-green-deep'}`}>
                        {p.price}
                      </span>
                      {'mrp' in p && p.mrp && (
                        <span className={`text-sm line-through ${isPopular ? 'text-cream/40' : 'text-green-deep/40'}`}>
                          {p.mrp}
                        </span>
                      )}
                    </div>
                    {'mrp' in p && p.mrp && (
                      <p className={`mt-1 text-[11px] ${isPopular ? 'text-cream/50' : 'text-green-deep/50'}`}>
                        Introductory consultation fee
                      </p>
                    )}
                  </div>

                  <div className="mt-8">
                    <Link
                      to={`/book?program=${slugify(p.name)}`}
                      className={`group inline-flex items-center gap-2 text-sm font-medium ${isPopular ? 'text-cream' : 'text-green-deep'}`}
                    >
                      Enquire
                      <ArrowRight
                        size={16}
                        className="transition-transform duration-500 ease-smooth group-hover:translate-x-1.5"
                      />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>

          <p className="mx-auto mt-16 max-w-xl text-center text-sm leading-relaxed text-green-deep/60 text-pretty">
            Not sure which fits? Begin with a First Clarity Session—we will help you find
            the right next step from there.
          </p>
        </div>
      </section>
    </>
  );
}
