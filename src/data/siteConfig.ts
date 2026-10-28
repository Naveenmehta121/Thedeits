/**
 * The Diets — Single Source of Truth
 * ----------------------------------
 * Update credentials, prices, video links, and copy in this one file.
 * Empty video strings ("") trigger the live canvas fallback.
 */

export const siteConfig = {
  brand: {
    name: "The Diet's",
    tagline: "आहार शुद्धौ सत्त्वशुद्धिः",
    logoUrl: "/logo.png",
    faviconUrl: "/favicon.png",
    whatsappUrl: "https://wa.me/918340735168?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20The%20Diets",
    whatsappDisplay: "+91 83407 35168",
    email: "thedeits4you@gmail.com",
  },
  contact: {
    phone: "+91 83407 35168",
    phoneRaw: "+918340735168",
    email: "thedeits4you@gmail.com",
    whatsappUrl: "https://wa.me/918340735168?text=Hi%2C%20I%20would%20like%20to%20book%20a%20consultation%20with%20The%20Diets",
  },

  videos: {
    hero: '',
    sage: '',
    emerald: '',
  },

  focusAreas: [
    {
      title: 'Gut & Digestive Comfort',
      description:
        'Calm, unrestrictive adjustments for bloating, acidity, and everyday digestive ease.',
    },
    {
      title: 'Hormonal & Metabolic Rhythm',
      description:
        'Steady, supportive nutrition for PCOS, thyroid balance, and blood-sugar stability.',
    },
    {
      title: 'Restoring Daily Energy',
      description:
        'Meals paced around demanding workdays, shifting schedules, and deeper rest.',
    },
    {
      title: 'Practical Home-Cooked Plates',
      description:
        'Guidance built around familiar kitchen staples—no separate cooking or extreme rules.',
    },
  ],

  dietitians: [
    {
      slug: 'radha',
      name: 'Radha Mishra',
      title: 'Lead Clinical & Lifestyle Dietitian',
      portraitSrc: '/images/radha-mishra.png',
      shortFocus:
        'Specializing in digestive health, metabolic balance, and sustainable home-based routines.',
      bio: "[Radha Mishra's full biography placeholder — edit in siteConfig.ts]",
      qualifications: ['[Degree, Institution, Year — edit in siteConfig.ts]'],
      focusTags: ['Gut & Digestive Comfort', 'Hormonal Rhythm', 'Everyday Indian Meals'],
    },
    {
      slug: 'surbhi',
      name: 'Surbhi Kumari',
      title: 'Consultant Dietitian & Nutrition Educator',
      portraitSrc: '/images/surbhi-kumari.png',
      shortFocus:
        'Specializing in hormonal wellbeing, energy restoration, and practical meal structuring.',
      bio: "[Surbhi Kumari's full biography placeholder — edit in siteConfig.ts]",
      qualifications: ['[Degree, Institution, Year — edit in siteConfig.ts]'],
      focusTags: ['PCOS & Hormonal Support', 'Energy & Workday Pacing', 'Mindful Eating'],
    },
  ],


  programs: [
    {
      name: 'First Clarity Session',
      forWhom: 'Anyone seeking an honest assessment of their current routine and immediate next steps.',
      includes: [
        '45-minute 1-on-1 video consultation',
        'Review of daily schedule & eating patterns',
        'Written post-session action notes',
      ],
      price: '[₹ Price — To be confirmed]',
    },
    {
      name: '4-Week Rhythm Reset',
      forWhom: 'Building a steady, sustainable eating structure with close guidance.',
      includes: [
        'Initial deep-dive video consultation',
        'Personalized, flexible meal framework',
        'Weekly video follow-ups & WhatsApp check-ins',
        'Adjustments for travel or busy weeks',
      ],
      price: '[₹ Price — To be confirmed]',
    },
    {
      name: '12-Week Sustained Care',
      forWhom:
        'Longer-term digestive, hormonal, or lifestyle transitions at an unhurried pace.',
      includes: [
        'Comprehensive intake & phased nutrition roadmap',
        'Bi-weekly 1-on-1 video consultations',
        'Ongoing WhatsApp support between calls',
        'Seasonal & routine adaptations',
      ],
      price: '[₹ Price — To be confirmed]',
    },
  ],

  howItWorksSteps: [
    {
      n: '01',
      title: 'Share a brief enquiry',
      body: 'Send a short note through the booking form or WhatsApp—your name, a sense of your routine, and what you would like to ease. No preparation required.',
    },
    {
      n: '02',
      title: 'Confirm your video slot',
      body: 'We agree on a time that fits your day. You receive a private video link and a gentle reminder before the session.',
    },
    {
      n: '03',
      title: 'Meet 1-on-1 by video',
      body: 'An unhurried conversation about your schedule, your kitchen, and your everyday reality. We listen first, then map practical next steps.',
    },
    {
      n: '04',
      title: 'Receive your tailored plan & follow-ups',
      body: 'A flexible, home-cooked framework paced around your life—followed by video check-ins and WhatsApp support to keep things steady.',
    },
  ],

  goodToHaveReady: [
    'A rough idea of your weekday & weekend schedule',
    'Common meals cooked at home',
    'Any recent routine lab reports if you already have them',
    'Your questions—no preparation stress required',
  ],

  faqs: [
    {
      q: 'How do the video consultations work?',
      a: 'Every session is a private 1-on-1 video call. Once your slot is confirmed, you receive a secure link. You join from your phone or laptop—no clinic visit, no travel, no app to install beyond a browser.',
    },
    {
      q: 'Do I need to cook separate meals or buy special foods?',
      a: 'No. Guidance is built around familiar home-cooked staples and the meals your household already makes. There is no separate cooking, no rare ingredients, and no extreme rules.',
    },
    {
      q: 'How is my plan shared with me?',
      a: 'You receive clear, written notes after each session—a flexible framework paced around your routine, not a rigid prescription. Everything is kept simple enough to follow on a regular weekday.',
    },
    {
      q: 'What follow-up support is included?',
      a: 'Depending on your program, follow-ups include weekly or bi-weekly video consultations plus WhatsApp check-ins between calls, so adjustments for travel or busy weeks happen in real time.',
    },
    {
      q: 'What if my schedule is busy or keeps shifting?',
      a: 'Plans are deliberately flexible. We adjust around late workdays, travel, and changing routines rather than forcing a fixed structure that breaks the moment life gets busy.',
    },
    {
      q: 'What is your rescheduling policy?',
      a: '[Rescheduling policy — to be confirmed in siteConfig.ts. In general, sessions can be rescheduled with reasonable notice.]',
    },
    {
      q: 'What is your refund policy?',
      a: '[Refund policy — to be confirmed in siteConfig.ts. Please reach out and we will handle any concerns fairly and personally.]',
    },
  ],
} as const;

export type Dietitian = (typeof siteConfig.dietitians)[number];
export type FocusArea = (typeof siteConfig.focusAreas)[number];
export type Program = (typeof siteConfig.programs)[number];
export type Faq = (typeof siteConfig.faqs)[number];
