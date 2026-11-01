import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, '..');
const distDir = path.resolve(rootDir, 'dist');
const distSsrDir = path.resolve(rootDir, 'dist-ssr');

// Import SSR renderer bundle
const entryServerPath = path.resolve(distSsrDir, 'entry-server.js');
const { render } = await import(pathToFileURL(entryServerPath).href);

// Read client index.html template
const templatePath = path.resolve(distDir, 'index.html');
if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}
const rawTemplate = fs.readFileSync(templatePath, 'utf8');

// Configurable domain
const rawSiteUrl =
  process.env.SITE_URL ||
  process.env.VITE_SITE_URL ||
  'https://thedeits.vercel.app';
const SITE_URL = rawSiteUrl.replace(/\/+$/, '');

const isTempDomain =
  process.env.NOINDEX === 'true' ||
  SITE_URL.includes('vercel.app') ||
  SITE_URL.includes('localhost');

const ROBOTS_DIRECTIVE = isTempDomain
  ? 'noindex, nofollow'
  : 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';

// Page-specific metadata
const PAGES = {
  '/': {
    title: 'Online Dietitian India | 1:1 Video Consultations — The Diets',
    description:
      'Personalised online diet & nutrition consultations by clinical dietitians Radha Mishra & Surbhi Kumari. Home-cooked Indian meal plans for lasting wellness.',
    priority: '1.0',
    changefreq: 'weekly',
  },
  '/dietitians': {
    title: 'Clinical Dietitians in India | Radha & Surbhi — The Diets',
    description:
      'Meet clinical dietitians Dt. Radha Mishra (M.Sc., CDE) & Dt. Surbhi Kumari (M.Sc.). 1-on-1 private video nutrition guidance for PCOS, diabetes, and weight loss.',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/programs': {
    title: 'Online Diet Programs | Weight Loss & PCOS — The Diets',
    description:
      'Evidence-based online diet programs for weight loss, PCOS/PCOD, diabetes, and gut health. Home-cooked Indian meal frameworks paced for your daily routine.',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/how-it-works': {
    title: 'How Online Diet Consultation Works | Steps — The Diets',
    description:
      'Learn how 1-on-1 online video nutrition works with The Diets. Simple 3-step process from dietary intake to custom home-cooked Indian meal plans & WhatsApp checks.',
    priority: '0.7',
    changefreq: 'monthly',
  },
  '/faq': {
    title: 'Dietitian Consultation FAQs | Indian Meal Plans — The Diets',
    description:
      'Answers to frequent questions about online dietitian consultations, meal flexibility, Indian food choices, appointment scheduling, and weekly WhatsApp support.',
    priority: '0.6',
    changefreq: 'monthly',
  },
  '/book': {
    title: 'Book Online Dietitian Consultation | Video Slot — The Diets',
    description:
      'Book a private 1-on-1 video consultation with clinical dietitians Radha Mishra or Surbhi Kumari. Simple intake form with quick 24-hour consultation scheduling.',
    priority: '0.9',
    changefreq: 'weekly',
  },
  '/404': {
    title: 'Page Not Found — The Diets',
    description: 'The requested nutrition page could not be found. Return to The Diets homepage.',
    priority: '0.1',
    changefreq: 'yearly',
  },
};

