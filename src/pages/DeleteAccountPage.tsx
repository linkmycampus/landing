import LegalPageLayout from '../components/legal/LegalPageLayout';

export default function DeleteAccountPage() {
  return (
    <LegalPageLayout
      title="Request account deletion"
      subtitle="LinkMyCampus — Account deletion"
      updated="2026-10-29"
    >
      <p>
        This page explains how to request deletion of your <strong>LinkMyCampus</strong> account
        and associated personal data.
      </p>

      <h2 className="!mt-8 text-xl font-bold text-ink">How to request account deletion</h2>
      <ol className="list-decimal space-y-3 pl-5">
        <li>
          Open the <strong>LinkMyCampus</strong> app and sign in to the account you want to delete.
        </li>
        <li>
          Go to <strong>Profile</strong> → <strong>Settings</strong> → <strong>Account</strong> (or{' '}
          <strong>About</strong> / privacy settings).
        </li>
        <li>
          Choose <strong>Deactivate</strong> or <strong>Delete account</strong> and follow the
          on-screen confirmation steps.
        </li>
        <li>
          If you cannot access the app, email{' '}
          <a href="mailto:support@linkmycampus.com" className="font-semibold text-brand hover:underline">
            support@linkmycampus.com
          </a>{' '}
          from the email address on your account with the subject line{' '}
          <strong>“Delete my LinkMyCampus account”</strong>. Include your username and campus so we
          can verify the request.
        </li>
      </ol>

      <h2 className="!mt-8 text-xl font-bold text-ink">What we delete</h2>
      <p>When your account deletion is completed, we delete or anonymize:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Account profile details (name, email, campus, username, and related settings)</li>
        <li>Content you posted (posts, comments, and similar user-generated content tied to your account)</li>
        <li>App activity used for feed, notifications, and safety that is linked to your account</li>
        <li>Contact-discovery and similar preference data tied to your account</li>
      </ul>

      <h2 className="!mt-8 text-xl font-bold text-ink">What we may keep</h2>
      <p>We may retain limited information when required for legitimate purposes, such as:</p>
      <ul className="list-disc space-y-2 pl-5">
        <li>Records needed for security, fraud prevention, or abuse investigation</li>
        <li>Information we must keep to comply with law or legal process</li>
        <li>Aggregated or anonymized data that no longer identifies you</li>
      </ul>

      <h2 className="!mt-8 text-xl font-bold text-ink">Retention period</h2>
      <p>
        After we verify your request, we aim to delete eligible account data within{' '}
        <strong>30 days</strong>. Some residual copies may remain in secure backups for up to{' '}
        <strong>90 days</strong> before they are purged, unless a longer period is required by law.
      </p>

      <p>
        Related policy:{' '}
        <a href="/privacy" className="font-semibold text-brand hover:underline">
          Privacy Policy
        </a>
        .
      </p>
    </LegalPageLayout>
  );
}
