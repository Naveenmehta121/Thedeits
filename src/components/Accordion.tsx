import { useState } from 'react';
import { Plus } from 'lucide-react';

interface AccordionItem {
  q: string;
  a: string;
}

/** Calm editorial accordion — shadcn/ui-style API, custom styling. */
export function Accordion({ items, defaultOpen = 0 }: { items: AccordionItem[]; defaultOpen?: number | null }) {
  const [open, setOpen] = useState<number | null>(defaultOpen);

  return (
    <div className="divide-y divide-green-deep/15 border-y border-green-deep/15">
      {items.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <h3>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : i)}
                className="flex w-full items-center justify-between gap-6 py-6 text-left md:py-8"
                aria-expanded={isOpen}
              >
                <span className="display-lg font-light text-green-deep">{item.q}</span>
                <Plus
                  className={`shrink-0 text-green-deep transition-transform duration-500 ease-smooth ${
                    isOpen ? 'rotate-45' : ''
                  }`}
                  size={22}
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
              </button>
            </h3>
            <div
              className="grid transition-all duration-500 ease-smooth"
              style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
            >
              <div className="overflow-hidden">
                <p className="max-w-2xl pb-7 pr-2 text-sm leading-relaxed text-green-deep/80 text-pretty md:pr-10 md:text-base">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
