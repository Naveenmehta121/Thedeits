import PageHero from '@/components/PageHero';
import { useSeo } from '@/hooks/useSeo';
import { siteConfig } from '@/data/siteConfig';

export default function MedicalDisclaimerPage() {
  useSeo();

  return (
    <>
      <PageHero
        eyebrow="Medical Disclaimer"
        title="Important health &amp; clinical disclaimer."
        intro="Please read this important medical disclaimer regarding online nutritional guidance provided by The Diets."
      />

      <section className="relative w-full bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-12">
          <div className="mx-auto max-w-3xl space-y-10 text-green-deep">
            {/* TODO: legal review of medical disclaimer */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">1. Educational &amp; Nutritional Purpose Only</h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                All information, dietary roadmaps, meal frameworks, articles, and recommendations provided by The Diets (including website content, video consultations, and WhatsApp communications) are for educational, lifestyle, and nutritional guidance only. They do not constitute formal medical diagnosis, medical treatment, or prescription of pharmaceuticals.
              </p>
            </div>

            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">2. Not a Substitute for Medical Advice</h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Nutritional consultations are designed to support lifestyle management and clinical nutrition care. They are not intended to be a substitute for professional medical advice, clinical diagnosis, or medical treatment from your treating physician, endocrinologist, gynecologist, or other qualified healthcare provider.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-green-deep/80">
                Never disregard professional medical advice or delay seeking medical attention because of information provided on this website or in a consultation session.
              </p>
            </div>

            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">3. Chronic Conditions &amp; Medication Adjustment</h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                If you have an existing medical condition—such as Type 1 or Type 2 Diabetes, hypertension, thyroid disorder, PCOS/PCOD, kidney disease, cardiovascular disease, or gastrointestinal illness—or if you are taking prescription medications (such as insulin, metformin, thyroxine, or antihypertensives), always consult your physician before initiating any new diet or significant dietary changes. Any alterations to medication dosage must be made exclusively under the direction of your prescribing doctor.
              </p>
            </div>

            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">4. Individual Variability &amp; No Guaranteed Outcomes</h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Every human body possesses unique metabolic rates, genetic factors, gut microbiomes, and underlying clinical conditions. Consequently, dietary responses, weight management rates, and symptom timelines vary significantly from individual to individual. The Diets does not guarantee specific numerical weight loss or clinical biomarker outcomes.
              </p>
            </div>

            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">5. Medical Emergencies</h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                The Diets does not provide emergency medical services. If you experience acute symptoms—such as severe abdominal pain, chest tightness, acute breathlessness, fainting, severe allergic reactions, or diabetic hypoglycemia/hyperglycemia emergencies—immediately contact your nearest hospital emergency department or call your local emergency medical response number (112 in India).
              </p>
            </div>

            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">6. Contact for Inquiries</h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                If you have questions about the scope of our clinical nutrition services, reach out to our team:
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

