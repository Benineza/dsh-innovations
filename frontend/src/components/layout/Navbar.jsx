import { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import dshLogo from '../../assets/images/dsh-logo.png';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'What We Do', to: '/what-we-do' },
  { label: 'Our Products', to: '/products' },
  { label: 'Contact', to: '/contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [location.pathname]);

  // Scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close on outside click
  useEffect(() => {
    if (!isMobileOpen) return;
    const handleClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setIsMobileOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [isMobileOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#1a1a1a] shadow-[0_4px_24px_-4px_rgba(0,0,0,0.8)]'
          : 'bg-transparent'
      }`}
    >
      <div className="container-custom">
        <nav
          ref={menuRef}
          className="flex items-center justify-between h-18"
          style={{ height: '72px' }}
          aria-label="Main navigation"
        >
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3 shrink-0 group"
            aria-label="DSH Innovations — Home"
          >
            <img
              src={dshLogo}
              alt="DSH Innovations"
              className="h-10 w-auto object-contain transition-opacity duration-200 group-hover:opacity-90"
              style={{ maxWidth: '160px' }}
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `relative px-4 py-2 text-sm font-medium transition-colors duration-200 rounded-md ${
                    isActive
                      ? 'text-white'
                      : 'text-zinc-400 hover:text-white hover:bg-white/5'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-purple-500 rounded-full"
                        transition={{ type: 'spring', bounce: 0.25, duration: 0.4 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/contact"
              className="flex items-center gap-2 bg-purple-700 hover:bg-purple-600 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-200 hover:shadow-[0_4px_20px_-4px_rgba(124,58,237,0.6)] hover:-translate-y-0.5"
            >
              Get in Touch
              <ArrowRight size={14} strokeWidth={2.5} />
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-zinc-300 hover:text-white hover:bg-white/5 transition-all duration-200"
            onClick={() => setIsMobileOpen((v) => !v)}
            aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileOpen}
            aria-controls="mobile-menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ opacity: 0, rotate: -90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: 90 }}
                  transition={{ duration: 0.15 }}
                >
                  <X size={20} />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ opacity: 0, rotate: 90 }}
                  animate={{ opacity: 1, rotate: 0 }}
                  exit={{ opacity: 0, rotate: -90 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu size={20} />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden overflow-hidden bg-[#0d0d0d] border-b border-[#1e1e1e]"
          >
            <div className="container-custom py-4 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.2 }}
                >
                  <NavLink
                    to={link.to}
                    end={link.to === '/'}
                    className={({ isActive }) =>
                      `flex items-center px-4 py-3 rounded-lg text-base font-medium transition-colors duration-150 ${
                        isActive
                          ? 'bg-purple-900/30 text-purple-300 border border-purple-800/30'
                          : 'text-zinc-300 hover:text-white hover:bg-white/5'
                      }`
                    }
                  >
                    {link.label}
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05, duration: 0.2 }}
                className="pt-2 mt-2 border-t border-[#1e1e1e]"
              >
                <Link
                  to="/contact"
                  className="flex items-center justify-center gap-2 w-full bg-purple-700 hover:bg-purple-600 text-white font-semibold px-5 py-3 rounded-lg transition-all duration-200"
                >
                  Get in Touch
                  <ArrowRight size={14} strokeWidth={2.5} />
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
