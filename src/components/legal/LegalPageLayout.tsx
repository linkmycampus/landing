import { NavLink, Link } from 'react-router-dom';

type LegalPageLayoutProps = {
  title: string;
  subtitle?: string;
  updated: string;
  children: React.ReactNode;
};

const legalNav = [
  { label: 'Privacy', to: '/privacy' },
  { label: 'Terms', to: '/terms' },
  { label: 'Community standards', to: '/community-standards' },
  { label: 'Delete account', to: '/delete-account' },
  { label: 'Delete data', to: '/delete-data' },
];

export default function LegalPageLayout({ title, updated, children }: LegalPageLayoutProps) {
  return (
    <section className="pb-[clamp(72px,10vw,144px)] pt-[clamp(32px,5vw,72px)]">
      <div className="wrap split items-start">
        <aside className="lg:sticky lg:top-24">
          <Link to="/about" className="meta transition-colors hover:text-ink">
            ← About
          </Link>
          <h1 className="display mt-10 max-w-[11em]">{title}</h1>
          <p className="meta mt-4">Updated {updated}</p>

          <nav aria-label="Legal pages" className="mt-10 hidden max-w-xs border-t border-border lg:block">
            {legalNav.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `block border-b border-border py-3 text-[15px] transition-colors hover:text-ink ${
                    isActive ? 'text-ink' : 'text-muted'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <div className="max-w-[40em]">
          <div className="prose-lmc">{children}</div>

          <p className="mt-12 border-t border-border pt-6 text-[15px] text-muted">
            Questions?{' '}
            <a href="mailto:support@linkmycampus.com" className="inline-link">
              support@linkmycampus.com
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
