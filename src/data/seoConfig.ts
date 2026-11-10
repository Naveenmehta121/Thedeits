import { siteConfig } from './siteConfig';

/**
 * Global Configurable Domain
 * Set via process.env.SITE_URL or VITE_SITE_URL in production.
 * Falls back to the current temporary deployment URL.
 */
export const SITE_URL = (
  (typeof process !== 'undefined' && (process.env?.SITE_URL || process.env?.VITE_SITE_URL)) ||
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_URL) ||
  'https://thedeits.vercel.app'
).replace(/\/+$/, '');

/**
 * Temporary Domain Detection & Safety Switch
 * Automatically applies 'noindex, nofollow' if hosted on vercel.app, localhost,
 * or when explicitly flagged by environment variable.
 */
const envNoIndex =
  (typeof process !== 'undefined' && (process.env?.NOINDEX || process.env?.VITE_NOINDEX)) ||
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_NOINDEX);

export const IS_TEMP_DOMAIN =
  envNoIndex === 'true' ||
  SITE_URL.includes('vercel.app') ||
  SITE_URL.includes('localhost');

export const ROBOTS_DIRECTIVE = IS_TEMP_DOMAIN
  ? 'noindex, nofollow'
  : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

export interface PageSeoMeta {
  path: string;
  title: string;
  description: string;
  keywords: string[];
  primaryKeyword: string;
}

export const SEO_PAGES: Record<string, PageSeoMeta> = {
  '/': {
    path: '/',
    title: 'Online Dietitian India | 1:1 Video Consultations — The Diets',
    description:
      'Personalised online diet & nutrition consultations by clinical dietitians Radha Mishra & Surbhi Kumari. Home-cooked Indian meal plans for lasting wellness.',
    primaryKeyword: 'Online Dietitian India',
    keywords: [
      'online dietitian india',
      'online diet consultation',
      'best clinical nutritionist india',
      'weight loss dietitian online',
      'pcos diet consultation online',
      'diabetes meal plan india',
      'indian diet plan for weight loss',
      'the diets',
    ],
  },
  '/dietitians': {
    path: '/dietitians',
    title: 'Clinical Dietitians in India | Radha & Surbhi — The Diets',
    description:
      'Meet clinical dietitians Dt. Radha Mishra (M.Sc., CDE) & Dt. Surbhi Kumari (M.Sc.). 1-on-1 private video nutrition guidance for PCOS, diabetes, and weight loss.',
    primaryKeyword: 'Clinical Dietitians in India',
    keywords: [
      'clinical dietitians in india',
      'radha mishra clinical nutritionist',
      'surbhi kumari dietitian',
      'certified diabetes educator online',
      'online nutrition specialist',
      'best dietitian for pcos india',
    ],
  },
  '/programs': {
    path: '/programs',
    title: 'Online Diet Programs | Weight Loss & PCOS — The Diets',
    description:
      'Evidence-based online diet programs for weight loss, PCOS/PCOD, diabetes, and gut health. Home-cooked Indian meal frameworks paced for your daily routine.',
    primaryKeyword: 'Online Diet Programs',
    keywords: [
      'online diet programs',
      'weight loss program india',
      'pcos pcod nutrition program',
      'diabetes management diet plan',
      'metabolic reset diet',
      'therapeutic nutrition packages',
    ],
  },
  '/how-it-works': {
    path: '/how-it-works',
    title: 'How Online Diet Consultation Works | Steps — The Diets',
    description:
      'Learn how 1-on-1 online video nutrition works with The Diets. Simple 3-step process from dietary intake to custom home-cooked Indian meal plans & WhatsApp checks.',
    primaryKeyword: 'How Online Diet Consultation Works',
    keywords: [
      'how online diet consultation works',
      'video dietitian process',
      'online nutrition consultation steps',
      'customized meal plan follow up',
      'whatsapp diet tracking',
    ],
  },
  '/faq': {
    path: '/faq',
    title: 'Dietitian Consultation FAQs | Indian Meal Plans — The Diets',
    description:
      'Answers to frequent questions about online dietitian consultations, meal flexibility, Indian food choices, appointment scheduling, and weekly WhatsApp support.',
    primaryKeyword: 'Dietitian Consultation FAQs',
    keywords: [
      'dietitian consultation faqs',
      'online diet questions',
      'indian diet consultation cost',
      'meal planning questions',
      'home cooking diet queries',
    ],
  },
  '/book': {
    path: '/book',
    title: 'Book Online Dietitian Consultation | Video Slot — The Diets',
    description:
      'Book a private 1-on-1 video consultation with clinical dietitians Radha Mishra or Surbhi Kumari. Simple intake form with quick 24-hour consultation scheduling.',
    primaryKeyword: 'Book Online Dietitian Consultation',
    keywords: [
      'book online dietitian consultation',
      'schedule nutrition call',
      'dietitian appointment online',
      'video diet consultation booking',
      'hire personal dietitian online',
    ],
  },
};

