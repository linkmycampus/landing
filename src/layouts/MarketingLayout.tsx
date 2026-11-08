import { useEffect, useRef, useState } from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { images } from '../assets/images';
import SiteFooter from '../components/SiteFooter';
import { applyPageMeta } from '../config/seo';
import { SECTIONS, scrollToSection, sectionFor } from '../config/sections';

/* Section links use clean addresses (/story, not /#story). id is the section they scroll to. */
const navLinks = [
  { label: 'Our story', to: '/story', id: 'story' },
  { label: 'Features', to: '/features', id: 'features' },
  { label: 'Campus', to: '/campus', id: 'moments' },
  { label: 'Creators', to: '/creators', id: 'creators' },
  { label: 'FAQ', to: '/faq', id: 'faq' },
];

export default function MarketingLayout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname, hash } = useLocation();
  const section = sectionFor(pathname);
  const isHome = pathname === '/' || !!section;

  // Title, description and social tags for the current page.
  useEffect(() => {
    applyPageMeta(pathname);
  }, [pathname]);

  // Open every page at the top, unless the address is a homepage section (/creators) or an old /#creators link.
  useEffect(() => {
    const id = section ?? (hash ? hash.slice(1) : null);
    if (id) {
      // An old /#creators link: swap the address for the clean one (/creators).
      const clean = Object.keys(SECTIONS).find((k) => SECTIONS[k] === id);
      if (!section && hash && clean && pathname === '/') window.history.replaceState(window.history.state, '', '/' + clean);
      // Wait a moment so the homepage has drawn before scrolling to the section.
      const t = window.setTimeout(() => scrollToSection(id), 60);
      // Photos above can still be loading and push the section down: settle on it again.
      const t2 = window.setTimeout(() => scrollToSection(id), 900);
      return () => {
        window.clearTimeout(t);
        window.clearTimeout(t2);
      };
    }
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname, hash, section]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);
  // Clicking the section you are already on still scrolls back to it.
  const goTo = (to: string, id: string) => (e: React.MouseEvent) => {
    close();
    if (pathname === to) {
      e.preventDefault();
      scrollToSection(id);
    }
  };
  // On the homepage the header sits over the purple hero until you scroll.
  const overHero = isHome && !scrolled;

  // Sliding highlight: follows the hovered link, rests on the section you're reading.
  const navRef = useRef<HTMLElement>(null);
  const [spy, setActive] = useState<string | null>(null);
  const active = isHome ? spy : null;
  const [hovered, setHovered] = useState<string | null>(null);
  const pillRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!isHome) return;
    const ids = navLinks.map((l) => l.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean) as HTMLElement[];
    if (!els.length || !('IntersectionObserver' in window)) return;
    const io = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (vis[0]) setActive(vis[0].target.id);
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    els.forEach((el) => io.observe(el));
    const onTop = () => {
      if (window.scrollY < window.innerHeight * 0.5) setActive(null);
    };
    window.addEventListener('scroll', onTop, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', onTop);
    };
  }, [isHome, pathname]);

  const target = hovered ?? active;
  useEffect(() => {
    const nav = navRef.current;
    const pill = pillRef.current;
    if (!nav || !pill) return;
    const a = target ? nav.querySelector<HTMLElement>(`[data-id="${target}"]`) : null;
    if (!a) {
      pill.style.opacity = '0';
      return;
    }
    pill.style.left = a.offsetLeft + 'px';
    pill.style.width = a.offsetWidth + 'px';
    pill.style.opacity = '1';
  }, [target]);

  return (
    <div className="flex min-h-screen flex-col bg-page">
      <a
        href="#main"
        className="absolute left-3 top-[-48px] z-[80] rounded-[6px] bg-brand px-3 py-2 text-[13px] text-white focus:top-3"
      >
        Skip to content
      </a>

      <header
        className={`sticky top-0 z-50 h-14 transition-colors duration-[240ms] ${
          scrolled
            ? 'bg-white/[0.82] backdrop-blur-[20px] backdrop-saturate-[1.8]'
            : 'bg-white/0'
        }`}
      >
        <div className="wrap grid h-full grid-cols-[1fr_auto] items-center gap-4 lg:grid-cols-[1fr_auto_1fr]">
          <Link to="/" className="flex h-11 items-center justify-self-start" onClick={close} aria-label="LinkMyCampus, home">
            <img
              src={images.logo}
              alt="LinkMyCampus"
              className={`h-[26px] w-auto transition-[filter] duration-[240ms] ${overHero ? 'brightness-0 invert' : ''}`}
            />
          </Link>

          <nav
            ref={navRef}
            className="relative hidden items-center lg:flex"
            aria-label="On this page"
            onMouseLeave={() => setHovered(null)}
          >
            <span
              aria-hidden
              className={`pointer-events-none absolute top-1/2 h-[30px] -translate-y-1/2 rounded-full transition-[left,width,opacity] duration-300 ease-[var(--ease-out)] ${
                overHero ? 'bg-white/15' : 'bg-fill'
              }`}
              ref={pillRef}
              style={{ opacity: 0 }}
            />
            {navLinks.map((link) => {
              const id = link.id;
              const on = target === id;
              return (
              <Link
                key={link.label}
                data-id={id}
                to={link.to}
                onClick={goTo(link.to, id)}
                onMouseEnter={() => setHovered(id)}
                onFocus={() => setHovered(id)}
                onBlur={() => setHovered(null)}
                aria-current={active === id ? 'location' : undefined}
                className={`relative z-[1] flex h-14 items-center whitespace-nowrap px-[13px] text-[13.5px] transition-colors duration-150 ${
                  overHero ? (on ? 'text-white' : 'text-white/75') : on ? 'text-ink' : 'text-muted'
                }`}
              >
                {link.label}
              </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-2 justify-self-end">
            <Link
              to="/waitlist"
              className={`nav-cta ring-glow ${overHero ? '!bg-white !text-brand hover:!bg-[#ececf0]' : ''}`}
            >
              Join the waitlist
            </Link>
            <button
              type="button"
              className={`-mr-2 inline-flex h-11 w-11 items-center justify-center lg:hidden ${
                overHero ? 'text-white' : 'text-ink'
              }`}
              onClick={() => setMenuOpen(true)}
              aria-label="Menu"
              aria-haspopup="dialog"
              aria-expanded={menuOpen}
            >
              <Menu size={20} strokeWidth={1.6} />
            </button>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[70] overflow-y-auto bg-white lg:hidden" role="dialog" aria-modal="true" aria-label="Menu">
          <div className="wrap flex h-14 items-center justify-between">
            <Link to="/" onClick={close} aria-label="LinkMyCampus, home">
              <img src={images.logo} alt="LinkMyCampus" className="h-[26px] w-auto" />
            </Link>
            <button
              type="button"
              className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-ink"
              onClick={close}
              aria-label="Close menu"
            >
              <X size={20} strokeWidth={1.6} />
            </button>
          </div>
          <nav className="wrap mt-2" aria-label="Mobile">
            <ol>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    onClick={goTo(link.to, link.id)}
                    className="flex items-baseline gap-4 py-4 font-display text-[26px] font-semibold tracking-[-0.025em]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/ambassador"
                  onClick={close}
                  className="flex items-baseline gap-4 py-4 font-display text-[26px] font-semibold tracking-[-0.025em]"
                >
                  Ambassadors
                </Link>
              </li>
            </ol>
            <Link to="/waitlist" onClick={close} className="btn ring-glow mt-8 w-full">
              Join the waitlist
            </Link>
            <p className="mt-4 text-center text-[13px] text-muted">Open to all students in Nigeria.</p>
          </nav>
        </div>
      )}

      <main id="main" className="flex-1">
        <Outlet />
      </main>

      <SiteFooter />
    </div>
  );
}
