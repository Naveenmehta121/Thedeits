import { Link } from 'react-router-dom';
import { Instagram, Facebook } from 'lucide-react';
import { siteConfig } from '@/data/siteConfig';

const COLS = [
  {
    head: 'Explore',
    links: [
      { label: 'Dietitians', href: '/dietitians' },
      { label: 'Programs', href: '/programs' },
      { label: 'How It Works', href: '/#how-it-works' },
      { label: 'FAQ', href: '/#faq' },
    ],
  },
  {
    head: 'Connect',
    links: [
      { label: 'Book a Consultation', href: '/book' },
      { label: 'WhatsApp', href: siteConfig.contact.whatsappUrl },
      { label: 'Instagram', href: siteConfig.social.instagram },
      { label: 'Facebook', href: siteConfig.social.facebook },
      { label: 'Email', href: `mailto:${siteConfig.contact.email}` },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative w-full bg-green-obsidian pt-20 pb-28 md:pb-16">
      <div className="mx-auto max-w-content px-6 md:px-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="space-y-4">
            <Link to="/" className="inline-block group">
              <div className="space-y-3">
                <img 
                  src="/logo.png" 
                  alt="The Diet's" 
                  className="h-14 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
                />
                <p className="text-xs text-[#A3B899] font-serif tracking-wider">
                  आहार शुद्धौ सत्त्वशुद्धिः
                </p>
              </div>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-cream/60 text-pretty">
              The Diets — Your Health, Your Goals, Your Personalised Nutrition Journey.
            </p>
            <div className="pt-2 space-y-1.5 text-sm">
              <p>
                <a
                  href={`tel:${siteConfig.contact.phoneRaw}`}
                  className="text-cream/70 hover:text-cream transition-colors duration-200"
                >
                  {siteConfig.contact.phone}
                </a>
              </p>
              <p>
                <a
                  href={`mailto:${siteConfig.contact.email}`}
                  className="text-cream/70 hover:text-cream transition-colors duration-200"
                >
                  {siteConfig.contact.email}
                </a>
              </p>
              <p className="pt-1">
                <a
                  href={siteConfig.contact.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs text-[#A3B899] hover:text-cream transition-colors duration-200"
                >
                  Chat with us on WhatsApp →
                </a>
              </p>
            </div>
            <div className="pt-2 flex items-center gap-2.5">
              <a
                href={siteConfig.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 bg-cream/5 text-cream/75 transition-all duration-300 hover:border-[#A3B899] hover:bg-cream/10 hover:text-cream"
                aria-label="Follow The Diets on Instagram"
                title="Follow on Instagram"
              >
                <Instagram size={17} />
              </a>
              <a
                href={siteConfig.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-cream/20 bg-cream/5 text-cream/75 transition-all duration-300 hover:border-[#A3B899] hover:bg-cream/10 hover:text-cream"
                aria-label="Follow The Diets on Facebook"
                title="Follow on Facebook"
              >
                <Facebook size={17} />
              </a>
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.head}>
              <p className="eyebrow mb-5 text-cream/45">{col.head}</p>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    {l.href.startsWith('http') || l.href.startsWith('mailto') ? (
                      <a
                        href={l.href}
                        target={l.href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="text-sm text-cream/70 transition-colors duration-300 hover:text-cream"
                      >
                        {l.label}
                      </a>
                    ) : (
                      <Link
                        to={l.href}
                        className="text-sm text-cream/70 transition-colors duration-300 hover:text-cream"
                      >
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-cream/10 pt-8">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs text-cream/40">
                Privacy Policy · Terms · Medical Disclaimer
              </p>
              <p className="mt-2 max-w-xl text-xs leading-relaxed text-cream/35 text-pretty">
                Information on this site is general guidance and is not a substitute for
                personal medical advice.
              </p>
            </div>
            <div className="text-left md:text-right space-y-1.5">
              <p className="text-xs text-cream/40">
                Website crafted by{' '}
                <a
                  href={siteConfig.credits.developerUrl}
                  target="_blank"
                  rel="noopener"
                  title="Silly Media — Digital Marketing & Website Growth Agency"
                  className="font-medium text-[#A3B899] underline decoration-[#A3B899]/40 underline-offset-4 transition-colors duration-200 hover:text-cream hover:decoration-cream"
                >
                  {siteConfig.credits.developerName}
                </a>
              </p>
              <p className="text-xs text-cream/30">
                © {new Date().getFullYear()} {siteConfig.brand.name}. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
