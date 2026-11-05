import { useState } from 'react';
import { CheckCircle, AlertCircle, Clock, Send, Mail, Building, User, MessageSquare, Tag } from 'lucide-react';
import ScrollReveal from '../components/ui/ScrollReveal';
import PageMeta from '../components/ui/PageMeta';
import { submitContactForm } from '../services/contactService';

const inquiryTypes = [
  'Sports Coverage Request',
  'Media Partnership',
  'Digital Product Collaboration',
  'Event Coverage',
  'General Inquiry',
  'Other',
];

function validate(fields) {
  const errors = {};
  if (!fields.name.trim()) errors.name = 'Name is required.';
  if (!fields.email.trim()) {
    errors.email = 'Email address is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!fields.subject.trim()) errors.subject = 'Please select or enter a subject.';
  if (!fields.message.trim()) {
    errors.message = 'Message is required.';
  } else if (fields.message.trim().length < 20) {
    errors.message = 'Please write at least 20 characters.';
  }
  return errors;
}

export default function ContactPage() {
  return (
    <>
      <PageMeta
        title="Contact"
        description="Get in touch with DSH Innovations for sports coverage requests, media partnerships, digital product collaboration, event coverage, or general inquiries."
      />

      {/* ── PAGE HEADER ──────────────────────────────── */}
      <PageHeader />

      {/* ── CONTACT CONTENT ──────────────────────────── */}
      <ContactSection />
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
          <span className="section-label justify-center">Get In Touch</span>
        </ScrollReveal>
        <ScrollReveal delay={80}>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-4 mb-6 tracking-tight">
            Let's Build Something{' '}
            <span className="text-gradient">Together.</span>
          </h1>
        </ScrollReveal>
        <ScrollReveal delay={140}>
          <p className="text-zinc-500 text-lg max-w-xl mx-auto leading-relaxed">
            Whether you're a sports organization, football club, event organizer,
            or potential partner — we'd love to hear from you.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   CONTACT SECTION
───────────────────────────────────────────────────── */
function ContactSection() {
  return (
    <section className="section-padding bg-[#0a0a0a] border-t border-[#111111]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Left sidebar */}
          <div className="lg:col-span-2">
            <ContactSidebar />
          </div>
          {/* Contact form */}
          <div className="lg:col-span-3">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────
   CONTACT SIDEBAR
───────────────────────────────────────────────────── */
function ContactSidebar() {
  const inquiries = [
    {
      icon: '⚽',
      title: 'Sports Coverage',
      description:
        'Want us to cover your football club, league, or sporting event? Tell us about the opportunity.',
    },
    {
      icon: '🤝',
      title: 'Partnerships',
      description:
        "Interested in a media or digital partnership with DSH Innovations? We're open to meaningful collaborations.",
    },
    {
      icon: '📱',
      title: 'Digital Products',
      description:
        'Questions about Rwanda Scores or ideas for digital sports products? Get in touch.',
    },
    {
      icon: '💬',
      title: 'General Inquiries',
      description:
        "Any other questions or proposals? Don't hesitate to reach out.",
    },
  ];

  return (
    <div>
      <ScrollReveal>
        <h2 className="text-xl font-bold text-white mb-2">How Can We Help?</h2>
        <p className="text-zinc-500 text-sm leading-relaxed mb-8">
          We welcome inquiries from sports organizations, football clubs, event
          organizers, broadcasters, and digital partners who share our commitment
          to Rwandan sport.
        </p>
      </ScrollReveal>

      <div className="space-y-4">
        {inquiries.map((item, i) => (
          <ScrollReveal key={item.title} delay={i * 80} direction="right">
            <div className="flex items-start gap-4 bg-[#0d0d0d] border border-[#1a1a1a] rounded-xl p-4 hover:border-[#2a2a2a] transition-colors duration-200">
              <span className="text-xl mt-0.5 shrink-0">{item.icon}</span>
              <div>
                <p className="text-white text-sm font-semibold mb-1">{item.title}</p>
                <p className="text-zinc-500 text-xs leading-relaxed">{item.description}</p>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Note */}
      <ScrollReveal delay={320}>
        <div className="mt-6 bg-[#0f0b1a] border border-purple-900/20 rounded-xl p-4">
          <p className="text-zinc-500 text-xs leading-relaxed">
            <span className="text-purple-400 font-semibold">Based in Rwanda.</span>{' '}
            DSH Innovations operates within the Rwandan sports ecosystem, focusing
            on local football and sporting events.
          </p>
        </div>
      </ScrollReveal>
    </div>
  );
}

/* ─────────────────────────────────────────────────────
   CONTACT FORM
───────────────────────────────────────────────────── */
function ContactForm() {
  const [fields, setFields] = useState({
    name: '',
    email: '',
    organization: '',
    subject: '',
    message: '',
  });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState(null); // null | 'loading' | 'success' | 'pending' | 'error'
  const [responseMsg, setResponseMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    // Clear error on change
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubjectSelect = (val) => {
    setFields((prev) => ({ ...prev, subject: val }));
    if (errors.subject) setErrors((prev) => ({ ...prev, subject: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(fields);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setStatus('loading');
    setErrors({});
    const result = await submitContactForm(fields);
    if (result.success) {
      setStatus('success');
    } else if (result.pending) {
      setStatus('pending');
    } else {
      setStatus('error');
    }
    setResponseMsg(result.message);
  };

  const isLoading = status === 'loading';

  if (status === 'success') {
    return (
      <ScrollReveal>
        <div className="bg-[#0d0d0d] border border-[#1e1e1e] rounded-2xl p-10 text-center">
          <div className="w-14 h-14 rounded-full bg-green-900/20 border border-green-700/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={26} className="text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Message Sent!</h3>
          <p className="text-zinc-500 text-sm leading-relaxed max-w-sm mx-auto">
            {responseMsg}
          </p>
        </div>
      </ScrollReveal>
    );
  }

  return (
    <ScrollReveal direction="left">
      <form
        onSubmit={handleSubmit}
        noValidate
        className="bg-[#0d0d0d] border border-[#1e1e1e] rounded-2xl p-8 md:p-10"
        aria-label="Contact form"
      >
        <h2 className="text-xl font-bold text-white mb-6">Send a Message</h2>

        {/* Status banners */}
        {status === 'pending' && (
          <div className="flex items-start gap-3 bg-amber-900/15 border border-amber-700/25 rounded-xl p-4 mb-6">
            <Clock size={16} className="text-amber-400 mt-0.5 shrink-0" />
            <p className="text-amber-300 text-sm leading-relaxed">{responseMsg}</p>
          </div>
        )}
        {status === 'error' && (
          <div className="flex items-start gap-3 bg-red-900/15 border border-red-700/25 rounded-xl p-4 mb-6">
            <AlertCircle size={16} className="text-red-400 mt-0.5 shrink-0" />
            <p className="text-red-300 text-sm leading-relaxed">{responseMsg}</p>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {/* Name */}
          <FormField
            label="Full Name"
            icon={User}
            required
            error={errors.name}
          >
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              placeholder="Your full name"
              value={fields.name}
              onChange={handleChange}
              disabled={isLoading}
              className={inputClass(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
              aria-invalid={!!errors.name}
            />
            {errors.name && (
              <p id="name-error" className="text-red-400 text-xs mt-1.5">{errors.name}</p>
            )}
          </FormField>

          {/* Email */}
          <FormField
            label="Email Address"
            icon={Mail}
            required
            error={errors.email}
          >
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="your@email.com"
              value={fields.email}
              onChange={handleChange}
              disabled={isLoading}
              className={inputClass(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p id="email-error" className="text-red-400 text-xs mt-1.5">{errors.email}</p>
            )}
          </FormField>

          {/* Organization */}
          <FormField
            label="Organization"
            icon={Building}
            className="sm:col-span-2"
          >
            <input
              id="organization"
              name="organization"
              type="text"
              autoComplete="organization"
              placeholder="Club, league, or organization name (optional)"
              value={fields.organization}
              onChange={handleChange}
              disabled={isLoading}
              className={inputClass(false)}
            />
          </FormField>

          {/* Subject — quick select chips */}
          <div className="sm:col-span-2">
            <label className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-3">
              <Tag size={12} className="text-zinc-600" />
              Subject <span className="text-red-400">*</span>
            </label>
            <div className="flex flex-wrap gap-2 mb-3">
              {inquiryTypes.map((type) => (
                <button
                  key={type}
                  type="button"
                  onClick={() => handleSubjectSelect(type)}
                  disabled={isLoading}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-all duration-150 ${
                    fields.subject === type
                      ? 'bg-purple-700/30 border-purple-600/60 text-purple-300'
                      : 'bg-transparent border-[#2a2a2a] text-zinc-500 hover:border-[#3a3a3a] hover:text-zinc-400'
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <input
              id="subject"
              name="subject"
              type="text"
              placeholder="Or describe your subject…"
              value={fields.subject}
              onChange={handleChange}
              disabled={isLoading}
              className={inputClass(errors.subject)}
              aria-describedby={errors.subject ? 'subject-error' : undefined}
              aria-invalid={!!errors.subject}
            />
            {errors.subject && (
              <p id="subject-error" className="text-red-400 text-xs mt-1.5">{errors.subject}</p>
            )}
          </div>

          {/* Message */}
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2.5"
            >
              <MessageSquare size={12} className="text-zinc-600" />
              Message <span className="text-red-400">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Tell us about your inquiry, project, or collaboration idea…"
              value={fields.message}
              onChange={handleChange}
              disabled={isLoading}
              className={`${inputClass(errors.message)} resize-none`}
              aria-describedby={errors.message ? 'message-error' : undefined}
              aria-invalid={!!errors.message}
            />
            {errors.message && (
              <p id="message-error" className="text-red-400 text-xs mt-1.5">{errors.message}</p>
            )}
          </div>
        </div>

        {/* Submit */}
        <div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
          <p className="text-zinc-700 text-xs">
            <span className="text-red-400">*</span> Required fields
          </p>
          <button
            type="submit"
            disabled={isLoading}
            className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none disabled:shadow-none group"
          >
            {isLoading ? (
              <>
                <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending…
              </>
            ) : (
              <>
                Send Message
                <Send size={13} className="transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </>
            )}
          </button>
        </div>
      </form>
    </ScrollReveal>
  );
}

/* ─────────────────────────────────────────────────────
   FORM HELPERS
───────────────────────────────────────────────────── */
function FormField({ label, icon: Icon, required, error, children, className = '' }) {
  return (
    <div className={className}>
      <label className="flex items-center gap-2 text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-2.5">
        {Icon && <Icon size={12} className="text-zinc-600" />}
        {label} {required && <span className="text-red-400">*</span>}
      </label>
      {children}
    </div>
  );
}

function inputClass(hasError) {
  return `
    w-full bg-[#111111] border rounded-xl px-4 py-3 text-white text-sm
    placeholder-zinc-600 outline-none transition-all duration-200
    focus:ring-2 focus:ring-purple-700/40 focus:border-purple-700/60
    disabled:opacity-50 disabled:cursor-not-allowed
    ${hasError
      ? 'border-red-700/50 focus:ring-red-700/30 focus:border-red-700/60'
      : 'border-[#1e1e1e] hover:border-[#2e2e2e]'
    }
  `.trim();
}
