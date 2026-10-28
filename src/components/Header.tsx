import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MessageCircle } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const NAV = [
  { label: 'Dietitians', href: '/dietitians' },
  { label: 'Programs', href: '/programs' },
  { label: 'How It Works', href: '/how-it-works' },
  { label: 'FAQ', href: '/faq' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed left-1/2 top-3 z-50 -translate-x-1/2 transition-all duration-500 ease-smooth md:top-5 ${
          scrolled ? 'w-[min(96vw,72rem)]' : 'w-[min(96vw,76rem)]'
        }`}
      >
        <div
          className={`glass-header flex items-center justify-between rounded-full px-4 py-2.5 md:px-6 md:py-3 transition-all duration-500 ease-smooth ${
            scrolled ? 'shadow-[0_10px_40px_-20px_rgba(0,0,0,0.5)]' : ''
          }`}
        >
          <Link className="flex items-center gap-3 group" to="/">
            <img
              src="/logo.png"
              alt="The Diet's - आहार शुद्धौ सत्त्वशुद्धिः"
              className="h-11 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {NAV.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.label}
                  to={item.href}
                  className={`text-sm tracking-wide transition-all duration-300 ${
                    isActive
                      ? 'text-white font-medium'
                      : 'text-[#EAEBE5]/70 hover:text-white'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/book"
              className="hidden md:inline-flex items-center justify-center rounded-full border border-[#EAEBE5]/30 bg-white/[0.04] px-5 py-2 text-sm font-normal text-[#EAEBE5] backdrop-blur-md transition-all duration-300 hover:border-[#EAEBE5]/65 hover:bg-white/[0.1] hover:text-white active:scale-[0.98]"
            >
              Book a Consultation
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="rounded-full border border-[#EAEBE5]/30 bg-white/[0.04] p-2 text-[#EAEBE5] backdrop-blur-md transition-all duration-300 hover:border-[#EAEBE5]/60 hover:text-white md:hidden"
              aria-label={open ? 'Close menu' : 'Open menu'}
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-40 md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 bg-green-obsidian/95 backdrop-blur-2xl" />
            <div className="relative flex h-full flex-col justify-center px-8 pt-20">
              <nav className="flex flex-col gap-2">
                {NAV.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.08 + i * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={item.href}
                      className="display block border-b border-cream/10 py-5 text-4xl text-cream"
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08 + NAV.length * 0.07, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10"
              >
                <Link to="/book" className="glass-pill glass-pill--solid w-full justify-center">
                  Book a Consultation
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Sticky bottom mobile bar — hidden on /book */}
      {location.pathname !== '/book' && (
        <div className="fixed inset-x-0 bottom-0 z-40 md:hidden">
          <div className="mx-auto mb-3 flex w-[min(94vw,32rem)] items-center gap-3 rounded-full glass-header px-3 py-2.5">
            <a
              href={siteConfig.contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="glass-pill flex-1 justify-center !py-2.5 text-sm"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <Link to="/book" className="glass-pill glass-pill--solid flex-1 justify-center !py-2.5 text-sm">
              Book a Consultation
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
