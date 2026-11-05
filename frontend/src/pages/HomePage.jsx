import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Play,
  Camera,
  Video,
  Globe,
  Trophy,
  Users,
  ChevronDown,
  ExternalLink,
  Star,
  Zap,
} from 'lucide-react';
import { motion } from 'framer-motion';
import ScrollReveal from '../components/ui/ScrollReveal';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import PageMeta from '../components/ui/PageMeta';
import rwandaScoresLogo from '../assets/images/rwanda-scores-logo.png';

// Sports coverage categories for showcase
const coverageAreas = [
  {
    title: 'Local Football Competitions',
    description:
      'In-depth coverage of Rwandan football leagues, bringing every match moment to fans across the country.',
    tag: 'Football',
  },
  {
    title: 'FERWAFA Second Division',
    description:
      'Dedicated coverage of the FERWAFA Men\'s Second Division, spotlighting the next generation of Rwandan football.',
    tag: 'FERWAFA',
  },
  {
    title: 'Playoffs & Key Events',
    description:
      'Comprehensive coverage of football playoffs, cup competitions, and major sporting events in Rwanda.',
    tag: 'Events',
  },
  {
    title: 'Match Highlights',
    description:
      'Engaging video highlights and short-form content capturing the defining moments of each match.',
    tag: 'Video',
  },
];

// Services
const services = [
  {
    icon: Trophy,
    title: 'Sports Coverage & Media',
    description:
      'End-to-end coverage of local football competitions, from FERWAFA leagues to key playoff events and sporting occasions.',
  },
  {
    icon: Play,
    title: 'Match Highlights & Video',
    description:
      'Professional video production of match highlights and football-related content, crafted to engage sports fans.',
  },
  {
    icon: Camera,
    title: 'Sports Photography',
    description:
      'High-quality sports photography capturing the intensity, emotion, and beauty of Rwandan football.',
  },
  {
    icon: Globe,
    title: 'Digital Product Development',
    description:
      'Building innovative digital products that strengthen and connect the Rwandan sports ecosystem.',
  },
];

export default function HomePage() {
  return (
    <>
      <PageMeta
        title="Rwandan Sports Media & Digital Products"
        description="DSH Innovations is a Rwandan sports media and content production company covering local football and sporting events while developing digital products that connect fans with the game."
      />

      {/* ── HERO ─────────────────────────────────────── */}
      <HeroSection />

      {/* ── ABOUT INTRO ──────────────────────────────── */}
      <AboutSection />

      {/* ── WHAT WE DO ───────────────────────────────── */}
      <ServicesSection />

      {/* ── AUDIENCE / IMPACT ────────────────────────── */}
      <AudienceSection />

      {/* ── RWANDA SCORES PRODUCT ────────────────────── */}
      <RwandaScoresSection />

      {/* ── COVERAGE SHOWCASE ────────────────────────── */}
      <CoverageSection />

      {/* ── CTA ──────────────────────────────────────── */}
      <CTASection />
    </>
  );
}

