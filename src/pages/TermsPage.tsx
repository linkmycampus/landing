import LegalPageLayout from '../components/legal/LegalPageLayout';

export default function TermsPage() {
  return (
    <LegalPageLayout
      title="Terms and Conditions"
      subtitle="LinkMyCampus — Terms"
      updated="2026-10-29"
    >
      <p>
        By using LinkMyCampus you agree to use the app respectfully and follow our Community
        Standards.
      </p>
      <p>
        You are responsible for your account and the content you post. Do not spam, harass,
        impersonate others, or use the app for illegal activity.
      </p>
      <p>
        We may remove content or restrict accounts that break these rules. Features may change as
        we improve the product.
      </p>
    </LegalPageLayout>
  );
}
