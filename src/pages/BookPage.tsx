import { useLayoutEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { Link, useSearchParams } from 'react-router-dom';
import { gsap } from 'gsap';
import { Check, MessageCircle, Send } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { useSeo } from '@/hooks/useSeo';
import { siteConfig } from '@/data/siteConfig';

const DIETITIAN_OPTIONS = [
  { value: 'radha', label: 'Dt. Radha Mishra' },
  { value: 'surbhi', label: 'Dt. Surbhi Kumari' },
  { value: 'no-preference', label: 'No Preference (Match me with the best fit)' },
];

const GOAL_OPTIONS = [...siteConfig.focusAreas.map((f) => f.title), 'General Wellness / Other'];

const schema = z.object({
  fullName: z
    .string()
    .min(2, 'Please enter your name so we know who to expect.'),
  whatsapp: z
    .string()
    .min(7, 'Please enter a valid phone or WhatsApp number (min 7 digits).'),
  email: z.string().email('Please enter a valid email address (e.g. name@example.com).'),
  dietitian: z.enum(['radha', 'surbhi', 'no-preference']),
  goal: z.string().min(1, 'Please select your primary health goal.'),
  message: z.string().max(600, 'Please keep your message under 600 characters.').optional(),
  consent: z
    .boolean()
    .refine((v) => v === true, 'Please confirm you agree to be contacted.'),
});

type FormValues = z.infer<typeof schema>;

// Custom resolver that safely formats Zod 4 issues into React Hook Form errors
const customResolver = async (values: FormValues) => {
  const result = schema.safeParse(values);
  if (result.success) {
    return { values: result.data, errors: {} };
  }
  const errors: Record<string, { type: string; message: string }> = {};
  for (const issue of result.error.issues) {
    const key = String(issue.path[0] || '');
    if (key && !errors[key]) {
      errors[key] = {
        type: issue.code,
        message: issue.message,
      };
    }
  }
  return { values: {}, errors };
};

export default function BookPage() {
  useSeo({
    title: 'Book a Consultation',
    description:
      'Request a private video nutrition consultation with Radha Mishra or Surbhi Kumari. Calm, practical guidance paced around your daily routine.',
  });

  const [params] = useSearchParams();
  const preDietitian = params.get('dietitian');
  const preProgram = params.get('program');
  const [submitted, setSubmitted] = useState(false);
  const [lastData, setLastData] = useState<FormValues | null>(null);

  const root = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.book-card',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'cubic-bezier(0.22,1,0.36,1)' },
      );
    }, root);
    return () => ctx.revert();
  }, []);

  const initialDietitian =
    preDietitian === 'radha' || preDietitian === 'surbhi' ? preDietitian : 'no-preference';

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: customResolver,
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    defaultValues: {
      fullName: '',
      whatsapp: '',
      email: '',
      dietitian: initialDietitian as FormValues['dietitian'],
      goal: '',
      message: preProgram ? `I am interested in a program (${preProgram}).` : '',
      consent: false,
    },
  });

  const onSubmit = async (data: FormValues) => {
    setLastData(data);
    const selectedProgram = preProgram || 'General Consultation';
    const dietitianLabel =
      data.dietitian === 'radha'
        ? 'Dt. Radha Mishra'
        : data.dietitian === 'surbhi'
        ? 'Dt. Surbhi Kumari'
        : 'No Preference (Best Fit)';

    // 1. Dispatch email notification via Web3Forms API using your access key
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          access_key: siteConfig.integrations.web3FormsKey,
          name: data.fullName,
          phone: data.whatsapp,
          email: data.email,
          dietitian: dietitianLabel,
          goal: data.goal,
          program: selectedProgram,
          message: data.message || 'None provided',
          subject: `New Consultation Request: ${data.fullName} (${selectedProgram})`,
          from_name: 'The Diets Booking System',
        }),
      });

      const json = await res.json().catch(() => null);
      if (!json || !json.success) {
        // Fallback to FormSubmit if Web3Forms is unavailable
        await fetch(`https://formsubmit.co/ajax/${siteConfig.contact.email}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            'Full Name': data.fullName,
            'Phone / WhatsApp': data.whatsapp,
            'Email Address': data.email,
            'Selected Program': selectedProgram,
            'Preferred Dietitian': dietitianLabel,
            'Primary Health Goal': data.goal,
            'Client Routine / Note': data.message || 'None provided',
            _subject: `New Consultation Request: ${data.fullName} (${selectedProgram})`,
            _template: 'table',
            _captcha: 'false',
          }),
        }).catch(() => {});
      }
    } catch (err) {
      console.warn('Web3Forms dispatch notice:', err);
      // Secondary fallback
      fetch(`https://formsubmit.co/ajax/${siteConfig.contact.email}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          'Full Name': data.fullName,
          'Phone / WhatsApp': data.whatsapp,
          'Email Address': data.email,
          'Selected Program': selectedProgram,
          'Preferred Dietitian': dietitianLabel,
          'Primary Health Goal': data.goal,
          'Client Routine / Note': data.message || 'None provided',
          _subject: `New Consultation Request: ${data.fullName}`,
          _captcha: 'false',
        }),
      }).catch(() => {});
    }

    // 2. Pre-format WhatsApp link
    const notes = [
      data.goal,
      data.dietitian !== 'no-preference' ? `Preferred: ${dietitianLabel}` : null,
      data.message ? `Note: ${data.message}` : null,
    ]
      .filter(Boolean)
      .join(' | ') || 'None';

    const message = `Hi, I would like to schedule a consultation with The Diets!

• Name: ${data.fullName}
• Phone: ${data.whatsapp}
• Email: ${data.email}
• Selected Program: ${selectedProgram}
• Primary Goal / Note: ${notes}`;

    const whatsappLink = `https://wa.me/918340735168?text=${encodeURIComponent(message)}`;

    // Try opening WhatsApp in a new tab if supported
    try {
      const win = window.open(whatsappLink, '_blank');
      if (!win || win.closed || typeof win.closed === 'undefined') {
        // Popup blocked or desktop without handler; confirmation UI provides direct button
      }
    } catch (_) {}

    setSubmitted(true);
  };

  const inputClass =
    'w-full rounded-xl border border-green-deep/25 bg-cream px-4 py-3 text-base text-green-deep placeholder:text-green-deep/40 transition-colors duration-300 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40 scroll-mt-28';
  const labelClass = 'mb-2 block text-sm font-medium text-green-deep';
  const errorClass = 'mt-1.5 text-xs font-semibold text-red-700';

  if (submitted) {
    const selectedProgram = preProgram || 'General Consultation';
    const notes = lastData
      ? [
          lastData.goal,
          lastData.dietitian !== 'no-preference'
            ? `Preferred: ${lastData.dietitian === 'radha' ? 'Dt. Radha Mishra' : 'Dt. Surbhi Kumari'}`
            : null,
          lastData.message ? `Note: ${lastData.message}` : null,
        ]
          .filter(Boolean)
          .join(' | ')
      : '';

    const directMsg = lastData
      ? `Hi, I submitted a consultation request with The Diets!

• Name: ${lastData.fullName}
• Phone: ${lastData.whatsapp}
• Email: ${lastData.email}
• Program: ${selectedProgram}
• Goal / Note: ${notes || 'General'}`
      : 'Hi, I would like to schedule a consultation with The Diets!';

    const whatsappUrl = `https://wa.me/918340735168?text=${encodeURIComponent(directMsg)}`;

    return (
      <>
        <PageHero eyebrow="Book a Consultation" title="Thank you." />
        <section className="relative w-full bg-cream py-20 md:py-28">
          <div className="mx-auto max-w-2xl px-6 md:px-12">
            <div className="rounded-[2rem] border border-green-deep/15 bg-sage/50 p-10 text-center md:p-14">
              <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-green-deep text-cream">
                <Check size={24} strokeWidth={1.75} />
              </div>
              <h2 className="display-lg font-light text-green-deep">
                Your consultation request has been sent!
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-green-deep/80 text-pretty md:text-base">
                We have received your details. Our clinical team will review your enquiry and reach out to you within 24 hours to schedule your unhurried video slot.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-solid"
                >
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
                <Link to="/" className="btn-outline">
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <PageHero
        eyebrow="Book a Consultation"
        title="Request a consultation."
        intro="A short, calm form. Tell us a little about your routine and what you would like to ease—we will reply within a day to confirm a video slot."
      />

      <section ref={root} className="relative w-full bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-2xl px-6 md:px-12">
          <form
            id="booking-form"
            onSubmit={handleSubmit(onSubmit)}
            className="book-card scroll-mt-28 rounded-[2rem] border border-green-deep/15 bg-sage/40 p-7 md:p-10"
            noValidate
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="fullName" className={labelClass}>
                  Full Name <span className="text-red-600">*</span>
                </label>
                <input
                  id="fullName"
                  type="text"
                  autoComplete="name"
                  className={inputClass}
                  placeholder="Your full name"
                  {...register('fullName')}
                />
                {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="whatsapp" className={labelClass}>
                    Phone / WhatsApp Number <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="whatsapp"
                    type="tel"
                    autoComplete="tel"
                    className={inputClass}
                    placeholder="+91 98765 43210"
                    {...register('whatsapp')}
                  />
                  {errors.whatsapp && <p className={errorClass}>{errors.whatsapp.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email Address <span className="text-red-600">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={inputClass}
                    placeholder="you@email.com"
                    {...register('email')}
                  />
                  {errors.email && <p className={errorClass}>{errors.email.message}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="dietitian" className={labelClass}>
                    Preferred Dietitian
                  </label>
                  <select id="dietitian" className={inputClass} {...register('dietitian')}>
                    {DIETITIAN_OPTIONS.map((o) => (
                      <option key={o.value} value={o.value}>
                        {o.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="goal" className={labelClass}>
                    Main Health Goal <span className="text-red-600">*</span>
                  </label>
                  <select id="goal" className={inputClass} {...register('goal')}>
                    <option value="" disabled>
                      Select a goal
                    </option>
                    {GOAL_OPTIONS.map((g) => (
                      <option key={g} value={g}>
                        {g}
                      </option>
                    ))}
                  </select>
                  {errors.goal && <p className={errorClass}>{errors.goal.message}</p>}
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelClass}>
                  Optional Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="A sentence or two about your routine or health history—please don't include sensitive clinical reports here."
                  {...register('message')}
                />
                <p className="mt-2 text-xs text-green-deep/55">
                  Please don&apos;t include sensitive medical records here.
                </p>
                {errors.message && <p className={errorClass}>{errors.message.message}</p>}
              </div>

              <div>
                <label className="flex cursor-pointer items-start gap-3 text-sm text-green-deep/85">
                  <input
                    type="checkbox"
                    className="mt-1 h-5 w-5 shrink-0 cursor-pointer accent-gold"
                    {...register('consent')}
                  />
                  <span>
                    I am happy to be contacted about my consultation request by Email or WhatsApp. <span className="text-red-600">*</span>
                  </span>
                </label>
                {errors.consent && <p className={errorClass}>{errors.consent.message}</p>}
              </div>

              {Object.keys(errors).length > 0 && (
                <div className="rounded-xl border border-red-300 bg-red-50/90 px-4 py-3 text-xs font-medium text-red-800">
                  Please check the highlighted fields above before submitting.
                </div>
              )}
            </div>

            <div className="mt-9 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <button type="submit" className="btn-solid sm:flex-1" disabled={isSubmitting}>
                <Send size={16} />
                {isSubmitting ? 'Sending Request…' : 'Request a Consultation'}
              </button>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-outline sm:flex-1"
              >
                <MessageCircle size={16} /> Direct WhatsApp Chat
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
