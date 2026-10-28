import { Link } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { Accordion } from '@/components/Accordion';
import { useSeo } from '@/hooks/useSeo';
import { siteConfig } from '@/data/siteConfig';

export default function FaqPage() {
  useSeo({
    title: 'FAQ',
    description:
      'Answers to common questions about The Diets—how video consultations work, what plans include, follow-up support, rescheduling, and refunds.',
  });

  return (
    <>
      <PageHero
        eyebrow="FAQ"
        title="Quiet answers to common questions."
        intro="Everything you might wonder before your first session. If something is missing, message us on WhatsApp—we are happy to talk it through."
      />

      <section className="relative w-full bg-cream py-20 md:py-28">
        <div className="mx-auto max-w-content px-6 md:px-12">
          <div className="mx-auto max-w-3xl">
            <Accordion items={[...siteConfig.faqs]} defaultOpen={0} />

            <div className="mt-16 rounded-[2rem] border border-green-deep/15 bg-sage/50 p-8 text-center md:p-12">
              <h2 className="display-lg font-light text-green-deep">Still have a question?</h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-green-deep/75 text-pretty">
                Reach out directly—there is no obligation, and we will usually reply
                within a day.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/book" className="btn-solid">
                  Request a Consultation
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
          </div>
        </div>
      </section>
    </>
  );
}
