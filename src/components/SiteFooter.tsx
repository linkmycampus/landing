import { Link } from 'react-router-dom';
import { images } from '../assets/images';

const footerLinks = [
  { label: 'Home', to: '/' },
  { label: 'Benefits', to: '/#benefits' },
  { label: 'Ambassador', to: '/ambassador' },
  { label: 'FAQs', to: '/#faq' },
  { label: 'About', to: '/about' },
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
  { label: 'Delete account', to: '/delete-account' },
];

const socialLinks = [
  {
    label: 'X (Twitter)',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="h-4 w-4" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden border-t border-border bg-page pb-10 pt-8">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none text-center text-[12vw] font-extrabold leading-none tracking-tight text-brand/[0.06]"
        aria-hidden
      >
        LinkMyCampus
      </div>

      <div className="marketing-container relative flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <Link to="/" className="shrink-0">
          <img src={images.logo} alt="LinkMyCampus" className="h-8 w-auto" />
        </Link>

        <nav className="flex flex-wrap items-center gap-x-6 gap-y-2">
          {footerLinks.map((link) =>
            link.to.startsWith('/#') || link.to === '/' ? (
              <a
                key={link.label}
                href={link.to}
                className="text-sm font-medium text-muted transition-colors hover:text-brand"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.to}
                className="text-sm font-medium text-muted transition-colors hover:text-brand"
              >
                {link.label}
              </Link>
            ),
          )}
        </nav>

        <div className="flex items-center gap-4">
          <div className="flex gap-2">
            {socialLinks.map(({ icon, label, href }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-border bg-white text-muted transition-colors hover:border-brand hover:text-brand"
              >
                {icon}
              </a>
            ))}
          </div>
          <span className="hidden text-sm text-muted lg:inline">
            All rights reserved {new Date().getFullYear()}
          </span>
        </div>
      </div>

      <p className="marketing-container relative mt-6 text-sm text-muted lg:hidden">
        All rights reserved {new Date().getFullYear()}
      </p>
    </footer>
  );
}
