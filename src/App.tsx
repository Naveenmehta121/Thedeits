import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useSmoothScroll } from '@/hooks/useSmoothScroll';
import { useRouteTransition } from '@/hooks/useRouteTransition';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import DietitiansPage from '@/pages/DietitiansPage';
import ProgramsPage from '@/pages/ProgramsPage';
import HowItWorksPage from '@/pages/HowItWorksPage';
import FaqPage from '@/pages/FaqPage';
import BookPage from '@/pages/BookPage';
import NotFoundPage from '@/pages/NotFoundPage';
import PrivacyPolicyPage from '@/pages/PrivacyPolicyPage';
import TermsPage from '@/pages/TermsPage';
import MedicalDisclaimerPage from '@/pages/MedicalDisclaimerPage';
import OnlineDietitianConsultationPage from '@/pages/OnlineDietitianConsultationPage';
import PcosDietPlanPage from '@/pages/PcosDietPlanPage';
import WeightLossDietPlanPage from '@/pages/WeightLossDietPlanPage';
import DiabetesDietPlanPage from '@/pages/DiabetesDietPlanPage';
import ThyroidDietPlanPage from '@/pages/ThyroidDietPlanPage';
import AboutPage from '@/pages/AboutPage';
import ContactPage from '@/pages/ContactPage';

function Shell() {
  useSmoothScroll();
  const wrapperRef = useRouteTransition();

  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main ref={wrapperRef}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dietitians" element={<DietitiansPage />} />
          <Route path="/programs" element={<ProgramsPage />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/book" element={<BookPage />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
          <Route path="/terms" element={<TermsPage />} />
          <Route path="/medical-disclaimer" element={<MedicalDisclaimerPage />} />
          <Route path="/online-dietitian-consultation" element={<OnlineDietitianConsultationPage />} />
          <Route path="/pcos-diet-plan" element={<PcosDietPlanPage />} />
          <Route path="/weight-loss-diet-plan" element={<WeightLossDietPlanPage />} />
          <Route path="/diabetes-diet-plan" element={<DiabetesDietPlanPage />} />
          <Route path="/thyroid-diet-plan" element={<ThyroidDietPlanPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Shell />
    </BrowserRouter>
  );
}
