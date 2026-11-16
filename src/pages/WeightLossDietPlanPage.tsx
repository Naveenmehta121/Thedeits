import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { Accordion } from '@/components/Accordion';
import { useSeo } from '@/hooks/useSeo';
import { siteConfig } from '@/data/siteConfig';

const FAQS = [
  {
    q: 'How much weight can I safely lose per month?',
    a: 'Healthy weight management is highly individualized and depends on baseline health, daily habits, and consistency. Rather than chasing extreme numbers on a scale, our clinical dietitians focus on steady, sustainable progress, healthy habit formation, and noticeable inch loss that you can comfortably maintain for life.',
  },
  {
    q: 'Do I have to stop eating roti, rice, or dairy to lose weight?',
    a: 'No. Weight loss occurs through an overall calorie deficit, not by demonizing wholesome traditional staples. Steamed rice, whole wheat rotis, and homemade curd provide essential energy, fiber, and micronutrients when enjoyed in balanced portions.',
  },
  {
    q: 'Will I be asked to purchase supplements, teas, or meal powders?',
    a: 'No. We never prescribe fad diets, starvation, or expensive fat-burner supplements. Our guidance focuses exclusively on wholesome, kitchen-first grocery foods prepared in your own home.',
  },
  {
    q: 'How do online consultations keep me accountable without clinic weigh-ins?',
    a: 'Virtual care provides frequent, actionable accountability through continuous WhatsApp touchpoints and scheduled weekly review calls. Rather than weighing in once a month, you receive real-time support for restaurant dinners, festive meals, and daily routine hurdles.',
  },
  {
    q: 'What if I have other health concerns like diabetes, thyroid, or hypertension?',
    a: 'Our clinical dietitians specialize in medical nutrition therapy. We review your full health profile and lab reports to design a unified meal framework that addresses weight management alongside blood sugar, blood pressure, or thyroid needs.',
  },
];

