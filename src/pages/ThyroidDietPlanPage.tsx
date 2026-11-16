import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { Accordion } from '@/components/Accordion';
import { useSeo } from '@/hooks/useSeo';
import { siteConfig } from '@/data/siteConfig';

const FAQS = [
  {
    q: 'Can dietary changes cure hypothyroidism or replace my thyroid medicine?',
    a: 'No. Nutrition cannot cure thyroid disorders or replace medical treatment prescribed by your doctor. Wholesome nutrition provides the essential micronutrients required for overall metabolic function, energy, and digestive health while you continue your prescribed medical treatment.',
  },
  {
    q: 'Do I need to stop eating cruciferous vegetables like cabbage, cauliflower, and broccoli?',
    a: 'Vegetables such as cabbage and cauliflower are healthy in normal cooked portions as part of a balanced diet. If you have concerns about them, ask your doctor.',
  },
  {
    q: 'Should I eliminate gluten and dairy if I have thyroid issues?',
    a: 'Gluten and dairy elimination is not universally necessary for everyone with a thyroid condition. Unless you have a diagnosed celiac disease or lactose intolerance, whole wheat, millets, and homemade curd provide valuable fiber, B-vitamins, and protein.',
  },
  {
    q: 'How does thyroid health affect weight management?',
    a: 'An underactive thyroid can slow your basal metabolic rate, which may cause fluid retention and make weight loss feel slower. Rather than extreme calorie restriction—which further suppresses metabolism—we focus on nutrient-dense meals and steady lifestyle consistency.',
  },
  {
    q: 'What routine blood tests should I have ready before my consultation?',
    a: "Keep your recent reports handy. Reading them and making any medicine decision is for your treating doctor; we plan meals around your routine and your doctor's advice.",
  },
];

