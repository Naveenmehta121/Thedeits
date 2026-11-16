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

// Read client index.html template and ensure clean #root container
const templatePath = path.resolve(distDir, 'index.html');
if (!fs.existsSync(templatePath)) {
  console.error('Error: dist/index.html does not exist. Run vite build first.');
  process.exit(1);
}
const initialHtml = fs.readFileSync(templatePath, 'utf8');
const rootStart = initialHtml.indexOf('<div id="root">');
const bodyEnd = initialHtml.indexOf('</body>');
const rawTemplate =
  rootStart !== -1 && bodyEnd !== -1
    ? initialHtml.substring(0, rootStart) + '<div id="root"></div>\n  </body>\n</html>'
    : initialHtml;

// Configurable domain
const rawSiteUrl =
  process.env.SITE_URL ||
  process.env.VITE_SITE_URL ||
  'https://www.thediets.in';
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
    title: 'Online Dietitian India | 1:1 Diet Plans — The Diets',
    description:
      '1:1 online dietitian consultations by clinical nutritionists in India. Home-cooked Indian diet plans for weight loss, PCOS & diabetes management.',
    priority: '1.0',
    changefreq: 'weekly',
  },
  '/dietitians': {
    title: 'Clinical Dietitians in India | Radha & Surbhi — The Diets',
    description:
      'Meet clinical dietitians Dt. Radha Mishra (M.Sc., CDE) & Dt. Surbhi Kumari (M.Sc.). 1:1 video nutrition guidance for PCOS, diabetes and weight loss.',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/programs': {
    title: 'Online Diet Plans | Weight Loss & PCOS — The Diets',
    description:
      'Online diet plans for weight loss, PCOS and diabetes care by clinical nutritionists in India. Home-cooked meal frameworks paced around your routine.',
    priority: '0.8',
    changefreq: 'monthly',
  },
  '/how-it-works': {
    title: 'How Online Diet Consultation Works | Steps — The Diets',
    description:
      'How online diet consultations work with The Diets: 4 steps from your initial enquiry and video call to tailored meal plans and follow-up care.',
    priority: '0.7',
    changefreq: 'monthly',
  },
  '/faq': {
    title: 'Online Dietitian FAQs | Meal Plans & Care — The Diets',
    description:
      'Answers to common questions about online dietitian consultations, meal flexibility, home-cooked Indian food plans, appointment scheduling & support.',
    priority: '0.6',
    changefreq: 'monthly',
  },
  '/book': {
    title: 'Book Online Dietitian Consultation | The Diets',
    description:
      'Book a private 1:1 video consultation with clinical dietitians Radha Mishra or Surbhi Kumari. Simple intake form and easy appointment scheduling.',
    priority: '0.9',
    changefreq: 'weekly',
  },
  '/privacy-policy': {
    title: 'Privacy Policy | The Diets',
    description:
      'Privacy policy of The Diets explaining how client health intake details and consultation records are collected, stored, and protected in India.',
    priority: '0.3',
    changefreq: 'yearly',
  },
  '/terms': {
    title: 'Terms of Service | The Diets',
    description:
      'Terms of service, consultation rescheduling policy, and program guidelines for 1:1 online nutrition consultations with The Diets.',
    priority: '0.3',
    changefreq: 'yearly',
  },
  '/medical-disclaimer': {
    title: 'Medical Disclaimer | The Diets',
    description:
      'Medical disclaimer for The Diets: clinical nutrition guidance supports lifestyle care and does not replace emergency medical care or physician advice.',
    priority: '0.3',
    changefreq: 'yearly',
  },
  '/online-dietitian-consultation': {
    title: 'Online Dietitian Consultation India | The Diets',
    description:
      '1:1 online dietitian consultation in India with clinical nutritionists. Home-cooked Indian meal plans for weight loss, PCOS and everyday health.',
    priority: '0.9',
    changefreq: 'weekly',
  },
  '/pcos-diet-plan': {
    title: 'PCOS Diet Plan Online India | The Diets',
    description:
      'Online PCOS diet plan by clinical nutritionists in India. Home-cooked Indian meal frameworks designed around your daily lifestyle and routine.',
    priority: '0.8',
    changefreq: 'weekly',
  },
  '/weight-loss-diet-plan': {
    title: 'Weight Loss Diet Plan Online India | The Diets',
    description:
      'Sustainable weight loss diet plan online by clinical dietitians in India. Kitchen-first Indian home-cooked meals for steady, healthy daily habits.',
    priority: '0.8',
    changefreq: 'weekly',
  },
  '/diabetes-diet-plan': {
    title: 'Diabetes Diet Plan Online India | The Diets',
    description:
      'Online diabetes diet plan by clinical nutritionists & Certified Diabetes Educator in India. Home-cooked Indian meals planned around your routine.',
    priority: '0.8',
    changefreq: 'weekly',
  },
  '/thyroid-diet-plan': {
    title: 'Thyroid Diet Plan Online India | The Diets',
    description:
      "Online thyroid diet plan by clinical dietitians in India. Home-cooked Indian meal frameworks planned alongside your treating doctor's care.",
    priority: '0.8',
    changefreq: 'weekly',
  },
  '/about': {
    title: 'About Us | Clinical Nutritionists — The Diets',
    description:
      'Learn about The Diets: clinical nutritionists Dt. Radha Mishra & Dt. Surbhi Kumari providing home-cooked Indian diet consultations across India.',
    priority: '0.6',
    changefreq: 'monthly',
  },
  '/contact': {
    title: 'Contact Us | Consultation Enquiries — The Diets',
    description:
      'Get in touch with The Diets for 1:1 online dietitian consultations in India. Reach out via WhatsApp or submit a consultation enquiry online.',
    priority: '0.7',
    changefreq: 'monthly',
  },
  '/404': {
    title: 'Page Not Found — The Diets',
    description: 'The requested nutrition page could not be found. Return to The Diets homepage.',
    priority: '0.1',
    changefreq: 'yearly',
  },
};

