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
