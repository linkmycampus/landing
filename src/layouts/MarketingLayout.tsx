import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { images } from '../assets/images';
import SiteFooter from '../components/SiteFooter';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/#about' },
  { label: 'How it works', to: '/#how-it-works' },
  { label: 'Reviews', to: '/#reviews' },
  { label: 'FAQ', to: '/#faq' },
];

export default function MarketingLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const handleNavClick = () => setMenuOpen(false);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="sticky top-0 z-50 border-b border-border bg-white/90 backdrop-blur-md">
        <div className="marketing-container flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex shrink-0 items-center gap-2" onClick={handleNavClick}>
            <img src={images.logo} alt="LinkMyCampus" className="h-8 w-auto md:h-9" />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.to.startsWith('/#') ? (isHome ? link.to.slice(1) : link.to) : link.to}
                className="text-sm font-medium text-muted transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Link
              to="/ambassador"
              className="rounded-full px-4 py-2 text-sm font-medium text-ink transition-colors hover:bg-surface"
            >
              Ambassadors
            </Link>
            <Link
              to="/waitlist"
              className="rounded-full bg-cta px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-cta-hover"
            >
              Join waitlist
            </Link>
          </div>

          <button
            type="button"
            className="rounded-lg p-2 text-ink md:hidden"
            onClick={() => setMenuOpen((o) => !o)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {menuOpen && (
          <div className="marketing-container border-t border-border py-4 md:hidden">
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.to.startsWith('/#') ? (isHome ? link.to.slice(1) : link.to) : link.to}
                  className="text-sm font-medium text-ink"
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              ))}
              <Link to="/ambassador" className="text-sm font-medium text-ink" onClick={handleNavClick}>
                Ambassadors
              </Link>
              <Link
                to="/waitlist"
                className="mt-2 rounded-full bg-cta py-3 text-center text-sm font-semibold text-white"
                onClick={handleNavClick}
              >
                Join waitlist
              </Link>
            </nav>
          </div>
        )}
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  );
}
