
import { Shield } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const Features = () => {
  const { openLoginModal } = useModal();

  return (
    <section id="features" className="licensing-section reveal">
      <div className="section-inner">
        <div className="licensing-intro">
          <span className="section-kicker">// MVP Features //</span>
          <h2 className="licensing-headline">
            Everything You Need<br />
            <em>On One Campus Feed</em>
          </h2>
          <p className="licensing-body">
            The LinkMyCampus MVP brings together the core social experiences students expect — home feed, posts, groups, reels, and moderation — all scoped to your university.
          </p>
        </div>

        <div className="licensing-grid">
          <div className="licensing-actions">
            <div className="licensing-note">
              <div className="licensing-note-icon">
                <Shield className="lmc-icon lmc-icon--sm" strokeWidth={2} aria-hidden />
              </div>
              <span>
                Campus verification ensures only real students join. Reporting, automated filtering, and manual review keep anonymous conversations safe and respectful.
              </span>
            </div>
            <button className="cta-apply" onClick={() => openLoginModal('student')}>
              Get Early Access
            </button>
          </div>

          <div className="licensing-cards">
            <div className="lic-card">
              <div className="lic-solo-tag">Core</div>
              <h4 className="lic-card-title">Home Feed</h4>
              <p className="lic-card-body">Scroll campus posts, create text and image content, like, comment, and share. Chronological feed at launch — built for real-time campus buzz.</p>
            </div>
            <div className="lic-card">
              <h4 className="lic-card-title">Groups</h4>
              <p className="lic-card-body">Join faculty, department, class, hostel, and interest groups. Post and discuss with students who share your world on campus.</p>
            </div>
            <div className="lic-card">
              <h4 className="lic-card-title">Reels</h4>
              <p className="lic-card-body">Short-form vertical video for viral campus moments. Like, comment, and share student creativity — optimized for mobile discovery.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
