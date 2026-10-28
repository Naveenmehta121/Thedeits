import { useEffect, useRef } from 'react';

type Variant = 'hero' | 'sage' | 'emerald';

interface VideoBackgroundProps {
  variant?: Variant;
  src?: string;
  poster?: string;
  overlayOpacity?: number;
  className?: string;
}

const PALETTES: Record<
  Variant,
  { stops: Array<{ c: string; t: number }>; particle: string; glow: string }
> = {
  hero: {
    stops: [
      { c: '#1F3D33', t: 0 },
      { c: '#12261F', t: 0.55 },
      { c: '#2a4d40', t: 1 },
    ],
    particle: 'rgba(246,243,236,0.55)',
    glow: 'rgba(184,138,74,0.16)',
  },
  sage: {
    stops: [
      { c: '#E7ECE4', t: 0 },
      { c: '#dfe6da', t: 0.5 },
      { c: '#F6F3EC', t: 1 },
    ],
    particle: 'rgba(31,61,51,0.28)',
    glow: 'rgba(31,61,51,0.07)',
  },
  emerald: {
    stops: [
      { c: '#12261F', t: 0 },
      { c: '#1F3D33', t: 0.6 },
      { c: '#0d1c16', t: 1 },
    ],
    particle: 'rgba(231,236,228,0.4)',
    glow: 'rgba(184,138,74,0.12)',
  },
};

/** Live canvas fallback — slow-drifting silk gradients + soft floating particles. */
function SilkCanvas({ variant }: { variant: Variant }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: false });
    if (!ctx) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const palette = PALETTES[variant];

    let w = 0;
    let h = 0;
    let dpr = 1;
    let rafId = 0;

    const blobs: Array<{ x: number; y: number; r: number; vx: number; vy: number; phase: number }> = [];
    const particles: Array<{ x: number; y: number; r: number; vx: number; vy: number; a: number; ta: number }> = [];

    const init = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      blobs.length = 0;
      const blobCount = 4;
      for (let i = 0; i < blobCount; i++) {
        blobs.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: Math.min(w, h) * (0.32 + Math.random() * 0.22),
          vx: (Math.random() - 0.5) * 0.12,
          vy: (Math.random() - 0.5) * 0.12,
          phase: Math.random() * Math.PI * 2,
        });
      }

      particles.length = 0;
      const pCount = Math.min(48, Math.floor((w * h) / 26000));
      for (let i = 0; i < pCount; i++) {
        particles.push({
          x: Math.random() * w,
          y: Math.random() * h,
          r: 0.6 + Math.random() * 1.8,
          vx: (Math.random() - 0.5) * 0.15,
          vy: -0.05 - Math.random() * 0.12,
          a: 0,
          ta: 0.2 + Math.random() * 0.5,
        });
      }
    };

    init();

    const lerpColor = (a: string, b: string, t: number) => {
      const pa = hexToRgb(a);
      const pb = hexToRgb(b);
      const r = Math.round(pa[0] + (pb[0] - pa[0]) * t);
      const g = Math.round(pa[1] + (pb[1] - pa[1]) * t);
      const bl = Math.round(pa[2] + (pb[2] - pa[2]) * t);
      return `rgb(${r},${g},${bl})`;
    };
    const hexToRgb = (h: string): [number, number, number] => {
      const m = h.replace('#', '');
      return [parseInt(m.slice(0, 2), 16), parseInt(m.slice(2, 4), 16), parseInt(m.slice(4, 6), 16)];
    };

    const baseGrad = ctx.createLinearGradient(0, 0, 0, h);
    palette.stops.forEach((s) => baseGrad.addColorStop(s.t, s.c));

    let t = 0;
    const draw = () => {
      t += 0.004;

      // base
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, w, h);

      // silk blobs
      ctx.globalCompositeOperation = variant === 'sage' ? 'multiply' : 'lighter';
      blobs.forEach((b, i) => {
        b.x += b.vx + Math.sin(t + b.phase) * 0.2;
        b.y += b.vy + Math.cos(t * 0.8 + b.phase) * 0.15;
        if (b.x < -b.r) b.x = w + b.r;
        if (b.x > w + b.r) b.x = -b.r;
        if (b.y < -b.r) b.y = h + b.r;
        if (b.y > h + b.r) b.y = -b.r;

        const rr = Math.max(8, b.r);
        const grad = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, rr);
        grad.addColorStop(0, palette.glow);
        grad.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(b.x, b.y, rr, 0, Math.PI * 2);
        ctx.fill();
      });

      // particles
      ctx.globalCompositeOperation = 'source-over';
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.a += (p.ta - p.a) * 0.02;
        if (p.y < -10) {
          p.y = h + 10;
          p.x = Math.random() * w;
          p.a = 0;
        }
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;

        ctx.beginPath();
        ctx.fillStyle = palette.particle.replace(/[\d.]+\)$/, `${p.a})`);
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fill();
      });

      // soft vignette for depth
      const vg = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.2, w / 2, h / 2, Math.max(w, h) * 0.75);
      vg.addColorStop(0, 'rgba(0,0,0,0)');
      vg.addColorStop(1, variant === 'sage' ? 'rgba(31,61,51,0.08)' : 'rgba(0,0,0,0.28)');
      ctx.fillStyle = vg;
      ctx.fillRect(0, 0, w, h);

      rafId = requestAnimationFrame(draw);
    };

    if (reduce) {
      ctx.fillStyle = baseGrad;
      ctx.fillRect(0, 0, w, h);
    } else {
      draw();
    }

    const onResize = () => init();
    window.addEventListener('resize', onResize);
    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
    };
  }, [variant]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full"
      aria-hidden="true"
    />
  );
}

export default function VideoBackground({
  variant = 'hero',
  src,
  poster,
  overlayOpacity = 0.3,
  className = '',
}: VideoBackgroundProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const hasSrc = src && src.trim().length > 0;

  useEffect(() => {
    if (!hasSrc) return;
    const video = videoRef.current;
    if (!video) return;

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    const saver = conn?.saveData;

    if (reduce || saver) {
      video.removeAttribute('autoplay');
      video.pause();
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && video.readyState >= 2) {
            video.play().catch(() => {});
          } else {
            video.pause();
          }
        });
      },
      { threshold: 0.05 },
    );
    io.observe(video);
    return () => io.disconnect();
  }, [hasSrc]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`}>
      {hasSrc ? (
        <video
          ref={videoRef}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster={poster}
          className="absolute inset-0 h-full w-full object-cover"
        >
          <source src={src} />
        </video>
      ) : (
        <SilkCanvas variant={variant} />
      )}
      <div
        className="absolute inset-0"
        style={{
          background: variant === 'sage' ? 'rgba(231,236,228,1)' : 'rgba(18,38,31,1)',
          opacity: overlayOpacity,
        }}
        aria-hidden="true"
      />
    </div>
  );
}