export default function ThyroidDietPlanPage() {
  useSeo();

  return (
    <>
      {/* Last updated: 2026-11-16 */}
      <PageHero
        eyebrow="Therapeutic Thyroid Nutrition"
        title="Online Thyroid Diet Plan &amp; Metabolic Nutrition in India"
        intro="Practical Indian home-cooked meal frameworks designed to support thyroid nutrition, digestive comfort, and daily energy—crafted by clinical dietitians alongside your doctor's care."
      />

      <section className="relative w-full bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-12">
          <div className="mx-auto max-w-3xl space-y-12 text-green-deep">

            {/* Direct AI Answer Block */}
            <div className="rounded-[1.75rem] border border-green-deep/15 bg-sage/35 p-6 md:p-8">
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                What is an Online Thyroid Diet Plan?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/90 md:text-base text-pretty">
                An online thyroid diet plan is a personalized nutritional protocol designed to support individuals with thyroid conditions—such as hypothyroidism—through nutrient-dense, home-cooked meals. In India, an effective thyroid diet emphasizes key micronutrients like selenium, zinc, and iodine from everyday grocery staples, while optimizing protein distribution and managing sluggish digestion. Dietary adjustments are designed to work harmoniously alongside the medical treatment prescribed by your doctor and routine lab monitoring.
              </p>
            </div>

            {/* Medical Coordination Notice */}
            <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
              <h2 className="text-base font-semibold text-green-deep">
                Important Notice on Thyroid Medical Care &amp; Physician Guidance
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-green-deep/80">
                Dietary planning for thyroid conditions supports general daily nutrition and digestive comfort but does not replace medical treatment prescribed by your treating physician or endocrinologist. Always follow your doctor's prescribed treatment plan and maintain routine blood tests as advised. For detailed clinical terms, please review our{' '}
                <Link to="/medical-disclaimer" className="underline hover:text-green-deep">
                  Medical Disclaimer
                </Link>.
              </p>
            </div>

            {/* Understanding Thyroid Health in India */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Understanding Thyroid Function &amp; Daily Metabolism
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                The thyroid gland produces hormones that regulate the metabolic rate of virtually every organ in the human body. In India, hypothyroidism (underactive thyroid) is particularly prevalent among women, often presenting with symptoms such as persistent fatigue, unexplained weight plateaus, puffiness, dry skin, hair thinning, and sluggish bowel motility.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-green-deep/80">
                When faced with weight gain, many individuals make the mistake of adopting extreme calorie restriction or skipping meals. For an underactive thyroid, severe starvation signals the body to conserve energy, further slowing your basal metabolic rate and compounding fatigue.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-green-deep/80">
                A sustainable thyroid diet focuses on nourishment rather than deprivation. By ensuring regular meal intervals and nutrient-dense home cooking, we supply the thyroid gland and peripheral tissues with the essential cofactors they need for cellular metabolism.
              </p>
            </div>

            {/* Core Nutritional Principles */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Core Principles for Thyroid &amp; Digestive Support
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Our clinical dietitians build your thyroid care roadmap around four practical pillars:
              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">Essential Micronutrient Density</h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Thyroid health depends on a few nutrients, including iodine, selenium and zinc, which most people get from a varied diet that includes iodised salt, pulses, nuts and seeds. Avoid starting supplements unless your doctor advises it.
                  </p>
                </div>

                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">Safe Cooking for Goitrogenic Foods</h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Vegetables such as cabbage and cauliflower are healthy in normal cooked portions as part of a balanced diet. If you have concerns about them, ask your doctor.
                  </p>
                </div>

                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">Adequate Protein Distribution</h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Including protein at each meal, such as dal, curd, paneer, eggs, fish or chicken, supports overall nutrition.
                  </p>
                </div>

                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">Gut Motility &amp; Fiber Care</h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Fibre, enough fluids, regular meals and light daily movement support digestive comfort. Spices such as jeera and ajwain are traditionally used in Indian kitchens.
                  </p>
                </div>
              </div>
            </div>

            {/* Meet Your Clinical Dietitians */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Meet Your Clinical Dietitians
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                At The Diets, thyroid nutrition care is guided by qualified clinical nutritionists with postgraduate degrees in food and nutrition:
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
                        View clinical profile →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Related Nutrition Care */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Explore Related Care Programs
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Thyroid conditions frequently interact with weight management, insulin resistance, or hormonal wellness. Explore our full range of guidance:
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">
                    <Link to="/online-dietitian-consultation" className="hover:underline">
                      Online Dietitian Consultation →
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Comprehensive 1-on-1 virtual sessions with clinical nutritionists covering blood reports, daily food intake, and personalized care.
                  </p>
                </div>
                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">
                    <Link to="/pcos-diet-plan" className="hover:underline">
                      PCOS Diet Plan →
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Targeted nutritional strategies addressing hormonal balance, cycle regularity, and insulin sensitivity using Indian staples.
                  </p>
                </div>
                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">
                    <Link to="/weight-loss-diet-plan" className="hover:underline">
                      Weight Loss Diet Plan →
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Calorie-smart Indian food frameworks designed for steady fat reduction and sustainable daily habit formation.
                  </p>
                </div>
                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">
                    <Link to="/diabetes-diet-plan" className="hover:underline">
                      Diabetes Diet Plan →
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Glycemic control and HbA1c management led by a Certified Diabetes Educator using traditional home cooking.
                  </p>
                </div>
              </div>
            </div>

            {/* How It Works - 4 Steps */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                How Our Thyroid Consultation Works
              </h2>
              <p className="mt-2 text-sm text-green-deep/70">
                A structured, 4-step consultation flow that fits smoothly into your regular day:
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
                Transparent pricing with no recurring subscriptions or hidden charges. Choose the tier that matches your goals:
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
                Browse our <Link to="/faq" className="underline font-medium hover:text-green-deep">full FAQ page</Link> for additional details on appointments and support.
              </div>
            </div>

            {/* CTA Box */}
            <div className="rounded-[2rem] border border-green-deep/15 bg-sage/50 p-8 text-center md:p-12">
              <h2 className="display-lg font-light text-green-deep">
                Nourish Your Body with Balanced Home Cooking
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-green-deep/75 text-pretty">
                Schedule a 1-on-1 virtual assessment with our clinical nutritionists. We will help you build a sustainable meal plan that supports your energy and everyday well-being.
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
                <strong>Educational Notice:</strong> Information on this page is for general wellness and educational purposes regarding thyroid nutrition in India. It does not replace individualized medical advice, clinical diagnosis, or prescribed thyroid hormone replacement medication from your endocrinologist or physician. Please review our{' '}
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

