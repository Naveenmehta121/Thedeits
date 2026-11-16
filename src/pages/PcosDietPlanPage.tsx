import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { Accordion } from '@/components/Accordion';
import { useSeo } from '@/hooks/useSeo';
import { siteConfig } from '@/data/siteConfig';

const FAQS = [
  {
    q: 'Can diet alone help manage PCOS symptoms?',
    a: 'Nutrition is recognized as the cornerstone of first-line PCOS management. Balancing macronutrients improves insulin sensitivity, which in turn helps regulate ovulation, clear skin breakouts, and assist weight management. It works alongside medical care prescribed by your physician.',
  },
  {
    q: 'Do I have to eliminate dairy and gluten completely for PCOS?',
    a: 'No. Gluten and dairy elimination is not universally required for all individuals with PCOS. Unless you have a diagnosed celiac disease or lactose intolerance, whole grains (like whole wheat, millets) and homemade curd or paneer provide high-quality protein, calcium, and probiotics.',
  },
  {
    q: 'Which Indian grains are best suited for a PCOS diet?',
    a: 'Traditional Indian millets like jowar, bajra, ragi, and foxtail millet, along with brown rice and rolled oats, provide complex carbohydrates and slow-release dietary fiber that prevent post-meal glucose spikes.',
  },
  {
    q: 'How soon can I expect improvements in my menstrual cycle?',
    a: "Changes in cycles vary widely from person to person. Discuss any concerns with your gynaecologist or doctor. Sustained nutrition and healthy daily habits support metabolic and overall well-being over time alongside your doctor's care.",
  },
  {
    q: 'Can I follow a vegetarian Indian diet and still manage PCOS effectively?',
    a: 'Absolutely. A vegetarian Indian diet rich in lentils, sprouted pulses, paneer, tofu, sattu, nuts, and seeds provides complete amino acids and essential micronutrients without requiring animal protein.',
  },
];

