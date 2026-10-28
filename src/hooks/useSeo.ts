import { useEffect } from 'react';

interface SeoOptions {
  title: string;
  description: string;
}

const DEFAULT_TITLE = 'The Diets — Nutrition guidance that fits your life.';
const DEFAULT_DESC =
  '100% private video consultations with Radha Mishra and Surbhi Kumari. Calm, practical nutrition guidance paced around your daily routine.';

/**
 * Sets document.title and the meta[name=description] / og:description tags.
 * Restores defaults on unmount so each route owns its own SEO.
 */
export function useSeo({ title, description }: SeoOptions) {
  useEffect(() => {
    const fullTitle = title ? `${title} · The Diets` : DEFAULT_TITLE;
    document.title = fullTitle;

    const setMeta = (selector: string, attr: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(selector);
      if (!el) {
        el = document.createElement('meta');
        const [, name] = selector.match(/\[(.+?)="(.+?)"\]/) || [];
        if (name) el.setAttribute(attr === 'property' ? 'property' : 'name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('meta[name="description"]', 'name', description || DEFAULT_DESC);
    setMeta('meta[property="og:description"]', 'property', description || DEFAULT_DESC);
    setMeta('meta[property="og:title"]', 'property', fullTitle);

    return () => {
      document.title = DEFAULT_TITLE;
    };
  }, [title, description]);
}
