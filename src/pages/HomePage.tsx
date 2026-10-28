import Hero from '@/scenes/Hero';
import NoiseScene from '@/scenes/NoiseScene';
import PlanScene from '@/scenes/PlanScene';
import MeetDietitians from '@/scenes/MeetDietitians';
import HowItWorks from '@/scenes/HowItWorks';
import WhatWeHelp from '@/scenes/WhatWeHelp';
import CloseScene from '@/scenes/CloseScene';
import FaqSection from '@/sections/FaqSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <NoiseScene />
      <PlanScene />
      <MeetDietitians />
      <HowItWorks />
      <WhatWeHelp />
      <FaqSection />
      <CloseScene />
    </>
  );
}
