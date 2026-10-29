import { Link } from 'react-router-dom';

type LegalPageLayoutProps = {
  title: string;
  subtitle: string;
  updated: string;
  children: React.ReactNode;
};

export default function LegalPageLayout({
  title,
  subtitle,
  updated,
  children,
}: LegalPageLayoutProps) {
  return (
    <div className="bg-page py-12 md:py-16">
      <div className="marketing-container max-w-3xl">
        <Link
          to="/about"
          className="text-sm font-medium text-muted transition-colors hover:text-brand"
        >
          ← Back to About
        </Link>

        <p className="mt-8 text-sm font-semibold tracking-wide text-brand">{subtitle}</p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-muted">Updated: {updated}</p>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-ink/80">{children}</div>

        <p className="mt-10 text-sm text-muted">
          Questions:{' '}
          <a
            href="mailto:support@linkmycampus.com"
            className="font-semibold text-brand hover:underline"
          >
            support@linkmycampus.com
          </a>
        </p>
      </div>
    </div>
  );
}
