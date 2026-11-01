import Hero from '@/scenes/Hero';
import TextLoop from '@/components/TextLoop';
import NoiseScene from '@/scenes/NoiseScene';
import PlanScene from '@/scenes/PlanScene';
import MeetDietitians from '@/scenes/MeetDietitians';
import HowItWorks from '@/scenes/HowItWorks';
import WhatWeHelp from '@/scenes/WhatWeHelp';
import ScrollReveal from '@/components/ScrollReveal';
import CloseScene from '@/scenes/CloseScene';
import FaqSection from '@/sections/FaqSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* Interactive Nutrition Philosophy Ribbon */}
      <section className="relative w-full overflow-hidden py-4 md:py-8 -my-8 z-20 select-none">
        <TextLoop
          text="HOME-COOKED INDIAN MEALS ✦ ZERO STARVATION ✦ PCOS & THYROID CARE ✦ SUSTAINABLE WEIGHT LOSS ✦ DIABETES MANAGEMENT"
          shape="wave"
          speed={65}
          direction="forward"
          separator="✦"
          curviness={55}
          tilt={-2}
          fontSize={28}
          fontWeight={700}
          letterSpacing={2.5}
          uppercase
          color="#E6E4D6"
          ribbon
          ribbonColor="#16382B"
          ribbonWidth={68}
          edgeFade={0.25}
          pauseOnHover={true}
          cross={true}
          crossColor="#D6DEC2"
          crossAngle={12}
          draggable={true}
          scrollBoost={1.2}
        />
      </section>
      <NoiseScene />
      <PlanScene />
      <MeetDietitians />
      <HowItWorks />
      <WhatWeHelp />
      {/* Editorial Scroll Reveal Philosophy */}
      <section className="relative w-full bg-[#0B221A] py-24 md:py-36 px-6 overflow-hidden">
        <div className="mx-auto max-w-4xl text-center">
          <p className="eyebrow mb-6 text-cream/50">Our Philosophy</p>
          <ScrollReveal
            mode="scrub"
            splitBy="words"
            effect="fade"
            stagger={0.05}
            duration={0.8}
            smoothing={0}
            baseOpacity={0.12}
            baseRotation={2}
            baseOffset={0}
            enableBlur={true}
            blurStrength={4}
            containerClassName="my-0"
            textClassName="display-xl md:display-xxl font-light text-cream text-balance leading-snug"
          >
            When does a diet truly succeed? Not when you starve. Not when you eliminate every food you love. A diet succeeds when it fits gently into the life you already live.
          </ScrollReveal>
        </div>
      </section>
      <FaqSection />
      <CloseScene />
    </>
  );
}