const PAGE_FAQS = {
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
    email: 'thediets4you@gmail.com',
    telephone: '+919296047483',
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

  const medicalBusiness = {
    '@type': ['MedicalBusiness', 'OnlineBusiness'],
    '@id': `${SITE_URL}/#business`,
    name: 'The Diets',
    url: `${SITE_URL}/`,
    logo: logoUrl,
    image: ogImageUrl,
    telephone: '+919296047483',
    email: 'thediets4you@gmail.com',
    priceRange: '₹₹',
    currenciesAccepted: 'INR',
    paymentAccepted: 'UPI, Net Banking, Credit Card, Debit Card',
    areaServed: { '@type': 'Country', name: 'India', identifier: 'IN' },
    medicalSpecialty: ['Nutrition', 'DietarySupport'],
    serviceType: 'Online Nutrition and Diet Consultation',
    description:
      '100% private 1-on-1 online video dietitian consultations by clinical nutritionists Dt. Radha Mishra and Dt. Surbhi Kumari across India.',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Online Diet Consultation Programs',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Single Consultation',
          description: 'One-time 45-minute 1:1 video nutrition consultation with a clinical dietitian.',
          price: '699',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/book`,
        },
        {
          '@type': 'Offer',
          name: '1-Month Personalised Diet Program',
          description: 'Four weekly 1:1 video sessions, custom Indian meal plan, and WhatsApp check-ins.',
          price: '4999',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/programs`,
        },
        {
          '@type': 'Offer',
          name: '3-Month Transformation Program',
          description: 'Twelve weekly 1:1 video sessions, evolving custom meal plans, and priority WhatsApp support.',
          price: '12999',
          priceCurrency: 'INR',
          availability: 'https://schema.org/InStock',
          url: `${SITE_URL}/programs`,
        },
      ],
    },
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

  const breadcrumbs =
    route === '/' || route === '/404'
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

  const graph = [organization, website, medicalBusiness, radhaPerson, surbhiPerson];
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
        description: 'Deep metabolic & clinical support — PCOS/PCOD, Thyroid, Diabetes, and long-term sustainable weight management.',
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
            text: 'All consultations happen 100% online over private video calls. We review your lifestyle, routine, past lab reports, and food preferences to build a practical, personalized nutrition plan.',
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

  if (
    route === '/online-dietitian-consultation' ||
    route === '/pcos-diet-plan' ||
    route === '/weight-loss-diet-plan' ||
    route === '/diabetes-diet-plan' ||
    route === '/thyroid-diet-plan'
  ) {
    graph.push({
      '@type': 'MedicalWebPage',
      '@id': `${currentUrl}/#medicalpage`,
      url: currentUrl,
      name: PAGES[route]?.title,
      description: PAGES[route]?.description,
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
      name: PAGES[route]?.title.split('|')[0].trim() || 'Clinical Diet Consultation',
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

  if (route === '/about') {
    graph.push({
      '@type': 'AboutPage',
      '@id': `${currentUrl}/#aboutpage`,
      url: currentUrl,
      name: PAGES[route]?.title,
      description: PAGES[route]?.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      breadcrumb: { '@id': `${currentUrl}/#breadcrumb` },
      inLanguage: 'en-IN',
      mainEntity: { '@id': `${SITE_URL}/#organization` },
    });
  }

  if (route === '/contact') {
    graph.push({
      '@type': 'ContactPage',
      '@id': `${currentUrl}/#contactpage`,
      url: currentUrl,
      name: PAGES[route]?.title,
      description: PAGES[route]?.description,
      isPartOf: { '@id': `${SITE_URL}/#website` },
      publisher: { '@id': `${SITE_URL}/#organization` },
      breadcrumb: { '@id': `${currentUrl}/#breadcrumb` },
      inLanguage: 'en-IN',
      mainEntity: {
        '@type': 'MedicalBusiness',
        '@id': `${SITE_URL}/#business`,
        name: 'The Diets',
        telephone: '+919296047483',
        email: 'thediets4you@gmail.com',
        url: currentUrl,
      },
    });
  }

  if (PAGE_FAQS[route]) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${currentUrl}/#faqpage`,
      mainEntity: PAGE_FAQS[route].map((faq) => ({
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
  html = html.replace(/<link rel="canonical"[^>]*>/gi, '');
  html = html.replace(/<script type="application\/ld\+json"[^>]*>[\s\S]*?<\/script>/gi, '');

  // Replace Title
  html = html.replace(/<title>.*?<\/title>/i, `<title>${meta.title}</title>`);

  // Replace / Inject Canonical (404 MUST NOT have a canonical tag)
  if (route !== '/404') {
    const canonicalTag = `<link rel="canonical" href="${currentUrl}" />`;
    html = html.replace('</head>', `  ${canonicalTag}\n</head>`);
  }

  // Inject hreflang (exclude 404)
  const hreflangTags =
    route === '/404'
      ? ''
      : `
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

  // Replace / Inject Robots (404 is strictly noindex, nofollow)
  const robotsDirective = route === '/404' ? 'noindex, nofollow' : ROBOTS_DIRECTIVE;
  const robotsTag = `<meta name="robots" content="${robotsDirective}" />`;
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
    <link rel="preload" as="image" href="/hero-bg-mobile.webp" type="image/webp" media="(max-width: 1023px)" fetchpriority="high" />
    <link rel="preload" as="image" href="/hero-bg.webp" type="image/webp" media="(min-width: 1024px)" fetchpriority="high" />
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
User-agent: ChatGPT-User
User-agent: ClaudeBot
User-agent: PerplexityBot
User-agent: Google-Extended
User-agent: OAI-SearchBot
User-agent: Applebot-Extended
User-agent: anthropic-ai
User-agent: Cohere-ai
Allow: /

# General Crawlers & Non-Content Directives
User-agent: *
Allow: /
Disallow: /api/
Disallow: /private/

# AI Summary File: ${SITE_URL}/llms.txt
# Canonical Sitemap
Sitemap: ${SITE_URL}/sitemap.xml
`;

fs.writeFileSync(path.resolve(distDir, 'robots.txt'), robotsTxt, 'utf8');
fs.writeFileSync(path.resolve(rootDir, 'public', 'robots.txt'), robotsTxt, 'utf8');
console.log(`[prerender] ✓ Generated robots.txt referencing ${SITE_URL}/sitemap.xml`);

console.log('[prerender] All pages successfully pre-rendered into static HTML!');