export default function PcosDietPlanPage() {
  useSeo();

  return (
    <>
      {/* Last updated: 2026-11-16 */}
      <PageHero
        eyebrow="Hormonal Health &amp; PCOS Care"
        title="Online PCOS Diet Plan &amp; Hormonal Nutrition in India"
        intro="Clinically supervised, kitchen-first Indian meal frameworks to address insulin resistance, irregular cycles, and stubborn weight—without crash diets or synthetic quick fixes."
      />

      <section className="relative w-full bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-12">
          <div className="mx-auto max-w-3xl space-y-12 text-green-deep">

            {/* Direct AI Answer Block */}
            <div className="rounded-[1.75rem] border border-green-deep/15 bg-sage/35 p-6 md:p-8">
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                What is a PCOS Diet Plan?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/90 md:text-base text-pretty">
                A PCOS diet plan is a structured nutritional approach that supports the lifestyle management of Polycystic Ovary Syndrome by balancing meal composition, promoting steady energy, and supporting hormonal health. In India, an effective PCOS diet replaces refined grains and high-glycemic snacks with fiber-dense regional staples—such as whole millets, dals, seasonal greens, and healthy fats—paired with consistent meal timings and physical activity. Rather than severe calorie restriction, the primary focus is stabilizing daily glucose responses to support cycle regularity and healthy weight management alongside your physician's care.
              </p>
            </div>

            {/* Understanding PCOS & Indian Diets */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Understanding PCOS and Insulin Resistance in India
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Polycystic Ovary Syndrome affects millions of women across India. While often perceived primarily as a reproductive issue, PCOS is deeply connected with metabolic and endocrine health. Insulin resistance is common in PCOS, though it does not affect everyone. In insulin resistance, cells do not respond effectively to insulin, causing the pancreas to produce more.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-green-deep/80">
                Elevated circulating insulin stimulates the ovaries to produce excess androgens (male hormones), leading to classic PCOS symptoms including irregular or missed periods, facial hair growth (hirsutism), adult acne, scalp hair thinning, and central abdominal weight gain.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-green-deep/80">
                Standard urban Indian diets often rely heavily on refined carbohydrates—white rice, refined flour (maida), fried snacks, and sweetened beverages. When these foods are consumed without adequate dietary protein or fiber, sharp glucose spikes follow. Over time, these spikes exacerbate insulin resistance. Rebalancing meals around low-glycemic, fiber-rich Indian staples provides the nutritional foundation needed to support hormonal balance.
              </p>
            </div>

            {/* Core Nutritional Principles */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Core Dietary Principles for Hormonal Harmony
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Our clinical dietitians design PCOS meal frameworks around five practical, kitchen-first principles:
              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">Smart Carbohydrate Pairing</h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    We never eliminate carbohydrates completely. Instead, we transition to slow-digesting millets (jowar, bajra, ragi) and always pair carbs with quality protein and dietary fiber to blunt insulin spikes.
                  </p>
                </div>

                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">Adequate Vegetarian &amp; Lean Protein</h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Every main meal incorporates reliable Indian protein sources—such as sprouted moong, paneer, tofu, sattu, lentils, curd, or eggs—to enhance satiety and support lean muscle preservation.
                  </p>
                </div>

                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">Anti-Inflammatory Kitchen Spices</h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Traditional Indian spice cabinets offer natural anti-inflammatory compounds. We incorporate culinary amounts of turmeric (curcumin), cinnamon, methi (fenugreek) seeds, and jeera to soothe systemic inflammation.
                  </p>
                </div>

                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">Healthy Fats &amp; Seed Rotation</h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Essential fatty acids from flax seeds, pumpkin seeds, walnuts, and cold-pressed mustard or sesame oil provide precursors for cellular membranes and hormone synthesis.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Nutrition Care */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Comprehensive Nutrition Consultations
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                PCOS rarely presents in isolation. Many individuals also navigate co-existing metabolic concerns such as thyroid sluggishness, borderline blood glucose, or weight plateaus. Learn more about our specialized guidance:
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">
                    <Link to="/online-dietitian-consultation" className="hover:underline">
                      Online Dietitian Consultation →
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Detailed 1-on-1 virtual sessions covering blood work review, daily food routine analysis, and step-by-step personalized Indian meal planning.
                  </p>
                </div>
                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">
                    <Link to="/weight-loss-diet-plan" className="hover:underline">
                      Weight Loss Diet Plan →
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Calorie-smart Indian food frameworks designed for steady fat reduction and metabolic revitalization without extreme starvation.
                  </p>
                </div>
              </div>
            </div>

            {/* How It Works - 4 Steps */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                How Our PCOS Nutrition Process Works
              </h2>
              <p className="mt-2 text-sm text-green-deep/70">
                A structured, 4-step consultation flow focused on unhurried guidance and ongoing habit support:
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
                  Explore full consultation workflow details →
                </Link>
              </div>
            </div>

            {/* Meet Your Clinical Dietitians */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Consult Qualified Clinical Dietitians
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Your PCOS journey is managed directly by qualified clinical nutritionists holding recognized postgraduate degrees in food and clinical nutrition:
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
                        View dietitian profile →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Programs & Transparent Pricing */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Consultation Programs &amp; Transparent Pricing
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Every health plan is transparently priced with no recurring subscriptions or hidden charges. Choose the tier that matches your goals:
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
                  View complete program breakdown →
                </Link>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                PCOS Nutrition FAQs
              </h2>
              <div className="mt-6">
                <Accordion items={FAQS} defaultOpen={0} />
              </div>
              <div className="mt-4 text-xs text-green-deep/60">
                Browse our <Link to="/faq" className="underline font-medium hover:text-green-deep">full FAQ page</Link> for additional details on appointment scheduling and payment options.
              </div>
            </div>

            {/* CTA Box */}
            <div className="rounded-[2rem] border border-green-deep/15 bg-sage/50 p-8 text-center md:p-12">
              <h2 className="display-lg font-light text-green-deep">
                Take Control of Your Hormonal Health
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-green-deep/75 text-pretty">
                Schedule an unhurried 1-on-1 video assessment with our clinical nutritionists. We will help you develop a realistic meal plan that works with your daily routine.
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
                <strong>Educational Notice:</strong> Information presented here is for general educational purposes regarding PCOS nutrition in India. It does not replace individualized medical assessment, diagnosis, or prescription medical therapy from your gynecologist or endocrinologist. Please review our{' '}
                <Link to="/medical-disclaimer" className="underline hover:text-green-deep">
                  Medical Disclaimer
                </Link>{' '}
                for full details.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

