import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * On every route change:
 *  - instant scroll-to-top
 *  - 500ms fade transition on the page wrapper
 *  - ScrollTrigger.refresh() after the new layout settles
 *
 * Home page GSAP animations are untouched — this only fades the wrapper
 * and recalculates triggers; it never resets or rewrites home-page tweens.
 */
export function useRouteTransition() {
  const { pathname } = useLocation();
  const wrapperRef = useRef<HTMLDivElement>(null);
  const firstLoad = useRef(true);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    // scroll to top instantly (bypass Lenis smoothing for route changes)
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });

    if (firstLoad.current) {
      firstLoad.current = false;
      gsap.set(wrapper, { opacity: 1 });
    } else {
      gsap.fromTo(
        wrapper,
        { opacity: 0, y: 8 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' },
      );
    }

    // recalc after layout + fonts settle
    const r1 = window.setTimeout(() => ScrollTrigger.refresh(), 200);
    const r2 = window.setTimeout(() => ScrollTrigger.refresh(), 700);

    return () => {
      window.clearTimeout(r1);
      window.clearTimeout(r2);
    };
  }, [pathname]);

  return wrapperRef;
}
