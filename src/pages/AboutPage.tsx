import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const metaRows = [
  { label: 'App version', value: '1.0.0' },
  { label: 'Release date', value: '2026-09-01' },
];

const legalLinks = [
  {
    title: 'Privacy Policy',
    caption: 'How we collect and use your data',
    to: '/privacy',
  },
  {
    title: 'Terms and Conditions',
    caption: 'Rules governing your use of LMC',
    to: '/terms',
  },
  {
    title: 'Community Standards',
    caption: 'What we expect from every member',
    to: '/community-standards',
  },
  {
    title: 'Delete account',
    caption: 'Request account and data deletion',
    to: '/delete-account',
  },
  {
    title: 'Delete data',
    caption: 'Request data deletion without closing your account',
    to: '/delete-data',
  },
];

export default function AboutPage() {
  return (
    <section className="pb-[clamp(72px,10vw,144px)] pt-[clamp(32px,5vw,72px)]">
      <div className="wrap split items-start">
        <div className="lg:sticky lg:top-24">
          <Link to="/" className="meta transition-colors hover:text-ink">
            ← Home
          </Link>
          <h1 className="display mt-10 max-w-[11em]">
            LinkMyCampus
            <span className="block text-faint">The social app for your campus.</span>
          </h1>
          <p className="lede mt-5 max-w-[28em]">
            A campus feed, chat, Pages, events and reels for university students.
          </p>

          <dl className="mt-10 max-w-md border-t border-border">
            {metaRows.map((row) => (
              <div key={row.label} className="flex items-center justify-between border-b border-border py-3.5">
                <dt className="text-[15px] text-muted">{row.label}</dt>
                <dd className="font-mono text-[13px] text-ink">{row.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div>
          <h2 className="t-title border-b border-ink pb-3.5">Policies and requests</h2>
          <ul>
            {legalLinks.map((item) => (
              <li key={item.to} className="border-b border-border">
                <Link to={item.to} className="group flex items-center justify-between gap-6 py-5">
                  <span>
                    <span className="t-title block">{item.title}</span>
                    <span className="t-body mt-0.5 block">{item.caption}</span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.6}
                    className="shrink-0 text-muted transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brand"
                  />
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
