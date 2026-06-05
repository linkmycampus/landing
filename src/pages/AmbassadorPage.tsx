import FormPageLayout from '../components/forms/FormPageLayout';
import AmbassadorForm from '../components/forms/AmbassadorForm';

export default function AmbassadorPage() {
  return (
    <FormPageLayout
      badge="Ambassadors"
      title="Become a campus ambassador"
      description="Help bring LinkMyCampus to your university. Grow the waitlist, host conversations, and represent the brand among students."
    >
      <AmbassadorForm />
    </FormPageLayout>
  );
}
