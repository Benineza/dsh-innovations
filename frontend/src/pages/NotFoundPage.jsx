import { Link } from 'react-router-dom';
import { ArrowLeft, Home } from 'lucide-react';
import PageMeta from '../components/ui/PageMeta';

export default function NotFoundPage() {
  return (
    <>
      <PageMeta title="Page Not Found" description="The page you're looking for doesn't exist." />
      <div className="min-h-screen flex items-center justify-center bg-[#080808] relative overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 opacity-50 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse 60% 60% at 50% 50%, rgba(124,58,237,0.08) 0%, transparent 70%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.025] pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />

        <div className="relative z-10 text-center px-6">
          <p className="text-[120px] md:text-[160px] font-black text-white leading-none tracking-tight opacity-[0.06] select-none">
            404
          </p>
          <div className="-mt-10 md:-mt-14">
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Page Not Found
            </h1>
            <p className="text-zinc-500 text-base mb-10 max-w-sm mx-auto leading-relaxed">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/" className="btn-primary group">
                <Home size={14} />
                Back to Home
              </Link>
              <button
                onClick={() => window.history.back()}
                className="btn-secondary group"
              >
                <ArrowLeft size={14} className="transition-transform duration-200 group-hover:-translate-x-1" />
                Go Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
