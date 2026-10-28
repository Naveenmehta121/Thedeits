import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Check, ArrowRight } from 'lucide-react';
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
            {siteConfig.programs.map((p, i) => (
              <article
                key={p.name}
                className="prog-card flex flex-col rounded-[2rem] border border-green-deep/15 bg-sage/40 p-8 md:p-10"
              >
                <p className="eyebrow mb-5 text-green-deep/50">
                  Program {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="display-lg font-light text-green-deep">{p.name}</h2>

                <div className="mt-6">
                  <p className="eyebrow mb-2 text-green-deep/45">For</p>
                  <p className="text-sm leading-relaxed text-green-deep/80 text-pretty">
                    {p.forWhom}
                  </p>
                </div>

                <div className="mt-8 flex-1">
                  <p className="eyebrow mb-4 text-green-deep/45">Includes</p>
                  <ul className="space-y-3">
                    {p.includes.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm leading-relaxed text-green-deep/85"
                      >
                        <Check className="mt-1 shrink-0 text-gold" size={15} strokeWidth={2} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 border-t border-green-deep/15 pt-6">
                  <p className="eyebrow mb-2 text-green-deep/45">Investment</p>
                  <p className="font-display text-2xl font-light text-green-deep">{p.price}</p>
                </div>

                <div className="mt-8">
                  <Link
                    to={`/book?program=${slugify(p.name)}`}
                    className="group inline-flex items-center gap-2 text-sm font-medium text-green-deep"
                  >
                    Enquire
                    <ArrowRight
                      size={16}
                      className="transition-transform duration-500 ease-smooth group-hover:translate-x-1.5"
                    />
                  </Link>
                </div>
              </article>
            ))}
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
