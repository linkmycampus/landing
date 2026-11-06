import { NavLink } from 'react-router-dom';

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
          <h1 className="display max-w-[11em]">{title}</h1>
          <p className="meta mt-4">Updated {updated}</p>

          <nav aria-label="Legal pages" className="mt-10 hidden max-w-xs flex-col gap-1 lg:flex">
            {legalNav.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) =>
                  `block rounded-full px-4 py-2.5 text-[15px] transition-colors hover:text-ink ${
                    isActive ? 'bg-surface text-ink' : 'text-muted'
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

          <p className="mt-12 text-[15px] text-muted">
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
