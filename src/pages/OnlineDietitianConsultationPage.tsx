import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { Accordion } from '@/components/Accordion';
import { useSeo } from '@/hooks/useSeo';
import { siteConfig } from '@/data/siteConfig';

const FAQS = [
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
];

export default function OnlineDietitianConsultationPage() {
  useSeo();

  return (
    <>
      {/* Last updated: 2026-11-16 */}
      {/* [TODO: dietitian to confirm delivery turnaround time after consultation] */}
      <PageHero
        eyebrow="Clinical Nutrition Consultation"
        title="Online Dietitian Consultation in India"
        intro="1-on-1 virtual video consultations with qualified clinical dietitians. Practical, kitchen-first Indian meal frameworks tailored to your body, routine, and health goals."
      />

      <section className="relative w-full bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-12">
          <div className="mx-auto max-w-3xl space-y-12 text-green-deep">

            {/* Direct AI Answer Block */}
            <div className="rounded-[1.75rem] border border-green-deep/15 bg-sage/35 p-6 md:p-8">
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                What is an Online Dietitian Consultation?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/90 md:text-base text-pretty">
                An online dietitian consultation is a private, virtual nutrition session conducted via 1-on-1 video call, designed to assess your medical history, eating routine, and health goals from home. At The Diets, clinical dietitians evaluate your routine lab reports and lifestyle to craft flexible, home-cooked Indian meal frameworks without starvation or exotic ingredients. You receive continuous guidance through weekly reviews and direct WhatsApp check-ins to make lasting progress.
              </p>
            </div>

            {/* Who Can Benefit */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Who Can Benefit from Online Nutrition Care?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Nutritional requirements vary widely across different life stages, medical profiles, and regional Indian eating habits. Our virtual clinic supports individuals and families across India with focused guidance:
              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">
                    <Link to="/weight-loss-diet-plan" className="hover:underline">
                      Sustainable Weight Loss →
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Calorie-smart Indian meal plans paced around your schedule. Focus on steady inch loss, metabolic health, and muscle retention without extreme crash dieting.
                  </p>
                </div>

                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">
                    <Link to="/pcos-diet-plan" className="hover:underline">
                      PCOS &amp; Hormonal Balance →
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Anti-inflammatory nutrition targeting insulin resistance, irregular cycles, acne, and stubborn weight gain through balanced, kitchen-first meals.
                  </p>
                </div>

                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">Type 2 Diabetes &amp; Blood Sugar</h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Glycemic-indexed Indian meal planning led by a Certified Diabetes Educator (CDE) to manage glucose spikes and support HbA1c management.
                  </p>
                </div>

                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">Thyroid &amp; Digestive Health</h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Nutrient-dense frameworks addressing sluggish metabolism, bloating, acidity, and gut discomfort using everyday soothing Indian staples.
                  </p>
                </div>
              </div>
            </div>

            {/* Kitchen-First Philosophy */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                The Kitchen-First Indian Meal Philosophy
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Most commercial diets fail because they demand an unsustainable break from culture—prescribing costly berries, expensive protein powders, or boiled bland meals that alienate you from family dining. At The Diets, we believe authentic wellness begins in your own kitchen.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-green-deep/80">
                Traditional Indian staples—freshly rolled rotis, comforting dal tadka, steamed rice, seasonal vegetables, curd, and regional spices—provide an extraordinary foundation for metabolic wellness when balanced with the right macronutrient ratios and mindful meal pacing.
              </p>
            </div>

            {/* How It Works - 4 Steps */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                How Online Diet Consultation Works
              </h2>
              <p className="mt-2 text-sm text-green-deep/70">
                A simple, 4-step workflow designed to fit calmly into your regular workday:
              </p>

              <div className="mt-6 space-y-4">
                {siteConfig.howItWorksSteps.map((step) => (
                  <div key={step.n} className="flex gap-5 rounded-2xl border border-green-deep/10 bg-sage/25 p-5">
                    <span className="font-mono text-sm font-semibold text-green-deep/50 shrink-0">{step.n}</span>
                    <div>
                      <h3 className="text-base font-semibold text-green-deep">{step.title}</h3>
                      <p className="mt-1 text-xs leading-relaxed text-green-deep/75">{step.body}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-xs text-green-deep/60">
                <Link to="/how-it-works" className="underline font-medium hover:text-green-deep">
                  Read complete consultation workflow details →
                </Link>
              </div>
            </div>

            {/* Meet Your Clinical Dietitians */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Meet Your Clinical Dietitians
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Every consultation session at The Diets is conducted directly by qualified nutrition professionals with clinical postgraduate degrees:
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                {siteConfig.dietitians.map((d) => (
                  <div key={d.slug} className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6 flex flex-col justify-between">
                    <div>
                      <h3 className="text-lg font-semibold text-green-deep">{d.name}</h3>
                      <p className="text-xs text-green-deep/60 mt-0.5">{d.title}</p>
                      <p className="text-xs font-mono text-green-deep/50 mt-1">{d.credentials} · {d.experience}</p>
                      <p className="mt-3 text-xs leading-relaxed text-green-deep/75">{d.shortFocus}</p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-green-deep/10">
                      <Link to="/dietitians" className="text-xs font-medium underline text-green-deep">
                        View full clinical profile →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Consultation Programs & Transparent Pricing */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Consultation Programs &amp; Transparent Pricing
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                We believe in completely transparent pricing with zero hidden subscription lock-ins. Explore our three care tiers:
              </p>

              <div className="mt-6 space-y-4">
                {siteConfig.programs.map((p) => (
                  <div key={p.name} className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 rounded-2xl border border-green-deep/15 bg-sage/30 p-6">
                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-base font-semibold text-green-deep">{p.name}</h3>
                        <span className="text-xs text-green-deep/60">({p.duration})</span>
                      </div>
                      <p className="mt-1 text-xs text-green-deep/75 max-w-md">{p.forWhom}</p>
                    </div>
                    <div className="flex items-center gap-4 shrink-0">
                      <span className="font-mono text-lg font-medium text-green-deep">{p.price}</span>
                      <Link to="/book" className="btn-solid text-xs py-2 px-4">
                        Enquire
                      </Link>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-xs text-green-deep/60">
                <Link to="/programs" className="underline font-medium hover:text-green-deep">
                  View complete deliverables for each program →
                </Link>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Frequently Asked Questions
              </h2>
              <div className="mt-6">
                <Accordion items={FAQS} defaultOpen={0} />
              </div>
              <div className="mt-4 text-xs text-green-deep/60">
                Have additional questions? Browse our <Link to="/faq" className="underline font-medium hover:text-green-deep">full FAQ page</Link> or reach out directly.
              </div>
            </div>

            {/* CTA Box */}
            <div className="rounded-[2rem] border border-green-deep/15 bg-sage/50 p-8 text-center md:p-12">
              <h2 className="display-lg font-light text-green-deep">
                Begin Your Personalised Nutrition Journey
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-green-deep/75 text-pretty">
                Take the first unhurried step toward lasting metabolic health. Share a brief note about your routine and we will reach out to schedule your video slot.
              </p>
              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link to="/book" className="btn-solid">
                  Book a Consultation <ArrowRight size={16} />
                </Link>
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-outline"
                >
                  <MessageCircle size={16} /> Chat on WhatsApp
                </a>
              </div>
            </div>

            {/* Educational Disclaimer */}
            <div className="pt-6 border-t border-green-deep/15 text-xs leading-relaxed text-green-deep/60">
              <p>
                <strong>Educational Notice:</strong> Information on this page is for general educational guidance regarding online dietitian consultations in India. It does not constitute individual medical diagnosis or emergency care. For detailed clinical terms, please review our{' '}
                <Link to="/medical-disclaimer" className="underline hover:text-green-deep">
                  Medical Disclaimer
                </Link>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