// Generate JSON-LD for route
function buildJsonLd(route) {
  const currentUrl = `${SITE_URL}${route === '/' ? '' : route}`;
  const logoUrl = `${SITE_URL}/logo.png`;
  const ogImageUrl = `${SITE_URL}/og-image.jpg`;

  const organization = {
    '@type': 'Organization',
    '@id': `${SITE_URL}/#organization`,
    name: 'The Diets',
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
    email: 'thedeits4you@gmail.com',
    telephone: '+918340735168',
    sameAs: [
      'https://www.instagram.com/thedietsforyou_?dlrf=MXgxOG0xcWt4YzF3Zw==',
      'https://www.facebook.com/share/18P5EPjm6D/',
    ],
    founder: [
      { '@id': `${SITE_URL}/#radha-mishra` },
      { '@id': `${SITE_URL}/#surbhi-kumari` },
    ],
    slogan: 'Your Health, Your Goals, Your Personalised Nutrition Journey.',
  };

  const website = {
    '@type': 'WebSite',
    '@id': `${SITE_URL}/#website`,
    url: `${SITE_URL}/`,
    name: 'The Diets',
    publisher: { '@id': `${SITE_URL}/#organization` },
    inLanguage: 'en-IN',
  };

  const professionalService = {
    '@type': 'ProfessionalService',
    '@id': `${SITE_URL}/#business`,
    name: 'The Diets',
    url: `${SITE_URL}/`,
    logo: logoUrl,
    image: ogImageUrl,
    telephone: '+918340735168',
    email: 'thedeits4you@gmail.com',
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
        name: 'M.Sc. Food and Nutrition',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        credentialCategory: 'degree',
        name: 'Doctoral Research Scholar (Pursuing Ph.D.)',
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

  const breadcrumbs =
    route === '/'
      ? null
      : {
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
              name: PAGES[route]?.title.split('|')[0].trim() || 'Page',
              item: currentUrl,
            },
          ],
        };

  const graph = [organization, website, professionalService, radhaPerson, surbhiPerson];
  if (breadcrumbs) graph.push(breadcrumbs);

  if (route === '/' || route === '/programs') {
    graph.push(
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/programs#service-1`,
        name: 'First Clarity Session',
        description: 'First-time clients looking for a root-cause assessment and a clear starting roadmap.',
        provider: { '@id': `${SITE_URL}/#organization` },
        serviceType: 'Online Clinical Diet Consultation',
        areaServed: { '@type': 'Country', name: 'India' },
        offers: {
          '@type': 'Offer',
          price: '699',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/book`,
        },
      },
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/programs#service-2`,
        name: '4-Week Rhythm Reset',
        description: 'Individuals seeking structured fat loss, bloating relief, and a sustainable daily food routine.',
        provider: { '@id': `${SITE_URL}/#organization` },
        serviceType: 'Online Clinical Diet Consultation',
        areaServed: { '@type': 'Country', name: 'India' },
        offers: {
          '@type': 'Offer',
          price: '4999',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/book`,
        },
      },
      {
        '@type': 'Service',
        '@id': `${SITE_URL}/programs#service-3`,
        name: '12-Week Sustained Care',
        description: 'Deep metabolic & clinical transformation — PCOS/PCOD, Thyroid, Diabetes, or 8–12+ kg sustainable weight management.',
        provider: { '@id': `${SITE_URL}/#organization` },
        serviceType: 'Online Clinical Diet Consultation',
        areaServed: { '@type': 'Country', name: 'India' },
        offers: {
          '@type': 'Offer',
          price: '12999',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/book`,
        },
      }
    );
  }

  if (route === '/' || route === '/faq') {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${currentUrl}/#faqpage`,
      mainEntity: [
        {
          '@type': 'Question',
          name: 'How does an online video consultation work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'All consultations happen 100% online over private video calls (Google Meet or Zoom). We review your lifestyle, routine, past lab reports, and food preferences to build a practical, personalized nutrition plan.',
          },
        },
        {
          '@type': 'Question',
          name: 'Will I have to cook separate meals from my family?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'No. Our philosophy centers on traditional Indian home cooking—dal, roti, seasonal sabzis, rice, and regional staples. We adjust portion sizes, meal timing, and combinations without isolating you from family meals.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide crash diets or starvation plans?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Never. We do not prescribe starvation diets, synthetic meal replacements, or extreme calorie cutting. Our goal is steady, sustainable metabolic health and inch-loss that lasts.',
          },
        },
        {
          '@type': 'Question',
          name: 'How do follow-ups and WhatsApp support work?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Between video sessions, you stay connected with your dietitian via direct WhatsApp messaging for meal checks, restaurant guidance, travel adjustments, and progress tracking.',
          },
        },
      ],
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}

console.log(`[prerender] Starting SSG pre-rendering for domain: ${SITE_URL}`);
console.log(`[prerender] Robots directive: ${ROBOTS_DIRECTIVE}`);

for (const [route, meta] of Object.entries(PAGES)) {
  const currentUrl = `${SITE_URL}${route === '/' ? '' : route}`;
  const ogImageUrl = `${SITE_URL}/og-image.jpg`;

  // Render server markup
  let appHtml = '';
  try {
    appHtml = render(route);
  } catch (err) {
    console.warn(`[prerender] Warning while rendering ${route}:`, err.message);
  }

  const jsonLd = JSON.stringify(buildJsonLd(route));

  let html = rawTemplate;

  // Clean out any tags that could be duplicated on repeated runs
  html = html.replace(/<link rel="alternate" hreflang=[^>]*>/gi, '');
  html = html.replace(/<meta property="og:[^>]*>/gi, '');
  html = html.replace(/<meta name="twitter:[^>]*>/gi, '');
  html = html.replace(/<link rel="preload" as="image"[^>]*>/gi, '');
  html = html.replace(/<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, '');

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${meta.title}</title>`);

  // Replace / Inject Canonical
  const canonicalTag = `<link rel="canonical" href="${currentUrl}" />`;
  if (html.includes('<link rel="canonical"')) {
    html = html.replace(/<link rel="canonical"[^>]*>/i, canonicalTag);
  } else {
    html = html.replace('</head>', `  ${canonicalTag}\n</head>`);
  }

  // Inject hreflang
  const hreflangTags = `
    <link rel="alternate" hreflang="en-IN" href="${currentUrl}" />
    <link rel="alternate" hreflang="x-default" href="${currentUrl}" />
  `;

  // Replace / Inject Meta Description
  const descTag = `<meta name="description" content="${meta.description}" />`;
  if (html.includes('name="description"')) {
    html = html.replace(/<meta\s+name="description"[\s\S]*?>/i, descTag);
  } else {
    html = html.replace('</head>', `  ${descTag}\n</head>`);
  }

  // Replace / Inject Robots
  const robotsTag = `<meta name="robots" content="${ROBOTS_DIRECTIVE}" />`;
  if (html.includes('<meta name="robots"')) {
    html = html.replace(/<meta\s+name="robots"[^>]*>/i, robotsTag);
  } else {
    html = html.replace('</head>', `  ${robotsTag}\n</head>`);
  }

  // Open Graph
  const ogTags = `
    <meta property="og:site_name" content="The Diets" />
    <meta property="og:title" content="${meta.title}" />
    <meta property="og:description" content="${meta.description}" />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="${currentUrl}" />
    <meta property="og:image" content="${ogImageUrl}" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:alt" content="The Diets — 1:1 Online Video Dietitian Consultations" />
    <meta property="og:locale" content="en_IN" />
  `;

  // Twitter
  const twitterTags = `
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${meta.title}" />
    <meta name="twitter:description" content="${meta.description}" />
    <meta name="twitter:image" content="${ogImageUrl}" />
  `;

  // Clean out older OG / Twitter tags from template
  html = html.replace(/<meta property="og:[^>]*>/gi, '');
  html = html.replace(/<meta name="twitter:[^>]*>/gi, '');

  // Preload LCP hero image and critical font
  const preloadTags = `
    <link rel="preload" as="image" href="/hero-bg.webp" type="image/webp" fetchpriority="high" />
  `;

  // Structured Data
  const jsonLdTag = `
    <script type="application/ld+json" id="seo-jsonld">
      ${jsonLd}
    </script>
  `;

  // Inject into <head>
  html = html.replace(
    '</head>',
    `  ${hreflangTags}\n  ${ogTags}\n  ${twitterTags}\n  ${preloadTags}\n  ${jsonLdTag}\n</head>`
  );

  // Inject pre-rendered app HTML into #root
  html = html.replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  // Write file
  if (route === '/') {
    fs.writeFileSync(path.resolve(distDir, 'index.html'), html, 'utf8');
    console.log(`[prerender] ✓ Rendered / -> dist/index.html (${appHtml.length} chars)`);
  } else if (route === '/404') {
    fs.writeFileSync(path.resolve(distDir, '404.html'), html, 'utf8');
    console.log(`[prerender] ✓ Rendered /404 -> dist/404.html (${appHtml.length} chars)`);
  } else {
    const routeDir = path.resolve(distDir, route.slice(1));
    if (!fs.existsSync(routeDir)) {
      fs.mkdirSync(routeDir, { recursive: true });
    }
    fs.writeFileSync(path.resolve(routeDir, 'index.html'), html, 'utf8');
    fs.writeFileSync(path.resolve(distDir, `${route.slice(1)}.html`), html, 'utf8');
    console.log(`[prerender] ✓ Rendered ${route} -> dist/${route.slice(1)}/index.html & dist/${route.slice(1)}.html (${appHtml.length} chars)`);
  }
}

// Generate sitemap.xml with dynamic SITE_URL and current date
const today = new Date().toISOString().split('T')[0];
const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${Object.entries(PAGES)
  .filter(([route]) => route !== '/404')
  .map(
    ([route, meta]) => `  <url>
    <loc>${SITE_URL}${route === '/' ? '/' : route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${meta.changefreq}</changefreq>
    <priority>${meta.priority}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

fs.writeFileSync(path.resolve(distDir, 'sitemap.xml'), sitemapXml, 'utf8');
fs.writeFileSync(path.resolve(rootDir, 'public', 'sitemap.xml'), sitemapXml, 'utf8');
console.log(`[prerender] ✓ Generated sitemap.xml for ${SITE_URL}`);

// Synchronize robots.txt with dynamic SITE_URL
const robotsTxt = `# Robots.txt for The Diets (${SITE_URL})
# Automatically generated build artifact

# General Web Crawlers
User-agent: Googlebot
User-agent: Bingbot
User-agent: Applebot
User-agent: DuckDuckBot
User-agent: Yandex
Allow: /

# AI Search & LLM Web Indexers (Explicitly Allowed for AI Overviews & Citation)
User-agent: GPTBot
User-agent: ClaudeBot
User-agent: PerplexityBot
User-agent: Google-Extended
User-agent: OAI-SearchBot
User-agent: anthropic-ai
User-agent: Cohere-ai
Allow: /

# General Crawlers & Non-Content Directives
User-agent: *
Allow: /
Disallow: /api/
Disallow: /_next/
Disallow: /private/

# AI Summary File: ${SITE_URL}/llms.txt
# Canonical Sitemap
Sitemap: ${SITE_URL}/sitemap.xml
`;

fs.writeFileSync(path.resolve(distDir, 'robots.txt'), robotsTxt, 'utf8');
fs.writeFileSync(path.resolve(rootDir, 'public', 'robots.txt'), robotsTxt, 'utf8');
console.log(`[prerender] ✓ Generated robots.txt referencing ${SITE_URL}/sitemap.xml`);

console.log('[prerender] All pages successfully pre-rendered into static HTML!');
