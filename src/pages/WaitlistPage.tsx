import FormPageLayout from '../components/forms/FormPageLayout';
import WaitlistForm from '../components/forms/WaitlistForm';
import groupSelfie from '../assets/photos/group-selfie.jpg';

export default function WaitlistPage() {
  return (
    <FormPageLayout
      title="Join the waitlist."
      description="Be first in when LinkMyCampus goes live at your school."
      photo={groupSelfie}
      photoAlt="Students taking a group selfie on campus"
      note="Free for students."
    >
      <WaitlistForm />
    </FormPageLayout>
  );
}