/* ─────────────────────────────────────────────────────
   HERO SECTION
───────────────────────────────────────────────────── */
function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background layers */}
      <div className="absolute inset-0 bg-[#080808]" />

      {/* Radial gradient spotlight */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 20%, rgba(124,58,237,0.18) 0%, transparent 70%)',
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.8) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.8) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Decorative orbs */}
      <div
        className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #7c3aed, transparent)' }}
      />
      <div
        className="absolute bottom-1/4 left-1/4 w-64 h-64 rounded-full opacity-8 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, #5b21b6, transparent)' }}
      />

      {/* Content */}
      <div className="container-custom relative z-10 pt-28 pb-16 text-center">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 bg-purple-900/25 border border-purple-700/30 rounded-full px-4 py-1.5 mb-8"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
          <span className="text-xs font-semibold text-purple-300 tracking-wide uppercase">
            Rwandan Sports Media & Digital Innovation
          </span>
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: 'easeOut' }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight max-w-5xl mx-auto"
        >
          Capturing Rwanda's{' '}
          <span className="text-gradient">Sporting Moments.</span>
          <br />
          Building Its{' '}
          <span className="text-gradient">Digital Future.</span>
        </motion.h1>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: 'easeOut' }}
          className="mt-7 text-lg text-zinc-400 max-w-2xl mx-auto leading-relaxed"
        >
          DSH Innovations is a Rwandan sports media and content production company
          covering local football and sporting events while developing digital products
          that connect fans with the game.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38, ease: 'easeOut' }}
          className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link to="/what-we-do" className="btn-primary group">
            Discover What We Do
            <ArrowRight
              size={15}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
          <Link to="/products" className="btn-secondary">
            Explore Our Products
          </Link>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-20 flex flex-col items-center gap-2 text-zinc-600"
        >
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <ChevronDown size={16} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   ABOUT SECTION
───────────────────────────────────────────────────── */
function AboutSection() {
  return (
    <section className="section-padding bg-[#0a0a0a]" aria-labelledby="about-heading">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Text */}
          <div>
            <ScrollReveal>
              <span className="section-label">About DSH Innovations</span>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6"
              >
                Driven by Sport.{' '}
                <span className="text-gradient">Powered by Innovation.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={160}>
              <p className="text-zinc-400 text-lg leading-relaxed mb-6">
                DSH Innovations combines sports media, creative content production, and
                digital innovation to contribute to the growth and visibility of sports
                in Rwanda.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={220}>
              <p className="text-zinc-500 leading-relaxed mb-8">
                From covering FERWAFA competitions to building digital platforms that
                serve football fans, we are committed to telling Rwanda's sporting
                story with quality, professionalism, and passion.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={280}>
              <Link to="/about" className="btn-secondary inline-flex group">
                Learn More About Us
                <ArrowRight
                  size={14}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </ScrollReveal>
          </div>

          {/* Visual composition */}
          <ScrollReveal delay={100} direction="left">
            <div className="relative">
              {/* Main card */}
              <div className="relative rounded-2xl overflow-hidden bg-[#111111] border border-[#1e1e1e] aspect-[4/3]">
                {/* Football field illustration */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className="w-full h-full opacity-20"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 50% at 50% 50%, rgba(124,58,237,0.4) 0%, transparent 60%),
                        linear-gradient(180deg, #1a1a2e 0%, #0d0d1a 100%)
                      `,
                    }}
                  />
                  {/* Field lines SVG */}
                  <svg
                    viewBox="0 0 400 300"
                    className="absolute inset-0 w-full h-full"
                    aria-hidden="true"
                    fill="none"
                    stroke="rgba(124,58,237,0.35)"
                    strokeWidth="1.5"
                  >
                    {/* Outer boundary */}
                    <rect x="20" y="20" width="360" height="260" rx="4" />
                    {/* Center line */}
                    <line x1="200" y1="20" x2="200" y2="280" />
                    {/* Center circle */}
                    <circle cx="200" cy="150" r="40" />
                    <circle cx="200" cy="150" r="3" fill="rgba(124,58,237,0.5)" />
                    {/* Left penalty area */}
                    <rect x="20" y="90" width="70" height="120" />
                    {/* Right penalty area */}
                    <rect x="310" y="90" width="70" height="120" />
                    {/* Left goal area */}
                    <rect x="20" y="120" width="30" height="60" />
                    {/* Right goal area */}
                    <rect x="350" y="120" width="30" height="60" />
                    {/* Corner arcs */}
                    <path d="M20,20 Q30,20 30,30" />
                    <path d="M380,20 Q370,20 370,30" />
                    <path d="M20,280 Q30,280 30,270" />
                    <path d="M380,280 Q370,280 370,270" />
                  </svg>
                </div>

                {/* Overlay text card */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="bg-[#0d0d0d]/90 backdrop-blur-sm border border-[#2a2a2a] rounded-xl p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-purple-700/20 border border-purple-700/30 flex items-center justify-center shrink-0">
                        <Trophy size={14} className="text-purple-400" />
                      </div>
                      <div>
                        <p className="text-white text-sm font-semibold">
                          Rwanda's Sports Story
                        </p>
                        <p className="text-zinc-500 text-xs mt-0.5">
                          Covering local football since our founding
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative floating card */}
              <div className="absolute -top-4 -right-4 bg-[#161616] border border-[#2a2a2a] rounded-xl p-3.5 shadow-xl">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-lg bg-purple-600/20 flex items-center justify-center">
                    <Star size={12} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white text-xs font-bold">8,000+</p>
                    <p className="text-zinc-500 text-xs">Followers</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   SERVICES SECTION
───────────────────────────────────────────────────── */
function ServicesSection() {
  return (
    <section
      className="section-padding bg-[#080808] border-t border-[#111111]"
      aria-labelledby="services-heading"
    >
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <ScrollReveal>
            <span className="section-label">What We Do</span>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2
              id="services-heading"
              className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-5"
            >
              Sports Media, Content &amp; Digital Products
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <p className="text-zinc-500 leading-relaxed">
              From pitch-side coverage to digital platforms, DSH Innovations delivers
              across the full spectrum of sports media and technology.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <ScrollReveal key={service.title} delay={i * 80} direction="up">
                <div className="card-base p-6 h-full group">
                  <div className="w-11 h-11 rounded-xl bg-purple-900/20 border border-purple-800/20 flex items-center justify-center mb-5 transition-all duration-300 group-hover:bg-purple-800/30 group-hover:border-purple-700/40">
                    <Icon size={20} className="text-purple-400" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-3 leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={200}>
          <div className="text-center mt-10">
            <Link to="/what-we-do" className="btn-secondary inline-flex group">
              View All Our Services
              <ArrowRight
                size={14}
                className="transition-transform duration-200 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   AUDIENCE / IMPACT SECTION
───────────────────────────────────────────────────── */
function AudienceSection() {
  return (
    <section
      className="section-padding bg-[#0a0a0a] border-t border-[#111111]"
      aria-labelledby="impact-heading"
    >
      <div className="container-custom">
        <div className="relative rounded-2xl overflow-hidden border border-[#1e1e1e] bg-[#0f0f0f] p-10 md:p-16">
          {/* Background accent */}
          <div
            className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(124,58,237,0.12) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 text-center max-w-3xl mx-auto">
            <ScrollReveal>
              <span className="section-label justify-center">Our Reach</span>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2
                id="impact-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-4"
              >
                Building an Audience,{' '}
                <span className="text-gradient">One Story at a Time</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <p className="text-zinc-500 leading-relaxed mb-12">
                Through consistent sports coverage and compelling digital content, DSH
                Innovations has built a growing community of football fans and sports
                enthusiasts across social media platforms.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={200}>
              <div className="inline-flex flex-col sm:flex-row items-center gap-8 sm:gap-16">
                {/* Stat */}
                <div className="text-center">
                  <div
                    className="text-5xl md:text-6xl font-bold text-white tracking-tight"
                    style={{ fontVariantNumeric: 'tabular-nums' }}
                  >
                    <AnimatedCounter target={8000} suffix="+" duration={2200} />
                  </div>
                  <p className="text-zinc-500 text-sm mt-2 font-medium tracking-wide">
                    Audience Across Platforms
                  </p>
                </div>

                <div className="hidden sm:block w-px h-14 bg-[#2a2a2a]" />

                {/* Icon + descriptor */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-800/20 border border-purple-700/25 flex items-center justify-center">
                    <Users size={22} className="text-purple-400" />
                  </div>
                  <div className="text-left">
                    <p className="text-white font-semibold text-sm">Social Media</p>
                    <p className="text-zinc-600 text-xs mt-0.5">Across all platforms</p>
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
   RWANDA SCORES SECTION
───────────────────────────────────────────────────── */
function RwandaScoresSection() {
  return (
    <section
      className="section-padding bg-[#080808] border-t border-[#111111]"
      aria-labelledby="rs-heading"
    >
      <div className="container-custom">
        <div className="relative rounded-2xl overflow-hidden border border-purple-900/30 bg-[#0d0b14]">
          {/* Background gradient */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 100% at 0% 50%, rgba(124,58,237,0.12) 0%, transparent 60%)',
            }}
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 80% at 100% 100%, rgba(91,33,182,0.08) 0%, transparent 50%)',
            }}
          />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left: Text content */}
            <div className="p-10 md:p-14 lg:p-16 flex flex-col justify-center">
              <ScrollReveal>
                <div className="inline-flex items-center gap-2 bg-purple-900/30 border border-purple-700/30 rounded-full px-3 py-1 mb-6 w-fit">
                  <Zap size={11} className="text-purple-400" />
                  <span className="text-xs font-semibold text-purple-300 tracking-wide uppercase">
                    Digital Product by DSH Innovations
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={80}>
                <h2
                  id="rs-heading"
                  className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight"
                >
                  Introducing{' '}
                  <span className="text-gradient">Rwanda Scores</span>
                </h2>
              </ScrollReveal>

              <ScrollReveal delay={140}>
                <p className="text-zinc-400 leading-relaxed mb-4">
                  Your destination for following Rwandan football. Discover fixtures,
                  match results, scores, standings, and information from football
                  competitions across Rwanda.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={180}>
                <p className="text-zinc-600 text-sm leading-relaxed mb-8">
                  Rwanda Scores is a dedicated digital platform developed by DSH
                  Innovations — designed to bring Rwandan football closer to fans,
                  wherever they are.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={220}>
                <a
                  href="https://www.rwandascores.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary w-fit group"
                >
                  Visit Rwanda Scores
                  <ExternalLink
                    size={13}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </a>
              </ScrollReveal>
            </div>

            {/* Right: Logo + product card */}
            <ScrollReveal delay={100} direction="left" className="flex items-center justify-center p-10 md:p-14 lg:p-16 border-t lg:border-t-0 lg:border-l border-purple-900/20">
              <div className="w-full max-w-sm">
                {/* Product card */}
                <div className="relative bg-[#0f0c1a] border border-purple-900/30 rounded-2xl p-8 text-center shadow-[0_0_60px_-20px_rgba(124,58,237,0.3)]">
                  {/* Rwanda Scores logo */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="bg-white/5 rounded-xl p-4 inline-flex">
                      <img
                        src={rwandaScoresLogo}
                        alt="Rwanda Scores"
                        className="h-16 w-auto object-contain"
                        style={{ maxWidth: '180px' }}
                        loading="lazy"
                      />
                    </div>
                  </div>

                  {/* Feature list */}
                  <div className="space-y-3 text-left">
                    {[
                      'Match Scores & Live Results',
                      'Fixtures & Schedules',
                      'Competition Standings',
                      'Rwandan Football Info',
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-3">
                        <div className="w-4 h-4 rounded-full bg-purple-700/30 border border-purple-600/40 flex items-center justify-center shrink-0">
                          <div className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                        </div>
                        <span className="text-zinc-400 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Visit link */}
                  <a
                    href="https://www.rwandascores.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex items-center justify-center gap-1.5 text-sm text-purple-400 hover:text-purple-300 transition-colors duration-200 font-medium"
                  >
                    rwandascores.com
                    <ExternalLink size={11} />
                  </a>
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
   COVERAGE SHOWCASE SECTION
───────────────────────────────────────────────────── */
function CoverageSection() {
  return (
    <section
      className="section-padding bg-[#0a0a0a] border-t border-[#111111]"
      aria-labelledby="coverage-heading"
    >
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <ScrollReveal>
            <span className="section-label">Our Coverage</span>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2
              id="coverage-heading"
              className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-5"
            >
              Where We Show Up
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <p className="text-zinc-500 leading-relaxed">
              DSH Innovations is present at the moments that matter — on the pitch,
              in the stands, and across digital platforms.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {coverageAreas.map((area, i) => (
            <ScrollReveal key={area.title} delay={i * 80} direction="up">
              <div className="group relative bg-[#0f0f0f] border border-[#1e1e1e] rounded-xl p-7 overflow-hidden transition-all duration-300 hover:border-[#2e2e2e] hover:bg-[#131313]">
                {/* Background hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse 60% 60% at 0% 0%, rgba(124,58,237,0.06) 0%, transparent 70%)',
                  }}
                />

                <div className="relative z-10">
                  {/* Tag */}
                  <span className="inline-block text-xs font-semibold bg-purple-900/25 border border-purple-800/25 text-purple-400 rounded-md px-2.5 py-1 mb-4 tracking-wide">
                    {area.tag}
                  </span>
                  <h3 className="text-white font-semibold text-lg mb-3 leading-snug">
                    {area.title}
                  </h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">
                    {area.description}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Video/Photography icons row */}
        <ScrollReveal delay={200}>
          <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Trophy, label: 'League Coverage' },
              { icon: Video, label: 'Video Highlights' },
              { icon: Camera, label: 'Sports Photography' },
              { icon: Globe, label: 'Digital Content' },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex flex-col items-center gap-3 bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl p-5 text-center"
              >
                <div className="w-10 h-10 rounded-xl bg-purple-900/15 border border-purple-800/15 flex items-center justify-center">
                  <Icon size={18} className="text-purple-500" />
                </div>
                <span className="text-zinc-500 text-xs font-medium">{label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   CTA SECTION
───────────────────────────────────────────────────── */
function CTASection() {
  return (
    <section
      className="section-padding bg-[#080808] border-t border-[#111111]"
      aria-labelledby="cta-heading"
    >
      <div className="container-custom">
        <div className="relative rounded-2xl overflow-hidden text-center border border-[#1a1a1a] bg-[#0d0d0d] px-8 py-16 md:py-20">
          {/* Background */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(124,58,237,0.12) 0%, transparent 70%)',
            }}
          />

          <div className="relative z-10 max-w-2xl mx-auto">
            <ScrollReveal>
              <span className="section-label justify-center">Collaborate</span>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2
                id="cta-heading"
                className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mt-4 mb-6"
              >
                Let's Build Something{' '}
                <span className="text-gradient">Great Together.</span>
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <p className="text-zinc-500 leading-relaxed mb-10">
                Whether you're a sports organization, football club, event organizer,
                or potential partner — we'd love to hear from you. Let's grow Rwanda's
                sports ecosystem together.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link to="/contact" className="btn-primary group">
                  Get in Touch
                  <ArrowRight
                    size={14}
                    className="transition-transform duration-200 group-hover:translate-x-1"
                  />
                </Link>
                <Link to="/about" className="btn-secondary">
                  Learn About Us
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
