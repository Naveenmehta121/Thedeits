import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowDown, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

export default function HeroSection() {
  const root = useRef<HTMLElement>(null);

  // ── GSAP entrance animations ──────────────────────────────────────────────
  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      // Headline words reveal mask
      gsap.fromTo(
        '.hero-word',
        { yPercent: 115, opacity: 0 },
        {
          yPercent: 0,
          opacity: 1,
          duration: 1.0,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          stagger: 0.08,
          delay: 0.2,
        },
      );

      // Paragraph, CTAs and subtext fade-up
      gsap.fromTo(
        '.hero-fade',
        { y: 22, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.0,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          stagger: 0.12,
          delay: 0.65,
        },
      );

      // Scroll indicator pulse
      gsap.to('.hero-scroll', {
        y: 6,
        opacity: 0.75,
        duration: 1.8,
        ease: 'sine.inOut',
        repeat: -1,
        yoyo: true,
        delay: 1.4,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <section
        ref={root}
        id="home"
        className="relative min-h-[max(100dvh,820px)] lg:min-h-[100dvh] w-full overflow-hidden bg-[#0B221A] flex flex-col justify-between"
      >
        {/* ── 1. Responsive Full-Bleed Background (9:16 Mobile / 16:9 Desktop) ─── */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <picture className="hero-picture-wrap lg:block w-full h-full">
            <source media="(max-width: 1023px)" srcSet="/hero-bg-mobile.webp" width="1080" height="1935" />
            <img
              src="/hero-bg.webp"
              alt="Dt. Radha Mishra and Dt. Surbhi Kumari at The Diets consultation desk"
              width="2200"
              height="1227"
              className="hero-picture-img lg:w-full lg:h-full lg:object-cover lg:object-right-bottom"
              loading="eager"
              // @ts-ignore
              fetchpriority="high"
              decoding="async"
            />
          </picture>

          {/* Subtle top emerald blend on mobile for clean text legibility */}
          <div
            className="lg:hidden absolute inset-x-0 top-0 h-[42%] z-[1] bg-gradient-to-b from-[#0B221A] via-[#0B221A]/50 to-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Subtle Left-to-Right Gradient Overlay on desktop */}
          <div
            className="hidden lg:block absolute inset-0 z-[1] bg-gradient-to-r from-[#0B221A] via-[#0B221A]/80 to-transparent lg:via-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Subtle bottom ground vignette */}
          <div
            className="absolute inset-x-0 bottom-0 h-20 lg:h-28 z-[2] bg-gradient-to-t from-[#0B221A] to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* ── 2. Content Layout Grid (Responsive on all screen sizes) ───── */}
        <div className="relative z-10 mx-auto flex flex-1 w-full max-w-7xl flex-col items-start justify-start lg:justify-center px-6 pt-[88px] sm:pt-28 pb-12 md:px-12 md:pt-32 lg:flex-row lg:items-center lg:justify-between lg:pb-16">

          {/* ── Left Column Content (w-full lg:w-[48%]) ─────────────────── */}
          <div className="relative z-10 w-full lg:w-[48%] flex flex-col justify-center text-left">

            {/* H1 Serif Heading: Formatted into 3 distinct cascading rows */}
            <h1
              className="text-white text-balance"
              style={{
                fontFamily: "'Fraunces', Georgia, serif",
                fontWeight: 300,
                lineHeight: 1.04,
                letterSpacing: '-0.03em',
                fontSize: 'clamp(2.5rem, 5.2vw, 4.25rem)',
              }}
            >
              {/* Line 1: "Nutrition guidance" */}
              <span className="block mb-1 sm:mb-2">
                <span className="word-mask overflow-hidden align-bottom inline-block mr-[0.24em]">
                  <span className="hero-word inline-block">Nutrition</span>
                </span>
                <span className="word-mask overflow-hidden align-bottom inline-block">
                  <span className="hero-word inline-block">guidance</span>
                </span>
              </span>

              {/* Line 2: "that fits" (fits in italic) */}
              <span className="block mb-1 sm:mb-2">
                <span className="word-mask overflow-hidden align-bottom inline-block mr-[0.24em]">
                  <span className="hero-word inline-block">that</span>
                </span>
                <span className="word-mask overflow-hidden align-bottom inline-block">
                  <span
                    className="hero-word inline-block italic font-light"
                    style={{ color: '#EAEBE5' }}
                  >
                    fits
                  </span>
                </span>
              </span>

              {/* Line 3: "your life." (life in italic) */}
              <span className="block">
                <span className="word-mask overflow-hidden align-bottom inline-block mr-[0.24em]">
                  <span className="hero-word inline-block">your</span>
                </span>
                <span className="word-mask overflow-hidden align-bottom inline-block">
                  <span className="hero-word inline-block">
                    <span
                      className="italic font-light"
                      style={{ color: '#EAEBE5' }}
                    >
                      life
                    </span>
                    .
                  </span>
                </span>
              </span>
            </h1>

            {/* Sub-headline / Body */}
            <p className="hero-fade mt-4 lg:mt-5 max-w-xl text-base leading-relaxed text-[#AEB7B0] md:text-[17px] font-sans font-normal">
              Calm, practical clinical nutrition paced around your real schedule and
              kitchen—led 1-on-1 by Radha Mishra and Surbhi Kumari.
            </p>

            {/* CTAs */}
            <div className="hero-fade mt-6 lg:mt-8 flex flex-col items-start gap-3 sm:gap-4 sm:flex-row sm:items-center">
              {/* Primary CTA: Translucent glass pill */}
              <Link
                to="/book"
                className="bg-white/10 hover:bg-white/15 border border-white/25 text-white rounded-full px-7 py-3.5 backdrop-blur-sm transition-all duration-300 font-medium text-[15px] inline-flex items-center justify-center hover:-translate-y-0.5 active:translate-y-0 active:scale-[0.98] shadow-[0_4px_20px_rgba(0,0,0,0.2)]"
              >
                Book a Consultation
              </Link>

              {/* Secondary CTA: WhatsApp link with inline SVG icon */}
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2.5 px-3 py-2 text-[15px] font-normal text-[#EAEBE5]/80 transition-all duration-300 hover:text-white"
              >
                <MessageCircle size={16} className="text-[#AEB7B0] transition-colors duration-300 group-hover:text-white" />
                <span>Or chat on WhatsApp</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>

            {/* Subtext: Meet the Dietitians */}
            <div className="hero-fade mt-3.5 lg:mt-5">
              <a
                href="#meet"
                className="group inline-flex items-center gap-1.5 text-xs text-[#AEB7B0]/65 transition-colors duration-300 hover:text-[#AEB7B0]"
              >
                <span>Meet the Dietitians</span>
                <span className="text-xs transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </a>
            </div>
          </div>
        </div>

        {/* ── Bottom SCROLL Indicator (Desktop) ───────────────────────────── */}
        <div className="hero-scroll relative z-10 mb-4 hidden lg:flex flex-col items-center justify-center gap-1 text-[#AEB7B0]/60 pointer-events-none select-none">
          <span className="text-[9.5px] font-medium tracking-[0.28em] text-[#AEB7B0]/75 uppercase">
            SCROLL
          </span>
          <ArrowDown size={14} className="text-[#AEB7B0]/75" />
        </div>
      </section>
    </>
  );
}
