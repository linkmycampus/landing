import { Link } from 'react-router-dom';
import { images } from '../assets/images';

/* Footer layout after plud.app: logo left, three link columns right, and an
   oversized fading wordmark that bleeds off the bottom of the page. */

const columns = [
  {
    title: 'Explore',
    links: [
      { label: 'Features', to: '/#features' },
      { label: 'Creators', to: '/#creators' },
      { label: 'Ambassadors', to: '/ambassador' },
      { label: 'Waitlist', to: '/waitlist' },
    ],
  },
  {
    title: 'Help',
    links: [
      { label: 'Email', to: 'mailto:hello@linkmycampus.com' },
      { label: 'FAQs', to: '/#faq' },
      { label: 'About', to: '/about' },
      { label: 'Support', to: 'mailto:support@linkmycampus.com' },
    ],
  },
  {
    title: 'Legal',
    links: [
      { label: 'Privacy', to: '/privacy' },
      { label: 'Terms', to: '/terms' },
      { label: 'Community standards', to: '/community-standards' },
      { label: 'Delete account', to: '/delete-account' },
      { label: 'Delete data', to: '/delete-data' },
    ],
  },
];

function FooterLink({ label, to }: { label: string; to: string }) {
  const cls =
    'text-[17px] tracking-[-0.02em] text-muted transition-colors duration-150 hover:text-brand md:text-[18px]';
  if (to.startsWith('/#') || to.startsWith('mailto:')) {
    return (
      <a href={to} className={cls}>
        {label}
      </a>
    );
  }
  return (
    <Link to={to} className={cls}>
      {label}
    </Link>
  );
}

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden pt-16">
      <div className="wrap relative z-10">
        <div className="flex flex-col gap-12 md:flex-row md:items-start md:justify-between">
          <Link to="/" aria-label="LinkMyCampus home" className="inline-flex h-fit w-fit items-center">
            <img src={images.logo} alt="LinkMyCampus" className="h-9 w-auto md:h-11" />
          </Link>

          <div className="grid grid-cols-2 gap-x-12 gap-y-10 sm:grid-cols-3 lg:gap-x-20">
            {columns.map((col) => (
              <div key={col.title}>
                <h3 className="text-[20px] font-normal tracking-[-0.03em] text-ink">{col.title}</h3>
                <ul className="mt-3 space-y-2.5">
                  {col.links.map((l) => (
                    <li key={l.label}>
                      <FooterLink {...l} />
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-14 text-[13px] text-muted">
          © {new Date().getFullYear()} LinkMyCampus. All rights reserved.
        </p>
      </div>

      {/* Oversized wordmark, fading out and cut by the page edge */}
      <div aria-hidden="true" className="wrap pointer-events-none flex select-none justify-center">
        <span
          className="mt-6 -mb-[0.3em] whitespace-nowrap bg-clip-text pe-[0.06em] text-[min(15.8vw,218px)] font-medium leading-[1.11] tracking-[-0.07em] text-transparent"
          style={{
            backgroundImage:
              'linear-gradient(180deg, #35167f 8%, rgba(107, 79, 216, 0.14) 60%, rgba(107, 79, 216, 0) 100%)',
          }}
        >
          LinkMyCampus
        </span>
      </div>
    </footer>
  );
}
