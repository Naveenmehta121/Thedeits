import PageHero from '@/components/PageHero';
import { useSeo } from '@/hooks/useSeo';
import { siteConfig } from '@/data/siteConfig';

export default function PrivacyPolicyPage() {
  useSeo();

  return (
    <>
      <PageHero
        eyebrow="Privacy Policy"
        title="Your privacy and personal health data."
        intro="How The Diets collects, uses, and protects the personal and nutritional information you share with us."
      />

      <section className="relative w-full bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-12">
          <div className="mx-auto max-w-3xl space-y-10 text-green-deep">
            {/* TODO: legal review of privacy policy in alignment with India's DPDP Act, 2023 */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">1. Information We Collect</h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                When you request a consultation through our website form or communicate with our dietitians via WhatsApp or email, we collect the following personal and health-related information:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-green-deep/80">
                <li><strong>Contact details:</strong> Full name, WhatsApp phone number, and email address.</li>
                <li><strong>Consultation details:</strong> Primary health goals (e.g., weight management, PCOS/PCOD, diabetes support, thyroid balance), lifestyle notes, and dietary preferences.</li>
                <li><strong>Voluntary health records:</strong> Routine medical or lab reports (such as lipid profiles, HbA1c, thyroid panel) that you voluntarily share during 1-on-1 video or messaging sessions to enable customized nutrition planning.</li>
              </ul>
            </div>

            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">2. Purpose of Data Processing</h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Your information is collected and processed solely for the following legitimate purposes:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6 text-sm text-green-deep/80">
                <li>Scheduling, confirming, and conducting your 1-on-1 video diet consultations.</li>
                <li>Formulating personalized home-cooked meal frameworks tailored to your specific routine and dietary tolerance.</li>
                <li>Providing ongoing WhatsApp check-ins, recipe suggestions, and progress follow-ups between sessions.</li>
                <li>Addressing customer service queries, rescheduling requests, or administrative billing communications.</li>
              </ul>
            </div>

            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">3. WhatsApp &amp; Third-Party Communication</h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Our initial intake form connects you directly to our official WhatsApp channel (+91 92960 47483). When using WhatsApp, your communications are also subject to WhatsApp’s own privacy policy and end-to-end encryption standards. We never sell, rent, or trade your personal contact details or health intake notes to third-party marketing networks or pharmaceutical companies.
              </p>
            </div>

            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">4. Data Retention &amp; Security</h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                We implement reasonable organizational and technical safeguards to keep your health details private. Your data is retained only for as long as necessary to support your active nutrition program, maintain continuity of care, and comply with applicable statutory tax and legal recordkeeping obligations.
              </p>
            </div>

            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">5. Your Rights Under the DPDP Act, 2023</h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                As a data principal under India’s Digital Personal Data Protection Act, 2023, you have the right to request access to the personal data we hold about you, request corrections to inaccurate records, withdraw your consent for ongoing communication, or request erasure of your intake notes where no statutory retention requirement applies.
              </p>
            </div>

            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">6. Contact &amp; Grievances</h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                If you have questions regarding this privacy policy or wish to exercise your data rights, please contact our team:
              </p>
              <div className="mt-4 rounded-2xl border border-green-deep/15 bg-sage/30 p-6 text-sm leading-relaxed text-green-deep/80">
                <p><strong>The Diets</strong></p>
                <p className="mt-1">Email: <a href={`mailto:${siteConfig.contact.email}`} className="underline text-green-deep">{siteConfig.contact.email}</a></p>
                <p className="mt-1">WhatsApp / Phone: <a href={siteConfig.contact.telLink} className="underline text-green-deep">{siteConfig.contact.phone}</a></p>
                <p className="mt-1">Location: India</p>
                {/* TODO: confirm registered business address */}
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