/**
 * Generate Structured Data (JSON-LD) for any given path
 */
export function getJsonLd(path: string) {
  const currentUrl = `${SITE_URL}${path === '/' ? '' : path}`;
  const logoUrl = `${SITE_URL}/logo.png`;
  const ogImageUrl = `${SITE_URL}/og-image.jpg`;

  const organization = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: siteConfig.brand.name,
    alternateName: ['The Diets India', 'TheDiets'],
    url: `${SITE_URL}/`,
    logo: {
      '@type': 'ImageObject',
      url: logoUrl,
      width: 512,
      height: 512,
      caption: 'The Diets Logo',
    },
    image: ogImageUrl,
    email: siteConfig.contact.email,
    telephone: siteConfig.contact.phoneRaw,
    sameAs: [siteConfig.social.instagram, siteConfig.social.facebook],
    founder: [
      { '@id': `${SITE_URL}/#radha-mishra` },
      { '@id': `${SITE_URL}/#surbhi-kumari` },
    ],
    slogan: siteConfig.brand.tagline,
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: siteConfig.brand.name,
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
  };

  const professionalService = {
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#business`,
    name: siteConfig.brand.name,
    url: `${SITE_URL}/`,
    logo: logoUrl,
    image: ogImageUrl,
    telephone: siteConfig.contact.phoneRaw,
    email: siteConfig.contact.email,
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'UPI, Net Banking, Credit Card, Debit Card',
    areaServed: {
      '@type': 'Country',
      name: 'India',
    },
    serviceType: 'Online Nutrition and Diet Consultation',
    description:
      '100% private 1-on-1 online video dietitian consultations by clinical nutritionists Dt. Radha Mishra and Dt. Surbhi Kumari across India.',
  };

  const radhaPerson = {
    '@type': 'Person',
    '@id': `${SITE_URL}/#radha-mishra`,
    name: 'Dt. Radha Mishra',
    jobTitle: 'Founder & Clinical Nutritionist',
    worksFor: { '@id': `${SITE_URL}/#organization` },
    image: `${SITE_URL}/images/radha-mishra.webp`,
    description:
      'Clinical Nutritionist and Certified Diabetes Educator (CDE) specialising in personalised nutrition, diabetes management, PCOS/PCOD care, and home-cooked Indian diet planning.',
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'M.Sc. Clinical Nutrition',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'certification',
        name: 'Certified Diabetes Educator (CDE)',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'membership',
        name: 'IADWL Dietitian Member',
      },
    ],
    knowsAbout: [
      'Clinical Nutrition',
      'Diabetes Management',
      'PCOS/PCOD Diet Planning',
      'Weight Loss & Inch Loss',
      'Indian Home-Cooked Nutrition',
    ],
  };

  const surbhiPerson = {
    '@type': 'Person',
    '@id': `${SITE_URL}/#surbhi-kumari`,
    name: 'Dt. Surbhi Kumari',
    jobTitle: 'Co-Founder & Dietitian',
    worksFor: { '@id': `${SITE_URL}/#organization` },
    image: `${SITE_URL}/images/surbhi-kumari.webp`,
    description:
      'Dietitian and Nutrition Professional focusing on personalised diet planning, thyroid nutrition, gut health, and sustainable lifestyle management for long-term wellness.',
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'B.Sc. Food and Nutrition',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'M.Sc. Food and Nutrition',
      },
    ],
    knowsAbout: [
      'Therapeutic Nutrition',
      'Thyroid Nutrition (Hypothyroidism)',
      'Gut Health & Digestive Comfort',
      'PCOS/PCOD Lifestyle Protocols',
      'Weight Management',
    ],
  };

  const breadcrumbs = path === '/' ? null : {
    '@type': 'BreadcrumbList',
    '@id': `${currentUrl}/#breadcrumb`,
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${SITE_URL}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: SEO_PAGES[path]?.primaryKeyword || SEO_PAGES[path]?.title || 'Page',
        item: currentUrl,
      },
    ],
  };

  // Page-specific entities
  const graph: any[] = [organization, website, professionalService, radhaPerson, surbhiPerson];
  if (breadcrumbs) graph.push(breadcrumbs);

  if (path === '/' || path === '/faq') {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${currentUrl}/#faqpage`,
      mainEntity: siteConfig.faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    });
  }

  if (path === '/' || path === '/programs') {
    siteConfig.programs.forEach((prog, idx) => {
      graph.push({
        '@type': 'Service',
        '@id': `${SITE_URL}/programs#service-${idx + 1}`,
        name: prog.name,
        description: prog.forWhom,
        provider: { '@id': `${SITE_URL}/#organization` },
        serviceType: 'Online Clinical Diet Consultation',
        areaServed: { '@type': 'Country', name: 'India' },
        offers: {
          '@type': 'Offer',
          price: prog.price.replace(/[^\d]/g, '') || '0',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/book`,
        },
      });
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
