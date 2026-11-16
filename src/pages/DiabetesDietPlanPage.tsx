import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { Accordion } from '@/components/Accordion';
import { useSeo } from '@/hooks/useSeo';
import { siteConfig } from '@/data/siteConfig';

const FAQS = [
  {
    q: 'Can a diet plan replace my diabetes medications or medical care?',
    a: 'No. Nutritional planning is an essential support for daily lifestyle care, but it works alongside—never in place of—medical treatment prescribed by your physician or diabetologist. Any adjustments to your medical care or prescriptions must be made directly by your treating doctor.',
  },
  {
    q: 'Can I still eat rice and roti on a diabetes diet plan?',
    a: 'Yes. You do not need to eliminate traditional staples like roti or rice completely. Our clinical dietitians help you manage portion sizes, choose fiber-rich whole grain or millet varieties, and pair them with lentils, vegetables, and protein to slow glucose absorption.',
  },
  {
    q: 'How does working with a Certified Diabetes Educator (CDE) help?',
    a: 'A Certified Diabetes Educator has specialized clinical training in glycemic control, carbohydrate counting, and lifestyle modification. They translate complex medical targets (like fasting glucose and HbA1c) into practical, everyday Indian meals that fit your family routine.',
  },
  {
    q: 'What Indian foods should I be cautious with when managing diabetes?',
    a: 'Highly refined grains (maida), sugary snacks, sweetened beverages, fruit juices without pulp, and deep-fried namkeens cause rapid blood sugar surges. We guide you toward nourishing whole food alternatives that satisfy cravings without sharp spikes.',
  },
  {
    q: 'How does online nutrition support fit with my regular doctor visits?',
    a: 'Online consultations provide continuous dietary guidance between your doctor visits. We help you review routine blood reports, optimize daily meals around your prescribed schedule, and maintain consistent food habits that you can share with your physician.',
  },
];

