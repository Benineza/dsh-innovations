import { Link } from 'react-router-dom';
import { ExternalLink, Phone, Mail } from 'lucide-react';
import dshLogo from '../../assets/images/dsh-logo.png';
import { siteConfig } from '../../config/siteConfig';

// ── Inline SVG icons for social platforms ────────────────────────────────────
// Lucide React v1+ removed brand-logo icons, so we use precise SVG paths.
function WhatsAppIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

function InstagramIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
    </svg>
  );
}

function YouTubeIcon({ size = 16 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  );
}
// ─────────────────────────────────────────────────────────────────────────────

const NAV_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'What We Do', to: '/what-we-do' },
  { label: 'Our Products', to: '/products' },
  { label: 'Contact', to: '/contact' },
];

// Map platform keys → { label, Icon }
const SOCIAL_META = {
  whatsapp: { label: 'WhatsApp', Icon: WhatsAppIcon },
  instagram: { label: 'Instagram', Icon: InstagramIcon },
  youtube: { label: 'YouTube', Icon: YouTubeIcon },
};

export default function Footer() {
  const year = new Date().getFullYear();
  const { social, contact, products } = siteConfig;

  // Only render platforms that have a URL configured and a known icon
  const activeSocials = Object.entries(social).filter(
    ([key, url]) => url !== null && SOCIAL_META[key]
  );

  return (
    <footer className="bg-[#080808] border-t border-[#1a1a1a]">
      <div className="container-custom">

        {/* ── Main grid ─────────────────────────────────────────────────────── */}
        <div className="py-14 grid grid-cols-1 md:grid-cols-12 gap-10">

          {/* Brand column */}
          <div className="md:col-span-4">
            <Link to="/" className="inline-block mb-5" aria-label="DSH Innovations — Home">
              <img
                src={dshLogo}
                alt="DSH Innovations"
                className="h-9 w-auto object-contain"
                style={{ maxWidth: '148px' }}
              />
            </Link>

            <p className="text-sm text-zinc-500 leading-relaxed max-w-xs mb-6">
              A Rwandan sports media and content production company covering local
              football and sporting events while developing digital products that
              connect fans with the game.
            </p>

            {/* Social icons */}
            {activeSocials.length > 0 && (
              <div className="flex items-center gap-2.5">
                {activeSocials.map(([platform, url]) => {
                  const { label, Icon } = SOCIAL_META[platform];
                  return (
                    <a
                      key={platform}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`DSH Innovations on ${label}`}
                      title={label}
                      className="flex items-center justify-center w-9 h-9 rounded-lg bg-[#141414] border border-[#242424] text-zinc-500 hover:text-white hover:border-purple-700/60 hover:bg-purple-900/20 transition-all duration-200"
                    >
                      <Icon size={15} />
                    </a>
                  );
                })}
              </div>
            )}

            {/* Direct contact */}
            <div className="mt-5 space-y-2.5">
              {contact.phone && (
                <a
                  href={`tel:${contact.phone}`}
                  className="flex items-center gap-2.5 text-xs text-zinc-500 hover:text-purple-400 transition-colors duration-200 group w-fit"
                  aria-label={`Call DSH Innovations at ${contact.phoneDisplay}`}
                >
                  <Phone
                    size={13}
                    className="text-zinc-600 group-hover:text-purple-500 transition-colors duration-200 shrink-0"
                  />
                  {contact.phoneDisplay}
                </a>
              )}
              {contact.email && (
                <a
                  href={contact.gmailComposeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 text-xs text-zinc-500 hover:text-purple-400 transition-colors duration-200 group w-fit"
                  aria-label={`Email DSH Innovations at ${contact.email}`}
                >
                  <Mail
                    size={13}
                    className="text-zinc-600 group-hover:text-purple-500 transition-colors duration-200 shrink-0"
                  />
                  {contact.email}
                </a>
              )}
            </div>
          </div>

          {/* Navigation column */}
          <div className="md:col-span-3 md:col-start-6">
            <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-zinc-400 hover:text-white transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products + Connect column */}
          <div className="md:col-span-3 md:col-start-10 space-y-8">
            {/* Our Products */}
            <div>
              <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-5">
                Our Products
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href={products.rwandaScores.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-purple-400 transition-colors duration-200 group"
                  >
                    Rwanda Scores
                    <ExternalLink
                      size={11}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    />
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            {activeSocials.length > 0 && (
              <div>
                <h3 className="text-xs font-semibold text-zinc-500 uppercase tracking-widest mb-5">
                  Follow Us
                </h3>
                <ul className="space-y-3">
                  {activeSocials.map(([platform, url]) => {
                    const { label } = SOCIAL_META[platform];
                    return (
                      <li key={platform}>
                        <a
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-1.5 text-sm text-zinc-400 hover:text-purple-400 transition-colors duration-200 group"
                        >
                          {label}
                          <ExternalLink
                            size={11}
                            className="opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                          />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* ── Bottom bar ────────────────────────────────────────────────────── */}
        <div className="border-t border-[#141414] py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-600">
            &copy; {year} DSH Innovations. All rights reserved.
          </p>
          <p className="text-xs text-zinc-700">
            Built in Rwanda 🇷🇼
          </p>
        </div>

      </div>
    </footer>
  );
}
