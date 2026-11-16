import { siteConfig } from './siteConfig';

/**
 * Global Configurable Domain
 * Set via process.env.SITE_URL or VITE_SITE_URL in production.
 * Falls back to the current temporary deployment URL.
 */
export const SITE_URL = (
  (typeof process !== 'undefined' && (process.env?.SITE_URL || process.env?.VITE_SITE_URL)) ||
  (typeof import.meta !== 'undefined' && import.meta.env?.VITE_SITE_URL) ||
  'https://www.thediets.in'
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
    title: 'Online Dietitian India | 1:1 Diet Plans — The Diets',
    description:
      '1:1 online dietitian consultations by clinical nutritionists in India. Home-cooked Indian diet plans for weight loss, PCOS & diabetes management.',
    primaryKeyword: 'Online Dietitian India',
    keywords: [
      'online dietitian india',
      'online diet consultation',
      'diet plan online',
      'weight loss dietitian online',
      'best clinical nutritionist india',
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
      'Meet clinical dietitians Dt. Radha Mishra (M.Sc., CDE) & Dt. Surbhi Kumari (M.Sc.). 1:1 video nutrition guidance for PCOS, diabetes and weight loss.',
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
    title: 'Online Diet Plans | Weight Loss & PCOS — The Diets',
    description:
      'Online diet plans for weight loss, PCOS and diabetes care by clinical nutritionists in India. Home-cooked meal frameworks paced around your routine.',
    primaryKeyword: 'Online Diet Plans',
    keywords: [
      'online diet plans',
      'weight loss program india',
      'pcos pcod nutrition program',
      'diabetes management diet plan',
      'therapeutic nutrition packages',
    ],
  },
  '/how-it-works': {
    path: '/how-it-works',
    title: 'How Online Diet Consultation Works | Steps — The Diets',
    description:
      'How online diet consultations work with The Diets: 4 steps from your initial enquiry and video call to tailored meal plans and follow-up care.',
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
    title: 'Online Dietitian FAQs | Meal Plans & Care — The Diets',
    description:
      'Answers to common questions about online dietitian consultations, meal flexibility, home-cooked Indian food plans, appointment scheduling & support.',
    primaryKeyword: 'Online Dietitian FAQs',
    keywords: [
      'online dietitian faqs',
      'dietitian consultation faqs',
      'online diet questions',
      'indian diet consultation cost',
      'meal planning questions',
      'home cooking diet queries',
    ],
  },
  '/book': {
    path: '/book',
    title: 'Book Online Dietitian Consultation | The Diets',
    description:
      'Book a private 1:1 video consultation with clinical dietitians Radha Mishra or Surbhi Kumari. Simple intake form and easy appointment scheduling.',
    primaryKeyword: 'Book Online Dietitian Consultation',
    keywords: [
      'book online dietitian consultation',
      'schedule nutrition call',
      'dietitian appointment online',
      'video diet consultation booking',
      'hire personal dietitian online',
    ],
  },
  '/privacy-policy': {
    path: '/privacy-policy',
    title: 'Privacy Policy | The Diets',
    description:
      'Privacy policy of The Diets explaining how client health intake details and consultation records are collected, stored, and protected in India.',
    primaryKeyword: 'Privacy Policy',
    keywords: ['privacy policy the diets', 'health data privacy india', 'dpdp act compliance'],
  },
  '/terms': {
    path: '/terms',
    title: 'Terms of Service | The Diets',
    description:
      'Terms of service, consultation rescheduling policy, and program guidelines for 1:1 online nutrition consultations with The Diets.',
    primaryKeyword: 'Terms of Service',
    keywords: ['terms of service the diets', 'consultation rescheduling policy', 'refund policy nutrition consultation'],
  },
  '/medical-disclaimer': {
    path: '/medical-disclaimer',
    title: 'Medical Disclaimer | The Diets',
    description:
      'Medical disclaimer for The Diets: clinical nutrition guidance supports lifestyle care and does not replace emergency medical care or physician advice.',
    primaryKeyword: 'Medical Disclaimer',
    keywords: ['medical disclaimer the diets', 'clinical nutrition disclaimer', 'not medical advice'],
  },
  '/online-dietitian-consultation': {
    path: '/online-dietitian-consultation',
    title: 'Online Dietitian Consultation India | The Diets',
    description:
      '1:1 online dietitian consultation in India with clinical nutritionists. Home-cooked Indian meal plans for weight loss, PCOS and everyday health.',
    primaryKeyword: 'Online Dietitian Consultation',
    keywords: [
      'online dietitian consultation',
      'online dietitian india',
      'diet plan online',
      'clinical nutritionist online',
      'video diet consultation',
      'indian meal planning',
    ],
  },
  '/pcos-diet-plan': {
    path: '/pcos-diet-plan',
    title: 'PCOS Diet Plan Online India | The Diets',
    description:
      'Online PCOS diet plan by clinical nutritionists in India. Home-cooked Indian meal frameworks designed around your daily lifestyle and routine.',
    primaryKeyword: 'PCOS Diet Plan Online',
    keywords: [
      'pcos diet plan',
      'pcos diet plan online india',
      'pcod meal plan',
      'dietitian for pcos',
      'hormonal balance diet',
      'indian diet for pcos',
    ],
  },
  '/weight-loss-diet-plan': {
    path: '/weight-loss-diet-plan',
    title: 'Weight Loss Diet Plan Online India | The Diets',
    description:
      'Sustainable weight loss diet plan online by clinical dietitians in India. Kitchen-first Indian home-cooked meals for steady, healthy daily habits.',
    primaryKeyword: 'Weight Loss Diet Plan Online',
    keywords: [
      'weight loss diet plan online',
      'weight loss dietitian online',
      'indian diet plan for weight loss',
      'sustainable fat loss india',
      'online diet plan weight loss',
    ],
  },
  '/diabetes-diet-plan': {
    path: '/diabetes-diet-plan',
    title: 'Diabetes Diet Plan Online India | The Diets',
    description:
      'Online diabetes diet plan by clinical nutritionists & Certified Diabetes Educator in India. Home-cooked Indian meals planned around your routine.',
    primaryKeyword: 'Diabetes Diet Plan Online',
    keywords: [
      'diabetes diet plan online india',
      'diabetes dietitian online',
      'certified diabetes educator online',
      'blood sugar meal plan india',
      'indian diet for diabetes',
    ],
  },
  '/thyroid-diet-plan': {
    path: '/thyroid-diet-plan',
    title: 'Thyroid Diet Plan Online India | The Diets',
    description:
      "Online thyroid diet plan by clinical dietitians in India. Home-cooked Indian meal frameworks planned alongside your treating doctor's care.",
    primaryKeyword: 'Thyroid Diet Plan Online',
    keywords: [
      'thyroid diet plan online india',
      'hypothyroidism dietitian',
      'thyroid nutrition india',
      'indian diet for thyroid',
      'sluggish metabolism diet',
    ],
  },
  '/about': {
    path: '/about',
    title: 'About Us | Clinical Nutritionists — The Diets',
    description:
      'Learn about The Diets: clinical nutritionists Dt. Radha Mishra & Dt. Surbhi Kumari providing home-cooked Indian diet consultations across India.',
    primaryKeyword: 'About The Diets',
    keywords: [
      'about the diets',
      'clinical nutritionists india',
      'radha mishra clinical nutritionist',
      'surbhi kumari dietitian',
      'online nutrition company india',
    ],
  },
  '/contact': {
    path: '/contact',
    title: 'Contact Us | Consultation Enquiries — The Diets',
    description:
      'Get in touch with The Diets for 1:1 online dietitian consultations in India. Reach out via WhatsApp or submit a consultation enquiry online.',
    primaryKeyword: 'Contact The Diets',
    keywords: [
      'contact the diets',
      'dietitian consultation enquiry',
      'book dietitian whatsapp',
      'dietitian phone number india',
    ],
  },
};

