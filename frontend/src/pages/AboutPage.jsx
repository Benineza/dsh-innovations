import { Link } from 'react-router-dom';
import { ArrowRight, Target, Eye, Heart, Layers, Users } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import AnimatedCounter from '../components/ui/AnimatedCounter';
import PageMeta from '../components/ui/PageMeta';

const pillars = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To cover local football and sporting events in Rwanda with excellence, and to build digital products that make sports more accessible and connected for every fan.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      "To be Rwanda's leading sports media entity — a trusted voice for local football, a creative force in content production, and a builder of meaningful digital sports experiences.",
  },
  {
    icon: Heart,
    title: 'Our Commitment',
    description:
      'We are committed to elevating Rwandan sports through quality coverage, professional storytelling, and technology that serves athletes, fans, and organizations alike.',
  },
];

const approaches = [
  {
    icon: Layers,
    title: 'Sports Media & Coverage',
    description:
      "We cover football competitions, key sporting events, and milestones that define Rwanda's sports landscape. Our coverage spans match reporting, highlights, photography, and video production.",
  },
  {
    icon: Users,
    title: 'Community & Digital Presence',
    description:
      'With over 8,000 followers across social media platforms, we have built an engaged audience of football fans, sports professionals, and enthusiasts who follow Rwandan sport.',
  },
  {
    icon: Layers,
    title: 'Digital Product Innovation',
    description:
      'Beyond coverage, we build digital platforms that serve the sports ecosystem. Rwanda Scores — our flagship product — is a dedicated platform for Rwandan football information.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageMeta
        title="About Us"
        description="DSH Innovations is a Rwandan sports media and content production company driven by sport and powered by innovation. Learn about our mission, vision, and commitment to Rwandan football."
      />

      {/* ── PAGE HEADER ──────────────────────────────── */}
      <PageHeader />

      {/* ── WHO WE ARE ───────────────────────────────── */}
      <WhoWeAreSection />

      {/* ── MISSION / VISION / COMMITMENT ───────────── */}
      <PillarsSection />

      {/* ── OUR APPROACH ─────────────────────────────── */}
      <ApproachSection />

      {/* ── AUDIENCE MILESTONE ───────────────────────── */}
      <MilestoneSection />

      {/* ── CTA ──────────────────────────────────────── */}
      <AboutCTA />
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
          <span className="section-label justify-center">About DSH Innovations</span>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 mb-6 tracking-tight">
            Driven by Sport.{' '}
            <span className="text-gradient">Powered by Innovation.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={140}>
          <p className="text-zinc-500 text-lg max-w-2xl mx-auto leading-relaxed">
            Learn about the team, the story, and the vision behind DSH Innovations —
            Rwanda's sports media and digital products company.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   WHO WE ARE
───────────────────────────────────────────────────── */
function WhoWeAreSection() {
  return (
    <section className="section-padding bg-[#0a0a0a] border-t border-[#111111]" aria-labelledby="who-heading">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-start">
          <div>
            <ScrollReveal>
              <span className="section-label">Who We Are</span>
            </ScrollReveal>
            <ScrollReveal delay={80}>
              <h2 id="who-heading" className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-6">
                A Rwandan Sports Media Entity
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={140}>
              <p className="text-zinc-400 leading-relaxed mb-5">
                DSH Innovations is a Rwandan sports media and content production entity
                focused on covering local football and sporting events in Rwanda. We
                operate at the intersection of sports journalism, creative media
                production, and digital technology.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={200}>
              <p className="text-zinc-500 leading-relaxed mb-5">
                Our work spans match coverage, highlights production, sports
                photography, and the development of digital products that serve the
                Rwandan football community. Through consistent, quality output, we
                have established a presence and an audience that continues to grow.
              </p>
            </ScrollReveal>
            <ScrollReveal delay={250}>
              <p className="text-zinc-500 leading-relaxed">
                At DSH Innovations, we believe that telling Rwanda's sporting story
                well — with professionalism, authenticity, and creativity — is itself
                a contribution to the growth of sports in our country.
              </p>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={100} direction="left">
            <div className="space-y-4">
              {/* Activities list */}
              <div className="bg-[#0f0f0f] border border-[#1e1e1e] rounded-xl p-6">
                <h3 className="text-white font-semibold text-base mb-4">
                  What DSH Innovations Does
                </h3>
                <ul className="space-y-3">
                  {[
                    'Coverage of local football competitions',
                    'Coverage of the FERWAFA Men\'s Second Division',
                    'Football playoffs and important sporting events',
                    'Match highlights and video content',
                    'Sports photography and videography',
                    'Digital content production',
                    'Digital product development for the sports ecosystem',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="mt-1.5 w-3.5 h-3.5 rounded-full bg-purple-900/40 border border-purple-700/40 flex items-center justify-center shrink-0">
                        <div className="w-1 h-1 rounded-full bg-purple-400" />
                      </div>
                      <span className="text-zinc-400 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Rwanda Scores connection */}
              <div className="bg-[#0d0b14] border border-purple-900/25 rounded-xl p-6">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-lg bg-purple-800/20 border border-purple-700/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Layers size={16} className="text-purple-400" />
                  </div>
                  <div>
                    <p className="text-white font-semibold text-sm mb-1.5">Rwanda Scores</p>
                    <p className="text-zinc-500 text-sm leading-relaxed">
                      Our flagship digital product — a platform dedicated to Rwandan
                      football. Rwanda Scores is a product of DSH Innovations, not the
                      parent brand itself.
                    </p>
                    <a
                      href="https://www.rwandascores.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs text-purple-400 hover:text-purple-300 mt-3 font-medium transition-colors"
                    >
                      Visit Rwanda Scores →
                    </a>
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
   PILLARS SECTION
───────────────────────────────────────────────────── */
function PillarsSection() {
  return (
    <section
      className="section-padding bg-[#080808] border-t border-[#111111]"
      aria-labelledby="pillars-heading"
    >
      <div className="container-custom">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <ScrollReveal>
            <span className="section-label">What Drives Us</span>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2
              id="pillars-heading"
              className="text-3xl sm:text-4xl font-bold text-white mt-4"
            >
              Mission, Vision &amp; Commitment
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <ScrollReveal key={pillar.title} delay={i * 100} direction="up">
                <div className="relative bg-[#0f0f0f] border border-[#1e1e1e] rounded-xl p-8 h-full group hover:border-[#2a2a2a] transition-all duration-300">
                  <div
                    className="absolute top-0 left-0 right-0 h-0.5 rounded-t-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: 'linear-gradient(to right, #7c3aed, transparent)' }}
                  />
                  <div className="w-11 h-11 rounded-xl bg-purple-900/20 border border-purple-800/20 flex items-center justify-center mb-6">
                    <Icon size={20} className="text-purple-400" />
                  </div>
                  <h3 className="text-white font-bold text-lg mb-4">{pillar.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{pillar.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   OUR APPROACH
───────────────────────────────────────────────────── */
function ApproachSection() {
  return (
    <section
      className="section-padding bg-[#0a0a0a] border-t border-[#111111]"
      aria-labelledby="approach-heading"
    >
      <div className="container-custom">
        <div className="max-w-2xl mb-14">
          <ScrollReveal>
            <span className="section-label">How We Work</span>
          </ScrollReveal>
          <ScrollReveal delay={80}>
            <h2
              id="approach-heading"
              className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-5"
            >
              Sports Media Meets Digital Innovation
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={140}>
            <p className="text-zinc-500 leading-relaxed">
              At DSH Innovations, sports media and digital technology are not separate
              pursuits — they are two sides of the same mission. Our work in content
              production informs how we build digital products, and our digital products
              amplify the reach of our media work.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {approaches.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.title} delay={i * 100} direction="up">
                <div className="bg-[#0f0f0f] border border-[#1e1e1e] rounded-xl p-7 h-full group hover:border-[#2a2a2a] hover:bg-[#131313] transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-purple-900/20 border border-purple-800/20 flex items-center justify-center mb-5 group-hover:bg-purple-800/30 transition-all duration-300">
                    <Icon size={18} className="text-purple-400" />
                  </div>
                  <h3 className="text-white font-semibold text-base mb-3">{item.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   MILESTONE SECTION
───────────────────────────────────────────────────── */
function MilestoneSection() {
  return (
    <section
      className="section-padding bg-[#080808] border-t border-[#111111]"
      aria-labelledby="milestone-heading"
    >
      <div className="container-custom">
        <div className="relative rounded-2xl overflow-hidden border border-[#1e1e1e] bg-[#0d0d0d] px-8 py-14 md:px-16">
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 60% 80% at 50% 50%, rgba(124,58,237,0.1) 0%, transparent 70%)',
            }}
          />
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <ScrollReveal>
                <span className="section-label">Community Growth</span>
              </ScrollReveal>
              <ScrollReveal delay={80}>
                <h2
                  id="milestone-heading"
                  className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-5"
                >
                  An Audience Built on{' '}
                  <span className="text-gradient">Quality Content</span>
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={140}>
                <p className="text-zinc-500 leading-relaxed">
                  DSH Innovations has grown an audience of over 8,000 followers across
                  social media platforms — a community that has formed around consistent,
                  quality sports coverage and digital content. This audience is a
                  reflection of the trust and engagement our content generates within
                  Rwanda's sports community.
                </p>
              </ScrollReveal>
            </div>

            <ScrollReveal delay={100} direction="left">
              <div className="flex items-center justify-center md:justify-end">
                <div className="text-center">
                  <div className="text-6xl md:text-7xl font-bold text-white tracking-tight mb-2" style={{ fontVariantNumeric: 'tabular-nums' }}>
                    <AnimatedCounter target={8000} suffix="+" duration={2200} />
                  </div>
                  <p className="text-zinc-500 text-base font-medium">
                    Audience Across Platforms
                  </p>
                  <div className="flex items-center justify-center gap-2 mt-4">
                    <Users size={16} className="text-purple-500" />
                    <span className="text-zinc-600 text-sm">Social Media</span>
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
   ABOUT PAGE CTA
───────────────────────────────────────────────────── */
function AboutCTA() {
  return (
    <section className="section-padding bg-[#0a0a0a] border-t border-[#111111]">
      <div className="container-custom text-center">
        <ScrollReveal>
          <span className="section-label justify-center">Work With Us</span>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mt-4 mb-5">
            Interested in Working Together?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={140}>
          <p className="text-zinc-500 max-w-xl mx-auto leading-relaxed mb-10">
            Whether you're a sports organization, club, broadcaster, or digital partner,
            we're open to meaningful collaborations that grow Rwanda's sports ecosystem.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={200}>
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
