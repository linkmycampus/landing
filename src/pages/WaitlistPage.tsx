import FormPageLayout from '../components/forms/FormPageLayout';
import WaitlistForm from '../components/forms/WaitlistForm';

export default function WaitlistPage() {
  return (
    <FormPageLayout
      badge="Waitlist"
      title="Join the waitlist"
      description="Get early access to LinkMyCampus at your university. Campus feed, student groups, reels, marketplace, and anonymous posting for verified students."
    >
      <WaitlistForm />
    </FormPageLayout>
  );
}
