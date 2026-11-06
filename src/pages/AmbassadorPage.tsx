import FormPageLayout from '../components/forms/FormPageLayout';
import AmbassadorForm from '../components/forms/AmbassadorForm';
import lecture from '../assets/photos/lecture.jpg';

export default function AmbassadorPage() {
  return (
    <FormPageLayout
      title="Become an ambassador."
      description="Bring LinkMyCampus to your school and lead the community there."
      photo={lecture}
      photoAlt="A student speaking to a group of classmates"
      note="Recognition, early access and dedicated support."
    >
      <AmbassadorForm />
    </FormPageLayout>
  );
}
