import { Link } from 'react-router-dom';
import { images } from '../assets/images';

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
    label: 'LinkedIn',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 114.126 0 2.063 2.063 0 01-2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
    label: 'Facebook',
    href: '#',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
];

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-brand text-white/75">
      <div className="marketing-container relative py-14 md:py-16">
        <div className="relative">
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
            <div className="lg:col-span-2">
              <Link to="/" className="inline-block">
                <img src={images.logo} alt="LinkMyCampus" className="mb-5 h-8 w-auto brightness-0 invert" />
              </Link>
              <p className="max-w-sm text-sm leading-relaxed text-white/70">
                The campus app for university students. Feed, groups, reels, student marketplace,
                and anonymous posting inside your verified university network.
              </p>
              <div className="mt-6 flex gap-3">
                {socialLinks.map(({ icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 bg-white/5 text-white/70 transition-colors hover:border-white/30 hover:bg-white/10 hover:text-white"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
                Product
              </p>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="/#about" className="transition-colors hover:text-white">
                    About
                  </a>
                </li>
                <li>
                  <a href="/#how-it-works" className="transition-colors hover:text-white">
                    How it works
                  </a>
                </li>
                <li>
                  <a href="/#reviews" className="transition-colors hover:text-white">
                    Reviews
                  </a>
                </li>
                <li>
                  <a href="/#faq" className="transition-colors hover:text-white">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
                Join
              </p>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link to="/waitlist" className="transition-colors hover:text-white">
                    Waitlist
                  </Link>
                </li>
                <li>
                  <Link to="/ambassador" className="transition-colors hover:text-white">
                    Become an ambassador
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/50">
                Legal
              </p>
              <ul className="space-y-3 text-sm">
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Terms
                  </a>
                </li>
                <li>
                  <a href="#" className="transition-colors hover:text-white">
                    Community guidelines
                  </a>
                </li>
              </ul>
            </div>
          </div>

        </div>

        <div className="mt-12 flex flex-col gap-3 text-sm text-white/60 sm:flex-row sm:items-center sm:justify-between">
          <span>&copy; {new Date().getFullYear()} LinkMyCampus. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
