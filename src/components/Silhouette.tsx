/** Abstract botanical/architectural silhouette placeholder — no human faces. */
export default function Silhouette({ seed = 1 }: { seed?: number }) {
  const id = `sil-shared-${seed}`;
  return (
    <svg viewBox="0 0 200 260" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#1F3D33" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#1F3D33" stopOpacity="0.42" />
        </linearGradient>
      </defs>
      <path
        d="M40 260 V120 C40 70, 80 40, 100 40 C120 40, 160 70, 160 120 V260 Z"
        fill={`url(#${id}-g)`}
      />
      <path
        d="M70 260 C70 200, 80 170, 100 150 C120 170, 130 200, 130 260"
        fill="none"
        stroke="#1F3D33"
        strokeOpacity="0.22"
        strokeWidth="1"
      />
      <g stroke="#1F3D33" strokeOpacity="0.28" strokeWidth="1" fill="none">
        <path d="M100 150 C 90 130, 78 122, 70 110" />
        <path d="M100 150 C 110 130, 122 122, 130 110" />
        <path d="M100 150 C 96 128, 92 116, 88 96" />
        <path d="M100 150 C 104 128, 108 116, 112 96" />
        <path d="M100 150 L 100 90" />
      </g>
    </svg>
  );
}
