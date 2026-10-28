import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';

export default function NotFoundPage() {
  return (
    <section className="flex min-h-[80dvh] items-center justify-center bg-green-obsidian px-6 text-center">
      <div>
        <p className="eyebrow mb-6 text-cream/50">404</p>
        <h1 className="display-xl font-light text-cream">This page is still being plated.</h1>
        <Link to="/" className="glass-pill glass-pill--solid mt-10">
          <Home size={16} /> Back to home
        </Link>
      </div>
    </section>
  );
}
