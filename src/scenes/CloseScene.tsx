import { useLayoutEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Mail, MessageCircle, Phone } from 'lucide-react';
import VideoBackground from '@/components/VideoBackground';
import { siteConfig } from '@/data/siteConfig';

gsap.registerPlugin(ScrollTrigger);

export default function CloseScene() {
  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.close-container',
        { borderRadius: '2rem' },
        {
          borderRadius: '0rem',
          ease: 'none',
          scrollTrigger: {
            trigger: root.current,
            start: 'top 80%',
            end: 'bottom bottom',
            scrub: 1,
          },
        },
      );
      gsap.fromTo(
        '.close-headline',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.1,
          ease: 'cubic-bezier(0.22,1,0.36,1)',
          scrollTrigger: { trigger: root.current, start: 'top 55%' },
        },
      );
      gsap.fromTo(
        '.close-cta',
        { y: 24, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'cubic-bezier(0.22,1,0.36,1)',
          stagger: 0.12,
          scrollTrigger: { trigger: root.current, start: 'top 45%' },
        },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={root} className="relative w-full bg-green-obsidian py-20 md:py-28">
      <div className="mx-auto max-w-content px-4 md:px-8">
        <div className="close-container relative min-h-[88dvh] overflow-hidden">
          <VideoBackground variant="emerald" src={siteConfig.videos.emerald} overlayOpacity={0.3} />

          <div className="relative z-10 flex min-h-[88dvh] flex-col items-center justify-center px-6 text-center">
            <p className="close-cta eyebrow mb-8 text-cream/60">The Close</p>
            <h2 className="close-headline display-xxl max-w-[12ch] font-light text-cream text-balance">
              Ready to begin?
            </h2>

            <div className="close-cta mt-12 flex flex-col items-center gap-5 sm:flex-row">
              <Link to="/book" className="glass-pill glass-pill--solid">
                Request a Consultation
              </Link>
            </div>

            <div className="close-cta mt-10 flex flex-col items-center gap-4 text-cream/80 sm:flex-row sm:gap-8">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="quiet-link"
              >
                <MessageCircle size={16} />
                WhatsApp · {siteConfig.contact.phone}
              </a>
              <a href={`tel:${siteConfig.contact.phoneRaw}`} className="quiet-link">
                <Phone size={16} />
                {siteConfig.contact.phone}
              </a>
              <a href={`mailto:${siteConfig.contact.email}`} className="quiet-link">
                <Mail size={16} />
                {siteConfig.contact.email}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
