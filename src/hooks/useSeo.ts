import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { SEO_PAGES, SITE_URL, ROBOTS_DIRECTIVE, getJsonLd } from '@/data/seoConfig';

interface SeoOptions {
  title?: string;
  description?: string;
}

/**
 * useSeo hook — synchronizes document title, canonical, meta tags, and JSON-LD structured data.
 */
export function useSeo(customMeta?: SeoOptions) {
  const { pathname } = useLocation();

  useEffect(() => {
    const pageMeta = SEO_PAGES[pathname] || SEO_PAGES['/'];
    const title = customMeta?.title
      ? customMeta.title.includes('The Diets')
        ? customMeta.title
        : `${customMeta.title} — The Diets`
      : pageMeta.title;
    const description = customMeta?.description || pageMeta.description;
    const currentUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`;
    const ogImage = `${SITE_URL}/og-image.jpg`;

    // 1. Document title
    document.title = title;

    // Helper to safely set or create meta elements
    const setMeta = (attrName: 'name' | 'property', attrValue: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attrName}="${attrValue}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attrName, attrValue);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    // Helper to safely set link rel tags
    const setLink = (rel: string, href: string, extraAttrs?: Record<string, string>) => {
      let el = document.head.querySelector<HTMLLinkElement>(`link[rel="${rel}"]${extraAttrs?.hreflang ? `[hreflang="${extraAttrs.hreflang}"]` : ''}`);
      if (!el) {
        el = document.createElement('link');
        el.setAttribute('rel', rel);
        if (extraAttrs) {
          Object.entries(extraAttrs).forEach(([k, v]) => el!.setAttribute(k, v));
        }
        document.head.appendChild(el);
      }
      el.setAttribute('href', href);
    };

    // 2. Standard Search Metadata
    setMeta('name', 'description', description);
    setMeta('name', 'robots', ROBOTS_DIRECTIVE);

    // 3. Canonical and Alternates
    setLink('canonical', currentUrl);
    setLink('alternate', currentUrl, { hreflang: 'en-IN' });
    setLink('alternate', currentUrl, { hreflang: 'x-default' });

    // 4. OpenGraph Metadata
    setMeta('property', 'og:site_name', 'The Diets');
    setMeta('property', 'og:type', 'website');
    setMeta('property', 'og:title', title);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', currentUrl);
    setMeta('property', 'og:image', ogImage);
    setMeta('property', 'og:image:width', '1200');
    setMeta('property', 'og:image:height', '630');
    setMeta('property', 'og:image:alt', 'The Diets — 1:1 Online Video Dietitian Consultations');
    setMeta('property', 'og:locale', 'en_IN');

    // 5. Twitter Card Metadata
    setMeta('name', 'twitter:card', 'summary_large_image');
    setMeta('name', 'twitter:title', title);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', ogImage);

    // 6. JSON-LD Structured Data
    const jsonLdData = getJsonLd(pathname);
    let scriptEl = document.head.querySelector<HTMLScriptElement>('script#seo-jsonld');
    if (!scriptEl) {
      scriptEl = document.createElement('script');
      scriptEl.id = 'seo-jsonld';
      scriptEl.type = 'application/ld+json';
      document.head.appendChild(scriptEl);
    }
    scriptEl.textContent = JSON.stringify(jsonLdData);
  }, [pathname, customMeta?.title, customMeta?.description]);
}
