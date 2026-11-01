import { Routes, Route } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HomePage from '@/pages/HomePage';
import DietitiansPage from '@/pages/DietitiansPage';
import ProgramsPage from '@/pages/ProgramsPage';
import HowItWorksPage from '@/pages/HowItWorksPage';
import FaqPage from '@/pages/FaqPage';
import BookPage from '@/pages/BookPage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function ServerApp() {
  return (
    <>
      <div className="grain" aria-hidden="true" />
      <Header />
      <main>
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

