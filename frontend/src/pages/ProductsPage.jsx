import { Link } from 'react-router-dom';
import {
  ExternalLink,
  ArrowRight,
  CheckCircle,
  Trophy,
  BarChart3,
  Calendar,
  List,
  Zap,
  Plus,
} from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import PageMeta from '../components/ui/PageMeta';
import rwandaScoresLogo from '../assets/images/rwanda-scores-logo.png';

const rwandaScoresFeatures = [
  {
    icon: Trophy,
    title: 'Match Scores & Results',
    description: 'Follow live and recent match scores from Rwandan football competitions.',
  },
  {
    icon: Calendar,
    title: 'Fixtures & Schedules',
    description: 'Plan your matchday by exploring upcoming fixtures across competitions.',
  },
  {
    icon: BarChart3,
    title: 'Competition Standings',
    description: 'Keep track of league tables and standings throughout the season.',
  },
  {
    icon: List,
    title: 'Rwandan Football Info',
    description: 'Access information about competitions, teams, and events in Rwandan football.',
  },
];

export default function ProductsPage() {
  return (
    <>
      <PageMeta
        title="Our Products"
        description="Explore digital products developed by DSH Innovations, including Rwanda Scores — the dedicated platform for Rwandan football scores, fixtures, results, and standings."
      />

      {/* ── PAGE HEADER ──────────────────────────────── */}
      <PageHeader />

      {/* ── RWANDA SCORES FEATURED PRODUCT ───────────── */}
      <RwandaScoresFeatured />

      {/* ── FEATURES GRID ─────────────────────────────── */}
      <FeaturesSection />

      {/* ── FUTURE PRODUCTS PLACEHOLDER ──────────────── */}
      <FutureSection />

      {/* ── CTA ──────────────────────────────────────── */}
      <ProductsCTA />
    </>
  );
}