export default function WeightLossDietPlanPage() {
  useSeo();

  return (
    <>
      {/* Last updated: 2026-11-16 */}
      {/* [TODO: dietitian to confirm numerical weight loss rate recommendations] */}
      <PageHero
        eyebrow="Sustainable Lifestyle Care"
        title="Online Weight Loss Diet Plan in India"
        intro="Personalised, home-cooked Indian diet plans designed for steady fat loss, everyday vitality, and long-term habits—without starvation, fad supplements, or rigid rules."
      />

      <section className="relative w-full bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-12">
          <div className="mx-auto max-w-3xl space-y-12 text-green-deep">

            {/* Direct AI Answer Block */}
            <div className="rounded-[1.75rem] border border-green-deep/15 bg-sage/35 p-6 md:p-8">
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                What is an Online Weight Loss Diet Plan?
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/90 md:text-base text-pretty">
                An online weight loss diet plan is a professionally guided, personalized nutrition framework focused on gradual, sustainable fat reduction while preserving lean muscle mass and metabolic health. In an Indian context, an effective weight loss plan respects regional culinary culture by utilizing everyday staples like rotis, dals, sabzis, rice, and curd in calorie-smart, protein-sufficient combinations. By avoiding crash starvation and rigid food eliminations, it enables consistent lifestyle change that prevents post-diet weight rebound.
              </p>
            </div>

            {/* Why Fad Diets Fail */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Why Fad Diets Fail for Indian Lifestyles
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Many popular commercial diets—such as extreme keto, zero-carb plans, or liquid meal cleanses—produce rapid initial drops on the scale. However, most of that initial loss is water weight and valuable lean muscle tissue rather than true body fat.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-green-deep/80">
                More critically, these diets create social friction and mental fatigue. In Indian households where food is a core expression of family and culture, cooking separate boiled or exotic meals is difficult to sustain beyond a few weeks. When the restrictive regimen inevitably ends, metabolic rate has slowed, leading to frustrating rebound weight gain.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-green-deep/80">
                At The Diets, we take a different approach. We believe that lasting fat loss happens when you learn how to balance the foods you already love and cook at home—adjusting portions, protein distribution, and meal pacing without alienating yourself from your family table.
              </p>
            </div>

            {/* The Kitchen-First Approach */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                The Kitchen-First Weight Loss Method
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Our clinical dietitians build your personalized weight management framework around four foundational pillars:
              </p>

              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">Smart Thali Rebalancing</h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Instead of cutting carbs, we rebalance plate proportions: filling half your thali with fiber-dense sabzis and salad, one-quarter with protein (dal, paneer, sprouts, curd), and one-quarter with smart grains.
                  </p>
                </div>

                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">Protein Optimization</h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Indian vegetarian diets are frequently protein-sparse. We integrate natural protein boosters like roasted chana, sattu, sprouted pulses, paneer, or eggs into daily meals to curb mid-afternoon cravings.
                  </p>
                </div>

                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">Mindful Cooking Oil Management</h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Hidden fats in tadkas and gravies often add unnoticed calories. We introduce practical kitchen measures—like measuring spoons and air-saute methods—without sacrificing authentic flavour.
                  </p>
                </div>

                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">Daily Routine &amp; Habit Pacing</h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    Consistent meal timings prevent evening overeating. We align meal hours with your personal work rhythm, whether you work corporate desk shifts or juggle frequent travel.
                  </p>
                </div>
              </div>
            </div>

            {/* Common Myths */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Busting Common Indian Weight Loss Myths
              </h2>
              <div className="mt-6 space-y-4">
                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-sm font-semibold text-green-deep">
                    Myth: You must stop eating rice and roti to lose belly fat.
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    <strong>Fact:</strong> Neither rice nor roti inherently causes fat gain. Fat loss is determined by total energy balance and glycemic impact. Enjoying portion-managed steamed rice with a bowl of dal, salad, and sabzi keeps you satiated without hindering weight loss.
                  </p>
                </div>

                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-sm font-semibold text-green-deep">
                    Myth: Skipping dinner accelerates fat burning.
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    <strong>Fact:</strong> Skipping dinner often triggers intense late-night hunger, erratic sleep, and morning overeating. A light, protein-balanced dinner consumed 2-3 hours before sleep supports nocturnal recovery and healthy metabolism.
                  </p>
                </div>
              </div>
            </div>

            {/* Related Care Programs */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Explore Specialized Nutrition Programs
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Weight management frequently interacts with hormonal and general wellness goals. Explore our full range of clinical care:
              </p>
              <div className="mt-6 grid gap-6 sm:grid-cols-2">
                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6">
                  <h3 className="text-base font-semibold text-green-deep">
                    <Link to="/online-dietitian-consultation" className="hover:underline">
                      Online Dietitian Consultation →
                    </Link>
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-green-deep/75">
                    1-on-1 virtual sessions with clinical dietitians covering complete dietary assessments, blood report reviews, and personalized advice.
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
              </div>
            </div>

            {/* How It Works - 4 Steps */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                How Our Weight Loss Consultation Works
              </h2>
              <p className="mt-2 text-sm text-green-deep/70">
                A streamlined, 4-step consultation flow that fits smoothly into busy professional routines:
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
                  Review complete consultation workflow details →
                </Link>
              </div>
            </div>

            {/* Meet Your Clinical Dietitians */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Meet Your Clinical Dietitians
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                At The Diets, your weight loss journey is directed by qualified nutrition professionals with clinical postgraduate degrees:
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

            {/* Programs & Transparent Pricing */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Consultation Programs &amp; Transparent Pricing
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Straightforward pricing with zero recurring lock-in charges. Select the program that matches your pace:
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
                  View complete program features →
                </Link>
              </div>
            </div>

            {/* FAQ Accordion */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Weight Loss Nutrition FAQs
              </h2>
              <div className="mt-6">
                <Accordion items={FAQS} defaultOpen={0} />
              </div>
              <div className="mt-4 text-xs text-green-deep/60">
                Have questions about payments, scheduling, or follow-ups? Visit our <Link to="/faq" className="underline font-medium hover:text-green-deep">full FAQ page</Link>.
              </div>
            </div>

            {/* CTA Box */}
            <div className="rounded-[2rem] border border-green-deep/15 bg-sage/50 p-8 text-center md:p-12">
              <h2 className="display-lg font-light text-green-deep">
                Start Sustainable Weight Loss Today
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-green-deep/75 text-pretty">
                Connect with our clinical dietitians for a personalized, unhurried assessment. Build healthy habits that last a lifetime with Indian home cooking.
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
                <strong>Educational Notice:</strong> Information on this page is for general wellness education regarding weight loss in India. It does not replace individualized medical assessment, diagnosis, or clinical treatment for obesity or associated metabolic conditions. Please review our{' '}
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

