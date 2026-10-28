import { useLayoutEffect, useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link, useSearchParams } from 'react-router-dom';
import { gsap } from 'gsap';
import { Check, MessageCircle, Send } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { useSeo } from '@/hooks/useSeo';
import { siteConfig } from '@/data/siteConfig';

const DIETITIAN_OPTIONS = [
  { value: 'radha', label: 'Radha Mishra' },
  { value: 'surbhi', label: 'Surbhi Kumari' },
  { value: 'no-preference', label: 'No preference' },
];

const GOAL_OPTIONS = [...siteConfig.focusAreas.map((f) => f.title), 'General consultation'];

const schema = z.object({
  fullName: z
    .string()
    .min(2, 'Please enter your name so we know who to expect.'),
  whatsapp: z
    .string()
    .min(7, 'A WhatsApp number helps us reach you quickly.'),
  email: z.string().email('Please enter a valid email address.'),
  dietitian: z.enum(['radha', 'surbhi', 'no-preference']),
  goal: z.string().min(1, 'Please choose a main goal.'),
  message: z.string().max(600, 'Please keep your message under 600 characters.').optional(),
  consent: z
    .boolean()
    .refine((v) => v === true, 'Please confirm you are happy to be contacted.'),
});

type FormValues = z.infer<typeof schema>;

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
    resolver: zodResolver(schema),
    defaultValues: {
      dietitian: initialDietitian as FormValues['dietitian'],
      goal: '',
      message: preProgram ? `I am interested in a program (${preProgram}).` : '',
    },
  });

  const onSubmit = async (data: FormValues) => {
    const selectedProgram = preProgram || 'General Consultation';
    const notes = [
      data.goal,
      data.dietitian !== 'no-preference'
        ? `Preferred: ${data.dietitian === 'radha' ? 'Radha Mishra' : 'Surbhi Kumari'}`
        : null,
      data.message ? `Note: ${data.message}` : null,
    ]
      .filter(Boolean)
      .join(' | ') || 'None';

    const message = `Hi, I would like to schedule a consultation with The Diet's!

• Name: ${data.fullName}
• Phone: ${data.whatsapp}
• Selected Program: ${selectedProgram}
• Primary Goal / Note: ${notes}`;

    const whatsappLink = `https://wa.me/918340735168?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    setSubmitted(true);
  };

  const inputClass =
    'w-full rounded-xl border border-green-deep/25 bg-cream px-4 py-3 text-base text-green-deep placeholder:text-green-deep/40 transition-colors duration-300 focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/40';
  const labelClass = 'mb-2 block text-sm font-medium text-green-deep';
  const errorClass = 'mt-2 text-xs text-red-700';

  if (submitted) {
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
                Your request is on its way.
              </h2>
              <p className="mx-auto mt-5 max-w-md text-sm leading-relaxed text-green-deep/80 text-pretty md:text-base">
                We will reach out by WhatsApp or email within a day to confirm a calm,
                unhurried video slot that suits your routine.
              </p>
              <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/" className="btn-outline">
                  Back to home
                </Link>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-solid"
                >
                  <MessageCircle size={16} /> Message us meanwhile
                </a>
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
            onSubmit={handleSubmit(onSubmit)}
            className="book-card rounded-[2rem] border border-green-deep/15 bg-sage/40 p-7 md:p-10"
            noValidate
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="fullName" className={labelClass}>
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  autoComplete="name"
                  className={inputClass}
                  placeholder="Your name"
                  {...register('fullName')}
                />
                {errors.fullName && <p className={errorClass}>{errors.fullName.message}</p>}
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="whatsapp" className={labelClass}>
                    WhatsApp number
                  </label>
                  <input
                    id="whatsapp"
                    type="tel"
                    autoComplete="tel"
                    className={inputClass}
                    placeholder="+91 ..."
                    {...register('whatsapp')}
                  />
                  {errors.whatsapp && <p className={errorClass}>{errors.whatsapp.message}</p>}
                </div>
                <div>
                  <label htmlFor="email" className={labelClass}>
                    Email
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
                    Preferred dietitian
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
                    Main goal
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
                  Optional message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className={`${inputClass} resize-none`}
                  placeholder="A sentence or two about your routine—please don't include medical details here."
                  {...register('message')}
                />
                <p className="mt-2 text-xs text-green-deep/55">
                  Please don&apos;t include medical details here.
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
                    I am happy to be contacted about my consultation request by WhatsApp
                    or email.
                  </span>
                </label>
                {errors.consent && <p className={errorClass}>{errors.consent.message}</p>}
              </div>
            </div>

            <div className="mt-9 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center">
              <button type="submit" className="btn-solid sm:flex-1" disabled={isSubmitting}>
                <Send size={16} />
                {isSubmitting ? 'Sending…' : 'Request a Consultation'}
              </button>
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="btn-outline sm:flex-1"
              >
                <MessageCircle size={16} /> Message us on WhatsApp
              </a>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