/* ─────────────────────────────────────────────────────
   PAGE HEADER
───────────────────────────────────────────────────── */
function PageHeader() {
  return (
    <section className="relative pt-36 pb-20 overflow-hidden bg-[#080808]">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 60% at 50% 0%, rgba(124,58,237,0.14) 0%, transparent 65%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />
      <div className="container-custom relative z-10 text-center">
        <ScrollReveal>
          <span className="section-label justify-center">Digital Products</span>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 mb-6 tracking-tight">
            Built for{' '}
            <span className="text-gradient">Rwanda's Sports Ecosystem</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={140}>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
            DSH Innovations develops digital products that connect fans with Rwandan
            football and sport. Explore what we've built.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   RWANDA SCORES FEATURED
───────────────────────────────────────────────────── */
function RwandaScoresFeatured() {
  return (
    <section
      className="section-padding bg-[#0a0a0a] border-t border-[#111111]"
      aria-labelledby="rs-product-heading"
    >
      <div className="container-custom">
        {/* Product label */}
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-10">
            <span className="section-label">Featured Product</span>
            <div className="flex-1 h-px bg-[#1e1e1e] max-w-xs" />
          </div>
        </ScrollReveal>

        {/* Main product showcase */}
        <div className="relative rounded-2xl overflow-hidden border border-purple-900/25 bg-[#0b0914]">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 100% 80% at 0% 0%, rgba(124,58,237,0.1) 0%, transparent 50%)',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 80% at 100% 100%, rgba(91,33,182,0.06) 0%, transparent 50%)',
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Content */}
            <div className="p-10 md:p-14 flex flex-col justify-center">
              {/* Product badge */}
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-700/25 rounded-full px-3 py-1.5 mb-6 w-fit">
                  <Zap size={11} className="text-purple-400" />
                  <span className="text-xs font-semibold text-purple-300 uppercase tracking-wide">
                    A product of DSH Innovations
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <h2
                  id="rs-product-heading"
                  className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5 leading-tight"
                >
                  Rwanda Scores
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={140}>
                <p className="text-zinc-400 leading-relaxed mb-4 text-lg">
                  Your destination for following Rwandan football.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={180}>
                <p className="text-zinc-500 text-sm leading-relaxed mb-8">
                  Discover fixtures, match results, scores, standings, and information
                  from football competitions across Rwanda — all in one dedicated
                  digital platform developed by DSH Innovations.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={220}>
                <div className="space-y-3 mb-8">
                  {[
                    'Designed specifically for Rwandan football',
                    'Match scores, results, and fixtures',
                    'Competition standings and tables',
                    'Built and maintained by DSH Innovations',
                  ].map((point) => (
                    <div key={point} className="flex items-center gap-3">
                      <CheckCircle size={14} className="text-purple-400 shrink-0" />
                      <span className="text-zinc-400 text-sm">{point}</span>
                    </div>
                  ))}
                </div>
              </ScrollReveal>

              <ScrollReveal delay={260}>
                <div className="flex flex-col sm:flex-row items-start gap-4">
                  <a
                    href="https://www.rwandascores.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary group"
                  >
                    Visit Rwanda Scores
                    <ExternalLink size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <a
                    href="https://www.rwandascores.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-zinc-500 hover:text-purple-400 transition-colors duration-200 font-medium mt-1.5 sm:mt-0 self-center"
                  >
                    rwandascores.com
                    <ExternalLink size={10} />
                  </a>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Logo card */}
            <ScrollReveal
              delay={100}
              direction="left"
              className="flex items-center justify-center p-10 md:p-14 border-t lg:border-t-0 lg:border-l border-purple-900/15"
            >
              <div className="w-full max-w-sm space-y-4">
                {/* Logo display */}
                <div className="bg-[#0f0c1e] border border-purple-900/30 rounded-2xl p-10 flex items-center justify-center shadow-[0_0_80px_-20px_rgba(124,58,237,0.35)]">
                  <img
                    src={rwandaScoresLogo}
                    alt="Rwanda Scores — Rwandan football platform by DSH Innovations"
                    className="h-20 w-auto object-contain"
                    style={{ maxWidth: '220px' }}
                    loading="lazy"
                  />
                </div>

                {/* Product type */}
                <div className="bg-[#0f0f0f] border border-[#1e1e1e] rounded-xl p-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="text-center p-3 bg-[#141414] rounded-lg">
                      <p className="text-purple-400 text-xs font-semibold uppercase tracking-wide mb-1">
                        Type
                      </p>
                      <p className="text-white text-xs font-medium">Digital Platform</p>
                    </div>
                    <div className="text-center p-3 bg-[#141414] rounded-lg">
                      <p className="text-purple-400 text-xs font-semibold uppercase tracking-wide mb-1">
                        Focus
                      </p>
                      <p className="text-white text-xs font-medium">Rwandan Football</p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   FEATURES GRID
───────────────────────────────────────────────────── */
function FeaturesSection() {
  return (
    <section
      className="section-padding bg-[#080808] border-t border-[#111111]"
      aria-labelledby="features-heading"
    >
      <div className="container-custom">
        <div className="text-center max-w-xl mx-auto mb-12">
          <ScrollReveal>
            <h2 id="features-heading" className="text-2xl sm:text-3xl font-bold text-white mb-4">
              What Rwanda Scores Offers
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <p className="text-zinc-500 text-sm leading-relaxed">
              Rwanda Scores brings together the information Rwandan football fans need,
              in one dedicated platform.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {rwandaScoresFeatures.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <ScrollReveal key={feature.title} delay={i * 80} direction="up">
                <div className="bg-[#0d0b14] border border-purple-900/15 rounded-xl p-6 h-full group hover:border-purple-800/30 transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-purple-900/20 border border-purple-800/20 flex items-center justify-center mb-5 group-hover:bg-purple-800/30 transition-all duration-300">
                    <Icon size={18} className="text-purple-400" />
                  </div>
                  <h3 className="text-white font-semibold text-sm mb-2.5">
                    {feature.title}
                  </h3>
                  <p className="text-zinc-500 text-xs leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={200}>
          <div className="text-center mt-8">
            <a
              href="https://www.rwandascores.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary inline-flex group"
            >
              Explore Rwanda Scores
              <ExternalLink size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   FUTURE PRODUCTS
───────────────────────────────────────────────────── */
function FutureSection() {
  return (
    <section
      className="section-padding bg-[#0a0a0a] border-t border-[#111111]"
      aria-labelledby="future-heading"
    >
      <div className="container-custom">
        <div className="max-w-2xl mb-12">
          <ScrollReveal>
            <span className="section-label">Coming Soon</span>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2
              id="future-heading"
              className="text-2xl sm:text-3xl font-bold text-white mt-4 mb-4"
            >
              More Products in Development
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <p className="text-zinc-500 leading-relaxed">
              DSH Innovations is actively working on expanding its portfolio of digital
              products for the Rwandan sports ecosystem. New platforms and tools are
              in development and will be announced as they become available.
            </p>
          </ScrollReveal>
        </div>

        <ScrollReveal delay={180}>
          <div className="bg-[#0d0d0d] border border-dashed border-[#2a2a2a] rounded-2xl p-10 flex flex-col items-center justify-center text-center">
            <div className="w-12 h-12 rounded-full border border-dashed border-[#2a2a2a] flex items-center justify-center mb-5">
              <Plus size={20} className="text-zinc-600" />
            </div>
            <p className="text-zinc-600 font-semibold text-sm mb-2">
              Additional Products Coming Soon
            </p>
            <p className="text-zinc-700 text-xs max-w-sm leading-relaxed">
              DSH Innovations continues to build digital products that serve
              Rwanda's sports ecosystem. Stay connected for future announcements.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   PRODUCTS CTA
───────────────────────────────────────────────────── */
function ProductsCTA() {
  return (
    <section className="section-padding bg-[#080808] border-t border-[#111111]">
      <div className="container-custom text-center">
        <ScrollReveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-5">
            Interested in Our Digital Work?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <p className="text-zinc-500 max-w-xl mx-auto leading-relaxed mb-10">
            If you'd like to discuss a digital product idea, partnership, or collaboration
            involving Rwanda's sports ecosystem, we'd love to hear from you.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={140}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary group">
              Contact Us
              <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
            </Link>
            <Link to="/what-we-do" className="btn-secondary">
              What We Do
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