export default function DiabetesDietPlanPage() {
  useSeo();

  return (
    <>
      {/* Last updated: 2026-11-16 */}
      {/* [TODO: dietitian to confirm clinical phrasing for glycemic index recommendations] */}
      {/* [TODO: dietitian to confirm specific fiber and protein pairing protocols] */}
      <PageHero
        eyebrow="Clinical Diabetes &amp; Glycemic Care"
        title="Online Diabetes Diet Plan &amp; Blood Sugar Nutrition in India"
        intro="Clinically supervised, kitchen-first Indian diet plans designed to support blood sugar stability and HbA1c management—led by a Certified Diabetes Educator alongside your physician's care."
      />

      <section className="relative w-full bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-12">
          <div className="mx-auto max-w-3xl space-y-12 text-green-deep">

            {/* Direct AI Answer Block */}
            <div className="rounded-[1.75rem] border border-green-deep/15 bg-sage/35 p-6 md:p-8">
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                What is an Online Diabetes Diet Plan?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/90 md:text-base text-pretty">
                An online diabetes diet plan is a structured clinical nutrition strategy designed to help individuals with Type 2 diabetes or pre-diabetes support daily food habits through balanced, home-cooked meals. In India, an effective diabetes diet focuses on portion control, carbohydrate quality (such as choosing whole millets, dals, and fiber-rich vegetables over refined flours and simple sugars), and pairing carbohydrates with protein and healthy fats to slow glucose absorption. This nutritional support is coordinated alongside routine blood sugar monitoring and medical advice from your treating physician.
              </p>
            </div>

            {/* Medical Coordination Notice */}
            <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
              <h2 className="text-base font-semibold text-green-deep">
                Important Notice on Medical Care &amp; Physician Guidance
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-green-deep/80">
                Nutritional planning for diabetes is designed to support healthy lifestyle habits and does not replace medical treatment or prescription therapies advised by your doctor. Always follow your treating physician or diabetologist's medical plan, routine lab monitoring, and clinical guidance. For detailed terms, please review our{' '}
                <Link to="/medical-disclaimer" className="underline hover:text-green-deep">
                  Medical Disclaimer
                </Link>.
              </p>
            </div>

            {/* Understanding Diabetes and the Indian Plate */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Understanding Diabetes and the Indian Meal Context
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Type 2 diabetes and pre-diabetes are widespread metabolic conditions across India, closely linked with insulin resistance and modern sedentary lifestyles. In traditional Indian cuisine, meals are often heavily centered around carbohydrates—white polished rice, refined wheat rotis, and starch-rich vegetables—often eaten with minimal dietary fiber or protein.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-green-deep/80">
                When high-glycemic carbohydrates are digested rapidly, they lead to significant postprandial (after-meal) blood glucose surges. Over time, repeated spikes place increased strain on pancreatic beta cells and make HbA1c control challenging.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-green-deep/80">
                The solution is not to eliminate familiar Indian foods or adopt bland, unsustainable Western diets. Rather, clinical nutrition helps rebalance the Indian thali: shifting toward lower glycemic index whole grains, adding generous servings of seasonal vegetables, and ensuring that every meal contains high-quality vegetarian or lean protein.
              </p>
            </div>

            {/* Core Dietary Principles */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Core Principles for Blood Sugar Stability
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Our diabetes nutrition protocols focus on practical, sustainable kitchen adjustments rather than rigid deprivation:
              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">Smart Carbohydrate Selection</h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    We transition from refined flours (maida) to traditional whole grains and millets—such as jowar, bajra, ragi, and steel-cut oats—which digest slowly and release glucose gradually into the bloodstream.
                  </p>
                </div>

                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">Carbohydrate &amp; Protein Pairing</h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Carbohydrates are never eaten in isolation. Pairing roti or rice with protein-dense lentils, sprouted pulses, paneer, tofu, or curd blunts the glycemic response and prolongs satiety.
                  </p>
                </div>

                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">High Dietary Fiber Intake</h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Abundant soluble and insoluble fiber from green leafy vegetables, cucumbers, methi, and flaxseeds forms a gel in the digestive tract that slows glucose absorption and supports gut health.
                  </p>
                </div>

                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">Meal Pacing &amp; Early Dinners</h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Consistent meal timings prevent prolonged fasting followed by heavy compensatory eating. Aligning dinner hours 2-3 hours before sleep prevents nocturnal glucose irregularities.
                  </p>
                </div>
              </div>
            </div>

            {/* Certified Diabetes Educator Leadership */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Led by a Certified Diabetes Educator (CDE)
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                At The Diets, diabetes nutrition guidance is directed by founder Dt. Radha Mishra, an experienced Clinical Nutritionist (M.Sc.) and Certified Diabetes Educator (CDE) with 5+ years of clinical experience. Her specialized background in glycemic care ensures that meal frameworks are medically sound, practical, and tailored to your daily routine.
              </p>
              <div className="mt-4 pt-3 border-t border-green-deep/10">
                <Link to="/dietitians" className="text-xs font-medium underline text-green-deep">
                  View full credentials on our Dietitians page →
                </Link>
              </div>
            </div>

            {/* Related Nutrition Care */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Explore Related Clinical Programs
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Diabetes often co-exists with weight management, thyroid conditions, or cardiovascular health goals. Explore our full spectrum of specialized care:
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">
                    <Link to="/online-dietitian-consultation" className="hover:underline">
                      Online Dietitian Consultation →
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    1-on-1 virtual sessions covering blood work review, daily food routine analysis, and step-by-step personalized Indian meal planning.
                  </p>
                </div>
                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">
                    <Link to="/weight-loss-diet-plan" className="hover:underline">
                      Weight Loss Diet Plan →
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Calorie-smart Indian food frameworks designed for steady fat reduction and metabolic vitality without extreme starvation.
                  </p>
                </div>
                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">
                    <Link to="/pcos-diet-plan" className="hover:underline">
                      PCOS Diet Plan →
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Hormonal nutrition targeting insulin resistance, irregular cycles, and stubborn weight gain using home-cooked Indian foods.
                  </p>
                </div>
                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">
                    <Link to="/thyroid-diet-plan" className="hover:underline">
                      Thyroid Diet Plan →
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Therapeutic nutrition addressing sluggish metabolism, energy levels, and digestive comfort through nutrient-dense foods.
                  </p>
                </div>
              </div>
            </div>

            {/* How It Works - 4 Steps */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                How Our Diabetes Nutrition Process Works
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

            {/* Programs & Transparent Pricing */}
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
                Support Your Blood Sugar with Home Cooking
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-green-deep/75 text-pretty">
                Take an unhurried, practical approach to your daily nutrition. Speak with our clinical dietitians to create a realistic meal framework.
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
                <strong>Educational Notice:</strong> Information on this page is for general nutritional education regarding diabetes management in India. It does not replace individualized medical advice, clinical diagnosis, or prescribed drug therapies from your treating physician. Please review our{' '}
                <Link to="/medical-disclaimer" className="underline hover:text-green-deep">
                  Medical Disclaimer
                </Link>{' '}
                for full clinical terms.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

