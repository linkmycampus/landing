import { GraduationCap, Sparkles, Building2 } from 'lucide-react';
import { useModal } from '../context/ModalContext';

const LoginSection = () => {
  const { openLoginModal } = useModal();

  return (
    <section className="login-section reveal">
      <div className="login-inner">
        <span className="section-kicker">// Get Started //</span>
        <h2 className="login-headline">
          Join Your <em>Campus Network</em>
        </h2>
        <p className="login-sub">
          Sign in or create your account. Verify your campus, set up your profiles, and start posting — visible or anonymous.
        </p>

        <div className="login-cards">
          <a
            href="#"
            className="login-card talent-card"
            onClick={(e) => {
              e.preventDefault();
              openLoginModal('student');
            }}
          >
            <div className="login-card-icon icon-talent">
              <GraduationCap className="lmc-icon lmc-icon--teal" strokeWidth={1.75} aria-hidden />
            </div>
            <div>
              <h4 className="login-card-title">Student</h4>
              <p className="login-card-body">Access your campus feed, post anonymously or visibly, join groups, and watch reels.</p>
            </div>
            <button type="button" className="login-card-btn login-card-btn--talent">Sign In as Student</button>
          </a>

          <a
            href="#"
            className="login-card employer-card"
            onClick={(e) => {
              e.preventDefault();
              openLoginModal('creator');
            }}
          >
            <div className="login-card-icon icon-employer">
              <Sparkles className="lmc-icon" strokeWidth={1.75} aria-hidden />
            </div>
            <div>
              <h4 className="login-card-title">Creator</h4>
              <p className="login-card-body">Build your campus audience with reels, posts, and viral campus content.</p>
            </div>
            <button type="button" className="login-card-btn login-card-btn--employer">Sign In as Creator</button>
          </a>

          <a
            href="#"
            className="login-card mentor-card"
            onClick={(e) => {
              e.preventDefault();
              openLoginModal('organization');
            }}
          >
            <div className="login-card-icon icon-mentor">
              <Building2 className="lmc-icon lmc-icon--mentor" strokeWidth={1.75} aria-hidden />
            </div>
            <div>
              <h4 className="login-card-title">Organization</h4>
              <p className="login-card-body">Manage your student org, host group discussions, and reach members on campus.</p>
            </div>
            <button type="button" className="login-card-btn login-card-btn--mentor">Sign In as Organization</button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LoginSection;
