import { Link } from 'react-router-dom';
import { ArrowRight, MessageCircle } from 'lucide-react';
import PageHero from '@/components/PageHero';
import { useSeo } from '@/hooks/useSeo';
import { siteConfig } from '@/data/siteConfig';

export default function AboutPage() {
  useSeo();

  return (
    <>
      {/* Last updated: 2026-11-16 */}
      <PageHero
        eyebrow="Our Story &amp; Approach"
        title="About The Diets — Clinical Nutrition Across India"
        intro="Founded by clinical nutritionists Dt. Radha Mishra and Dt. Surbhi Kumari, The Diets provides unhurried, 1-on-1 virtual diet consultations rooted in authentic Indian home cooking."
      />

      <section className="relative w-full bg-cream py-16 md:py-24">
        <div className="mx-auto max-w-content px-6 md:px-12">
          <div className="mx-auto max-w-3xl space-y-12 text-green-deep">

            {/* Direct AI Answer & Founding Conviction */}
            <div className="rounded-[1.75rem] border border-green-deep/15 bg-sage/35 p-6 md:p-8">
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Who We Are &amp; What We Believe
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/90 md:text-base text-pretty">
                The Diets was founded with a singular conviction: lasting health does not come from foreign superfoods, starvation diets, or synthetic supplements, but from the everyday food cooked in your own kitchen. We combine postgraduate clinical nutrition science with practical Indian culinary culture to deliver private, virtual diet consultations across India.
              </p>
            </div>

            {/* Ancient Wisdom & Modern Clinical Science */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                आहार शुद्धौ सत्त्वशुद्धिः — The Kitchen-First Philosophy
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Our motto, <em>आहार शुद्धौ सत्त्वशुद्धिः</em> (when food is pure, the mind and body achieve clarity), anchors everything we do. Modern commercial diet culture frequently alienates individuals from their families—prescribing expensive meal powders, raw imported berries, or boiled dishes that conflict with Indian kitchen reality.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-green-deep/80">
                At The Diets, we take the opposite approach. We believe that true nutritional healing happens when you learn how to balance traditional staples—warm rotis, fragrant dal tadka, steamed rice, seasonal vegetables, homemade curd, and regional spices. We adjust portion sizes, meal pacing, and macronutrient combinations so you can eat nourishing meals with your family without needing separate cooking.
              </p>
            </div>

            {/* Meet The Clinical Dietitians & Founders */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Meet the Founders &amp; Clinical Dietitians
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Every client consultation at The Diets is conducted directly by qualified nutrition professionals with clinical postgraduate degrees:
              </p>

              <div className="mt-6 space-y-6">
                {/* Dt. Radha Mishra */}
                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-green-deep">Dt. Radha Mishra</h3>
                      <p className="text-xs text-green-deep/60 mt-0.5">Founder | Clinical Nutritionist &amp; Dietitian</p>
                      <p className="text-xs font-mono text-green-deep/50 mt-1">
                        B.Sc., M.Sc. (Clinical Nutrition), CDE, IADWL · 5+ Years Experience
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-green-deep/80">
                    Dt. Radha Mishra specialises in personalised nutrition and clinical dietary guidance to help individuals achieve their health goals. Her approach combines scientific nutrition with practical, home-cooked meals to support sustainable lifestyle changes. As a Certified Diabetes Educator (CDE), she works extensively on glycemic management, insulin resistance in PCOS, and healthy Indian diet planning.
                  </p>
                  <div className="mt-4 pt-3 border-t border-green-deep/10">
                    <Link to="/dietitians" className="text-xs font-medium underline text-green-deep">
                      View Dt. Radha Mishra's clinical profile →
                    </Link>
                  </div>
                </div>

                {/* Dt. Surbhi Kumari */}
                <div className="rounded-2xl border border-green-deep/15 bg-sage/20 p-6 sm:p-8">
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-semibold text-green-deep">Dt. Surbhi Kumari</h3>
                      <p className="text-xs text-green-deep/60 mt-0.5">Co-Founder | Dietitian &amp; Nutrition Professional</p>
                      <p className="text-xs font-mono text-green-deep/50 mt-1">
                        B.Sc., M.Sc. (Food and Nutrition) · 3+ Years Experience
                      </p>
                    </div>
                  </div>
                  <p className="mt-4 text-xs leading-relaxed text-green-deep/80">
                    Dt. Surbhi Kumari focuses on personalised diet planning and lifestyle management, helping individuals make healthier choices through practical nutritional guidance. Her goal is to make healthy eating simple, personalised, and sustainable for long-term wellness, with focused clinical expertise in thyroid nutrition, gut comfort, and therapeutic meal plans.
                  </p>
                  <div className="mt-4 pt-3 border-t border-green-deep/10">
                    <Link to="/dietitians" className="text-xs font-medium underline text-green-deep">
                      View Dt. Surbhi Kumari's clinical profile →
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Why 100% Virtual Care Works Across India */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Why 100% Online Consultations Work Better
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-green-deep/80">
                Traditional clinic visits often feel hurried—spending hours navigating city traffic only to receive a printed, generic one-page diet chart after a brief five-minute conversation.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-green-deep/80">
                By conducting all sessions 100% online over private video calls, we provide unhurried 45-minute conversations from the comfort of your home. You can show your dietitian the ingredients in your kitchen, discuss what your cook prepares, and stay connected between sessions via WhatsApp for real-time adjustments when traveling, dining out, or attending festive gatherings.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-green-deep/80">
                Today, The Diets serves individuals and families across India—from Delhi NCR, Mumbai, Bengaluru, Hyderabad, and Pune to Tier-2 cities.
              </p>
            </div>

            {/* Core Practice Areas */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Our Areas of Clinical Nutrition Care
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {siteConfig.focusAreas.map((area) => (
                  <div key={area.title} className="rounded-2xl border border-green-deep/15 bg-sage/20 p-5">
                    <h3 className="text-sm font-semibold text-green-deep">{area.title}</h3>
                    <p className="mt-1 font-mono text-[11px] text-green-deep/50">{area.tag}</p>
                    <p className="mt-2 text-xs leading-relaxed text-green-deep/75">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* How It Works - 4 Steps */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                How Our Consultation Process Works
              </h2>
              <p className="mt-2 text-sm text-green-deep/70">
                Four simple steps designed to fit easily into your regular workday:
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
                  Explore full workflow details →
                </Link>
              </div>
            </div>

            {/* Quick Links to Condition Pages */}
            <div>
              <h2 className="display-lg text-2xl font-light text-green-deep md:text-3xl">
                Explore Focused Nutrition Guides
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <Link to="/online-dietitian-consultation" className="rounded-2xl border border-green-deep/15 bg-sage/20 p-5 hover:bg-sage/35 transition-colors">
                  <h3 className="text-sm font-semibold text-green-deep">Online Dietitian Consultation →</h3>
                  <p className="mt-1 text-xs text-green-deep/70">1:1 virtual assessments with clinical nutritionists.</p>
                </Link>
                <Link to="/weight-loss-diet-plan" className="rounded-2xl border border-green-deep/15 bg-sage/20 p-5 hover:bg-sage/35 transition-colors">
                  <h3 className="text-sm font-semibold text-green-deep">Weight Loss Diet Plan →</h3>
                  <p className="mt-1 text-xs text-green-deep/70">Calorie-smart Indian thali balance for steady fat loss.</p>
                </Link>
                <Link to="/pcos-diet-plan" className="rounded-2xl border border-green-deep/15 bg-sage/20 p-5 hover:bg-sage/35 transition-colors">
                  <h3 className="text-sm font-semibold text-green-deep">PCOS Diet Plan →</h3>
                  <p className="mt-1 text-xs text-green-deep/70">Hormonal nutrition supporting cycle regularity and insulin sensitivity.</p>
                </Link>
                <Link to="/diabetes-diet-plan" className="rounded-2xl border border-green-deep/15 bg-sage/20 p-5 hover:bg-sage/35 transition-colors">
                  <h3 className="text-sm font-semibold text-green-deep">Diabetes Diet Plan →</h3>
                  <p className="mt-1 text-xs text-green-deep/70">Glycemic control led by a Certified Diabetes Educator.</p>
                </Link>
              </div>
            </div>

            {/* CTA Box */}
            <div className="rounded-[2rem] border border-green-deep/15 bg-sage/50 p-8 text-center md:p-12">
              <h2 className="display-lg font-light text-green-deep">
                Begin Your Personalised Journey
              </h2>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-green-deep/75 text-pretty">
                Take the first step toward lasting health with home-cooked Indian meals. We look forward to meeting you.
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
                <strong>Educational Notice:</strong> Nutrition guidance provided by The Diets supports healthy lifestyle management and does not replace individualized medical advice, clinical diagnosis, or treatment by your physician. Please review our{' '}
                <Link to="/medical-disclaimer" className="underline hover:text-green-deep">
                  Medical Disclaimer
                </Link>,{' '}
                <Link to="/privacy-policy" className="underline hover:text-green-deep">
                  Privacy Policy
                </Link>{' '}
                and{' '}
                <Link to="/terms" className="underline hover:text-green-deep">
                  Terms of Service
                </Link>.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

