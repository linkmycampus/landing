import LegalPageLayout from '../components/legal/LegalPageLayout';

export default function DeleteDataPage() {
  return (
    <LegalPageLayout
      title="Request data deletion"
      subtitle="LinkMyCampus — Data deletion"
      updated="2026-10-29"
    >
      <p>
        This page explains how to request deletion of some or all of your personal data in{' '}
        <strong>LinkMyCampus</strong> <em>without</em> deleting your entire account.
      </p>

      <h2>How to request data deletion</h2>
      <ol>
        <li>
          Open the <strong>LinkMyCampus</strong> app and sign in.
        </li>
        <li>
          Go to <strong>Profile</strong> → <strong>Settings</strong> → <strong>Privacy</strong>.
        </li>
        <li>
          Update privacy settings, turn off contact discovery, remove content you no longer want
          shared, or use in-app controls to delete specific posts or data where available.
        </li>
        <li>
          To request broader data deletion while keeping your account, email{' '}
          <a href="mailto:support@linkmycampus.com">
            support@linkmycampus.com
          </a>{' '}
          from your account email with the subject line{' '}
          <strong>“Delete my LinkMyCampus data”</strong>. Tell us which data you want removed (for
          example: posts, profile fields, activity history).
        </li>
      </ol>

      <h2>What we can delete</h2>
      <ul>
        <li>Selected content you posted (posts, comments, and similar)</li>
        <li>Optional profile details you ask us to clear</li>
        <li>Certain app activity and preference data linked to your account</li>
      </ul>

      <h2>What we may keep</h2>
      <p>If you keep your account, we typically retain data required for the product to work, such as:</p>
      <ul>
        <li>Core account credentials and identifiers needed to sign you in</li>
        <li>Campus verification details needed for network access</li>
        <li>Security, safety, and abuse-prevention records where necessary</li>
        <li>Data we must retain to comply with law</li>
      </ul>

      <h2>Retention period</h2>
      <p>
        After we verify a data-deletion request, we aim to remove eligible data within{' '}
        <strong>30 days</strong>. Backup copies may persist for up to <strong>90 days</strong>{' '}
        before purge, unless a longer period is required by law.
      </p>

      <p>
        Want to delete the whole account instead? See{' '}
        <a href="/delete-account">
          Request account deletion
        </a>
        .
      </p>
    </LegalPageLayout>
  );
}
