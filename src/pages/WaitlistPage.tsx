import FormPageLayout from '../components/forms/FormPageLayout';
import WaitlistForm from '../components/forms/WaitlistForm';
import friendsSelfie from '../assets/photos/friends-selfie.jpg';

export default function WaitlistPage() {
  return (
    <FormPageLayout
      title="Join the waitlist."
      description="Be first in when LinkMyCampus goes live at your school."
      photo={friendsSelfie}
      photoAlt="Friends taking a selfie on campus"
      note="Open to all students at every university, polytechnic and college in Nigeria."
    >
      <WaitlistForm />
    </FormPageLayout>
  );
}
