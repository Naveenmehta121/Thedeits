import PageHero from '@/components/PageHero';
import { useSeo } from '@/hooks/useSeo';
import { siteConfig } from '@/data/siteConfig';

export default function TermsPage() {
  useSeo();

  return (
    <>
      <PageHero
        eyebrow="Terms of Service"
        title="Terms and consultation policies."
        intro="The terms governing your participation in 1-on-1 online nutrition consultations and diet programs with The Diets."
      />

      <section className="relative w-full bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-12">
          <div className="mx-auto max-w-3xl space-y-10 text-green-deep">
            {/* TODO: legal review of operating policies */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">1. Nature of Services</h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                The Diets provides virtual, 1-on-1 nutritional guidance, lifestyle coaching, and personalized dietary frameworks delivered online via private video calls and WhatsApp messaging. Consultations are conducted by qualified clinical nutritionists and dietitians (Dt. Radha Mishra and Dt. Surbhi Kumari).
              </p>
            </div>

            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">2. Rescheduling Policy</h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                We understand schedules change. You can reschedule your 1-on-1 video consultation free of charge by notifying us via WhatsApp (+91 92960 47483) at least <strong>12 hours</strong> before your scheduled appointment slot. Sessions missed without prior notification or cancelled within 4 hours of the scheduled time may be counted as completed.
              </p>
            </div>

            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">3. Cancellation &amp; Refund Policy</h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Our refund terms are designed to be fair and transparent:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-green-deep/80">
                <li><strong>Single Consultation (First Clarity Session):</strong> You may request a full refund or reschedule to another slot up to 24 hours prior to your scheduled consultation time.</li>
                <li><strong>Multi-Week Packages (4-Week Rhythm Reset and 12-Week Sustained Care):</strong> Once your diagnostic assessment is completed and your custom dietary roadmap has been dispatched, package fees are non-refundable.</li>
                <li><strong>Medical / Emergency Pauses:</strong> If a medical or personal emergency arises during an active program, you may request to pause and resume your remaining sessions within <strong>90 days</strong>.</li>
              </ul>
            </div>

            {/* TODO: confirm client disclosure terms with legal counsel */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">4. Client Information &amp; Health Details</h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                To receive safe and tailored nutritional guidance, clients are encouraged to share accurate information regarding routine food preferences, lifestyle schedules, existing medical diagnoses, and any relevant lab reports. Please notify your dietitian of any significant changes in your health or routine during your program.
              </p>
            </div>

            {/* TODO: confirm IP / redistribution policy with legal counsel */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">5. Guidance Materials for Personal Use</h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Personalized meal frameworks, notes, and nutritional recommendations provided during consultations are developed specifically for your individual household routine and personal wellness journey.
              </p>
            </div>

            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">6. Contact &amp; Questions</h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                For questions regarding these terms or your booking, reach out to us:
              </p>
              <div className="mt-4 rounded-2xl border border-green-deep/15 bg-sage/30 p-6 text-sm leading-relaxed text-green-deep/80">
                <p><strong>The Diets</strong></p>
                <p className="mt-1">Email: <a href={`mailto:${siteConfig.contact.email}`} className="underline text-green-deep">{siteConfig.contact.email}</a></p>
                <p className="mt-1">WhatsApp: <a href={siteConfig.contact.telLink} className="underline text-green-deep">{siteConfig.contact.phone}</a></p>
              </div>
            </div>

            <div className="pt-6 border-t border-green-deep/15 text-xs text-green-deep/60">
              <p>Last updated: November 2026</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

