import { useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { images } from '../assets/images';
import SiteFooter from '../components/SiteFooter';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'Benefits', to: '/#benefits' },
  { label: 'Ambassador', to: '/ambassador' },
  { label: 'FAQs', to: '/#faq' },
];

export default function MarketingLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const isHome = pathname === '/';

  const handleNavClick = () => setMenuOpen(false);

  const resolveHref = (to: string) => {
    if (to.startsWith('/#')) return isHome ? to.slice(1) : to;
    return to;
  };

  return (
    <div className="flex min-h-screen flex-col bg-page">
      <header className="sticky top-0 z-50 border-b border-border/60 bg-page/85 backdrop-blur-md">
        <div className="marketing-container flex h-[4.25rem] items-center justify-between gap-4">
          <Link to="/" className="flex shrink-0 items-center gap-2" onClick={handleNavClick}>
            <img src={images.logo} alt="LinkMyCampus" className="h-8 w-auto md:h-9" />
          </Link>

          <nav className="absolute left-1/2 hidden -translate-x-1/2 items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={resolveHref(link.to)}
                className="text-sm font-medium text-ink/70 transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden items-center md:flex">
            <Link
              to="/waitlist"
              className="rounded-full bg-navy px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-soft"
            >
              Get started
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
                  href={resolveHref(link.to)}
                  className="text-sm font-medium text-ink"
                  onClick={handleNavClick}
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/waitlist"
                className="mt-2 rounded-full bg-navy py-3 text-center text-sm font-semibold text-white"
                onClick={handleNavClick}
              >
                Get started
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
