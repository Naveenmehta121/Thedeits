import { useState } from 'react';

interface EditorialPortraitProps {
  src: string;
  alt: string;
  className?: string;
  variant?: 'emerald' | 'sage';
  objectPosition?: string;
}

/** Botanical/architectural monogram SVG fallback — no human faces. */
function BotanicalFallback() {
  return (
    <svg
      viewBox="0 0 300 400"
      className="h-full w-full"
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <linearGradient id="bf-g1" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E7ECE4" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#1F3D33" stopOpacity="0.25" />
        </linearGradient>
      </defs>
      <rect width="300" height="400" fill="url(#bf-g1)" />
      <path
        d="M60 400 V180 C60 100, 100 60, 150 60 C200 60, 240 100, 240 180 V400 Z"
        fill="#1F3D33"
        fillOpacity="0.12"
      />
      <line x1="150" y1="60" x2="150" y2="130" stroke="#1F3D33" strokeOpacity="0.3" strokeWidth="1" />
      <g stroke="#1F3D33" strokeOpacity="0.28" strokeWidth="1.2" fill="none">
        <path d="M150 130 C 128 108, 112 96, 100 80" />
        <path d="M150 130 C 172 108, 188 96, 200 80" />
        <path d="M150 130 C 140 105, 134 90, 130 68" />
        <path d="M150 130 C 160 105, 166 90, 170 68" />
        <path d="M150 130 L 150 60" />
        <path d="M150 155 C 118 138, 100 125, 82 108" />
        <path d="M150 155 C 182 138, 200 125, 218 108" />
      </g>
      <circle cx="150" cy="200" r="55" stroke="#B88A4A" strokeOpacity="0.18" strokeWidth="0.8" fill="none" />
      <circle cx="150" cy="200" r="38" stroke="#1F3D33" strokeOpacity="0.1" strokeWidth="0.6" fill="none" />
      <text
        x="150"
        y="208"
        textAnchor="middle"
        fontFamily="Fraunces, Georgia, serif"
        fontSize="18"
        fontWeight="300"
        fill="#1F3D33"
        fillOpacity="0.28"
        letterSpacing="-0.02em"
      >
        TD
      </text>
    </svg>
  );
}

/**
 * EditorialPortrait — luxury architectural frame for dietitian photos.
 * Color-harmonizing overlay (mix-blend-mode: soft-light), hover zoom, botanical SVG fallback.
 */
export default function EditorialPortrait({
  src,
  alt,
  className = '',
  objectPosition = 'center top',
}: EditorialPortraitProps) {
  const [failed, setFailed] = useState(false);

  return (
    <div className={`editorial-portrait-frame relative overflow-hidden ${className}`}>
      {failed ? (
        <BotanicalFallback />
      ) : (
        <>
          <img
            src={src}
            alt={alt}
            loading="lazy"
            onError={() => setFailed(true)}
            className="editorial-portrait-img absolute inset-0 h-full w-full object-cover"
            style={{
              objectPosition,
              transition: 'transform 900ms cubic-bezier(0.22, 1, 0.36, 1)',
            }}
          />
          {/* Color-harmonizing soft-light overlay */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{ background: '#1F3D33', opacity: 0.12, mixBlendMode: 'soft-light' }}
          />
          {/* Bottom vignette */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                'linear-gradient(to top, rgba(18,38,31,0.70) 0%, rgba(18,38,31,0.18) 38%, transparent 65%)',
            }}
          />
        </>
      )}
      <style>{`.editorial-portrait-frame:hover .editorial-portrait-img { transform: scale(1.04); }`}</style>
    </div>
  );
}