export const PAGE_FAQS: Record<string, Array<{ q: string; a: string }>> = {
  '/online-dietitian-consultation': [
    {
      q: 'What is an online dietitian consultation and how does it work?',
      a: 'An online dietitian consultation is a private 1-on-1 video call. Your clinical dietitian reviews your daily eating routine, medical history, lifestyle stress, and recent lab reports. Following your session, you receive a personalized, home-cooked Indian meal plan with continuous WhatsApp check-ins between sessions.',
    },
    {
      q: 'How effective are virtual nutrition consultations compared to clinic visits?',
      a: 'Virtual consultations are convenient and let you apply guidance in your own kitchen. You can share updates on your meals, discuss adjustments for dining out or travel over WhatsApp, and speak with your dietitian from home without travelling to a clinic.',
    },
    {
      q: 'Will I need to cook separate meals from the rest of my family?',
      a: 'No. Every diet plan is built around familiar Indian home cooking—such as dal, roti, seasonal sabzis, rice, and curd. We adjust your portion sizes, food combinations, and meal timings so you eat nourishing meals with your family without needing separate cooking.',
    },
    {
      q: 'How much does an online dietitian consultation cost in India?',
      a: 'Our single First Clarity Session is ₹699 for an in-depth 45-minute diagnostic assessment. For structured transformation, our 4-Week Rhythm Reset is ₹4,999 and the 12-Week Sustained Care program is ₹12,999, both including weekly review calls and ongoing WhatsApp guidance.',
    },
    {
      q: 'What do I need to prepare before my first video consultation?',
      a: 'You do not need intensive preparation. Having a rough idea of your typical weekday schedule, common meals prepared at home, and any recent routine blood test reports (such as HbA1c, lipid profile, or thyroid tests if available) is helpful.',
    },
  ],
  '/pcos-diet-plan': [
    {
      q: 'Can diet alone help manage PCOS symptoms?',
      a: 'Nutrition is recognized as the cornerstone of first-line PCOS management. Balancing macronutrients improves insulin sensitivity, which in turn helps regulate ovulation, clear skin breakouts, and assist weight management. It works alongside medical care prescribed by your physician.',
    },
    {
      q: 'Do I have to eliminate dairy and gluten completely for PCOS?',
      a: 'No. Gluten and dairy elimination is not universally required for all individuals with PCOS. Unless you have a diagnosed celiac disease or lactose intolerance, whole grains (like whole wheat, millets) and homemade curd or paneer provide high-quality protein, calcium, and probiotics.',
    },
    {
      q: 'Which Indian grains are best suited for a PCOS diet?',
      a: 'Traditional Indian millets like jowar, bajra, ragi, and foxtail millet, along with brown rice and rolled oats, provide complex carbohydrates and slow-release dietary fiber that prevent post-meal glucose spikes.',
    },
    {
      q: 'How soon can I expect improvements in my menstrual cycle?',
      a: "Changes in cycles vary widely from person to person. Discuss any concerns with your gynaecologist or doctor. Sustained nutrition and healthy daily habits support metabolic and overall well-being over time alongside your doctor's care.",
    },
    {
      q: 'Can I follow a vegetarian Indian diet and still manage PCOS effectively?',
      a: 'Absolutely. A vegetarian Indian diet rich in lentils, sprouted pulses, paneer, tofu, sattu, nuts, and seeds provides complete amino acids and essential micronutrients without requiring animal protein.',
    },
  ],
  '/weight-loss-diet-plan': [
    {
      q: 'How much weight can I safely lose per month?',
      a: 'Gradual loss is generally considered safer and easier to sustain than rapid loss. Many guidelines suggest around 0.5 to 1 kg per week for most adults, but individual needs vary and your plan is personalised. Rather than chasing extreme numbers, our clinical dietitians focus on steady progress, healthy habit formation, and noticeable inch loss that you can comfortably maintain for life.',
    },
    {
      q: 'Do I have to stop eating roti, rice, or dairy to lose weight?',
      a: 'No. Weight loss occurs through an overall calorie deficit, not by demonizing wholesome traditional staples. Steamed rice, whole wheat rotis, and homemade curd provide essential energy, fiber, and micronutrients when enjoyed in balanced portions.',
    },
    {
      q: 'Will I be asked to purchase supplements, teas, or meal powders?',
      a: 'No. We never prescribe fad diets, starvation, or expensive fat-burner supplements. Our guidance focuses exclusively on wholesome, kitchen-first grocery foods prepared in your own home.',
    },
    {
      q: 'How do online consultations keep me accountable without clinic weigh-ins?',
      a: 'Virtual care provides frequent, actionable accountability through continuous WhatsApp touchpoints and scheduled weekly review calls. Rather than weighing in once a month, you receive real-time support for restaurant dinners, festive meals, and daily routine hurdles.',
    },
    {
      q: 'What if I have other health concerns like diabetes, thyroid, or hypertension?',
      a: 'Our clinical dietitians specialize in medical nutrition therapy. We review your full health profile and lab reports to design a unified meal framework that addresses weight management alongside blood sugar, blood pressure, or thyroid needs.',
    },
  ],
  '/diabetes-diet-plan': [
    {
      q: 'Can a diet plan replace my diabetes medications or medical care?',
      a: 'No. Nutritional planning is an essential support for daily lifestyle care, but it works alongside—never in place of—medical treatment prescribed by your physician or diabetologist. Any adjustments to your medical care or prescriptions must be made directly by your treating doctor.',
    },
    {
      q: 'Can I still eat rice and roti on a diabetes diet plan?',
      a: 'Yes. You do not need to eliminate traditional staples like roti or rice completely. Our clinical dietitians help you manage portion sizes, choose fiber-rich whole grain or millet varieties, and pair them with lentils, vegetables, and protein to slow glucose absorption.',
    },
    {
      q: 'How does working with a Certified Diabetes Educator (CDE) help?',
      a: "A Certified Diabetes Educator is trained in diabetes education and lifestyle support, helping translate nutrition guidance into practical meals that fit your family routine. Nutrition works alongside, never in place of, your doctor's treatment and monitoring.",
    },
    {
      q: 'What Indian foods should I be cautious with when managing diabetes?',
      a: 'Highly refined grains (maida), sugary snacks, sweetened beverages, fruit juices without pulp, and deep-fried namkeens cause rapid blood sugar surges. We guide you toward nourishing whole food alternatives that satisfy cravings without sharp spikes.',
    },
    {
      q: 'How does online nutrition support fit with my regular doctor visits?',
      a: 'Online consultations provide continuous dietary guidance between your doctor visits. We help you review routine blood reports, optimize daily meals around your prescribed schedule, and maintain consistent food habits that you can share with your physician.',
    },
  ],
  '/thyroid-diet-plan': [
    {
      q: 'Can dietary changes cure hypothyroidism or replace my thyroid medicine?',
      a: 'No. Nutrition cannot cure thyroid disorders or replace medical treatment prescribed by your doctor. Wholesome nutrition provides the essential micronutrients required for overall metabolic function, energy, and digestive health while you continue your prescribed medical treatment.',
    },
    {
      q: 'Do I need to stop eating cruciferous vegetables like cabbage, cauliflower, and broccoli?',
      a: 'Vegetables such as cabbage and cauliflower are healthy in normal cooked portions as part of a balanced diet. If you have concerns about them, ask your doctor.',
    },
    {
      q: 'Should I eliminate gluten and dairy if I have thyroid issues?',
      a: 'Gluten and dairy elimination is not universally necessary for everyone with a thyroid condition. Unless you have a diagnosed celiac disease or lactose intolerance, whole wheat, millets, and homemade curd provide valuable fiber, B-vitamins, and protein.',
    },
    {
      q: 'How does thyroid health affect weight management?',
      a: 'An underactive thyroid can slow your basal metabolic rate, which may cause fluid retention and make weight loss feel slower. Rather than extreme calorie restriction—which further suppresses metabolism—we focus on nutrient-dense meals and steady lifestyle consistency.',
    },
    {
      q: 'What routine blood tests should I have ready before my consultation?',
      a: "Keep your recent reports handy. Reading them and making any medicine decision is for your treating doctor; we plan meals around your routine and your doctor's advice.",
    },
  ],
  '/contact': [
    {
      q: 'How do video consultations work?',
      a: 'Every session is a private 1-on-1 video call. Once your slot is confirmed, you receive a secure link. You join from your phone or laptop—no clinic visit, no travel, and no app to install beyond a browser.',
    },
    {
      q: 'What is your consultation rescheduling policy?',
      a: 'You can reschedule your 1-on-1 consultation free of cost by notifying us on WhatsApp (+91 92960 47483) at least 12 hours before your scheduled slot. Sessions missed without prior notice or cancelled within 4 hours of the appointment time may be counted as completed.',
    },
    {
      q: 'What hours are appointments available?',
      a: 'Consultations are scheduled by mutual appointment across morning, afternoon, and evening slots to accommodate working professionals, homemakers, and students.',
    },
    {
      q: 'Do you offer in-person clinic visits?',
      a: 'The Diets operates 100% online. Virtual consultations allow us to review your home-cooked meals, adjust for your everyday kitchen reality, and provide continuous guidance across India without clinic travel.',
    },
  ],
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

  const medicalBusiness = {
    '@type': ['MedicalBusiness', 'OnlineBusiness'],
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
      identifier: 'IN',
    },
    medicalSpecialty: ['Nutrition', 'DietarySupport'],
    serviceType: 'Online Nutrition and Diet Consultation',
    description:
      '100% private 1-on-1 online video dietitian consultations by clinical nutritionists Dt. Radha Mishra and Dt. Surbhi Kumari across India.',
  };

  const radhaPerson = {
    '@type': 'Person',
    '@id': `${SITE_URL}/#radha-mishra`,
    name: 'Dt. Radha Mishra',
    jobTitle: 'Founder & Clinical Nutritionist',
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Clinical Nutritionist & Dietitian',
      occupationalCategory: '29-1031.00',
    },
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
    hasOccupation: {
      '@type': 'Occupation',
      name: 'Dietitian & Nutrition Professional',
      occupationalCategory: '29-1031.00',
    },
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

  const breadcrumbs = path === '/' || path === '/404' ? null : {
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
  const graph: any[] = [organization, website, medicalBusiness, radhaPerson, surbhiPerson];
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

  if (
    path === '/online-dietitian-consultation' ||
    path === '/pcos-diet-plan' ||
    path === '/weight-loss-diet-plan' ||
    path === '/diabetes-diet-plan' ||
    path === '/thyroid-diet-plan'
  ) {
    graph.push({
      '@type': 'MedicalWebPage',
      '@id': `${currentUrl}/#medicalpage`,
      url: currentUrl,
      name: SEO_PAGES[path]?.title,
      description: SEO_PAGES[path]?.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      breadcrumb: { '@id': `${currentUrl}/#breadcrumb` },
      inLanguage: 'en-IN',
      aspect: 'Overview, Lifestyle, Dietary Guidance',
      dateModified: '2026-11-16',
      medicalAudience: {
        '@type': 'MedicalAudience',
        audienceType: 'Patients and individuals seeking clinical nutrition guidance',
      },
    });

    graph.push({
      '@type': 'Service',
      '@id': `${currentUrl}/#service`,
      name: SEO_PAGES[path]?.primaryKeyword,
      serviceType: 'Online Clinical Diet Consultation',
      provider: { '@id': `${SITE_URL}/#organization` },
      areaServed: { '@type': 'Country', name: 'India' },
      offers: {
        '@type': 'AggregateOffer',
        priceCurrency: 'INR',
        lowPrice: '699',
        highPrice: '12999',
        offerCount: '3',
        url: `${SITE_URL}/programs`,
      },
    });
  }

  if (path === '/about') {
    graph.push({
      '@type': 'AboutPage',
      '@id': `${currentUrl}/#aboutpage`,
      url: currentUrl,
      name: SEO_PAGES[path]?.title,
      description: SEO_PAGES[path]?.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      breadcrumb: { '@id': `${currentUrl}/#breadcrumb` },
      inLanguage: 'en-IN',
      mainEntity: { '@id': `${SITE_URL}/#organization` },
    });
  }

  if (path === '/contact') {
    graph.push({
      '@type': 'ContactPage',
      '@id': `${currentUrl}/#contactpage`,
      url: currentUrl,
      name: SEO_PAGES[path]?.title,
      description: SEO_PAGES[path]?.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      breadcrumb: { '@id': `${currentUrl}/#breadcrumb` },
      inLanguage: 'en-IN',
      mainEntity: {
        '@type': 'MedicalBusiness',
        '@id': `${SITE_URL}/#business`,
        name: siteConfig.brand.name,
        telephone: siteConfig.contact.phoneRaw,
        email: siteConfig.contact.email,
        url: currentUrl,
      },
    });
  }

  if (PAGE_FAQS[path]) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${currentUrl}/#faqpage`,
      mainEntity: PAGE_FAQS[path].map((faq) => ({
        '@type': 'Question',
        name: faq.q,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.a,
        },
      })),
    });
  }

  return {
    '@context': 'https://schema.org',
    '@graph': graph,
  };
}
