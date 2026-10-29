import LegalPageLayout from '../components/legal/LegalPageLayout';

export default function PrivacyPage() {
  return (
    <LegalPageLayout
      title="Privacy Policy"
      subtitle="LinkMyCampus — Privacy"
      updated="2026-10-29"
    >
      <p>LinkMyCampus helps campus communities connect and share.</p>
      <p>
        We collect account details you give us (like name, email, campus), content you post, and
        basic app activity so the product can work (feed, notifications, safety).
      </p>
      <p>
        We use this information to run the app, keep accounts secure, and improve the experience.
        We do not sell your personal information.
      </p>
      <p>
        You can update privacy settings, turn contact discovery off, and request account
        deactivation or deletion in the app.
      </p>
    </LegalPageLayout>
  );
}
