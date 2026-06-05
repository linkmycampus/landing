import { Link } from 'react-router-dom';

type FormPageLayoutProps = {
  badge: string;
  title: string;
  description: string;
  children: React.ReactNode;
};

export default function FormPageLayout({ badge, title, description, children }: FormPageLayoutProps) {
  return (
    <div className="bg-grid min-h-[calc(100vh-4rem)] py-12 md:py-16">
      <div className="mx-auto max-w-lg px-5 md:px-8">
        <Link to="/" className="text-sm font-medium text-muted transition-colors hover:text-cta">
          ← Back to home
        </Link>

        <p className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-white px-3 py-1 text-xs font-semibold uppercase tracking-wide text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-cta" />
          {badge}
        </p>

        <h1 className="mt-4 text-3xl font-extrabold tracking-tight text-ink md:text-4xl">{title}</h1>
        <p className="mt-3 text-muted">{description}</p>

        <div className="mt-8 rounded-2xl border border-border bg-white p-6 shadow-sm md:p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
