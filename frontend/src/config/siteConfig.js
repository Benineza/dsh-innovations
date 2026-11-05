// Central configuration for DSH Innovations website.
// All contact details and social media URLs live here — update in one place,
// reflected everywhere (Footer, Contact page, etc.).

export const siteConfig = {
  name: 'DSH Innovations',
  tagline: "Capturing Rwanda's Sporting Moments. Building Its Digital Future.",
  description:
    'DSH Innovations is a Rwandan sports media and content production company covering local football and sporting events while developing digital products that connect fans with the game.',
  baseUrl: 'https://dshinnovations.com',

  // ── Social media ────────────────────────────────────────────────────────────
  // Set a key to null to hide it everywhere automatically.
  social: {
    whatsapp: 'https://whatsapp.com/channel/0029Vb6TOXi4tRrvR9JyyW3K',
    instagram: 'https://www.instagram.com/dsh_innovations/',
    youtube: 'https://www.youtube.com/@dshinnovations_ent',
    // Not currently active — set to null to suppress:
    twitter: null,
    facebook: null,
    tiktok: null,
  },

  // ── Contact ──────────────────────────────────────────────────────────────────
  contact: {
    // Clicking the phone number / phone icon opens the device dialer (tel: link).
    phone: '+250722476297',
    // Display-formatted version shown in the UI.
    phoneDisplay: '+250 722 476 297',
    // Clicking the email / mail icon opens Gmail compose with no prefilled subject or body.
    email: 'dshinnovations@gmail.com',
    gmailComposeUrl: 'https://mail.google.com/mail/?view=cm&fs=1&to=dshinnovations@gmail.com',
    address: null,
  },

  // ── Products ─────────────────────────────────────────────────────────────────
  products: {
    rwandaScores: {
      name: 'Rwanda Scores',
      url: 'https://www.rwandascores.com/',
      description:
        'Your destination for following Rwandan football. Discover fixtures, match results, scores, standings, and information from football competitions across Rwanda.',
    },
  },

  // ── Stats ────────────────────────────────────────────────────────────────────
  stats: {
    audience: '8,000+',
    audienceLabel: 'Audience Across Platforms',
  },
};

export default siteConfig;
