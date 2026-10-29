import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { images } from '../assets/images';

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
];

export default function AboutPage() {
  return (
    <div className="bg-page py-12 md:py-16">
      <div className="marketing-container max-w-lg">
        <div className="flex flex-col items-center text-center">
          <img src={images.logo} alt="" className="h-16 w-16 object-contain" />
          <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-ink">
            LinkMyCampus
          </h1>
          <span className="mt-3 inline-flex rounded-full bg-brand-light px-3.5 py-1 text-sm font-semibold text-brand">
            Version 1.0.0
          </span>
        </div>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-white">
          {metaRows.map((row, i) => (
            <div
              key={row.label}
              className={`flex items-center justify-between px-5 py-4 ${
                i < metaRows.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <span className="text-sm text-muted">{row.label}</span>
              <span className="text-sm font-semibold text-ink">{row.value}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-white">
          {legalLinks.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className={`flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-surface ${
                i < legalLinks.length - 1 ? 'border-b border-border' : ''
              }`}
            >
              <div>
                <p className="font-semibold text-ink">{item.title}</p>
                <p className="mt-0.5 text-sm text-muted">{item.caption}</p>
              </div>
              <ChevronRight size={18} className="shrink-0 text-muted" />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
