import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle, Mail, Phone, Calendar, Clock, MapPin } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { Accordion } from '@/components/Accordion';
import { useSeo } from '@/hooks/useSeo';
import { siteConfig } from '@/data/siteConfig';

const CONTACT_FAQS = [
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
];

export default function ContactPage() {
  useSeo();

  return (
    <>
      {/* Last updated: 2026-11-16 */}
      {/* [TODO: dietitian to confirm standard weekday and weekend appointment hours] */}
      <PageHero
        eyebrow="Get in Touch"
        title="Contact The Diets — Consultation Enquiries"
        intro="Have questions about 1-on-1 online nutrition consultations, program details, or appointment availability? We are here to help."
      />

      <section className="relative w-full bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-12">
          <div className="mx-auto max-w-3xl space-y-12 text-green-deep">

            {/* Direct Contact Cards */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Direct Contact Channels
              </h2>
              <p className="mt-2 text-sm text-green-deep/70">
                Reach out to us directly for consultation scheduling or program enquiries:
              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {/* WhatsApp */}
                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-deep text-cream">
                        <MessageCircle size={20} />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-green-deep">WhatsApp Direct</h3>
                        <p className="text-xs text-green-deep/60">Fastest response for slots</p>
                      </div>
                    </div>
                    <p className="mt-4 text-xs leading-relaxed text-green-deep/75">
                      Chat directly with our team for quick questions on appointment availability, pricing, or consultation formats.
                    </p>
                    <p className="mt-2 font-mono text-sm font-medium text-green-deep">
                      {siteConfig.contact.phone}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-green-deep/10">
                    <a
                      href={siteConfig.contact.whatsappUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold underline text-green-deep hover:text-green-deep/80"
                    >
                      Open WhatsApp Chat →
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-deep text-cream">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-green-deep">Official Email</h3>
                        <p className="text-xs text-green-deep/60">Detailed enquiries &amp; records</p>
                      </div>
                    </div>
                    <p className="mt-4 text-xs leading-relaxed text-green-deep/75">
                      Send us your general enquiries, partnership queries, or medical report documentation.
                    </p>
                    <p className="mt-2 font-mono text-sm font-medium text-green-deep">
                      {siteConfig.contact.email}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-green-deep/10">
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold underline text-green-deep hover:text-green-deep/80"
                    >
                      Send Email →
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-deep text-cream">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-green-deep">Phone Call</h3>
                        <p className="text-xs text-green-deep/60">Consultation support line</p>
                      </div>
                    </div>
                    <p className="mt-4 text-xs leading-relaxed text-green-deep/75">
                      Call our consultation helpline during standard hours for booking support.
                    </p>
                    <p className="mt-2 font-mono text-sm font-medium text-green-deep">
                      {siteConfig.contact.phone}
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-green-deep/10">
                    <a
                      href={`tel:${siteConfig.contact.phoneRaw}`}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold underline text-green-deep hover:text-green-deep/80"
                    >
                      Call Helpline →
                    </a>
                  </div>
                </div>

                {/* Virtual Clinic */}
                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-deep text-cream">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-green-deep">Virtual Clinic</h3>
                        <p className="text-xs text-green-deep/60">100% Online Consultations</p>
                      </div>
                    </div>
                    <p className="mt-4 text-xs leading-relaxed text-green-deep/75">
                      We operate 100% online across India via private video consultations. No physical clinic visits or travel required.
                    </p>
                    <p className="mt-2 text-xs font-medium text-green-deep">
                      Serving Clients Pan-India
                    </p>
                  </div>
                  <div className="mt-5 pt-3 border-t border-green-deep/10">
                    <Link
                      to="/book"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold underline text-green-deep hover:text-green-deep/80"
                    >
                      Submit Booking Form →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Online Booking Form Section */}
            <div className="rounded-[2rem] border border-green-deep/15 bg-sage/50 p-8 text-center md:p-12">
              <h2 className="display-lg font-light text-green-deep">
                Ready to Schedule Your 1-on-1 Session?
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-green-deep/75 text-pretty">
                Fill out our brief consultation request form. Share a short note about your daily routine and we will reach out promptly to confirm your video appointment.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/book" className="btn-solid">
                  Go to Booking Form <ArrowRight size={16} />
                </Link>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  <MessageCircle size={16} /> Message on WhatsApp
                </a>
              </div>
            </div>

            {/* Common Contact FAQs */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Appointment &amp; Contact FAQs
              </h2>
              <div className="mt-6">
                <Accordion items={CONTACT_FAQS} defaultOpen={0} />
              </div>
              <div className="mt-4 text-xs text-green-deep/60">
                Browse our <Link to="/faq" className="underline font-medium hover:text-green-deep">full FAQ page</Link> for questions on meal plans, pricing, and programs.
              </div>
            </div>

            {/* Educational Disclaimer */}
            <div className="pt-6 border-t border-green-deep/15 text-xs leading-relaxed text-green-deep/60">
              <p>
                <strong>Educational Notice:</strong> Communication via our contact channels and website intake forms is for general scheduling and consultation enquiries. It does not establish an emergency medical relationship. For medical emergencies, please contact your nearest local hospital or national emergency helpline (112). Review our{' '}
                <Link to="/medical-disclaimer" className="underline hover:text-green-deep">
                  Medical Disclaimer
                </Link>{' '}
                and{' '}
                <Link to="/privacy-policy" className="underline hover:text-green-deep">
                  Privacy Policy
                </Link>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

