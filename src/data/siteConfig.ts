/**
 * The Diets — Single Source of Truth
 * ----------------------------------
 * Update credentials, prices, video links, and copy in this one file.
 * Empty video strings ("") trigger the live canvas fallback.
 */

export const siteConfig = {
  brand: {
    name: "The Diet's",
    tagline: "Your Health, Your Goals, Your Personalised Nutrition Journey.",
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
  social: {
    instagram: "https://www.instagram.com/thedietsforyou_?dlrf=MXgxOG0xcWt4YzF3Zw==",
    facebook: "https://www.facebook.com/share/18P5EPjm6D/",
  },
  credits: {
    developerName: "Silly Media",
    developerUrl: "https://sillymedia.co.in",
  },

  videos: {
    hero: '',
    sage: '',
    emerald: '',
  },

  focusAreas: [
    {
      title: 'Weight Loss & Lifestyle Management',
      tag: 'Sustainable fat loss & metabolic reset',
      description:
        'Practical, calorie-smart nutrition tailored to your daily routine to help you lose weight, shed stubborn inches, and maintain high energy—without crash dieting or starvation.',
    },
    {
      title: 'PCOS/PCOD & Hormonal Health',
      tag: 'Cycle regularity & insulin sensitivity',
      description:
        'Targeted, anti-inflammatory nutrition protocols to address root-cause insulin resistance, manage PCOS/PCOD symptoms, reduce bloating, and restore natural hormonal balance.',
    },
    {
      title: 'Diabetes & Metabolic Health',
      tag: 'Blood sugar control & HbA1c management',
      description:
        'Evidence-based clinical meal planning designed by a Certified Diabetes Educator (CDE) to stabilize blood glucose spikes, improve HbA1c markers, and support long-term metabolic wellness.',
    },
    {
      title: 'Thyroid & Therapeutic Nutrition',
      tag: 'Hypothyroidism, gut health & clinical care',
      description:
        'Nutrient-dense therapeutic diets crafted to support thyroid function, overcome sluggish metabolism, manage cholesterol/lipid profiles, and heal digestive discomfort.',
    },
    {
      title: 'Healthy Indian Diet Planning',
      tag: '100% home-cooked kitchen nutrition',
      description:
        'Customised daily meal plans built around familiar Indian staples—roti, dal, rice, sabzi, and local seasonal produce—adapted for working professionals, students, and families.',
    },
  ],

  dietitians: [
    {
      slug: 'radha',
      name: 'Dt. Radha Mishra',
      title: 'Founder | Clinical Nutritionist & Dietitian',
      credentials: 'B.Sc., M.Sc., CDE, IADWL',
      experience: '5+ Years',
      portraitSrc: '/images/radha-mishra.png',
      shortFocus:
        'Specialising in personalised nutrition and evidence-based dietary guidance for sustainable lifestyle changes.',
      bio: 'Dt. Radha Mishra specialises in personalised nutrition and evidence-based dietary guidance to help individuals achieve their health goals. Her approach combines scientific nutrition with practical, home-cooked meals to support sustainable lifestyle changes.',
      qualifications: ['B.Sc., M.Sc., CDE, IADWL'],
      focusTags: [
        'Weight Loss & Weight Management',
        'Diabetes Management',
        'PCOS/PCOD Nutrition',
        'Hormonal Health',
        'Healthy Indian Diet Planning',
      ],
    },
    {
      slug: 'surbhi',
      name: 'Dt. Surbhi Kumari',
      title: 'Co-Founder | Dietitian & Nutrition Professional',
      credentials: 'B.Sc., M.Sc., Pursuing Ph.D.',
      experience: '3+ Years',
      portraitSrc: '/images/surbhi-kumari.png',
      shortFocus:
        'Specialising in personalised diet planning and lifestyle management for long-term wellness.',
      bio: 'Dt. Surbhi Kumari focuses on personalised diet planning and lifestyle management, helping individuals make healthier choices through practical nutritional guidance. Her goal is to make healthy eating simple, personalised, and sustainable for long-term wellness.',
      qualifications: ['B.Sc., M.Sc., Pursuing Ph.D.'],
      focusTags: [
        'Lifestyle & Weight Management',
        'Diabetes & Metabolic Health',
        'PCOS/PCOD Nutrition',
        'Thyroid Nutrition',
        'Therapeutic Nutrition',
      ],
    },
  ],


  programs: [
    {
      name: 'First Clarity Session',
      duration: '1-on-1 Video Consultation (30–45 mins)',
      forWhom: 'First-time clients looking for a root-cause assessment and a clear starting roadmap.',
      includes: [
        'Comprehensive health, lifestyle & medical history evaluation',
        'Root-cause analysis of weight, gut, or hormonal challenges',
        'Audit of your current daily eating & kitchen routine',
        'Actionable starter nutrition guidelines & habit swaps',
        'Personalised recommendation on the right long-term roadmap',
      ],
      price: '₹699',
      mrp: '₹1,499',
    },
    {
      name: '4-Week Rhythm Reset',
      duration: '4 Weeks (1 Month)',
      forWhom: 'Individuals seeking structured fat loss, bloating relief, and a sustainable daily food routine.',
      includes: [
        'Weekly customised, home-cooked Indian meal plans tailored to your schedule',
        '4 weekly 1-on-1 progress & review calls with your dietitian',
        'Practical recipes using simple kitchen ingredients (zero starvation or fad supplements)',
        'Mon–Sat WhatsApp support for daily meal queries, dining-out choices & travel tips',
        'Routine adjustments based on weekly body metrics and energy levels',
      ],
      price: '₹4,999',
      mrp: null,
    },
    {
      name: '12-Week Sustained Care',
      duration: '12 Weeks (3 Months)',
      forWhom: 'Deep metabolic & clinical transformation — PCOS/PCOD, Thyroid, Diabetes, or 8–12+ kg sustainable weight management.',
      includes: [
        'Everything in the 4-Week Rhythm Reset, extended across 12 structured weeks',
        'Phase-wise therapeutic diet progression (Detox & Gut Reset → Metabolic Balance → Maintenance)',
        'Blood-work & lab parameter nutritional alignment',
        'Symptom-specific protocol for PCOS, Thyroid, HbA1c, or hormonal balance',
        'Priority WhatsApp support with direct dietitian access',
        'Lifetime post-program maintenance guide to prevent weight rebound',
      ],
      price: '₹12,999',
      mrp: null,
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
      a: 'We understand that schedules can change. You can reschedule your 1-on-1 consultation free of cost by notifying us on WhatsApp (+91 83407 35168) at least 12 hours before your scheduled slot. Sessions missed without prior notice or cancelled within 4 hours of the appointment time may be counted as completed.',
    },
    {
      q: 'What is your refund policy?',
      a: 'For single consultations (First Clarity Session), you may request a full refund up to 24 hours before your scheduled appointment, or reschedule to another convenient slot at no extra cost. For multi-week packages (4-Week Rhythm Reset and 12-Week Sustained Care), fees become non-refundable once your initial assessment is completed and your custom diet roadmap has been dispatched. However, if a medical or personal emergency arises, we gladly allow you to pause and resume your program within 90 days.',
    },
    {
      q: 'What is the consultation fee and what packages do you offer?',
      a: 'We offer three structured options: our First Clarity Session (single 1-on-1 assessment & starter roadmap) is ₹699, our 4-Week Rhythm Reset (weekly custom meal plans, 4 review calls & Mon–Sat WhatsApp support) is ₹4,999, and our comprehensive 12-Week Sustained Care program for deep metabolic, hormonal, or weight transformation is ₹12,999.',
    },
    {
      q: 'Do I need to stop eating Indian food or buy expensive supplements?',
      a: 'Not at all. Our core philosophy is built around practical, home-cooked Indian meals using ingredients already in your kitchen—like dal, roti, rice, curd, and local vegetables. We never prescribe fad diets, starvation, or expensive fat-burner supplements.',
    },
    {
      q: 'How soon will I start seeing results?',
      a: 'Most clients notice improved energy levels, better digestion, and reduced bloating within the first 7 to 10 days. Healthy, sustainable weight loss typically averages 3 to 4 kg per month alongside noticeable inch loss, while clinical markers like HbA1c, Thyroid, and PCOS symptoms show measurable improvement over 8 to 12 weeks.',
    },
    {
      q: 'Do you work with men as well, or only women?',
      a: "We work with both men and women across all age groups! While we have deep expertise in women's hormonal health (PCOS/PCOD, thyroid, post-pregnancy), a large portion of our practice focuses on weight management, diabetes reversal, cholesterol control, fatty liver, and busy-professional nutrition for men and families.",
    },
    {
      q: 'What conditions do you specialise in?',
      a: 'Dt. Radha Mishra and Dt. Surbhi Kumari specialise in Weight Loss & Weight Management, Type 2 Diabetes & Pre-diabetes, PCOS/PCOD, Hypothyroidism, Hormonal Imbalances, Cholesterol & Hypertension management, Gut Health, and Therapeutic Indian Diet Planning.',
    },
  ],
} as const;

export type Dietitian = (typeof siteConfig.dietitians)[number];
export type FocusArea = (typeof siteConfig.focusAreas)[number];
export type Program = (typeof siteConfig.programs)[number];
export type Faq = (typeof siteConfig.faqs)[number];
