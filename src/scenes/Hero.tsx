import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ArrowDown, MessageCircle, Video } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

// ─── Equalizer Audio Bars for Floating Badge ────────────────────────────────
function AudioBars() {
  return (
    <span className="flex items-end gap-[2px]" aria-hidden="true" style={{ height: 13 }}>
      {[4, 9, 6, 11, 8, 5, 10].map((h, i) => (
        <span
          key={i}
          className="w-[2px] rounded-full bg-[#B88A4A]"
          style={{
            height: `${h}px`,
            animation: `audioPulse ${0.55 + i * 0.08}s ease-in-out infinite alternate`,
            animationDelay: `${i * 0.07}s`,
          }}
        />
      ))}
    </span>
  );
}

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

      // Mobile card entrance
      gsap.fromTo(
        '.hero-mobile-card',
        { opacity: 0, y: 28, scale: 0.98 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          delay: 0.8,
        },
      );

      // Desktop floating badge gentle entrance
      gsap.fromTo(
        '.hero-badge-desktop',
        { opacity: 0, y: 20, scale: 0.96 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.1,
          ease: 'cubic-bezier(0.22, 1, 0.36, 1)',
          delay: 0.85,
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
      <style>{`
        @keyframes audioPulse {
          from { transform: scaleY(0.35); }
          to { transform: scaleY(1); }
        }
      `}</style>

      <section
        ref={root}
        id="home"
        className="relative min-h-[100dvh] w-full overflow-hidden bg-[#0B221A] flex flex-col justify-between"
      >
        {/* ── 1. Desktop Full-Bleed 16:9 Background Image (>= lg screens) ─── */}
        <div className="hidden lg:block absolute inset-0 z-0">
          <img
            src="/hero-bg.png"
            alt="Dt. Radha Mishra and Dt. Surbhi Kumari at The Diets consultation desk"
            className="w-full h-full object-cover object-right-bottom"
            style={{ objectPosition: 'right bottom' }}
            loading="eager"
            decoding="async"
          />

          {/* Subtle Left-to-Right Gradient Overlay on desktop */}
          <div
            className="absolute inset-0 z-[1] bg-gradient-to-r from-[#0B221A] via-[#0B221A]/80 to-transparent lg:via-transparent pointer-events-none"
            aria-hidden="true"
          />

          {/* Subtle bottom ground vignette */}
          <div
            className="absolute inset-x-0 bottom-0 h-28 z-[2] bg-gradient-to-t from-[#0B221A] to-transparent pointer-events-none"
            aria-hidden="true"
          />
        </div>

        {/* ── 2. Content Layout Grid (Responsive on all screen sizes) ───── */}
        <div className="relative z-10 mx-auto flex flex-1 w-full max-w-7xl flex-col items-start justify-center px-6 pt-24 pb-28 md:px-12 md:pt-32 lg:flex-row lg:items-center lg:justify-between lg:pb-16">

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
            <p className="hero-fade mt-5 max-w-xl text-base leading-relaxed text-[#AEB7B0] md:text-[17px] font-sans font-normal">
              Calm, practical clinical nutrition paced around your real schedule and
              kitchen—led 1-on-1 by Radha Mishra and Surbhi Kumari.
            </p>

            {/* CTAs */}
            <div className="hero-fade mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
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
            <div className="hero-fade mt-5">
              <a
                href="#meet"
                className="group inline-flex items-center gap-1.5 text-xs text-[#AEB7B0]/65 transition-colors duration-300 hover:text-[#AEB7B0]"
              >
                <span>Meet the Dietitians</span>
                <span className="text-xs transition-transform duration-300 group-hover:translate-y-0.5">↓</span>
              </a>
            </div>
          </div>

          {/* ── 3. Dedicated Mobile & Tablet Visual Card (< lg screens) ─── */}
          {/* Prominently showcases both dietitians on mobile view without awkward cropping */}
          <div className="hero-mobile-card block lg:hidden w-full max-w-md mt-8 mx-auto">
            <div className="relative h-[270px] sm:h-[330px] w-full rounded-2xl overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.7)] bg-[#071914]">
              <img
                src="/hero-bg.png"
                alt="Dt. Surbhi Kumari and Dt. Radha Mishra at The Diets consultation desk"
                className="w-full h-full object-cover"
                style={{ objectPosition: '77% 25%' }}
                loading="eager"
              />

              {/* Gradient vignette on card */}
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#0B221A]/90 via-transparent to-transparent pointer-events-none"
                aria-hidden="true"
              />

              {/* Mobile Floating Badge (Over desk area) */}
              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center gap-2.5 rounded-xl border border-white/20 bg-[#0A1F17]/92 px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.6)] backdrop-blur-md">
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-[#B88A4A]/20 text-[#B88A4A] border border-[#B88A4A]/30">
                  <Video size={13} className="text-[#B88A4A]" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-[12px] font-medium text-white tracking-wide truncate">
                    Private 1-on-1 Video Calls
                  </p>
                  <div className="flex items-center gap-1.5">
                    <AudioBars />
                    <p className="text-[10px] text-[#AEB7B0] tracking-wide">
                      No extreme rules
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Dietitian name tag under mobile card */}
            <p
              className="mt-3 text-center text-xs tracking-wider text-[#AEB7B0]/80"
              style={{ fontFamily: "'Fraunces', Georgia, serif" }}
            >
              Radha Mishra &amp; Surbhi Kumari
            </p>
          </div>
        </div>

        {/* ── 4. Desktop Floating Badge Card (Anchored bottom-right over desk area) ── */}
        <div
          className="hero-badge-desktop hidden lg:flex absolute bottom-8 right-12 z-10 items-center gap-3.5 rounded-2xl border border-white/15 bg-[#0A1F17]/85 px-4.5 py-3 shadow-[0_16px_36px_rgba(0,0,0,0.55)] backdrop-blur-md transition-all duration-300 hover:border-white/25"
        >
          {/* Badge Icon */}
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#B88A4A]/20 text-[#B88A4A] border border-[#B88A4A]/30">
            <Video size={16} className="text-[#B88A4A]" />
          </div>

          {/* Badge Content */}
          <div className="min-w-0 pr-1">
            <p className="text-[13px] font-medium text-white tracking-wide truncate">
              Private 1-on-1 Video Calls
            </p>
            <div className="mt-1 flex items-center gap-2">
              <AudioBars />
              <p className="text-[11px] text-[#AEB7B0] tracking-wide">
                No extreme rules
              </p>
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
