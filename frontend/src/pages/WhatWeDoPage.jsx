import { Link } from 'react-router-dom';
import {
  Trophy,
  Play,
  Camera,
  Video,
  Globe,
  ArrowRight,
  CheckCircle,
  Monitor,
} from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import PageMeta from '../components/ui/PageMeta';

const services = [
  {
    id: 'sports-media',
    icon: Trophy,
    title: 'Sports Media & Coverage',
    tagline: 'On the Ground, Every Match.',
    description:
      'DSH Innovations covers local football competitions with professionalism and dedication. Our coverage extends to the FERWAFA Men\'s Second Division, local playoff competitions, and major sporting events across Rwanda.',
    details: [
      'Coverage of local football leagues and competitions',
      'FERWAFA Men\'s Second Division dedicated coverage',
      'Football playoffs and cup competitions',
      'Key sporting events in Rwanda',
      'Match reporting and documentation',
    ],
  },
  {
    id: 'highlights',
    icon: Play,
    title: 'Football Match Highlights',
    tagline: 'Every Goal. Every Moment.',
    description:
      'We produce engaging match highlight videos that capture the defining moments of each fixture — from stunning goals to decisive plays — making them available to fans who couldn\'t be at the ground.',
    details: [
      'Post-match highlight reels',
      'Key moments and decisive plays',
      'Short-form content for social media',
      'Video editing and post-production',
      'Platform-optimized video formats',
    ],
  },
  {
    id: 'photography',
    icon: Camera,
    title: 'Sports Photography & Videography',
    tagline: 'The Story Behind the Lens.',
    description:
      'Our visual media team captures the intensity, emotion, and beauty of Rwandan football through professional sports photography and videography — images and footage that tell authentic sporting stories.',
    details: [
      'Match-day sports photography',
      'Action photography from local football',
      'Portrait and team photography',
      'Event videography and documentation',
      'High-resolution content delivery',
    ],
  },
  {
    id: 'digital-content',
    icon: Video,
    title: 'Digital Content Production',
    tagline: 'Content That Connects Fans.',
    description:
      'Beyond live coverage, DSH Innovations produces a range of digital content designed to engage sports fans across social media and digital platforms — building community and amplifying the reach of Rwandan sport.',
    details: [
      'Social media content creation',
      'Graphic design for sports events',
      'Football-related digital content',
      'Audience engagement content',
      'Platform-specific media formats',
    ],
  },
  {
    id: 'digital-products',
    icon: Globe,
    title: 'Digital Product Development',
    tagline: 'Technology for the Game.',
    description:
      'DSH Innovations goes beyond coverage to build digital products that serve the Rwandan sports ecosystem. Our flagship product, Rwanda Scores, is a dedicated digital platform for Rwandan football information.',
    details: [
      'Sports-focused digital platforms',
      'Rwandan football information systems',
      'Digital product strategy and development',
      'Sports data and content platforms',
      'Ecosystem-focused digital innovation',
    ],
    highlight: true,
    highlightText: 'See Rwanda Scores →',
    highlightLink: '/products',
  },
];

export default function WhatWeDoPage() {
  return (
    <>
      <PageMeta
        title="What We Do"
        description="DSH Innovations delivers sports media coverage, match highlights, sports photography, digital content production, and digital product development for the Rwandan sports ecosystem."
      />

      {/* ── PAGE HEADER ──────────────────────────────── */}
      <PageHeader />

      {/* ── SERVICES ─────────────────────────────────── */}
      <ServicesSection />

      {/* ── CTA ──────────────────────────────────────── */}
      <ServicesCTA />
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
          <span className="section-label justify-center">Our Services</span>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 mb-6 tracking-tight">
            Sports Media,{' '}
            <span className="text-gradient">Content &amp; Products</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={140}>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
            From pitch-side coverage to digital platforms, DSH Innovations delivers
            across the full spectrum of sports media and technology.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   SERVICES SECTION
───────────────────────────────────────────────────── */
function ServicesSection() {
  return (
    <section className="bg-[#0a0a0a] border-t border-[#111111]" aria-label="Our services">
      <div className="container-custom">
        <div className="divide-y divide-[#111111]">
          {services.map((service, i) => {
            const Icon = service.icon;
            const isEven = i % 2 === 0;
            return (
              <div
                key={service.id}
                id={service.id}
                className="py-16 md:py-20"
              >
                <div
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
                    !isEven ? 'lg:grid-flow-col-dense' : ''
                  }`}
                >
                  {/* Text */}
                  <div className={!isEven ? 'lg:col-start-2' : ''}>
                    <ScrollReveal>
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-xl bg-purple-900/20 border border-purple-800/20 flex items-center justify-center">
                          <Icon size={18} className="text-purple-400" />
                        </div>
                        <span className="text-xs font-semibold text-purple-400 tracking-widest uppercase">
                          {service.tagline}
                        </span>
                      </div>
                    </ScrollReveal>
                    <ScrollReveal delay={80}>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-5 leading-tight">
                        {service.title}
                      </h2>
                    </ScrollReveal>
                    <ScrollReveal delay={140}>
                      <p className="text-zinc-400 leading-relaxed mb-7">
                        {service.description}
                      </p>
                    </ScrollReveal>
                    {service.highlight && (
                      <ScrollReveal delay={180}>
                        <Link
                          to={service.highlightLink}
                          className="inline-flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 font-semibold transition-colors mb-7"
                        >
                          {service.highlightText}
                        </Link>
                      </ScrollReveal>
                    )}
                  </div>

                  {/* Details card */}
                  <ScrollReveal
                    delay={100}
                    direction={isEven ? 'left' : 'right'}
                    className={!isEven ? 'lg:col-start-1 lg:row-start-1' : ''}
                  >
                    <div className="bg-[#0d0d0d] border border-[#1e1e1e] rounded-2xl p-8">
                      <p className="text-xs font-semibold text-zinc-600 uppercase tracking-widest mb-5">
                        What this includes
                      </p>
                      <ul className="space-y-4">
                        {service.details.map((detail) => (
                          <li key={detail} className="flex items-start gap-3">
                            <CheckCircle
                              size={16}
                              className="text-purple-500 mt-0.5 shrink-0"
                            />
                            <span className="text-zinc-400 text-sm leading-relaxed">
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </ScrollReveal>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   CTA SECTION
───────────────────────────────────────────────────── */
function ServicesCTA() {
  return (
    <section className="section-padding bg-[#080808] border-t border-[#111111]">
      <div className="container-custom">
        <div className="relative rounded-2xl overflow-hidden border border-[#1a1a1a] bg-[#0d0d0d] px-8 py-14 md:py-18 text-center">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(124,58,237,0.1) 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10 max-w-xl mx-auto">
            <ScrollReveal>
              <div className="w-12 h-12 rounded-xl bg-purple-900/20 border border-purple-800/20 flex items-center justify-center mx-auto mb-6">
                <Monitor size={22} className="text-purple-400" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Looking for Coverage or Collaboration?
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <p className="text-zinc-500 leading-relaxed mb-8">
                If you represent a football club, sports organization, or event and
                would like to discuss coverage or collaboration, get in touch with us.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="btn-primary group">
                  Contact Us
                  <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                </Link>
                <Link to="/products" className="btn-secondary">
                  View Our Products
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
